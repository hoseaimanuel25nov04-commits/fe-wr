/**
 * lib/kartuRekap.js
 * Kartu ringkasan di atas tabel Input Mingguan saat SATU jenis data dipilih. Bawaannya Total Pelatihan / Total
 * Peserta / Total Realisasi Anggaran; jenis data di bawah ini memakai kartu yang sesuai isinya.
 *
 * Bentuk kartu:
 *   { label, jumlah: [field_key...], where?, satuan: 'angka'|'rupiah'|'persen', sorot? }  -> jumlah nilai
 *   { label, hitungBaris: field_key }                                                       -> banyak baris terisi
 *   { label, rasio: [kartuPembilang, kartuPenyebut] }                                       -> persen
 */
import { buatSaringan } from './saringBaris.js'
import { persen } from './kolomHitung.js'

const mp = jenis => Array.from({ length: 5 }, (_, i) => `${jenis}_mp_${i + 1}`)

export const KARTU_REKAP = {
  data_instruktur_dan_wi: [
    { label: 'Total Instruktur', jumlah: ['jumlah'], where: { jenis_instruktur_wi: 'Instruktur' } },
    { label: 'Total Widyaiswara', jumlah: ['jumlah'], where: { jenis_instruktur_wi: 'Widyaiswara' } },
    { label: 'Total Instruktur & Widyaiswara', jumlah: ['jumlah'], sorot: true },
  ],
  data_belanja_modal: [
    { label: 'Total Kegiatan', hitungBaris: 'judul_kegiatan' },
    { label: 'Total Pagu', jumlah: ['pagu_anggaran'], satuan: 'rupiah' },
    { label: 'Total Realisasi Anggaran', jumlah: ['realisasi_anggaran'], satuan: 'rupiah', sorot: true },
  ],
  data_anggaran: [
    { label: 'Total Pagu', jumlah: ['pagu'], satuan: 'rupiah' },
    { label: 'Total Realisasi Anggaran', jumlah: ['realisasi'], satuan: 'rupiah', sorot: true },
    { label: 'Persentase Realisasi', rasio: [{ jumlah: ['realisasi'] }, { jumlah: ['pagu'] }] },
  ],
  pnbp_dan_mp_pnbp: [
    { label: 'Realisasi PNBP', jumlah: ['realisasi_pnbp'], satuan: 'rupiah', sorot: true },
    { label: 'Total Realisasi MP (MP 1–5)', jumlah: mp('realisasi'), satuan: 'rupiah' },
    { label: 'Persentase Realisasi PNBP', rasio: [{ jumlah: ['realisasi_pnbp'] }, { jumlah: ['target_penerimaan_pnbp'] }] },
  ],
  lulusan_dudika: [
    { label: 'Capaian Pelatihan (Orang) (Luring)', jumlah: ['capaian_pelatihan'] },
    { label: 'Realisasi DUDIKA (Orang) (Luring)', jumlah: ['realisasi_dudika'] },
    { label: 'Persentase Realisasi DUDIKA (Luring)', rasio: [{ jumlah: ['realisasi_dudika'] }, { jumlah: ['capaian_pelatihan'] }], sorot: true },
  ],
  pelatihan_non_apbn: [
    { label: 'Total Pelatihan', hitungBaris: 'nama_pelatihan' },
    { label: 'Total Peserta', jumlah: ['jumlah_peserta'], sorot: true },
  ],
}

const kosong = v => v === null || v === undefined || v === ''

/**
 * Nilai tiap kartu dari baris rekap_nilai SATU jenis data (sudah disaring UPT & status oleh pemanggil).
 * @returns [{ ...kartu, nilai: number|null }]
 */
export function hitungKartu(kartuList, rows = []) {
  const cocok = buatSaringan(rows)
  const nilai = k => {
    if (k.hitungBaris) {
      return new Set(rows.filter(r => r.field_key === k.hitungBaris && !kosong(r.value_text ?? r.value)).map(r => `${r.upt_key}|${r.period_id}|${r.baris_ke ?? 1}`)).size
    }
    if (k.rasio) return persen(nilai(k.rasio[0]), nilai(k.rasio[1]))
    return rows.filter(r => k.jumlah.includes(r.field_key) && !kosong(r.value) && cocok(r, k.where)).reduce((a, r) => a + Number(r.value), 0)
  }
  return kartuList.map(k => ({ ...k, satuan: k.rasio ? 'persen' : k.satuan || 'angka', nilai: nilai(k) }))
}

export function formatKartu(k) {
  if (k.nilai === null || k.nilai === undefined) return '—'
  if (k.satuan === 'rupiah') return `Rp ${Number(k.nilai).toLocaleString('id-ID')}`
  if (k.satuan === 'persen') return `${Number(k.nilai).toLocaleString('id-ID')}%`
  return Number(k.nilai).toLocaleString('id-ID')
}
