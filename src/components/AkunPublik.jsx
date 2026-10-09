/**
 * components/AkunPublik.jsx
 * Formulir di halaman login untuk pengguna yang belum masuk (be/src/modules/auth/auth.routes.ts):
 *  - LupaPassword: email -> kode 6 angka dari email -> password baru.
 *  - DaftarAkun:   nama, email, UPT, password -> kode dari email -> akun menunggu persetujuan Admin.
 * Selama server belum diatur mengirim email (SMTP kosong, GET /auth/upt -> email: false): daftar tanpa kode
 * (langsung menunggu persetujuan Admin) dan lupa password diarahkan ke Admin.
 */
import { useEffect, useState } from 'react'
import { api } from '../lib/db'
import { Eye, EyeOff, Loader2, MailCheck, ArrowLeft } from 'lucide-react'

const INPUT = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all'
const LABEL = 'block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5'
const TOMBOL = 'w-full bg-[#0B1830] hover:bg-[#152D50] disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200'

function Pesan({ galat, info }) {
  if (galat) return <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-lg p-3">{galat}</div>
  if (info) return <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-lg p-3">{info}</div>
  return null
}

function InputPassword({ id, value, onChange, label, autoComplete = 'new-password' }) {
  const [lihat, setLihat] = useState(false)
  return (
    <div>
      <label htmlFor={id} className={LABEL}>{label}</label>
      <div className="relative">
        <input id={id} type={lihat ? 'text' : 'password'} value={value} onChange={e => onChange(e.target.value)} className={`${INPUT} pr-10`} minLength={8} maxLength={72} required autoComplete={autoComplete} placeholder="Minimal 8 karakter" />
        <button type="button" onClick={() => setLihat(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label={lihat ? 'Sembunyikan password' : 'Tampilkan password'}>
          {lihat ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  )
}

function InputKode({ value, onChange }) {
  return (
    <div>
      <label htmlFor="kode-verifikasi" className={LABEL}>Kode verifikasi</label>
      <input id="kode-verifikasi" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={value}
        onChange={e => onChange(e.target.value.replace(/\D/g, '').slice(0, 6))}
        className={`${INPUT} tracking-[0.5em] text-center text-lg font-semibold`} placeholder="••••••" required />
    </div>
  )
}

export function KembaliMasuk({ onKembali }) {
  return (
    <button type="button" onClick={onKembali} className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
      <ArrowLeft size={14} /> Kembali ke halaman masuk
    </button>
  )
}

/** Status pengiriman email dari server: true/false, null = belum diketahui. */
function useEmailAktif() {
  const [aktif, setAktif] = useState(null)
  const [upts, setUpts] = useState([])
  useEffect(() => {
    api('/auth/upt', { method: 'GET' }).then(({ data }) => { setUpts(data?.data || []); setAktif(data?.email !== false) })
  }, [])
  return { aktif, upts }
}

/** Lupa password: kirim kode ke email, lalu atur password baru. */
export function LupaPassword({ onSelesai }) {
  const { aktif } = useEmailAktif()
  const [langkah, setLangkah] = useState(1)
  const [email, setEmail] = useState('')
  const [kode, setKode] = useState('')
  const [password, setPassword] = useState('')
  const [ulang, setUlang] = useState('')
  const [busy, setBusy] = useState(false)
  const [galat, setGalat] = useState('')
  const [info, setInfo] = useState('')

  async function kirimKode(e) {
    e?.preventDefault()
    setBusy(true); setGalat(''); setInfo('')
    const { data, error } = await api('/auth/lupa-password', { body: { email } })
    setBusy(false)
    if (error) return setGalat(error.message)
    setInfo(data.pesan)
    if (!data.tanpaEmail) setLangkah(2)
  }

  async function simpan(e) {
    e.preventDefault()
    if (password !== ulang) return setGalat('Ulangi password tidak sama.')
    setBusy(true); setGalat(''); setInfo('')
    const { data, error } = await api('/auth/reset-password', { body: { email, kode, password } })
    setBusy(false)
    if (error) return setGalat(error.message)
    onSelesai?.(data.pesan)
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-[#0B1830] font-bold text-xl mb-1">Lupa password</h2>
        <p className="text-gray-500 text-sm">
          {langkah === 1 ? 'Masukkan email akun Anda. Kode verifikasi akan dikirim ke email tersebut.' : 'Masukkan kode dari email, lalu buat password baru.'}
        </p>
      </div>
      <Pesan galat={galat} info={info} />
      {aktif === null ? (
        <div className="flex justify-center py-4"><Loader2 size={18} className="animate-spin text-gray-400" /></div>
      ) : !aktif ? (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-lg p-3 space-y-1">
          <p className="font-semibold">Pengiriman kode lewat email belum aktif.</p>
          <p>Hubungi Admin PUSLATKP. Admin akan mengatur ulang password Anda di menu Kelola Akun UPT, lalu memberikan password barunya kepada Anda.</p>
        </div>
      ) : langkah === 1 ? (
        <form onSubmit={kirimKode} className="space-y-4">
          <div>
            <label htmlFor="lupa-email" className={LABEL}>Email</label>
            <input id="lupa-email" type="email" value={email} onChange={e => setEmail(e.target.value)} className={INPUT} required autoComplete="email" placeholder="nama@kkp.go.id" />
          </div>
          <button type="submit" disabled={busy} className={TOMBOL}>{busy ? <Loader2 size={16} className="animate-spin" /> : <MailCheck size={16} />} Kirim kode</button>
        </form>
      ) : (
        <form onSubmit={simpan} className="space-y-4">
          <InputKode value={kode} onChange={setKode} />
          <InputPassword id="lupa-pw" label="Password baru" value={password} onChange={setPassword} />
          <InputPassword id="lupa-pw2" label="Ulangi password baru" value={ulang} onChange={setUlang} />
          <button type="submit" disabled={busy || kode.length !== 6} className={TOMBOL}>{busy && <Loader2 size={16} className="animate-spin" />} Simpan password baru</button>
          <button type="button" disabled={busy} onClick={() => kirimKode()} className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium">Kirim ulang kode</button>
        </form>
      )}
    </div>
  )
}

/** Daftar akun UPT: verifikasi email dengan kode, lalu menunggu persetujuan Admin. */
export function DaftarAkun({ onSelesai }) {
  const { aktif: emailAktif, upts } = useEmailAktif()
  const [langkah, setLangkah] = useState(1)
  const [form, setForm] = useState({ nama_lengkap: '', email: '', upt_key: '', password: '' })
  const [ulang, setUlang] = useState('')
  const [kode, setKode] = useState('')
  const [busy, setBusy] = useState(false)
  const [galat, setGalat] = useState('')
  const [info, setInfo] = useState('')

  async function kirimKode(e) {
    e?.preventDefault()
    if (form.password !== ulang) return setGalat('Ulangi password tidak sama.')
    setBusy(true); setGalat(''); setInfo('')
    const { data, error } = await api('/auth/daftar', { body: form })
    setBusy(false)
    if (error) return setGalat(error.message)
    if (data.langsung) return onSelesai?.(data.pesan) // tanpa email: langsung menunggu persetujuan Admin
    setInfo(data.pesan)
    setLangkah(2)
  }

  async function verifikasi(e) {
    e.preventDefault()
    setBusy(true); setGalat(''); setInfo('')
    const { data, error } = await api('/auth/daftar/verifikasi', { body: { email: form.email, kode } })
    setBusy(false)
    if (error) return setGalat(error.message)
    onSelesai?.(`${data.pesan} Anda akan menerima email setelah akun disetujui.`)
  }

  const ubah = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-[#0B1830] font-bold text-xl mb-1">Daftar akun UPT/Balai</h2>
        <p className="text-gray-500 text-sm">
          {langkah === 1 ? 'Gunakan email aktif milik Anda. Akun baru bisa dipakai setelah disetujui Admin.' : `Masukkan kode yang dikirim ke ${form.email}.`}
        </p>
      </div>
      <Pesan galat={galat} info={info} />
      {langkah === 1 ? (
        <form onSubmit={kirimKode} className="space-y-4">
          <div>
            <label htmlFor="daftar-nama" className={LABEL}>Nama lengkap</label>
            <input id="daftar-nama" value={form.nama_lengkap} onChange={ubah('nama_lengkap')} className={INPUT} maxLength={150} required autoComplete="name" />
          </div>
          <div>
            <label htmlFor="daftar-email" className={LABEL}>Email</label>
            <input id="daftar-email" type="email" value={form.email} onChange={ubah('email')} className={INPUT} required autoComplete="email" placeholder="nama@kkp.go.id" />
          </div>
          <div>
            <label htmlFor="daftar-upt" className={LABEL}>UPT/Balai</label>
            <select id="daftar-upt" value={form.upt_key} onChange={ubah('upt_key')} className={INPUT} required>
              <option value="">Pilih UPT/Balai</option>
              {upts.map(u => <option key={u.key} value={u.key}>{u.label}</option>)}
            </select>
          </div>
          <InputPassword id="daftar-pw" label="Password" value={form.password} onChange={v => setForm(f => ({ ...f, password: v }))} />
          <InputPassword id="daftar-pw2" label="Ulangi password" value={ulang} onChange={setUlang} />
          <button type="submit" disabled={busy || emailAktif === null} className={TOMBOL}>{busy ? <Loader2 size={16} className="animate-spin" /> : <MailCheck size={16} />} {emailAktif === false ? 'Daftar' : 'Kirim kode verifikasi'}</button>
        </form>
      ) : (
        <form onSubmit={verifikasi} className="space-y-4">
          <InputKode value={kode} onChange={setKode} />
          <button type="submit" disabled={busy || kode.length !== 6} className={TOMBOL}>{busy && <Loader2 size={16} className="animate-spin" />} Verifikasi email</button>
          <button type="button" disabled={busy} onClick={() => kirimKode()} className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium">Kirim ulang kode</button>
        </form>
      )}
    </div>
  )
}
