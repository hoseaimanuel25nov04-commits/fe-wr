'use client'
import AdminOnly from '../../../components/AdminOnly'
import KotakMasuk from '../../../views/admin/KotakMasuk'

export default function Page() {
  return (
    <AdminOnly>
      <KotakMasuk />
    </AdminOnly>
  )
}
