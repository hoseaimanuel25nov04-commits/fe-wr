module.exports = [
"[project]/src/app/(portal)/input-mingguan/[id]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$InputDataPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/InputData/InputDataPage.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Page() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$InputDataPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        jenisDataId: decodeURIComponent(String(id || ''))
    }, void 0, false, {
        fileName: "[project]/src/app/(portal)/input-mingguan/[id]/page.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/lib/agregasi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/agregasi.js
 * Cara merekap nilai mingguan menjadi bulan / triwulan / tahun.
 *
 *   sum    = dijumlahkan                     (mis. jumlah peserta per minggu)
 *   last   = KUMULATIF: UPT mengisi total berjalan, rekap memakai minggu terakhir yang terisi (pagu, realisasi)
 *   latest = NILAI TERAKHIR berdiri sendiri: UPT mengisi angka minggu itu saja, rekap memakai minggu terakhir
 *            yang terisi (mis. jumlah instruktur) — migrasi_28
 *   avg    = rata-rata minggu yang terisi
 *   max    = nilai tertinggi
 *
 * Satu minggu dapat berisi beberapa baris (beberapa pelatihan): nilai angka pada minggu itu = jumlah semua baris.
 */ __turbopack_context__.s([
    "AGREGASI_LABEL",
    ()=>AGREGASI_LABEL,
    "AGREGASI_SHORT",
    ()=>AGREGASI_SHORT,
    "aggregateRows",
    ()=>aggregateRows,
    "agregasiOf",
    ()=>agregasiOf,
    "applyAgregasi",
    ()=>applyAgregasi,
    "combineUpt",
    ()=>combineUpt,
    "defaultAgregasi",
    ()=>defaultAgregasi,
    "isLastMode",
    ()=>isLastMode,
    "weekValues",
    ()=>weekValues
]);
const AGREGASI_LABEL = {
    sum: 'Jumlahkan (Σ)',
    last: 'Kumulatif (total berjalan)',
    latest: 'Nilai terakhir (angka minggu itu saja)',
    avg: 'Rata-rata',
    max: 'Maksimum'
};
const AGREGASI_SHORT = {
    sum: 'Σ jumlah',
    last: 'kumulatif',
    latest: 'nilai terakhir',
    avg: 'rata-rata',
    max: 'maks.'
};
const isLastMode = (mode)=>mode === 'last' || mode === 'latest';
function defaultAgregasi(fieldKey = '') {
    return 'last';
}
const agregasiOf = (field)=>field?.agregasi || defaultAgregasi(field?.field_key);
const isNum = (v)=>v !== null && v !== undefined && v !== '' && Number.isFinite(Number(v));
function applyAgregasi(valuesInWeekOrder, mode = 'sum') {
    const v = valuesInWeekOrder.filter(isNum).map(Number);
    if (!v.length) return mode === 'sum' ? 0 : null;
    switch(mode){
        case 'last':
        case 'latest':
            return v[v.length - 1];
        case 'avg':
            return v.reduce((a, b)=>a + b, 0) / v.length;
        case 'max':
            return Math.max(...v);
        default:
            return v.reduce((a, b)=>a + b, 0);
    }
}
function combineUpt(valuesPerUpt, mode = 'sum') {
    const v = valuesPerUpt.filter(isNum).map(Number);
    if (!v.length) return 0;
    if (mode === 'avg') return v.reduce((a, b)=>a + b, 0) / v.length;
    if (mode === 'max') return Math.max(...v);
    return v.reduce((a, b)=>a + b, 0);
}
function weekValues(rows = []) {
    const out = {};
    for (const r of rows){
        if (isNum(r.value)) {
            out[r.field_key] = (typeof out[r.field_key] === 'number' ? out[r.field_key] : 0) + Number(r.value);
        } else if (r.value_text !== null && r.value_text !== undefined && r.value_text !== '') {
            const t = String(r.value_text);
            if (typeof out[r.field_key] === 'number') continue;
            out[r.field_key] = out[r.field_key] ? out[r.field_key].split(' · ').includes(t) ? out[r.field_key] : `${out[r.field_key]} · ${t}` : t;
        }
    }
    return out;
}
function aggregateRows(rows, weekIds, fieldDefs) {
    const modeOf = {};
    fieldDefs.forEach((f)=>{
        modeOf[`${f.jenis_data_id}|${f.field_key}`] = agregasiOf(f);
    });
    const order = new Map(weekIds.map((id, i)=>[
            id,
            i
        ]));
    const groups = new Map();
    const passthrough = [];
    for (const r of rows){
        if (!isNum(r.value)) {
            passthrough.push(r);
            continue;
        }
        const key = `${r.jenis_data_id}|${r.upt_key}|${r.field_key}`;
        if (!groups.has(key)) groups.set(key, {
            jenis_data_id: r.jenis_data_id,
            upt_key: r.upt_key,
            field_key: r.field_key,
            weeks: new Map()
        });
        const g = groups.get(key);
        g.weeks.set(r.period_id, (g.weeks.get(r.period_id) || 0) + Number(r.value));
    }
    const out = [
        ...passthrough
    ];
    for (const g of groups.values()){
        const ordered = [
            ...g.weeks.entries()
        ].sort((a, b)=>(order.get(a[0]) ?? 0) - (order.get(b[0]) ?? 0)).map(([, v])=>v);
        const mode = modeOf[`${g.jenis_data_id}|${g.field_key}`] || defaultAgregasi(g.field_key);
        out.push({
            jenis_data_id: g.jenis_data_id,
            upt_key: g.upt_key,
            field_key: g.field_key,
            value: applyAgregasi(ordered, mode),
            value_text: null,
            period_id: null
        });
    }
    return out;
}
}),
"[project]/src/lib/angka.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/angka.js
 * Format angka Indonesia: titik pemisah ribuan, koma desimal (1.500.000,5), dan penentu kolom rupiah.
 */ /** Kolom angka bernilai rupiah: label memuat "(Rp)"/"rupiah", atau kode kolom anggaran (pagu, realisasi anggaran, PNBP). */ __turbopack_context__.s([
    "formatAngka",
    ()=>formatAngka,
    "formatKetikan",
    ()=>formatKetikan,
    "formatRp",
    ()=>formatRp,
    "isRupiahField",
    ()=>isRupiahField,
    "parseAngka",
    ()=>parseAngka
]);
function isRupiahField(f) {
    if (!f || f.tipe && f.tipe !== 'angka') return false;
    const label = String(f.label || '');
    if (/\(\s*rp\s*\)|rupiah/i.test(label)) return true;
    if (/%|persen/i.test(label)) return false;
    const key = String(f.field_key || '');
    return /pagu|anggaran|belanja|pnbp|sbsn/.test(key) || /^realisasi(_mp_\d+)?$/.test(key);
}
function formatAngka(v) {
    if (v === null || v === undefined || v === '') return '';
    const n = Number(v);
    if (!Number.isFinite(n)) return String(v);
    return n.toLocaleString('id-ID', {
        maximumFractionDigits: 10
    });
}
const formatRp = (v)=>`Rp ${formatAngka(Number(v) || 0)}`;
function parseAngka(v) {
    if (v === null || v === undefined) return null;
    if (typeof v === 'number') return Number.isFinite(v) ? v : null;
    const s = String(v).trim();
    if (!s) return null;
    const negatif = /^-|^\(.*\)$/.test(s);
    let bersih = s.replace(/[^\d.,]/g, '');
    if (!/\d/.test(bersih)) return null;
    const titik = (bersih.match(/\./g) || []).length;
    const koma = (bersih.match(/,/g) || []).length;
    if (titik && koma) {
        // Pemisah yang muncul terakhir = desimal: "1.500.000,5" atau "1,500,000.5"
        const desimal = bersih.lastIndexOf(',') > bersih.lastIndexOf('.') ? ',' : '.';
        const ribuan = desimal === ',' ? /\./g : /,/g;
        bersih = bersih.replace(ribuan, '').replace(desimal, '.');
    } else if (titik) {
        // "1.500.000" / "1.500" = ribuan; "45.5" = desimal
        bersih = titik > 1 || /\.\d{3}$/.test(bersih) ? bersih.replace(/\./g, '') : bersih;
    } else if (koma) {
        // "1,500,000" = ribuan (gaya Inggris); "45,5" = desimal
        bersih = koma > 1 ? bersih.replace(/,/g, '') : bersih.replace(',', '.');
    }
    const n = Number(bersih);
    return Number.isFinite(n) ? negatif ? -n : n : null;
}
function formatKetikan(teks) {
    const s = String(teks ?? '');
    const negatif = s.trim().startsWith('-');
    const [bulatRaw, ...sisa] = s.replace(/[^\d,]/g, '').split(',');
    const bulat = bulatRaw.replace(/^0+(?=\d)/, '');
    const dikelompokkan = bulat.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const desimal = sisa.length ? ',' + sisa.join('') : '';
    if (!bulat && !desimal) return negatif ? '-' : '';
    return (negatif ? '-' : '') + (bulat ? dikelompokkan : '0') + desimal;
}
}),
"[project]/src/lib/bacaTabelExcel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bacaTabel",
    ()=>bacaTabel
]);
/**
 * lib/bacaTabelExcel.js
 * Mengubah isi satu sheet Excel menjadi tabel { headers, rows } untuk impor, termasuk berkas buatan UPT yang
 * memakai sel gabungan (merge), yang sebelumnya terbaca kacau:
 *   - judul besar di atas tabel (mis. "REKAP PESERTA SEPTEMBER 2026" digabung A1:H1)  -> dilewati
 *   - judul kolom dua tingkat ("Jumlah Peserta" di atas "L" dan "P")                  -> "Jumlah Peserta L", "... P"
 *   - sel digabung ke bawah/ke samping di baris data (mis. nama UPT untuk 3 baris)      -> nilainya disalin ke semua sel
 *   - baris kosong dan baris JUMLAH/TOTAL di bawah tabel                                -> dilewati
 * Fungsi murni (masukan: array baris + daftar merge dari SheetJS), dites di fe/test/excel.test.mjs.
 */ const teks = (v)=>v === null || v === undefined ? '' : String(v).trim();
