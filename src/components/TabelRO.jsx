/**
 * components/TabelRO.jsx
 * Tabel Data Anggaran bertingkat: KRO -> RO -> Komponen -> rincian (Sumber Dana, Pagu, Realisasi). Baris dengan kode
 * yang sama digabung; tiap tingkat menampilkan Pagu dan Realisasi = jumlah rincian di bawahnya. Klik baris untuk
 * membuka isinya. Tombol "+" di tiap tingkat menambah rincian baru dengan kode tingkat itu (dan di atasnya) sudah terisi,
 * ditambah awalan kode tingkat di bawahnya karena kodenya berjenjang (KRO ABAC -> RO "ABAC." -> Komponen "ABAC.1.").
 * Tingkat yang kolomnya belum ada di jenis data dilewati (mis. database lama yang baru punya Kode RO).
 *
 * items: [{ key, values: {field_key: nilai}, statusKode?, status?: node, aksi?: node, upt?: label UPT }]
 * fields: field_definitions jenis data itu
 * showUpt: UPT/Balai jadi tingkat paling atas (rekap Admin semua UPT)
 * onTambah(isianAwal): opsional, tombol "+" pada tiap tingkat
 */
import { Fragment, useMemo, useState } from 'react'
import { ChevronDown, ChevronRight, Plus, Building2 } from 'lucide-react'
import { FileValueDisplay } from './DynamicForm'
import { formatRp, isRupiahField } from '../lib/angka'

export const KOLOM_KODE_RO = 'kode_ro'
export const TINGKAT_ANGGARAN = [
  { kode: 'kode_kro', nama: 'nama_kro', label: 'KRO' },
  { kode: 'kode_ro', nama: 'nama_ro', label: 'RO' },
  { kode: 'kode_komponen', nama: 'nama_komponen', label: 'Komponen' },
]
/** Kolom kode & nama tiap tingkat (untuk saran isian di form). */
export const KOLOM_TINGKAT = TINGKAT_ANGGARAN.flatMap(t => [t.kode, t.nama])
export const punyaKodeRO = fields => fields.some(f => f.field_key === KOLOM_KODE_RO)

const kosong = v => v === null || v === undefined || String(v).trim() === ''
const num = v => (Number.isFinite(Number(v)) ? Number(v) : 0)
const teks = v => String(v ?? '').trim()

function Nilai({ f, v }) {
  if (kosong(v)) return null
  if (f.tipe === 'file') return <FileValueDisplay id={v} />
  if (isRupiahField(f)) return <>{formatRp(v)}</>
  if (f.tipe === 'angka') return <>{num(v).toLocaleString('id-ID')}</>
  return <>{String(v)}</>
}

