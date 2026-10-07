/**
 * components/SelisihByNameCard.jsx
 * Menu Permintaan (Admin): daftar UPT & bulan yang jumlah orang di Data by Name-nya tidak sama dengan total
 * peserta Rekap 4 Minggu jenis data mingguan pasangannya (lib/selisihByName.js). Hanya bulan yang sudah ada data
 * by name-nya yang diperiksa, supaya bulan yang memang belum diunggah tidak dianggap selisih.
 */
import { useEffect, useState } from 'react'
import { db } from '../lib/db'
import { sortPeriods, weeksOfMonth, labelBulan } from '../lib/periods'
import { hitungSelisihByName, kolomPesertaPasangan } from '../lib/selisihByName'
import InfoCard from './InfoCard'
import { AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react'

export default function SelisihByNameCard({ onCount }) {
  const [hasil, setHasil] = useState(null)
  const [tahun] = useState(new Date().getFullYear())

  useEffect(() => {
    let batal = false
    ;(async () => {
      const [{ data: jds }, { data: per }, { data: fds }, { data: upts }] = await Promise.all([
        db.from('jenis_data').select('*').eq('aktif', true),
        db.from('periods').select('*').eq('tahun', tahun),
        db.from('field_definitions').select('*').eq('level', 'minggu'),
        db.from('upt_list').select('*'),
      ])
      const pasangan = (jds || []).filter(j => j.level_utama === 'bulan' && j.mode_bulanan === 'rincian' && j.pasangan_mingguan_id)
      const periods = sortPeriods(per || [])
      const bulanList = periods.filter(p => p.level === 'bulan')
      const daftar = []
      for (const jd of pasangan) {
        const pesertaField = kolomPesertaPasangan(fds || [], jd.pasangan_mingguan_id)
        const [{ data: ent }, { data: rek }] = await Promise.all([
          db.from('data_entries').select('upt_key, period_id').eq('jenis_data_id', jd.id).in('period_id', bulanList.map(b => b.id)),
          db.from('rekap_nilai').select('jenis_data_id, upt_key, period_id, baris_ke, field_key, value, status')
            .eq('jenis_data_id', jd.pasangan_mingguan_id).eq('field_key', pesertaField).eq('status', 'disetujui'),
        ])
        for (const b of bulanList) {
          const entries = (ent || []).filter(e => e.period_id === b.id)
          if (!entries.length) continue
          const weekIds = weeksOfMonth(periods, b.tahun, b.bulan).map(w => w.id)
          const uptDenganNama = [...new Set(entries.map(e => e.upt_key))]
          hitungSelisihByName({ entries, rekapRows: rek || [], weekIds, fieldDefs: fds || [], partnerId: jd.pasangan_mingguan_id, pesertaField, uptKeys: uptDenganNama })
            .filter(x => x.selisih !== 0)
            .forEach(x => daftar.push({
              ...x,
              key: `${jd.id}|${b.id}|${x.upt_key}`,
              bulan: labelBulan(b.bulan, b.tahun),
              jenis: jd.judul,
              partner: (jds || []).find(j => j.id === jd.pasangan_mingguan_id)?.judul || '',
              upt: (upts || []).find(u => u.key === x.upt_key)?.label || x.upt_key,
            }))
        }
      }
      if (!batal) { setHasil(daftar); onCount?.(daftar.length) }
    })()
    return () => { batal = true }
  }, [tahun, onCount])

  return (
    <InfoCard title={`Selisih Data by Name ${tahun} (${hasil ? hasil.length : '…'})`}>
      {!hasil ? (
        <div className="flex justify-center py-8"><Loader2 className="animate-spin text-gray-400" /></div>
      ) : hasil.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <CheckCircle2 size={30} className="mx-auto mb-2 opacity-40" />
          <p className="text-sm">Semua data by name yang sudah diunggah sama dengan total peserta Rekap 4 Minggu.</p>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Jumlah orang di data by name (Input Bulanan) tidak sama dengan total peserta rekap 4 minggu (Input Mingguan,
            baris yang sudah disetujui). Minta UPT memeriksa salah satunya.
          </p>
          <div className="divide-y divide-gray-100 dark:divide-gray-800 rounded-xl border border-amber-200 dark:border-amber-900">
            {hasil.map(x => (
              <div key={x.key} className="px-4 py-2.5 flex items-start gap-3 text-sm">
                <AlertTriangle size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white">{x.upt} <span className="font-normal text-gray-400">· {x.jenis} · {x.bulan}</span></p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Data by name <strong>{x.byName.toLocaleString('id-ID')}</strong> orang, rekap 4 minggu {x.partner} <strong>{x.mingguan.toLocaleString('id-ID')}</strong> peserta
                    {' '}— {x.selisih > 0 ? 'lebih' : 'kurang'} <strong>{Math.abs(x.selisih).toLocaleString('id-ID')}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </InfoCard>
  )
}
