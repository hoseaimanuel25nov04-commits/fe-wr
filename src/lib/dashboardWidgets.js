/**
 * lib/dashboardWidgets.js
 * Pengaturan isi Dashboard. Widget disimpan di tabel dashboard_widgets (menu Admin "Kelola Dashboard").
 * Selama tabel kosong/belum ada, dipakai DEFAULT_WIDGETS di bawah (sama dengan tampilan bawaan sebelumnya).
 *
 * Bentuk widget:
 *   { tipe: 'kartu', judul, grup, gaya: 'berwarna'|'putih', ikon, warna, satuan: 'angka'|'rupiah', urutan, aktif,
 *     konfigurasi: { items: [{jd, field, where?}], pembanding?: [{jd, field, where?}], pembandingLabel?, sorot? } }
 *   { tipe: 'grafik', judul, grup, satuan, urutan, aktif,
 *     konfigurasi: { series: [{ label, warna, tumpuk?, items: [{jd, field}] }] } }  — tampilan Dashboard punya tombol
 *     untuk beralih ke tabel angka per UPT (state lokal, sumber angka sama persis, tidak perlu pengaturan tambahan)
 * `jd` = kunci jenis data (jenis_data.key), `field` = field_key. Nilai = jumlah seluruh baris rekap minggu terpilih.
 * `field` = FIELD_PELATIHAN ('#pelatihan') = jumlah pelatihan: banyaknya baris yang kolom "Judul baris"-nya terisi.
 * `where` (opsional) = hanya baris yang kolom pilihannya bernilai tertentu, mis. { sumber_dana: 'RM' }.
 * `tumpuk` (opsional) = seri dengan nilai `tumpuk` yang sama digambar bertumpuk dalam satu batang per UPT.
 * `konfigurasi.tampilan: 'total'` (opsional) = satu batang tegak per seri berisi total seluruh UPT (nama seri di sumbu
 *   bawah), bukan batang mendatar per UPT/Balai.
 */
import { Users, Landmark, GraduationCap, Activity, BarChart3, Database, FileText, ClipboardList, Calendar, Clock } from 'lucide-react'

export const ICONS = { Users, Landmark, GraduationCap, Activity, BarChart3, Database, FileText, ClipboardList, Calendar, Clock }
export const ICON_NAMES = Object.keys(ICONS)

export const COLORS = [
  ['bg-blue-600', 'Biru'], ['bg-emerald-500', 'Hijau'], ['bg-amber-500', 'Kuning'], ['bg-rose-500', 'Merah'],
  ['bg-purple-600', 'Ungu'], ['bg-sky-500', 'Biru muda'], ['bg-slate-600', 'Abu-abu'],
]
export const CHART_COLORS = ['#1B5FA8', '#2F9E6E', '#94a3b8', '#0ea5e9', '#f59e0b', '#e11d48', '#7c3aed']

const JD_MASYARAKAT = 'masyarakat'
const JD_APARATUR = 'aparatur'
const JD_INSTRUKTUR = 'data_instruktur_dan_wi'
const JD_ANGGARAN = 'data_anggaran'
const JD_PNBP = 'pnbp_dan_mp_pnbp'
// Anggaran dari jenis data "Data Anggaran" (tiap baris: Jenis Belanja + Sumber Dana + Pagu + Realisasi).
// `where` menyaring baris menurut kolom pilihan pada baris yang sama (lib/saringBaris.js). Pagu dan Realisasi
// tampil sebagai dua kelompok terpisah. Susunan yang sama dipasang migrasi_18 (be/scripts/seed-weekly-report.ts).
const ag = (field, where) => [{ jd: JD_ANGGARAN, field, ...(where ? { where } : {}) }]
const DANA = ['RM', 'PNBP/BLU', 'SBSN']
const METODE = ['Luring', 'Daring', 'Blended']

/** Sumber angka khusus: jumlah pelatihan (baris yang kolom "Judul baris"-nya terisi), bukan nilai kolom angka. */
export const FIELD_PELATIHAN = '#pelatihan'
const pelatihan = (jd, where) => [{ jd, field: FIELD_PELATIHAN, where }]
// Grafik total pelatihan seluruh UPT per Sumber Dana & per Metode, Masyarakat dan Aparatur masing-masing satu grafik
// (sama dengan database/migrasi_26_sumber_dana_metode.sql)
const WARNA_DANA = { RM: '#1B5FA8', 'PNBP/BLU': '#0ea5e9', SBSN: '#f59e0b' }
const WARNA_METODE = { Luring: '#1B5FA8', Daring: '#0ea5e9', Blended: '#2F9E6E' }
const PELATIHAN_JD = [['Masyarakat', JD_MASYARAKAT], ['Aparatur', JD_APARATUR]]
const grafikTotal = (judul, jd, kolom, opsi, warna) => ({
  tipe: 'grafik', judul, grup: 'Grafik', satuan: 'angka',
  konfigurasi: { tampilan: 'total', series: opsi.map(o => ({ label: o, warna: warna[o], items: pelatihan(jd, { [kolom]: o }) })) },
})

