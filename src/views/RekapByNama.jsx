/**
 * views/RekapByNama.jsx
 * Tabel "Data per nama" di halaman Rekap Bulanan (dipisah dari views/RekapBulanan.jsx).
 */
import { useState, useMemo } from 'react'
import { db } from '../lib/db'
import { notify, notifyDihapus } from '../lib/dialog'
import Badge from '../components/Badge'
import { FileValueDisplay } from '../components/DynamicForm'
import { berkasUntukExcel } from '../lib/tautan'
import * as XLSX from 'xlsx'
import { sanitizeRows } from '../lib/excelExport'
import { Download, Users, Search, Trash2, Copy, AlertTriangle, CheckCircle2, ArrowUpDown } from 'lucide-react'
import HapusMassalDialog from '../components/HapusMassalDialog'

const PENDING_MSG = 'Permintaan hapus terkirim ke Admin. Data baru benar-benar terhapus setelah Admin menyetujuinya di menu Permintaan Hapus.'

/**
 * Data by Name: baris-baris hasil unggahan (Excel/form) satu UPT, atau Semua UPT sekaligus (Admin).
 * Kolom mengikuti definisi kolom Jenis Data (sama dengan template Excel); kolom UPT ditambahkan
 * di depan saat menampilkan lebih dari satu UPT.
 */
