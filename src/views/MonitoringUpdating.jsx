'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import * as XLSX from 'xlsx'
import { Building2, CalendarDays, Check, CircleAlert, CircleX, Download, Loader2, RotateCw, Settings2, X } from 'lucide-react'
import { useAuth } from '../AuthContext'
import { api, db } from '../lib/db'
import { sanitizeCellValue } from '../lib/excelExport'
import { formatPeriodLabel, sortPeriods } from '../lib/periods'
import PageHeader from '../components/PageHeader'

const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const STATUS = {
  selesai: { label: 'Selesai', icon: Check, color: 'border-emerald-200 bg-emerald-50 text-emerald-700', bar: 'bg-emerald-600' },
  belum_selesai: { label: 'Belum selesai', icon: CircleAlert, color: 'border-amber-200 bg-amber-50 text-amber-700', bar: 'bg-amber-500' },
  belum_mengisi: { label: 'Belum mengisi', icon: CircleX, color: 'border-rose-200 bg-rose-50 text-rose-700', bar: 'bg-rose-600' },
}

export default function MonitoringUpdating() {
  const { isAdmin } = useAuth()
  const [cadence, setCadence] = useState('minggu')
  const [year, setYear] = useState(String(new Date().getFullYear()))
  const [uptFilter, setUptFilter] = useState('all')
  const [years, setYears] = useState([])
  const [periods, setPeriods] = useState([])
  const [upts, setUpts] = useState([])
  const [cells, setCells] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [detail, setDetail] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [manage, setManage] = useState(false)
  const [manageBusy, setManageBusy] = useState(false)
  const [manageUpt, setManageUpt] = useState('')
  const [manageCadence, setManageCadence] = useState('minggu')
  const [options, setOptions] = useState([])
  const [requirements, setRequirements] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    const [periodResult, summaryResult] = await Promise.all([
      db.from('periods').select('tahun,level'),
      api(`/monitoring?cadence=${cadence}&year=${encodeURIComponent(year)}`, { method: 'GET' }),
    ])
    if (summaryResult.error) setError(summaryResult.error.message || 'Data monitoring tidak dapat dimuat.')
    const data = summaryResult.data?.data
    setPeriods(data?.periods || [])
    setUpts(data?.upts || [])
    setCells(data?.cells || [])
    const availableYears = [...new Set((periodResult.data || []).filter(p => p.level === cadence).map(p => Number(p.tahun)))].sort((a, b) => b - a)
    setYears(availableYears)
    if (availableYears.length) setYear(current => availableYears.includes(Number(current)) ? current : String(availableYears[0]))
    setLoading(false)
  }, [cadence, year, uptFilter, isAdmin])

  useEffect(() => { load() }, [load])
  const visibleUpts = useMemo(() => upts.filter(u => uptFilter === 'all' || u.key === uptFilter), [upts, uptFilter])
  const cellByKey = useMemo(() => new Map(cells.map(c => [`${c.upt_key}|${c.period_id}`, c])), [cells])
  const visibleCells = useMemo(() => cells.filter(cell => uptFilter === 'all' || cell.upt_key === uptFilter), [cells, uptFilter])
  const totals = useMemo(() => visibleCells.reduce((acc, cell) => ({ ...acc, [cell.status]: acc[cell.status] + 1 }), { selesai: 0, belum_selesai: 0, belum_mengisi: 0 }), [visibleCells])
  const count = visibleCells.length
  const percentage = count ? Math.round(totals.selesai * 100 / count) : 0

  async function openDetail(upt, period) {
    setDetailLoading(true)
    const labeledPeriod = { ...period, label: formatPeriodLabel(period) }
    setDetail({ upt, period: labeledPeriod, data: [] })
    const result = await api(`/monitoring/detail?period_id=${encodeURIComponent(period.id)}&upt_key=${encodeURIComponent(upt.key)}`, { method: 'GET' })
    if (result.error) setError(result.error.message || 'Rincian laporan gagal dimuat.')
    setDetail(result.data?.data ? { ...result.data.data, period: labeledPeriod } : null)
    setDetailLoading(false)
  }

  async function openManage() {
    setManage(true)
    setManageBusy(true)
    const result = await api('/monitoring/requirements', { method: 'GET' })
    if (result.error) setError(result.error.message || 'Pengaturan kewajiban tidak dapat dimuat.')
    const data = result.data?.data
    setUpts(data?.upts || upts)
    setOptions(data?.options || [])
    setRequirements(data?.requirements || [])
    setManageUpt(current => current || data?.upts?.[0]?.key || '')
    setManageBusy(false)
  }

  useEffect(() => {
    if (!manageUpt) return
    setSelectedTypes(requirements.filter(row => row.upt_key === manageUpt && row.cadence === manageCadence).map(row => row.jenis_data_id))
  }, [manageUpt, manageCadence, requirements])

  async function saveRequirements() {
    setManageBusy(true)
    const result = await api('/monitoring/requirements', { method: 'PUT', body: { upt_key: manageUpt, cadence: manageCadence, jenis_data_ids: selectedTypes } })
    if (result.error) setError(result.error.message || 'Pengaturan tidak tersimpan.')
    else {
      setRequirements(rows => [...rows.filter(row => row.upt_key !== manageUpt || row.cadence !== manageCadence), ...selectedTypes.map(jenis_data_id => ({ upt_key: manageUpt, cadence: manageCadence, jenis_data_id }))])
      await load()
    }
    setManageBusy(false)
  }

  function exportExcel() {
    const columns = visiblePeriods.map(period => cadence === 'minggu'
      ? formatPeriodLabel(period)
      : MONTHS[Number(period.bulan) - 1])
    const rows = visibleUpts.map((upt, index) => {
      const row = { No: index + 1, 'Nama Satker': sanitizeCellValue(upt.label) }
      visiblePeriods.forEach((period, i) => { row[columns[i]] = STATUS[cellByKey.get(`${upt.key}|${period.id}`)?.status]?.label || 'Belum mengisi' })
      return row
    })
    const sheet = XLSX.utils.json_to_sheet(rows)
    sheet['!cols'] = [{ wch: 6 }, { wch: 34 }, ...visiblePeriods.map(() => ({ wch: 24 }))]
    const book = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(book, sheet, cadence === 'minggu' ? 'Mingguan' : 'Bulanan')
    XLSX.writeFile(book, `monitoring-updating-${cadence}-${year}.xlsx`)
  }

  function renderCell(upt, period) {
    const cell = cellByKey.get(`${upt.key}|${period.id}`)
    const status = STATUS[cell?.status || 'belum_mengisi']
    const Icon = status.icon
    const periodLabel = formatPeriodLabel(period)
    return <td key={period.id} className="border border-slate-200 px-1 py-1.5 text-center">
      <button type="button" onClick={() => openDetail(upt, period)} aria-label={`${upt.label}, ${periodLabel}: ${status.label}. Lihat rincian data.`} title="Klik untuk melihat data yang sudah dan belum diisi" className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border transition-colors hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${status.color}`}>
        <Icon size={18} strokeWidth={2.5} />
      </button>
    </td>
  }

  const visiblePeriods = sortPeriods(periods)
  const weeksByMonth = MONTHS.map((_, monthIndex) => visiblePeriods.filter(p => Number(p.bulan) === monthIndex + 1))

  return <div className="space-y-5">
    <PageHeader title="Monitoring Updating Weekly Report Pelatihan KP" description="Pantau kelengkapan laporan mingguan dan bulanan setiap satuan kerja." />
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-end gap-3">
          <div><label htmlFor="monitor-cadence" className="mb-1 block text-xs font-semibold text-slate-600">Periode</label><select id="monitor-cadence" className="form-select min-h-11 w-36" value={cadence} onChange={e => setCadence(e.target.value)}><option value="minggu">Mingguan</option><option value="bulan">Bulanan</option></select></div>
          <div><label htmlFor="monitor-year" className="mb-1 block text-xs font-semibold text-slate-600">Tahun</label><select id="monitor-year" className="form-select min-h-11 w-28" value={year} onChange={e => setYear(e.target.value)}>{years.map(y => <option key={y} value={y}>{y}</option>)}</select></div>
          {isAdmin && <div><label htmlFor="monitor-upt" className="mb-1 block text-xs font-semibold text-slate-600">Satker</label><select id="monitor-upt" className="form-select min-h-11 min-w-52" value={uptFilter} onChange={e => setUptFilter(e.target.value)}><option value="all">Semua Satker</option>{upts.map(u => <option key={u.key} value={u.key}>{u.label}</option>)}</select></div>}
        </div>
        <div className="flex gap-2"><button type="button" onClick={exportExcel} disabled={loading || !visibleUpts.length || !periods.length} className="btn-secondary min-h-11 text-sm"><Download size={16} /> Ekspor Excel</button>{isAdmin && <button type="button" onClick={openManage} className="btn-secondary min-h-11 text-sm"><Settings2 size={16} /> Atur Kewajiban</button>}</div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {Object.entries(STATUS).map(([key, item]) => { const Icon = item.icon; return <div key={key} className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 ${item.color}`}><Icon size={18} /><span className="text-sm">{item.label}</span><strong className="ml-auto tabular-nums">{totals[key]}</strong></div> })}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 px-3 py-3 sm:px-4">
        <div className="flex items-center gap-2 text-sm text-slate-700"><Building2 size={17} className="text-slate-500" /><strong>{totals.selesai}</strong><span>dari {count} periode selesai</span></div>
        <div className="h-2 min-w-32 flex-1 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} aria-label="Progres pembaruan laporan"><div className="h-full rounded-full bg-emerald-600 transition-[width]" style={{ width: `${percentage}%` }} /></div>
        <span className="text-sm font-semibold tabular-nums text-slate-700">{percentage}%</span>
        <button type="button" onClick={load} disabled={loading} className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-600 hover:bg-white"><RotateCw size={15} className={loading ? 'animate-spin' : ''} /> Muat ulang</button>
      </div>
    </section>
    {error && <div role="alert" className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">{error}</div>}
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      {loading ? <div className="flex min-h-48 items-center justify-center gap-2 text-sm text-slate-500"><Loader2 size={18} className="animate-spin" /> Memuat monitoring…</div> : !visiblePeriods.length || !visibleUpts.length ? <div className="flex min-h-48 flex-col items-center justify-center gap-2 px-4 text-center text-sm text-slate-500"><CalendarDays size={24} className="text-slate-400" />Belum ada Satker atau periode untuk pilihan ini.</div> : <div className="max-h-[68vh] overflow-auto"><table className="min-w-max border-collapse text-sm"><thead className="sticky top-0 z-20 bg-slate-100 text-slate-700">{cadence === 'minggu' && <tr><th rowSpan={2} className="sticky left-0 z-30 min-w-12 border border-slate-200 bg-slate-100 px-3 py-2 text-center">No.</th><th rowSpan={2} className="sticky left-12 z-30 min-w-56 border border-slate-200 bg-slate-100 px-3 py-2 text-left">Nama Satker</th>{MONTHS.map((month, i) => weeksByMonth[i].length > 0 && <th key={month} colSpan={weeksByMonth[i].length} className="border border-slate-200 px-2 py-2 text-center font-semibold">{month}</th>)}</tr>}<tr>{cadence === 'minggu' && visiblePeriods.map(period => <th key={period.id} className="min-w-24 border border-slate-200 px-2 py-2 text-center font-medium">{formatPeriodLabel(period)}</th>)}{cadence === 'bulan' && <><th className="sticky left-0 z-30 min-w-12 border border-slate-200 bg-slate-100 px-3 py-2 text-center">No.</th><th className="sticky left-12 z-30 min-w-56 border border-slate-200 bg-slate-100 px-3 py-2 text-left">Nama Satker</th>{MONTHS.map(month => <th key={month} className="min-w-24 border border-slate-200 px-3 py-2 text-center font-semibold">{month}</th>)}</>}</tr></thead><tbody>{visibleUpts.map((upt, index) => <tr key={upt.key}><td className="sticky left-0 z-10 border border-slate-200 bg-white px-3 py-2 text-center text-slate-500">{index + 1}</td><th scope="row" className="sticky left-12 z-10 border border-slate-200 bg-white px-3 py-2 text-left font-medium text-slate-800">{upt.label}</th>{cadence === 'minggu' ? visiblePeriods.map(period => renderCell(upt, period)) : MONTHS.map((month, monthIndex) => { const period = visiblePeriods.find(p => Number(p.bulan) === monthIndex + 1); return period ? renderCell(upt, period) : <td key={`${upt.key}-${month}`} className="border border-slate-200 bg-slate-50/50" /> })}</tr>)}</tbody></table></div>}
    </section>

    {manage && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-3" role="presentation"><section role="dialog" aria-modal="true" aria-labelledby="manage-title" className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl"><header className="flex items-center justify-between border-b border-slate-200 px-5 py-4"><div><h2 id="manage-title" className="font-semibold text-slate-900">Atur kewajiban pengisian</h2><p className="mt-1 text-xs text-slate-500">Pilih jenis data wajib untuk setiap Satker dan frekuensi.</p></div><button type="button" onClick={() => setManage(false)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Tutup"><X size={18} /></button></header><div className="space-y-4 overflow-y-auto p-5"><div className="grid gap-3 sm:grid-cols-2"><label className="text-xs font-semibold text-slate-600">Satker<select className="form-select mt-1 min-h-11 w-full" value={manageUpt} onChange={e => setManageUpt(e.target.value)}>{upts.map(u => <option key={u.key} value={u.key}>{u.label}</option>)}</select></label><label className="text-xs font-semibold text-slate-600">Frekuensi<select className="form-select mt-1 min-h-11 w-full" value={manageCadence} onChange={e => setManageCadence(e.target.value)}><option value="minggu">Mingguan</option><option value="bulan">Bulanan</option></select></label></div><div className="max-h-[48vh] space-y-2 overflow-y-auto rounded-lg border border-slate-200 p-3">{options.filter(o => o.cadence === manageCadence).map(option => <label key={option.id} className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 hover:bg-slate-50"><input type="checkbox" checked={selectedTypes.includes(option.id)} onChange={e => setSelectedTypes(current => e.target.checked ? [...current, option.id] : current.filter(id => id !== option.id))} /><span className="text-sm text-slate-700">{option.judul}</span></label>)}</div></div><footer className="flex justify-end gap-2 border-t border-slate-200 px-5 py-4"><button type="button" onClick={() => setManage(false)} className="btn-secondary min-h-10">Batal</button><button type="button" onClick={saveRequirements} disabled={manageBusy || !manageUpt || !selectedTypes.length} className="btn-primary min-h-10">{manageBusy ? <Loader2 size={16} className="animate-spin" /> : null} Simpan Kewajiban</button></footer></section></div>}

    {detail && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-3" role="presentation"><section role="dialog" aria-modal="true" aria-labelledby="detail-title" className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl"><header className="flex items-center justify-between border-b border-slate-200 px-5 py-4"><div><h2 id="detail-title" className="font-semibold text-slate-900">Rincian laporan — {detail.upt?.label}</h2><p className="mt-1 text-sm text-slate-500">{detail.period?.label || (detail.period?.level === 'bulan' ? MONTHS[Number(detail.period?.bulan) - 1] : `Minggu ${detail.period?.minggu_ke}`)} {detail.period?.tahun}</p></div><button type="button" onClick={() => setDetail(null)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Tutup"><X size={18} /></button></header><div className="max-h-[70vh] space-y-3 overflow-y-auto p-5">{detailLoading ? <div className="flex justify-center py-12"><Loader2 className="animate-spin" /></div> : detail.data?.length ? detail.data.map(type => <article key={type.jenis_data_id} className="rounded-lg border border-slate-200"><div className="flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-3"><strong className="text-sm text-slate-800">{type.judul}</strong><span className={`ml-auto rounded-full px-2.5 py-1 text-xs font-semibold ${type.status === 'sudah' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{type.status === 'sudah' ? `Sudah diisi · ${type.jumlah} baris` : 'Belum diisi'}</span></div>{type.rows?.length > 0 && <div className="space-y-2 p-3">{type.rows.slice(0, 30).map((row, index) => <div key={row.baris_ke ?? index} className="rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-700"><strong className="mb-1 block">Baris {index + 1}</strong><div className="grid gap-x-4 gap-y-1 sm:grid-cols-2">{row.fields?.map((field, fi) => <div key={`${field.label}-${fi}`}><span className="text-slate-500">{field.label}: </span>{typeof field.value === 'object' ? JSON.stringify(field.value) : String(field.value ?? '—')}</div>)}</div></div>)}{type.rows.length > 30 && <p className="text-xs text-slate-500">Menampilkan 30 dari {type.rows.length} baris.</p>}</div>}</article>) : <p className="py-8 text-center text-sm text-slate-500">Belum ada kewajiban yang diatur untuk Satker ini.</p>}</div></section></div>}
  </div>
}
