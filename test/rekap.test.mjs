/**
 * Tes rumus rekap di frontend (fe/src/lib). Tidak butuh browser maupun backend.
 *   npm test   (dari folder fe)
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { applyAgregasi, combineUpt, weekValues, aggregateRows } from '../src/lib/agregasi.js'
import { peranLama, buatPetaPeran, peranKolom, tebakPeran, peranUntukTipe } from '../src/lib/peranRekap.js'
import { generatePeriods, weeksOfMonth, sortPeriods } from '../src/lib/periods.js'

test('cara rekap mingguan -> bulan/triwulan/tahun', () => {
  const minggu = [10, null, 30, '', 20]
  assert.equal(applyAgregasi(minggu, 'sum'), 60)
  assert.equal(applyAgregasi(minggu, 'last'), 20) // angka kumulatif: nilai terakhir yang terisi
  assert.equal(applyAgregasi(minggu, 'avg'), 20)
  assert.equal(applyAgregasi(minggu, 'max'), 30)
  assert.equal(applyAgregasi([], 'sum'), 0)
  assert.equal(applyAgregasi([null], 'last'), null)
})

test('gabungan antar UPT', () => {
  assert.equal(combineUpt([5, 7, null], 'sum'), 12)
  assert.equal(combineUpt([5, 7], 'last'), 12) // nilai terakhir tiap UPT dijumlahkan
  assert.equal(combineUpt([4, 8], 'avg'), 6)
  assert.equal(combineUpt([4, 8], 'max'), 8)
})

test('beberapa baris (pelatihan) dalam satu minggu', () => {
  const out = weekValues([
    { field_key: 'jumlah_peserta', value: 20 },
    { field_key: 'jumlah_peserta', value: 15 },
    { field_key: 'nama_pelatihan', value: null, value_text: 'Diklat A' },
    { field_key: 'nama_pelatihan', value: null, value_text: 'Diklat B' },
    { field_key: 'nama_pelatihan', value: null, value_text: 'Diklat A' },
  ])
  assert.equal(out.jumlah_peserta, 35)
  assert.equal(out.nama_pelatihan, 'Diklat A · Diklat B')
})

test('aggregateRows memakai cara rekap per kolom dan urutan minggu', () => {
  const fieldDefs = [
    { jenis_data_id: 'j', field_key: 'peserta', agregasi: 'sum' },
    { jenis_data_id: 'j', field_key: 'pagu', agregasi: 'last' },
  ]
  const rows = [
    { jenis_data_id: 'j', upt_key: 'u', period_id: 'w2', field_key: 'pagu', value: 90 },
    { jenis_data_id: 'j', upt_key: 'u', period_id: 'w1', field_key: 'pagu', value: 50 },
    { jenis_data_id: 'j', upt_key: 'u', period_id: 'w1', field_key: 'peserta', value: 10 },
    { jenis_data_id: 'j', upt_key: 'u', period_id: 'w2', field_key: 'peserta', value: 5 },
  ]
  const hasil = Object.fromEntries(aggregateRows(rows, ['w1', 'w2'], fieldDefs).map(r => [r.field_key, r.value]))
  assert.deepEqual(hasil, { peserta: 15, pagu: 90 })
})

test('peran rekap: aturan nama lama sama dengan isian migrasi_16', () => {
  assert.equal(peranLama('nama_pelatihan'), 'judul')
  assert.equal(peranLama('jumlah_peserta'), 'peserta')
  assert.equal(peranLama('pagu_belanja_modal'), 'pagu')
  assert.equal(peranLama('realisasi_anggaran'), 'realisasi')
  assert.equal(peranLama('realisasi_fisik'), null)
  assert.equal(peranLama('lokasi'), null)
})

test('peran rekap: pilihan Admin mengalahkan nama kolom', () => {
  const peta = buatPetaPeran([
    { jenis_data_id: 'j', field_key: 'banyak_lulusan', peran_rekap: 'peserta' },
    { jenis_data_id: 'j', field_key: 'jumlah_peserta', peran_rekap: null }, // sengaja "tidak dihitung"
    { jenis_data_id: 'k', field_key: 'jumlah_peserta' },                    // DB tanpa migrasi_16
  ])
  assert.equal(peranKolom(peta, 'j', 'banyak_lulusan'), 'peserta')
  assert.equal(peranKolom(peta, 'j', 'jumlah_peserta'), null)
  assert.equal(peranKolom(peta, 'k', 'jumlah_peserta'), 'peserta')
  assert.equal(peranKolom(peta, 'x', 'pagu_2026'), 'pagu') // kolom yang definisinya sudah dihapus
})

test('peran rekap: tebakan dari nama kolom baru', () => {
  assert.equal(tebakPeran('Jumlah Lulusan', 'angka'), 'peserta')
  assert.equal(tebakPeran('Pagu Anggaran', 'angka'), 'pagu')
  assert.equal(tebakPeran('Realisasi Tahap 2', 'angka'), 'realisasi')
  assert.equal(tebakPeran('Realisasi Fisik (%)', 'angka'), null)
  assert.equal(tebakPeran('Nama Pelatihan', 'teks'), 'judul')
  assert.equal(tebakPeran('Nama Pelatihan', 'angka'), null)
  assert.deepEqual(peranUntukTipe('tanggal'), [])
})

test('periode satu tahun: 1 tahun + 4 triwulan + 12 bulan + 48 minggu', () => {
  const p = generatePeriods(2026)
  const hitung = lvl => p.filter(x => x.level === lvl).length
  assert.deepEqual([hitung('tahun'), hitung('triwulan'), hitung('bulan'), hitung('minggu')], [1, 4, 12, 48])
  const mingguMaret = weeksOfMonth(sortPeriods(p), 2026, 3)
  assert.deepEqual(mingguMaret.map(m => m.minggu_ke), [1, 2, 3, 4])
})

test('saringan baris (Dashboard/Rekap): hanya baris dengan pilihan yang sama di baris_ke yang sama', async () => {
  const { buatSaringan, teksSaringan } = await import('../src/lib/saringBaris.js')
  const base = { jenis_data_id: 'ag', upt_key: 'u1', period_id: 'w1' }
  const rows = [
    { ...base, baris_ke: 1, field_key: 'sumber_dana', value_text: 'RM' }, { ...base, baris_ke: 1, field_key: 'pagu', value: 100 },
    { ...base, baris_ke: 2, field_key: 'sumber_dana', value_text: 'SBSN' }, { ...base, baris_ke: 2, field_key: 'pagu', value: 50 },
    { ...base, baris_ke: 3, field_key: 'pagu', value: 7 }, // sumber dana belum diisi
  ]
  const cocok = buatSaringan(rows)
  const pagu = where => rows.filter(r => r.field_key === 'pagu' && cocok(r, where)).reduce((a, r) => a + r.value, 0)
  assert.equal(pagu({ sumber_dana: 'RM' }), 100)
  assert.equal(pagu({ sumber_dana: 'SBSN' }), 50)
  assert.equal(pagu(undefined), 157)
  assert.equal(teksSaringan({ sumber_dana: 'RM' }, () => 'Sumber Dana'), 'Sumber Dana = RM')
})

test('kartu rekap per jenis data & kolom hitung DUDIKA', async () => {
  const { hitungKartu, KARTU_REKAP, formatKartu } = await import('../src/lib/kartuRekap.js')
  const { persen, denganHitung } = await import('../src/lib/kolomHitung.js')
  assert.equal(persen(60, 80), 75)
  assert.equal(persen(1, 3), 33.3)
  assert.equal(persen(5, 0), null)
  assert.equal(denganHitung('lulusan_dudika', { capaian_pelatihan: 80, realisasi_dudika: 60 })._persentase_realisasi_dudika, 75)
  const b = { jenis_data_id: 'i', upt_key: 'u', period_id: 'w' }
  const rows = [
    { ...b, baris_ke: 1, field_key: 'jenis_instruktur_wi', value_text: 'Instruktur' }, { ...b, baris_ke: 1, field_key: 'jumlah', value: 10 },
    { ...b, baris_ke: 2, field_key: 'jenis_instruktur_wi', value_text: 'Widyaiswara' }, { ...b, baris_ke: 2, field_key: 'jumlah', value: 5 },
  ]
  const k = hitungKartu(KARTU_REKAP.data_instruktur_dan_wi, rows)
  assert.deepEqual(k.map(x => x.nilai), [10, 5, 15])
  const d = hitungKartu(KARTU_REKAP.lulusan_dudika, [{ ...b, field_key: 'capaian_pelatihan', value: 80 }, { ...b, field_key: 'realisasi_dudika', value: 60 }])
  assert.equal(formatKartu(d[2]), '75%')
  const nonApbn = hitungKartu(KARTU_REKAP.pelatihan_non_apbn, [{ ...b, baris_ke: 1, field_key: 'nama_pelatihan', value_text: 'A' }, { ...b, baris_ke: 1, field_key: 'jumlah_peserta', value: 25 }, { ...b, baris_ke: 2, field_key: 'nama_pelatihan', value_text: 'B' }])
  assert.deepEqual(nonApbn.map(x => x.nilai), [2, 25])
})
