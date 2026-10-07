/**
 * lib/selisihByName.js
 * Mencocokkan jumlah orang di Data by Name (jenis data bulanan "per nama", mis. Data Masyarakat) dengan total
 * peserta Rekap 4 Minggu dari jenis data mingguan pasangannya (mis. Data Masyarakat Dilatih) pada bulan yang sama.
 * Angka mingguan direkap persis seperti tab "Rekap 4 Minggu" (lib/agregasi.js), dari baris yang sudah disetujui.
 */
import { aggregateRows } from './agregasi.js'

/** Kolom peserta di jenis data mingguan pasangan: peran "peserta" (Kelola Jenis Data), cadangan jumlah_peserta. */
export function kolomPesertaPasangan(fieldDefs, partnerId) {
  const f = fieldDefs.find(x => x.jenis_data_id === partnerId && x.level === 'minggu' && x.peran_rekap === 'peserta')
  return f?.field_key || 'jumlah_peserta'
}

/**
 * @param entries   baris data_entries jenis data per nama pada bulan itu (sudah disaring UPT)
 * @param rekapRows baris rekap_nilai jenis data mingguan pasangan (minggu-minggu bulan itu)
 * @param weekIds   id periode minggu bulan itu, urut kronologis
 * @returns [{ upt_key, byName, mingguan, selisih }] — hanya UPT yang punya salah satunya; selisih = byName - mingguan
 */
export function hitungSelisihByName({ entries = [], rekapRows = [], weekIds = [], fieldDefs = [], partnerId, pesertaField, uptKeys }) {
  const minggu = new Set(weekIds)
  const rows = rekapRows.filter(r => r.jenis_data_id === partnerId && r.field_key === pesertaField && minggu.has(r.period_id) && (!r.status || r.status === 'disetujui'))
  const mingguan = new Map(aggregateRows(rows, weekIds, fieldDefs).filter(r => r.value !== null).map(r => [r.upt_key, Number(r.value) || 0]))
  const byName = new Map()
  for (const e of entries) byName.set(e.upt_key, (byName.get(e.upt_key) || 0) + 1)
  const keys = uptKeys || [...new Set([...mingguan.keys(), ...byName.keys()])]
  return keys
    .map(upt_key => {
      const a = byName.get(upt_key) || 0
      const b = mingguan.get(upt_key) || 0
      return { upt_key, byName: a, mingguan: b, selisih: a - b }
    })
    .filter(x => x.byName || x.mingguan)
}
