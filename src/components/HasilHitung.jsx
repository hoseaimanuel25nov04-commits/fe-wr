/**
 * components/HasilHitung.jsx
 * Kolom hitung otomatis (lib/kolomHitung.js) di bawah form isian — hanya ditampilkan, tidak bisa diubah.
 */
import { KOLOM_HITUNG } from '../lib/kolomHitung'
import { Calculator } from 'lucide-react'

export default function HasilHitung({ jenisKey, values = {} }) {
  const daftar = KOLOM_HITUNG[jenisKey] || []
  if (!daftar.length) return null
  return (
    <div className="mt-4 space-y-2">
      {daftar.map(k => {
        const v = k.hitung(values)
        return (
          <div key={k.field_key} className="flex items-center justify-between gap-3 rounded-lg border border-blue-100 bg-blue-50/60 px-3 py-2 text-sm dark:border-blue-900 dark:bg-blue-950/30">
            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Calculator size={15} className="text-blue-600" />
              <span>
                {k.label}
                <span className="block text-[11px] text-gray-500">Dihitung otomatis: {k.keterangan}</span>
              </span>
            </span>
            <span className="font-semibold tabular-nums text-gray-900 dark:text-white">{v === null ? '—' : `${v.toLocaleString('id-ID')}%`}</span>
          </div>
        )
      })}
    </div>
  )
}
