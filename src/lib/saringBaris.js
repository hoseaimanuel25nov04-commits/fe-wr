/**
 * lib/saringBaris.js
 * Saringan baris untuk sumber angka Dashboard & Rekap Periodik: { jd, field, where: { sumber_dana: 'RM' } } hanya
 * menjumlahkan `field` dari baris (baris_ke yang sama, UPT & minggu yang sama) yang kolom `sumber_dana`-nya = 'RM'.
 * Dipakai untuk jenis data multi-baris seperti Data Anggaran (Kode RO + Nama RO + Sumber Dana + Pagu + Realisasi).
 */

const kunci = (r, field) => `${r.jenis_data_id}|${r.upt_key}|${r.period_id}|${r.baris_ke ?? 1}|${field}`

/**
 * @param rows baris rekap_nilai (perlu jenis_data_id, upt_key, period_id, baris_ke, field_key, value_text/value)
 * @returns cocok(row, where) — true bila `where` kosong atau semua kolomnya bernilai sama pada baris yang sama
 */
export function buatSaringan(rows) {
  const teks = new Map()
  for (const r of rows || []) {
    const v = r.value_text ?? (r.value === null || r.value === undefined ? null : String(r.value))
    if (v !== null) teks.set(kunci(r, r.field_key), String(v).trim())
  }
  return (r, where) => !where || Object.entries(where).every(([f, v]) => v === '' || v == null || teks.get(kunci(r, f)) === String(v).trim())
}

/** Teks singkat saringan untuk label, mis. "Sumber Dana = RM". `labelOf(field)` mengembalikan label kolom. */
export const teksSaringan = (where, labelOf = f => f) =>
  Object.entries(where || {}).filter(([, v]) => v !== '' && v != null).map(([f, v]) => `${labelOf(f)} = ${v}`).join(', ')
