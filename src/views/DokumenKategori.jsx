/**
 * views/DokumenKategori.jsx
 * Halaman dokumen satu kategori (alamat /dokumen/<kode>), mis. Dokumen Kinerja. Kategori diatur Admin di menu
 * Pengaturan Lanjutan > Kategori Dokumen. Akun UPT hanya bisa membuka kategori aktif yang diizinkan untuk UPT.
 */
import { useEffect, useState } from 'react'
import { kategoriDokumen, getFeatures } from '../lib/db'
import ArsipHistoris from './ArsipHistoris'
import { Loader2 } from 'lucide-react'

export default function DokumenKategori({ kode }) {
  const [info, setInfo] = useState(undefined)
  const [galat, setGalat] = useState('')

  useEffect(() => {
    let batal = false
    ;(async () => {
      const feat = await getFeatures()
      // Sebelum migrasi_23 hanya Dokumen Kinerja (PDF) yang dikenal
      if (!feat.kategoriDokumen) {
        if (!batal) setInfo(kode === 'kinerja' && feat.dokumenKinerja ? { kode, nama: 'Dokumen Kinerja', format: ['pdf'] } : null)
        return
      }
      const { data, error } = await kategoriDokumen.daftar()
      if (batal) return
      if (error) return setGalat(error.message)
      setInfo((data.data || []).find(k => k.kode === kode) || null)
    })()
    return () => { batal = true }
  }, [kode])

  if (galat) return <div className="card p-6 text-sm text-rose-600">{galat}</div>
  if (info === undefined) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-gray-400" /></div>
  if (!info) return <div className="card p-6 text-sm text-gray-500">Kategori dokumen ini tidak ditemukan atau tidak tersedia untuk akun Anda.</div>
  return <ArsipHistoris key={kode} kategori={kode} info={info} />
}