export default function TabelRO({ items, fields, showUpt = false, onTambah }) {
  const [buka, setBuka] = useState(() => new Set())
  const ada = new Set(fields.map(f => f.field_key))
  const tingkat = TINGKAT_ANGGARAN.filter(t => ada.has(t.kode))
  const paguF = fields.find(f => f.peran_rekap === 'pagu') || fields.find(f => f.field_key === 'pagu')
  const realF = fields.find(f => f.peran_rekap === 'realisasi') || fields.find(f => f.field_key === 'realisasi')
  const kolomTingkat = new Set(tingkat.flatMap(t => [t.kode, t.nama]))
  // Isi baris rincian: kolom selain kode/nama tingkat dan selain pagu/realisasi (mis. Sumber Dana)
  const rincianF = fields.filter(f => !kolomTingkat.has(f.field_key) && f !== paguF && f !== realF)
  const adaAksi = items.some(it => it.aksi)
  const adaStatus = items.some(it => it.status)
  const lv = showUpt ? [{ upt: true, label: 'UPT/Balai' }, ...tingkat] : tingkat

  // Pohon: tiap simpul { id, depth, def, kode, nama, prefill, pagu, realisasi, children[], items[], menunggu }
  const pohon = useMemo(() => {
    const bangun = (list, depth, induk, prefillInduk) => {
      const def = lv[depth]
      if (!def) return []
      const m = new Map()
      for (const it of list) {
        const kode = def.upt ? teks(it.upt) : teks(it.values?.[def.kode])
        const id = `${induk}/${kode.toUpperCase()}`
        if (!m.has(id)) m.set(id, { id, depth, def, kode, nama: '', items: [] })
        const n = m.get(id)
        n.items.push(it)
        if (!def.upt && !n.nama && !kosong(it.values?.[def.nama])) n.nama = teks(it.values[def.nama])
      }
      const nodes = [...m.values()]
      for (const n of nodes) {
        n.pagu = paguF ? n.items.reduce((a, it) => a + num(it.values?.[paguF.field_key]), 0) : 0
        n.realisasi = realF ? n.items.reduce((a, it) => a + num(it.values?.[realF.field_key]), 0) : 0
        n.menunggu = n.items.filter(it => it.statusKode && it.statusKode !== 'disetujui').length
        n.prefill = n.def.upt ? { ...prefillInduk } : { ...prefillInduk, [n.def.kode]: n.kode || undefined, ...(n.nama ? { [n.def.nama]: n.nama } : {}) }
        n.children = depth + 1 < lv.length ? bangun(n.items, depth + 1, n.id, n.prefill) : []
        // Isian awal tombol "+": kode tingkat berikutnya diawali kode simpul ini (ABAC -> "ABAC.")
        const berikut = lv[depth + 1]
        n.prefillTambah = !n.def.upt && n.kode && berikut && !berikut.upt ? { ...n.prefill, [berikut.kode]: `${n.kode}.` } : n.prefill
      }
      // Urut kode (angka dibaca sebagai angka); yang tanpa kode di akhir
      return nodes.sort((a, b) => (!a.kode) - (!b.kode) || a.kode.localeCompare(b.kode, 'id', { numeric: true }))
    }
    return bangun(items, 0, '', {})
  }, [items, lv, paguF, realF]) // eslint-disable-line react-hooks/exhaustive-deps

  const semuaId = useMemo(() => {
    const out = []
    const jalan = ns => ns.forEach(n => { out.push(n.id); jalan(n.children) })
    jalan(pohon)
    return out
  }, [pohon])
  const semuaTerbuka = semuaId.length > 0 && semuaId.every(id => buka.has(id))
  const toggle = id => setBuka(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n })
  const total = pohon.reduce((t, n) => ({ pagu: t.pagu + n.pagu, realisasi: t.realisasi + n.realisasi }), { pagu: 0, realisasi: 0 })
  const th = 'px-3 py-2.5 whitespace-nowrap font-semibold border-b border-gray-200 dark:border-gray-700'
  const indent = depth => ({ paddingLeft: 12 + depth * 22 })

  const barisSimpul = n => {
    const terbuka = buka.has(n.id)
    const tebal = n.depth === 0 ? 'font-semibold text-gray-900 dark:text-white' : 'font-medium text-gray-800 dark:text-gray-200'
    return (
      <Fragment key={n.id}>
        <tr
          className={`cursor-pointer hover:bg-blue-50/40 dark:hover:bg-blue-950/20 ${n.depth === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/40 dark:bg-gray-800/20'}`}
          onClick={() => toggle(n.id)}
          title={terbuka ? 'Tutup' : 'Lihat isi'}
        >
          <td className="py-2.5 pr-3" style={indent(n.depth)}>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-gray-400">{terbuka ? <ChevronDown size={15} /> : <ChevronRight size={15} />}</span>
              {n.def.upt ? (
                <span className={`inline-flex items-center gap-1.5 ${tebal}`}><Building2 size={12} className="text-blue-400" /> {n.kode}</span>
              ) : (
                <>
                  <span className="text-[10px] uppercase tracking-wide text-gray-400 w-16 shrink-0">{n.def.label}</span>
                  <span className={`${tebal} ${n.kode ? 'font-mono' : 'italic text-gray-400'}`}>{n.kode || `Tanpa kode ${n.def.label}`}</span>
                  {n.nama && <span className="text-gray-500 dark:text-gray-400 truncate max-w-[280px]" title={n.nama}>· {n.nama}</span>}
                </>
              )}
            </span>
          </td>
          <td className={`px-3 py-2.5 text-right tabular-nums whitespace-nowrap ${tebal}`}>{formatRp(n.pagu)}</td>
          <td className={`px-3 py-2.5 text-right tabular-nums whitespace-nowrap ${tebal}`}>{formatRp(n.realisasi)}</td>
          {adaStatus && (
            <td className="px-3 py-2.5 whitespace-nowrap">
              {n.menunggu > 0 && (
                <span className="inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                  {n.menunggu} belum disetujui
                </span>
              )}
            </td>
          )}
          {(adaAksi || onTambah) && (
            <td className="px-3 py-2.5 text-right">
              {onTambah && !n.def.upt && (
                <button
                  type="button"
                  onClick={e => { e.stopPropagation(); onTambah(n.prefillTambah) }}
                  className="p-1.5 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                  title={`Tambah rincian di ${n.def.label} ${n.kode || ''}`.trim()}
                >
                  <Plus size={15} />
                </button>
              )}
            </td>
          )}
        </tr>
        {terbuka && (n.children.length ? n.children.map(barisSimpul) : n.items.map(it => barisRincian(it, n.depth + 1)))}
      </Fragment>
    )
  }

  const barisRincian = (it, depth) => {
    const isi = rincianF.map(f => ({ f, v: it.values?.[f.field_key] })).filter(x => !kosong(x.v))
    return (
      <tr key={it.key} className="text-gray-700 dark:text-gray-300">
        <td className="py-2 pr-3" style={indent(depth)}>
          <span className="inline-flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] uppercase tracking-wide text-gray-400 w-16 shrink-0 pl-5">Rincian</span>
            {isi.length ? isi.map(({ f, v }) => (
              <span key={f.field_key} className="text-gray-700 dark:text-gray-200" title={f.label}><Nilai f={f} v={v} /></span>
            )).reduce((acc, el, i) => (i ? [...acc, <span key={`s${i}`} className="text-gray-300">·</span>, el] : [el]), []) : (
              <span className="italic text-gray-400">(tanpa keterangan)</span>
            )}
          </span>
        </td>
        <td className="px-3 py-2 text-right tabular-nums whitespace-nowrap">{paguF && <Nilai f={paguF} v={it.values?.[paguF.field_key]} />}</td>
        <td className="px-3 py-2 text-right tabular-nums whitespace-nowrap">{realF && <Nilai f={realF} v={it.values?.[realF.field_key]} />}</td>
        {adaStatus && <td className="px-3 py-2 whitespace-nowrap">{it.status}</td>}
        {(adaAksi || onTambah) && <td className="px-3 py-2 text-right whitespace-nowrap">{it.aksi}</td>}
      </tr>
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-end">
        <button type="button" className="text-xs text-sky-600 hover:underline" onClick={() => setBuka(semuaTerbuka ? new Set() : new Set(semuaId))}>
          {semuaTerbuka ? 'Tutup semua' : 'Buka semua'}
        </button>
      </div>
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
        <table className="text-xs border-collapse w-full" style={{ minWidth: 'max-content' }}>
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              <th className={`${th} text-left`}>{lv.map(t => t.label).join(' / ')}</th>
              <th className={`${th} text-right`}>Pagu</th>
              <th className={`${th} text-right`}>Realisasi</th>
              {adaStatus && <th className={`${th} text-left`}>Status</th>}
              {(adaAksi || onTambah) && <th className={`${th} text-right`}>Aksi</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {pohon.map(barisSimpul)}
          </tbody>
          {pohon.length > 0 && (
            <tfoot>
              <tr className="bg-gray-50 dark:bg-gray-800/60 font-semibold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700">
                <td className="px-3 py-2.5">Total</td>
                <td className="px-3 py-2.5 text-right tabular-nums whitespace-nowrap">{formatRp(total.pagu)}</td>
                <td className="px-3 py-2.5 text-right tabular-nums whitespace-nowrap">{formatRp(total.realisasi)}</td>
                {adaStatus && <td />}
                {(adaAksi || onTambah) && <td />}
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  )
}
