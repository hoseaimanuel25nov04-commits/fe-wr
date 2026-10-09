/**
 * Tes pembaca Form Weekly Report (fe/src/lib/weeklyReport.js) memakai formulir tiruan bertata letak sama dengan
 * template UPT (label C/D, nilai F; blok kanan J/L; tabel F-J). Data asli UPT sengaja tidak disimpan di repo.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bacaWeeklyReport, angka, tanggalLaporan } from '../src/lib/weeklyReport.js'

// Susun grid dari { 'F14': nilai, ... }
function form(sel) {
  const g = []
  for (const [addr, v] of Object.entries(sel)) {
    const m = /^([A-Z])(\d+)$/.exec(addr)
    const r = Number(m[2]) - 1, c = m[1].charCodeAt(0) - 65
    g[r] = g[r] || []
    g[r][c] = v
  }
  return Array.from({ length: g.length }, (_, i) => g[i] || [])
}

const CONTOH = form({
  B5: 'UPT', E5: ':', F5: 'BPPP CONTOH',
  B6: 'WEEKLY REPORT (Tanggal)', E6: ':', F6: '24 September 2026',
  B13: '1. REALISASI ANGGARAN BALAI/SATMINKAL',
  C19: 'a). Belanja Pegawai', H19: 'Target dan Realisasi PNPB ',
  D20: 'Pagu Belanja Pegawai AWAL (Rp)', F20: 1000, J20: 'Target Penerimaan PNBP (Rp)', L20: 'Rp.2,000,000',
  D21: 'Pagu Belanja Pegawai AKTIF (Rp)', F21: 900, J21: 'Realisasi PNBP (Rp)', L21: 1500000,
  D22: 'Realisasi (Rp)', F22: 400, J23: 'Data Dukung', L24: '* Data dukung berbentuk link',
  D23: 'Persentase (%)', F23: '44.44%',
  D24: 'Realisasi (Rp)', F24: 7, // baris tercecer, muncul dua kali
  B37: '2. REALISASI ANGGARAN BERDASARKAN SUMBER ANGGARAN',
  C44: 'a). Rupiah Murni (RM)', D45: 'Pagu RM AWAL (Rp)', F45: 1050, D46: 'Pagu RM AKTIF (Rp)', F46: 950, D47: 'Realisasi (Rp)', F47: 400,
  B62: '3. CAPAIAN KEGIATAN PELATIHAN KP',
  D64: 'Detail Capaian Pelatihan Bagi Masyarakat Per Program Prioritas',
  F65: 'Target Output DIPA Awal', G65: 'Target Berdasarkan Anggaran Efektif', H65: 'Realisasi', J65: 'Link Bukti Dukung',
  D66: 'Konservasi Laut (orang)', K66: '* Diisi Link Drive Folder Laporan Pelatihan',
  D67: 'Penangkapan Ikan Terukur Berbasis Kuota (orang)', H67: 60, J67: 'https://drive.example/folder',
  D68: 'Pengembangan Budidaya Air Laut, Tawar, Payau yang Berkelanjutan (orang)', H68: 40,
  D69: 'Program Tak Dikenal (orang)', H69: 5,
  D72: 'Jumlah Realisasi (Orang)', H72: 99,
  D106: 'Jenis Masyarakat Dilatih Berdasarkan Pembiayaan: ',
  D107: 'a). Aspirasi', D110: 'Target (Orang)', F110: 50, J110: 'Pagu Awal (Rp)', L110: 700,
  D111: 'Realisasi (Orang)', F111: 30, J111: 'Pagu Aktif (Rp)', L111: 650,
  J112: 'Realisasi (Rp)', L112: 300,
  D113: 'Realisasi (Orang)', F113: 7, // baris tercecer, muncul dua kali
  D129: 'Jenis Masyarakat Dilatih Berdasarkan Metode: ',
  D183: 'Lulusan DUDIKA (76% dari realisasi Pelatihan)', D186: 'Target DUDIKA Sesuai PK (Orang)', F186: 80, D187: 'Capaian Pelatihan (Orang)', F187: 100, D188: 'Realisasi DUDIKA (Orang)', F188: 60,
  D192: 'Realisasi Pelatihan Non-APBN Lingkup Puslat KP',
  C194: 'No', D194: 'Nama Pelatihan', E194: 'Jumlah Peserta', F194: 'Sasaran (misal: Masyarakat)', G194: 'Keterangan (Misal: Mitra xxx)',
  C195: 1, D195: 'Pelatihan Mitra A', E195: 25, F195: 'Masyarakat', G195: 'Mitra A',
  N208: 'BPPP AMBON', // daftar pilihan dropdown di bawah formulir: bukan data
})

const hasil = bacaWeeklyReport(CONTOH)
const kel = key => hasil.kelompok.find(k => k.key === key)?.baris

test('identitas laporan: UPT & tanggal', () => {
  assert.equal(hasil.upt, 'BPPP CONTOH')
  assert.equal(hasil.tanggal, '2026-09-24')
})

test('Data Anggaran: 1 baris per jenis belanja, pagu = pagu AWAL, sumber dana kosong; persentase diabaikan', () => {
  assert.deepEqual(kel('data_anggaran'), [{ nama_ro: 'Belanja Pegawai', pagu: 1000, realisasi: 400 }])
})

test('pagu AWAL kosong -> pakai pagu AKTIF', () => {
  const h = bacaWeeklyReport(form({ B13: '1. REALISASI ANGGARAN BALAI', C19: 'b). Belanja Barang', D20: 'Pagu Belanja Barang AWAL (Rp)', F20: '-', D21: 'Pagu Belanja Barang AKTIF (Rp)', F21: 800, D22: 'Realisasi (Rp)', F22: 100 }))
  assert.deepEqual(h.kelompok, [{ key: 'data_anggaran', baris: [{ nama_ro: 'Belanja Barang', pagu: 800, realisasi: 100 }] }])
})

test('label yang muncul dua kali diperingatkan, nilai pertama dipakai', () => {
  assert.ok(hasil.peringatan.some(p => /Belanja Pegawai.*baris 24/.test(p)))
})

test('PNBP di blok kanan (ejaan "PNPB" di formulir), catatan bertanda * bukan nilai', () => {
  assert.deepEqual(kel('pnbp_dan_mp_pnbp'), [{ target_penerimaan_pnbp: 2000000, realisasi_pnbp: 1500000 }])
})

test('hanya jenis data yang masih ada yang diimpor (per sumber dana & tabel capaian rinci tidak)', () => {
  assert.deepEqual(hasil.kelompok.map(k => k.key).sort(), ['data_anggaran', 'lulusan_dudika', 'pelatihan_non_apbn', 'pnbp_dan_mp_pnbp'])
})

test('DUDIKA dan tabel Non-APBN', () => {
  assert.deepEqual(kel('lulusan_dudika'), [{ target_dudika: 80, capaian_pelatihan: 100, realisasi_dudika: 60 }])
  assert.deepEqual(kel('pelatihan_non_apbn'), [{ nama_pelatihan: 'Pelatihan Mitra A', jumlah_peserta: 25, sasaran: 'Masyarakat', keterangan: 'Mitra A' }])
})

test('selisih pagu jenis belanja vs sumber dana diperingatkan', () => {
  assert.ok(hasil.peringatan.some(p => /selisih Rp50/.test(p)))
})

test('bukan formulir Weekly Report -> pesan jelas', () => {
  assert.throws(() => bacaWeeklyReport([['Nama', 'NIK'], ['Budi', '1']]), /bukan Form Weekly Report/)
})

test('angka dari berbagai format teks', () => {
  assert.equal(angka('Rp45,077,545,000'), 45077545000)
  assert.equal(angka('Rp.4.004.381.308'), 4004381308)
  assert.equal(angka(' 6,835 '), 6835)
  assert.equal(angka('Rp-'), null)
  assert.equal(angka('54.09%'), null)
  assert.equal(angka('* diisi manual'), null)
  assert.equal(tanggalLaporan(new Date(Date.UTC(2026, 8, 24))), '2026-09-24')
})

test('MP PNBP: Pagu Total MP -> Pagu MP 1, Realisasi MP -> Realisasi MP 1, Pagu MP I diabaikan', () => {
  const h = bacaWeeklyReport(form({
    B13: '1. REALISASI ANGGARAN BALAI', H25: 'Target dan Realisasi MP PNPB',
    J26: 'Pagu Total MP PNBP (Rp)', L26: 400, J27: 'Pagu MP I PNBP (Rp)', L27: 400, J28: 'Realisasi MP PNBP (Rp)', L28: 300,
  }))
  assert.deepEqual(h.kelompok, [{ key: 'pnbp_dan_mp_pnbp', baris: [{ pagu_mp_1: 400, realisasi_mp_1: 300 }] }])
})