export const DEFAULT_WIDGETS = [
  { tipe: 'kartu', judul: 'Masyarakat Dilatih', grup: 'Progress & Status', gaya: 'berwarna', ikon: 'Users', warna: 'bg-blue-600', satuan: 'angka', konfigurasi: { items: [{ jd: JD_MASYARAKAT, field: 'jumlah_peserta' }] } },
  { tipe: 'kartu', judul: 'Aparatur Dilatih', grup: 'Progress & Status', gaya: 'berwarna', ikon: 'Landmark', warna: 'bg-emerald-500', satuan: 'angka', konfigurasi: { items: [{ jd: JD_APARATUR, field: 'jumlah_peserta' }] } },
  { tipe: 'kartu', judul: 'SDM Pelatih (Instruktur & Widyaiswara)', grup: 'Progress & Status', gaya: 'berwarna', ikon: 'GraduationCap', warna: 'bg-amber-500', satuan: 'angka', konfigurasi: { items: [{ jd: JD_INSTRUKTUR, field: 'jumlah' }] } },
  // Sama dengan database/migrasi_29_kartu_pnbp.sql
  { tipe: 'kartu', judul: 'Pendapatan PNBP', grup: 'Progress & Status', gaya: 'berwarna', ikon: 'Activity', warna: 'bg-purple-600', satuan: 'rupiah', konfigurasi: { items: [{ jd: JD_PNBP, field: 'realisasi_pnbp' }], pembanding: [{ jd: JD_PNBP, field: 'target_penerimaan_pnbp' }], pembandingLabel: 'Target' } },
  ...DANA.map(d => ({ tipe: 'kartu', judul: d, grup: 'Pagu Anggaran', gaya: 'putih', satuan: 'rupiah', konfigurasi: { items: ag('pagu', { sumber_dana: d }) } })),
  { tipe: 'kartu', judul: 'Total Pagu Anggaran', grup: 'Pagu Anggaran', gaya: 'putih', satuan: 'rupiah', konfigurasi: { sorot: true, items: ag('pagu') } },
  ...DANA.map(d => ({ tipe: 'kartu', judul: d, grup: 'Realisasi Anggaran', gaya: 'putih', satuan: 'rupiah', konfigurasi: { items: ag('realisasi', { sumber_dana: d }), pembanding: ag('pagu', { sumber_dana: d }), pembandingLabel: 'Pagu' } })),
  { tipe: 'kartu', judul: 'Total Realisasi Anggaran', grup: 'Realisasi Anggaran', gaya: 'putih', satuan: 'rupiah', konfigurasi: { sorot: true, items: ag('realisasi'), pembanding: ag('pagu'), pembandingLabel: 'Pagu' } },
  ...PELATIHAN_JD.map(([nama, jd]) => grafikTotal(`Total Pelatihan ${nama} per Sumber Dana`, jd, 'sumber_dana', DANA, WARNA_DANA)),
  ...PELATIHAN_JD.map(([nama, jd]) => grafikTotal(`Total Pelatihan ${nama} per Metode Pelatihan`, jd, 'metode_pelatihan', METODE, WARNA_METODE)),
  {
    tipe: 'grafik', judul: 'Peserta Dilatih', grup: 'Grafik', satuan: 'angka',
    konfigurasi: { series: [{ label: 'Masyarakat', warna: '#1B5FA8', items: [{ jd: JD_MASYARAKAT, field: 'jumlah_peserta' }] }, { label: 'Aparatur', warna: '#2F9E6E', items: [{ jd: JD_APARATUR, field: 'jumlah_peserta' }] }] },
  },
  {
    tipe: 'grafik', judul: 'Pagu vs Realisasi', grup: 'Grafik', satuan: 'rupiah',
    konfigurasi: { series: [{ label: 'Pagu', warna: '#94a3b8', items: ag('pagu') }, { label: 'Realisasi', warna: '#0ea5e9', items: ag('realisasi') }] },
  },
].map((w, i) => ({ id: `bawaan-${i}`, urutan: (i + 1) * 10, aktif: true, ikon: null, warna: null, ...w }))

/** Widget aktif berurutan, dikelompokkan menurut `grup` (urutan grup = kemunculan pertama). */
export function groupWidgets(widgets) {
  const list = [...widgets].filter(w => w.aktif !== false).sort((a, b) => (a.urutan ?? 0) - (b.urutan ?? 0))
  const groups = []
  for (const w of list) {
    let g = groups.find(x => x.nama === w.grup)
    if (!g) groups.push((g = { nama: w.grup, widgets: [] }))
    g.widgets.push(w)
  }
  return groups
}

/** Bentuk untuk disimpan ke database (tanpa id bawaan/kolom otomatis). */
export const toRow = w => ({
  tipe: w.tipe, judul: w.judul, grup: w.grup, gaya: w.gaya || 'berwarna', ikon: w.ikon || null, warna: w.warna || null,
  satuan: w.satuan || 'angka', konfigurasi: w.konfigurasi || {}, urutan: w.urutan ?? 0, aktif: w.aktif !== false,
})
