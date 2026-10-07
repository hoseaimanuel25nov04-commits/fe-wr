'use client'
import { useParams } from 'next/navigation'
import DokumenKategori from '../../../../views/DokumenKategori'

// Administrasi > dokumen satu kategori (kode dari Kategori Dokumen), mis. /dokumen/kinerja
export default function Page() {
  const { kode } = useParams()
  return <DokumenKategori kode={decodeURIComponent(String(kode || ''))} />
}
