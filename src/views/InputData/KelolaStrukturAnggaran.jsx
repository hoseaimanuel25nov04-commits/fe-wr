/**
 * views/InputData/KelolaStrukturAnggaran.jsx
 * Admin: katalog KRO / RO / Komponen bersama seluruh balai (tabel anggaran_struktur). Balai tidak mengetik
 * kode sendiri di Data Anggaran; mereka memilih dari daftar ini lalu cukup mengisi Sumber Dana, Pagu, dan Realisasi.
 * Satu baris daftar = satu Komponen lengkap dengan RO dan KRO induknya.
 */
import { useEffect, useMemo, useState } from 'react'
import { db } from '../../lib/db'
import { notify, confirmDialog } from '../../lib/dialog'
import { Loader2, Plus, Trash2 } from 'lucide-react'

const KOSONG = { kode_kro: '', nama_kro: '', kode_ro: '', nama_ro: '', kode_komponen: '', nama_komponen: '' }
const KOLOM = [
  ['kode_kro', 'KRO', true], ['nama_kro', 'Uraian KRO'],
  ['kode_ro', 'RO', true], ['nama_ro', 'Uraian RO'],
  ['kode_komponen', 'Komponen', true], ['nama_komponen', 'Uraian Komponen'],
]

export default function KelolaStrukturAnggaran({ onChanged }) {
  const [daftar, setDaftar] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(KOSONG)
  const [saving, setSaving] = useState(false)

  async function muat() {
    setLoading(true)
    const { data } = await db.from('anggaran_struktur').select('*').eq('upt_key', '*')
    setDaftar((data || []).sort((a, b) =>
      [a.kode_kro, a.kode_ro, a.kode_komponen].join('|').localeCompare([b.kode_kro, b.kode_ro, b.kode_komponen].join('|'), 'id', { numeric: true })))
    setLoading(false)
  }
  useEffect(() => { muat() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Saran isian: KRO/RO yang sudah ada (uraiannya ikut terisi saat kode yang sama diketik)
  const saran = useMemo(() => {
    const out = { kode_kro: new Map(), kode_ro: new Map(), kode_komponen: new Map() }
    for (const d of daftar) {
      out.kode_kro.set(d.kode_kro, d.nama_kro)
      out.kode_ro.set(d.kode_ro, d.nama_ro)
      out.kode_komponen.set(d.kode_komponen, d.nama_komponen)
    }
    return out
  }, [daftar])

  function ubah(key, val) {
    setForm(f => {
      const next = { ...f, [key]: val }
      // Kode yang sudah ada di daftar: uraiannya diisi otomatis (bila belum diketik)
      const nama = key.replace('kode_', 'nama_')
      if (saran[key]?.has(val.trim()) && !f[nama]) next[nama] = saran[key].get(val.trim()) || ''
      return next
    })
  }

  async function tambah(e) {
    e.preventDefault()
    const row = Object.fromEntries(Object.entries(form).map(([k, v]) => [k, v.trim() || null]))
    if (!row.kode_kro || !row.kode_ro || !row.kode_komponen) { notify('KRO, RO, dan Komponen wajib diisi.'); return }
    if (daftar.some(d => d.kode_kro === row.kode_kro && d.kode_ro === row.kode_ro && d.kode_komponen === row.kode_komponen)) {
      notify('Komponen dengan kode tersebut sudah ada di katalog bersama.')
      return
    }
    setSaving(true)
    const { error } = await db.from('anggaran_struktur').insert({ ...row, upt_key: '*', urutan: daftar.length + 1 })
    setSaving(false)
    if (error) { notify(/duplikat/i.test(error.message) ? 'Komponen ini sudah ada di daftar.' : 'Gagal menyimpan: ' + error.message); return }
    // Kode KRO & RO dibiarkan supaya Komponen berikutnya di RO yang sama cepat diisi
    setForm(f => ({ ...KOSONG, kode_kro: f.kode_kro, nama_kro: f.nama_kro, kode_ro: f.kode_ro, nama_ro: f.nama_ro }))
    await muat()
    onChanged?.()
  }

  async function hapus(d) {
    if (!await confirmDialog(`Hapus ${d.kode_komponen} dari daftar?\n\nRincian anggaran yang sudah diisi balai tidak ikut terhapus; hanya pilihan ini yang hilang dari daftar.`)) return
    const { error } = await db.from('anggaran_struktur').delete().eq('id', d.id)
    if (error) { notify('Gagal menghapus: ' + error.message); return }
    await muat()
    onChanged?.()
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Katalog ini berlaku untuk <strong>semua balai</strong>. Admin menyiapkan KRO, RO, dan Komponen di sini; balai
        memilih referensi yang sama di Data Anggaran lalu mengisi Sumber Dana, Pagu, dan Realisasi.
      </p>

      <form onSubmit={tambah} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {KOLOM.map(([key, label, wajib]) => (
            <div key={key}>
              <label className="form-label" htmlFor={`struktur-${key}`}>{label}{wajib && <span className="text-rose-500 ml-1">*</span>}</label>
              <input
                id={`struktur-${key}`}
                className="form-input"
                value={form[key]}
                onChange={e => ubah(key, e.target.value)}
                placeholder={key === 'kode_kro' ? 'mis. ABAC' : key === 'kode_ro' ? 'mis. ABAC.1' : key === 'kode_komponen' ? 'mis. ABAC.1.2' : label}
                list={saran[key] ? `saran-${key}` : undefined}
                autoComplete="off"
                required={wajib}
              />
              {saran[key] && (
                <datalist id={`saran-${key}`}>
                  {[...saran[key].keys()].map(k => <option key={k} value={k} />)}
                </datalist>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button type="submit" disabled={saving} className="btn-primary text-sm">
            {saving ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} Tambahkan ke daftar
          </button>
        </div>
      </form>

      {loading ? (
        <div className="flex justify-center py-6"><Loader2 className="animate-spin text-gray-400" /></div>
      ) : daftar.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">Katalog bersama belum berisi KRO/RO/Komponen.</p>
      ) : (
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/60 text-gray-500 uppercase tracking-wide text-left">
                <th className="px-3 py-2">KRO</th>
                <th className="px-3 py-2">RO</th>
                <th className="px-3 py-2">Komponen</th>
                <th className="px-3 py-2 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {daftar.map(d => (
                <tr key={d.id}>
                  <td className="px-3 py-2"><span className="font-mono font-semibold">{d.kode_kro}</span> <span className="text-gray-500">{d.nama_kro}</span></td>
                  <td className="px-3 py-2"><span className="font-mono font-semibold">{d.kode_ro}</span> <span className="text-gray-500">{d.nama_ro}</span></td>
                  <td className="px-3 py-2"><span className="font-mono font-semibold">{d.kode_komponen}</span> <span className="text-gray-500">{d.nama_komponen}</span></td>
                  <td className="px-3 py-2 text-right">
                    <button type="button" onClick={() => hapus(d)} className="p-1.5 rounded text-gray-400 hover:text-rose-600 hover:bg-rose-50" title="Hapus dari daftar">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
