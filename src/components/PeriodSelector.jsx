/**
 * components/PeriodSelector.jsx
 * Pemilih periode: level + bulan (semua tahun) + tombol Minggu ke-N, atau satu pilihan bulan untuk level bulan.
 * Tanpa tombol geser ◀ ▶: bulan (lintas tahun) dan minggu sudah dipilih langsung.
 */
import { Lock, Clock } from 'lucide-react'
import { formatTanggal, isPeriodLocked, sisaHari } from '../lib/deadline'
import {
  formatPeriodLabel,
  sortPeriods,
  labelBulan,
  pickCurrentPeriod,
} from '../lib/periods'

import { useEffect } from 'react'

const LEVEL_LABELS = {
  tahun: 'Tahun',
  triwulan: 'Triwulan',
  bulan: 'Bulan',
  minggu: 'Minggu',
}

export default function PeriodSelector({
  level, onLevelChange,
  period, onPeriodChange,
  availablePeriods = [],
  allowedLevels = ['minggu', 'bulan', 'triwulan', 'tahun'],
}) {
  const displayLevels = allowedLevels || ['minggu', 'bulan', 'triwulan', 'tahun']
  // Jika level yang diberikan tidak diizinkan (misal allowedLevels=['bulan'] tapi parent masih 'minggu'),
  // paksa gunakan level pertama yang diizinkan (yaitu 'bulan').
  const effectiveLevel = displayLevels.includes(level) ? level : displayLevels[0]
  const isMingguMode = effectiveLevel === 'minggu' && displayLevels.includes('minggu')

  const filtered = sortPeriods(availablePeriods.filter(p => p.level === effectiveLevel))

  // Otomatis sinkronkan period jika period saat ini level-nya tidak sesuai effectiveLevel
  useEffect(() => {
    if (period && period.level !== effectiveLevel && filtered.length > 0) {
      onPeriodChange(pickCurrentPeriod(filtered))
    }
  }, [effectiveLevel, period?.id, period?.level, filtered.length])

  const locked = period ? isPeriodLocked(period.deadline) : false
  const remaining = period ? sisaHari(period.deadline) : null

  // Minggu-minggu dalam satu bulan (tahun + bulan)
  const mingguDalam = (tahun, bulan) => sortPeriods(
    availablePeriods.filter(p => p.level === 'minggu' && Number(p.tahun) === Number(tahun) && Number(p.bulan) === Number(bulan))
  )
  // Semua bulan yang punya periode mingguan, lintas tahun (pengganti tombol geser periode)
  const monthOptions = sortPeriods(availablePeriods.filter(p => p.level === 'bulan'))
    .filter(m => mingguDalam(m.tahun, m.bulan).length > 0)
  const weeksThisMonth = isMingguMode ? sortPeriods(
    availablePeriods.filter(p =>
      p.level === 'minggu' &&
      Number(p.tahun) === Number(period?.tahun) &&
      Number(p.bulan) === Number(period?.bulan)
    )
  ) : []

  function handleMonthChange(nilai) {
    const [tahun, bulan] = nilai.split('-').map(Number)
    const weeks = mingguDalam(tahun, bulan)
    const keepWeek = weeks.find(w => w.minggu_ke === period?.minggu_ke) || weeks[0]
    if (keepWeek) onPeriodChange(keepWeek)
  }

  return (
    <div className="space-y-3">
      {displayLevels.length > 1 ? (
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-fit">
          {displayLevels.map(l => (
            <button
              key={l}
              onClick={() => onLevelChange(l)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                level === l
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {LEVEL_LABELS[l]}
            </button>
          ))}
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg text-xs font-semibold text-blue-700 dark:text-blue-300">
          <span>Periode Level:</span>
          <span className="uppercase tracking-wider font-bold">{LEVEL_LABELS[displayLevels[0]]}</span>
        </div>
      )}

      {isMingguMode && monthOptions.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap">
            Bulan
          </label>
          <select
            value={period ? `${period.tahun}-${period.bulan}` : ''}
            onChange={(e) => handleMonthChange(e.target.value)}
            className="form-select text-sm font-semibold w-full max-w-xs"
          >
            {monthOptions.map(m => (
              <option key={m.id} value={`${m.tahun}-${m.bulan}`}>{labelBulan(m.bulan, m.tahun)}</option>
            ))}
          </select>
        </div>
      )}

      {isMingguMode && weeksThisMonth.length > 0 ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Periode</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {weeksThisMonth.map(w => {
              const active = w.id === period?.id
              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => onPeriodChange(w)}
                  className={`text-left px-3 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                    active
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 shadow-sm'
                      : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  {formatPeriodLabel(w)}
                </button>
              )
            })}
          </div>
        </div>
      ) : null}

      {!isMingguMode && (
        <select
          value={period?.id || ''}
          onChange={(e) => {
            const p = filtered.find(x => x.id === e.target.value)
            if (p) onPeriodChange(p)
          }}
          className="form-select text-sm font-semibold w-full max-w-lg"
        >
          {filtered.map(p => (
            <option key={p.id} value={p.id}>{formatPeriodLabel(p)}</option>
          ))}
        </select>
      )}

      {period && (
        <div className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg ${
          locked
            ? 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400'
            : remaining !== null && remaining <= 7
            ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400'
            : 'bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
        }`}>
          {locked ? <Lock size={12} /> : <Clock size={12} />}
          {locked
            ? `Lewat deadline (${formatTanggal(period.deadline)}) — UPT tetap bisa mengisi, ditandai terlambat`
            : remaining !== null
            ? `Deadline: ${formatTanggal(period.deadline)} (${remaining > 0 ? `${remaining} hari lagi` : 'hari ini!'})`
            : `Deadline: ${formatTanggal(period.deadline)}`
          }
        </div>
      )}
    </div>
  )
}
