/**
 * views/DashboardHome.jsx
 * Dashboard utama: ringkasan mingguan (dari isian data UPT) dan status pengisian. Isi kartu/grafik diatur Admin (Kelola Dashboard).
 * Tiap kartu grafik punya tombol untuk beralih tampilan grafik batang / tabel angka (state lokal, tidak disimpan).
 * Grafik per UPT/Balai (Peserta Dilatih, Pagu vs Realisasi) awalnya tampil sebagai tabel; grafik total sebagai grafik.
 * Di bawah kelompok kartu "Realisasi Anggaran" ada grafik garis perkembangan realisasi per minggu (satu garis per
 * kartu di kelompok itu: RM, PNBP/BLU, SBSN, Total) dari minggu pertama tahun berjalan sampai minggu terpilih.
 * Minggu terpilih yang belum diisi tetap menampilkan nilai minggu terakhir yang sudah diisi.
 * Akun UPT hanya melihat data UPT-nya sendiri; Admin melihat semua UPT.
 */
import { useState, useEffect, useMemo } from 'react'
import { db, getFeatures } from '../lib/db'
import { useAuth } from '../AuthContext'
import StatCard from '../components/StatCard'
import InfoCard from '../components/InfoCard'
import Badge from '../components/Badge'
import { formatPeriodLabel, sortPeriods, pickCurrentPeriod, namaBulan } from '../lib/periods'
import { ICONS, DEFAULT_WIDGETS, FIELD_PELATIHAN, groupWidgets } from '../lib/dashboardWidgets'
import { buatPetaPeran, peranKolom } from '../lib/peranRekap'
import { agregasiOf, isLastMode } from '../lib/agregasi'
import { buatSaringan } from '../lib/saringBaris'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LabelList,
} from 'recharts'
import {
  Users, Landmark, GraduationCap, BarChart3, ChevronLeft, ChevronRight, Hourglass, Loader2, Table2, Info, ClipboardList, Filter, Building2
} from 'lucide-react'

const num = v => (Number.isFinite(Number(v)) ? Number(v) : 0)
const formatRp = n => `Rp ${num(n).toLocaleString('id-ID')}`
const COMPACT = new Intl.NumberFormat('id-ID', { notation: 'compact', maximumFractionDigits: 1 })
const BULAN_PENDEK = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
const compactNumber = (satuan, v) => (satuan === 'rupiah' ? 'Rp ' : '') + COMPACT.format(num(v))

import PageHeader from '../components/PageHeader'

