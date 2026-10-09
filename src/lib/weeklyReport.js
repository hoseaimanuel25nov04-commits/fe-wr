/**
 * lib/weeklyReport.js
 * Membaca "Form Weekly Report" UPT (formulir Excel: label di kiri, nilai di kanan) menjadi data per jenis data
 * mingguan (lihat be/scripts/seed-weekly-report.ts untuk jenis data & kolomnya).
 *
 * Nilai dicari berdasarkan LABEL di dalam bagiannya (mis. "Pagu Belanja Pegawai AWAL" di bawah "a). Belanja
 * Pegawai"), bukan nomor baris, sehingga tetap terbaca walau barisnya bergeser. Kolom formulir diasumsikan tetap
 * seperti template: label C/D dengan nilai di F (blok kiri), label J dengan nilai di L (blok kanan).
 * Fungsi murni (masukan: isi sheet sebagai array baris), dites di fe/test/weekly-report.test.mjs.
 */

const C = 2, D = 3, F = 5, H = 7, J = 9, L = 11

const teks = v => (v === null || v === undefined ? '' : v instanceof Date ? '' : String(v).trim())
const bukanCatatan = v => !(typeof v === 'string' && /^\s*\*/.test(v)) // "* Diisi link ..." = petunjuk, bukan nilai

/** Angka dari sel: angka asli, atau teks seperti "Rp45,077,545,000", "Rp.4.004.381.308", "6,835", "-" */
export function angka(v) {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null
  let s = teks(v).replace(/^rp\.?/i, '').replace(/\s/g, '')
  if (!s || /^-+$/.test(s) || !bukanCatatan(v)) return null
  if (s.endsWith('%')) return null // persentase dihitung ulang oleh aplikasi
  const titik = s.lastIndexOf('.'), koma = s.lastIndexOf(',')
  if (titik >= 0 && koma >= 0) s = titik > koma ? s.replace(/,/g, '') : s.replace(/\./g, '').replace(',', '.')
  else if (koma >= 0) s = /,\d{3}(,|$)/.test(s) ? s.replace(/,/g, '') : s.replace(',', '.')
  else if (titik >= 0 && /\.\d{3}(\.|$)/.test(s) && (s.match(/\./g).length > 1 || s.length > 4)) s = s.replace(/\./g, '')
  const n = Number(s)
  return Number.isFinite(n) ? n : null
}

const BULAN = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember']
/** Tanggal laporan: sel tanggal Excel, atau teks "24 September 2026". Hasil 'YYYY-MM-DD' atau null. */
export function tanggalLaporan(v) {
  if (v instanceof Date && !isNaN(v)) {
    // SheetJS bisa memberi tengah malam UTC atau tengah malam waktu lokal; ambil tanggal kalender yang dimaksud
    const utc = v.getUTCHours() === 0 && v.getUTCMinutes() === 0
    const [y, m, d] = utc ? [v.getUTCFullYear(), v.getUTCMonth(), v.getUTCDate()] : [v.getFullYear(), v.getMonth(), v.getDate()]
    return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
  }
  const m = /(\d{1,2})\s+([a-z]+)\s+(\d{4})/i.exec(teks(v))
  const b = m ? BULAN.indexOf(m[2].toLowerCase()) : -1
  return b >= 0 ? `${m[3]}-${String(b + 1).padStart(2, '0')}-${String(m[1]).padStart(2, '0')}` : null
}

/**
 * @param aoa isi sheet (XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, blankrows: true }), sel tanggal = Date)
 * @returns {{ upt: string, tanggal: string|null, kelompok: {key: string, baris: object[]}[], peringatan: string[] }}
 */
