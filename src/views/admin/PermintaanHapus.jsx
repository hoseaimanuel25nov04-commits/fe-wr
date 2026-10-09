/**
 * views/admin/PermintaanHapus.jsx
 * Admin: setujui/tolak permintaan dari akun UPT — DUA jenis, ditampilkan sebagai dua daftar terpisah:
 * 1. Persetujuan Baris Data — SETIAP baris yang disimpan UPT (rekap_nilai/data_entries/dokumen_upload) langsung
 *    berstatus 'draft' menunggu persetujuan. Digerombolkan per (UPT, Jenis Data, Periode) supaya bisa disetujui
 *    satu-satu atau sekaligus (tombol "Setujui Semua"). "Tolak" di sini TIDAK menghapus baris — hanya
 *    memindahkannya ke Tempat Sampah + alasan di Catatan Aktivitas (terlihat UPT di menu Catatan Aktivitas).
 * 2. Hapus & Edit — permintaan pada `permintaan_hapus`, dibedakan kolom `aksi`: UPT menekan Hapus/Kosongkan pada
 *    baris yang sudah disetujui di #1 (aksi='hapus', baris masih 'draft'/'ditolak' bebas dihapus langsung, tidak
 *    lewat sini), atau menekan Edit pada baris yang sudah disetujui (aksi='edit', migrasi_15 — lihat
 *    be/src/modules/permintaan/permintaan-edit.service.ts). Menyetujui aksi='hapus' benar-benar menghapus (masuk Tempat Sampah);
 *    menyetujui aksi='edit' membuka baris kembali jadi Draft agar UPT bisa mengubahnya (permintaan dari tombol Edit),
 *    atau menulis nilai baru yang diajukan (permintaan dari impor). Menolak keduanya tidak menyentuh data.
 *
 * Tiap baris/permintaan punya tombol "Lihat Data": popup berisi seluruh isi data yang akan disetujui/ditolak,
 * dengan tombol Setujui & Tolak di dalamnya, supaya Admin bisa memeriksa dulu sebelum memutuskan.
 *
 * (Riwayat historis di sini bisa memuat entri lama "Buka Kunci Periode" dari fitur Kirim & Kunci Data per-periode
 * yang sudah dihapus — TABLE_LABEL/isUnlock tetap ada supaya baris riwayat lama itu masih terbaca dengan benar.)
 */
import { useState, useEffect, useCallback, useMemo } from 'react'
import { db, getFeatures } from '../../lib/db'
import { notify, confirmDialog, promptDialog, notifyDihapus } from '../../lib/dialog'
import InfoCard from '../../components/InfoCard'
import SelisihByNameCard from '../../components/SelisihByNameCard'
import { Inbox, Check, X, Loader2, Clock, ListChecks, Pencil, Eye } from 'lucide-react'
import { formatPeriodLabel } from '../../lib/periods'
import Modal from '../../components/Modal'
import { FileValueDisplay } from '../../components/DynamicForm'

const TABLE_LABEL = {
  rekap_nilai: 'Data Mingguan/Bulanan',
  data_entries: 'Data Rincian (Nama)',
  dokumen_upload: 'Berkas Unggahan',
  periode_kirim: 'Buka Kunci Periode (fitur lama)',
}

const isUnlock = item => item.tabel === 'periode_kirim'
const isEdit = item => item.aksi === 'edit'
const parseJson = raw => (typeof raw === 'string' ? JSON.parse(raw) : raw)
/** Permintaan edit dari tombol Edit (tanpa nilai baru): menyetujuinya membuka baris jadi Draft. */
const isBukaEdit = item => isEdit(item) && (() => { const d = parseJson(item.data_baru_json); return !d || d.buka || !d.values })()
const kosong = v => v === null || v === undefined || v === ''

/** Ringkasan singkat nilai baru yang diajukan (aksi='edit'), untuk pratinjau sebelum Admin menyetujui. */
function editPreview(item) {
  const dataBaru = parseJson(item.data_baru_json)
  if (!dataBaru || dataBaru.buka) return null
  if (item.tabel === 'rekap_nilai') {
    const parts = (dataBaru.values || []).map(v => `${v.field_key}: ${v.value_text ?? v.value ?? '-'}`)
    if (dataBaru.clearedFields?.length) parts.push(`(kosongkan: ${dataBaru.clearedFields.join(', ')})`)
    return parts.join(' · ') || null
  }
  const v = dataBaru.values
  if (!v) return null
  return [v.nama, v.nik].filter(Boolean).join(' · ') || null
}