const adaIsi = (v)=>teks(v) !== '';
const RE_TOTAL = /^(jumlah|total|grand\s*total|sub\s*total)\b/i;
function bacaTabel(aoa = [], merges = []) {
    const lebar = Math.max(0, ...aoa.map((r)=>r ? r.length : 0));
    const grid = aoa.map((r)=>Array.from({
            length: lebar
        }, (_, c)=>r && r[c] !== undefined ? r[c] : null));
    // 1. Baris judul kolom (dihitung SEBELUM sel gabungan diisi): baris pertama di 20 baris teratas yang jumlah sel
    //    teksnya minimal 60% dari baris terpadat. Judul besar yang digabung hanya 1 sel teks, jadi terlewati; baris
    //    data di bawah judul kolom biasanya tidak lebih padat teks daripada judulnya, jadi judul yang terpilih.
    const jumlahTeks = grid.slice(0, 20).map((r)=>r.filter((v)=>typeof v === 'string' && adaIsi(v)).length);
    const maks = Math.max(0, ...jumlahTeks);
    const h = maks >= 2 ? jumlahTeks.findIndex((n)=>n >= 2 && n >= maks * 0.6) : -1;
    if (h < 0) return {
        headers: [],
        rows: [],
        barisJudul: 0
    };
    // 2. Isi sel gabungan dengan nilai sel kiri-atasnya
    for (const m of merges || []){
        const v = grid[m.s.r]?.[m.s.c] ?? null;
        for(let r = m.s.r; r <= m.e.r && r < grid.length; r++){
            for(let c = m.s.c; c <= m.e.c && c < lebar; c++)grid[r][c] = v;
        }
    }
    // 3. Judul dua tingkat: ada judul di baris h yang digabung melebar, dan baris h+1 berisi teks di bawahnya
    const gabungMelebar = (merges || []).filter((m)=>m.s.r <= h && m.e.r >= h && m.e.c > m.s.c);
    const sub = grid[h + 1] || [];
    const duaTingkat = gabungMelebar.some((m)=>{
        for(let c = m.s.c; c <= m.e.c; c++)if (typeof sub[c] === 'string' && adaIsi(sub[c]) && teks(sub[c]) !== teks(grid[h][c])) return true;
        return false;
    });
    const dipakai = new Map();
    const headers = grid[h].map((v, c)=>{
        const atas = teks(v);
        const bawah = duaTingkat ? teks(sub[c]) : '';
        let nama = atas && bawah && bawah !== atas ? `${atas} ${bawah}` : atas || bawah;
        if (!nama) nama = `Kolom ${c + 1}`;
        const n = (dipakai.get(nama) || 0) + 1;
        dipakai.set(nama, n);
        return n > 1 ? `${nama} (${n})` : nama;
    });
    // Kolom tanpa judul di ujung kanan yang juga tanpa data tidak perlu ditampilkan
    const mulai = h + (duaTingkat ? 2 : 1);
    let kolomTerakhir = headers.length - 1;
    while(kolomTerakhir >= 0 && !adaIsi(grid[h][kolomTerakhir]) && !(duaTingkat && adaIsi(sub[kolomTerakhir])) && !grid.slice(mulai).some((r)=>adaIsi(r[kolomTerakhir])))kolomTerakhir--;
    const hdr = headers.slice(0, kolomTerakhir + 1);
    // 4. Baris data: lewati baris kosong dan baris ringkasan JUMLAH/TOTAL
    const rows = [];
    for(let r = mulai; r < grid.length; r++){
        const baris = grid[r].slice(0, hdr.length);
        const isi = baris.filter(adaIsi);
        if (!isi.length) continue;
        if (RE_TOTAL.test(teks(isi[0]))) continue;
        rows.push(Object.fromEntries(hdr.map((k, c)=>[
                k,
                baris[c] ?? null
            ])));
    }
    return {
        headers: hdr,
        rows,
        barisJudul: h + 1
    };
}
}),
"[project]/src/lib/columnMatcher.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertRows",
    ()=>convertRows,
    "matchColumns",
    ()=>matchColumns
]);
/**
 * lib/columnMatcher.js
 * Pencocokan otomatis nama kolom Excel ke field_definitions
 * Menggunakan normalisasi + Levenshtein distance sederhana
 */ /**
 * Normalisasi string: lowercase, hapus spasi, tanda baca
 */ function normalize(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
}
/**
 * Levenshtein distance antara dua string
 */ function levenshtein(a, b) {
    const an = a.length;
    const bn = b.length;
    if (an === 0) return bn;
    if (bn === 0) return an;
    const dp = Array.from({
        length: an + 1
    }, (_, i)=>Array.from({
            length: bn + 1
        }, (_, j)=>i === 0 ? j : j === 0 ? i : 0));
    for(let i = 1; i <= an; i++){
        for(let j = 1; j <= bn; j++){
            dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }
    return dp[an][bn];
}
/**
 * Similarity score 0–1 berdasarkan Levenshtein
 */ function similarity(a, b) {
    const na = normalize(a);
    const nb = normalize(b);
    if (na === nb) return 1;
    const maxLen = Math.max(na.length, nb.length);
    if (maxLen === 0) return 1;
    return 1 - levenshtein(na, nb) / maxLen;
}
function matchColumns(excelHeaders, fieldDefs) {
    const THRESHOLD = 0.55 // minimum similarity untuk dianggap cocok
    ;
    const result = {};
    for (const header of excelHeaders){
        let bestMatch = null;
        let bestScore = 0;
        for (const fd of fieldDefs){
            // Cek similarity dengan label DAN field_key
            const scoreLabel = similarity(header, fd.label);
            const scoreKey = similarity(header, fd.field_key);
            const score = Math.max(scoreLabel, scoreKey);
            if (score > bestScore) {
                bestScore = score;
                bestMatch = fd;
            }
        }
        result[header] = bestScore >= THRESHOLD ? bestMatch : null;
    }
    return result;
}
function convertRows(rows, mapping, fieldDefs) {
    const fieldKeys = fieldDefs.map((fd)=>fd.field_key);
    const extraKeys = Object.keys(mapping).filter((h)=>mapping[h] === null);
    const entries = rows.map((row)=>{
        const data_json = {};
        const data_ekstra = {};
        let nama = null;
        let nik = null;
        for (const [header, fd] of Object.entries(mapping)){
            const val = row[header];
            if (fd) {
                data_json[fd.field_key] = val ?? null;
                if (fd.field_key === 'nama') nama = val;
                if (fd.field_key === 'nik') nik = String(val ?? '');
            } else {
                // Kolom tidak dikenal → data_ekstra
                if (val !== undefined && val !== null) {
                    data_ekstra[header] = val;
                }
            }
        }
        return {
            nama,
            nik,
            data_json,
            data_ekstra
        };
    });
    return {
        entries,
        extraKeys
    };
}
}),
"[project]/src/lib/deadline.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTanggal",
    ()=>formatTanggal,
    "hitungDeadline",
    ()=>hitungDeadline,
    "isPeriodLocked",
    ()=>isPeriodLocked,
    "sisaHari",
    ()=>sisaHari
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
;
function hitungDeadline(level, tahun, triwulanKe, bulan, mingguKe) {
    switch(level){
        case 'tahun':
            {
                // Deadline tahun = 30 Juni tahun berikutnya
                return new Date(tahun + 1, 5, 30) // June 30 next year
                ;
            }
        case 'triwulan':
            {
                // Deadline = akhir triwulan berikutnya
                const nextQ = triwulanKe === 4 ? 1 : triwulanKe + 1;
                const nextYear = triwulanKe === 4 ? tahun + 1 : tahun;
                const endMonths = {
                    1: [
                        3,
                        31
                    ],
                    2: [
                        6,
                        30
                    ],
                    3: [
                        9,
                        30
                    ],
                    4: [
                        12,
                        31
                    ]
                };
                const [m, d] = endMonths[nextQ];
                return new Date(nextYear, m - 1, d);
            }
        case 'bulan':
            {
                // Deadline = akhir bulan berikutnya
                const nextMonth = bulan === 12 ? 1 : bulan + 1;
                const nextYear = bulan === 12 ? tahun + 1 : tahun;
                const lastDay = new Date(nextYear, nextMonth, 0).getDate();
                return new Date(nextYear, nextMonth - 1, lastDay);
            }
        case 'minggu':
            {
                const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weekDateRange"])(tahun, bulan, mingguKe).tanggal_selesai.split('-').map(Number);
                return new Date(end[0], end[1] - 1, end[2] + 7);
            }
        default:
            return new Date();
    }
}
function isPeriodLocked(deadline) {
    if (!deadline) return false;
    const dl = new Date(deadline);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return dl < now;
}
function formatTanggal(date) {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}
function sisaHari(deadline) {
    if (!deadline) return null;
    const dl = new Date(deadline);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const diff = Math.ceil((dl - now) / (1000 * 60 * 60 * 24));
    return diff;
}
}),
"[project]/src/lib/excelExport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportAgregasiBreakdown",
    ()=>exportAgregasiBreakdown,
    "exportDataEntries",
    ()=>exportDataEntries,
    "exportGabunganSemuaUPT",
    ()=>exportGabunganSemuaUPT,
    "exportRekapNilai",
    ()=>exportRekapNilai,
    "exportTabelRekapRingkasan",
    ()=>exportTabelRekapRingkasan,
    "generateTemplateExcel",
    ()=>generateTemplateExcel,
    "readExcelFile",
    ()=>readExcelFile,
    "sanitizeCellValue",
    ()=>sanitizeCellValue,
    "sanitizeRows",
    ()=>sanitizeRows
]);
/**
 * lib/excelExport.js
 * Export data ke Excel menggunakan SheetJS (xlsx)
 * Dilengkapi proteksi terhadap Formula Injection (CWE-1236 / DDE Attack).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bacaTabelExcel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bacaTabelExcel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tautan.js [app-ssr] (ecmascript)");
;
;
;
function sanitizeCellValue(val) {
    if (val === null || val === undefined) return '';
    if (typeof val === 'number' || typeof val === 'boolean') return val;
    const str = String(val);
    if (/^[=+\-@\t\r]/.test(str)) {
        return `'${str}`;
    }
    return str;
}
function sanitizeRows(rows) {
    return (rows || []).map((row)=>{
        const clean = {};
        for (const [k, v] of Object.entries(row)){
            clean[k] = sanitizeCellValue(v);
        }
        return clean;
    });
}
function exportDataEntries({ entries, fieldDefs, jenisDataJudul, periodLabel, uptKey, uptLabelOf }) {
    // Buat header sesuai urutan field_definitions
    const baseHeaders = fieldDefs.filter((fd)=>fd.aktif).sort((a, b)=>a.urutan - b.urutan).map((fd)=>fd.label);
    const headers = uptLabelOf ? [
        'UPT',
        ...baseHeaders
    ] : baseHeaders;
    const sortedFields = fieldDefs.filter((fd)=>fd.aktif).sort((a, b)=>a.urutan - b.urutan);
    const fieldKeys = sortedFields.map((fd)=>fd.field_key);
    // Baris data dengan sanitasi Formula Injection
    const rows = entries.map((entry)=>{
        const row = {};
        if (uptLabelOf) row['UPT'] = sanitizeCellValue(uptLabelOf(entry.upt_key));
        fieldKeys.forEach((key, i)=>{
            const rawVal = entry.data_json?.[key] ?? entry[key] ?? '';
            // Kolom bertipe berkas: nilainya id internal, tidak berguna di Excel — tampilkan penanda saja.
            row[baseHeaders[i]] = sortedFields[i].tipe === 'file' ? sanitizeCellValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["berkasUntukExcel"])(rawVal)) : sanitizeCellValue(rawVal);
        });
        return row;
    });
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows, {
        header: headers
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    const sheetName = periodLabel && String(periodLabel).length <= 31 ? String(periodLabel) : 'Data Detail';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, sheetName);
    // Sheet ringkasan
    const summaryData = [
        [
            'Jenis Data',
            sanitizeCellValue(jenisDataJudul)
        ],
        [
            'Periode',
            sanitizeCellValue(periodLabel)
        ],
        [
            'UPT',
            sanitizeCellValue(uptKey || 'Semua')
        ],
        [
            'Total Data',
            entries.length
        ],
        [
            'Diekspor pada',
            new Date().toLocaleString('id-ID')
        ]
    ];
    const wsSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(summaryData);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsSummary, 'Ringkasan');
    const filename = `${jenisDataJudul}_${periodLabel}_${uptKey || 'semua'}.xlsx`.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
}
function exportRekapNilai({ rekapData, fieldDefs, jenisDataJudul, periodLabel }) {
    const headers = [
        'Periode',
        'UPT',
        ...fieldDefs.map((fd)=>fd.label)
    ];
    const rows = rekapData.map((item)=>{
        const row = {
            Periode: sanitizeCellValue(periodLabel),
            UPT: sanitizeCellValue(item.upt_key)
        };
        fieldDefs.forEach((fd)=>{
            const raw = item.values?.[fd.field_key] ?? '';
            row[fd.label] = fd.tipe === 'file' ? sanitizeCellValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["berkasUntukExcel"])(raw)) : sanitizeCellValue(raw);
        });
        return row;
    });
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows, {
        header: headers
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    const sheet = periodLabel && String(periodLabel).length <= 31 ? String(periodLabel) : 'Rekap';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, sheet);
    const filename = `Rekap_${jenisDataJudul}_${periodLabel}.xlsx`.replace(/\s+/g, '_');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
}
function exportAgregasiBreakdown({ jenisDataJudul, periodLabel, uptKey, fieldDefs, totals = {}, weekRows = [] }) {
    const numFields = fieldDefs.filter((f)=>f.tipe === 'angka');
    const headers = [
        'Periode Minggu',
        ...numFields.map((f)=>f.label),
        'Status'
    ];
    // Baris-baris rincian mingguan
    const rows = weekRows.map((w)=>{
        const row = {
            'Periode Minggu': sanitizeCellValue(w.period?.label || `Minggu ke-${w.period?.minggu_ke}`)
        };
        numFields.forEach((f)=>{
            row[f.label] = w.values[f.field_key] !== undefined && w.values[f.field_key] !== null ? sanitizeCellValue(w.values[f.field_key]) : 0;
        });
        row['Status'] = sanitizeCellValue(w.hasData ? 'Terisi' : 'Kosong');
        return row;
    });
    // Baris Total Akumulasi
    const totalRow = {
        'Periode Minggu': 'TOTAL AKUMULASI'
    };
    numFields.forEach((f)=>{
        totalRow[f.label] = sanitizeCellValue(totals[f.field_key] ?? 0);
    });
    totalRow['Status'] = '-';
    rows.push(totalRow);
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows, {
        header: headers
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    const sheetName = periodLabel && String(periodLabel).length <= 31 ? String(periodLabel) : 'Agregasi';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, sheetName);
    // Sheet Ringkasan Informasi
    const summaryData = [
        [
            'Laporan Auto-Agregasi Data PUSLATKP'
        ],
        [
            'Jenis Data',
            sanitizeCellValue(jenisDataJudul)
        ],
        [
            'Periode Agregasi',
            sanitizeCellValue(periodLabel)
        ],
        [
            'UPT / Balai',
            sanitizeCellValue(uptKey || 'Semua')
        ],
        [
            'Jumlah Minggu Terisi',
            `${weekRows.filter((w)=>w.hasData).length} dari ${weekRows.length} minggu`
        ],
        [
            'Tanggal Ekspor',
            new Date().toLocaleString('id-ID')
        ]
    ];
    const wsSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(summaryData);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsSummary, 'Ringkasan');
    const filename = `Agregasi_${jenisDataJudul}_${periodLabel}_${uptKey || 'semua'}.xlsx`.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
}
function exportTabelRekapRingkasan({ periodLabel, filterInfo = {}, tableRows = [], totals = {} }) {
    const headers = [
        'Nama UPT/Balai',
        'Jenis Data',
        'Pelatihan',
        'Peserta',
        'Pagu (Rp)',
        'Realisasi (Rp)',
        'Status'
    ];
    const rows = tableRows.map((r)=>({
            'Nama UPT/Balai': sanitizeCellValue(r.upt_label),
            'Jenis Data': sanitizeCellValue(r.jenis),
            'Pelatihan': Number(r.pelatihan) || 0,
            'Peserta': Number(r.peserta) || 0,
            'Pagu (Rp)': Number(r.pagu) || 0,
            'Realisasi (Rp)': Number(r.realisasi) || 0,
            'Status': sanitizeCellValue(r.status)
        }));
    // Baris Total
    rows.push({
        'Nama UPT/Balai': 'TOTAL',
        'Jenis Data': '-',
        'Pelatihan': Number(totals.pelatihan) || 0,
        'Peserta': Number(totals.peserta) || 0,
        'Pagu (Rp)': Number(totals.pagu) || 0,
        'Realisasi (Rp)': Number(totals.realisasi) || 0,
        'Status': '-'
    });
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows, {
        header: headers
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    const sheetName = periodLabel && String(periodLabel).length <= 31 ? String(periodLabel) : 'Rekap UPT';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, sheetName);
    // Sheet Ringkasan Metadata
    const summaryData = [
        [
            'Laporan Rekapitulasi Pelaporan UPT/Balai PUSLATKP'
        ],
        [
            'Periode',
            sanitizeCellValue(periodLabel)
        ],
        [
            'Tahun',
            sanitizeCellValue(filterInfo.tahun || '-')
        ],
        [
            'Bulan',
            sanitizeCellValue(filterInfo.bulan || '-')
        ],
        [
            'Triwulan',
            sanitizeCellValue(filterInfo.triwulan || '-')
        ],
        [
            'Filter Jenis Data',
            sanitizeCellValue(filterInfo.jenisData || 'Semua')
        ],
        [
            'Filter UPT',
            sanitizeCellValue(filterInfo.upt || 'Semua')
        ],
        [
            'Total Baris Data',
            tableRows.length
        ],
        [
            'Tanggal Ekspor',
            new Date().toLocaleString('id-ID')
        ]
    ];
    const wsSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(summaryData);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsSummary, 'Info Laporan');
    const filename = `Rekap_Pelaporan_UPT_${periodLabel}_${filterInfo.tahun || ''}.xlsx`.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
}
function exportGabunganSemuaUPT({ data, jenisDataJudul, tahun }) {
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    // Sheet per level
    const levels = [
        'tahun',
        'triwulan',
        'bulan',
        'minggu'
    ];
    for (const level of levels){
        const levelData = sanitizeRows(data[level] || []);
        if (levelData.length === 0) continue;
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(levelData);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, level.charAt(0).toUpperCase() + level.slice(1));
    }
    // Sheet validasi
    if (data.validasi && data.validasi.length > 0) {
        const wsV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(sanitizeRows(data.validasi));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsV, 'Validasi');
    }
    // Sheet kolom belum dikenal
    if (data.kolomTidakDikenal && data.kolomTidakDikenal.length > 0) {
        const wsE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(sanitizeRows(data.kolomTidakDikenal));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsE, 'Kolom Tidak Dikenal');
    }
    const filename = `Gabungan_${jenisDataJudul}_${tahun}.xlsx`.replace(/\s+/g, '_');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
}
function generateTemplateExcel({ fieldDefs = [], jenisDataJudul = 'Template', format = 'xlsx' }) {
    const activeFields = fieldDefs.filter((fd)=>fd.aktif !== false && fd.tipe !== 'file') // kolom berkas diisi lewat unggah di web, bukan Excel
    .sort((a, b)=>(a.urutan || 0) - (b.urutan || 0));
    const headers = activeFields.map((f)=>f.label);
    const fieldKeys = activeFields.map((f)=>f.field_key);
    // Contoh baris sampel agar user mengerti format isian
    const sampleRow = {};
    activeFields.forEach((f)=>{
        if (f.tipe === 'angka') {
            sampleRow[f.label] = f.field_key.includes('pagu') || f.field_key.includes('realisasi') ? 25000000 : 30;
        } else if (f.tipe === 'tanggal') {
            sampleRow[f.label] = '2026-09-01';
        } else if (f.tipe === 'pilihan') {
            sampleRow[f.label] = f.opsi_pilihan && f.opsi_pilihan[0] || 'Pilihan 1';
        } else if (f.field_key === 'kode_kro') {
            sampleRow[f.label] = 'ABAC';
        } else if (f.field_key === 'kode_ro') {
            sampleRow[f.label] = 'ABAC.1';
        } else if (f.field_key === 'kode_komponen') {
            sampleRow[f.label] = 'ABAC.1.2';
        } else if (f.field_key === 'nik') {
            sampleRow[f.label] = '3171010101900001';
        } else if (f.field_key === 'nama') {
            sampleRow[f.label] = 'Nama Lengkap Peserta';
        } else {
            sampleRow[f.label] = `Contoh ${f.label}`;
        }
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet([
        sampleRow
    ], {
        header: headers
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, 'Template Impor');
    // Sheet Petunjuk Pengisian
    const petunjukData = [
        [
            'Petunjuk Pengisian Template Impor Data PUSLATKP'
        ],
        [
            'Jenis Data',
            sanitizeCellValue(jenisDataJudul)
        ],
        [
            'Jumlah Kolom',
            headers.length
        ],
        [
            'Format Tanggal',
            'YYYY-MM-DD (Contoh: 2026-09-01) atau format rentang (2026-09-01 s/d 2026-09-05)'
        ],
        [
            'PENTING',
            'Jangan mengubah urutan maupun nama header baris pertama agar auto-matching akurat.'
        ]
    ];
    const wsPetunjuk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(petunjukData);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsPetunjuk, 'Petunjuk');
    const cleanTitle = jenisDataJudul.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    const fileName = `Template_Impor_${cleanTitle}.${format.toLowerCase() === 'csv' ? 'csv' : 'xlsx'}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, fileName);
}
async function readExcelFile(file) {
    return new Promise((resolve, reject)=>{
        // Batas unggah Excel bulanan: 30 MiB. Impor server tetap dikirim bertahap agar payload per request kecil.
        const MAX_SIZE = 30 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
            return reject(new Error('Ukuran file melebihi batas maksimum 30 MB'));
        }
        const reader = new FileReader();
        reader.onload = (e)=>{
            try {
                const data = e.target.result;
                // CSV dibaca sebagai teks apa adanya (raw) supaya kode seperti "001" / NIK tidak berubah jadi angka
                const csv = /\.csv$/i.test(file.name || '');
                const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](data, {
                    type: 'array',
                    cellDates: true,
                    ...csv ? {
                        raw: true
                    } : {}
                });
                const sheetName = wb.SheetNames[0];
                const ws = wb.Sheets[sheetName];
                // Tahan sel gabungan, judul besar di atas tabel, dan judul kolom dua tingkat — lihat lib/bacaTabelExcel.js
                const aoa = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
                    header: 1,
                    defval: null,
                    blankrows: true
                });
                const { headers, rows, barisJudul } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bacaTabelExcel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bacaTabel"])(aoa, ws['!merges']);
                resolve({
                    headers,
                    rows,
                    sheetName,
                    barisJudul
                });
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}
}),
"[project]/src/lib/kartuRekap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KARTU_REKAP",
    ()=>KARTU_REKAP,
    "formatKartu",
    ()=>formatKartu,
    "hitungKartu",
    ()=>hitungKartu
]);
/**
 * lib/kartuRekap.js
 * Kartu ringkasan di atas tabel Input Mingguan saat SATU jenis data dipilih. Bawaannya Total Pelatihan / Total
 * Peserta / Total Realisasi Anggaran; jenis data di bawah ini memakai kartu yang sesuai isinya.
 *
 * Bentuk kartu:
 *   { label, jumlah: [field_key...], where?, satuan: 'angka'|'rupiah'|'persen', sorot? }  -> jumlah nilai
 *   { label, hitungBaris: field_key }                                                       -> banyak baris terisi
 *   { label, rasio: [kartuPembilang, kartuPenyebut] }                                       -> persen
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saringBaris$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/saringBaris.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$kolomHitung$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/kolomHitung.js [app-ssr] (ecmascript)");
;
;
const KARTU_REKAP = {
    data_instruktur_dan_wi: [
        {
            label: 'Total Instruktur',
            jumlah: [
                'jumlah'
            ],
            where: {
                jenis_instruktur_wi: 'Instruktur'
            }
        },
        {
            label: 'Total Widyaiswara',
            jumlah: [
                'jumlah'
            ],
            where: {
                jenis_instruktur_wi: 'Widyaiswara'
            }
        },
        {
            label: 'Total Instruktur & Widyaiswara',
            jumlah: [
                'jumlah'
            ],
            sorot: true
        }
    ],
    data_belanja_modal: [
        {
            label: 'Total Kegiatan',
            hitungBaris: 'judul_kegiatan'
        },
        {
            label: 'Total Pagu',
            jumlah: [
                'pagu_anggaran'
            ],
            satuan: 'rupiah'
        },
        {
            label: 'Total Realisasi Anggaran',
            jumlah: [
                'realisasi_anggaran'
            ],
            satuan: 'rupiah',
            sorot: true
        }
    ],
    data_anggaran: [
        {
            label: 'Total Pagu',
            jumlah: [
                'pagu'
            ],
            satuan: 'rupiah'
        },
        {
            label: 'Total Realisasi Anggaran',
            jumlah: [
                'realisasi'
            ],
            satuan: 'rupiah',
            sorot: true
        },
        {
            label: 'Persentase Realisasi',
            rasio: [
                {
                    jumlah: [
                        'realisasi'
                    ]
                },
                {
                    jumlah: [
                        'pagu'
                    ]
                }
            ]
        }
    ],
    pnbp_dan_mp_pnbp: [
        {
            label: 'Realisasi Penerimaan PNBP',
            jumlah: [
                'realisasi_pnbp'
            ],
            satuan: 'rupiah',
            sorot: true
        },
        {
            label: 'Persentase Realisasi Penerimaan PNBP',
            rasio: [
                {
                    jumlah: [
                        'realisasi_pnbp'
                    ]
                },
                {
                    jumlah: [
                        'target_penerimaan_pnbp'
                    ]
                }
            ]
        }
    ],
    lulusan_dudika: [
        {
            label: 'Capaian Pelatihan (Orang) (Luring)',
            jumlah: [
                'capaian_pelatihan'
            ]
        },
        {
            label: 'Realisasi DUDIKA (Orang) (Luring)',
            jumlah: [
                'realisasi_dudika'
            ]
        },
        {
            label: 'Persentase Realisasi DUDIKA (Luring)',
            rasio: [
                {
                    jumlah: [
                        'realisasi_dudika'
                    ]
                },
                {
                    jumlah: [
                        'capaian_pelatihan'
                    ]
                }
            ],
            sorot: true
        }
    ],
    pelatihan_non_apbn: [
        {
            label: 'Total Pelatihan',
            hitungBaris: 'nama_pelatihan'
        },
        {
            label: 'Total Peserta',
            jumlah: [
                'jumlah_peserta'
            ],
            sorot: true
        }
    ]
};
const kosong = (v)=>v === null || v === undefined || v === '';
function hitungKartu(kartuList, rows = []) {
    const cocok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saringBaris$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buatSaringan"])(rows);
    const nilai = (k)=>{
        if (k.hitungBaris) {
            return new Set(rows.filter((r)=>r.field_key === k.hitungBaris && !kosong(r.value_text ?? r.value)).map((r)=>`${r.upt_key}|${r.period_id}|${r.baris_ke ?? 1}`)).size;
        }
        if (k.rasio) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$kolomHitung$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persen"])(nilai(k.rasio[0]), nilai(k.rasio[1]));
        return rows.filter((r)=>k.jumlah.includes(r.field_key) && !kosong(r.value) && cocok(r, k.where)).reduce((a, r)=>a + Number(r.value), 0);
    };
    return kartuList.map((k)=>({
            ...k,
            satuan: k.rasio ? 'persen' : k.satuan || 'angka',
            nilai: nilai(k)
        }));
}
function formatKartu(k) {
    if (k.nilai === null || k.nilai === undefined) return '—';
    if (k.satuan === 'rupiah') return `Rp ${Number(k.nilai).toLocaleString('id-ID')}`;
    if (k.satuan === 'persen') return `${Number(k.nilai).toLocaleString('id-ID')}%`;
    return Number(k.nilai).toLocaleString('id-ID');
}
}),
"[project]/src/lib/kolomHitung.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/kolomHitung.js
 * Kolom yang DIHITUNG otomatis dari kolom lain pada baris yang sama (tidak disimpan, tidak bisa diubah), mis.
 * persentase Realisasi DUDIKA terhadap Capaian Pelatihan. Tampil di tabel rekap, tabel Input Mingguan, dan di
 * bawah form isian. Kunci = jenis_data.key.
 */ /** a / b x 100, dibulatkan 1 desimal. null bila salah satu kosong atau pembagi 0. */ __turbopack_context__.s([
    "KOLOM_HITUNG",
    ()=>KOLOM_HITUNG,
    "denganHitung",
    ()=>denganHitung,
    "kolomHitungOf",
    ()=>kolomHitungOf,
    "persen",
    ()=>persen
]);
function persen(a, b) {
    const x = Number(a), y = Number(b);
    if (a === null || a === undefined || a === '' || b === null || b === undefined || b === '' || !Number.isFinite(x) || !Number.isFinite(y) || y === 0) return null;
    return Math.round(x / y * 1000) / 10;
}
const KOLOM_HITUNG = {
    lulusan_dudika: [
        {
            field_key: '_persentase_realisasi_dudika',
            label: 'Persentase Realisasi DUDIKA (%) (Luring)',
            keterangan: 'Realisasi DUDIKA ÷ Capaian Pelatihan × 100',
            hitung: (v)=>persen(v.realisasi_dudika, v.capaian_pelatihan)
        }
    ]
};
const kolomHitungOf = (jenisKey)=>(KOLOM_HITUNG[jenisKey] || []).map((k)=>({
            ...k,
            tipe: 'angka',
            hitung: k.hitung
        }));
