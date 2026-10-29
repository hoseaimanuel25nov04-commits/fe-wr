(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(portal)/rekap-triwulan-tahun/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$RekapPeriodik$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/RekapPeriodik.jsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$RekapPeriodik$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/(portal)/rekap-triwulan-tahun/page.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StatCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/**
 * components/StatCard.jsx
 * Kartu statistik berwarna — dipakai di Dashboard & Daily Activity
 */ // Warna disimpan di data widget sebagai nama kelas Tailwind (lihat COLORS di lib/dashboardWidgets.js).
// Di sini dipetakan ke gradasi yang selaras identitas KKP & tetap kontras untuk teks putih.
const TONES = {
    'bg-blue-600': 'from-[#0F52A6] to-[#0B3A73]',
    'bg-emerald-500': 'from-[#0E8C7A] to-[#0A6558]',
    'bg-amber-500': 'from-[#C98A00] to-[#9C6A00]',
    'bg-rose-500': 'from-[#C8354F] to-[#98243B]',
    'bg-purple-600': 'from-[#5B3FA8] to-[#432D80]',
    'bg-sky-500': 'from-[#1F84C2] to-[#15648F]',
    'bg-slate-600': 'from-[#475569] to-[#334155]'
};
function StatCard({ icon: Icon, color, label, value, note, className = '' }) {
    const tone = TONES[color];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `stat-card relative overflow-hidden ${tone ? `bg-gradient-to-br ${tone}` : color} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute -right-6 -bottom-6 w-40 h-24 text-white/[0.08] pointer-events-none",
                viewBox: "0 0 200 100",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 60 Q50 30 100 60 T200 60 V100 H0 Z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatCard.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 80 Q50 50 100 80 T200 80 V100 H0 Z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatCard.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StatCard.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-3",
                        children: Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-white/15 ring-1 ring-white/20 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatCard.jsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatCard.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatCard.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tabular-nums font-bold font-display text-3xl leading-none mb-1.5",
                        children: value ?? 0
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatCard.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold text-white/90",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatCard.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-white/70 mt-1",
                        children: note
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatCard.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StatCard.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StatCard.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/agregasi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/bacaTabelExcel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/excelExport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bacaTabelExcel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bacaTabelExcel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tautan.js [app-client] (ecmascript)");
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
            row[baseHeaders[i]] = sortedFields[i].tipe === 'file' ? sanitizeCellValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["berkasUntukExcel"])(rawVal)) : sanitizeCellValue(rawVal);
        });
        return row;
    });
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows, {
        header: headers
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
    const sheetName = periodLabel && String(periodLabel).length <= 31 ? String(periodLabel) : 'Data Detail';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, sheetName);
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
    const wsSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(summaryData);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsSummary, 'Ringkasan');
    const filename = `${jenisDataJudul}_${periodLabel}_${uptKey || 'semua'}.xlsx`.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
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
            row[fd.label] = fd.tipe === 'file' ? sanitizeCellValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["berkasUntukExcel"])(raw)) : sanitizeCellValue(raw);
        });
        return row;
    });
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows, {
        header: headers
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
    const sheet = periodLabel && String(periodLabel).length <= 31 ? String(periodLabel) : 'Rekap';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, sheet);
    const filename = `Rekap_${jenisDataJudul}_${periodLabel}.xlsx`.replace(/\s+/g, '_');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
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
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows, {
        header: headers
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
    const sheetName = periodLabel && String(periodLabel).length <= 31 ? String(periodLabel) : 'Agregasi';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, sheetName);
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
    const wsSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(summaryData);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsSummary, 'Ringkasan');
    const filename = `Agregasi_${jenisDataJudul}_${periodLabel}_${uptKey || 'semua'}.xlsx`.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
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
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows, {
        header: headers
    });
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
    const sheetName = periodLabel && String(periodLabel).length <= 31 ? String(periodLabel) : 'Rekap UPT';
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, sheetName);
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
    const wsSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(summaryData);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsSummary, 'Info Laporan');
    const filename = `Rekap_Pelaporan_UPT_${periodLabel}_${filterInfo.tahun || ''}.xlsx`.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
}
function exportGabunganSemuaUPT({ data, jenisDataJudul, tahun }) {
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
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
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(levelData);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, level.charAt(0).toUpperCase() + level.slice(1));
    }
    // Sheet validasi
    if (data.validasi && data.validasi.length > 0) {
        const wsV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(sanitizeRows(data.validasi));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsV, 'Validasi');
    }
    // Sheet kolom belum dikenal
    if (data.kolomTidakDikenal && data.kolomTidakDikenal.length > 0) {
        const wsE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(sanitizeRows(data.kolomTidakDikenal));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsE, 'Kolom Tidak Dikenal');
    }
    const filename = `Gabungan_${jenisDataJudul}_${tahun}.xlsx`.replace(/\s+/g, '_');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, filename);
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
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet([
        sampleRow
    ], {
        header: headers
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, 'Template Impor');
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
    const wsPetunjuk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(petunjukData);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, wsPetunjuk, 'Petunjuk');
    const cleanTitle = jenisDataJudul.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    const fileName = `Template_Impor_${cleanTitle}.${format.toLowerCase() === 'csv' ? 'csv' : 'xlsx'}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, fileName);
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
                const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](data, {
                    type: 'array',
                    cellDates: true,
                    ...csv ? {
                        raw: true
                    } : {}
                });
                const sheetName = wb.SheetNames[0];
                const ws = wb.Sheets[sheetName];
                // Tahan sel gabungan, judul besar di atas tabel, dan judul kolom dua tingkat — lihat lib/bacaTabelExcel.js
                const aoa = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
                    header: 1,
                    defval: null,
                    blankrows: true
                });
                const { headers, rows, barisJudul } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bacaTabelExcel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bacaTabel"])(aoa, ws['!merges']);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/periods.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/saringBaris.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/tautan.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/RekapPeriodik.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RekapPeriodik
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * views/RekapPeriodik.jsx
 * Hasil REKAP TRIWULAN & TAHUNAN — baca saja. Angka otomatis dijumlahkan (SUM) dari data mingguan
 * yang diinput UPT, jadi tidak ada input/upload di sini.
 * Akun UPT hanya melihat data UPT-nya sendiri; Admin dapat memilih satu UPT atau semua UPT.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/excelExport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agregasi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saringBaris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/saringBaris.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.mjs [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hourglass.mjs [app-client] (ecmascript) <export default as Hourglass>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
// Anggaran dari "Data Anggaran" (Kode RO + Nama RO + Sumber Dana + Pagu + Realisasi per baris). `where` = hanya baris
// dengan sumber dana tertentu (lib/saringBaris.js). Pagu dan Realisasi ditampilkan sebagai dua kelompok terpisah.
const ANGGARAN = 'data_anggaran';
const anggaran = (field, grup, pendek)=>[
        ...[
            'RM',
            'PNBP/BLU',
            'SBSN'
        ].map((d)=>({
                id: `${field}-${d}`,
                grup,
                label: `${pendek} ${d}`,
                jd: ANGGARAN,
                fields: [
                    field
                ],
                where: {
                    sumber_dana: d
                },
                rp: true
            })),
        {
            id: `${field}-total`,
            grup,
            label: `Total ${grup}`,
            jd: ANGGARAN,
            fields: [
                field
            ],
            rp: true,
            bold: true
        }
    ];
// Angka ringkasan (kunci Jenis Data bawaan + kolom), sama dengan yang tampil di Dashboard
const METRICS = [
    {
        id: 'masy',
        label: 'Orang Masyarakat Dilatih',
        jd: 'masyarakat',
        fields: [
            'jumlah_peserta'
        ]
    },
    {
        id: 'apar',
        label: 'Orang Aparatur Dilatih',
        jd: 'aparatur',
        fields: [
            'jumlah_peserta'
        ]
    },
    ...anggaran('pagu', 'Pagu Anggaran', 'Pagu'),
    ...anggaran('realisasi', 'Realisasi Anggaran', 'Realisasi')
];
const num = (v)=>Number.isFinite(Number(v)) ? Number(v) : 0;
const formatRp = (n)=>`Rp ${num(n).toLocaleString('id-ID')}`;
const fmt = (n, rp)=>rp ? formatRp(n) : num(n).toLocaleString('id-ID');
const isRp = (f)=>(f.label || '').includes('(Rp)');
function RekapPeriodik() {
    _s();
    const { isAdmin, uptKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('triwulan') // 'triwulan' | 'tahun'
    ;
    const [tahun, setTahun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const [tw, setTw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triwulanDariBulan"])(new Date().getMonth() + 1));
    const [uptFilter, setUptFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [jdId, setJdId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [periods, setPeriods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uptList, setUptList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jenisData, setJenisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fieldDefs, setFieldDefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingMeta, setLoadingMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingRows, setLoadingRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RekapPeriodik.useEffect": ()=>{
            loadMeta();
        }
    }["RekapPeriodik.useEffect"], []);
    async function loadMeta() {
        setLoadingMeta(true);
        const [{ data: p }, { data: upts }, { data: jds }, { data: fields }] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('periods').select('*').eq('level', 'minggu'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('upt_list').select('*').eq('aktif', true).order('label'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').eq('aktif', true).order('created_at'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').eq('aktif', true).eq('level', 'minggu').order('urutan')
        ]);
        const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortPeriods"])(p || []);
        setPeriods(list);
        setUptList(upts || []);
        setJenisData((jds || []).filter((j)=>j.level_utama === 'minggu'));
        setFieldDefs(fields || []);
        // tahun bawaan: tahun berjalan bila ada periodenya, jika tidak tahun terakhir
        const years = [
            ...new Set(list.map((x)=>Number(x.tahun)))
        ].sort((a, b)=>a - b);
        if (years.length && !years.includes(new Date().getFullYear())) setTahun(years[years.length - 1]);
        setLoadingMeta(false);
    }
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[years]": ()=>{
            const y = [
                ...new Set(periods.map({
                    "RekapPeriodik.useMemo[years].y": (x)=>Number(x.tahun)
                }["RekapPeriodik.useMemo[years].y"]))
            ].sort({
                "RekapPeriodik.useMemo[years].y": (a, b)=>a - b
            }["RekapPeriodik.useMemo[years].y"]);
            return y.length ? y : [
                tahun
            ];
        }
    }["RekapPeriodik.useMemo[years]"], [
        periods,
        tahun
    ]);
    // Minggu-minggu yang dijumlahkan
    const weeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[weeks]": ()=>mode === 'tahun' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weeksOfYear"])(periods, tahun) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weeksOfQuarter"])(periods, tahun, tw)
    }["RekapPeriodik.useMemo[weeks]"], [
        periods,
        tahun,
        tw,
        mode
    ]);
    const weekKey = weeks.map((w)=>w.id).join(',');
    const weekIdsOrdered = weeks.map((w)=>w.id) // kronologis (terawal -> terakhir)
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RekapPeriodik.useEffect": ()=>{
            if (!weeks.length) {
                setRows([]);
                return;
            }
            let alive = true;
            setLoadingRows(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeatures"])().then({
                "RekapPeriodik.useEffect": (feat)=>{
                    let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('jenis_data_id, upt_key, period_id, baris_ke, field_key, value, value_text').in('period_id', weeks.map({
                        "RekapPeriodik.useEffect.q": (w)=>w.id
                    }["RekapPeriodik.useEffect.q"]));
                    // Baris yang masih menunggu persetujuan Admin belum dihitung di rekap resmi.
                    if (feat.persetujuanBaris) q = q.eq('status', 'disetujui');
                    return q;
                }
            }["RekapPeriodik.useEffect"]).then({
                "RekapPeriodik.useEffect": ({ data })=>{
                    if (!alive) return;
                    setRows(data || []);
                    setLoadingRows(false);
                }
            }["RekapPeriodik.useEffect"]);
            return ({
                "RekapPeriodik.useEffect": ()=>{
                    alive = false;
                }
            })["RekapPeriodik.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["RekapPeriodik.useEffect"], [
        weekKey
    ]);
    // UPT yang tampil (UPT yang sudah dihapus otomatis tidak ada di daftar ini)
    const scopeUpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[scopeUpts]": ()=>{
            if (!isAdmin) return uptList.filter({
                "RekapPeriodik.useMemo[scopeUpts]": (u)=>u.key === uptKey
            }["RekapPeriodik.useMemo[scopeUpts]"]);
            return uptFilter === 'all' ? uptList : uptList.filter({
                "RekapPeriodik.useMemo[scopeUpts]": (u)=>u.key === uptFilter
            }["RekapPeriodik.useMemo[scopeUpts]"]);
        }
    }["RekapPeriodik.useMemo[scopeUpts]"], [
        isAdmin,
        uptKey,
        uptFilter,
        uptList
    ]);
    const scopeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[scopeKeys]": ()=>new Set(scopeUpts.map({
                "RekapPeriodik.useMemo[scopeKeys]": (u)=>u.key
            }["RekapPeriodik.useMemo[scopeKeys]"]))
    }["RekapPeriodik.useMemo[scopeKeys]"], [
        scopeUpts
    ]);
    const scoped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[scoped]": ()=>rows.filter({
                "RekapPeriodik.useMemo[scoped]": (r)=>scopeKeys.has(r.upt_key)
            }["RekapPeriodik.useMemo[scoped]"])
    }["RekapPeriodik.useMemo[scoped]"], [
        rows,
        scopeKeys
    ]);
    const jdIdByKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[jdIdByKey]": ()=>Object.fromEntries(jenisData.map({
                "RekapPeriodik.useMemo[jdIdByKey]": (j)=>[
                        j.key,
                        j.id
                    ]
            }["RekapPeriodik.useMemo[jdIdByKey]"]))
    }["RekapPeriodik.useMemo[jdIdByKey]"], [
        jenisData
    ]);
    // Nilai satu kolom untuk satu UPT pada rangkaian minggu (urut), sesuai cara rekap kolom itu:
    // angka kumulatif (pagu, realisasi, jumlah SDM) = nilai terakhir; angka lain dijumlahkan.
    // `where` (opsional): hanya baris yang kolom pilihannya bernilai tertentu, mis. { sumber_dana: 'RM' }
    const cocok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[cocok]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saringBaris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buatSaringan"])(scoped)
    }["RekapPeriodik.useMemo[cocok]"], [
        scoped
    ]);
    const uptFieldValue = (jdId, uptKey, fieldKey, ids, where)=>{
        const def = fieldDefs.find((f)=>f.jenis_data_id === jdId && f.field_key === fieldKey) || {
            field_key: fieldKey
        };
        const perWeek = ids.map((id)=>{
            const rs = scoped.filter((r)=>r.jenis_data_id === jdId && r.upt_key === uptKey && r.period_id === id && r.field_key === fieldKey && r.value !== null && r.value !== undefined && cocok(r, where));
            return rs.length ? rs.reduce((a, r)=>a + Number(r.value), 0) : null;
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAgregasi"])(perWeek, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agregasiOf"])(def)) ?? 0;
    };
    const sumMetric = (m, ids)=>scopeUpts.reduce((acc, u)=>acc + m.fields.reduce((a, f)=>a + uptFieldValue(jdIdByKey[m.jd], u.key, f, ids, m.where), 0), 0);
    // Sub-periode: triwulan -> 3 bulan; tahun -> 4 triwulan
    const subs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[subs]": ()=>{
            if (mode === 'tahun') {
                return [
                    1,
                    2,
                    3,
                    4
                ].map({
                    "RekapPeriodik.useMemo[subs]": (q)=>({
                            key: q,
                            label: `Triwulan ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROMAN_TRIWULAN"][q - 1]}`,
                            ids: weeks.filter({
                                "RekapPeriodik.useMemo[subs]": (w)=>Number(w.triwulan_ke) === q
                            }["RekapPeriodik.useMemo[subs]"]).map({
                                "RekapPeriodik.useMemo[subs]": (w)=>w.id
                            }["RekapPeriodik.useMemo[subs]"])
                        })
                }["RekapPeriodik.useMemo[subs]"]);
            }
            return [
                1,
                2,
                3
            ].map({
                "RekapPeriodik.useMemo[subs]": (i)=>{
                    const b = (tw - 1) * 3 + i;
                    return {
                        key: b,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namaBulan"])(b),
                        ids: weeks.filter({
                            "RekapPeriodik.useMemo[subs]": (w)=>Number(w.bulan) === b
                        }["RekapPeriodik.useMemo[subs]"]).map({
                            "RekapPeriodik.useMemo[subs]": (w)=>w.id
                        }["RekapPeriodik.useMemo[subs]"])
                    };
                }
            }["RekapPeriodik.useMemo[subs]"]);
        }
    }["RekapPeriodik.useMemo[subs]"], [
        mode,
        tw,
        weeks
    ]);
    const summary = METRICS.map((m)=>({
            ...m,
            has: scoped.some((r)=>r.jenis_data_id === jdIdByKey[m.jd]),
            total: sumMetric(m, weekIdsOrdered),
            perSub: subs.map((s)=>sumMetric(m, s.ids))
        }));
    const hasData = scoped.length > 0;
    const periodLabel = mode === 'tahun' ? `Tahun ${tahun}` : `Triwulan ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROMAN_TRIWULAN"][tw - 1]} ${tahun}`;
    const chartData = subs.map((s, i)=>({
            name: s.label,
            masyarakat: summary[0].perSub[i],
            aparatur: summary[1].perSub[i]
        }));
    // Tabel per Jenis Data mingguan: baris = UPT, kolom = seluruh kolom angka (dijumlahkan)
    const jdTables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RekapPeriodik.useMemo[jdTables]": ()=>{
            const list = jdId === 'all' ? jenisData : jenisData.filter({
                "RekapPeriodik.useMemo[jdTables]": (j)=>j.id === jdId
            }["RekapPeriodik.useMemo[jdTables]"]);
            return list.map({
                "RekapPeriodik.useMemo[jdTables]": (jd)=>{
                    const fields = fieldDefs.filter({
                        "RekapPeriodik.useMemo[jdTables].fields": (f)=>f.jenis_data_id === jd.id && f.tipe === 'angka'
                    }["RekapPeriodik.useMemo[jdTables].fields"]);
                    const jdRows = scoped.filter({
                        "RekapPeriodik.useMemo[jdTables].jdRows": (r)=>r.jenis_data_id === jd.id
                    }["RekapPeriodik.useMemo[jdTables].jdRows"]);
                    const perUpt = scopeUpts.map({
                        "RekapPeriodik.useMemo[jdTables].perUpt": (u)=>{
                            const totals = {};
                            fields.forEach({
                                "RekapPeriodik.useMemo[jdTables].perUpt": (f)=>{
                                    totals[f.field_key] = uptFieldValue(jd.id, u.key, f.field_key, weekIdsOrdered);
                                }
                            }["RekapPeriodik.useMemo[jdTables].perUpt"]);
                            const filled = new Set(jdRows.filter({
                                "RekapPeriodik.useMemo[jdTables].perUpt": (r)=>r.upt_key === u.key
                            }["RekapPeriodik.useMemo[jdTables].perUpt"]).map({
                                "RekapPeriodik.useMemo[jdTables].perUpt": (r)=>r.period_id
                            }["RekapPeriodik.useMemo[jdTables].perUpt"])).size;
                            return {
                                upt: u,
                                totals,
                                filled
                            };
                        }
                    }["RekapPeriodik.useMemo[jdTables].perUpt"]);
                    const grand = {};
                    fields.forEach({
                        "RekapPeriodik.useMemo[jdTables]": (f)=>{
                            grand[f.field_key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineUpt"])(perUpt.map({
                                "RekapPeriodik.useMemo[jdTables]": (p)=>p.totals[f.field_key]
                            }["RekapPeriodik.useMemo[jdTables]"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agregasiOf"])(f));
                        }
                    }["RekapPeriodik.useMemo[jdTables]"]);
                    return {
                        jd,
                        fields,
                        perUpt,
                        grand,
                        filledWeeks: new Set(jdRows.map({
                            "RekapPeriodik.useMemo[jdTables]": (r)=>r.period_id
                        }["RekapPeriodik.useMemo[jdTables]"])).size
                    };
                }
            }["RekapPeriodik.useMemo[jdTables]"]);
        }
    }["RekapPeriodik.useMemo[jdTables]"], [
        jenisData,
        jdId,
        fieldDefs,
        scoped,
        scopeUpts,
        weekKey
    ]);
    function handleExport() {
        const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        const ringkasan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeRows"])(summary.map((m)=>{
            const row = {
                Indikator: m.label
            };
            subs.forEach((s, i)=>{
                row[s.label] = m.perSub[i];
            });
            row[`Total ${periodLabel}`] = m.total;
            return row;
        }));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(ringkasan), 'Ringkasan');
        jdTables.forEach((t)=>{
            if (!t.fields.length) return;
            const data = t.perUpt.map((p)=>{
                const row = {
                    UPT: p.upt.label,
                    'Minggu Terisi': p.filled
                };
                t.fields.forEach((f)=>{
                    row[f.label] = p.totals[f.field_key];
                });
                return row;
            });
            if (t.perUpt.length > 1) {
                const row = {
                    UPT: 'TOTAL',
                    'Minggu Terisi': ''
                };
                t.fields.forEach((f)=>{
                    row[f.label] = t.grand[f.field_key];
                });
                data.push(row);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeRows"])(data)), t.jd.judul.slice(0, 31));
        });
        const who = isAdmin ? uptFilter === 'all' ? 'SemuaUPT' : uptList.find((u)=>u.key === uptFilter)?.label || uptFilter : uptList.find((u)=>u.key === uptKey)?.label || uptKey;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](wb, `Rekap_${periodLabel}_${who}.xlsx`.replace(/\s+/g, '_'));
    }
    const loading = loadingMeta || loadingRows;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-semibold text-2xl text-gray-900 dark:text-white",
                                    children: "Rekap Triwulan & Tahun"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl",
                                    children: isAdmin ? 'Dihitung otomatis dari data mingguan seluruh UPT.' : 'Dihitung otomatis dari data mingguan UPT Anda.'
                                }, void 0, false, {
                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleExport,
                            disabled: !hasData,
                            className: "btn-primary whitespace-nowrap self-start md:self-auto disabled:opacity-40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Download Excel"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/RekapPeriodik.jsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                size: 14,
                                className: "text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Filter Periode"
                            }, void 0, false, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            [
                                'triwulan',
                                'Triwulan'
                            ],
                            [
                                'tahun',
                                'Tahunan'
                            ]
                        ].map(([k, text])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setMode(k),
                                className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${mode === k ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`,
                                children: text
                            }, k, false, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label text-xs",
                                        children: "Tahun"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: tahun,
                                        onChange: (e)=>setTahun(Number(e.target.value)),
                                        className: "form-select text-sm w-full",
                                        children: years.map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: y,
                                                children: y
                                            }, y, false, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 272,
                                                columnNumber: 31
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            mode === 'triwulan' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label text-xs",
                                        children: "Triwulan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: tw,
                                        onChange: (e)=>setTw(Number(e.target.value)),
                                        className: "form-select text-sm w-full",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4
                                        ].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: q,
                                                children: [
                                                    "Triwulan ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROMAN_TRIWULAN"][q - 1],
                                                    " ",
                                                    tahun
                                                ]
                                            }, q, true, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 279,
                                                columnNumber: 40
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label text-xs",
                                        children: "Unit Pelaksana Teknis (UPT)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: uptFilter,
                                        onChange: (e)=>setUptFilter(e.target.value),
                                        className: "form-select text-sm w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: [
                                                    "Semua UPT (",
                                                    uptList.length,
                                                    " Balai)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this),
                                            uptList.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: u.key,
                                                    children: u.label
                                                }, u.key, false, {
                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                    lineNumber: 288,
                                                    columnNumber: 35
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[38px] px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-semibold flex items-center truncate",
                                        children: uptList.find((u)=>u.key === uptKey)?.label || uptKey
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label text-xs",
                                        children: "Jenis Data (Mingguan)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: jdId,
                                        onChange: (e)=>setJdId(e.target.value),
                                        className: "form-select text-sm w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: [
                                                    "Semua Jenis Data (",
                                                    jenisData.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this),
                                            jenisData.map((j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: j.id,
                                                    children: j.judul
                                                }, j.id, false, {
                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                    lineNumber: 300,
                                                    columnNumber: 35
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400",
                        children: [
                            "Periode: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-gray-600 dark:text-gray-300",
                                children: periodLabel
                            }, void 0, false, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 305,
                                columnNumber: 20
                            }, this),
                            " · direkap dari ",
                            weeks.length,
                            " minggu pelaporan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/RekapPeriodik.jsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card flex justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "animate-spin text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                    lineNumber: 310,
                    columnNumber: 57
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/RekapPeriodik.jsx",
                lineNumber: 310,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mb-3",
                                children: [
                                    "Ringkasan ",
                                    periodLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                        color: "bg-blue-600",
                                        label: "Masyarakat Dilatih",
                                        value: summary[0].has ? summary[0].total.toLocaleString('id-ID') : '–',
                                        note: summary[0].has ? '' : 'Menunggu input UPT'
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                                        color: "bg-emerald-500",
                                        label: "Aparatur Dilatih",
                                        value: summary[1].has ? summary[1].total.toLocaleString('id-ID') : '–',
                                        note: summary[1].has ? '' : 'Menunggu input UPT'
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            [
                                ...new Set(summary.slice(2).map((m)=>m.grup))
                            ].map((grup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mt-5 mb-3",
                                            children: grup
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                                            children: summary.slice(2).filter((m)=>m.grup === grup).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: m.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                            lineNumber: 326,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-2xl font-bold font-display tabular-nums ${m.bold ? 'text-emerald-700 dark:text-emerald-300' : ''}`,
                                                            children: m.has ? formatRp(m.total) : '–'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                            lineNumber: 327,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, m.id, true, {
                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                    lineNumber: 325,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, grup, true, {
                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this),
                    !hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-8 text-center text-sm text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                                size: 28,
                                className: "mx-auto mb-2 opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 339,
                                columnNumber: 15
                            }, this),
                            "Belum ada data mingguan pada ",
                            periodLabel,
                            isAdmin && uptFilter === 'all' ? '' : ' untuk UPT ini',
                            ". Rekap akan tampil otomatis setelah UPT mengisi di menu Input Data."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                        lineNumber: 338,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-5 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card overflow-x-auto lg:col-span-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3 border-b border-gray-100 dark:border-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-sm",
                                                        children: [
                                                            "Rincian per ",
                                                            mode === 'tahun' ? 'Triwulan' : 'Bulan'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-gray-400",
                                                        children: [
                                                            "Realisasi & jumlah SDM = nilai kumulatif di akhir ",
                                                            mode === 'tahun' ? 'triwulan' : 'bulan',
                                                            "; kolom Total = nilai terakhir periode."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 347,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "bg-gray-50 dark:bg-gray-800/40 text-xs uppercase tracking-wide text-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-3",
                                                                    children: "Indikator"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                    lineNumber: 354,
                                                                    columnNumber: 25
                                                                }, this),
                                                                subs.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "text-right py-2.5 px-3 whitespace-nowrap",
                                                                        children: s.label
                                                                    }, s.key, false, {
                                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 40
                                                                    }, this)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-right py-2.5 px-3",
                                                                    children: "Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                            lineNumber: 353,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y divide-gray-100 dark:divide-gray-800",
                                                        children: summary.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: m.bold ? 'bg-gray-50 dark:bg-gray-800/50 font-semibold' : '',
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-3",
                                                                        children: m.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                        lineNumber: 362,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    m.perSub.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2.5 px-3 text-right tabular-nums whitespace-nowrap",
                                                                            children: m.has ? fmt(v, m.rp) : '–'
                                                                        }, i, false, {
                                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 51
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-3 text-right tabular-nums font-semibold whitespace-nowrap",
                                                                        children: m.has ? fmt(m.total, m.rp) : '–'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                        lineNumber: 364,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, m.id, true, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 361,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                        lineNumber: 359,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 351,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-4 lg:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold mb-3",
                                                children: [
                                                    "Peserta Dilatih per ",
                                                    mode === 'tahun' ? 'Triwulan' : 'Bulan'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-56",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                    width: "100%",
                                                    height: "100%",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                        data: chartData,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                strokeDasharray: "3 3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 375,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                dataKey: "name",
                                                                tick: {
                                                                    fontSize: 10
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 376,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 377,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 378,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 379,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                dataKey: "masyarakat",
                                                                name: "Masyarakat",
                                                                fill: "#1B5FA8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 380,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                dataKey: "aparatur",
                                                                name: "Aparatur",
                                                                fill: "#2F9E6E"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 381,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                        lineNumber: 374,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                    lineNumber: 373,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 370,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 345,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-gray-900 dark:text-white",
                                        children: [
                                            "Rekap per Jenis Data — ",
                                            periodLabel
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this),
                                    jdTables.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card overflow-x-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-sm",
                                                            children: t.jd.judul
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                            lineNumber: 394,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400",
                                                            children: [
                                                                t.filledWeeks,
                                                                " dari ",
                                                                weeks.length,
                                                                " minggu terisi"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                            lineNumber: 395,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                    lineNumber: 393,
                                                    columnNumber: 21
                                                }, this),
                                                t.fields.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "p-4 text-xs text-gray-400",
                                                    children: "Jenis data ini tidak memiliki kolom angka untuk dijumlahkan."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                    lineNumber: 398,
                                                    columnNumber: 23
                                                }, this) : t.filledWeeks === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "p-4 text-xs text-gray-400 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                            lineNumber: 400,
                                                            columnNumber: 90
                                                        }, this),
                                                        " Menunggu input UPT untuk periode ini."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                    lineNumber: 400,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "text-xs",
                                                    style: {
                                                        minWidth: 'max-content',
                                                        width: '100%'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "bg-gray-50 dark:bg-gray-800/40 uppercase tracking-wide text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "text-left py-2.5 px-3 whitespace-nowrap",
                                                                        children: "UPT/Balai"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                        lineNumber: 405,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "text-right py-2.5 px-3 whitespace-nowrap",
                                                                        children: "Minggu Terisi"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    t.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-right py-2.5 px-3 whitespace-nowrap",
                                                                            children: [
                                                                                f.label,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-[9px] normal-case font-normal text-gray-400",
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGREGASI_SHORT"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agregasiOf"])(f)]
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                                    lineNumber: 410,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, f.id, true, {
                                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                lineNumber: 404,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                            lineNumber: 403,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            className: "divide-y divide-gray-100 dark:divide-gray-800",
                                                            children: [
                                                                t.perUpt.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-gray-50/80 dark:hover:bg-gray-800/40",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2.5 px-3 font-medium whitespace-nowrap",
                                                                                children: p.upt.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                                lineNumber: 418,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2.5 px-3 text-right tabular-nums",
                                                                                children: [
                                                                                    p.filled,
                                                                                    "/",
                                                                                    weeks.length
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                                lineNumber: 419,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            t.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-2.5 px-3 text-right tabular-nums whitespace-nowrap",
                                                                                    children: fmt(p.totals[f.field_key], isRp(f))
                                                                                }, f.id, false, {
                                                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                                    lineNumber: 420,
                                                                                    columnNumber: 50
                                                                                }, this))
                                                                        ]
                                                                    }, p.upt.key, true, {
                                                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                        lineNumber: 417,
                                                                        columnNumber: 29
                                                                    }, this)),
                                                                t.perUpt.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "bg-gray-50 dark:bg-gray-800/50 font-semibold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2.5 px-3",
                                                                            children: "TOTAL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                            lineNumber: 425,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2.5 px-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                            lineNumber: 426,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        t.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2.5 px-3 text-right tabular-nums whitespace-nowrap",
                                                                                children: fmt(t.grand[f.field_key], isRp(f))
                                                                            }, f.id, false, {
                                                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                                lineNumber: 427,
                                                                                columnNumber: 50
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                            lineNumber: 415,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                    lineNumber: 402,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, t.jd.id, true, {
                                            fileName: "[project]/src/views/RekapPeriodik.jsx",
                                            lineNumber: 392,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-400",
                                        children: [
                                            "Tiap kolom direkap sesuai cara rekapnya: angka kumulatif (pagu, realisasi, jumlah SDM) memakai ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "nilai terakhir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                                lineNumber: 436,
                                                columnNumber: 114
                                            }, this),
                                            ", angka lain dijumlahkan. Cara rekap dapat diatur Admin di Kelola Jenis Data."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/RekapPeriodik.jsx",
                                lineNumber: 389,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/RekapPeriodik.jsx",
                        lineNumber: 343,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/RekapPeriodik.jsx",
                lineNumber: 312,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/RekapPeriodik.jsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s(RekapPeriodik, "znDIyups6Zti2NBGT5oh3n+xAkQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = RekapPeriodik;
var _c;
__turbopack_context__.k.register(_c, "RekapPeriodik");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0le07pe._.js.map