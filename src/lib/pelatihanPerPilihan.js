/**
 * lib/pelatihanPerPilihan.js
 * Jumlah pelatihan per UPT menurut isian kolom pilihan (mis. Sumber Dana, Metode Pelatihan). Satu pelatihan = satu
 * baris (UPT, periode, baris_ke) yang kolom berperan "Judul baris"-nya terisi. Dipakai grafik rekap
 * (components/AdminPeriodRecap.jsx); Dashboard memakai sumber FIELD_PELATIHAN di lib/dashboardWidgets.js.
 */

export const BELUM_DIISI = 'Belum diisi'

/** Pilihan sebuah kolom (opsi_pilihan bisa berupa teks JSON atau array). */
export function opsiKolom(f) {
  try {
    const o = typeof f?.opsi_pilihan === 'string' ? JSON.parse(f.opsi_pilihan) : f?.opsi_pilihan
    return Array.isArray(o) ? o : []
  } catch {
    return []
  }
}

/**
 * @param rows baris rekap_nilai (jenis_data_id, upt_key, period_id, baris_ke, field_key, value/value_text)
 * @returns { [upt_key]: { [pilihan]: jumlah } } — baris tanpa isian pilihan dihitung sebagai BELUM_DIISI
 */
export function pelatihanPerPilihan(rows, { jenisDataId, kolomJudul, kolomPilihan }) {
  const baris = new Map()
  for (const r of rows || []) {
    if (r.jenis_data_id !== jenisDataId || (r.field_key !== kolomJudul && r.field_key !== kolomPilihan)) continue
    const k = `${r.upt_key}|${r.period_id}|${r.baris_ke ?? 1}`
    if (!baris.has(k)) baris.set(k, { upt: r.upt_key, judul: false, pilihan: '' })
    const b = baris.get(k)
    const v = String(r.value_text ?? r.value ?? '').trim()
    if (r.field_key === kolomJudul) b.judul = v !== ''
    else b.pilihan = v
  }
  const hasil = {}
  for (const b of baris.values()) {
    if (!b.judul) continue
    const p = b.pilihan || BELUM_DIISI
    hasil[b.upt] ??= {}
    hasil[b.upt][p] = (hasil[b.upt][p] || 0) + 1
  }
  return hasil
}
