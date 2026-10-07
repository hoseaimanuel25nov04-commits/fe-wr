'use client'
import AdminOnly from '../../../components/AdminOnly'
import KelolaKategoriDokumen from '../../../views/admin/KelolaKategoriDokumen'

export default function Page() {
  return (
    <AdminOnly>
      <KelolaKategoriDokumen />
    </AdminOnly>
  )
}