export default function RekapByNama({ jenisData, fields = [], entries = [], uptList = [], selectedUpt = 'all', periodLabel = '', loading, isAdmin, onChanged, showingPastMonth, selisih = null }) {
  const [search, setSearch] = useState('')
  const [sortMode, setSortMode] = useState('source')
  const [numericField, setNumericField] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(25)
  const [deleteDialog, setDeleteDialog] = useState(null) // { mode: 'filtered'|'duplikat', ids: [] }

  const showUptColumn = selectedUpt === 'all'
  const uptLabelOf = key => uptList.find(u => u.key === key)?.label || key || '-'
  const uptLabel = showUptColumn ? `Semua UPT (${uptList.length} Balai)` : uptLabelOf(selectedUpt)

  const cell = (e, f) => {
    const v = e.data_json?.[f.field_key]
    if (v !== undefined && v !== null && v !== '') return String(v)
    if (f.field_key === 'nama' && e.nama) return e.nama
    if (f.field_key === 'nik' && e.nik) return e.nik
    return ''
  }
  // Untuk export Excel: kolom berkas tidak berguna sebagai id mentah — tampilkan penanda saja.
  const cellForExport = (e, f) => (f.tipe === 'file' ? berkasUntukExcel(cell(e, f)) : cell(e, f))
  const noField = useMemo(() => fields.find(f => /^(no\.?|nomor|nomor urut)$/i.test(String(f.label || '').trim()) || /^(no|nomor|nomor_urut|no_urut)$/i.test(String(f.field_key || '').trim())), [fields])
  const displayFields = useMemo(() => noField ? fields.filter(f => f.field_key !== noField.field_key) : fields, [fields, noField])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return entries
    return entries.filter(e => (showUptColumn && uptLabelOf(e.upt_key).toLowerCase().includes(q)) || fields.some(f => cell(e, f).toLowerCase().includes(q)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries, fields, search, showUptColumn, uptList])

  const numericFields = useMemo(() => fields.filter(f => f.field_key !== 'nama' && f.field_key !== 'nik'), [fields])
  const sortedRows = useMemo(() => {
    const rows = [...filtered]
    const cmpText = (a, b) => String(a ?? '').localeCompare(String(b ?? ''), 'id', { sensitivity: 'base', numeric: true })
    const numberOf = value => {
      const raw = String(value ?? '').trim().replace(/[^\d,.-]/g, '')
      if (!raw) return null
      const normalized = raw.includes(',') && raw.includes('.')
        ? raw.replace(/\./g, '').replace(',', '.')
        : raw.includes(',') ? raw.replace(',', '.')
          : /^-?\d{1,3}(\.\d{3})+$/.test(raw) ? raw.replace(/\./g, '') : raw
      const parsed = Number(normalized)
      return Number.isFinite(parsed) ? parsed : null
    }
    if (sortMode === 'name-asc' || sortMode === 'name-desc') {
      rows.sort((a, b) => (sortMode === 'name-asc' ? 1 : -1) * cmpText(cell(a, fields.find(f => f.field_key === 'nama') || { field_key: 'nama' }), cell(b, fields.find(f => f.field_key === 'nama') || { field_key: 'nama' })))
    } else if (sortMode === 'number-asc' || sortMode === 'number-desc') {
      const field = fields.find(f => f.field_key === numericField) || noField || numericFields[0]
      if (field) rows.sort((a, b) => {
        const av = numberOf(cell(a, field)); const bv = numberOf(cell(b, field))
        if (av === null && bv === null) return 0
        if (av === null) return 1
        if (bv === null) return -1
        return (sortMode === 'number-asc' ? 1 : -1) * (av - bv)
      })
    } else {
      rows.sort((a, b) => {
        if (showUptColumn) { const upt = cmpText(uptLabelOf(a.upt_key), uptLabelOf(b.upt_key)); if (upt) return upt }
        if (noField) {
          const av = numberOf(cell(a, noField)); const bv = numberOf(cell(b, noField))
          if (av !== null && bv !== null && av !== bv) return av - bv
          if (av !== null && bv === null) return -1
          if (av === null && bv !== null) return 1
        }
        const ao = Number(a.urutan_sumber); const bo = Number(b.urutan_sumber)
        if (Number.isFinite(ao) && Number.isFinite(bo) && ao !== bo) return ao - bo
        const time = cmpText(a.created_at, b.created_at)
        return time || cmpText(a.id, b.id)
      })
    }
    return rows
  }, [filtered, sortMode, numericField, fields, numericFields, noField, showUptColumn, uptList])

  // Duplikat: baris dengan UPT, periode & seluruh isi kolom yang sama persis (mis. akibat unggah/impor dua kali).
  // Baris pertama tiap kelompok dipertahankan, sisanya ditandai duplikat.
  const duplicateIds = useMemo(() => {
    const seen = new Map()
    const dupIds = []
    for (const e of entries) {
      const key = `${e.upt_key}|${e.period_id}|${fields.map(f => cell(e, f)).join('')}`
      if (seen.has(key)) dupIds.push(e.id)
      else seen.set(key, e.id)
    }
    return dupIds
  }, [entries, fields])

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize))
  const page = Math.min(currentPage, totalPages)
  const paginated = sortedRows.slice((page - 1) * pageSize, page * pageSize)

  async function handleDelete() {
    const { ids } = deleteDialog
    const { error, pending } = await db.from('data_entries').delete().in('id', ids)
    if (error) return { error }
    setDeleteDialog(null)
    setCurrentPage(1)
    if (pending) notify(PENDING_MSG)
    await onChanged?.()
    if (isAdmin && !pending) notifyDihapus(`${ids.length} baris data · ${[jenisData?.judul, periodLabel].filter(Boolean).join(' · ')}`)
    return {}
  }

  function handleExport() {
    const rows = sanitizeRows(sortedRows.map(e => Object.fromEntries([
      ...(showUptColumn ? [['UPT', uptLabelOf(e.upt_key)]] : []),
      ...fields.map(f => [f.label, cellForExport(e, f)]),
    ])))
    const header = [...(showUptColumn ? ['UPT'] : []), ...fields.map(f => f.label)]
    const ws = XLSX.utils.json_to_sheet(rows, { header })
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, (jenisData?.judul || 'Data').slice(0, 31))
    XLSX.writeFile(wb, `DataByName_${jenisData?.judul}_${uptLabel}_${periodLabel}.xlsx`.replace(/\s+/g, '_'))
  }

  if (!jenisData) {
    return (
      <div className="card p-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Belum ada Jenis Data bulanan berbasis rincian nama.
      </div>
    )
  }

  return (
    <div className="card p-5 space-y-3 border border-gray-100 dark:border-gray-800 shadow-sm animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Users size={18} className="text-blue-500" />
            <span>{jenisData.judul}</span>
            {jenisData.kumulatif_bulanan && (
              <span className="badge-blue text-[10px] uppercase" title="Roster bulan terbaru dianggap menggantikan bulan sebelumnya">Kumulatif</span>
            )}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {uptLabel} · {periodLabel} · <strong>{entries.length}</strong> baris data hasil unggahan
            {duplicateIds.length > 0 && (
              <span className="text-amber-600 dark:text-amber-400"> · {duplicateIds.length} terindikasi duplikat</span>
            )}
          </p>
          {showingPastMonth && (
            <p className="text-[11px] text-blue-600 dark:text-blue-400 mt-0.5">
              Menampilkan {periodLabel} — bulan terakhir yang sudah ada datanya (belum ada data di bulan kalender berjalan).
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 self-start flex-wrap">
          {isAdmin && duplicateIds.length > 0 && (
            <button
              onClick={() => setDeleteDialog({ mode: 'duplikat', ids: duplicateIds })}
              className="btn-secondary text-xs whitespace-nowrap !text-amber-700 dark:!text-amber-400"
              title="Hapus baris yang isinya sama persis dengan baris lain (UPT, periode & semua kolom sama), sisakan satu"
            >
              <Copy size={14} />
              <span>Hapus {duplicateIds.length} Duplikat</span>
            </button>
          )}
          {isAdmin && (
            <button
              onClick={() => setDeleteDialog({ mode: 'filtered', ids: filtered.map(e => e.id) })}
              disabled={filtered.length === 0}
              className="btn-secondary text-xs whitespace-nowrap !text-rose-600 dark:!text-rose-400 disabled:opacity-40"
            >
              <Trash2 size={14} />
              <span>Hapus {search ? 'Hasil Pencarian' : 'Semua'}</span>
            </button>
          )}
          <button
            onClick={handleExport}
            disabled={filtered.length === 0}
            className="btn-primary text-xs whitespace-nowrap disabled:opacity-40"
          >
            <Download size={14} />
            <span>Download Excel</span>
          </button>
        </div>
      </div>

      {/* Total menonjol + pencocokan dengan Rekap 4 Minggu (lib/selisihByName.js) */}
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="rounded-xl bg-blue-600 text-white px-5 py-4 flex items-center gap-4 lg:min-w-[260px]">
          <Users size={30} className="opacity-80 flex-shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-100">Total Data by Name</p>
            <p className="text-3xl font-bold font-display tabular-nums leading-tight">{entries.length.toLocaleString('id-ID')}</p>
            <p className="text-xs text-blue-100">orang · {periodLabel}</p>
          </div>
        </div>
        {selisih && <SelisihPanel selisih={selisih} uptLabelOf={uptLabelOf} showUpt={showUptColumn} />}
      </div>

      <div className="relative max-w-sm w-full">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari di semua kolom..."
          value={search}
          onChange={e => { setSearch(e.target.value); setCurrentPage(1) }}
          className="form-input pl-8 text-xs py-1.5 w-full"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
        <ArrowUpDown size={15} aria-hidden="true" />
        <label htmlFor="byname-sort" className="font-medium">Urutkan</label>
        <select id="byname-sort" value={sortMode} onChange={e => { setSortMode(e.target.value); setCurrentPage(1) }} className="form-select text-xs py-1.5 w-auto">
          <option value="source">Urutan data {noField ? '/ kolom No' : '/ impor Excel'}</option>
          <option value="name-asc">Nama A–Z</option>
          <option value="name-desc">Nama Z–A</option>
          <option value="number-asc">Angka terkecil–terbesar</option>
          <option value="number-desc">Angka terbesar–terkecil</option>
        </select>
        {(sortMode === 'number-asc' || sortMode === 'number-desc') && (
          <select aria-label="Kolom angka untuk pengurutan" value={numericField || noField?.field_key || numericFields[0]?.field_key || ''} onChange={e => { setNumericField(e.target.value); setCurrentPage(1) }} className="form-select text-xs py-1.5 w-auto max-w-[220px]">
            {numericFields.map(f => <option key={f.field_key} value={f.field_key}>{f.label}</option>)}
          </select>
        )}
      </div>

      <div className="overflow-x-auto border border-gray-100 dark:border-gray-800 rounded-xl">
        <table className="text-xs text-left" style={{ minWidth: 'max-content', width: '100%' }}>
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide border-b border-gray-200 dark:border-gray-700">
              <th className="px-3 py-2.5 text-center w-10">No</th>
              {showUptColumn && <th className="px-3 py-2.5 whitespace-nowrap">UPT</th>}
              {displayFields.map(f => (
                <th key={f.id || f.field_key} className="px-3 py-2.5 whitespace-nowrap">{f.label}</th>
              ))}
              <th className="px-3 py-2.5 whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {loading ? (
              <tr><td colSpan={displayFields.length + 2 + (showUptColumn ? 1 : 0)} className="px-4 py-8 text-center text-gray-400">Memuat data…</td></tr>
            ) : paginated.length === 0 ? (
              <tr>
                <td colSpan={displayFields.length + 2 + (showUptColumn ? 1 : 0)} className="px-4 py-8 text-center text-gray-400">
                  {entries.length === 0
                    ? (showUptColumn ? `Belum ada UPT yang mengunggah data untuk ${periodLabel}.` : `${uptLabel} belum mengunggah data untuk ${periodLabel}.`)
                    : 'Tidak ada data yang cocok dengan pencarian.'}
                </td>
              </tr>
            ) : (
              paginated.map((e, i) => (
                <tr key={e.id} className="hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors">
                  <td className="px-3 py-2.5 text-center tabular-nums text-gray-400">{(noField && cell(e, noField)) || (page - 1) * pageSize + i + 1}</td>
                  {showUptColumn && (
                    <td className="px-3 py-2.5 whitespace-nowrap font-medium text-gray-700 dark:text-gray-300">{uptLabelOf(e.upt_key)}</td>
                  )}
                  {displayFields.map(f => (
                    <td key={f.id || f.field_key} className="px-3 py-2.5 whitespace-nowrap text-gray-700 dark:text-gray-300">
                      {f.tipe === 'file'
                        ? <FileValueDisplay id={cell(e, f)} />
                        : cell(e, f) || <span className="text-gray-300 dark:text-gray-600">-</span>}
                    </td>
                  ))}
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    {e.status && (
                      <Badge variant={e.status === 'disetujui' ? 'success' : e.status === 'ditolak' ? 'danger' : 'warning'}>
                        {e.status === 'disetujui' ? 'Disetujui' : e.status === 'ditolak' ? 'Ditolak' : 'Menunggu'}
                      </Badge>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filtered.length > 0 && (
        <div className="flex items-center justify-between px-3 py-2.5 bg-gray-50/50 dark:bg-gray-900/30 rounded-xl text-xs text-gray-500 dark:text-gray-400 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span>Tampilkan</span>
            <select
              value={pageSize}
              onChange={e => { setPageSize(Number(e.target.value)); setCurrentPage(1) }}
              className="form-select text-xs py-1 px-2 w-auto"
            >
              {[25, 50, 100, 250].map(n => <option key={n} value={n}>{n} baris</option>)}
            </select>
            <span>dari <strong>{filtered.length}</strong> baris</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-2.5 py-1 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 disabled:opacity-40"
            >
              « Prev
            </button>
            <span className="px-2 font-semibold">Halaman {page} dari {totalPages}</span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, page + 1))}
              disabled={page >= totalPages}
              className="px-2.5 py-1 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 disabled:opacity-40"
            >
              Next »
            </button>
          </div>
        </div>
      )}

      <HapusMassalDialog
        open={!!deleteDialog}
        onClose={() => setDeleteDialog(null)}
        onConfirm={handleDelete}
        isAdmin={isAdmin}
        count={deleteDialog?.ids?.length || 0}
        title={deleteDialog?.mode === 'duplikat' ? 'Hapus Data Duplikat' : 'Hapus Data by Name'}
        details={[
          ['Jenis Data', jenisData.judul],
          ['UPT', uptLabel],
          ['Periode', periodLabel],
        ]}
      />
    </div>
  )
}

/** Peringatan bila jumlah orang di Data by Name tidak sama dengan total peserta Rekap 4 Minggu. */
function SelisihPanel({ selisih, uptLabelOf, showUpt }) {
  const beda = selisih.daftar.filter(x => x.selisih !== 0)
  if (!selisih.daftar.length) {
    return (
      <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 text-xs text-gray-500 dark:text-gray-400 flex items-center">
        Belum ada data by name maupun rekap mingguan {selisih.partnerJudul} untuk dicocokkan pada bulan ini.
      </div>
    )
  }
  if (!beda.length) {
    return (
      <div className="flex-1 rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 px-4 py-3 text-sm text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
        <CheckCircle2 size={18} className="flex-shrink-0" />
        Jumlah orang di data by name sudah sama dengan total peserta Rekap 4 Minggu {selisih.partnerJudul}.
      </div>
    )
  }
  return (
    <div className="flex-1 rounded-xl border border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
      <p className="font-semibold flex items-center gap-2"><AlertTriangle size={16} className="flex-shrink-0" /> Ada selisih dengan Rekap 4 Minggu {selisih.partnerJudul}</p>
      <ul className="mt-1.5 space-y-0.5 text-xs">
        {beda.map(x => (
          <li key={x.upt_key}>
            {showUpt && <strong>{uptLabelOf(x.upt_key)}: </strong>}
            data by name <strong>{x.byName.toLocaleString('id-ID')}</strong> orang, rekap 4 minggu <strong>{x.mingguan.toLocaleString('id-ID')}</strong> peserta
            {' '}({x.selisih > 0 ? 'lebih' : 'kurang'} <strong>{Math.abs(x.selisih).toLocaleString('id-ID')}</strong>)
          </li>
        ))}
      </ul>
      <p className="mt-1.5 text-[11px] text-amber-700 dark:text-amber-300">Periksa kembali data by name atau angka peserta di Input Data. Rekap mingguan yang dihitung hanya baris yang sudah disetujui Admin.</p>
    </div>
  )
}