const STATUS_BADGE = {
  pending: ['Menunggu', 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300'],
  disetujui: ['Disetujui', 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'],
  ditolak: ['Ditolak', 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'],
}

/** Satu kolom isian di popup Lihat Data. `baru` = nilai yang diajukan (permintaan edit dengan nilai baru). */
function NilaiSel({ tipe, value }) {
  if (kosong(value)) return <span className="text-gray-300 dark:text-gray-600">—</span>
  if (tipe === 'file') return <FileValueDisplay id={value} />
  if (tipe === 'angka' && Number.isFinite(Number(value))) return <span className="tabular-nums">{Number(value).toLocaleString('id-ID')}</span>
  if (typeof value === 'object') return <span>{JSON.stringify(value)}</span>
  return <span className="whitespace-pre-line break-words">{String(value)}</span>
}

function DetailTable({ rows, showBaru }) {
  if (!rows.length) return <p className="text-sm text-gray-400 py-2">(tanpa isian)</p>
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200 dark:border-gray-700">
          <th className="py-2 pr-3 w-2/5">Kolom</th>
          <th className="py-2 pr-3">{showBaru ? 'Nilai sekarang' : 'Isi'}</th>
          {showBaru && <th className="py-2">Nilai diajukan</th>}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
        {rows.map(r => (
          <tr key={r.key} className={showBaru && String(r.value ?? '') !== String(r.baru ?? '') ? 'bg-amber-50/60 dark:bg-amber-950/20' : ''}>
            <td className="py-2 pr-3 text-gray-500 dark:text-gray-400 align-top">{r.label}</td>
            <td className="py-2 pr-3 text-gray-900 dark:text-gray-100 align-top"><NilaiSel tipe={r.tipe} value={r.value} /></td>
            {showBaru && <td className="py-2 text-gray-900 dark:text-gray-100 align-top"><NilaiSel tipe={r.tipe} value={r.baru} /></td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const fmtTime = iso => (iso ? new Date(iso).toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-')

import PageHeader from '../../components/PageHeader'

export default function PermintaanHapus() {
  const [enabled, setEnabled] = useState(true)
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [uptList, setUptList] = useState([])
  const [periods, setPeriods] = useState([])
  const [jenisDataList, setJenisDataList] = useState([])
  const [barisRekap, setBarisRekap] = useState([])
  const [barisEntries, setBarisEntries] = useState([])
  const [barisDokumen, setBarisDokumen] = useState([])
  const [persetujuanBarisEnabled, setPersetujuanBarisEnabled] = useState(false)
  const [tolakBarisEnabled, setTolakBarisEnabled] = useState(false)
  const [busy, setBusy] = useState('')
  const setToast = t => notify(t.message, t.type)
  const [showHistory, setShowHistory] = useState(false)
  const [fieldDefs, setFieldDefs] = useState([])
  // Popup Lihat Data: { title, subtitle, note, sections: [{ judul, rows, showBaru }], onApprove, onReject, busyKey }
  const [detail, setDetail] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    const feat = await getFeatures()
    if (!feat.permintaanHapus) { setEnabled(false); setLoading(false); return }
    const [{ data: reqs }, { data: upts }, { data: pers }, { data: fdefs }, { data: jdsAll }] = await Promise.all([
      db.from('permintaan_hapus').select('*').order('created_at', { ascending: false }),
      db.from('upt_list').select('*'),
      db.from('periods').select('*'),
      db.from('field_definitions').select('jenis_data_id, level, field_key, label, tipe, urutan'),
      db.from('jenis_data').select('*'),
    ])
    setFieldDefs(fdefs || [])
    setJenisDataList(jdsAll || [])
    setItems(reqs || [])
    setUptList(upts || [])
    setPeriods(pers || [])

    setPersetujuanBarisEnabled(feat.persetujuanBaris)
    setTolakBarisEnabled(feat.tolakBaris)
    if (feat.persetujuanBaris) {
      const [{ data: rekap }, { data: ents }, { data: docs }] = await Promise.all([
        db.from('rekap_nilai').select('*').eq('status', 'draft'),
        db.from('data_entries').select('*').eq('status', 'draft'),
        db.from('dokumen_upload').select('id, jenis_data_id, period_id, upt_key, judul, file_name, created_at').eq('status', 'draft'),
      ])
      setBarisRekap(rekap || [])
      setBarisEntries(ents || [])
      setBarisDokumen(docs || [])
    } else {
      setBarisRekap([]); setBarisEntries([]); setBarisDokumen([])
    }
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const uptLabel = key => uptList.find(u => u.key === key)?.label || key
  const periodLabel = id => { const p = periods.find(x => x.id === id); return p ? formatPeriodLabel(p) : id }
  const jenisDataJudul = id => jenisDataList.find(j => j.id === id)?.judul || id
  const pending = items.filter(i => i.status === 'pending')
  const history = items.filter(i => i.status !== 'pending')

  // rekap_nilai disimpan per-field (EAV) — kelompokkan balik jadi satu "baris" per baris_ke, sama seperti
  // satu baris di form Input Mingguan (lihat be/src/modules/query/query.engine.ts: rowApprovalGate.groupBy).
  const rekapGroups = useMemo(() => {
    const map = new Map()
    for (const r of barisRekap) {
      const key = `${r.jenis_data_id}|${r.upt_key}|${r.period_id}|${r.baris_ke}`
      if (!map.has(key)) map.set(key, { jenis_data_id: r.jenis_data_id, upt_key: r.upt_key, period_id: r.period_id, baris_ke: r.baris_ke, fields: {} })
      map.get(key).fields[r.field_key] = r.value !== null && r.value !== undefined ? r.value : r.value_text
    }
    return [...map.values()]
  }, [barisRekap])

  // Gabungkan ketiga sumber jadi grup (UPT, Jenis Data, Periode) supaya bisa disetujui sekaligus.
  const barisGroups = useMemo(() => {
    const map = new Map()
    const ensure = (upt_key, jenis_data_id, period_id) => {
      const key = `${upt_key}|${jenis_data_id}|${period_id}`
      if (!map.has(key)) map.set(key, { key, upt_key, jenis_data_id, period_id, rekap: [], entries: [], dokumen: [] })
      return map.get(key)
    }
    rekapGroups.forEach(g => ensure(g.upt_key, g.jenis_data_id, g.period_id).rekap.push(g))
    barisEntries.forEach(e => ensure(e.upt_key, e.jenis_data_id, e.period_id).entries.push(e))
    barisDokumen.forEach(d => ensure(d.upt_key, d.jenis_data_id, d.period_id).dokumen.push(d))
    return [...map.values()]
  }, [rekapGroups, barisEntries, barisDokumen])

  const totalBarisPending = rekapGroups.length + barisEntries.length + barisDokumen.length

  // ── Popup Lihat Data ──
  // Baris isian berlabel sesuai Kelola Jenis Data (urutan kolom ikut urutan form); kolom tak dikenal di akhir.
  function rowsOf(jenisDataId, level, values, baru) {
    const defs = fieldDefs
      .filter(f => f.jenis_data_id === jenisDataId && (!level || f.level === level))
      .sort((a, b) => (a.urutan ?? 0) - (b.urutan ?? 0))
    const keys = [...new Set([...defs.map(f => f.field_key), ...Object.keys(values || {}), ...Object.keys(baru || {})])]
    return keys
      .map(k => { const f = defs.find(d => d.field_key === k); return { key: k, label: f?.label || k, tipe: f?.tipe, value: values?.[k], baru: baru?.[k] } })
      .filter(r => !kosong(r.value) || (baru && !kosong(r.baru)))
  }
  const levelOf = jdId => (jenisDataList.find(j => j.id === jdId)?.level_utama === 'bulan' ? 'bulan' : 'minggu')
  const konteks = (upt, jd, period) => `${uptLabel(upt)} · ${jenisDataJudul(jd)} · ${periodLabel(period)}`
  const dokumenRows = d => [
    { key: 'judul', label: 'Judul', value: d.judul },
    { key: 'file', label: 'Berkas', value: d.file_name },
    { key: 'waktu', label: 'Diunggah', value: fmtTime(d.created_at) },
  ]

  function lihatRekapBaris(r) {
    setDetail({
      title: 'Data yang akan disetujui', subtitle: konteks(r.upt_key, r.jenis_data_id, r.period_id),
      sections: [{ judul: `Baris #${r.baris_ke}`, rows: rowsOf(r.jenis_data_id, 'minggu', r.fields) }],
      busyKey: `r-${r.jenis_data_id}-${r.upt_key}-${r.period_id}-${r.baris_ke}`,
      onApprove: () => approveRekapBaris(r), onReject: tolakBarisEnabled ? () => rejectRekapBaris(r) : null,
    })
  }
  function lihatEntryBaris(e) {
    setDetail({
      title: 'Data yang akan disetujui', subtitle: konteks(e.upt_key, e.jenis_data_id, e.period_id),
      sections: [{ judul: e.nama || e.nik || 'Data rincian', rows: rowsOf(e.jenis_data_id, 'bulan', { nama: e.nama, nik: e.nik, ...(parseJson(e.data_json) || {}) }) }],
      busyKey: `e-${e.id}`,
      onApprove: () => approveEntryBaris(e), onReject: tolakBarisEnabled ? () => rejectEntryBaris(e) : null,
    })
  }
  function lihatDokumenBaris(d) {
    setDetail({
      title: 'Berkas yang akan disetujui', subtitle: konteks(d.upt_key, d.jenis_data_id, d.period_id),
      sections: [{ judul: d.judul, rows: dokumenRows(d) }],
      busyKey: `d-${d.id}`,
      onApprove: () => approveDokumenBaris(d), onReject: tolakBarisEnabled ? () => rejectDokumenBaris(d) : null,
    })
  }

  // Permintaan Hapus & Edit: baca baris sasarannya (filter_json) supaya Admin melihat isi lengkapnya.
  async function lihatPermintaan(item) {
    const base = {
      title: isEdit(item) ? 'Permintaan edit' : 'Permintaan hapus',
      subtitle: konteks(item.upt_key, item.jenis_data_id, item.period_id),
      note: isBukaEdit(item)
        ? 'Bila disetujui, baris ini kembali menjadi Draft dan UPT bisa mengubah isinya. Perubahannya nanti masuk Persetujuan Baris Data lagi.'
        : isEdit(item) ? 'Bila disetujui, nilai yang diajukan langsung ditulis dan baris tetap berstatus Disetujui.'
        : 'Bila disetujui, data di bawah dipindah ke Tempat Sampah (dapat dipulihkan 30 hari).',
      alasan: item.alasan, busyKey: item.id,
      onApprove: () => approve(item), onReject: () => reject(item),
    }
    setDetail({ ...base, loading: true, sections: [] })
    let q = db.from(item.tabel).select('*')
    for (const f of parseJson(item.filter_json) || []) q = f.op === 'in' ? q.in(f.col, f.val) : q.eq(f.col, f.val)
    const { data, error } = await q
    if (error) { setDetail({ ...base, sections: [], error: error.message }); return }
    const baru = parseJson(item.data_baru_json) || {}
    let sections = []
    if (item.tabel === 'rekap_nilai') {
      const byBaris = new Map()
      for (const r of data || []) {
        const b = r.baris_ke ?? 1
        if (!byBaris.has(b)) byBaris.set(b, {})
        byBaris.get(b)[r.field_key] = r.value !== null && r.value !== undefined ? r.value : r.value_text
      }
      const nilaiBaru = Array.isArray(baru.values) && !baru.buka
        ? Object.fromEntries([...baru.values.map(v => [v.field_key, v.value ?? v.value_text]), ...(baru.clearedFields || []).map(k => [k, null])])
        : null
      sections = [...byBaris.entries()].sort((a, b) => a[0] - b[0]).map(([b, values]) => ({
        judul: `Baris #${b}`,
        rows: rowsOf(item.jenis_data_id, 'minggu', values, nilaiBaru ? { ...values, ...nilaiBaru } : null),
        showBaru: !!nilaiBaru,
      }))
    } else if (item.tabel === 'data_entries') {
      const nilaiBaru = !baru.buka && baru.values ? parseJson(baru.values.data_json) || {} : null
      sections = (data || []).map(e => {
        const values = { nama: e.nama, nik: e.nik, ...(parseJson(e.data_json) || {}) }
        return {
          judul: e.nama || e.nik || 'Data rincian',
          rows: rowsOf(e.jenis_data_id, levelOf(e.jenis_data_id), values, nilaiBaru ? { ...values, ...nilaiBaru } : null),
          showBaru: !!nilaiBaru,
        }
      })
    } else if (item.tabel === 'dokumen_upload') {
      sections = (data || []).map(d => ({ judul: d.judul, rows: dokumenRows(d) }))
    }
    setDetail({ ...base, sections, empty: !sections.length })
  }

  // Setujui/Tolak dari dalam popup: popup ditutup setelah aksinya selesai (dibatalkan = popup tetap terbuka).
  async function aksiDetail(fn) {
    const selesai = await fn()
    if (selesai !== false) setDetail(null)
  }

  function rekapPreview(fields) {
    const parts = Object.entries(fields).filter(([, v]) => v !== null && v !== undefined && v !== '').slice(0, 3).map(([k, v]) => `${k}: ${v}`)
    return parts.length ? parts.join(' · ') : '(tanpa isian)'
  }

  async function approveRekapBaris(g) {
    setBusy(`r-${g.jenis_data_id}-${g.upt_key}-${g.period_id}-${g.baris_ke}`)
    const { error } = await db.persetujuanBaris.setujuiRekap(g.jenis_data_id, g.upt_key, g.period_id, g.baris_ke)
    setBusy('')
    setToast(error ? { type: 'error', message: error.message } : { type: 'success', message: 'Baris disetujui.' })
    load()
  }

  async function approveEntryBaris(e) {
    setBusy(`e-${e.id}`)
    const { error } = await db.persetujuanBaris.setujuiEntry(e.id)
    setBusy('')
    setToast(error ? { type: 'error', message: error.message } : { type: 'success', message: 'Baris disetujui.' })
    load()
  }

  async function approveDokumenBaris(d) {
    setBusy(`d-${d.id}`)
    const { error } = await db.persetujuanBaris.setujuiDokumen(d.id)
    setBusy('')
    setToast(error ? { type: 'error', message: error.message } : { type: 'success', message: 'Berkas disetujui.' })
    load()
  }

  // Dialog alasan penolakan (opsional). null = dibatalkan.
  const askAlasan = (judul, keterangan) => promptDialog(`${judul}\n\n${keterangan}`, {
    placeholder: 'Alasan penolakan (opsional)', confirmLabel: 'Tolak', danger: true,
  })

  async function rejectRekapBaris(g) {
    const catatan = await askAlasan('Tolak baris ini?', 'Baris akan dipindah ke Tempat Sampah (bisa dipulihkan) dan tercatat di Catatan Aktivitas. Alasan yang Anda tulis akan terlihat oleh UPT.')
    if (catatan === null) return false // batal
    setBusy(`r-${g.jenis_data_id}-${g.upt_key}-${g.period_id}-${g.baris_ke}`)
    const { error } = await db.persetujuanBaris.tolakRekap(g.jenis_data_id, g.upt_key, g.period_id, g.baris_ke, catatan)
    setBusy('')
    setToast(error ? { type: 'error', message: error.message } : { type: 'success', message: 'Baris ditolak — UPT bisa memperbaiki & menyimpan ulang.' })
    load()
  }

  async function rejectEntryBaris(e) {
    const catatan = await askAlasan('Tolak baris ini?', 'Baris akan dipindah ke Tempat Sampah (bisa dipulihkan) dan tercatat di Catatan Aktivitas. Alasan yang Anda tulis akan terlihat oleh UPT.')
    if (catatan === null) return false
    setBusy(`e-${e.id}`)
    const { error } = await db.persetujuanBaris.tolakEntry(e.id, catatan)
    setBusy('')
    setToast(error ? { type: 'error', message: error.message } : { type: 'success', message: 'Baris ditolak — UPT bisa memperbaiki & menyimpan ulang.' })
    load()
  }

  async function rejectDokumenBaris(d) {
    const catatan = await askAlasan('Tolak berkas ini?', 'Berkas akan dipindah ke Tempat Sampah (bisa dipulihkan) dan tercatat di Catatan Aktivitas. Alasan yang Anda tulis akan terlihat oleh UPT.')
    if (catatan === null) return false
    setBusy(`d-${d.id}`)
    const { error } = await db.persetujuanBaris.tolakDokumen(d.id, catatan)
    setBusy('')
    setToast(error ? { type: 'error', message: error.message } : { type: 'success', message: 'Berkas ditolak — UPT bisa mengunggah ulang.' })
    load()
  }

  async function approveGroupAll(g) {
    const total = g.rekap.length + g.entries.length + g.dokumen.length
    if (!(await confirmDialog(`Setujui ${total} baris sekaligus?\n\n${uptLabel(g.upt_key)} · ${jenisDataJudul(g.jenis_data_id)} · ${periodLabel(g.period_id)}`, { confirmLabel: 'Setujui semua' }))) return
    setBusy(g.key)
    let error = null
    if (g.rekap.length) {
      const items = g.rekap.map(r => ({ jenis_data_id: r.jenis_data_id, upt_key: r.upt_key, period_id: r.period_id, baris_ke: r.baris_ke }))
      const res = await db.persetujuanBaris.setujuiRekapMassal(items)
      if (res.error) error = res.error
    }
    if (g.entries.length && !error) {
      const res = await db.persetujuanBaris.setujuiEntryMassal(g.entries.map(e => e.id))
      if (res.error) error = res.error
    }
    for (const d of g.dokumen) { if (error) break; const res = await db.persetujuanBaris.setujuiDokumen(d.id); if (res.error) error = res.error }
    setBusy('')
    setToast(error ? { type: 'error', message: error.message } : { type: 'success', message: `${total} baris disetujui.` })
    load()
  }

  async function approve(item) {
    const confirmMsg = isUnlock(item)
      ? `Buka kunci "${item.ringkasan}"?\n\nUPT bisa mengedit lagi seluruh jenis data periode ini sampai mereka "Kirim" ulang.`
      : isBukaEdit(item)
      ? `Izinkan edit "${item.ringkasan}"?\n\nBaris kembali menjadi Draft (isinya tidak berubah) sehingga UPT bisa mengubahnya. Perubahan dari UPT nanti masuk Persetujuan Baris Data lagi.`
      : isEdit(item)
      ? `Terapkan perubahan "${item.ringkasan}"?\n\nNilai baru akan langsung ditulis dan baris kembali berstatus Disetujui.`
      : `Setujui penghapusan "${item.ringkasan || TABLE_LABEL[item.tabel]}"?\n\nData akan benar-benar terhapus (masuk Tempat Sampah, dapat dipulihkan 30 hari).`
    const confirmLabel = isUnlock(item) ? 'Buka kunci' : isBukaEdit(item) ? 'Izinkan edit' : isEdit(item) ? 'Terapkan' : 'Ya, hapus'
    if (!(await confirmDialog(confirmMsg, { confirmLabel }))) return false
    setBusy(item.id)
    const { error, data } = await db.permintaanHapus.setujui(item.id)
    setBusy('')
    if (!error && !isEdit(item) && !isUnlock(item)) {
      load()
      await notifyDihapus(`${data?.dihapus ?? item.jumlah_baris} data · ${item.ringkasan || TABLE_LABEL[item.tabel] || item.tabel}`)
      return
    }
    setToast(error
      ? { type: 'error', message: error.message }
      : { type: 'success', message: isUnlock(item) ? 'Disetujui — kunci periode dibuka.' : isBukaEdit(item) ? 'Disetujui — baris kembali jadi Draft dan bisa diedit UPT.' : isEdit(item) ? 'Disetujui — nilai baru sudah tersimpan.' : `Disetujui — ${data?.dihapus ?? item.jumlah_baris} data dihapus.` })
    load()
  }

  async function reject(item) {
    const catatan = await askAlasan(
      isEdit(item) ? 'Tolak permintaan edit ini?' : isUnlock(item) ? 'Tolak buka kunci ini?' : 'Tolak permintaan hapus ini?',
      isEdit(item) ? 'Nilai lama tetap berlaku. Alasan yang Anda tulis akan terlihat oleh UPT.' : 'Data tidak disentuh. Alasan yang Anda tulis akan terlihat oleh UPT.',
    )
    if (catatan === null) return false // batal
    setBusy(item.id)
    const { error } = await db.permintaanHapus.tolak(item.id, catatan)
    setBusy('')
    setToast(error ? { type: 'error', message: error.message } : { type: 'success', message: isUnlock(item) ? 'Permintaan buka kunci ditolak — data tetap terkunci.' : isEdit(item) ? 'Permintaan edit ditolak — nilai lama tetap berlaku.' : 'Permintaan ditolak.' })
    load()
  }

  if (loading) return <div className="card flex justify-center py-12"><Loader2 className="animate-spin text-gray-400" /></div>

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Permintaan"
        description="Tiap baris yang UPT simpan menunggu persetujuan Anda di sini (Persetujuan Baris Data) sebelum dihitung resmi. Untuk baris yang sudah disetujui, UPT mengajukan permintaan hapus atau edit terpisah di bagian Hapus & Edit."
      />

      {!enabled && (
        <div className="card p-6 text-sm text-amber-700 dark:text-amber-300">
          Fitur Permintaan belum aktif. Jalankan <code>database/migrasi_10_permintaan_hapus.sql</code> di
          phpMyAdmin, restart backend, lalu muat ulang halaman. Sampai migrasi dijalankan, akun UPT tetap menghapus
          data secara langsung seperti sebelumnya (tidak diblokir diam-diam).
        </div>
      )}

      {enabled && (
        <>
          <SelisihByNameCard />
          {persetujuanBarisEnabled && (
            <InfoCard title={`Persetujuan Baris Data (${totalBarisPending})`}>
              {barisGroups.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                  <ListChecks size={32} className="mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Tidak ada baris data yang menunggu persetujuan.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {barisGroups.map(g => {
                    const total = g.rekap.length + g.entries.length + g.dokumen.length
                    return (
                      <div key={g.key} className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="flex items-center justify-between gap-3 flex-wrap px-4 py-2.5 bg-gray-50 dark:bg-gray-800/40">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {uptLabel(g.upt_key)} <span className="text-gray-400 font-normal">· {jenisDataJudul(g.jenis_data_id)} · {periodLabel(g.period_id)}</span>
                          </p>
                          {total > 1 && (
                            <button
                              disabled={busy === g.key}
                              onClick={() => approveGroupAll(g)}
                              className="btn-primary text-xs !bg-emerald-600 hover:!bg-emerald-700"
                            >
                              {busy === g.key ? <Loader2 size={13} className="animate-spin" /> : <Check size={13} />} Setujui Semua ({total})
                            </button>
                          )}
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                          {g.rekap.map(r => {
                            const busyKey = `r-${r.jenis_data_id}-${r.upt_key}-${r.period_id}-${r.baris_ke}`
                            return (
                              <div key={busyKey} className="py-2.5 px-4 flex items-start justify-between gap-3 flex-wrap">
                                <p className="text-xs text-gray-600 dark:text-gray-300 min-w-0 truncate">{rekapPreview(r.fields)}</p>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  <button onClick={() => lihatRekapBaris(r)} className="btn-secondary text-xs">
                                    <Eye size={12} /> Lihat Data
                                  </button>
                                  {tolakBarisEnabled && (
                                    <button disabled={busy === busyKey} onClick={() => rejectRekapBaris(r)} className="btn-secondary text-xs !text-rose-600 dark:!text-rose-400">
                                      <X size={12} /> Tolak
                                    </button>
                                  )}
                                  <button disabled={busy === busyKey} onClick={() => approveRekapBaris(r)} className="btn-secondary text-xs !text-emerald-700 dark:!text-emerald-400">
                                    {busy === busyKey ? <Loader2 size={12} className="animate-spin" /> : <Check size={12} />} Setujui
                                  </button>
                                </div>
                              </div>
                            )
                          })}
                          {g.entries.map(e => (
                            <div key={`e-${e.id}`} className="py-2.5 px-4 flex items-start justify-between gap-3 flex-wrap">
                              <p className="text-xs text-gray-600 dark:text-gray-300 min-w-0 truncate">{e.nama || e.nik || '(tanpa nama)'}</p>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <button onClick={() => lihatEntryBaris(e)} className="btn-secondary text-xs">
                                  <Eye size={12} /> Lihat Data
                                </button>
                                {tolakBarisEnabled && (
                                  <button disabled={busy === `e-${e.id}`} onClick={() => rejectEntryBaris(e)} className="btn-secondary text-xs !text-rose-600 dark:!text-rose-400">
                                    <X size={12} /> Tolak
                                  </button>
                                )}
                                <button disabled={busy === `e-${e.id}`} onClick={() => approveEntryBaris(e)} className="btn-secondary text-xs !text-emerald-700 dark:!text-emerald-400">
                                  {busy === `e-${e.id}` ? <Loader2 size={12} className="animate-spin" /> : <Check size={12} />} Setujui
                                </button>
                              </div>
                            </div>
                          ))}
                          {g.dokumen.map(d => (
                            <div key={`d-${d.id}`} className="py-2.5 px-4 flex items-start justify-between gap-3 flex-wrap">
                              <p className="text-xs text-gray-600 dark:text-gray-300 min-w-0 truncate">{d.judul} ({d.file_name})</p>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <button onClick={() => lihatDokumenBaris(d)} className="btn-secondary text-xs">
                                  <Eye size={12} /> Lihat Data
                                </button>
                                {tolakBarisEnabled && (
                                  <button disabled={busy === `d-${d.id}`} onClick={() => rejectDokumenBaris(d)} className="btn-secondary text-xs !text-rose-600 dark:!text-rose-400">
                                    <X size={12} /> Tolak
                                  </button>
                                )}
                                <button disabled={busy === `d-${d.id}`} onClick={() => approveDokumenBaris(d)} className="btn-secondary text-xs !text-emerald-700 dark:!text-emerald-400">
                                  {busy === `d-${d.id}` ? <Loader2 size={12} className="animate-spin" /> : <Check size={12} />} Setujui
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </InfoCard>
          )}

          <InfoCard title={`Hapus & Edit (${pending.length})`}>
            {pending.length === 0 ? (
              <div className="text-center py-10 text-gray-400">
                <Inbox size={32} className="mx-auto mb-2 opacity-40" />
                <p className="text-sm">Tidak ada permintaan yang menunggu.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {pending.map(item => (
                  <div key={item.id} className="py-3 flex items-start justify-between gap-4 flex-wrap">
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-gray-900 dark:text-white flex items-center gap-1.5 flex-wrap">
                        {uptLabel(item.upt_key)} <span className="text-gray-400 font-normal">· {TABLE_LABEL[item.tabel] || item.tabel}</span>
                        {isEdit(item) ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                            <Pencil size={10} /> Pengajuan Edit
                          </span>
                        ) : (
                          <span className="inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">Pengajuan Hapus</span>
                        )}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.ringkasan || `${item.jumlah_baris} baris`}</p>
                      {isEdit(item) && editPreview(item) && (
                        <p className="text-xs text-gray-400 mt-0.5">Nilai baru: {editPreview(item)}</p>
                      )}
                      {item.alasan && <p className="text-xs text-gray-400 mt-0.5 italic">Alasan UPT: "{item.alasan}"</p>}
                      <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                        <Clock size={11} /> {item.requested_by_label || 'UPT'} · {fmtTime(item.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {!isUnlock(item) && (
                        <button onClick={() => lihatPermintaan(item)} className="btn-secondary text-xs">
                          <Eye size={13} /> Lihat Data
                        </button>
                      )}
                      <button
                        disabled={busy === item.id}
                        onClick={() => reject(item)}
                        className="btn-secondary text-xs text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60"
                      >
                        <X size={13} /> Tolak
                      </button>
                      <button
                        disabled={busy === item.id}
                        onClick={() => approve(item)}
                        className="btn-primary text-xs !bg-emerald-600 hover:!bg-emerald-700"
                      >
                        {busy === item.id ? <Loader2 size={13} className="animate-spin" /> : <Check size={13} />} Setujui
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </InfoCard>

          <InfoCard
            title={`Riwayat Hapus & Edit (${history.length})`}
            action={
              <button className="text-xs text-sky-600 hover:underline" onClick={() => setShowHistory(s => !s)}>
                {showHistory ? 'Sembunyikan' : 'Tampilkan'}
              </button>
            }
          >
            {showHistory && (history.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-6">Belum ada riwayat.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 text-xs uppercase tracking-wide text-gray-500 text-left">
                      <th className="py-2 px-3">UPT</th>
                      <th className="py-2 px-3">Data</th>
                      <th className="py-2 px-3">Status</th>
                      <th className="py-2 px-3">Ditinjau oleh</th>
                      <th className="py-2 px-3">Waktu</th>
                      <th className="py-2 px-3">Catatan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {history.map(item => {
                      const [label, cls] = STATUS_BADGE[item.status] || [item.status, 'bg-gray-100 text-gray-700']
                      return (
                        <tr key={item.id}>
                          <td className="py-2.5 px-3 whitespace-nowrap">{uptLabel(item.upt_key)}</td>
                          <td className="py-2.5 px-3 text-xs">
                            {isEdit(item) && <span className="mr-1 inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">Edit</span>}
                            {item.ringkasan || `${item.jumlah_baris} baris ${TABLE_LABEL[item.tabel] || item.tabel}`}
                          </td>
                          <td className="py-2.5 px-3"><span className={`px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap ${cls}`}>{label}</span></td>
                          <td className="py-2.5 px-3 text-xs">{item.reviewed_by_label || '-'}</td>
                          <td className="py-2.5 px-3 text-xs whitespace-nowrap">{fmtTime(item.reviewed_at)}</td>
                          <td className="py-2.5 px-3 text-xs text-gray-500">{item.catatan_admin || '-'}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            ))}
          </InfoCard>
        </>
      )}

      <Modal
        open={!!detail}
        onClose={() => setDetail(null)}
        title={detail?.title}
        maxWidth="max-w-3xl"
        footer={detail && (
          <>
            {detail.onReject && (
              <button
                disabled={busy === detail.busyKey}
                onClick={() => aksiDetail(detail.onReject)}
                className="btn-secondary text-sm text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60"
              >
                <X size={14} /> Tolak
              </button>
            )}
            <button
              disabled={busy === detail.busyKey}
              onClick={() => aksiDetail(detail.onApprove)}
              className="btn-primary text-sm !bg-emerald-600 hover:!bg-emerald-700"
            >
              {busy === detail.busyKey ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />} Setujui
            </button>
          </>
        )}
      >
        {detail && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">{detail.subtitle}</p>
            {detail.note && <p className="text-sm rounded-lg bg-sky-50 dark:bg-sky-950/30 text-sky-800 dark:text-sky-200 px-3 py-2">{detail.note}</p>}
            {detail.alasan && <p className="text-sm italic text-gray-500">Alasan UPT: "{detail.alasan}"</p>}
            {detail.loading ? (
              <div className="flex justify-center py-8"><Loader2 className="animate-spin text-gray-400" /></div>
            ) : detail.error ? (
              <p className="text-sm text-rose-600">Gagal memuat data: {detail.error}</p>
            ) : detail.empty ? (
              <p className="text-sm text-gray-400">Data sasaran tidak ditemukan lagi (mungkin sudah dihapus).</p>
            ) : detail.sections.map((s, i) => (
              <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {detail.sections.length > 1 || s.judul ? (
                  <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/40 text-sm font-medium text-gray-800 dark:text-gray-100">{s.judul}</div>
                ) : null}
                <div className="px-4 py-1"><DetailTable rows={s.rows} showBaru={s.showBaru} /></div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
