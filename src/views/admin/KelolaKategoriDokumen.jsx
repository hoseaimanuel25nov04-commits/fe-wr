/**
 * views/admin/KelolaKategoriDokumen.jsx
 * Admin: atur jenis dokumen yang bisa diunggah (Pengaturan Lanjutan > Kategori Dokumen). Setiap kategori aktif menjadi
 * menu di bagian Administrasi; bila "Akun UPT boleh mengunggah" dicentang, menu itu juga muncul untuk akun UPT
 * (UPT hanya melihat & mengunggah dokumen UPT-nya sendiri). Lihat be/src/routes/kategoriDokumen.js.
 */
import { useEffect, useState, useCallback } from 'react'
import { kategoriDokumen, KATEGORI_DOKUMEN_EVENT, getFeatures } from '../../lib/db'
import { confirmDialog } from '../../lib/dialog'
import { useNavigate } from '../../lib/nav'
import PageHeader from '../../components/PageHeader'
import InfoCard from '../../components/InfoCard'
import Badge from '../../components/Badge'
import { Loader2, Plus, Pencil, Trash2, ArrowUp, ArrowDown, Eye, EyeOff, X, FolderOpen } from 'lucide-react'

const FORMAT = [['pdf', 'PDF'], ['xlsx', 'Excel (XLSX)'], ['xls', 'Excel lama (XLS)'], ['csv', 'CSV'], ['docx', 'Word (DOCX)'], ['doc', 'Word lama (DOC)']]
const kosong = () => ({ nama: '', deskripsi: '', format: ['pdf'], boleh_upt: true })