function denganHitung(jenisKey, values = {}) {
    const extra = {};
    for (const k of KOLOM_HITUNG[jenisKey] || []){
        const v = k.hitung(values);
        if (v !== null) extra[k.field_key] = v;
    }
    return {
        ...values,
        ...extra
    };
}
}),
"[project]/src/lib/pelatihanPerPilihan.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/pelatihanPerPilihan.js
 * Jumlah pelatihan per UPT menurut isian kolom pilihan (mis. Sumber Dana, Metode Pelatihan). Satu pelatihan = satu
 * baris (UPT, periode, baris_ke) yang kolom berperan "Judul baris"-nya terisi. Dipakai grafik rekap
 * (components/AdminPeriodRecap.jsx); Dashboard memakai sumber FIELD_PELATIHAN di lib/dashboardWidgets.js.
 */ __turbopack_context__.s([
    "BELUM_DIISI",
    ()=>BELUM_DIISI,
    "opsiKolom",
    ()=>opsiKolom,
    "pelatihanPerPilihan",
    ()=>pelatihanPerPilihan
]);
const BELUM_DIISI = 'Belum diisi';
function opsiKolom(f) {
    try {
        const o = typeof f?.opsi_pilihan === 'string' ? JSON.parse(f.opsi_pilihan) : f?.opsi_pilihan;
        return Array.isArray(o) ? o : [];
    } catch  {
        return [];
    }
}
function pelatihanPerPilihan(rows, { jenisDataId, kolomJudul, kolomPilihan, kolomNilai = null }) {
    const baris = new Map();
    for (const r of rows || []){
        if (r.jenis_data_id !== jenisDataId || r.field_key !== kolomJudul && r.field_key !== kolomPilihan && r.field_key !== kolomNilai) continue;
        const k = `${r.upt_key}|${r.period_id}|${r.baris_ke ?? 1}`;
        if (!baris.has(k)) baris.set(k, {
            upt: r.upt_key,
            judul: false,
            pilihan: '',
            jumlah: 1
        });
        const b = baris.get(k);
        const v = String(r.value_text ?? r.value ?? '').trim();
        if (r.field_key === kolomJudul) b.judul = v !== '';
        else if (r.field_key === kolomPilihan) b.pilihan = v;
        if (kolomNilai && r.field_key === kolomNilai) b.jumlah = Number(r.value ?? r.value_text) || 0;
    }
    const hasil = {};
    for (const b of baris.values()){
        if (!b.judul) continue;
        const p = b.pilihan || BELUM_DIISI;
        hasil[b.upt] ??= {};
        hasil[b.upt][p] = (hasil[b.upt][p] || 0) + b.jumlah;
    }
    return hasil;
}
}),
"[project]/src/lib/peranRekap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/peranRekap.js
 * "Peran di rekap": cara sebuah kolom dihitung di tabel rekap (Rekap UPT/Balai & Rekap Bulanan).
 * Disimpan di field_definitions.peran_rekap (migrasi_16) dan dipilih Admin di Kelola Jenis Data, sehingga jenis
 * data buatan Admin dengan nama kolom bebas tetap terhitung — tidak lagi bergantung pada nama kolom tertentu.
 */ __turbopack_context__.s([
    "PERAN_REKAP",
    ()=>PERAN_REKAP,
    "buatPetaPeran",
    ()=>buatPetaPeran,
    "peranKolom",
    ()=>peranKolom,
    "peranLama",
    ()=>peranLama,
    "peranUntukTipe",
    ()=>peranUntukTipe,
    "tebakPeran",
    ()=>tebakPeran
]);
const PERAN_REKAP = {
    judul: {
        label: 'Judul baris',
        kolomRekap: 'Pelatihan',
        penjelasan: 'Setiap baris yang kolom ini terisi dihitung sebagai 1 pelatihan/kegiatan.',
        contoh: 'Nama Pelatihan, Judul Kegiatan',
        tipe: [
            'teks',
            'teks_panjang',
            'pilihan'
        ]
    },
    peserta: {
        label: 'Jumlah peserta',
        kolomRekap: 'Peserta',
        penjelasan: 'Nilainya dijumlahkan ke kolom Peserta.',
        contoh: 'Jumlah Peserta, Jumlah Lulusan',
        tipe: [
            'angka'
        ]
    },
    pagu: {
        label: 'Pagu anggaran',
        kolomRekap: 'Pagu',
        penjelasan: 'Nilainya dijumlahkan ke kolom Pagu.',
        contoh: 'Pagu Anggaran, Pagu RM',
        tipe: [
            'angka'
        ]
    },
    realisasi: {
        label: 'Realisasi anggaran',
        kolomRekap: 'Realisasi',
        penjelasan: 'Nilainya dijumlahkan ke kolom Realisasi.',
        contoh: 'Realisasi Anggaran',
        tipe: [
            'angka'
        ]
    }
};
const peranUntukTipe = (tipe)=>Object.keys(PERAN_REKAP).filter((p)=>PERAN_REKAP[p].tipe.includes(tipe));
function peranLama(fieldKey = '') {
    if (fieldKey === 'nama_pelatihan') return 'judul';
    if (fieldKey === 'jumlah_peserta') return 'peserta';
    if (fieldKey.includes('pagu')) return 'pagu';
    if (fieldKey.includes('realisasi_anggaran')) return 'realisasi';
    return null;
}
function buatPetaPeran(fieldDefs = []) {
    const peta = new Map();
    for (const f of fieldDefs){
        peta.set(`${f.jenis_data_id}|${f.field_key}`, 'peran_rekap' in f ? f.peran_rekap || null : peranLama(f.field_key));
    }
    return peta;
}
function peranKolom(peta, jenisDataId, fieldKey) {
    const k = `${jenisDataId}|${fieldKey}`;
    return peta.has(k) ? peta.get(k) : peranLama(fieldKey);
}
function tebakPeran(label = '', tipe = '') {
    const s = label.toLowerCase();
    if (tipe === 'angka') {
        if (/peserta|lulusan|dilatih/.test(s)) return 'peserta';
        if (/pagu/.test(s)) return 'pagu';
        if (/realisasi/.test(s) && !/fisik/.test(s)) return 'realisasi';
        return null;
    }
    if (PERAN_REKAP.judul.tipe.includes(tipe) && /^(nama|judul) (pelatihan|kegiatan|diklat)/.test(s)) return 'judul';
    return null;
}
}),
"[project]/src/lib/periods.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/periods.js
 * Periode mingguan mengikuti kalender Senin–Minggu dan dikelompokkan menurut bulan yang memuat hari Kamis.
 */ __turbopack_context__.s([
    "NAMA_BULAN",
    ()=>NAMA_BULAN,
    "NAMA_BULAN_SINGKAT",
    ()=>NAMA_BULAN_SINGKAT,
    "ROMAN_TRIWULAN",
    ()=>ROMAN_TRIWULAN,
    "comparePeriods",
    ()=>comparePeriods,
    "daysInMonth",
    ()=>daysInMonth,
    "excelSheetName",
    ()=>excelSheetName,
    "excelSheetNameMinggu",
    ()=>excelSheetNameMinggu,
    "formatPeriodLabel",
    ()=>formatPeriodLabel,
    "generatePeriods",
    ()=>generatePeriods,
    "isoDate",
    ()=>isoDate,
    "labelBulan",
    ()=>labelBulan,
    "labelMinggu",
    ()=>labelMinggu,
    "labelTriwulan",
    ()=>labelTriwulan,
    "monthDeadline",
    ()=>monthDeadline,
    "namaBulan",
    ()=>namaBulan,
    "periodHierarchy",
    ()=>periodHierarchy,
    "pickCurrentPeriod",
    ()=>pickCurrentPeriod,
    "reportingWeekFromDay",
    ()=>reportingWeekFromDay,
    "sortPeriods",
    ()=>sortPeriods,
    "todayIso",
    ()=>todayIso,
    "triwulanDariBulan",
    ()=>triwulanDariBulan,
    "weekDateRange",
    ()=>weekDateRange,
    "weekDeadline",
    ()=>weekDeadline,
    "weeksOfMonth",
    ()=>weeksOfMonth,
    "weeksOfQuarter",
    ()=>weeksOfQuarter,
    "weeksOfYear",
    ()=>weeksOfYear
]);
const NAMA_BULAN = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
];
const NAMA_BULAN_SINGKAT = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Okt',
    'Nov',
    'Des'
];
const ROMAN_TRIWULAN = [
    'I',
    'II',
    'III',
    'IV'
];
function namaBulan(bulan) {
    return NAMA_BULAN[(Number(bulan) || 1) - 1] || '';
}
function triwulanDariBulan(bulan) {
    return Math.ceil((Number(bulan) || 1) / 3);
}
function labelTriwulan(triwulanKe, tahun) {
    return `Triwulan ${ROMAN_TRIWULAN[(Number(triwulanKe) || 1) - 1] || triwulanKe} ${tahun}`;
}
function labelMinggu(mingguKe, bulan, tahun) {
    const { tanggal_mulai, tanggal_selesai } = weekDateRange(Number(tahun), Number(bulan), Number(mingguKe));
    const [sy, sm, sd] = tanggal_mulai.split('-').map(Number);
    const [ey, em, ed] = tanggal_selesai.split('-').map(Number);
    const awalLabel = `${sd} ${namaBulan(sm)}${sy !== ey ? ` ${sy}` : ''}`;
    const akhirLabel = `${ed} ${namaBulan(em)} ${ey}`;
    return `${awalLabel}–${akhirLabel}`;
}
function labelBulan(bulan, tahun) {
    return `${namaBulan(bulan)} ${tahun}`;
}
function excelSheetNameMinggu(mingguKe, bulan, tahun) {
    return `Mg ke-${mingguKe} ${NAMA_BULAN_SINGKAT[(Number(bulan) || 1) - 1]} ${tahun}`;
}
function excelSheetName(period) {
    if (!period) return 'Periode';
    if (period.level === 'minggu') {
        const full = formatPeriodLabel(period);
        return full.length <= 31 ? full : excelSheetNameMinggu(period.minggu_ke, period.bulan, period.tahun);
    }
    const label = formatPeriodLabel(period);
    return label.length <= 31 ? label : label.slice(0, 31);
}
function formatPeriodLabel(period) {
    if (!period) return '';
    const tahun = period.tahun;
    if (period.level === 'minggu') {
        return labelMinggu(period.minggu_ke, period.bulan, tahun);
    }
    if (period.level === 'bulan') {
        return labelBulan(period.bulan, tahun);
    }
    if (period.level === 'triwulan') {
        return labelTriwulan(period.triwulan_ke, tahun);
    }
    if (period.level === 'tahun') {
        return `Tahun ${tahun}`;
    }
    if (period.minggu_ke && period.bulan) {
        return labelMinggu(period.minggu_ke, period.bulan, tahun);
    }
    return period.label || '';
}
function periodHierarchy(period) {
    if (!period) return null;
    const tahun = period.tahun;
    const bulan = period.bulan;
    const tw = period.triwulan_ke || (bulan ? triwulanDariBulan(bulan) : null);
    return {
        minggu: period.level === 'minggu' ? formatPeriodLabel(period) : null,
        bulan: bulan ? labelBulan(bulan, tahun) : null,
        triwulan: tw ? labelTriwulan(tw, tahun) : null,
        tahun: tahun ? `Tahun ${tahun}` : null
    };
}
function comparePeriods(a, b) {
    const y = (Number(a?.tahun) || 0) - (Number(b?.tahun) || 0);
    if (y) return y;
    const levelRank = {
        tahun: 0,
        triwulan: 1,
        bulan: 2,
        minggu: 3
    };
    const lr = (levelRank[a?.level] ?? 9) - (levelRank[b?.level] ?? 9);
    if (lr) return lr;
    const tw = (Number(a?.triwulan_ke) || 0) - (Number(b?.triwulan_ke) || 0);
    if (a?.level === 'triwulan' || b?.level === 'triwulan') return tw;
    const m = (Number(a?.bulan) || 0) - (Number(b?.bulan) || 0);
    if (m) return m;
    return (Number(a?.minggu_ke) || 0) - (Number(b?.minggu_ke) || 0);
}
function sortPeriods(periods = []) {
    return [
        ...periods
    ].sort(comparePeriods);
}
function daysInMonth(tahun, bulan) {
    return new Date(tahun, bulan, 0).getDate();
}
function pad2(n) {
    return String(n).padStart(2, '0');
}
function isoDate(tahun, bulan, hari) {
    return `${tahun}-${pad2(bulan)}-${pad2(hari)}`;
}
function weekDateRange(tahun, bulan, mingguKe) {
    const first = new Date(tahun, bulan - 1, 1);
    const firstThursday = new Date(tahun, bulan - 1, 1 + (4 - first.getDay() + 7) % 7);
    const firstMonday = new Date(firstThursday.getFullYear(), firstThursday.getMonth(), firstThursday.getDate() - 3);
    const start = new Date(firstMonday.getFullYear(), firstMonday.getMonth(), firstMonday.getDate() + (mingguKe - 1) * 7);
    const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 6);
    const toIso = (d)=>isoDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
    return {
        tanggal_mulai: toIso(start),
        tanggal_selesai: toIso(end)
    };
}
function weekDeadline(tahun, bulan, mingguKe) {
    const range = weekDateRange(tahun, bulan, mingguKe);
    const [y, m, d] = range.tanggal_selesai.split('-').map(Number);
    const deadline = new Date(y, m - 1, d + 7);
    return isoDate(deadline.getFullYear(), deadline.getMonth() + 1, deadline.getDate());
}
function monthDeadline(tahun, bulan) {
    const nextMonth = bulan === 12 ? 1 : bulan + 1;
    const nextYear = bulan === 12 ? tahun + 1 : tahun;
    return isoDate(nextYear, nextMonth, daysInMonth(nextYear, nextMonth));
}
function generatePeriods(tahun = 2026, options = {}) {
    const idFor = options.idFor || ((p)=>{
        if (p.level === 'tahun') return `p-yr-${tahun}`;
        if (p.level === 'triwulan') return `p-q-${p.triwulan_ke}`;
        if (p.level === 'bulan') return `p-m-${p.bulan}`;
        return `p-w-${p.bulan}-${p.minggu_ke}`;
    });
    const periods = [];
    periods.push({
        id: idFor({
            level: 'tahun',
            tahun
        }),
        level: 'tahun',
        tahun,
        triwulan_ke: null,
        bulan: null,
        minggu_ke: null,
        tanggal_mulai: isoDate(tahun, 1, 1),
        tanggal_selesai: isoDate(tahun, 12, 31),
        deadline: isoDate(tahun + 1, 6, 30),
        label: `Tahun ${tahun}`
    });
    const qEnds = [
        [
            3,
            31
        ],
        [
            6,
            30
        ],
        [
            9,
            30
        ],
        [
            12,
            31
        ]
    ];
    for(let q = 1; q <= 4; q++){
        const startM = (q - 1) * 3 + 1;
        const [endM, endD] = qEnds[q - 1];
        const nextQ = q === 4 ? 1 : q + 1;
        const nextYear = q === 4 ? tahun + 1 : tahun;
        const [dlM, dlD] = qEnds[nextQ - 1];
        const row = {
            level: 'triwulan',
            tahun,
            triwulan_ke: q,
            bulan: null,
            minggu_ke: null,
            tanggal_mulai: isoDate(tahun, startM, 1),
            tanggal_selesai: isoDate(tahun, endM, endD),
            deadline: isoDate(nextYear, dlM, dlD),
            label: labelTriwulan(q, tahun)
        };
        periods.push({
            ...row,
            id: idFor(row)
        });
    }
    for(let m = 1; m <= 12; m++){
        const last = daysInMonth(tahun, m);
        const tw = triwulanDariBulan(m);
        const monthRow = {
            level: 'bulan',
            tahun,
            triwulan_ke: tw,
            bulan: m,
            minggu_ke: null,
            tanggal_mulai: isoDate(tahun, m, 1),
            tanggal_selesai: isoDate(tahun, m, last),
            deadline: monthDeadline(tahun, m),
            label: labelBulan(m, tahun)
        };
        periods.push({
            ...monthRow,
            id: idFor(monthRow)
        });
        const first = new Date(tahun, m - 1, 1);
        const firstThursday = new Date(tahun, m - 1, 1 + (4 - first.getDay() + 7) % 7);
        const firstMonday = new Date(firstThursday.getFullYear(), firstThursday.getMonth(), firstThursday.getDate() - 3);
        for(let w = 1;; w++){
            const thursday = new Date(firstMonday.getFullYear(), firstMonday.getMonth(), firstMonday.getDate() + (w - 1) * 7 + 3);
            if (thursday.getMonth() !== m - 1 || thursday.getFullYear() !== tahun) break;
            const range = weekDateRange(tahun, m, w);
            const weekRow = {
                level: 'minggu',
                tahun,
                triwulan_ke: tw,
                bulan: m,
                minggu_ke: w,
                tanggal_mulai: range.tanggal_mulai,
                tanggal_selesai: range.tanggal_selesai,
                deadline: weekDeadline(tahun, m, w),
                label: labelMinggu(w, m, tahun)
            };
            periods.push({
                ...weekRow,
                id: idFor(weekRow)
            });
        }
    }
    return periods;
}
function weeksOfMonth(periods, tahun, bulan) {
    return sortPeriods((periods || []).filter((p)=>p.level === 'minggu' && Number(p.tahun) === Number(tahun) && Number(p.bulan) === Number(bulan)));
}
function weeksOfQuarter(periods, tahun, triwulanKe) {
    const startM = (triwulanKe - 1) * 3 + 1;
    const endM = triwulanKe * 3;
    return sortPeriods((periods || []).filter((p)=>p.level === 'minggu' && Number(p.tahun) === Number(tahun) && Number(p.bulan) >= startM && Number(p.bulan) <= endM));
}
function weeksOfYear(periods, tahun) {
    return sortPeriods((periods || []).filter((p)=>p.level === 'minggu' && Number(p.tahun) === Number(tahun)));
}
function reportingWeekFromDay(day) {
    const d = Number(day) || 1;
    if (d <= 7) return 1;
    if (d <= 14) return 2;
    if (d <= 21) return 3;
    return 4;
}
function todayIso(now = new Date()) {
    return isoDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
}
function pickCurrentPeriod(list = []) {
    const t = todayIso();
    const sorted = sortPeriods(list);
    return sorted.find((p)=>p.tanggal_mulai <= t && t <= p.tanggal_selesai) || [
        ...sorted
    ].reverse().find((p)=>p.tanggal_selesai < t) || sorted[0] || null;
}
}),
"[project]/src/lib/saringBaris.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buatSaringan",
    ()=>buatSaringan,
    "teksSaringan",
    ()=>teksSaringan
]);
/**
 * lib/saringBaris.js
 * Saringan baris untuk sumber angka Dashboard & Rekap Periodik: { jd, field, where: { sumber_dana: 'RM' } } hanya
 * menjumlahkan `field` dari baris (baris_ke yang sama, UPT & minggu yang sama) yang kolom `sumber_dana`-nya = 'RM'.
 * Dipakai untuk jenis data multi-baris seperti Data Anggaran (Kode RO + Nama RO + Sumber Dana + Pagu + Realisasi).
 */ const kunci = (r, field)=>`${r.jenis_data_id}|${r.upt_key}|${r.period_id}|${r.baris_ke ?? 1}|${field}`;
