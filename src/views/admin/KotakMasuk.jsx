/**
 * views/admin/KotakMasuk.jsx
 * Admin: semua pesan Kotak Saran (dari akun UPT maupun sesama Admin). Semua akun Admin melihat isi yang sama.
 * Membuka pesan baru menandainya "Dibaca"; Admin dapat membalas, menandai selesai, atau menghapus.
 */
import { useEffect, useState, useCallback } from 'react'
import { saran } from '../../lib/db'
import { confirmDialog } from '../../lib/dialog'
import PageHeader from '../../components/PageHeader'
import Badge from '../../components/Badge'
import { STATUS_SARAN, fmtWaktu } from '../KotakSaran'
import { Loader2, Inbox, CheckCheck, Trash2, Send, ChevronDown, ChevronRight, MessageSquareReply } from 'lucide-react'

const FILTER = [['', 'Semua'], ['baru', 'Baru'], ['dibaca', 'Dibaca'], ['selesai', 'Selesai']]

export default function KotakMasuk() {
  const [status, setStatus] = useState('')
  const [list, setList] = useState(null)
  const [buka, setBuka] = useState(null)
  const [balasan, setBalasan] = useState({})
  const [busy, setBusy] = useState('')
  const [msg, setMsg] = useState(null)

  const muat = useCallback(async () => {
    const { data, error } = await saran.daftar(status)
    if (error) { setMsg({ type: 'error', text: error.message }); setList([]); return }
    setList(data.data || [])
  }, [status])
  useEffect(() => { setList(null); muat() }, [muat])

  async function ubah(s, body, pesan) {
    setBusy(s.id)
    const { error } = await saran.ubah(s.id, body)
    setBusy('')
    if (error) return setMsg({ type: 'error', text: error.message })
    if (pesan) setMsg({ type: 'success', text: pesan })
    // Beritahu sidebar agar angka pesan baru diperbarui
    window.dispatchEvent(new Event('kotak-masuk-berubah'))
    muat()
  }

  function toggle(s) {
    const terbuka = buka === s.id ? null : s.id
    setBuka(terbuka)
    if (terbuka && s.status === 'baru') ubah(s, { status: 'dibaca' })
  }

  async function hapus(s) {
    if (!await confirmDialog(`Hapus pesan "${s.judul}"? Pesan dihapus permanen.`, { danger: true, confirmLabel: 'Hapus' })) return
    setBusy(s.id)
    const { error } = await saran.hapus(s.id)
    setBusy('')
    if (error) return setMsg({ type: 'error', text: error.message })
    window.dispatchEvent(new Event('kotak-masuk-berubah'))
    muat()
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader title="Kotak Masuk" description="Saran, kendala, dan pertanyaan yang dikirim pengguna melalui Kotak Saran." />

      {msg && <div className={`rounded-lg px-4 py-3 text-sm ${msg.type === 'error' ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-300' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300'}`}>{msg.text}</div>}

      <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
        {FILTER.map(([v, label]) => (
          <button key={v} onClick={() => setStatus(v)} className={`px-4 py-1.5 rounded-lg text-sm font-medium ${status === v ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>{label}</button>
        ))}
      </div>

      <div className="card divide-y divide-gray-100 dark:divide-gray-800">
        {!list ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-gray-400" /></div>
        ) : list.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <Inbox size={32} className="mx-auto mb-2 opacity-40" />
            <p className="text-sm">Tidak ada pesan{status ? ` berstatus ${FILTER.find(f => f[0] === status)[1].toLowerCase()}` : ''}.</p>
          </div>
        ) : list.map(s => {
          const terbuka = buka === s.id
          const pengirim = s.pengirim_role === 'admin' ? 'Admin' : (s.upt_label || s.upt_key || 'UPT')
          return (
            <div key={s.id} className={s.status === 'baru' ? 'bg-amber-50/50 dark:bg-amber-950/10' : ''}>
              <button type="button" onClick={() => toggle(s)} className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-800/40">
                {terbuka ? <ChevronDown size={16} className="mt-0.5 text-gray-400" /> : <ChevronRight size={16} className="mt-0.5 text-gray-400" />}
                <div className="min-w-0 flex-1">
                  <p className={`text-sm truncate ${s.status === 'baru' ? 'font-bold text-gray-900 dark:text-white' : 'font-medium text-gray-800 dark:text-gray-200'}`}>{s.judul}</p>
                  <p className="text-xs text-gray-500 truncate">{s.pengirim_nama || s.pengirim_email} · {pengirim} · {s.kategori}</p>
                </div>
                <span className="flex flex-col items-end gap-1 flex-shrink-0">
                  <Badge variant={STATUS_SARAN[s.status]?.[1]}>{STATUS_SARAN[s.status]?.[0] || s.status}</Badge>
                  <span className="text-[11px] text-gray-400">{fmtWaktu(s.created_at)}</span>
                </span>
              </button>
              {terbuka && (
                <div className="px-4 pb-4 pl-11 space-y-3">
                  <p className="text-xs text-gray-500">Dari <strong>{s.pengirim_nama || '-'}</strong> ({s.pengirim_email}) · {pengirim}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-line">{s.isi}</p>
                  {s.balasan && (
                    <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 px-3 py-2 text-sm">
                      <p className="text-xs font-semibold text-blue-800 dark:text-blue-200 flex items-center gap-1.5"><MessageSquareReply size={13} /> Balasan · {s.dibalas_oleh} · {fmtWaktu(s.dibalas_at)}</p>
                      <p className="mt-1 whitespace-pre-line">{s.balasan}</p>
                    </div>
                  )}
                  <div>
                    <textarea
                      className="form-input text-sm min-h-[80px] w-full"
                      maxLength={5000}
                      placeholder={s.balasan ? 'Ganti balasan…' : 'Tulis balasan untuk pengirim…'}
                      value={balasan[s.id] ?? ''}
                      onChange={e => setBalasan(b => ({ ...b, [s.id]: e.target.value }))}
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      <button className="btn-primary text-xs" disabled={busy === s.id || !(balasan[s.id] || '').trim()}
                        onClick={() => ubah(s, { balasan: balasan[s.id], status: 'selesai' }, 'Balasan terkirim. Pengirim dapat membacanya di menu Kotak Saran.').then(() => setBalasan(b => ({ ...b, [s.id]: '' })))}>
                        {busy === s.id ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />} Kirim Balasan
                      </button>
                      {s.status !== 'selesai' && (
                        <button className="btn-secondary text-xs" disabled={busy === s.id} onClick={() => ubah(s, { status: 'selesai' })}><CheckCheck size={13} /> Tandai Selesai</button>
                      )}
                      {s.status === 'selesai' && (
                        <button className="btn-secondary text-xs" disabled={busy === s.id} onClick={() => ubah(s, { status: 'dibaca' })}>Buka Lagi</button>
                      )}
                      <button className="btn-secondary text-xs !text-rose-600 dark:!text-rose-400" disabled={busy === s.id} onClick={() => hapus(s)}><Trash2 size={13} /> Hapus</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