export function bacaWeeklyReport(aoa = []) {
  const g = aoa.map(r => r || [])
  const sel = (r, c) => (g[r] ? g[r][c] ?? null : null)
  const peringatan = []
  const cari = (re, cols, dari = 0, sampai = g.length) => {
    for (let r = Math.max(0, dari); r < Math.min(sampai, g.length); r++) for (const c of cols) if (re.test(teks(sel(r, c)))) return r
    return -1
  }

  // Batas bagian: 1 (anggaran balai), 2 (sumber anggaran), 3 (capaian pelatihan)
  const b1 = cari(/^1\.\s*REALISASI ANGGARAN/i, [1, 2])
  const b2 = cari(/^2\.\s*REALISASI ANGGARAN/i, [1, 2])
  const b3 = cari(/^3\.\s*CAPAIAN/i, [1, 2])
  if (b1 < 0 && b2 < 0 && b3 < 0) throw new Error('Berkas ini bukan Form Weekly Report (bagian "1. REALISASI ANGGARAN" dan "3. CAPAIAN KEGIATAN" tidak ditemukan).')

  const rUpt = cari(/^UPT$/i, [1, 2])
  const rTgl = cari(/WEEKLY REPORT/i, [1, 2])
  const upt = rUpt >= 0 ? teks(sel(rUpt, F)) : ''
  const tanggal = rTgl >= 0 ? tanggalLaporan(sel(rTgl, F)) : null

  /** Ambil nilai label dalam satu blok baris: aturan = [[regexLabel, field_key]]. Label yang muncul dua kali -> peringatan. */
  function blok(dari, sampai, kolLabel, kolNilai, aturan, namaBlok, ambil = angka) {
    const out = {}
    for (let r = dari; r < sampai && r < g.length; r++) {
      const label = teks(sel(r, kolLabel))
      if (!label) continue
      const cocok = aturan.find(([re]) => re.test(label))
      if (!cocok) continue
      const nilai = ambil(sel(r, kolNilai))
      if (cocok[1] in out) {
        if (nilai !== null && nilai !== out[cocok[1]]) peringatan.push(`${namaBlok}: "${label}" muncul lagi di baris ${r + 1} (${nilai.toLocaleString?.('id-ID') ?? nilai}); yang dipakai nilai pertama.`)
        continue
      }
      out[cocok[1]] = nilai
    }
    return out
  }
  const isi = o => Object.values(o).some(v => v !== null && v !== '')
  const bersih = o => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== null && v !== ''))
  const kelompok = []
  const tambah = (key, baris) => { const b = baris.map(bersih).filter(x => Object.keys(x).length); if (b.length) kelompok.push({ key, baris: b }) }

  // ---- 1a-c. Anggaran per jenis belanja -> Data Anggaran (1 baris per jenis belanja, namanya masuk Nama RO).
  // Pagu = pagu AWAL formulir (bila kosong, pagu AKTIF). Kode RO & sumber dana dibiarkan kosong: formulir tidak
  // memuatnya, jadi UPT melengkapinya sendiri di Input Mingguan.
  const akhir1 = b2 > 0 ? b2 : g.length
  const belanja = []
  for (const nama of ['Pegawai', 'Barang', 'Modal']) {
    const r0 = cari(new RegExp(`^[a-z]\\)\\.?\\s*Belanja ${nama}`, 'i'), [C], b1, akhir1)
    if (r0 < 0) continue
    const v = blok(r0 + 1, r0 + 6, D, F, [[/AWAL/i, 'awal'], [/AKTIF/i, 'aktif'], [/^Realisasi/i, 'realisasi']], `Belanja ${nama}`)
    if (isi(v)) belanja.push({ nama_ro: `Belanja ${nama}`, pagu: v.awal ?? v.aktif ?? null, realisasi: v.realisasi ?? null })
  }
  tambah('data_anggaran', belanja)

  // ---- 1. PNBP & MP PNBP (blok kanan)
  const pnbp = {}
  const rPnbp = cari(/Target dan Realisasi (PNBP|PNPB)/i, [H], b1, akhir1)
  if (rPnbp >= 0) Object.assign(pnbp, blok(rPnbp + 1, rPnbp + 6, J, L, [[/Target Penerimaan/i, 'target_penerimaan_pnbp'], [/^Realisasi PNBP/i, 'realisasi_pnbp']], 'PNBP'))
  if (rPnbp >= 0) Object.assign(pnbp, blok(rPnbp + 1, rPnbp + 6, J, L, [[/Data Dukung/i, 'link_data_dukung_pnbp']], 'PNBP', v => (bukanCatatan(v) ? teks(v) || null : null)))
  const rMp = cari(/Realisasi MP (PNBP|PNPB)/i, [H], b1, akhir1)
  // Formulir hanya punya satu MP: Pagu Total MP -> Pagu MP 1, Realisasi MP -> Realisasi MP 1 (MP 2-5 diisi di aplikasi)
  if (rMp >= 0) Object.assign(pnbp, blok(rMp + 1, rMp + 6, J, L, [[/Pagu Total MP/i, 'pagu_mp_1'], [/Realisasi MP/i, 'realisasi_mp_1']], 'MP PNBP'))
  if (isi(pnbp)) tambah('pnbp_dan_mp_pnbp', [pnbp])

  // ---- 2a-c. Anggaran per sumber dana: TIDAK diimpor (angka yang sama dengan per jenis belanja, hanya dirinci
  // berbeda); dibaca untuk pemeriksaan silang total di bawah.
  const akhir2 = b3 > 0 ? b3 : g.length
  const dana = []
  for (const [re, nama] of [[/Rupiah Murni|\(RM\)/i, 'RM'], [/PNBP\s*\/\s*BLU/i, 'PNBP/BLU'], [/SBSN/i, 'SBSN']]) {
    const r0 = cari(new RegExp(`^[a-z]\\)\\.?.*(${re.source})`, 'i'), [C], b2, akhir2)
    if (r0 < 0) continue
    const v = blok(r0 + 1, r0 + 6, D, F, [[/AWAL/i, 'awal'], [/AKTIF/i, 'aktif'], [/^Realisasi/i, 'realisasi']], `Sumber dana ${nama}`)
    dana.push({ pagu: v.awal ?? v.aktif ?? null, realisasi: v.realisasi ?? null })
  }

  // ---- 3.3 Lulusan DUDIKA
  const rDudika = cari(/Lulusan DUDIKA/i, [D], b3)
  if (rDudika >= 0) {
    const dudika = blok(rDudika + 1, rDudika + 10, D, F, [[/Target DUDIKA/i, 'target_dudika'], [/Capaian Pelatihan/i, 'capaian_pelatihan'], [/Realisasi DUDIKA/i, 'realisasi_dudika']], 'DUDIKA')
    if (isi(dudika)) tambah('lulusan_dudika', [dudika])
  }

  // ---- 3.4 Pelatihan Non-APBN (tabel bebas, berhenti setelah 3 baris kosong berturut-turut)
  const rNon = cari(/Non-?APBN/i, [D], b3)
  if (rNon >= 0) {
    const rJudul = cari(/Nama Pelatihan/i, [D], rNon, rNon + 5)
    if (rJudul >= 0) {
      const kol = { nama_pelatihan: D }
      for (let c = D + 1; c <= J; c++) {
        const h = teks(sel(rJudul, c))
        if (/Jumlah Peserta/i.test(h)) kol.jumlah_peserta = c
        else if (/Sasaran/i.test(h)) kol.sasaran = c
        else if (/Keterangan/i.test(h)) kol.keterangan = c
      }
      const baris = []
      for (let r = rJudul + 1, kosong = 0; r < g.length && kosong < 3; r++) {
        const nama = teks(sel(r, D))
        if (!nama) { kosong++; continue }
        kosong = 0
        baris.push({ nama_pelatihan: nama, jumlah_peserta: kol.jumlah_peserta !== undefined ? angka(sel(r, kol.jumlah_peserta)) : null, sasaran: kol.sasaran !== undefined ? teks(sel(r, kol.sasaran)) || null : null, keterangan: kol.keterangan !== undefined ? teks(sel(r, kol.keterangan)) || null : null })
      }
      tambah('pelatihan_non_apbn', baris)
    }
  }

  // ---- Pemeriksaan silang: total per jenis belanja harus sama dengan total per sumber dana
  const total = (list, k) => list.reduce((a, r) => a + (r[k] || 0), 0)
  const rp = n => `Rp${n.toLocaleString('id-ID')}`
  for (const [k, nama] of [['pagu', 'Pagu'], ['realisasi', 'Realisasi']]) {
    const a = total(belanja, k), b = total(dana, k)
    if (a && b && a !== b) peringatan.push(`${nama} per jenis belanja (${rp(a)}) tidak sama dengan per sumber dana (${rp(b)}), selisih ${rp(Math.abs(a - b))}.`)
  }

  return { upt, tanggal, kelompok, peringatan }
}
