/**
 * lib/angka.js
 * Format angka Indonesia: titik pemisah ribuan, koma desimal (1.500.000,5), dan penentu kolom rupiah.
 */

/** Kolom angka bernilai rupiah: label memuat "(Rp)"/"rupiah", atau kode kolom anggaran (pagu, realisasi anggaran, PNBP). */
export function isRupiahField(f) {
  if (!f || (f.tipe && f.tipe !== 'angka')) return false
  const label = String(f.label || '')
  if (/\(\s*rp\s*\)|rupiah/i.test(label)) return true
  if (/%|persen/i.test(label)) return false
  const key = String(f.field_key || '')
  return /pagu|anggaran|belanja|pnbp|sbsn/.test(key) || /^realisasi(_mp_\d+)?$/.test(key)
}

/** 1500000.5 -> "1.500.000,5"; kosong -> "". */
export function formatAngka(v) {
  if (v === null || v === undefined || v === '') return ''
  const n = Number(v)
  if (!Number.isFinite(n)) return String(v)
  return n.toLocaleString('id-ID', { maximumFractionDigits: 10 })
}

export const formatRp = v => `Rp ${formatAngka(Number(v) || 0)}`

/**
 * Teks angka gaya Indonesia -> number. Titik = pemisah ribuan, koma = desimal; "Rp", spasi, dan huruf dibuang.
 * Angka asli (dari Excel) dikembalikan apa adanya. Kosong/tidak valid -> null.
 */
export function parseAngka(v) {
  if (v === null || v === undefined) return null
  if (typeof v === 'number') return Number.isFinite(v) ? v : null
  const s = String(v).trim()
  if (!s) return null
  const negatif = /^-|^\(.*\)$/.test(s)
  let bersih = s.replace(/[^\d.,]/g, '')
  if (!/\d/.test(bersih)) return null
  const titik = (bersih.match(/\./g) || []).length
  const koma = (bersih.match(/,/g) || []).length
  if (titik && koma) {
    // Pemisah yang muncul terakhir = desimal: "1.500.000,5" atau "1,500,000.5"
    const desimal = bersih.lastIndexOf(',') > bersih.lastIndexOf('.') ? ',' : '.'
    const ribuan = desimal === ',' ? /\./g : /,/g
    bersih = bersih.replace(ribuan, '').replace(desimal, '.')
  } else if (titik) {
    // "1.500.000" / "1.500" = ribuan; "45.5" = desimal
    bersih = titik > 1 || /\.\d{3}$/.test(bersih) ? bersih.replace(/\./g, '') : bersih
  } else if (koma) {
    // "1,500,000" = ribuan (gaya Inggris); "45,5" = desimal
    bersih = koma > 1 ? bersih.replace(/,/g, '') : bersih.replace(',', '.')
  }
  const n = Number(bersih)
  return Number.isFinite(n) ? (negatif ? -n : n) : null
}

/**
 * Teks yang sedang diketik -> teks berformat, tetap mempertahankan koma/desimal yang belum selesai diketik.
 * "1500000" -> "1.500.000", "12," -> "12,", "1234,5" -> "1.234,5".
 */
export function formatKetikan(teks) {
  const s = String(teks ?? '')
  const negatif = s.trim().startsWith('-')
  const [bulatRaw, ...sisa] = s.replace(/[^\d,]/g, '').split(',')
  const bulat = bulatRaw.replace(/^0+(?=\d)/, '')
  const dikelompokkan = bulat.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  const desimal = sisa.length ? ',' + sisa.join('') : ''
  if (!bulat && !desimal) return negatif ? '-' : ''
  return (negatif ? '-' : '') + (bulat ? dikelompokkan : '0') + desimal
}