function buatSaringan(rows) {
    const teks = new Map();
    for (const r of rows || []){
        const v = r.value_text ?? (r.value === null || r.value === undefined ? null : String(r.value));
        if (v !== null) teks.set(kunci(r, r.field_key), String(v).trim());
    }
    return (r, where)=>!where || Object.entries(where).every(([f, v])=>v === '' || v == null || teks.get(kunci(r, f)) === String(v).trim());
}
const teksSaringan = (where, labelOf = (f)=>f)=>Object.entries(where || {}).filter(([, v])=>v !== '' && v != null).map(([f, v])=>`${labelOf(f)} = ${v}`).join(', ');
}),
"[project]/src/lib/tautan.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/tautan.js
 * Kolom bertipe Berkas bisa berisi salah satu dari dua: id berkas unggahan (field_files) ATAU link data dukung
 * (mis. folder Google Drive). Hanya alamat http/https yang dianggap link — bentuk lain (mis. "javascript:...") tidak
 * pernah dijadikan href, supaya isian tidak bisa dipakai untuk menjalankan skrip.
 */ __turbopack_context__.s([
    "berkasUntukExcel",
    ()=>berkasUntukExcel,
    "isTautan",
    ()=>isTautan
]);
const isTautan = (v)=>typeof v === 'string' && /^https?:\/\/[^\s<>"']+$/i.test(v.trim());
const berkasUntukExcel = (v)=>isTautan(v) ? v.trim() : v ? '(berkas — unduh di web)' : '';
}),
"[project]/src/lib/weeklyReport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "angka",
    ()=>angka,
    "bacaWeeklyReport",
    ()=>bacaWeeklyReport,
    "tanggalLaporan",
    ()=>tanggalLaporan
]);
/**
 * lib/weeklyReport.js
 * Membaca "Form Weekly Report" UPT (formulir Excel: label di kiri, nilai di kanan) menjadi data per jenis data
 * mingguan (lihat be/scripts/seed-weekly-report.ts untuk jenis data & kolomnya).
 *
 * Nilai dicari berdasarkan LABEL di dalam bagiannya (mis. "Pagu Belanja Pegawai AWAL" di bawah "a). Belanja
 * Pegawai"), bukan nomor baris, sehingga tetap terbaca walau barisnya bergeser. Kolom formulir diasumsikan tetap
 * seperti template: label C/D dengan nilai di F (blok kiri), label J dengan nilai di L (blok kanan).
 * Fungsi murni (masukan: isi sheet sebagai array baris), dites di fe/test/weekly-report.test.mjs.
 */ const C = 2, D = 3, F = 5, H = 7, J = 9, L = 11;
