/**
 * views/CatatanAktivitas.jsx
 * Catatan Aktivitas untuk akun UPT: data yang ditolak Admin beserta alasannya (be/src/modules/aktivitas/aktivitas.service.ts).
 * Baris yang ditolak sudah dipindah ke Tempat Sampah, jadi tidak tampil lagi di tabel input; UPT mengisi ulang data
 * yang benar. Admin melihat penolakan semua UPT; catatan lengkap Admin ada di menu Tempat Sampah.
 */
import { useEffect, useState } from 'react'
import { api } from '../lib/db'
import { useAuth } from '../AuthContext'
import PageHeader from '../components/PageHeader'
import InfoCard from '../components/InfoCard'
import { Loader2, XCircle, CheckCircle2 } from 'lucide-react'

const SUMBER = { rekap_nilai: 'Input Mingguan', data_entries: 'Input Bulanan (per nama)', dokumen_upload: 'Input Bulanan (dokumen)' }
const fmtWaktu = d => new Date(d).toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

export default function CatatanAktivitas() {
  const { isAdmin } = useAuth()
  const [list, setList] = useState(null)
  const [galat, setGalat] = useState('')

  useEffect(() => {
    api('/aktivitas/penolakan', { method: 'GET' }).then(({ data, error }) => (error ? setGalat(error.message) : setList(data.data || [])))
  }, [])

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Catatan Aktivitas"
        description={isAdmin ? 'Data UPT yang ditolak Admin beserta alasannya.' : 'Data UPT Anda yang ditolak Admin beserta alasannya.'}
      />
      <InfoCard title={`Data Ditolak (${list ? list.length : '…'})`}>
        <p className="text-xs text-gray-500 mb-3">
          Data yang ditolak sudah dihapus dari tabel. Perbaiki lalu isi ulang data yang benar di Input Mingguan atau Input Bulanan.
        </p>
        {galat ? (
          <p className="text-sm text-rose-600">{galat}</p>
        ) : !list ? (
          <div className="flex justify-center py-8"><Loader2 className="animate-spin text-gray-400" /></div>
        ) : list.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <CheckCircle2 size={30} className="mx-auto mb-2 opacity-40" />
            <p className="text-sm">Belum ada data yang ditolak.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {list.map(r => (
              <div key={r.id} className="py-3 flex items-start gap-3">
                <XCircle size={17} className="text-rose-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {r.jenis_data || SUMBER[r.tabel] || 'Data'}
                      <span className="font-normal text-gray-400"> · {r.periode}{isAdmin && r.upt ? ` · ${r.upt}` : ''}</span>
                    </p>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{fmtWaktu(r.waktu)}</span>
                  </div>
                  {r.isi && <p className="text-xs text-gray-600 dark:text-gray-300 break-words">{r.isi}</p>}
                  <p className="text-xs">
                    <span className="font-semibold text-rose-700 dark:text-rose-300">Alasan: </span>
                    <span className="text-gray-700 dark:text-gray-200">{r.alasan || 'Tidak ada alasan yang ditulis.'}</span>
                  </p>
                  <p className="text-[11px] text-gray-400">{SUMBER[r.tabel] || ''}{r.oleh ? ` · ditolak oleh ${r.oleh}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </InfoCard>
    </div>
  )
}
