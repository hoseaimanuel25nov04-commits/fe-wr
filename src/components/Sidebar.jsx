/**
 * components/Sidebar.jsx
 * Sidebar collapsible: 256px (terbuka) / 64px (tertutup)
 * Role-aware: menu Admin hanya untuk Admin
 */
import { useState, useEffect, useCallback } from 'react'
import {
  LayoutDashboard, Zap, ClipboardList, Database,
  Users, Settings, BarChart2, FileText,
  ChevronRight, ChevronLeft, ChevronDown,
  Building2, Globe, CalendarDays, Trash2, CalendarRange, Upload, LayoutGrid, SlidersHorizontal, Inbox, FileCheck2, BookOpen, MessageSquarePlus, Mail, FolderCog, ScrollText
} from 'lucide-react'
import { useAuth } from '../AuthContext'
import { db, getFeatures, saran, kategoriDokumen, KATEGORI_DOKUMEN_EVENT } from '../lib/db'
import LogoKKP from './LogoKKP'

const PERMINTAAN_POLL_MS = 60000 // cek permintaan baru (persetujuan data + hapus/buka kunci) tiap 1 menit

export default function Sidebar({ activePage, onNavigate, collapsed, onToggle }) {
  const { isAdmin, profile } = useAuth()
  const [advOpen, setAdvOpen] = useState(false)
  const [permintaanPending, setPermintaanPending] = useState(0)
  const [saranBaru, setSaranBaru] = useState(0)
  const [akunMenunggu, setAkunMenunggu] = useState(0) // pendaftaran akun yang menunggu persetujuan
  // Menu dokumen per kategori (diatur Admin di Kategori Dokumen); akun UPT hanya menerima yang diizinkan untuk UPT
  const [menuDokumen, setMenuDokumen] = useState([])
  const ADVANCED = [[CalendarRange, 'Kelola Periode', 'kelola-periode'], [Upload, 'Impor Data Historis', 'impor-historis'], [FolderCog, 'Kategori Dokumen', 'kelola-kategori-dokumen'], [Trash2, 'Tempat Sampah', 'tempat-sampah']]
  // Terbuka otomatis bila halaman aktif ada di dalamnya
  const advOpenEffective = advOpen || ADVANCED.some(([, , page]) => page === activePage)

  const loadPermintaanCount = useCallback(async () => {
    if (!isAdmin) return
    const feat = await getFeatures()
    if (!feat.permintaanHapus) return
    const counts = [db.from('permintaan_hapus').select('*', { head: true }).eq('status', 'pending')]
    const results = await Promise.all(counts)
    let total = results.reduce((a, r) => a + (r.count || 0), 0)
    if (feat.persetujuanBaris) {
      // rekap_nilai disimpan per-field (EAV) — hitung baris_ke unik, bukan baris mentah, supaya cocok dengan
      // jumlah yang ditampilkan di halaman Permintaan (bagian "Persetujuan Baris Data").
      const [{ data: rekap }, entCount, dokCount] = await Promise.all([
        db.from('rekap_nilai').select('jenis_data_id, upt_key, period_id, baris_ke').eq('status', 'draft'),
        db.from('data_entries').select('*', { head: true }).eq('status', 'draft'),
        db.from('dokumen_upload').select('*', { head: true }).eq('status', 'draft'),
      ])
      const barisKeys = new Set((rekap || []).map(r => `${r.jenis_data_id}|${r.upt_key}|${r.period_id}|${r.baris_ke}`))
      total += barisKeys.size + (entCount.count || 0) + (dokCount.count || 0)
    }
    setPermintaanPending(total)
  }, [isAdmin])

  // Muat ulang tiap kali pindah halaman (mis. baru saja menyetujui/menolak di Permintaan Hapus) + polling berkala
  useEffect(() => {
    loadPermintaanCount()
  }, [activePage, loadPermintaanCount])

  useEffect(() => {
    const t = setInterval(loadPermintaanCount, PERMINTAAN_POLL_MS)
    return () => clearInterval(t)
  }, [loadPermintaanCount])

  const loadMenuDokumen = useCallback(async () => {
    const feat = await getFeatures()
    if (!feat.kategoriDokumen) {
      // Sebelum migrasi_23: hanya Dokumen Kinerja
      setMenuDokumen(feat.dokumenKinerja ? [{ kode: 'kinerja', nama: 'Dokumen Kinerja', aktif: true }] : [])
      return
    }
    const { data } = await kategoriDokumen.daftar()
    setMenuDokumen((data?.data || []).filter(k => k.aktif))
  }, [])
  useEffect(() => {
    loadMenuDokumen()
    window.addEventListener(KATEGORI_DOKUMEN_EVENT, loadMenuDokumen)
    return () => window.removeEventListener(KATEGORI_DOKUMEN_EVENT, loadMenuDokumen)
  }, [loadMenuDokumen])

  // Kotak Masuk (Admin): jumlah pesan Kotak Saran yang belum dibaca
  const loadSaranBaru = useCallback(async () => {
    if (!isAdmin) return
    const { data } = await saran.jumlahBaru()
    setSaranBaru(data?.data?.jumlah || 0)
    const feat = await getFeatures()
    if (feat.akunEmail) {
      const { data: p } = await db.auth.pendaftaran()
      setAkunMenunggu(p?.data?.length || 0)
    }
  }, [isAdmin])
  useEffect(() => { loadSaranBaru() }, [activePage, loadSaranBaru])
  useEffect(() => {
    const t = setInterval(loadSaranBaru, PERMINTAAN_POLL_MS)
    window.addEventListener('kotak-masuk-berubah', loadSaranBaru)
    return () => { clearInterval(t); window.removeEventListener('kotak-masuk-berubah', loadSaranBaru) }
  }, [loadSaranBaru])

  const NavItem = ({ icon: Icon, label, page, badge }) => {
    const active = activePage === page
    return (
      <button
        onClick={() => onNavigate(page)}
        className={`sidebar-nav-item w-full relative ${active ? 'active' : ''}`}
        title={collapsed ? (badge ? `${label} (${badge})` : label) : undefined}
      >
        <Icon size={18} className="flex-shrink-0" />
        {collapsed && badge && (
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
        )}
        {!collapsed && (
          <>
            <span className="flex-1 text-left">{label}</span>
            {badge && <span className="bg-amber-400 text-[#0B1830] text-[10px] font-bold px-1.5 py-0.5 rounded-full">{badge}</span>}
          </>
        )}
      </button>
    )
  }

  const SectionLabel = ({ label }) => {
    if (collapsed) return <div className="my-2 border-t border-white/10" />
    return (
      <div className="px-3 pt-5 pb-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">{label}</span>
      </div>
    )
  }

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-30 flex flex-col transition-all duration-300 ease-in-out
        bg-gradient-to-b from-[#0B1830] to-[#0E1F3D] border-r border-white/10
        ${collapsed ? 'w-16 -translate-x-full md:translate-x-0' : 'w-64'}`}
    >
      <div className="h-1 flex-shrink-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-4 border-b border-white/10 ${collapsed ? 'justify-center' : ''}`}>
        <LogoKKP size={38} />
        {!collapsed && (
          <div className="min-w-0">
            <div className="text-white font-bold font-display text-sm leading-tight tracking-wide">PUSLATKP</div>
            <div className="text-white/45 text-[10px] leading-tight truncate">Kementerian Kelautan dan Perikanan</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-0.5">
        <SectionLabel label="Team Portal" />
        <NavItem icon={LayoutDashboard} label="Dashboard" page="dashboard" />

        <SectionLabel label="Data & Pelaporan" />
        <NavItem icon={Database} label="Input Mingguan" page="input-mingguan" />
        <NavItem icon={CalendarDays} label="Input Bulanan" page="input-bulanan" />
        <NavItem icon={BarChart2} label="Rekap Triwulan & Tahun" page="rekap-triwulan-tahun" />
        {!isAdmin && <NavItem icon={ScrollText} label="Catatan Aktivitas" page="catatan-aktivitas" />}

        {/* Akun UPT/Balai: Administrasi hanya berisi menu dokumen yang diizinkan Admin (mis. Dokumen Kinerja) */}
        {!isAdmin && menuDokumen.length > 0 && (
          <>
            <SectionLabel label="Administrasi" />
            {menuDokumen.map(k => <NavItem key={k.kode} icon={FileCheck2} label={k.nama} page={`dokumen/${k.kode}`} />)}
          </>
        )}

        {/* ADMIN SECTION */}
        {isAdmin && (
          <>
            <SectionLabel label="Administrasi" />
            <NavItem icon={FileText} label="Dokumen & Arsip" page="dokumen-arsip" />
            {menuDokumen.map(k => <NavItem key={k.kode} icon={FileCheck2} label={k.nama} page={`dokumen/${k.kode}`} />)}
            <NavItem icon={Mail} label="Kotak Masuk" page="kotak-masuk" badge={saranBaru > 0 ? saranBaru : null} />
            <NavItem icon={Users} label="Kelola Akun UPT" page="kelola-upt" badge={akunMenunggu > 0 ? akunMenunggu : null} />
            <NavItem icon={Inbox} label="Permintaan" page="permintaan-hapus" badge={permintaanPending > 0 ? permintaanPending : null} />
            <NavItem icon={Settings} label="Kelola Jenis Data" page="kelola-jenis-data" />
            <NavItem icon={LayoutGrid} label="Kelola Dashboard" page="kelola-dashboard" />

            {/* Jarang dipakai (tahunan / sekali waktu) dilipat agar menu harian tetap pendek */}
            {!collapsed && (
              <button
                onClick={() => setAdvOpen(o => !o)}
                className="sidebar-nav-item w-full"
                aria-expanded={advOpenEffective}
              >
                <SlidersHorizontal size={18} className="flex-shrink-0" />
                <span className="flex-1 text-left">Pengaturan Lanjutan</span>
                <ChevronDown size={14} className={`transition-transform ${advOpenEffective ? 'rotate-180' : ''}`} />
              </button>
            )}
            {(collapsed || advOpenEffective) && (
              <div className={collapsed ? 'space-y-0.5' : 'space-y-0.5 pl-3 border-l border-white/10 ml-4'}>
                {ADVANCED.map(([icon, label, page]) => <NavItem key={page} icon={icon} label={label} page={page} />)}
              </div>
            )}
          </>
        )}

        {/* Semua akun: panduan sesuai akun & kotak saran */}
        <SectionLabel label="Bantuan" />
        <NavItem icon={BookOpen} label="Panduan Pengguna" page="panduan-pengguna" />
        <NavItem icon={MessageSquarePlus} label="Kotak Saran" page="kotak-saran" />
      </nav>

      {/* Footer: User info + collapse toggle */}
      <div className="border-t border-white/10 px-2 py-3 space-y-2">
        {!collapsed && (
          <div className="px-3 py-2 rounded-lg bg-white/5">
            <div className="text-white text-xs font-semibold truncate">
              {profile?.nama_lengkap || 'Pengguna'}
            </div>
            <div className="text-white/50 text-[10px] capitalize">
              {profile?.role || '-'} {profile?.upt_key ? `• ${profile.upt_key}` : ''}
            </div>
          </div>
        )}
        <button
          onClick={onToggle}
          className="sidebar-nav-item w-full justify-center"
          title={collapsed ? 'Buka sidebar' : 'Tutup sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed && <span className="text-xs">Tutup sidebar</span>}
        </button>
      </div>
    </aside>
  )
}
