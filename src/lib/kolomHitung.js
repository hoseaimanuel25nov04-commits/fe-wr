/**
 * lib/kolomHitung.js
 * Kolom yang DIHITUNG otomatis dari kolom lain pada baris yang sama (tidak disimpan, tidak bisa diubah), mis.
 * persentase Realisasi DUDIKA terhadap Capaian Pelatihan. Tampil di tabel rekap, tabel Input Mingguan, dan di
 * bawah form isian. Kunci = jenis_data.key.
 */

/** a / b x 100, dibulatkan 1 desimal. null bila salah satu kosong atau pembagi 0. */
export function persen(a, b) {
  const x = Number(a), y = Number(b)
  if (a === null || a === undefined || a === '' || b === null || b === undefined || b === '' || !Number.isFinite(x) || !Number.isFinite(y) || y === 0) return null
  return Math.round((x / y) * 1000) / 10
}

export const KOLOM_HITUNG = {
  lulusan_dudika: [
    {
      field_key: '_persentase_realisasi_dudika',
      label: 'Persentase Realisasi DUDIKA (%) (Luring)',
      keterangan: 'Realisasi DUDIKA ÷ Capaian Pelatihan × 100',
      hitung: v => persen(v.realisasi_dudika, v.capaian_pelatihan),
    },
  ],
}

/** Kolom hitung jenis data ini, dalam bentuk definisi kolom (tipe angka, ditandai `hitung`). */
export const kolomHitungOf = jenisKey => (KOLOM_HITUNG[jenisKey] || []).map(k => ({ ...k, tipe: 'angka', hitung: k.hitung }))

/** values + nilai kolom hitung. */
export function denganHitung(jenisKey, values = {}) {
  const extra = {}
  for (const k of KOLOM_HITUNG[jenisKey] || []) {
    const v = k.hitung(values)
    if (v !== null) extra[k.field_key] = v
  }
  return { ...values, ...extra }
}