export default function KelolaKategoriDokumen() {
  const navigate = useNavigate()
  const [aktif, setAktif] = useState(true)
  const [list, setList] = useState(null)
  const [form, setForm] = useState(null) // { kode?, nama, deskripsi, format[], boleh_upt }
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState(null)

  const muat = useCallback(async () => {
    const { data, error } = await kategoriDokumen.daftar()
    if (error) { if (error.status === 409) setAktif(false); else setMsg({ type: 'error', text: error.message }); setList([]); return }
    setList(data.data || [])
  }, [])
  useEffect(() => {
    getFeatures().then(f => (f.kategoriDokumen === false ? (setAktif(false), setList([])) : muat()))
  }, [muat])

  const berubah = async (pesan) => {
    if (pesan) setMsg({ type: 'success', text: pesan })
    window.dispatchEvent(new Event(KATEGORI_DOKUMEN_EVENT)) // sidebar memuat ulang menu dokumen
    await muat()
  }

  async function simpan(e) {
    e.preventDefault()
    if (!form.nama.trim()) return setMsg({ type: 'error', text: 'Nama kategori wajib diisi.' })
    if (!form.format.length) return setMsg({ type: 'error', text: 'Pilih minimal satu jenis berkas.' })
    setBusy(true); setMsg(null)
    const body = { nama: form.nama, deskripsi: form.deskripsi, format: form.format, boleh_upt: form.boleh_upt }
    const { error } = form.kode ? await kategoriDokumen.ubah(form.kode, body) : await kategoriDokumen.buat(body)
    setBusy(false)
    if (error) return setMsg({ type: 'error', text: error.message })
    const baru = !form.kode
    setForm(null)
    berubah(baru ? `Kategori "${body.nama}" dibuat dan sudah muncul di menu Administrasi.` : 'Perubahan disimpan.')
  }

  async function ubah(k, body, pesan) {
    const { error } = await kategoriDokumen.ubah(k.kode, body)
    if (error) return setMsg({ type: 'error', text: error.message })
    berubah(pesan)
  }

  async function geser(i, arah) {
    const a = list[i], b = list[i + arah]
    if (!b) return
    await kategoriDokumen.ubah(a.kode, { urutan: b.urutan })
    await kategoriDokumen.ubah(b.kode, { urutan: a.urutan === b.urutan ? a.urutan + arah : a.urutan })
    berubah()
  }

  async function hapus(k) {
    if (k.jumlah > 0) return setMsg({ type: 'error', text: `"${k.nama}" masih berisi ${k.jumlah} dokumen. Hapus dokumennya dulu, atau sembunyikan kategorinya.` })
    if (!await confirmDialog(`Hapus kategori "${k.nama}"?`, { danger: true, confirmLabel: 'Hapus' })) return
    const { error } = await kategoriDokumen.hapus(k.kode)
    if (error) return setMsg({ type: 'error', text: error.message })
    berubah(`Kategori "${k.nama}" dihapus.`)
  }

  const toggleFormat = f => setForm(v => ({ ...v, format: v.format.includes(f) ? v.format.filter(x => x !== f) : [...v.format, f] }))

  if (!aktif) {
    return <div className="card p-6 text-sm text-amber-700 dark:text-amber-300">Kategori Dokumen belum aktif. Jalankan <code>npm run migrate</code> di folder be (migrasi_23), restart backend, lalu muat ulang halaman.</div>
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Kategori Dokumen"
        description="Atur jenis dokumen yang dapat diunggah. Setiap kategori aktif tampil sebagai menu di bagian Administrasi."
      />

      {msg && <div className={`rounded-lg px-4 py-3 text-sm ${msg.type === 'error' ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-300' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300'}`}>{msg.text}</div>}

      {form ? (
        <InfoCard title={form.kode ? `Ubah Kategori: ${form.nama || form.kode}` : 'Kategori Baru'} action={<button onClick={() => setForm(null)} className="p-1.5 text-gray-400 hover:text-gray-700" title="Tutup"><X size={16} /></button>}>
          <form onSubmit={simpan} className="grid gap-4 md:grid-cols-2">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Nama kategori (juga nama menu)
              <input className="form-input mt-1" maxLength={120} placeholder="mis. Dokumen Lama Balai" value={form.nama} onChange={e => setForm(v => ({ ...v, nama: e.target.value }))} />
            </label>
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Keterangan (opsional)
              <input className="form-input mt-1" maxLength={500} placeholder="mis. Arsip dokumen Balai sebelum tahun 2026." value={form.deskripsi} onChange={e => setForm(v => ({ ...v, deskripsi: e.target.value }))} />
            </label>
            <fieldset className="md:col-span-2">
              <legend className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Jenis berkas yang diterima</legend>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {FORMAT.map(([f, label]) => (
                  <label key={f} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={form.format.includes(f)} onChange={() => toggleFormat(f)} /> {label}
                  </label>
                ))}
              </div>
              <p className="text-[11px] text-gray-400 mt-1">PDF dan Excel dapat dibuka langsung di web. Berkas Word hanya dapat diunduh.</p>
            </fieldset>
            <label className="md:col-span-2 flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-0.5" checked={form.boleh_upt} onChange={e => setForm(v => ({ ...v, boleh_upt: e.target.checked }))} />
              <span>
                Akun UPT boleh mengunggah dan melihat
                <span className="block text-[11px] text-gray-400">Jika dicentang, menu ini juga muncul di akun UPT. Setiap UPT hanya melihat dokumen miliknya. Jika tidak, kategori ini khusus Admin.</span>
              </span>
            </label>
            <div className="md:col-span-2 flex justify-end gap-2">
              <button type="button" className="btn-secondary text-sm" onClick={() => setForm(null)}>Batal</button>
              <button className="btn-primary text-sm" disabled={busy}>{busy && <Loader2 size={14} className="animate-spin" />} Simpan</button>
            </div>
          </form>
        </InfoCard>
      ) : (
        <div className="flex justify-end">
          <button className="btn-primary text-sm" onClick={() => { setMsg(null); setForm(kosong()) }}><Plus size={15} /> Tambah Kategori</button>
        </div>
      )}

      <InfoCard title={`Daftar Kategori (${list ? list.length : '…'})`}>
        {!list ? (
          <div className="flex justify-center py-8"><Loader2 className="animate-spin text-gray-400" /></div>
        ) : list.length === 0 ? (
          <p className="text-sm text-gray-400 py-6 text-center">Belum ada kategori. Klik Tambah Kategori.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 px-2">Nama</th><th className="py-2 px-2">Berkas</th><th className="py-2 px-2">Akun UPT</th><th className="py-2 px-2 text-right">Dokumen</th><th className="py-2 px-2">Status</th><th />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {list.map((k, i) => (
                  <tr key={k.kode} className={k.aktif ? '' : 'opacity-60'}>
                    <td className="py-2 px-2">
                      <span className="font-medium">{k.nama}</span>
                      {k.deskripsi && <span className="block text-[11px] text-gray-400">{k.deskripsi}</span>}
                    </td>
                    <td className="py-2 px-2 text-xs">{k.format.map(f => f.toUpperCase()).join(', ')}</td>
                    <td className="py-2 px-2 text-xs">{k.boleh_upt ? 'Boleh' : 'Khusus Admin'}</td>
                    <td className="py-2 px-2 text-right tabular-nums">{k.jumlah}</td>
                    <td className="py-2 px-2"><Badge variant={k.aktif ? 'success' : 'neutral'}>{k.aktif ? 'Tampil' : 'Disembunyikan'}</Badge></td>
                    <td className="py-2 px-2 whitespace-nowrap text-right">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600" title="Buka dokumen" onClick={() => navigate(`dokumen/${k.kode}`)}><FolderOpen size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-700 disabled:opacity-30" disabled={i === 0} title="Naikkan" onClick={() => geser(i, -1)}><ArrowUp size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-700 disabled:opacity-30" disabled={i === list.length - 1} title="Turunkan" onClick={() => geser(i, 1)}><ArrowDown size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-700" title={k.aktif ? 'Sembunyikan dari menu' : 'Tampilkan di menu'} onClick={() => ubah(k, { aktif: !k.aktif }, k.aktif ? `"${k.nama}" disembunyikan dari menu.` : `"${k.nama}" ditampilkan lagi di menu.`)}>{k.aktif ? <EyeOff size={14} /> : <Eye size={14} />}</button>
                      <button className="p-1.5 text-gray-400 hover:text-amber-600" title="Ubah" onClick={() => { setMsg(null); setForm({ kode: k.kode, nama: k.nama, deskripsi: k.deskripsi || '', format: k.format, boleh_upt: k.boleh_upt }) }}><Pencil size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-rose-600" title="Hapus" onClick={() => hapus(k)}><Trash2 size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </InfoCard>
    </div>
  )
}
