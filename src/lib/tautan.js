/**
 * lib/tautan.js
 * Kolom bertipe Berkas bisa berisi salah satu dari dua: id berkas unggahan (field_files) ATAU link data dukung
 * (mis. folder Google Drive). Hanya alamat http/https yang dianggap link — bentuk lain (mis. "javascript:...") tidak
 * pernah dijadikan href, supaya isian tidak bisa dipakai untuk menjalankan skrip.
 */

export const isTautan = v => typeof v === 'string' && /^https?:\/\/[^\s<>"']+$/i.test(v.trim())

/** Kenali URL polos atau teks hyperlink impor Excel dengan format "label — URL". */
export function tautanDariTeks(value) {
  const text = String(value ?? '').trim()
  if (isTautan(text)) return { url: text, label: '' }
  const match = text.match(/https?:\/\/[^\s<>"']+/i)
  if (!match) return null
  const url = match[0].replace(/[),.;]+$/, '')
  if (!isTautan(url)) return null
  const label = text.slice(0, match.index).replace(/[\s—–|:]+$/, '').trim()
  return { url, label }
}

/** Nilai kolom Berkas untuk Excel: link ditulis apa adanya, berkas unggahan diberi keterangan. */
export const berkasUntukExcel = v => (isTautan(v) ? v.trim() : v ? '(berkas — unduh di web)' : '')