const teks = (v)=>v === null || v === undefined ? '' : v instanceof Date ? '' : String(v).trim();
const bukanCatatan = (v)=>!(typeof v === 'string' && /^\s*\*/.test(v)) // "* Diisi link ..." = petunjuk, bukan nilai
;
function angka(v) {
    if (typeof v === 'number') return Number.isFinite(v) ? v : null;
    let s = teks(v).replace(/^rp\.?/i, '').replace(/\s/g, '');
    if (!s || /^-+$/.test(s) || !bukanCatatan(v)) return null;
    if (s.endsWith('%')) return null // persentase dihitung ulang oleh aplikasi
    ;
    const titik = s.lastIndexOf('.'), koma = s.lastIndexOf(',');
    if (titik >= 0 && koma >= 0) s = titik > koma ? s.replace(/,/g, '') : s.replace(/\./g, '').replace(',', '.');
    else if (koma >= 0) s = /,\d{3}(,|$)/.test(s) ? s.replace(/,/g, '') : s.replace(',', '.');
    else if (titik >= 0 && /\.\d{3}(\.|$)/.test(s) && (s.match(/\./g).length > 1 || s.length > 4)) s = s.replace(/\./g, '');
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
}
const BULAN = [
    'januari',
    'februari',
    'maret',
    'april',
    'mei',
    'juni',
    'juli',
    'agustus',
    'september',
    'oktober',
    'november',
    'desember'
];
function tanggalLaporan(v) {
    if (v instanceof Date && !isNaN(v)) {
        // SheetJS bisa memberi tengah malam UTC atau tengah malam waktu lokal; ambil tanggal kalender yang dimaksud
        const utc = v.getUTCHours() === 0 && v.getUTCMinutes() === 0;
        const [y, m, d] = utc ? [
            v.getUTCFullYear(),
            v.getUTCMonth(),
            v.getUTCDate()
        ] : [
            v.getFullYear(),
            v.getMonth(),
            v.getDate()
        ];
        return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    }
    const m = /(\d{1,2})\s+([a-z]+)\s+(\d{4})/i.exec(teks(v));
    const b = m ? BULAN.indexOf(m[2].toLowerCase()) : -1;
    return b >= 0 ? `${m[3]}-${String(b + 1).padStart(2, '0')}-${String(m[1]).padStart(2, '0')}` : null;
}
function bacaWeeklyReport(aoa = []) {
    const g = aoa.map((r)=>r || []);
    const sel = (r, c)=>g[r] ? g[r][c] ?? null : null;
    const peringatan = [];
    const cari = (re, cols, dari = 0, sampai = g.length)=>{
        for(let r = Math.max(0, dari); r < Math.min(sampai, g.length); r++)for (const c of cols)if (re.test(teks(sel(r, c)))) return r;
        return -1;
    };
    // Batas bagian: 1 (anggaran balai), 2 (sumber anggaran), 3 (capaian pelatihan)
    const b1 = cari(/^1\.\s*REALISASI ANGGARAN/i, [
        1,
        2
    ]);
    const b2 = cari(/^2\.\s*REALISASI ANGGARAN/i, [
        1,
        2
    ]);
    const b3 = cari(/^3\.\s*CAPAIAN/i, [
        1,
        2
    ]);
    if (b1 < 0 && b2 < 0 && b3 < 0) throw new Error('Berkas ini bukan Form Weekly Report (bagian "1. REALISASI ANGGARAN" dan "3. CAPAIAN KEGIATAN" tidak ditemukan).');
    const rUpt = cari(/^UPT$/i, [
        1,
        2
    ]);
    const rTgl = cari(/WEEKLY REPORT/i, [
        1,
        2
    ]);
    const upt = rUpt >= 0 ? teks(sel(rUpt, F)) : '';
    const tanggal = rTgl >= 0 ? tanggalLaporan(sel(rTgl, F)) : null;
    /** Ambil nilai label dalam satu blok baris: aturan = [[regexLabel, field_key]]. Label yang muncul dua kali -> peringatan. */ function blok(dari, sampai, kolLabel, kolNilai, aturan, namaBlok, ambil = angka) {
        const out = {};
        for(let r = dari; r < sampai && r < g.length; r++){
            const label = teks(sel(r, kolLabel));
            if (!label) continue;
            const cocok = aturan.find(([re])=>re.test(label));
            if (!cocok) continue;
            const nilai = ambil(sel(r, kolNilai));
            if (cocok[1] in out) {
                if (nilai !== null && nilai !== out[cocok[1]]) peringatan.push(`${namaBlok}: "${label}" muncul lagi di baris ${r + 1} (${nilai.toLocaleString?.('id-ID') ?? nilai}); yang dipakai nilai pertama.`);
                continue;
            }
            out[cocok[1]] = nilai;
        }
        return out;
    }
    const isi = (o)=>Object.values(o).some((v)=>v !== null && v !== '');
    const bersih = (o)=>Object.fromEntries(Object.entries(o).filter(([, v])=>v !== null && v !== ''));
    const kelompok = [];
    const tambah = (key, baris)=>{
        const b = baris.map(bersih).filter((x)=>Object.keys(x).length);
        if (b.length) kelompok.push({
            key,
            baris: b
        });
    };
    // ---- 1a-c. Anggaran per jenis belanja -> Data Anggaran (1 baris per jenis belanja, namanya masuk Nama RO).
    // Pagu = pagu AWAL formulir (bila kosong, pagu AKTIF). Kode RO & sumber dana dibiarkan kosong: formulir tidak
    // memuatnya, jadi UPT melengkapinya sendiri di Input Mingguan.
    const akhir1 = b2 > 0 ? b2 : g.length;
    const belanja = [];
    for (const nama of [
        'Pegawai',
        'Barang',
        'Modal'
    ]){
        const r0 = cari(new RegExp(`^[a-z]\\)\\.?\\s*Belanja ${nama}`, 'i'), [
            C
        ], b1, akhir1);
        if (r0 < 0) continue;
        const v = blok(r0 + 1, r0 + 6, D, F, [
            [
                /AWAL/i,
                'awal'
            ],
            [
                /AKTIF/i,
                'aktif'
            ],
            [
                /^Realisasi/i,
                'realisasi'
            ]
        ], `Belanja ${nama}`);
        if (isi(v)) belanja.push({
            nama_ro: `Belanja ${nama}`,
            pagu: v.awal ?? v.aktif ?? null,
            realisasi: v.realisasi ?? null
        });
    }
    tambah('data_anggaran', belanja);
    // ---- 1. PNBP & MP PNBP (blok kanan)
    const pnbp = {};
    const rPnbp = cari(/Target dan Realisasi (PNBP|PNPB)/i, [
        H
    ], b1, akhir1);
    if (rPnbp >= 0) Object.assign(pnbp, blok(rPnbp + 1, rPnbp + 6, J, L, [
        [
            /Target Penerimaan/i,
            'target_penerimaan_pnbp'
        ],
        [
            /^Realisasi PNBP/i,
            'realisasi_pnbp'
        ]
    ], 'PNBP'));
    if (rPnbp >= 0) Object.assign(pnbp, blok(rPnbp + 1, rPnbp + 6, J, L, [
        [
            /Data Dukung/i,
            'link_data_dukung_pnbp'
        ]
    ], 'PNBP', (v)=>bukanCatatan(v) ? teks(v) || null : null));
    const rMp = cari(/Realisasi MP (PNBP|PNPB)/i, [
        H
    ], b1, akhir1);
    const mp = {};
    // Formulir hanya punya satu MP; nilai MP disimpan bersama Data Anggaran.
    if (rMp >= 0) Object.assign(mp, blok(rMp + 1, rMp + 6, J, L, [
        [
            /Pagu Total MP/i,
            'pagu_mp_1'
        ],
        [
            /Realisasi MP/i,
            'realisasi_mp_1'
        ]
    ], 'MP PNBP'));
    if (isi(mp)) tambah('data_anggaran', [
        {
            kode_kro: 'PNBP',
            nama_kro: 'Penerimaan PNBP',
            kode_ro: 'MP1',
            nama_ro: 'MP 1',
            kode_komponen: 'PNBP-MP1',
            nama_komponen: 'MP 1',
            sumber_dana: 'PNBP/BLU',
            ...mp
        }
    ]);
    if (isi(pnbp)) tambah('pnbp_dan_mp_pnbp', [
        pnbp
    ]);
    // ---- 2a-c. Anggaran per sumber dana: TIDAK diimpor (angka yang sama dengan per jenis belanja, hanya dirinci
    // berbeda); dibaca untuk pemeriksaan silang total di bawah.
    const akhir2 = b3 > 0 ? b3 : g.length;
    const dana = [];
    for (const [re, nama] of [
        [
            /Rupiah Murni|\(RM\)/i,
            'RM'
        ],
        [
            /PNBP\s*\/\s*BLU/i,
            'PNBP/BLU'
        ],
        [
            /SBSN/i,
            'SBSN'
        ]
    ]){
        const r0 = cari(new RegExp(`^[a-z]\\)\\.?.*(${re.source})`, 'i'), [
            C
        ], b2, akhir2);
        if (r0 < 0) continue;
        const v = blok(r0 + 1, r0 + 6, D, F, [
            [
                /AWAL/i,
                'awal'
            ],
            [
                /AKTIF/i,
                'aktif'
            ],
            [
                /^Realisasi/i,
                'realisasi'
            ]
        ], `Sumber dana ${nama}`);
        dana.push({
            pagu: v.awal ?? v.aktif ?? null,
            realisasi: v.realisasi ?? null
        });
    }
    // Data lulusan DUDIKA kini dilaporkan per nama melalui Input Data Bulanan.
    // ---- 3.4 Pelatihan Non-APBN (tabel bebas, berhenti setelah 3 baris kosong berturut-turut)
    const rNon = cari(/Non-?APBN/i, [
        D
    ], b3);
    if (rNon >= 0) {
        const rJudul = cari(/Nama Pelatihan/i, [
            D
        ], rNon, rNon + 5);
        if (rJudul >= 0) {
            const kol = {
                nama_pelatihan: D
            };
            for(let c = D + 1; c <= J; c++){
                const h = teks(sel(rJudul, c));
                if (/Jumlah Peserta/i.test(h)) kol.jumlah_peserta = c;
                else if (/Sasaran/i.test(h)) kol.sasaran = c;
                else if (/Keterangan/i.test(h)) kol.keterangan = c;
            }
            const baris = [];
            for(let r = rJudul + 1, kosong = 0; r < g.length && kosong < 3; r++){
                const nama = teks(sel(r, D));
                if (!nama) {
                    kosong++;
                    continue;
                }
                kosong = 0;
                baris.push({
                    nama_pelatihan: nama,
                    jumlah_peserta: kol.jumlah_peserta !== undefined ? angka(sel(r, kol.jumlah_peserta)) : null,
                    sasaran: kol.sasaran !== undefined ? teks(sel(r, kol.sasaran)) || null : null,
                    keterangan: kol.keterangan !== undefined ? teks(sel(r, kol.keterangan)) || null : null
                });
            }
            tambah('pelatihan_non_apbn', baris);
        }
    }
    // ---- Pemeriksaan silang: total per jenis belanja harus sama dengan total per sumber dana
    const total = (list, k)=>list.reduce((a, r)=>a + (r[k] || 0), 0);
    const rp = (n)=>`Rp${n.toLocaleString('id-ID')}`;
    for (const [k, nama] of [
        [
            'pagu',
            'Pagu'
        ],
        [
            'realisasi',
            'Realisasi'
        ]
    ]){
        const a = total(belanja, k), b = total(dana, k);
        if (a && b && a !== b) peringatan.push(`${nama} per jenis belanja (${rp(a)}) tidak sama dengan per sumber dana (${rp(b)}), selisih ${rp(Math.abs(a - b))}.`);
    }
    return {
        upt,
        tanggal,
        kelompok,
        peringatan
    };
}
}),
];

//# sourceMappingURL=src_1q0uexm._.js.map