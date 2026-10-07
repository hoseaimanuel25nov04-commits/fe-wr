/**
 * views/InputData/InputDataPage.jsx
 * Halaman "Input Mingguan": tabel rekap mingguan (filter tahun/triwulan/bulan/minggu/jenis data,
 * dan UPT khusus Admin) + tombol "+ Input Mingguan" yang membuka popup form input.
 * Hanya Jenis Data mingguan yang tampil. Akun UPT hanya melihat data UPT-nya sendiri.
 * Rekap triwulan & tahun otomatis dijumlahkan dari data mingguan (tidak ada input/upload).
 */
import { useState, useEffect } from 'react'
import { useAuth } from '../../AuthContext'
import { db } from '../../lib/db'
import PeriodeTabs from './PeriodeTabs'
import AdminPeriodRecap from '../../components/AdminPeriodRecap'
import Modal from '../../components/Modal'
import PilihJenisData from './PilihJenisData'
import ImporWeeklyReport from './ImporWeeklyReport'
import { Plus, FileSpreadsheet } from 'lucide-react'

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

export default function InputMingguanPage() {
  const { isAdmin, uptKey } = useAuth()
  const [modalOpen, setModalOpen] = useState(false)
  const [imporOpen, setImporOpen] = useState(false)
  // Jenis Data + Periode + UPT yang dipakai popup saat dibuka: dari baris yang di-Edit, atau (tombol
  // "+ Input Mingguan") dari filter yang sedang dipilih di halaman, supaya tidak perlu memilih ulang.
  const [editTarget, setEditTarget] = useState(null)
  const [pageFilter, setPageFilter] = useState(null)
  // Berubah setiap popup ditutup (baik karena disimpan maupun ditutup manual) supaya AdminPeriodRecap
  // memuat ulang angkanya dari database — tanpa me-reset filter yang sedang dipilih.
  const [refreshKey, setRefreshKey] = useState(0)

  function openAdd() {
    setEditTarget(pageFilter)
    setModalOpen(true)
  }

  // Baris tertentu (barisKe) -> langsung form baris itu; selain itu popup Input Mingguan biasa
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

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-bold text-2xl font-display text-gray-900 dark:text-white">Input Mingguan</h1>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button type="button" onClick={() => setImporOpen(true)} className="btn-secondary text-sm" title="Unggah Form Weekly Report (Excel) yang biasa dikirim UPT">
            <FileSpreadsheet size={16} />
            Impor Weekly Report
          </button>
          <button
            type="button"
            onClick={openAdd}
            className="btn-primary text-sm"
          >
            <Plus size={16} />
            Input Mingguan
          </button>
        </div>
      </div>

      <AdminPeriodRecap
        refreshToken={refreshKey}
        levelFilter="minggu"
        userUptKey={isAdmin ? null : uptKey}
        onEditRow={openEditRow}
        onFilterChange={setPageFilter}
      />

      <Modal
        open={modalOpen}
        onClose={closeAndRefresh}
        title="Input Mingguan"
        maxWidth="max-w-5xl"
      >
        <PilihJenisData
          tipe="mingguan"
          onSaved={closeAndRefresh}
          initialJenisDataId={editTarget?.jenisDataId}
          initialPeriodId={editTarget?.periodId}
          initialUptKey={editTarget?.uptKey}
        />
      </Modal>

      {barisTarget && <EditBarisLangsung key={JSON.stringify(barisTarget)} target={barisTarget} onSelesai={closeAndRefresh} />}

      <Modal open={imporOpen} onClose={closeAndRefresh} title="Impor Weekly Report" maxWidth="max-w-5xl">
        {imporOpen && <ImporWeeklyReport onSaved={closeAndRefresh} />}
      </Modal>
    </div>
  )
}
