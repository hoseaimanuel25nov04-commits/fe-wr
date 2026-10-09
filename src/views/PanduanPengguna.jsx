/**
 * views/PanduanPengguna.jsx
 * Panduan Pengguna di dalam aplikasi. Isinya dikirim server sesuai peran akun (be/src/modules/panduan/panduan.routes.ts): akun UPT
 * hanya menerima panduan UPT, akun Admin hanya panduan Admin.
 */
import { useEffect, useMemo, useState } from 'react'
import { panduan } from '../lib/db'
import Markdown, { parseMarkdown, slug } from '../components/Markdown'
import PageHeader from '../components/PageHeader'
import { BookOpen, Loader2, Search, Printer } from 'lucide-react'

export default function PanduanPengguna() {
  return (
    <div className="space-y-6">
      <PageHeader title="Panduan Pengguna" description="Cara memakai aplikasi sesuai jenis akun Anda." />
      <IsiPanduan />
    </div>
  )
}

function IsiPanduan() {
  const [data, setData] = useState(null)
  const [galat, setGalat] = useState('')
  const [cari, setCari] = useState('')

  useEffect(() => {
    panduan().then(({ data: d, error }) => (error ? setGalat(error.message) : setData(d.data)))
  }, [])

  const daftarIsi = useMemo(() => (data ? parseMarkdown(data.isi).filter(b => b.type === 'h' && b.level === 2).map(b => b.text) : []), [data])

  // Pencarian: tampilkan hanya bagian (##) yang memuat kata yang dicari
  const isiTampil = useMemo(() => {
    if (!data) return ''
    const q = cari.trim().toLowerCase()
    if (!q) return data.isi
    const bagian = data.isi.split(/\n(?=## )/)
    const cocok = bagian.slice(1).filter(b => b.toLowerCase().includes(q))
    return [bagian[0].split('\n')[0], ...cocok].join('\n\n')
  }, [data, cari])

  if (galat) return <div className="card p-6 text-sm text-rose-600">{galat}</div>
  if (!data) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-gray-400" /></div>

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr] animate-fade-in">
      <aside className="lg:sticky lg:top-20 self-start space-y-3 print:hidden">
        <div className="card p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 flex items-center gap-2">
            <BookOpen size={14} /> Panduan {data.peran === 'admin' ? 'Admin' : 'UPT/Balai'}
          </p>
          <div className="relative mt-3">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input className="form-input pl-8 text-xs w-full" placeholder="Cari di panduan…" value={cari} onChange={e => setCari(e.target.value)} />
          </div>
          {!cari && (
            <nav className="mt-3 space-y-0.5 max-h-[60vh] overflow-y-auto">
              {daftarIsi.map(t => (
                <a key={t} href={`#${slug(t)}`} onClick={e => { e.preventDefault(); document.getElementById(slug(t))?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                  className="block rounded px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
                  {t}
                </a>
              ))}
            </nav>
          )}
          <button type="button" onClick={() => window.print()} className="btn-secondary text-xs w-full mt-3"><Printer size={13} /> Cetak / Simpan PDF</button>
        </div>
      </aside>
      <article className="card p-6 md:p-8 max-w-4xl">
        {cari && isiTampil.split('\n## ').length <= 1 && <p className="text-sm text-gray-400 mb-4">Tidak ada bagian yang memuat “{cari}”.</p>}
        <Markdown source={isiTampil} />
      </article>
    </div>
  )
}
