(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(portal)/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DashboardHome$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/DashboardHome.jsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DashboardHome$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/(portal)/dashboard/page.jsx",
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
"[project]/src/components/Badge.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * components/Badge.jsx
 * Reusable badge component dengan 5 variasi visual
 */ __turbopack_context__.s([
    "default",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Badge({ variant = 'neutral', children, className = '' }) {
    const classes = {
        success: 'badge-success',
        danger: 'badge-danger',
        warning: 'badge-warning',
        neutral: 'badge-neutral',
        draft: 'badge-draft',
        blue: 'badge-blue'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${classes[variant] || classes.neutral} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Badge.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InfoCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * components/InfoCard.jsx
 * Wrapper kartu netral — bg-white border rounded-xl shadow-sm
 */ __turbopack_context__.s([
    "default",
    ()=>InfoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function InfoCard({ children, className = '', title, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `card p-6 ${className}`,
        children: [
            (title || action) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-base text-[#0B1830] dark:text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.jsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this),
                    action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: action
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.jsx",
                        lineNumber: 14,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InfoCard.jsx",
                lineNumber: 10,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InfoCard.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = InfoCard;
var _c;
__turbopack_context__.k.register(_c, "InfoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PageHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * components/PageHeader.jsx
 * Judul halaman standar: judul, satu kalimat penjelasan, dan (opsional) tombol aksi di kanan.
 */ __turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PageHeader({ title, description, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between gap-3 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold tracking-tight text-[#0B1830] dark:text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHeader.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-3xl",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHeader.jsx",
                        lineNumber: 10,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PageHeader.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            action
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHeader.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
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
"[project]/src/lib/dashboardWidgets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHART_COLORS",
    ()=>CHART_COLORS,
    "COLORS",
    ()=>COLORS,
    "DEFAULT_WIDGETS",
    ()=>DEFAULT_WIDGETS,
    "FIELD_PELATIHAN",
    ()=>FIELD_PELATIHAN,
    "ICONS",
    ()=>ICONS,
    "ICON_NAMES",
    ()=>ICON_NAMES,
    "groupWidgets",
    ()=>groupWidgets,
    "toRow",
    ()=>toRow
]);
/**
 * lib/dashboardWidgets.js
 * Pengaturan isi Dashboard. Widget disimpan di tabel dashboard_widgets (menu Admin "Kelola Dashboard").
 * Selama tabel kosong/belum ada, dipakai DEFAULT_WIDGETS di bawah (sama dengan tampilan bawaan sebelumnya).
 *
 * Bentuk widget:
 *   { tipe: 'kartu', judul, grup, gaya: 'berwarna'|'putih', ikon, warna, satuan: 'angka'|'rupiah', urutan, aktif,
 *     konfigurasi: { items: [{jd, field, where?}], pembanding?: [{jd, field, where?}], pembandingLabel?, sorot?,
 *                    target?: jd } }  — target: kunci jenis data yang target pesertanya (tabel target_mingguan)
 *                    ditampilkan di kartu beserta persentase capaiannya
 *   { tipe: 'grafik', judul, grup, satuan, urutan, aktif,
 *     konfigurasi: { series: [{ label, warna, tumpuk?, items: [{jd, field}] }] } }  — tampilan Dashboard punya tombol
 *     untuk beralih ke tabel angka per UPT (state lokal, sumber angka sama persis, tidak perlu pengaturan tambahan)
 * `jd` = kunci jenis data (jenis_data.key), `field` = field_key. Nilai = jumlah seluruh baris rekap minggu terpilih.
 * `field` = FIELD_PELATIHAN ('#pelatihan') = jumlah pelatihan: banyaknya baris yang kolom "Judul baris"-nya terisi.
 * `where` (opsional) = hanya baris yang kolom pilihannya bernilai tertentu, mis. { sumber_dana: 'RM' }.
 * `tumpuk` (opsional) = seri dengan nilai `tumpuk` yang sama digambar bertumpuk dalam satu batang per UPT.
 * `konfigurasi.tampilan: 'total'` (opsional) = satu batang tegak per seri berisi total seluruh UPT (nama seri di sumbu
 *   bawah), bukan batang mendatar per UPT/Balai.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.mjs [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.mjs [app-client] (ecmascript) <export default as Coins>");
;
const ICONS = {
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    Landmark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
    GraduationCap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    Activity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    BarChart3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
    Database: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    ClipboardList: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
    Calendar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    Clock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
    Coins: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"]
};
const ICON_NAMES = Object.keys(ICONS);
_c = ICON_NAMES;
const COLORS = [
    [
        'bg-blue-600',
        'Biru'
    ],
    [
        'bg-emerald-500',
        'Hijau'
    ],
    [
        'bg-amber-500',
        'Kuning'
    ],
    [
        'bg-rose-500',
        'Merah'
    ],
    [
        'bg-purple-600',
        'Ungu'
    ],
    [
        'bg-sky-500',
        'Biru muda'
    ],
    [
        'bg-slate-600',
        'Abu-abu'
    ]
];
const CHART_COLORS = [
    '#1B5FA8',
    '#2F9E6E',
    '#94a3b8',
    '#0ea5e9',
    '#f59e0b',
    '#e11d48',
    '#7c3aed'
];
const JD_MASYARAKAT = 'masyarakat';
const JD_APARATUR = 'aparatur';
const JD_ANGGARAN = 'data_anggaran';
const JD_PNBP = 'pnbp_dan_mp_pnbp';
// Anggaran dari jenis data "Data Anggaran" (tiap baris: KRO + RO + Komponen + Sumber Dana + Pagu + Realisasi).
// `where` menyaring baris menurut kolom pilihan pada baris yang sama (lib/saringBaris.js). Pagu dan Realisasi
// tampil sebagai dua kelompok terpisah. Susunan yang sama dipasang migrasi_18 (be/scripts/seed-weekly-report.ts).
const ag = (field, where)=>[
        {
            jd: JD_ANGGARAN,
            field,
            ...where ? {
                where
            } : {}
        }
    ];
const DANA = [
    'RM',
    'PNBP/BLU',
    'SBSN'
];
const METODE = [
    'Luring',
    'Daring',
    'Blended'
];
const FIELD_PELATIHAN = '#pelatihan';
const pelatihan = (jd, where)=>[
        {
            jd,
            field: FIELD_PELATIHAN,
            where
        }
    ];
// Grafik total pelatihan seluruh UPT per Sumber Dana & per Metode, Masyarakat dan Aparatur masing-masing satu grafik
// (sama dengan database/migrasi_26_sumber_dana_metode.sql)
const WARNA_DANA = {
    RM: '#1B5FA8',
    'PNBP/BLU': '#0ea5e9',
    SBSN: '#f59e0b'
};
const WARNA_METODE = {
    Luring: '#1B5FA8',
    Daring: '#0ea5e9',
    Blended: '#2F9E6E'
};
const PELATIHAN_JD = [
    [
        'Masyarakat',
        JD_MASYARAKAT
    ],
    [
        'Aparatur',
        JD_APARATUR
    ]
];
const grafikTotal = (judul, jd, kolom, opsi, warna)=>({
        tipe: 'grafik',
        judul,
        grup: 'Grafik',
        satuan: 'angka',
        konfigurasi: {
            tampilan: 'total',
            series: opsi.map((o)=>({
                    label: o,
                    warna: warna[o],
                    items: [
                        {
                            jd,
                            field: 'jumlah_peserta',
                            where: {
                                [kolom]: o
                            }
                        }
                    ]
                }))
        }
    });
const DEFAULT_WIDGETS = [
    {
        tipe: 'kartu',
        judul: 'Orang Masyarakat Dilatih',
        grup: 'Progress & Status',
        gaya: 'berwarna',
        ikon: 'Users',
        warna: 'bg-blue-600',
        satuan: 'angka',
        konfigurasi: {
            items: [
                {
                    jd: JD_MASYARAKAT,
                    field: 'jumlah_peserta'
                }
            ],
            target: JD_MASYARAKAT
        }
    },
    {
        tipe: 'kartu',
        judul: 'Orang Aparatur Dilatih',
        grup: 'Progress & Status',
        gaya: 'berwarna',
        ikon: 'Landmark',
        warna: 'bg-emerald-500',
        satuan: 'angka',
        konfigurasi: {
            items: [
                {
                    jd: JD_APARATUR,
                    field: 'jumlah_peserta'
                }
            ],
            target: JD_APARATUR
        }
    },
    // Sama dengan database/migrasi_29_kartu_pnbp.sql (ikon koin: migrasi_31)
    {
        tipe: 'kartu',
        judul: 'Pendapatan PNBP',
        grup: 'Progress & Status',
        gaya: 'berwarna',
        ikon: 'Coins',
        warna: 'bg-purple-600',
        satuan: 'rupiah',
        konfigurasi: {
            items: [
                {
                    jd: JD_PNBP,
                    field: 'realisasi_pnbp'
                }
            ],
            pembanding: [
                {
                    jd: JD_PNBP,
                    field: 'target_penerimaan_pnbp'
                }
            ],
            pembandingLabel: 'Target'
        }
    },
    ...DANA.map((d)=>({
            tipe: 'kartu',
            judul: d,
            grup: 'Pagu Anggaran',
            gaya: 'putih',
            satuan: 'rupiah',
            konfigurasi: {
                items: ag('pagu', {
                    sumber_dana: d
                })
            }
        })),
    {
        tipe: 'kartu',
        judul: 'Total Pagu Anggaran',
        grup: 'Pagu Anggaran',
        gaya: 'putih',
        satuan: 'rupiah',
        konfigurasi: {
            sorot: true,
            items: ag('pagu')
        }
    },
    ...DANA.map((d)=>({
            tipe: 'kartu',
            judul: d,
            grup: 'Realisasi Anggaran',
            gaya: 'putih',
            satuan: 'rupiah',
            konfigurasi: {
                items: ag('realisasi', {
                    sumber_dana: d
                }),
                pembanding: ag('pagu', {
                    sumber_dana: d
                }),
                pembandingLabel: 'Pagu'
            }
        })),
    {
        tipe: 'kartu',
        judul: 'Total Realisasi Anggaran',
        grup: 'Realisasi Anggaran',
        gaya: 'putih',
        satuan: 'rupiah',
        konfigurasi: {
            sorot: true,
            items: ag('realisasi'),
            pembanding: ag('pagu'),
            pembandingLabel: 'Pagu'
        }
    },
    ...PELATIHAN_JD.map(([nama, jd])=>grafikTotal(`Jumlah Orang ${nama} Dilatih per Sumber Dana`, jd, 'sumber_dana', DANA, WARNA_DANA)),
    ...PELATIHAN_JD.map(([nama, jd])=>grafikTotal(`Jumlah Orang ${nama} Dilatih per Metode Pelatihan`, jd, 'metode_pelatihan', METODE, WARNA_METODE)),
    {
        tipe: 'grafik',
        judul: 'Peserta Dilatih',
        grup: 'Grafik',
        satuan: 'angka',
        konfigurasi: {
            series: [
                {
                    label: 'Masyarakat',
                    warna: '#1B5FA8',
                    items: [
                        {
                            jd: JD_MASYARAKAT,
                            field: 'jumlah_peserta'
                        }
                    ]
                },
                {
                    label: 'Aparatur',
                    warna: '#2F9E6E',
                    items: [
                        {
                            jd: JD_APARATUR,
                            field: 'jumlah_peserta'
                        }
                    ]
                }
            ]
        }
    },
    {
        tipe: 'grafik',
        judul: 'Pagu vs Realisasi',
        grup: 'Grafik',
        satuan: 'rupiah',
        konfigurasi: {
            series: [
                {
                    label: 'Pagu',
                    warna: '#94a3b8',
                    items: ag('pagu')
                },
                {
                    label: 'Realisasi',
                    warna: '#0ea5e9',
                    items: ag('realisasi')
                }
            ]
        }
    }
].map(_c1 = (w, i)=>({
        id: `bawaan-${i}`,
        urutan: (i + 1) * 10,
        aktif: true,
        ikon: null,
        warna: null,
        ...w
    }));
_c2 = DEFAULT_WIDGETS;
function groupWidgets(widgets) {
    const list = [
        ...widgets
    ].filter((w)=>w.aktif !== false).sort((a, b)=>(a.urutan ?? 0) - (b.urutan ?? 0));
    const groups = [];
    for (const w of list){
        let g = groups.find((x)=>x.nama === w.grup);
        if (!g) groups.push(g = {
            nama: w.grup,
            widgets: []
        });
        g.widgets.push(w);
    }
    return groups;
}
const toRow = (w)=>({
        tipe: w.tipe,
        judul: w.judul,
        grup: w.grup,
        gaya: w.gaya || 'berwarna',
        ikon: w.ikon || null,
        warna: w.warna || null,
        satuan: w.satuan || 'angka',
        konfigurasi: w.konfigurasi || {},
        urutan: w.urutan ?? 0,
        aktif: w.aktif !== false
    });
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ICON_NAMES");
__turbopack_context__.k.register(_c1, "DEFAULT_WIDGETS$[\n  { tipe: 'kartu', judul: 'Orang Masyarakat Dilatih', grup: 'Progress & Status', gaya: 'berwarna', ikon: 'Users', warna: 'bg-blue-600', satuan: 'angka', konfigurasi: { items: [{ jd: JD_MASYARAKAT, field: 'jumlah_peserta' }], target: JD_MASYARAKAT } },\n  { tipe: 'kartu', judul: 'Orang Aparatur Dilatih', grup: 'Progress & Status', gaya: 'berwarna', ikon: 'Landmark', warna: 'bg-emerald-500', satuan: 'angka', konfigurasi: { items: [{ jd: JD_APARATUR, field: 'jumlah_peserta' }], target: JD_APARATUR } },\n  // Sama dengan database/migrasi_29_kartu_pnbp.sql (ikon koin: migrasi_31)\n  { tipe: 'kartu', judul: 'Pendapatan PNBP', grup: 'Progress & Status', gaya: 'berwarna', ikon: 'Coins', warna: 'bg-purple-600', satuan: 'rupiah', konfigurasi: { items: [{ jd: JD_PNBP, field: 'realisasi_pnbp' }], pembanding: [{ jd: JD_PNBP, field: 'target_penerimaan_pnbp' }], pembandingLabel: 'Target' } },\n  ...DANA.map(d => ({ tipe: 'kartu', judul: d, grup: 'Pagu Anggaran', gaya: 'putih', satuan: 'rupiah', konfigurasi: { items: ag('pagu', { sumber_dana: d }) } })),\n  { tipe: 'kartu', judul: 'Total Pagu Anggaran', grup: 'Pagu Anggaran', gaya: 'putih', satuan: 'rupiah', konfigurasi: { sorot: true, items: ag('pagu') } },\n  ...DANA.map(d => ({ tipe: 'kartu', judul: d, grup: 'Realisasi Anggaran', gaya: 'putih', satuan: 'rupiah', konfigurasi: { items: ag('realisasi', { sumber_dana: d }), pembanding: ag('pagu', { sumber_dana: d }), pembandingLabel: 'Pagu' } })),\n  { tipe: 'kartu', judul: 'Total Realisasi Anggaran', grup: 'Realisasi Anggaran', gaya: 'putih', satuan: 'rupiah', konfigurasi: { sorot: true, items: ag('realisasi'), pembanding: ag('pagu'), pembandingLabel: 'Pagu' } },\n  ...PELATIHAN_JD.map(([nama, jd]) => grafikTotal(`Jumlah Orang ${nama} Dilatih per Sumber Dana`, jd, 'sumber_dana', DANA, WARNA_DANA)),\n  ...PELATIHAN_JD.map(([nama, jd]) => grafikTotal(`Jumlah Orang ${nama} Dilatih per Metode Pelatihan`, jd, 'metode_pelatihan', METODE, WARNA_METODE)),\n  {\n    tipe: 'grafik', judul: 'Peserta Dilatih', grup: 'Grafik', satuan: 'angka',\n    konfigurasi: { series: [{ label: 'Masyarakat', warna: '#1B5FA8', items: [{ jd: JD_MASYARAKAT, field: 'jumlah_peserta' }] }, { label: 'Aparatur', warna: '#2F9E6E', items: [{ jd: JD_APARATUR, field: 'jumlah_peserta' }] }] },\n  },\n  {\n    tipe: 'grafik', judul: 'Pagu vs Realisasi', grup: 'Grafik', satuan: 'rupiah',\n    konfigurasi: { series: [{ label: 'Pagu', warna: '#94a3b8', items: ag('pagu') }, { label: 'Realisasi', warna: '#0ea5e9', items: ag('realisasi') }] },\n  },\n].map");
__turbopack_context__.k.register(_c2, "DEFAULT_WIDGETS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/peranRekap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/views/DashboardHome.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * views/DashboardHome.jsx
 * Dashboard utama: ringkasan mingguan (dari isian data UPT) dan status pengisian. Isi kartu/grafik diatur Admin (Kelola Dashboard).
 * Tiap kartu grafik punya tombol untuk beralih tampilan grafik batang / tabel angka (state lokal, tidak disimpan).
 * Grafik per UPT/Balai (Peserta Dilatih, Pagu vs Realisasi) awalnya tampil sebagai tabel; grafik total sebagai grafik.
 * Di bawah kelompok kartu "Realisasi Anggaran" ada grafik garis perkembangan realisasi per minggu (satu garis per
 * kartu di kelompok itu: RM, PNBP/BLU, SBSN, Total) dari minggu pertama tahun berjalan sampai minggu terpilih.
 * Minggu terpilih yang belum diisi tetap menampilkan nilai minggu terakhir yang sudah diisi.
 * Akun UPT hanya melihat data UPT-nya sendiri; Admin melihat semua UPT.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InfoCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dashboardWidgets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/peranRekap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agregasi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saringBaris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/saringBaris.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hourglass.mjs [app-client] (ecmascript) <export default as Hourglass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table-2.mjs [app-client] (ecmascript) <export default as Table2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageHeader.jsx [app-client] (ecmascript)");
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
;
;
const num = (v)=>Number.isFinite(Number(v)) ? Number(v) : 0;
const formatRp = (n)=>`Rp ${num(n).toLocaleString('id-ID')}`;
const COMPACT = new Intl.NumberFormat('id-ID', {
    notation: 'compact',
    maximumFractionDigits: 1
});
const BULAN_PENDEK = [
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
const compactNumber = (satuan, v)=>(satuan === 'rupiah' ? 'Rp ' : '') + COMPACT.format(num(v));
;
function DashboardHome() {
    _s();
    const { isAdmin, uptKey, uptLabel, profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Data mingguan dari isian UPT
    const [weeks, setWeeks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [periodId, setPeriodId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tahun, setTahun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uptList, setUptList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jenisData, setJenisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rekap, setRekap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [targetRows, setTargetRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]) // target_mingguan s.d. minggu terpilih (tahun yang sama)
    ;
    const [widgets, setWidgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_WIDGETS"]);
    const [fieldDefs, setFieldDefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingRekap, setLoadingRekap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [chartView, setChartView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}) // widget.id -> 'grafik' | 'tabel'
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardHome.useEffect": ()=>{
            loadMeta();
        }
    }["DashboardHome.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardHome.useEffect": ()=>{
            if (periodId && weeks.length) loadRekap(periodId);
        }
    }["DashboardHome.useEffect"], [
        periodId,
        weeks
    ]);
    async function loadMeta() {
        const feat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeatures"])();
        if (feat.dashboard) {
            const { data: w } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').select('*').order('urutan');
            if (w && w.length) setWidgets(w); // kosong = pakai tampilan bawaan
        }
        const [{ data: p }, { data: upts }, { data: jds }, { data: fdefs }] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('periods').select('*').eq('level', 'minggu'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('upt_list').select('*').eq('aktif', true).order('label'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').eq('aktif', true).order('created_at'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').eq('level', 'minggu')
        ]);
        setFieldDefs(fdefs || []);
        const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortPeriods"])(p || []);
        setWeeks(list);
        setUptList(upts || []);
        setJenisData((jds || []).filter((j)=>j.level_utama === 'minggu'));
        // Default: minggu yang sedang berjalan; jika tidak ada, minggu terakhir yang sudah lewat
        const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickCurrentPeriod"])(list);
        if (def) {
            setPeriodId(def.id);
            setTahun(Number(def.tahun));
        } else setLoadingRekap(false);
    }
    async function loadRekap(id) {
        setLoadingRekap(true);
        // Angka kumulatif (pagu, realisasi, ...) memakai nilai terakhir sampai minggu terpilih, jadi ambil minggu-minggu sebelumnya di tahun yang sama
        const sel = weeks.find((w)=>w.id === id);
        const upTo = sel ? weeks.filter((w)=>Number(w.tahun) === Number(sel.tahun)) : [];
        const ids = upTo.slice(0, upTo.findIndex((w)=>w.id === id) + 1).map((w)=>w.id);
        const feat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeatures"])();
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('period_id, jenis_data_id, upt_key, baris_ke, field_key, value, value_text' + (feat.terlambat ? ', terlambat' : '')).in('period_id', ids.length ? ids : [
            id
        ]);
        // Baris yang masih menunggu persetujuan Admin belum dihitung di Dashboard (total resmi).
        if (feat.persetujuanBaris) q = q.eq('status', 'disetujui');
        const [{ data }, { data: tgt }] = await Promise.all([
            q,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].from('target_mingguan').select('jenis_data_id, upt_key, period_id, target').in('period_id', ids.length ? ids : [
                id
            ])
        ]);
        setRekap(data || []);
        setTargetRows(tgt || []);
        setLoadingRekap(false);
    }
    const weekIdx = weeks.findIndex((w)=>w.id === periodId);
    const activeWeek = weeks[weekIdx] || null;
    // Filter tahun: daftar minggu hanya menampilkan minggu pada tahun terpilih
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[years]": ()=>[
                ...new Set(weeks.map({
                    "DashboardHome.useMemo[years]": (w)=>Number(w.tahun)
                }["DashboardHome.useMemo[years]"]))
            ].sort({
                "DashboardHome.useMemo[years]": (a, b)=>a - b
            }["DashboardHome.useMemo[years]"])
    }["DashboardHome.useMemo[years]"], [
        weeks
    ]);
    const weeksThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[weeksThisYear]": ()=>weeks.filter({
                "DashboardHome.useMemo[weeksThisYear]": (w)=>Number(w.tahun) === Number(tahun)
            }["DashboardHome.useMemo[weeksThisYear]"])
    }["DashboardHome.useMemo[weeksThisYear]"], [
        weeks,
        tahun
    ]);
    const goWeek = (w)=>{
        if (w) {
            setPeriodId(w.id);
            setTahun(Number(w.tahun));
        }
    };
    const pickYear = (y)=>{
        const ws = weeks.filter((w)=>Number(w.tahun) === y);
        goWeek((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickCurrentPeriod"])(ws) || ws[0]);
    };
    // UPT yang tampil: Admin = semua UPT aktif; akun UPT = hanya UPT-nya
    const scopeUpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[scopeUpts]": ()=>isAdmin ? uptList : uptList.filter({
                "DashboardHome.useMemo[scopeUpts]": (u)=>u.key === uptKey
            }["DashboardHome.useMemo[scopeUpts]"])
    }["DashboardHome.useMemo[scopeUpts]"], [
        isAdmin,
        uptList,
        uptKey
    ]);
    const scopeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[scopeKeys]": ()=>new Set(scopeUpts.map({
                "DashboardHome.useMemo[scopeKeys]": (u)=>u.key
            }["DashboardHome.useMemo[scopeKeys]"]))
    }["DashboardHome.useMemo[scopeKeys]"], [
        scopeUpts
    ]);
    const jdIdByKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[jdIdByKey]": ()=>{
            const m = {};
            jenisData.forEach({
                "DashboardHome.useMemo[jdIdByKey]": (j)=>{
                    m[j.key] = j.id;
                }
            }["DashboardHome.useMemo[jdIdByKey]"]);
            return m;
        }
    }["DashboardHome.useMemo[jdIdByKey]"], [
        jenisData
    ]);
    // Baris rekap milik UPT yang masih ada (UPT yang dihapus otomatis tidak ikut)
    const rowsAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[rowsAll]": ()=>rekap.filter({
                "DashboardHome.useMemo[rowsAll]": (r)=>scopeKeys.has(r.upt_key)
            }["DashboardHome.useMemo[rowsAll]"])
    }["DashboardHome.useMemo[rowsAll]"], [
        rekap,
        scopeKeys
    ]) // minggu-minggu sampai yang dipilih
    ;
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[rows]": ()=>rowsAll.filter({
                "DashboardHome.useMemo[rows]": (r)=>r.period_id === periodId
            }["DashboardHome.useMemo[rows]"])
    }["DashboardHome.useMemo[rows]"], [
        rowsAll,
        periodId
    ]) // hanya minggu terpilih
    ;
    const weekOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[weekOrder]": ()=>Object.fromEntries(weeks.map({
                "DashboardHome.useMemo[weekOrder]": (w, i)=>[
                        w.id,
                        i
                    ]
            }["DashboardHome.useMemo[weekOrder]"]))
    }["DashboardHome.useMemo[weekOrder]"], [
        weeks
    ]);
    const modeOf = (jdKey, field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agregasiOf"])(fieldDefs.find((f)=>f.jenis_data_id === jdIdByKey[jdKey] && f.field_key === field) || {
            field_key: field
        });
    // Kumulatif & Nilai terakhir: dipakai angka minggu terakhir yang terisi tiap UPT (minggu kosong = minggu sebelumnya)
    const cumulative = (jdKey, field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastMode"])(modeOf(jdKey, field));
    // where: saring baris menurut kolom lain pada baris yang sama, mis. { sumber_dana: 'RM' } (lib/saringBaris.js)
    const cocok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[cocok]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saringBaris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buatSaringan"])(rowsAll)
    }["DashboardHome.useMemo[cocok]"], [
        rowsAll
    ]);
    // FIELD_PELATIHAN dibaca dari kolom berperan "Judul baris" jenis data itu (Kelola Jenis Data)
    const kolomJudul = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[kolomJudul]": ()=>{
            const peta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buatPetaPeran"])(fieldDefs);
            const m = {};
            fieldDefs.forEach({
                "DashboardHome.useMemo[kolomJudul]": (f)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peranKolom"])(peta, f.jenis_data_id, f.field_key) === 'judul') m[f.jenis_data_id] ??= f.field_key;
                }
            }["DashboardHome.useMemo[kolomJudul]"]);
            return m;
        }
    }["DashboardHome.useMemo[kolomJudul]"], [
        fieldDefs
    ]);
    const kolomOf = (jdKey, field)=>field === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIELD_PELATIHAN"] ? kolomJudul[jdIdByKey[jdKey]] : field;
    const matching = (jdKey, field, uptFilter, list, where)=>{
        const fk = kolomOf(jdKey, field);
        return list.filter((r)=>r.jenis_data_id === jdIdByKey[jdKey] && r.field_key === fk && (!uptFilter || r.upt_key === uptFilter) && cocok(r, where));
    };
    const terisi = (r)=>String(r.value_text ?? r.value ?? '').trim() !== '';
    // Nilai: kolom kumulatif = nilai terakhir tiap UPT sampai minggu terpilih; kolom lain = jumlah seluruh minggu dari minggu 1 tahun berjalan sampai minggu terpilih.
    // Jumlah pelatihan = banyaknya baris berjudul dari minggu 1 tahun berjalan sampai minggu terpilih.
    // `list` = baris yang dihitung (bawaan: semua minggu sampai minggu terpilih; grafik garis: sampai minggu tertentu).
    const sum = (jdKey, field, uptFilter, where, list = rowsAll)=>{
        if (field === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIELD_PELATIHAN"]) return matching(jdKey, field, uptFilter, list, where).filter(terisi).length;
        if (!cumulative(jdKey, field)) return matching(jdKey, field, uptFilter, list, where).reduce((a, r)=>a + num(r.value), 0);
        const perUpt = {};
        matching(jdKey, field, uptFilter, list, where).filter((r)=>r.value !== null && r.value !== undefined).forEach((r)=>{
            const o = weekOrder[r.period_id] ?? -1;
            const cur = perUpt[r.upt_key];
            if (!cur || o > cur.o) perUpt[r.upt_key] = {
                o,
                v: num(r.value)
            };
            else if (o === cur.o) cur.v += num(r.value);
        });
        return Object.values(perUpt).reduce((a, x)=>a + x.v, 0);
    };
    // Target peserta: tiap UPT memakai target minggu terakhir yang terisi (s.d. minggu terpilih), lalu dijumlah
    const targetOf = (jdKey, uptFilter)=>{
        const perUpt = {};
        for (const r of targetRows){
            if (r.jenis_data_id !== jdIdByKey[jdKey] || !scopeKeys.has(r.upt_key) || uptFilter && r.upt_key !== uptFilter) continue;
            if (r.target === null || r.target === undefined || r.target === '') continue;
            const o = weekOrder[r.period_id] ?? -1;
            if (!perUpt[r.upt_key] || o > perUpt[r.upt_key].o) perUpt[r.upt_key] = {
                o,
                v: num(r.target)
            };
        }
        const nilai = Object.values(perUpt);
        return nilai.length ? nilai.reduce((a, x)=>a + x.v, 0) : null;
    };
    const catatanTarget = (c, satuan, nilai)=>{
        if (!c.target) return null;
        const t = targetOf(c.target);
        if (!t) return null;
        const persen = nilai / t * 100;
        return `Target ${fmt(satuan, t)} · ${persen.toLocaleString('id-ID', {
            maximumFractionDigits: 1
        })}%`;
    };
    // UPT mana saja yang sudah mengisi jenis data tertentu pada minggu terpilih
    const filledUpts = (jdKey)=>new Set(rows.filter((r)=>r.jenis_data_id === jdIdByKey[jdKey]).map((r)=>r.upt_key));
    const waitingNote = isAdmin ? 'Menunggu input UPT' : 'Menunggu input UPT Anda';
    const filledNote = (jdKey)=>{
        const n = filledUpts(jdKey).size;
        return isAdmin ? `${n} dari ${scopeUpts.length} UPT sudah input` : 'Sudah diinput UPT Anda';
    };
    // Nilai widget = jumlah baris rekap (minggu terpilih) untuk semua sumber {jd, field}; per UPT bila uptFilter diisi
    const sumItems = (items = [], uptFilter, list)=>items.reduce((a, it)=>a + sum(it.jd, it.field, uptFilter, it.where, list), 0);
    const uptsOf = (it)=>new Set(matching(it.jd, it.field, null, rowsAll, it.where).map((r)=>r.upt_key));
    const hasItems = (items = [])=>items.some((it)=>uptsOf(it).size > 0);
    const fmt = (satuan, v)=>satuan === 'rupiah' ? formatRp(v) : num(v).toLocaleString('id-ID');
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[groups]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupWidgets"])(widgets)
    }["DashboardHome.useMemo[groups]"], [
        widgets
    ]);
    const charts = groups.flatMap((g)=>g.widgets.filter((w)=>w.tipe === 'grafik'));
    // tampilan 'total': satu baris per seri, nilainya total seluruh UPT yang tampil (akun UPT: UPT-nya sendiri)
    const totalData = (w)=>(w.konfigurasi?.series || []).map((sr)=>({
                name: sr.label,
                nilai: sumItems(sr.items),
                warna: sr.warna || '#1B5FA8'
            }));
    const chartData = (w)=>scopeUpts.map((u)=>{
            const row = {
                name: u.label
            };
            (w.konfigurasi?.series || []).forEach((sr)=>{
                row[sr.label] = sumItems(sr.items, u.key);
            });
            return row;
        });
    const noteFor = (items)=>{
        const n = new Set((items || []).flatMap((it)=>[
                ...uptsOf(it)
            ])).size;
        return isAdmin ? `${n} dari ${scopeUpts.length} UPT sudah input` : 'Sudah diinput UPT Anda';
    };
    const anyData = rowsAll.length > 0;
    // Minggu terpilih belum ada isian (yang sudah disetujui): angka di bawah memakai minggu terakhir yang sudah terisi
    const lastFilledWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[lastFilledWeek]": ()=>{
            if (rows.length || !rowsAll.length) return null;
            const o = Math.max(...rowsAll.map({
                "DashboardHome.useMemo[lastFilledWeek].o": (r)=>weekOrder[r.period_id] ?? -1
            }["DashboardHome.useMemo[lastFilledWeek].o"]));
            return weeks[o] || null;
        }
    }["DashboardHome.useMemo[lastFilledWeek]"], [
        rows,
        rowsAll,
        weekOrder,
        weeks
    ]);
    // Grafik garis perkembangan realisasi: minggu 1 tahun berjalan s.d. minggu terpilih, satu garis per kartu kelompok
    // "Realisasi Anggaran". Nilai tiap minggu dihitung sama persis dengan kartunya bila minggu itu yang dipilih.
    const realisasiGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[realisasiGroup]": ()=>groups.find({
                "DashboardHome.useMemo[realisasiGroup]": (g)=>/realisasi/i.test(g.nama) && g.widgets.some({
                        "DashboardHome.useMemo[realisasiGroup]": (w)=>w.tipe === 'kartu'
                    }["DashboardHome.useMemo[realisasiGroup]"])
            }["DashboardHome.useMemo[realisasiGroup]"])
    }["DashboardHome.useMemo[realisasiGroup]"], [
        groups
    ]);
    const realisasiLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[realisasiLines]": ()=>(realisasiGroup?.widgets || []).filter({
                "DashboardHome.useMemo[realisasiLines]": (w)=>w.tipe === 'kartu'
            }["DashboardHome.useMemo[realisasiLines]"])
    }["DashboardHome.useMemo[realisasiLines]"], [
        realisasiGroup
    ]);
    const trendData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[trendData]": ()=>{
            if (!realisasiLines.length || !activeWeek) return [];
            const yearWeeks = weeksThisYear.filter({
                "DashboardHome.useMemo[trendData].yearWeeks": (w)=>(weekOrder[w.id] ?? -1) <= weekIdx
            }["DashboardHome.useMemo[trendData].yearWeeks"]);
            return yearWeeks.map({
                "DashboardHome.useMemo[trendData]": (w)=>{
                    const o = weekOrder[w.id];
                    const upTo = rowsAll.filter({
                        "DashboardHome.useMemo[trendData].upTo": (r)=>(weekOrder[r.period_id] ?? -1) <= o
                    }["DashboardHome.useMemo[trendData].upTo"]);
                    const point = {
                        name: `${BULAN_PENDEK[(w.bulan || 1) - 1]} M${w.minggu_ke ?? ''}`,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(w)
                    };
                    realisasiLines.forEach({
                        "DashboardHome.useMemo[trendData]": (k)=>{
                            point[k.judul] = sumItems(k.konfigurasi?.items, undefined, upTo);
                        }
                    }["DashboardHome.useMemo[trendData]"]);
                    return point;
                }
            }["DashboardHome.useMemo[trendData]"]);
        }
    }["DashboardHome.useMemo[trendData]"], [
        realisasiLines,
        activeWeek,
        weeksThisYear,
        weekOrder,
        weekIdx,
        rowsAll
    ]) // eslint-disable-line react-hooks/exhaustive-deps
    ;
    const TREND_COLORS = [
        '#1B5FA8',
        '#0ea5e9',
        '#f59e0b',
        '#2F9E6E',
        '#7c3aed',
        '#e11d48'
    ];
    const lineColor = (k, i)=>k.konfigurasi?.sorot ? '#0B3A73' : TREND_COLORS[i % TREND_COLORS.length];
    // Kartu total (sorot, mis. "Total Realisasi Anggaran") tidak digambar sebagai garis; angkanya tetap muncul di
    // rangkuman (tooltip) saat titik minggu disorot.
    const garisTrend = realisasiLines.filter((k)=>!k.konfigurasi?.sorot);
    const totalTrend = realisasiLines.find((k)=>k.konfigurasi?.sorot);
    const pnbpId = jenisData.find((j)=>j.key === 'pnbp_dan_mp_pnbp')?.id;
    const pnbpGroup = groups.find((g)=>g.widgets.some((w)=>(w.konfigurasi?.items || []).some((i)=>i.jd === 'pnbp_dan_mp_pnbp')));
    const pnbpTrendData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardHome.useMemo[pnbpTrendData]": ()=>{
            if (!pnbpId || !activeWeek) return [];
            return weeksThisYear.filter({
                "DashboardHome.useMemo[pnbpTrendData]": (w)=>(weekOrder[w.id] ?? -1) <= weekIdx
            }["DashboardHome.useMemo[pnbpTrendData]"]).map({
                "DashboardHome.useMemo[pnbpTrendData]": (w)=>{
                    const total = rowsAll.filter({
                        "DashboardHome.useMemo[pnbpTrendData].total": (r)=>r.jenis_data_id === pnbpId && r.period_id === w.id && r.field_key === 'realisasi_pnbp'
                    }["DashboardHome.useMemo[pnbpTrendData].total"]).reduce({
                        "DashboardHome.useMemo[pnbpTrendData].total": (sum, r)=>sum + num(r.value)
                    }["DashboardHome.useMemo[pnbpTrendData].total"], 0);
                    return {
                        name: `${BULAN_PENDEK[(w.bulan || 1) - 1]} M${w.minggu_ke ?? ''}`,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(w),
                        realisasi: total
                    };
                }
            }["DashboardHome.useMemo[pnbpTrendData]"]);
        }
    }["DashboardHome.useMemo[pnbpTrendData]"], [
        pnbpId,
        activeWeek,
        weeksThisYear,
        weekOrder,
        weekIdx,
        rowsAll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Dashboard",
                description: `${profile?.nama_lengkap || 'Pengguna'} · ${new Date().toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}${isAdmin ? ' · Admin' : uptLabel ? ` · ${uptLabel}` : ''}`
            }, void 0, false, {
                fileName: "[project]/src/views/DashboardHome.jsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/monitoring-updating",
                className: "flex min-h-14 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                size: 19,
                                className: "text-emerald-700"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 266,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "block",
                                        children: "Monitoring Updating"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 266,
                                        columnNumber: 113
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500",
                                        children: "Lihat progres pengisian laporan mingguan dan bulanan per Satker."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 266,
                                        columnNumber: 167
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 266,
                                columnNumber: 107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DashboardHome.jsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-emerald-800",
                        children: "Buka monitoring"
                    }, void 0, false, {
                        fileName: "[project]/src/views/DashboardHome.jsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DashboardHome.jsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-4 flex items-center justify-between flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                children: "Periode Mingguan"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            activeWeek && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-0.5",
                                children: [
                                    new Date(activeWeek.tanggal_mulai).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'short'
                                    }),
                                    ' – ',
                                    new Date(activeWeek.tanggal_selesai).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    }),
                                    ' · batas pengisian ',
                                    new Date(activeWeek.deadline).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DashboardHome.jsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn-secondary text-xs px-2 py-2",
                                disabled: weekIdx <= 0,
                                onClick: ()=>goWeek(weeks[weekIdx - 1]),
                                title: "Minggu sebelumnya",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            years.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "form-select text-sm",
                                value: tahun ?? '',
                                onChange: (e)=>pickYear(Number(e.target.value)),
                                title: "Tahun",
                                children: years.map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: y,
                                        children: y
                                    }, y, false, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 301,
                                        columnNumber: 31
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "form-select text-sm",
                                value: periodId,
                                onChange: (e)=>setPeriodId(e.target.value),
                                children: weeksThisYear.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: w.id,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(w)
                                    }, w.id, false, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn-secondary text-xs px-2 py-2",
                                disabled: weekIdx < 0 || weekIdx >= weeks.length - 1,
                                onClick: ()=>goWeek(weeks[weekIdx + 1]),
                                title: "Minggu berikutnya",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DashboardHome.jsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DashboardHome.jsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            lastFilledWeek && !loadingRekap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-800 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        size: 16,
                        className: "mt-0.5 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/views/DashboardHome.jsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            activeWeek ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activeWeek) : 'Minggu ini',
                            " belum ada isian yang disetujui. Angka di bawah memakai nilai terakhir yang sudah diisi, yaitu ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(lastFilledWeek)
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 330,
                                columnNumber: 52
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DashboardHome.jsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DashboardHome.jsx",
                lineNumber: 326,
                columnNumber: 9
            }, this),
            groups.filter((g)=>g.widgets.some((w)=>w.tipe === 'kartu')).map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mb-3",
                            children: [
                                g.nama,
                                g.widgets.some((w)=>w.gaya === 'berwarna') && ` — ${activeWeek ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activeWeek) : '-'}`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/DashboardHome.jsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid grid-cols-1 sm:grid-cols-2 gap-3 ${g.widgets.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`,
                            children: g.widgets.filter((w)=>w.tipe === 'kartu').map((w)=>{
                                const c = w.konfigurasi || {};
                                const has = hasItems(c.items);
                                const value = sumItems(c.items);
                                if (w.gaya === 'putih') {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: w.judul
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 349,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-2xl font-bold font-display tabular-nums ${c.sorot ? 'text-emerald-700 dark:text-emerald-300' : ''}`,
                                                children: loadingRekap ? '…' : has ? fmt(w.satuan, value) : '–'
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 350,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400 mt-0.5",
                                                children: loadingRekap ? '' : has ? c.pembanding?.length ? `${c.pembandingLabel || 'Pembanding'} ${fmt(w.satuan, sumItems(c.pembanding))}` : noteFor(c.items) : waitingNote
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 353,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, w.id, true, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 348,
                                        columnNumber: 19
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICONS"][w.ikon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                                    color: w.warna || 'bg-blue-600',
                                    label: w.judul,
                                    value: loadingRekap ? '…' : has ? fmt(w.satuan, value) : '–',
                                    note: loadingRekap ? '' : has ? catatanTarget(c, w.satuan, value) || (c.pembanding?.length ? `${c.pembandingLabel || 'Pembanding'} ${fmt(w.satuan, sumItems(c.pembanding))}` : noteFor(c.items)) : catatanTarget(c, w.satuan, 0) || waitingNote
                                }, w.id, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 360,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/views/DashboardHome.jsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        g === realisasiGroup && !loadingRekap && trendData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mt-6 mb-3",
                                    children: "Realisasi Anggaran per Minggu"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: 280
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                data: trendData,
                                                margin: {
                                                    top: 8,
                                                    right: 16,
                                                    bottom: 4,
                                                    left: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        vertical: false,
                                                        stroke: "#E3E8EF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 378,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "name",
                                                        tick: {
                                                            fontSize: 11,
                                                            fill: '#64748b'
                                                        },
                                                        axisLine: false,
                                                        tickLine: false,
                                                        minTickGap: 8
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 379,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        tick: {
                                                            fontSize: 11,
                                                            fill: '#64748b'
                                                        },
                                                        tickFormatter: (v)=>compactNumber('rupiah', v),
                                                        axisLine: false,
                                                        tickLine: false,
                                                        width: 84
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 380,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        content: ({ active, payload })=>{
                                                            if (!active || !payload?.length) return null;
                                                            const titik = payload[0].payload;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs shadow-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-gray-900 mb-1",
                                                                        children: titik.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    payload.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "flex justify-between gap-4",
                                                                            style: {
                                                                                color: p.color
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: p.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                                                                    lineNumber: 389,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "tabular-nums",
                                                                                    children: formatRp(p.value)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                                                                    lineNumber: 389,
                                                                                    columnNumber: 52
                                                                                }, this)
                                                                            ]
                                                                        }, p.dataKey, true, {
                                                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                                                            lineNumber: 388,
                                                                            columnNumber: 29
                                                                        }, this)),
                                                                    totalTrend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "flex justify-between gap-4 mt-1 pt-1 border-t border-gray-100 font-semibold text-gray-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: totalTrend.judul
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                                                lineNumber: 394,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "tabular-nums",
                                                                                children: formatRp(titik[totalTrend.judul])
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                                                lineNumber: 394,
                                                                                columnNumber: 62
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                                lineNumber: 385,
                                                                columnNumber: 25
                                                            }, this);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 381,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                        wrapperStyle: {
                                                            fontSize: 12
                                                        },
                                                        itemSorter: null
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 400,
                                                        columnNumber: 21
                                                    }, this),
                                                    garisTrend.map((k, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                            type: "monotone",
                                                            dataKey: k.judul,
                                                            name: k.judul,
                                                            stroke: lineColor(k, i),
                                                            strokeWidth: k.konfigurasi?.sorot ? 3 : 2,
                                                            dot: trendData.length <= 12 ? {
                                                                r: 3
                                                            } : false,
                                                            activeDot: {
                                                                r: 5
                                                            }
                                                        }, k.id, false, {
                                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                                            lineNumber: 402,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/DashboardHome.jsx",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this),
                        g === pnbpGroup && !loadingRekap && pnbpTrendData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mt-6 mb-3",
                                    children: "Tren Realisasi Penerimaan PNBP"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: 260
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                data: pnbpTrendData,
                                                margin: {
                                                    top: 8,
                                                    right: 16,
                                                    bottom: 4,
                                                    left: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        vertical: false,
                                                        stroke: "#E3E8EF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 425,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "name",
                                                        tick: {
                                                            fontSize: 11,
                                                            fill: '#64748b'
                                                        },
                                                        axisLine: false,
                                                        tickLine: false,
                                                        minTickGap: 8
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 426,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        tick: {
                                                            fontSize: 11,
                                                            fill: '#64748b'
                                                        },
                                                        tickFormatter: (v)=>compactNumber('rupiah', v),
                                                        axisLine: false,
                                                        tickLine: false,
                                                        width: 84
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 427,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        formatter: (v)=>formatRp(v),
                                                        labelFormatter: (_, payload)=>payload?.[0]?.payload?.label || ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 428,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 429,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "realisasi",
                                                        name: "Realisasi Penerimaan PNBP",
                                                        stroke: "#7c3aed",
                                                        strokeWidth: 2.5,
                                                        dot: {
                                                            r: 3
                                                        },
                                                        activeDot: {
                                                            r: 5
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 430,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 424,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 422,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/DashboardHome.jsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, this)
                    ]
                }, g.nama, true, {
                    fileName: "[project]/src/views/DashboardHome.jsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)),
            charts.length > 0 && (loadingRekap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card flex justify-center py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "animate-spin text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/views/DashboardHome.jsx",
                    lineNumber: 442,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/DashboardHome.jsx",
                lineNumber: 441,
                columnNumber: 9
            }, this) : !anyData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-6 text-center text-sm text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                        size: 28,
                        className: "mx-auto mb-2 opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/src/views/DashboardHome.jsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this),
                    isAdmin ? 'Menunggu UPT memasukkan data untuk minggu ini. Grafik akan tampil otomatis setelah ada isian.' : 'Menunggu Anda memasukkan data untuk minggu ini di menu Input Data.'
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DashboardHome.jsx",
                lineNumber: 445,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                children: charts.map((w)=>{
                    const series = w.konfigurasi?.series || [];
                    const total = w.konfigurasi?.tampilan === 'total';
                    const view = chartView[w.id] || (total ? 'grafik' : 'tabel');
                    const data = total ? totalData(w) : chartData(w);
                    const jumlahBatang = new Set(series.map((sr, i)=>sr.tumpuk || `#${i}`)).size // seri bertumpuk = 1 batang
                    ;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-base font-semibold",
                                        children: [
                                            w.judul,
                                            isAdmin && !total ? ' per UPT/Balai' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 462,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `p-1.5 ${view === 'grafik' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-700'}`,
                                                onClick: ()=>setChartView((v)=>({
                                                            ...v,
                                                            [w.id]: 'grafik'
                                                        })),
                                                title: "Tampilkan sebagai grafik",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                                    lineNumber: 470,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 464,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `p-1.5 ${view === 'tabel' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-700'}`,
                                                onClick: ()=>setChartView((v)=>({
                                                            ...v,
                                                            [w.id]: 'tabel'
                                                        })),
                                                title: "Tampilkan sebagai tabel angka",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__["Table2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                                    lineNumber: 478,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 472,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 463,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 461,
                                columnNumber: 17
                            }, this),
                            total && view === 'tabel' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-100 dark:divide-gray-800",
                                    children: data.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-2",
                                                    children: row.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                                    lineNumber: 487,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-2 text-right tabular-nums",
                                                    children: fmt(w.satuan, row.nilai)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                                    lineNumber: 488,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                            lineNumber: 486,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 484,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 483,
                                columnNumber: 19
                            }, this) : total ? // Total seluruh UPT: batang tegak, nama pilihan di sumbu bawah, jumlah di sumbu kiri
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 260
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: data,
                                        margin: {
                                            top: 20,
                                            right: 16,
                                            bottom: 4,
                                            left: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                vertical: false,
                                                stroke: "#E3E8EF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 498,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                tick: {
                                                    fontSize: 12,
                                                    fill: '#334155'
                                                },
                                                interval: 0,
                                                axisLine: false,
                                                tickLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 499,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: {
                                                    fontSize: 11,
                                                    fill: '#64748b'
                                                },
                                                tickFormatter: (v)=>compactNumber(w.satuan, v),
                                                allowDecimals: w.satuan === 'rupiah',
                                                axisLine: false,
                                                tickLine: false,
                                                width: 48
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 500,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                formatter: (v)=>[
                                                        fmt(w.satuan, v),
                                                        w.judul
                                                    ],
                                                cursor: {
                                                    fill: 'rgba(15, 82, 166, 0.06)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 501,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "nilai",
                                                radius: [
                                                    4,
                                                    4,
                                                    0,
                                                    0
                                                ],
                                                maxBarSize: 56,
                                                children: [
                                                    data.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: row.warna
                                                        }, i, false, {
                                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                                            lineNumber: 503,
                                                            columnNumber: 49
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                                                        dataKey: "nilai",
                                                        position: "top",
                                                        formatter: (v)=>fmt(w.satuan, v),
                                                        style: {
                                                            fontSize: 11,
                                                            fill: '#334155'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 502,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 497,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 496,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 495,
                                columnNumber: 19
                            }, this) : view === 'tabel' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "text-left text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200 dark:border-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 px-2",
                                                        children: "UPT/Balai"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                                        lineNumber: 514,
                                                        columnNumber: 27
                                                    }, this),
                                                    series.map((sr, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-2 px-2 text-right",
                                                            children: sr.label
                                                        }, i, false, {
                                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                                            lineNumber: 515,
                                                            columnNumber: 50
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 513,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                            lineNumber: 512,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-gray-100 dark:divide-gray-800",
                                            children: data.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 px-2",
                                                            children: row.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                                            lineNumber: 521,
                                                            columnNumber: 29
                                                        }, this),
                                                        series.map((sr, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-2 px-2 text-right tabular-nums",
                                                                children: fmt(w.satuan, row[sr.label])
                                                            }, j, false, {
                                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                                lineNumber: 522,
                                                                columnNumber: 52
                                                            }, this))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                                    lineNumber: 520,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DashboardHome.jsx",
                                            lineNumber: 518,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 511,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 510,
                                columnNumber: 19
                            }, this) : // Batang horizontal: nama UPT di sumbu kiri (terbaca utuh, tidak miring/bertumpuk); tinggi
                            // mengikuti jumlah UPT supaya UPT tidak berdesakan.
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: Math.max(160, data.length * (14 + jumlahBatang * 12) + 70)
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: data,
                                        layout: "vertical",
                                        margin: {
                                            top: 4,
                                            right: 16,
                                            bottom: 4,
                                            left: 4
                                        },
                                        barCategoryGap: "22%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                horizontal: false,
                                                stroke: "#E3E8EF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 534,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                type: "number",
                                                tick: {
                                                    fontSize: 11,
                                                    fill: '#64748b'
                                                },
                                                tickFormatter: (v)=>compactNumber(w.satuan, v),
                                                allowDecimals: w.satuan === 'rupiah',
                                                axisLine: false,
                                                tickLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 535,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                type: "category",
                                                dataKey: "name",
                                                width: 132,
                                                tick: {
                                                    fontSize: 11,
                                                    fill: '#334155'
                                                },
                                                interval: 0,
                                                axisLine: false,
                                                tickLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 536,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                formatter: (v)=>fmt(w.satuan, v),
                                                cursor: {
                                                    fill: 'rgba(15, 82, 166, 0.06)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 537,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                wrapperStyle: {
                                                    fontSize: 12
                                                },
                                                itemSorter: null
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DashboardHome.jsx",
                                                lineNumber: 538,
                                                columnNumber: 25
                                            }, this),
                                            series.map((sr, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: sr.label,
                                                    name: sr.label,
                                                    fill: sr.warna || '#1B5FA8',
                                                    stackId: sr.tumpuk || undefined,
                                                    radius: sr.tumpuk ? 0 : [
                                                        0,
                                                        4,
                                                        4,
                                                        0
                                                    ],
                                                    maxBarSize: 14
                                                }, i, false, {
                                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                                    lineNumber: 539,
                                                    columnNumber: 48
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DashboardHome.jsx",
                                        lineNumber: 533,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DashboardHome.jsx",
                                    lineNumber: 532,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/DashboardHome.jsx",
                                lineNumber: 531,
                                columnNumber: 19
                            }, this)
                        ]
                    }, w.id, true, {
                        fileName: "[project]/src/views/DashboardHome.jsx",
                        lineNumber: 460,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/views/DashboardHome.jsx",
                lineNumber: 452,
                columnNumber: 9
            }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/DashboardHome.jsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
_s(DashboardHome, "mMixEnq3ldVrxEqsnlwGp0tPtNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = DashboardHome;
var _c;
__turbopack_context__.k.register(_c, "DashboardHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_20a7rjh._.js.map