/**
 * views/InputData/InputBulananPage.jsx
 * Halaman "Input Bulanan": tabel rekap bulanan (akumulasi 4 minggu / data by name unggahan UPT)
 * + tombol "+ Input Bulanan" yang membuka popup form input/upload.
 *
 * jenisDataId (opsional): jika diberikan (dari sidebar sub-menu), langsung filter ke jenis data tersebut
 * dan popup input langsung menampilkan PeriodeTabs tanpa dropdown "Pilih Jenis Data Bulanan".
 */
import { useState, useEffect } from 'react'
import Modal from '../../components/Modal'
import PilihJenisData from './PilihJenisData'
import PeriodeTabs, { isBulananJenisData } from './PeriodeTabs'
import RekapBulanan from '../RekapBulanan'
import { db } from '../../lib/db'
import { Plus, Loader2, Database } from 'lucide-react'

export default function InputBulananPage({ jenisDataId } = {}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  // Jenis data spesifik (dari sidebar sub-menu, /input-bulanan/<id>)
  const [fixedJd, setFixedJd] = useState(null)
  const [fixedLoading, setFixedLoading] = useState(!!jenisDataId)
  const [allJenisData, setAllJenisData] = useState([])

  useEffect(() => {
    if (!jenisDataId) {
      setFixedJd(null)
      setFixedLoading(false)
      return
    }
    setFixedLoading(true)
    Promise.all([
      db.from('jenis_data').select('*').eq('id', jenisDataId).single(),
      db.from('jenis_data').select('*').eq('aktif', true).order('created_at'),
    ]).then(([{ data: jd }, { data: all }]) => {
      setFixedJd(jd || null)
      const filtered = (all || []).filter(j => isBulananJenisData(j))
      setAllJenisData(filtered)
      setFixedLoading(false)
    })
  }, [jenisDataId])

  function closeAndRefresh() {
    setModalOpen(false)
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

  const pageTitle = fixedJd ? fixedJd.judul : 'Input Data Bulanan'

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-bold text-2xl font-display text-gray-900 dark:text-white">{pageTitle}</h1>
        </div>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="btn-primary text-sm"
        >
          <Plus size={16} />
          Input Data Bulanan
        </button>
      </div>

      <RekapBulanan key={`${refreshKey}-${jenisDataId || 'all'}`} fixedJenisDataId={jenisDataId || undefined} />

      <Modal
        open={modalOpen}
        onClose={closeAndRefresh}
        title={fixedJd ? fixedJd.judul : 'Input Data Bulanan'}
        maxWidth="max-w-5xl"
      >
        {fixedJd ? (
          /* Mode jenis data spesifik: langsung PeriodeTabs, tanpa "Pilih Jenis Data Bulanan" */
          <PeriodeTabs
            key={fixedJd.id}
            jenisData={fixedJd}
            allJenisData={allJenisData}
            onSaved={closeAndRefresh}
          />
        ) : (
          <PilihJenisData tipe="bulanan" onSaved={closeAndRefresh} />
        )}
      </Modal>
    </div>
  )
}
