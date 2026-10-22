/**
 * views/InputData/InputDataPage.jsx
 * Halaman "Input Data": tabel rekap mingguan (filter tahun/triwulan/bulan/minggu/jenis data,
 * dan UPT khusus Admin) + tombol "+ Input Data" (di samping Download Excel Rekap) yang membuka popup form input.
 * Hanya Jenis Data mingguan yang tampil. Akun UPT hanya melihat data UPT-nya sendiri.
 * Rekap triwulan & tahun otomatis dijumlahkan dari data mingguan (tidak ada input/upload).
 *
 * jenisDataId (opsional): jika diberikan (dari sidebar sub-menu), langsung filter ke jenis data tersebut
 * dan popup input langsung menampilkan PeriodeTabs tanpa dropdown "Pilih Jenis Data Mingguan".
 */
import { useState, useEffect } from 'react'
import { useAuth } from '../../AuthContext'
import { db } from '../../lib/db'
import PeriodeTabs, { isBulananJenisData } from './PeriodeTabs'
import AdminPeriodRecap from '../../components/AdminPeriodRecap'
import Modal from '../../components/Modal'
import PilihJenisData from './PilihJenisData'
import ImporWeeklyReport from './ImporWeeklyReport'
import { Plus, FileSpreadsheet, Loader2, Database } from 'lucide-react'

/** Tombol Edit/Isi di tabel rekap: hanya form satu baris (PeriodeTabs mode langsungBaris), tanpa popup input. */
function EditBarisLangsung({ target, onSelesai }) {
  const [jd, setJd] = useState(null)
  useEffect(() => {
    db.from('jenis_data').select('*').eq('id', target.jenisDataId).single().then(({ data }) => setJd(data || null))
  }, [target.jenisDataId])
  if (!jd) return null
  return (
    <PeriodeTabs
      jenisData={jd}
      initialPeriodId={target.periodId}
      initialUptKey={target.uptKey}
      langsungBaris={target.barisKe}
      onSaved={onSelesai}
      onSelesai={onSelesai}
    />
  )
}

export default function InputMingguanPage({ jenisDataId } = {}) {
  const { isAdmin, uptKey } = useAuth()
  const [modalOpen, setModalOpen] = useState(false)
  const [imporOpen, setImporOpen] = useState(false)
  // Jenis Data + Periode + UPT yang dipakai popup saat dibuka: dari baris yang di-Edit, atau (tombol
  // "+ Input Data") dari filter yang sedang dipilih di halaman, supaya tidak perlu memilih ulang.
  const [editTarget, setEditTarget] = useState(null)
  const [pageFilter, setPageFilter] = useState(null)
  // Berubah setiap popup ditutup (baik karena disimpan maupun ditutup manual) supaya AdminPeriodRecap
  // memuat ulang angkanya dari database — tanpa me-reset filter yang sedang dipilih.
  const [refreshKey, setRefreshKey] = useState(0)

  // Jenis data spesifik (dari sidebar sub-menu, /input-mingguan/<id>)
  const [fixedJd, setFixedJd] = useState(null)
  const [fixedLoading, setFixedLoading] = useState(!!jenisDataId)
  const [allJenisData, setAllJenisData] = useState([])

  useEffect(() => {
    if (!jenisDataId) return
    setFixedLoading(true)
    Promise.all([
      db.from('jenis_data').select('*').eq('id', jenisDataId).single(),
      db.from('jenis_data').select('*').eq('aktif', true).order('created_at'),
    ]).then(([{ data: jd }, { data: all }]) => {
      setFixedJd(jd || null)
      const filtered = (all || []).filter(j => !isBulananJenisData(j))
      setAllJenisData(filtered)
      setFixedLoading(false)
    })
  }, [jenisDataId])

  function openAdd() {
    setEditTarget(pageFilter)
    setModalOpen(true)
  }

  // Baris tertentu (barisKe) -> langsung form baris itu; selain itu popup Input Data biasa
  const [barisTarget, setBarisTarget] = useState(null)
  function openEditRow(target) {
    if (target.barisKe !== undefined) return setBarisTarget(target)
    setEditTarget(target)
    setModalOpen(true)
  }

  function closeAndRefresh() {
    setModalOpen(false)
    setImporOpen(false)
    setBarisTarget(null)
    setRefreshKey(k => k + 1)
  }

  // Mode jenis data spesifik: loading
  if (jenisDataId && fixedLoading) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-400">
        <Loader2 size={24} className="animate-spin mr-2" />
        Memuat jenis data...
      </div>
    )
  }

  // Mode jenis data spesifik: tidak ditemukan
  if (jenisDataId && !fixedJd) {
    return (
      <div className="text-center py-16">
        <Database size={48} className="mx-auto mb-4 text-gray-300 dark:text-gray-600" />
        <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-1">Jenis Data tidak ditemukan</h3>
        <p className="text-sm text-gray-400 dark:text-gray-500">Jenis data telah dihapus atau tidak tersedia.</p>
      </div>
    )
  }

  const pageTitle = fixedJd ? fixedJd.judul : 'Input Data'

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-bold text-2xl font-display text-gray-900 dark:text-white">{pageTitle}</h1>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button type="button" onClick={() => setImporOpen(true)} className="btn-secondary text-sm" title="Unggah Form Weekly Report (Excel) yang biasa dikirim UPT">
            <FileSpreadsheet size={16} />
            Impor Weekly Report
          </button>
        </div>
      </div>

      <AdminPeriodRecap
        key={jenisDataId || 'all'}
        refreshToken={refreshKey}
        levelFilter="minggu"
        userUptKey={isAdmin ? null : uptKey}
        onEditRow={openEditRow}
        onFilterChange={setPageFilter}
        fixedJenisDataId={jenisDataId || undefined}
        aksiHeader={(
          <button type="button" onClick={openAdd} className="btn-primary text-xs py-1.5 px-3">
            <Plus size={14} />
            Input Data
          </button>
        )}
      />

      <Modal
        open={modalOpen}
        onClose={closeAndRefresh}
        title={fixedJd ? fixedJd.judul : 'Input Data'}
        maxWidth="max-w-5xl"
      >
        {fixedJd ? (
          /* Mode jenis data spesifik: langsung PeriodeTabs, tanpa "Pilih Jenis Data Mingguan" */
          <PeriodeTabs
            key={fixedJd.id}
            jenisData={fixedJd}
            allJenisData={allJenisData}
            onSaved={closeAndRefresh}
            initialPeriodId={editTarget?.periodId}
            initialUptKey={editTarget?.uptKey}
          />
        ) : (
          <PilihJenisData
            tipe="mingguan"
            onSaved={closeAndRefresh}
            initialJenisDataId={editTarget?.jenisDataId}
            initialPeriodId={editTarget?.periodId}
            initialUptKey={editTarget?.uptKey}
          />
        )}
      </Modal>

      {barisTarget && <EditBarisLangsung key={JSON.stringify(barisTarget)} target={barisTarget} onSelesai={closeAndRefresh} />}

      <Modal open={imporOpen} onClose={closeAndRefresh} title="Impor Weekly Report" maxWidth="max-w-5xl">
        {imporOpen && <ImporWeeklyReport onSaved={closeAndRefresh} />}
      </Modal>
    </div>
  )
}

