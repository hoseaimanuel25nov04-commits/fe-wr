'use client'
import { useParams } from 'next/navigation'
import InputMingguanPage from '../../../../views/InputData/InputDataPage'

// Input Data > jenis data spesifik, mis. /input-mingguan/<uuid>
export default function Page() {
  const { id } = useParams()
  return <InputMingguanPage jenisDataId={decodeURIComponent(String(id || ''))} />
}
