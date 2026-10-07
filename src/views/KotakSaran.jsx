/**
 * views/KotakSaran.jsx
 * Semua akun (UPT & Admin): kirim saran/kendala/pertanyaan ke Kotak Masuk Admin, dan lihat riwayat "Saran Saya"
 * beserta status & balasan Admin (be/src/routes/saran.js).
 */
import { useEffect, useState } from 'react'
import { saran, getFeatures } from '../lib/db'
import PageHeader from '../components/PageHeader'
import InfoCard from '../components/InfoCard'
import Badge from '../components/Badge'
import { Loader2, Send, MessageSquareReply } from 'lucide-react'

export const KATEGORI_SARAN = ['Saran', 'Kendala / Error', 'Pertanyaan', 'Lainnya']
export const STATUS_SARAN = { baru: ['Baru', 'warning'], dibaca: ['Dibaca', 'neutral'], selesai: ['Selesai', 'success'] }
export const fmtWaktu = d => new Date(d).toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

export default function KotakSaran() {
  const [aktif, setAktif] = useState(true)
  const [form, setForm] = useState({ kategori: 'Saran', judul: '', isi: '' })
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState(null)
  const [riwayat, setRiwayat] = useState(null)

  async function muat() {
    const { data, error } = await saran.milikSaya()
    if (error) { if (error.status === 409) setAktif(false); else setMsg({ type: 'error', text: error.message }); setRiwayat([]); return }
    setRiwayat(data.data || [])
  }
  useEffect(() => {
    getFeatures().then(f => { if (f.kotakSaran === false) { setAktif(false); setRiwayat([]) } else muat() })
  }, [])

  async function kirim(e) {
    e.preventDefault()
    if (!form.judul.trim() || !form.isi.trim()) return setMsg({ type: 'error', text: 'Judul dan isi wajib diisi.' })
    setBusy(true); setMsg(null)
    const { error } = await saran.kirim(form)
    setBusy(false)
    if (error) return setMsg({ type: 'error', text: error.message })
    setForm({ kategori: form.kategori, judul: '', isi: '' })
    setMsg({ type: 'success', text: 'Terima kasih, pesan Anda sudah masuk ke Kotak Masuk Admin.' })
    muat()
  }

  if (!aktif) {
    return <div className="card p-6 text-sm text-amber-700 dark:text-amber-300">Kotak Saran belum aktif. Admin perlu menjalankan <code>npm run migrate</code> di folder be (migrasi_21), lalu restart backend.</div>
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Kotak Saran"
        description="Sampaikan saran, kendala, atau pertanyaan mengenai aplikasi. Pesan akan diterima dan ditanggapi oleh Admin."
      />

      {msg && <div className={`rounded-lg px-4 py-3 text-sm ${msg.type === 'error' ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-300' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300'}`}>{msg.text}</div>}

      <InfoCard title="Kirim Pesan">
        <form onSubmit={kirim} className="grid gap-3 md:grid-cols-[200px_1fr]">
          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Kategori
            <select className="form-input mt-1" value={form.kategori} onChange={e => setForm(f => ({ ...f, kategori: e.target.value }))}>
              {KATEGORI_SARAN.map(k => <option key={k}>{k}</option>)}
            </select>
          </label>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Judul
            <input className="form-input mt-1" maxLength={190} placeholder="mis. Tombol Simpan tidak bisa ditekan di Input Bulanan" value={form.judul} onChange={e => setForm(f => ({ ...f, judul: e.target.value }))} />
          </label>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-400 md:col-span-2">Isi pesan
            <textarea className="form-input mt-1 min-h-[120px]" maxLength={5000} placeholder="Ceritakan sejelas mungkin: menu apa, langkah yang dilakukan, dan apa yang terjadi." value={form.isi} onChange={e => setForm(f => ({ ...f, isi: e.target.value }))} />
            <span className="block text-right text-[11px] text-gray-400 mt-0.5">{form.isi.length.toLocaleString('id-ID')} / 5.000</span>
          </label>
          <div className="md:col-span-2 flex justify-end">
            <button className="btn-primary text-sm" disabled={busy}>{busy ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />} Kirim</button>
          </div>
        </form>
      </InfoCard>

      <InfoCard title={`Saran Saya (${riwayat ? riwayat.length : '…'})`}>
        {!riwayat ? (
          <div className="flex justify-center py-8"><Loader2 className="animate-spin text-gray-400" /></div>
        ) : riwayat.length === 0 ? (
          <p className="text-sm text-gray-400 py-6 text-center">Belum ada pesan yang Anda kirim.</p>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {riwayat.map(s => (
              <div key={s.id} className="py-3 space-y-1.5">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.judul} <span className="font-normal text-gray-400">· {s.kategori}</span></p>
                  <span className="flex items-center gap-2 text-xs text-gray-400">{fmtWaktu(s.created_at)} <Badge variant={STATUS_SARAN[s.status]?.[1]}>{STATUS_SARAN[s.status]?.[0] || s.status}</Badge></span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">{s.isi}</p>
                {s.balasan && (
                  <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 px-3 py-2 text-sm">
                    <p className="text-xs font-semibold text-blue-800 dark:text-blue-200 flex items-center gap-1.5"><MessageSquareReply size={13} /> Balasan Admin · {s.dibalas_oleh} · {fmtWaktu(s.dibalas_at)}</p>
                    <p className="mt-1 text-gray-700 dark:text-gray-200 whitespace-pre-line">{s.balasan}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </InfoCard>
    </div>
  )
}
