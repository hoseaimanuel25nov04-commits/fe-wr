'use client'
import { useParams } from 'next/navigation'
import InputBulananPage from '../../../../views/InputData/InputBulananPage'

// Input Bulanan > jenis data spesifik, mis. /input-bulanan/<uuid>
export default function Page() {
  const { id } = useParams()
  return <InputBulananPage jenisDataId={decodeURIComponent(String(id || ''))} />
}