export default function DashboardHome() {
  const { isAdmin, uptKey, uptLabel, profile } = useAuth()

  // Data mingguan & filter parameter (Tahun, Bulan, Satker, Minggu)
  const [weeks, setWeeks] = useState([])
  const [periodId, setPeriodId] = useState('all')
  const [tahun, setTahun] = useState(null)
  const [bulan, setBulan] = useState('all')
  const [selectedUpt, setSelectedUpt] = useState(isAdmin ? 'all' : (uptKey || 'all'))
  const [uptList, setUptList] = useState([])
  const [jenisData, setJenisData] = useState([])
  const [rekap, setRekap] = useState([])
  const [targetRows, setTargetRows] = useState([]) // target_mingguan s.d. minggu terpilih (tahun yang sama)
  const [widgets, setWidgets] = useState(DEFAULT_WIDGETS)
  const [fieldDefs, setFieldDefs] = useState([])
  const [loadingRekap, setLoadingRekap] = useState(true)
  const [chartView, setChartView] = useState({}) // widget.id -> 'grafik' | 'tabel'

  useEffect(() => {
    loadMeta()
  }, [])

  useEffect(() => {
    if (tahun && weeks.length) loadRekap(tahun)
  }, [tahun, weeks])

  async function loadMeta() {
    const feat = await getFeatures()
    if (feat.dashboard) {
      const { data: w } = await db.from('dashboard_widgets').select('*').order('urutan')
      if (w && w.length) setWidgets(w) // kosong = pakai tampilan bawaan
    }
    const [{ data: p }, { data: upts }, { data: jds }, { data: fdefs }] = await Promise.all([
      db.from('periods').select('*').eq('level', 'minggu'),
      db.from('upt_list').select('*').eq('aktif', true).order('label'),
      db.from('jenis_data').select('*').eq('aktif', true).order('created_at'),
      db.from('field_definitions').select('*').eq('level', 'minggu'),
    ])
    setFieldDefs(fdefs || [])
    const list = sortPeriods(p || [])
    setWeeks(list)
    setUptList(upts || [])
    setJenisData((jds || []).filter(j => j.level_utama === 'minggu'))

    // Default: minggu yang sedang berjalan; jika tidak ada, minggu terakhir yang sudah lewat
    const def = pickCurrentPeriod(list)
    if (def) {
      setTahun(Number(def.tahun))
      setBulan(Number(def.bulan) || 'all')
      setPeriodId(def.id)
    } else {
      setLoadingRekap(false)
    }
  }

  async function loadRekap(thn) {
    if (!thn || !weeks.length) return
    setLoadingRekap(true)
    const yearWeekIds = weeks.filter(w => Number(w.tahun) === Number(thn)).map(w => w.id)
    if (!yearWeekIds.length) {
      setRekap([])
      setTargetRows([])
      setLoadingRekap(false)
      return
    }
    const feat = await getFeatures()
    let q = db
      .from('rekap_nilai')
      .select('period_id, jenis_data_id, upt_key, baris_ke, field_key, value, value_text' + (feat.terlambat ? ', terlambat' : ''))
      .in('period_id', yearWeekIds)
    // Baris yang masih menunggu persetujuan Admin belum dihitung di Dashboard (total resmi).
    if (feat.persetujuanBaris) q = q.eq('status', 'disetujui')
    const [{ data }, { data: tgt }] = await Promise.all([
      q,
      db.from('target_mingguan').select('jenis_data_id, upt_key, period_id, target').in('period_id', yearWeekIds),
    ])
    setRekap(data || [])
    setTargetRows(tgt || [])
    setLoadingRekap(false)
  }

  // Filter tahun & bulan
  const years = useMemo(() => [...new Set(weeks.map(w => Number(w.tahun)))].sort((a, b) => a - b), [weeks])
  const weeksThisYear = useMemo(() => weeks.filter(w => Number(w.tahun) === Number(tahun)), [weeks, tahun])
  const weeksFiltered = useMemo(() => {
    if (bulan === 'all') return weeksThisYear
    return weeksThisYear.filter(w => Number(w.bulan) === Number(bulan))
  }, [weeksThisYear, bulan])

  const activeWeek = useMemo(() => (periodId && periodId !== 'all' ? weeks.find(w => w.id === periodId) : null), [weeks, periodId])
  const weekIdx = activeWeek ? weeks.findIndex(w => w.id === activeWeek.id) : -1

  const activeWeekIds = useMemo(() => {
    if (activeWeek) return [activeWeek.id]
    return weeksFiltered.map(w => w.id)
  }, [activeWeek, weeksFiltered])

  const activeWeekIdSet = useMemo(() => new Set(activeWeekIds), [activeWeekIds])

  const labelPeriode = useMemo(() => {
    if (activeWeek) return formatPeriodLabel(activeWeek)
    if (bulan !== 'all') return `${namaBulan(bulan)} ${tahun}`
    return `Tahun ${tahun || ''}`
  }, [activeWeek, bulan, tahun])

  // UPT yang tampil: Admin = semua UPT atau yang dipilih; akun UPT = hanya UPT miliknya
  const scopeUpts = useMemo(() => {
    if (!isAdmin) return uptList.filter(u => u.key === uptKey)
    if (selectedUpt && selectedUpt !== 'all') return uptList.filter(u => u.key === selectedUpt)
    return uptList
  }, [isAdmin, uptList, uptKey, selectedUpt])
  const scopeKeys = useMemo(() => new Set(scopeUpts.map(u => u.key)), [scopeUpts])

  const selectedUptLabel = useMemo(() => {
    if (!isAdmin) return uptLabel || 'Balai Saya'
    if (selectedUpt === 'all') return `Semua Satker (${uptList.length} Balai)`
    return uptList.find(u => u.key === selectedUpt)?.label || selectedUpt
  }, [isAdmin, selectedUpt, uptList, uptLabel])

  const pickYear = thn => {
    setTahun(thn)
    setBulan('all')
    setPeriodId('all')
  }

  const pickBulan = bln => {
    setBulan(bln)
    setPeriodId('all')
  }

  const currentWeekIdx = useMemo(() => {
    if (!activeWeek) return -1
    return weeksFiltered.findIndex(w => w.id === activeWeek.id)
  }, [activeWeek, weeksFiltered])

  const goWeek = w => {
    if (!w) return
    setTahun(Number(w.tahun))
    setBulan(Number(w.bulan) || 'all')
    setPeriodId(w.id)
  }

  const weekOrder = useMemo(() => Object.fromEntries(weeks.map((w, i) => [w.id, i])), [weeks])

  const maxWeekOrder = useMemo(() => {
    if (activeWeek) return weekOrder[activeWeek.id] ?? 999999
    if (weeksFiltered.length > 0) return Math.max(...weeksFiltered.map(w => weekOrder[w.id] ?? -1))
    return 999999
  }, [activeWeek, weeksFiltered, weekOrder])

  // Baris rekap milik UPT yang masih ada (UPT yang dihapus otomatis tidak ikut)
  // rowsAll: seluruh isian sampai titik akhir periode yang dipilih (untuk nilai kumulatif pagu & realisasi)
  const rowsAll = useMemo(() => {
    return rekap.filter(r => scopeKeys.has(r.upt_key) && (weekOrder[r.period_id] ?? -1) <= maxWeekOrder)
  }, [rekap, scopeKeys, weekOrder, maxWeekOrder])

  // rows: hanya isian yang masuk periode filter aktif (minggu terpilih atau bulan terpilih)
  const rows = useMemo(() => {
    return rowsAll.filter(r => activeWeekIdSet.has(r.period_id))
  }, [rowsAll, activeWeekIdSet])

  const jdIdByKey = useMemo(() => {
    const m = {}
    jenisData.forEach(j => { m[j.key] = j.id })
    return m
  }, [jenisData])

  const modeOf = (jdKey, field) => agregasiOf(fieldDefs.find(f => f.jenis_data_id === jdIdByKey[jdKey] && f.field_key === field) || { field_key: field })
  // Kumulatif & Nilai terakhir: dipakai angka minggu terakhir yang terisi tiap UPT (minggu kosong = minggu sebelumnya)
  const cumulative = (jdKey, field) => isLastMode(modeOf(jdKey, field))
  // where: saring baris menurut kolom lain pada baris yang sama, mis. { sumber_dana: 'RM' } (lib/saringBaris.js)
  const cocok = useMemo(() => buatSaringan(rowsAll), [rowsAll])
  // FIELD_PELATIHAN dibaca dari kolom berperan "Judul baris" jenis data itu (Kelola Jenis Data)
  const kolomJudul = useMemo(() => {
    const peta = buatPetaPeran(fieldDefs)
    const m = {}
    fieldDefs.forEach(f => { if (peranKolom(peta, f.jenis_data_id, f.field_key) === 'judul') m[f.jenis_data_id] ??= f.field_key })
    return m
  }, [fieldDefs])
  const kolomOf = (jdKey, field) => (field === FIELD_PELATIHAN ? kolomJudul[jdIdByKey[jdKey]] : field)
  const matching = (jdKey, field, uptFilter, list, where) => {
    const fk = kolomOf(jdKey, field)
    return list.filter(r => r.jenis_data_id === jdIdByKey[jdKey] && r.field_key === fk && (!uptFilter || r.upt_key === uptFilter) && cocok(r, where))
  }
  const terisi = r => String(r.value_text ?? r.value ?? '').trim() !== ''

  // Nilai: kolom kumulatif = nilai terakhir tiap UPT sampai minggu terpilih; kolom lain = jumlah seluruh minggu yang masuk filter.
  // Jumlah pelatihan = banyaknya baris berjudul dari periode yang difilter.
  const sum = (jdKey, field, uptFilter, where, list) => {
    const dataList = list || (cumulative(jdKey, field) ? rowsAll : rows)
    if (field === FIELD_PELATIHAN) return matching(jdKey, field, uptFilter, rows, where).filter(terisi).length
    if (!cumulative(jdKey, field)) return matching(jdKey, field, uptFilter, dataList, where).reduce((a, r) => a + num(r.value), 0)
    const perUpt = {}
    matching(jdKey, field, uptFilter, dataList, where).filter(r => r.value !== null && r.value !== undefined).forEach(r => {
      const o = weekOrder[r.period_id] ?? -1
      const cur = perUpt[r.upt_key]
      if (!cur || o > cur.o) perUpt[r.upt_key] = { o, v: num(r.value) }
      else if (o === cur.o) cur.v += num(r.value)
    })
    return Object.values(perUpt).reduce((a, x) => a + x.v, 0)
  }

  // Target peserta: tiap UPT memakai target minggu terakhir yang terisi (s.d. minggu terpilih), lalu dijumlah
  const targetOf = (jdKey, uptFilter) => {
    const perUpt = {}
    for (const r of targetRows) {
      if (r.jenis_data_id !== jdIdByKey[jdKey] || !scopeKeys.has(r.upt_key) || (uptFilter && r.upt_key !== uptFilter)) continue
      if (r.target === null || r.target === undefined || r.target === '') continue
      const o = weekOrder[r.period_id] ?? -1
      if (!perUpt[r.upt_key] || o > perUpt[r.upt_key].o) perUpt[r.upt_key] = { o, v: num(r.target) }
    }
    const nilai = Object.values(perUpt)
    return nilai.length ? nilai.reduce((a, x) => a + x.v, 0) : null
  }
  const catatanTarget = (c, satuan, nilai) => {
    if (!c.target) return null
    const t = targetOf(c.target)
    if (!t) return null
    const persen = (nilai / t) * 100
    return `Target ${fmt(satuan, t)} · ${persen.toLocaleString('id-ID', { maximumFractionDigits: 1 })}%`
  }

  // UPT mana saja yang sudah mengisi jenis data tertentu pada minggu terpilih
  const filledUpts = jdKey => new Set(rows.filter(r => r.jenis_data_id === jdIdByKey[jdKey]).map(r => r.upt_key))

  const waitingNote = isAdmin ? 'Menunggu input UPT' : 'Menunggu input UPT Anda'
  const filledNote = jdKey => {
    const n = filledUpts(jdKey).size
    return isAdmin ? `${n} dari ${scopeUpts.length} UPT sudah input` : 'Sudah diinput UPT Anda'
  }

  // Nilai widget = jumlah baris rekap (minggu terpilih) untuk semua sumber {jd, field}; per UPT bila uptFilter diisi
  const sumItems = (items = [], uptFilter, list) => items.reduce((a, it) => a + sum(it.jd, it.field, uptFilter, it.where, list), 0)
  const uptsOf = it => new Set(matching(it.jd, it.field, null, rowsAll, it.where).map(r => r.upt_key))
  const hasItems = (items = []) => items.some(it => uptsOf(it).size > 0)
  const fmt = (satuan, v) => (satuan === 'rupiah' ? formatRp(v) : num(v).toLocaleString('id-ID'))
  const groups = useMemo(() => groupWidgets(widgets), [widgets])
  const charts = groups.flatMap(g => g.widgets.filter(w => w.tipe === 'grafik'))
  // tampilan 'total': satu baris per seri, nilainya total seluruh UPT yang tampil (akun UPT: UPT-nya sendiri)
  const totalData = w => (w.konfigurasi?.series || []).map(sr => ({ name: sr.label, nilai: sumItems(sr.items), warna: sr.warna || '#1B5FA8' }))
  const chartData = w => scopeUpts.map(u => {
    const row = { name: u.label }
    ;(w.konfigurasi?.series || []).forEach(sr => { row[sr.label] = sumItems(sr.items, u.key) })
    return row
  })
  const noteFor = items => {
    const n = new Set((items || []).flatMap(it => [...uptsOf(it)])).size
    return isAdmin ? `${n} dari ${scopeUpts.length} UPT sudah input` : 'Sudah diinput UPT Anda'
  }
  const anyData = rowsAll.length > 0

  // Minggu terpilih belum ada isian (yang sudah disetujui): angka di bawah memakai minggu terakhir yang sudah terisi
  const lastFilledWeek = useMemo(() => {
    if (rows.length || !rowsAll.length) return null
    const o = Math.max(...rowsAll.map(r => weekOrder[r.period_id] ?? -1))
    return weeks[o] || null
  }, [rows, rowsAll, weekOrder, weeks])

  // Grafik garis perkembangan realisasi: minggu 1 tahun berjalan s.d. minggu terpilih, satu garis per kartu kelompok
  // "Realisasi Anggaran". Nilai tiap minggu dihitung sama persis dengan kartunya bila minggu itu yang dipilih.
  const realisasiGroup = useMemo(() => groups.find(g => /realisasi/i.test(g.nama) && g.widgets.some(w => w.tipe === 'kartu')), [groups])
  const realisasiLines = useMemo(() => (realisasiGroup?.widgets || []).filter(w => w.tipe === 'kartu'), [realisasiGroup])
  const trendData = useMemo(() => {
    if (!realisasiLines.length) return []
    const maxOrder = activeWeek ? (weekOrder[activeWeek.id] ?? -1) : maxWeekOrder
    const targetWeeks = weeksThisYear.filter(w => (weekOrder[w.id] ?? -1) <= maxOrder)
    return targetWeeks.map(w => {
      const o = weekOrder[w.id]
      const upTo = rowsAll.filter(r => (weekOrder[r.period_id] ?? -1) <= o)
      const point = { name: `${BULAN_PENDEK[(w.bulan || 1) - 1]} M${w.minggu_ke ?? ''}`, label: formatPeriodLabel(w) }
      realisasiLines.forEach(k => { point[k.judul] = sumItems(k.konfigurasi?.items, undefined, upTo) })
      return point
    })
  }, [realisasiLines, activeWeek, maxWeekOrder, weeksThisYear, weekOrder, rowsAll]) // eslint-disable-line react-hooks/exhaustive-deps
  const TREND_COLORS = ['#1B5FA8', '#0ea5e9', '#f59e0b', '#2F9E6E', '#7c3aed', '#e11d48']
  const lineColor = (k, i) => (k.konfigurasi?.sorot ? '#0B3A73' : TREND_COLORS[i % TREND_COLORS.length])
  // Kartu total (sorot, mis. "Total Realisasi Anggaran") tidak digambar sebagai garis; angkanya tetap muncul di
  // rangkuman (tooltip) saat titik minggu disorot.
  const garisTrend = realisasiLines.filter(k => !k.konfigurasi?.sorot)
  const totalTrend = realisasiLines.find(k => k.konfigurasi?.sorot)
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Dashboard"
        description={`${profile?.nama_lengkap || 'Pengguna'} · ${new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}${isAdmin ? ' · Admin' : uptLabel ? ` · ${uptLabel}` : ''}`}
      />

      <a href="/monitoring-updating" className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700">
        <span className="flex items-center gap-3"><ClipboardList size={19} className="text-emerald-700" /><span><strong className="block">Monitoring Updating</strong><span className="text-xs text-slate-500">Lihat progres pengisian laporan mingguan dan bulanan per Satker.</span></span></span>
        <span className="text-xs font-semibold text-emerald-800">Buka monitoring</span>
      </a>

      {/* Filter Bar Dashboard (Tahun, Bulan, Minggu, Satker) */}
      <div className="card p-4 shadow-sm border border-gray-100 dark:border-gray-800 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            <Filter size={14} className="text-blue-500" />
            <span>Filter Dashboard: {labelPeriode} · {selectedUptLabel}</span>
          </div>
          {activeWeek && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(activeWeek.tanggal_mulai).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
              {' – '}
              {new Date(activeWeek.tanggal_selesai).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
              {' · batas '}
              {new Date(activeWeek.deadline).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Tahun */}
          <div>
            <label className="form-label text-xs">Tahun</label>
            <select
              className="form-select text-sm w-full font-medium"
              value={tahun ?? ''}
              onChange={e => pickYear(Number(e.target.value))}
              title="Tahun Anggaran"
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          {/* Bulan */}
          <div>
            <label className="form-label text-xs">Bulan</label>
            <select
              className="form-select text-sm w-full font-medium text-blue-600 dark:text-blue-400"
              value={bulan}
              onChange={e => pickBulan(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              title="Filter Bulan"
            >
              <option value="all">Semua Bulan (Setahun Penuh)</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
                <option key={m} value={m}>{m}. {namaBulan(m)} {tahun}</option>
              ))}
            </select>
          </div>

          {/* Minggu Pelaporan */}
          <div>
            <label className="form-label text-xs">Minggu Pelaporan</label>
            <div className="flex items-center gap-1">
              <select
                className="form-select text-sm w-full"
                value={periodId}
                onChange={e => setPeriodId(e.target.value)}
                title="Pilih Minggu Pelaporan"
              >
                <option value="all">Semua Minggu ({weeksFiltered.length} Minggu)</option>
                {weeksFiltered.map(w => (
                  <option key={w.id} value={w.id}>{formatPeriodLabel(w)}</option>
                ))}
              </select>
              {activeWeek && (
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    className="btn-secondary text-xs p-2"
                    disabled={currentWeekIdx <= 0}
                    onClick={() => setPeriodId(weeksFiltered[currentWeekIdx - 1]?.id)}
                    title="Minggu sebelumnya"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    type="button"
                    className="btn-secondary text-xs p-2"
                    disabled={currentWeekIdx < 0 || currentWeekIdx >= weeksFiltered.length - 1}
                    onClick={() => setPeriodId(weeksFiltered[currentWeekIdx + 1]?.id)}
                    title="Minggu berikutnya"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Satker / Balai */}
          <div>
            <label className="form-label text-xs">Satker / Balai</label>
            {isAdmin ? (
              <select
                className="form-select text-sm w-full font-medium"
                value={selectedUpt}
                onChange={e => setSelectedUpt(e.target.value)}
                title="Filter Balai/Satker"
              >
                <option value="all">Semua Satker ({uptList.length} Balai)</option>
                {uptList.map(u => (
                  <option key={u.key} value={u.key}>{u.label}</option>
                ))}
              </select>
            ) : (
              <div className="h-[38px] px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold flex items-center gap-1.5 truncate">
                <Building2 size={14} className="text-blue-500 flex-shrink-0" />
                <span className="truncate">{uptList.find(u => u.key === uptKey)?.label || uptLabel || 'Balai Saya'}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {lastFilledWeek && !loadingRekap && (
        <div className="flex items-start gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-800 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-200">
          <Info size={16} className="mt-0.5 shrink-0" />
          <span>
            {labelPeriode} belum ada isian yang disetujui. Angka di bawah memakai
            nilai terakhir yang sudah diisi, yaitu <strong>{formatPeriodLabel(lastFilledWeek)}</strong>.
          </span>
        </div>
      )}

      {/* Kartu & grafik — isi diatur Admin di menu Kelola Dashboard */}
      {groups.filter(g => g.widgets.some(w => w.tipe === 'kartu')).map(g => (
        <div key={g.nama}>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mb-3">
            {g.nama}{g.widgets.some(w => w.gaya === 'berwarna') && ` — ${labelPeriode}`}
          </h3>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${g.widgets.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {g.widgets.filter(w => w.tipe === 'kartu').map(w => {
              const c = w.konfigurasi || {}
              const has = hasItems(c.items)
              const value = sumItems(c.items)
              if (w.gaya === 'putih') {
                return (
                  <div key={w.id} className="card p-4">
                    <p className="text-xs text-gray-500">{w.judul}</p>
                    <p className={`text-2xl font-bold font-display tabular-nums ${c.sorot ? 'text-emerald-700 dark:text-emerald-300' : ''}`}>
                      {loadingRekap ? '…' : has ? fmt(w.satuan, value) : '–'}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {loadingRekap ? '' : has ? (c.pembanding?.length ? `${c.pembandingLabel || 'Pembanding'} ${fmt(w.satuan, sumItems(c.pembanding))}` : noteFor(c.items)) : waitingNote}
                    </p>
                  </div>
                )
              }
              return (
                <StatCard
                  key={w.id}
                  icon={ICONS[w.ikon] || BarChart3}
                  color={w.warna || 'bg-blue-600'}
                  label={w.judul}
                  value={loadingRekap ? '…' : has ? fmt(w.satuan, value) : '–'}
                  note={loadingRekap ? '' : has ? (catatanTarget(c, w.satuan, value) || (c.pembanding?.length ? `${c.pembandingLabel || 'Pembanding'} ${fmt(w.satuan, sumItems(c.pembanding))}` : noteFor(c.items))) : (catatanTarget(c, w.satuan, 0) || waitingNote)}
                />
              )
            })}
          </div>
          {g === realisasiGroup && !loadingRekap && trendData.length > 0 && (
            <>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mt-6 mb-3">Realisasi Anggaran per Minggu</h3>
            <div className="card p-4">
              <div style={{ height: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData} margin={{ top: 8, right: 16, bottom: 4, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E3E8EF" />
                    <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} minTickGap={8} />
                    <YAxis tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={v => compactNumber('rupiah', v)} axisLine={false} tickLine={false} width={84} />
                    <Tooltip content={({ active, payload }) => {
                      if (!active || !payload?.length) return null
                      const titik = payload[0].payload
                      return (
                        <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs shadow-md">
                          <p className="font-semibold text-gray-900 mb-1">{titik.label}</p>
                          {payload.map(p => (
                            <p key={p.dataKey} className="flex justify-between gap-4" style={{ color: p.color }}>
                              <span>{p.name}</span><span className="tabular-nums">{formatRp(p.value)}</span>
                            </p>
                          ))}
                          {totalTrend && (
                            <p className="flex justify-between gap-4 mt-1 pt-1 border-t border-gray-100 font-semibold text-gray-900">
                              <span>{totalTrend.judul}</span><span className="tabular-nums">{formatRp(titik[totalTrend.judul])}</span>
                            </p>
                          )}
                        </div>
                      )
                    }} />
                    <Legend wrapperStyle={{ fontSize: 12 }} itemSorter={null} />
                    {garisTrend.map((k, i) => (
                      <Line
                        key={k.id}
                        type="monotone"
                        dataKey={k.judul}
                        name={k.judul}
                        stroke={lineColor(k, i)}
                        strokeWidth={k.konfigurasi?.sorot ? 3 : 2}
                        dot={trendData.length <= 12 ? { r: 3 } : false}
                        activeDot={{ r: 5 }}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            </>
          )}
        </div>
      ))}

      {/* Grafik */}
      {charts.length > 0 && (loadingRekap ? (
        <div className="card flex justify-center py-10">
          <Loader2 className="animate-spin text-gray-400" />
        </div>
      ) : !anyData ? (
        <div className="card p-6 text-center text-sm text-gray-400">
          <Hourglass size={28} className="mx-auto mb-2 opacity-40" />
          {isAdmin
            ? 'Menunggu UPT memasukkan data untuk minggu ini. Grafik akan tampil otomatis setelah ada isian.'
            : 'Menunggu Anda memasukkan data untuk minggu ini di menu Input Data.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {charts.map(w => {
            const series = w.konfigurasi?.series || []
            const total = w.konfigurasi?.tampilan === 'total'
            const view = chartView[w.id] || (total ? 'grafik' : 'tabel')
            const data = total ? totalData(w) : chartData(w)
            const jumlahBatang = new Set(series.map((sr, i) => sr.tumpuk || `#${i}`)).size // seri bertumpuk = 1 batang
            return (
              <div key={w.id} className="card p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-semibold">{w.judul}{isAdmin && !total ? ' per UPT/Balai' : ''}</h4>
                  <div className="flex items-center rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shrink-0">
                    <button
                      type="button"
                      className={`p-1.5 ${view === 'grafik' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-700'}`}
                      onClick={() => setChartView(v => ({ ...v, [w.id]: 'grafik' }))}
                      title="Tampilkan sebagai grafik"
                    >
                      <BarChart3 size={14} />
                    </button>
                    <button
                      type="button"
                      className={`p-1.5 ${view === 'tabel' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-700'}`}
                      onClick={() => setChartView(v => ({ ...v, [w.id]: 'tabel' }))}
                      title="Tampilkan sebagai tabel angka"
                    >
                      <Table2 size={14} />
                    </button>
                  </div>
                </div>
                {total && view === 'tabel' ? (
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {data.map((row, i) => (
                        <tr key={i}>
                          <td className="py-2 px-2">{row.name}</td>
                          <td className="py-2 px-2 text-right tabular-nums">{fmt(w.satuan, row.nilai)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : total ? (
                  // Total seluruh UPT: batang tegak, nama pilihan di sumbu bawah, jumlah di sumbu kiri
                  <div style={{ height: 260 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data} margin={{ top: 20, right: 16, bottom: 4, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E3E8EF" />
                        <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#334155' }} interval={0} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={v => compactNumber(w.satuan, v)} allowDecimals={w.satuan === 'rupiah'} axisLine={false} tickLine={false} width={48} />
                        <Tooltip formatter={v => [fmt(w.satuan, v), w.judul]} cursor={{ fill: 'rgba(15, 82, 166, 0.06)' }} />
                        <Bar dataKey="nilai" radius={[4, 4, 0, 0]} maxBarSize={56}>
                          {data.map((row, i) => <Cell key={i} fill={row.warna} />)}
                          <LabelList dataKey="nilai" position="top" formatter={v => fmt(w.satuan, v)} style={{ fontSize: 11, fill: '#334155' }} />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                ) : view === 'tabel' ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200 dark:border-gray-700">
                          <th className="py-2 px-2">UPT/Balai</th>
                          {series.map((sr, i) => <th key={i} className="py-2 px-2 text-right">{sr.label}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {data.map((row, i) => (
                          <tr key={i}>
                            <td className="py-2 px-2">{row.name}</td>
                            {series.map((sr, j) => <td key={j} className="py-2 px-2 text-right tabular-nums">{fmt(w.satuan, row[sr.label])}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  // Batang horizontal: nama UPT di sumbu kiri (terbaca utuh, tidak miring/bertumpuk); tinggi
                  // mengikuti jumlah UPT supaya UPT tidak berdesakan.
                  <div style={{ height: Math.max(160, data.length * (14 + jumlahBatang * 12) + 70) }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 16, bottom: 4, left: 4 }} barCategoryGap="22%">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E3E8EF" />
                        <XAxis type="number" tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={v => compactNumber(w.satuan, v)} allowDecimals={w.satuan === 'rupiah'} axisLine={false} tickLine={false} />
                        <YAxis type="category" dataKey="name" width={132} tick={{ fontSize: 11, fill: '#334155' }} interval={0} axisLine={false} tickLine={false} />
                        <Tooltip formatter={v => fmt(w.satuan, v)} cursor={{ fill: 'rgba(15, 82, 166, 0.06)' }} />
                        <Legend wrapperStyle={{ fontSize: 12 }} itemSorter={null} />
                        {series.map((sr, i) => <Bar key={i} dataKey={sr.label} name={sr.label} fill={sr.warna || '#1B5FA8'} stackId={sr.tumpuk || undefined} radius={sr.tumpuk ? 0 : [0, 4, 4, 0]} maxBarSize={14} />)}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
