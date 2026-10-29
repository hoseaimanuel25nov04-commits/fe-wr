module.exports = [
"[project]/src/app/(portal)/kelola-jenis-data/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminOnly$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminOnly.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KelolaJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/admin/KelolaJenisData.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminOnly$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KelolaJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/(portal)/kelola-jenis-data/page.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(portal)/kelola-jenis-data/page.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/AdminOnly.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function AdminOnly({ children }) {
    const { isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAdmin) router.replace('/dashboard');
    }, [
        isAdmin,
        router
    ]);
    return isAdmin ? children : null;
}
}),
"[project]/src/components/Badge.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * components/Badge.jsx
 * Reusable badge component dengan 5 variasi visual
 */ __turbopack_context__.s([
    "default",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${classes[variant] || classes.neutral} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Badge.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/InfoCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * components/InfoCard.jsx
 * Wrapper kartu netral — bg-white border rounded-xl shadow-sm
 */ __turbopack_context__.s([
    "default",
    ()=>InfoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function InfoCard({ children, className = '', title, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `card p-6 ${className}`,
        children: [
            (title || action) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-base text-[#0B1830] dark:text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.jsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this),
                    action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/components/Modal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/Modal.jsx
 * Universal popup modal — overlay bg-black/50, kartu putih rounded-2xl
 * Dipakai untuk semua "klik kartu → lihat detail"
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
;
;
;
function Modal({ open, onClose, title, children, maxWidth = 'max-w-lg', footer }) {
    // Close on Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const handler = (e)=>{
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handler);
        return ()=>window.removeEventListener('keydown', handler);
    }, [
        open,
        onClose
    ]);
    // Lock body scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        open
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full ${maxWidth} mx-4 animate-scale-in flex flex-col max-h-[90vh]`,
            role: "dialog",
            "aria-modal": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-semibold text-lg text-gray-900 dark:text-white",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                            "aria-label": "Tutup",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modal.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 overflow-y-auto flex-1",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3 flex-shrink-0",
                    children: footer
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.jsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modal.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Modal.jsx",
        lineNumber: 28,
        columnNumber: 5
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
"[project]/src/lib/historisImport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "META",
    ()=>META,
    "autoMap",
    ()=>autoMap,
    "buildTemplateWorkbook",
    ()=>buildTemplateWorkbook,
    "metaIds",
    ()=>metaIds,
    "parseNumber",
    ()=>parseNumber,
    "parseTanggal",
    ()=>parseTanggal,
    "validateRows",
    ()=>validateRows
]);
/**
 * lib/historisImport.js
 * Impor DATA HISTORIS (Admin): template Excel, pemetaan kolom, validasi baris, dan penyusunan data siap simpan.
 * Modul ini murni (tanpa React/DOM) agar mudah diuji. Penulisan ke database dilakukan oleh halaman pemanggil.
 *
 *  - Mingguan  -> rekap_nilai  (kolom: UPT, Tahun, Bulan, Minggu, [Pelatihan Ke], + isian)
 *  - Bulanan rincian per nama -> data_entries (kolom: UPT, Tahun, Bulan, + isian)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$columnMatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/columnMatcher.js [app-ssr] (ecmascript)");
;
;
const norm = (s)=>String(s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const META = [
    {
        id: 'upt',
        label: 'UPT',
        alias: [
            'upt',
            'unit',
            'balai',
            'bppp',
            'upt balai',
            'unit pelaksana teknis',
            'nama upt',
            'unit organisasi',
            'unit kerja',
            'satker',
            'instansi'
        ]
    },
    {
        id: 'tahun',
        label: 'Tahun',
        alias: [
            'tahun',
            'year',
            'thn'
        ]
    },
    {
        id: 'bulan',
        label: 'Bulan',
        alias: [
            'bulan',
            'month',
            'bln'
        ]
    },
    {
        id: 'minggu',
        label: 'Minggu',
        alias: [
            'minggu',
            'minggu ke',
            'week',
            'mg'
        ]
    },
    {
        id: 'baris',
        label: 'Pelatihan Ke',
        alias: [
            'pelatihan ke',
            'pelatihan',
            'baris',
            'baris ke',
            'urutan',
            'no pelatihan'
        ]
    }
];
const metaIds = (weekly, multi)=>weekly ? multi ? [
        'upt',
        'tahun',
        'bulan',
        'minggu',
        'baris'
    ] : [
        'upt',
        'tahun',
        'bulan',
        'minggu'
    ] : [
        'upt',
        'tahun',
        'bulan'
    ];
// ─────────────── Template ───────────────
function sampleValue(f) {
    if (f.tipe === 'angka') return 1000;
    if (f.tipe === 'tanggal') return '2024-03-15';
    if (f.tipe === 'pilihan') return (f.opsi_pilihan || [])[0] || '';
    return 'contoh';
}
function buildTemplateWorkbook({ jenisData, fields, uptList, weekly, multi }) {
    const metaHeaders = metaIds(weekly, multi).map((id)=>META.find((m)=>m.id === id).label);
    const headers = [
        ...metaHeaders,
        ...fields.map((f)=>f.label)
    ];
    const meta = metaIds(weekly, multi);
    const example = [
        uptList[0]?.label || 'BPPP Contoh',
        2024,
        3,
        ...meta.includes('minggu') ? [
            2
        ] : [],
        ...meta.includes('baris') ? [
            1
        ] : [],
        ...fields.map(sampleValue)
    ];
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet([
        headers,
        example
    ]), 'Data');
    const petunjuk = [
        [
            `Template impor data historis — ${jenisData.judul}`
        ],
        [
            ''
        ],
        [
            '1. Isi sheet "Data": satu baris = satu ' + (weekly ? 'UPT pada satu minggu' + (multi ? ' (satu pelatihan; ulangi baris dengan "Pelatihan Ke" 2, 3, … bila ada lebih dari satu)' : '') : 'orang (peserta) pada satu bulan') + '.'
        ],
        [
            '2. Kolom UPT: isi nama UPT persis seperti sheet "Daftar UPT" (nama atau key).'
        ],
        [
            '3. Tahun: 4 digit. Bulan: 1–12.' + (weekly ? ' Minggu: 1–5 sesuai daftar periode kalender Senin–Minggu.' : '')
        ],
        [
            '4. Periode (tahun) harus sudah dibuat di menu Kelola Periode.'
        ],
        [
            '5. Kolom angka: isi angka saja (boleh 1.250.000 atau 1250000). Kolom tanggal: YYYY-MM-DD atau DD/MM/YYYY.'
        ],
        weekly ? [
            '6. Pagu, realisasi, dan jumlah SDM adalah angka KUMULATIF: isi total sampai minggu tersebut.'
        ] : [
            ''
        ],
        [
            '7. Mengimpor ulang baris yang sama memperbarui data yang sudah ada (tidak menggandakan).'
        ]
    ];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(petunjuk), 'Petunjuk');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet([
        [
            'Key',
            'Nama UPT'
        ],
        ...uptList.map((u)=>[
                u.key,
                u.label
            ])
    ]), 'Daftar UPT');
    return wb;
}
function autoMap(headers, fields, weekly, multi) {
    const allowed = metaIds(weekly, multi);
    const mapping = {};
    const used = new Set();
    for (const h of headers){
        const n = norm(h);
        const m = META.find((x)=>allowed.includes(x.id) && !used.has(x.id) && x.alias.includes(n));
        if (m) {
            mapping[h] = {
                kind: 'meta',
                id: m.id
            };
            used.add(m.id);
        }
    }
    const rest = headers.filter((h)=>!mapping[h]);
    const fm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$columnMatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchColumns"])(rest, fields);
    for (const h of rest)mapping[h] = fm[h] ? {
        kind: 'field',
        field: fm[h]
    } : null;
    return mapping;
}
function parseNumber(v) {
    if (v === null || v === undefined || v === '') return null;
    if (typeof v === 'number') return Number.isFinite(v) ? v : NaN;
    let s = String(v).trim().replace(/^rp\.?\s*/i, '').replace(/\s+/g, '');
    if (!s) return null;
    if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(s)) s = s.replace(/\./g, '').replace(',', '.');
    else if (/^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) s = s.replace(/,/g, '');
    else s = s.replace(',', '.');
    const n = Number(s);
    return Number.isFinite(n) ? n : NaN;
}
function parseTanggal(v) {
    if (v === null || v === undefined || v === '') return null;
    if (v instanceof Date) {
        if (Number.isNaN(v.getTime())) return NaN;
        const d = new Date(v.getTime() + 12 * 3600 * 1000) // tahan terhadap selisih zona waktu pembacaan Excel
        ;
        return d.toISOString().slice(0, 10);
    }
    const s = String(v).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(s) || /\ss\/d\s/i.test(s)) return s;
    const m = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(s);
    if (m) return `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
    return NaN;
}
const cellText = (v)=>v instanceof Date ? parseTanggal(v) : String(v).trim();
function validateRows({ rows, mapping, jenisData, fields, uptList, periods, weekly, multi, multiSupported, fixed = {}, deriveDateKey = null }) {
    const metaCol = {};
    const fieldCols = [];
    Object.entries(mapping).forEach(([h, m])=>{
        if (m?.kind === 'meta') metaCol[m.id] = h;
        else if (m?.kind === 'field') fieldCols.push({
            header: h,
            field: m.field
        });
    });
    // Nilai tetap (mis. seluruh berkas milik satu UPT / satu tahun) & bulan/tahun yang diturunkan dari kolom tanggal
    const dateCol = deriveDateKey ? fieldCols.find((c)=>c.field.field_key === deriveDateKey) : null;
    const need = weekly ? [
        'upt',
        'tahun',
        'bulan',
        'minggu'
    ] : [
        'upt',
        'tahun',
        'bulan'
    ];
    const missing = need.filter((id)=>{
        if (metaCol[id]) return false;
        if (id === 'upt') return !fixed.upt;
        if (id === 'tahun') return !fixed.tahun && !dateCol;
        if (id === 'bulan') return !fixed.bulan && !dateCol;
        return true;
    });
    const base = {
        errors: [],
        warnings: [],
        payloads: [],
        ringkas: {
            totalBaris: rows.length,
            valid: 0,
            perTahun: {},
            perUpt: {}
        }
    };
    if (missing.length) return {
        ...base,
        fatal: `Kolom wajib belum dipetakan: ${missing.map((id)=>META.find((m)=>m.id === id).label).join(', ')}.`
    };
    if (!fieldCols.length) return {
        ...base,
        fatal: 'Belum ada kolom isian yang dipetakan.'
    };
    const uptIndex = new Map();
    uptList.forEach((u)=>{
        uptIndex.set(norm(u.key), u);
        uptIndex.set(norm(u.label), u);
    });
    const findUpt = (raw)=>uptIndex.get(norm(raw)) || uptIndex.get(norm('BPPP ' + raw)) || null;
    const periodIndex = new Map();
    periods.forEach((p)=>{
        if (weekly && p.level === 'minggu') periodIndex.set(`${p.tahun}-${p.bulan}-${p.minggu_ke}`, p);
        if (!weekly && p.level === 'bulan') periodIndex.set(`${p.tahun}-${p.bulan}`, p);
    });
    const errors = base.errors;
    const warnCount = {};
    const seen = new Map();
    const { ringkas } = base;
    rows.forEach((r, idx)=>{
        const line = idx + 2 // baris Excel (baris 1 = header)
        ;
        const err = (pesan)=>errors.push({
                baris: line,
                pesan
            });
        const upt = metaCol.upt ? findUpt(r[metaCol.upt]) : fixed.upt;
        if (!upt) return err(`UPT "${r[metaCol.upt] ?? ''}" tidak dikenal (cocokkan dengan sheet "Daftar UPT")`);
        let dTahun = null, dBulan = null;
        if (!metaCol.tahun && !fixed.tahun || !metaCol.bulan && !fixed.bulan) {
            const dv = dateCol ? parseTanggal(r[dateCol.header]) : null;
            if (typeof dv !== 'string') return err(`Tanggal pada kolom "${dateCol?.field.label ?? ''}" kosong/tidak dikenali, sehingga bulan tidak dapat ditentukan`);
            dTahun = Number(dv.slice(0, 4));
            dBulan = Number(dv.slice(5, 7));
        }
        const tahun = metaCol.tahun ? Number(r[metaCol.tahun]) : fixed.tahun ?? dTahun;
        const bulan = metaCol.bulan ? Number(r[metaCol.bulan]) : fixed.bulan ?? dBulan;
        const minggu = weekly ? Number(r[metaCol.minggu]) : null;
        if (!Number.isInteger(tahun) || !Number.isInteger(bulan) || bulan < 1 || bulan > 12) return err(`Tahun/Bulan tidak valid ("${r[metaCol.tahun]}" / "${r[metaCol.bulan]}")`);
        if (weekly && (!Number.isInteger(minggu) || minggu < 1 || minggu > 5)) return err(`Minggu harus 1–5 sesuai kalender (diisi "${r[metaCol.minggu]}")`);
        const period = periodIndex.get(weekly ? `${tahun}-${bulan}-${minggu}` : `${tahun}-${bulan}`);
        if (!period) return err(`Periode ${weekly ? `Minggu ke-${minggu} ` : ''}${bulan}/${tahun} belum ada — buat tahun ${tahun} di menu Kelola Periode`);
        let baris = 1;
        if (weekly && metaCol.baris) {
            const b = r[metaCol.baris];
            baris = b === null || b === undefined || b === '' ? 1 : Number(b);
            if (!Number.isInteger(baris) || baris < 1) return err(`"Pelatihan Ke" tidak valid ("${b}")`);
        }
        if (weekly && baris > 1 && !multiSupported) return err('Beberapa pelatihan per minggu belum aktif di database (jalankan migrasi_03) — baris ini dilewati');
        if (weekly && baris > 1 && !jenisData.multi_baris) return err(`Jenis data ini tidak mengizinkan lebih dari 1 pelatihan per minggu ("Pelatihan Ke" = ${baris})`);
        // Nilai isian
        const values = {};
        let rowBad = false;
        for (const { header, field } of fieldCols){
            const raw = r[header];
            if (raw === null || raw === undefined || typeof raw === 'string' && raw.trim() === '') continue;
            let val;
            if (field.tipe === 'angka') val = parseNumber(raw);
            else if (field.tipe === 'tanggal') val = parseTanggal(raw);
            else val = cellText(raw);
            if (typeof val === 'number' && Number.isNaN(val)) {
                err(`Kolom "${field.label}": "${raw}" bukan angka`);
                rowBad = true;
                continue;
            }
            if (field.tipe === 'tanggal' && Number.isNaN(val)) {
                err(`Kolom "${field.label}": tanggal "${raw}" tidak dikenali (pakai YYYY-MM-DD atau DD/MM/YYYY)`);
                rowBad = true;
                continue;
            }
            if (val !== null) values[field.field_key] = val;
        }
        if (rowBad) return;
        fields.filter((f)=>f.wajib && values[f.field_key] === undefined).forEach((f)=>{
            warnCount[`Kolom wajib "${f.label}" kosong`] = (warnCount[`Kolom wajib "${f.label}" kosong`] || 0) + 1;
        });
        if (!Object.keys(values).length) return err('Semua kolom isian kosong');
        // Duplikat dalam berkas yang sama
        const dupKey = weekly ? `${upt.key}|${period.id}|${baris}` : values.nik ? `${upt.key}|${period.id}|${values.nik}` : null;
        if (dupKey) {
            if (seen.has(dupKey)) return err(`Duplikat dengan baris ${seen.get(dupKey)} (${weekly ? 'UPT + minggu + pelatihan yang sama' : 'NIK yang sama pada UPT & bulan yang sama'})`);
            seen.set(dupKey, line);
        } else if (!weekly) {
            warnCount['Baris tanpa NIK akan terduplikasi jika berkas yang sama diimpor ulang'] = (warnCount['Baris tanpa NIK akan terduplikasi jika berkas yang sama diimpor ulang'] || 0) + 1;
        }
        // Siap simpan
        if (weekly) {
            for (const f of fields){
                const v = values[f.field_key];
                if (v === undefined) continue;
                base.payloads.push({
                    jenis_data_id: jenisData.id,
                    upt_key: upt.key,
                    period_id: period.id,
                    ...multiSupported ? {
                        baris_ke: baris
                    } : {},
                    field_key: f.field_key,
                    value: f.tipe === 'angka' ? v : null,
                    value_text: String(v)
                });
            }
        } else {
            base.payloads.push({
                jenis_data_id: jenisData.id,
                upt_key: upt.key,
                period_id: period.id,
                nama: values.nama || values.nama_pelatihan || null,
                nik: values.nik ? String(values.nik) : null,
                data_json: values,
                data_ekstra: {}
            });
        }
        ringkas.valid++;
        ringkas.perTahun[tahun] = (ringkas.perTahun[tahun] || 0) + 1;
        ringkas.perUpt[upt.label] = (ringkas.perUpt[upt.label] || 0) + 1;
    });
    base.warnings = Object.entries(warnCount).map(([pesan, n])=>({
            baris: 0,
            pesan: `${pesan} (${n} baris)`
        }));
    return base;
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
"[project]/src/views/admin/BuatJenisDataExcel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuatJenisDataExcelModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/admin/BuatJenisDataExcel.jsx
 * Admin: buat Jenis Data BARU (bulanan, per-nama) langsung dari sebuah berkas Excel.
 * Alur: unggah -> sistem menebak kolom identitas (UPT/Tahun/Bulan) & tipe tiap kolom isian (teks/angka/
 * tanggal/pilihan) -> Admin meninjau & mengoreksi -> konfirmasi -> Jenis Data + kolom dibuat, lalu seluruh
 * baris berkas langsung diimpor sebagai data pertamanya.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/excelExport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$historisImport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/historisImport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
;
;
;
;
;
;
;
;
const TIPE_OPTIONS = [
    {
        value: 'teks',
        label: 'Teks Singkat'
    },
    {
        value: 'teks_panjang',
        label: 'Teks Panjang / Narasi'
    },
    {
        value: 'angka',
        label: 'Angka'
    },
    {
        value: 'tanggal',
        label: 'Tanggal'
    },
    {
        value: 'pilihan',
        label: 'Pilihan (Dropdown)'
    }
];
const normalize = (s)=>String(s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const slugify = (s)=>String(s ?? '').toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
/** Cari header yang cocok dengan kolom identitas UPT/Tahun/Bulan lewat alias yang sama dengan Impor Historis. */ function detectMeta(headers) {
    const out = {};
    for (const h of headers){
        const n = normalize(h);
        const m = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$historisImport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["META"].find((x)=>[
                'upt',
                'tahun',
                'bulan'
            ].includes(x.id) && !out[x.id] && x.alias.includes(n));
        if (m) out[m.id] = h;
    }
    return out;
}
/** Tebak tipe kolom dari isi selnya. Cuma tebakan awal — Admin selalu bisa mengoreksi di layar tinjauan. */ function inferField(header, values) {
    const filled = values.filter((v)=>v !== null && v !== undefined && String(v).trim() !== '');
    const idLike = /\b(nik|nip|no\.?|nomor|telepon|hp|kode|kusuka|npwp)\b/i.test(header);
    let tipe = 'teks';
    if (filled.length) {
        const dateCount = filled.filter((v)=>typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$historisImport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseTanggal"])(v) === 'string').length;
        const numCount = filled.filter((v)=>typeof v === 'number' || typeof v === 'string' && /^-?\d+([.,]\d+)?$/.test(v.trim())).length;
        const uniq = new Set(filled.map((v)=>String(v).trim().toLowerCase()));
        if (dateCount / filled.length > 0.7) tipe = 'tanggal';
        else if (!idLike && numCount / filled.length > 0.8) tipe = 'angka';
        else if (uniq.size > 1 && uniq.size <= 8 && uniq.size < filled.length) tipe = 'pilihan';
    }
    const opsi = tipe === 'pilihan' ? [
        ...new Set(filled.map((v)=>String(v).trim()))
    ].filter(Boolean).slice(0, 30) : [];
    return {
        header,
        label: header,
        field_key: slugify(header),
        tipe,
        opsi_text: opsi.join(', '),
        wajib: false,
        is_identitas: idLike,
        skip: false
    };
}
function BuatJenisDataExcelModal({ open, onClose, onCreated, uptList = [], periods = [] }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('upload') // 'upload' | 'review' | 'importing' | 'done'
    ;
    const [parsed, setParsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // { headers, rows }
    ;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [judul, setJudul] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [deskripsi, setDeskripsi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [kumulatif, setKumulatif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [publik, setPublik] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [metaMap, setMetaMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        upt: '',
        tahun: '',
        bulan: ''
    });
    const [fixedUpt, setFixedUpt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fixedTahun, setFixedTahun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fixedBulan, setFixedBulan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dataFields, setDataFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const bulanPeriods = periods.filter((p)=>p.level === 'bulan');
    const tahunOptions = [
        ...new Set(bulanPeriods.map((p)=>Number(p.tahun)))
    ].sort((a, b)=>a - b);
    function reset() {
        setStep('upload');
        setParsed(null);
        setError('');
        setJudul('');
        setDeskripsi('');
        setKumulatif(false);
        setPublik(false);
        setMetaMap({
            upt: '',
            tahun: '',
            bulan: ''
        });
        setFixedUpt('');
        setFixedTahun('');
        setFixedBulan('');
        setDataFields([]);
        setResult(null);
        setProgress(null);
    }
    function handleClose() {
        reset();
        onClose?.();
    }
    async function onFile(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        setError('');
        try {
            const p = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readExcelFile"])(file);
            if (!p.rows.length) throw new Error('Berkas kosong atau baris pertama bukan header.');
            const meta = detectMeta(p.headers);
            const dataHeaders = p.headers.filter((h)=>!Object.values(meta).includes(h));
            setDataFields(dataHeaders.map((h)=>inferField(h, p.rows.map((r)=>r[h]))));
            setMetaMap({
                upt: meta.upt || '',
                tahun: meta.tahun || '',
                bulan: meta.bulan || ''
            });
            setParsed(p);
            if (!judul) setJudul(file.name.replace(/\.(xlsx|xls|csv)$/i, '').replace(/[_-]+/g, ' ').trim());
            setStep('review');
        } catch (err) {
            setError(err.message || 'Gagal membaca berkas');
        }
        e.target.value = '';
    }
    function updateField(idx, patch) {
        setDataFields((list)=>list.map((f, i)=>i === idx ? {
                    ...f,
                    ...patch
                } : f));
    }
    const activeFields = dataFields.filter((f)=>!f.skip);
    const missingMetaUpt = !metaMap.upt && !fixedUpt;
    const missingMetaTahun = !metaMap.tahun && !fixedTahun;
    const missingMetaBulan = !metaMap.bulan && !fixedBulan;
    const dupKeys = (()=>{
        const seen = new Map();
        activeFields.forEach((f)=>seen.set(f.field_key, (seen.get(f.field_key) || 0) + 1));
        return [
            ...seen.entries()
        ].filter(([, n])=>n > 1).map(([k])=>k);
    })();
    const canSubmit = judul.trim() && activeFields.length > 0 && activeFields.every((f)=>f.label.trim() && f.field_key.trim()) && !missingMetaUpt && !missingMetaTahun && !missingMetaBulan && !dupKeys.length;
    async function handleSubmit() {
        setStep('importing');
        setError('');
        try {
            // 1) Buat Jenis Data
            const { data: jd, error: jdErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').insert({
                key: slugify(judul) || `jenis_data_${Date.now()}`,
                judul: judul.trim(),
                deskripsi: deskripsi.trim() || null,
                level_utama: 'bulan',
                mode_bulanan: 'rincian',
                butuh_input_bulanan: false,
                pasangan_mingguan_id: null,
                publik_boleh_lihat: publik,
                multi_baris: false,
                kumulatif_bulanan: kumulatif,
                aktif: true
            }).select().single();
            if (jdErr) throw jdErr;
            // 2) Buat kolom-kolomnya
            const createdFields = [];
            let urutan = 1;
            for (const f of activeFields){
                const { data: fd, error: fdErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').insert({
                    jenis_data_id: jd.id,
                    level: 'bulan',
                    field_key: f.field_key,
                    label: f.label.trim(),
                    tipe: f.tipe,
                    wajib: f.wajib,
                    is_identitas: f.is_identitas,
                    opsi_pilihan: f.tipe === 'pilihan' ? f.opsi_text.split(',').map((s)=>s.trim()).filter(Boolean) : null,
                    agregasi: 'sum',
                    urutan: urutan++
                }).select().single();
                if (fdErr) throw fdErr;
                createdFields.push(fd);
            }
            // 3) Petakan baris berkas ke kolom yang baru dibuat, lalu validasi (sama seperti Impor Data Historis)
            const mapping = {};
            if (metaMap.upt) mapping[metaMap.upt] = {
                kind: 'meta',
                id: 'upt'
            };
            if (metaMap.tahun) mapping[metaMap.tahun] = {
                kind: 'meta',
                id: 'tahun'
            };
            if (metaMap.bulan) mapping[metaMap.bulan] = {
                kind: 'meta',
                id: 'bulan'
            };
            activeFields.forEach((f)=>{
                mapping[f.header] = {
                    kind: 'field',
                    field: createdFields.find((cf)=>cf.field_key === f.field_key)
                };
            });
            const fixedObj = {
                upt: fixedUpt ? uptList.find((u)=>u.key === fixedUpt) : null,
                tahun: fixedTahun ? Number(fixedTahun) : null,
                bulan: fixedBulan ? Number(fixedBulan) : null
            };
            const validated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$historisImport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateRows"])({
                rows: parsed.rows,
                mapping,
                jenisData: jd,
                fields: createdFields,
                uptList,
                periods,
                weekly: false,
                multi: false,
                multiSupported: false,
                fixed: fixedObj
            });
            if (validated.fatal) throw new Error(validated.fatal);
            // 4) Impor per-batch 100 baris
            const items = validated.payloads;
            setProgress({
                done: 0,
                total: items.length
            });
            for(let i = 0; i < items.length; i += 100){
                const { error: impErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').upsert(items.slice(i, i + 100), {
                    onConflict: 'jenis_data_id,upt_key,period_id,nik'
                });
                if (impErr) throw impErr;
                setProgress({
                    done: Math.min(i + 100, items.length),
                    total: items.length
                });
            }
            setResult({
                jd,
                fieldCount: createdFields.length,
                ...validated
            });
            setStep('done');
            onCreated?.(jd);
        } catch (err) {
            setError(err.message || 'Gagal membuat Jenis Data');
            setStep('review');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: step === 'importing' ? ()=>{} : handleClose,
        title: "Buat Jenis Data dari Excel",
        maxWidth: "max-w-3xl",
        children: [
            step === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 dark:text-gray-400",
                        children: "Unggah contoh berkas Excel (baris pertama = judul kolom). Sistem akan menebak mana kolom UPT/Tahun/Bulan dan tipe tiap kolom isian (teks/angka/tanggal/pilihan) — Anda bisa mengoreksi semuanya sebelum dibuat."
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                size: 28,
                                className: "text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                children: "Klik untuk pilih berkas Excel"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400",
                                children: ".xlsx, .xls, atau .csv"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: ".xlsx,.xls,.csv",
                                className: "hidden",
                                onChange: onFile
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-rose-600 dark:text-rose-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 221,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                lineNumber: 210,
                columnNumber: 9
            }, this),
            step === 'review' && parsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5 max-h-[70vh] overflow-y-auto pr-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label text-xs",
                                        children: "Judul Jenis Data *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: judul,
                                        onChange: (e)=>setJudul(e.target.value),
                                        className: "form-input w-full",
                                        placeholder: "mis. Data Peserta Sertifikasi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label text-xs",
                                        children: "Deskripsi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: deskripsi,
                                        onChange: (e)=>setDeskripsi(e.target.value),
                                        className: "form-input w-full",
                                        placeholder: "Opsional"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 text-xs cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: publik,
                                        onChange: (e)=>setPublik(e.target.checked),
                                        className: "w-4 h-4 rounded text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    "Tampilkan rekap ke Publik"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 text-xs cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: kumulatif,
                                        onChange: (e)=>setKumulatif(e.target.checked),
                                        className: "w-4 h-4 rounded text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    "Data kumulatif (bulan terbaru menggantikan sebelumnya)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-100 dark:border-gray-800 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2",
                                children: "Kolom Identitas Baris (UPT · Tahun · Bulan)"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                children: [
                                    {
                                        id: 'upt',
                                        label: 'Kolom UPT',
                                        fixed: fixedUpt,
                                        setFixed: setFixedUpt,
                                        fixedOptions: uptList.map((u)=>[
                                                u.key,
                                                u.label
                                            ])
                                    },
                                    {
                                        id: 'tahun',
                                        label: 'Kolom Tahun',
                                        fixed: fixedTahun,
                                        setFixed: setFixedTahun,
                                        fixedOptions: tahunOptions.map((y)=>[
                                                String(y),
                                                String(y)
                                            ])
                                    },
                                    {
                                        id: 'bulan',
                                        label: 'Kolom Bulan',
                                        fixed: fixedBulan,
                                        setFixed: setFixedBulan,
                                        fixedOptions: Array.from({
                                            length: 12
                                        }, (_, i)=>[
                                                String(i + 1),
                                                String(i + 1)
                                            ])
                                    }
                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label text-xs",
                                                children: m.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: metaMap[m.id],
                                                onChange: (e)=>setMetaMap((prev)=>({
                                                            ...prev,
                                                            [m.id]: e.target.value
                                                        })),
                                                className: "form-select w-full text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "- Tidak ada di berkas -"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this),
                                                    parsed.headers.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: h,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                            lineNumber: 265,
                                                            columnNumber: 46
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this),
                                            !metaMap[m.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: m.fixed,
                                                onChange: (e)=>m.setFixed(e.target.value),
                                                className: "form-select w-full text-sm mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "- Pilih nilai tetap -"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 269,
                                                        columnNumber: 23
                                                    }, this),
                                                    m.fixedOptions.map(([v, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: v,
                                                            children: l
                                                        }, v, false, {
                                                            fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                            lineNumber: 270,
                                                            columnNumber: 55
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-400 mt-1.5",
                                children: 'Kalau berkas tidak punya kolom UPT/Tahun/Bulan tersendiri, isi "nilai tetap" (berarti seluruh baris berkas ini milik satu UPT/bulan yang sama).'
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-100 dark:border-gray-800 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2",
                                children: [
                                    "Kolom Data (",
                                    activeFields.length,
                                    " dari ",
                                    dataFields.length,
                                    " kolom dipakai)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: dataFields.map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `border rounded-lg p-3 ${f.skip ? 'opacity-40 border-gray-200 dark:border-gray-800' : 'border-gray-200 dark:border-gray-700'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-mono text-gray-400 truncate",
                                                        children: [
                                                            'Kolom berkas: "',
                                                            f.header,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-1.5 text-[11px] cursor-pointer flex-shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: f.skip,
                                                                onChange: (e)=>updateField(idx, {
                                                                        skip: e.target.checked
                                                                    }),
                                                                className: "w-3.5 h-3.5 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 291,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Lewati kolom ini"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this),
                                            !f.skip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 sm:grid-cols-4 gap-2 items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] text-gray-400",
                                                                children: "Label"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 298,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: f.label,
                                                                onChange: (e)=>updateField(idx, {
                                                                        label: e.target.value
                                                                    }),
                                                                className: "form-input text-xs w-full py-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 299,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 297,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] text-gray-400",
                                                                children: "Field Key"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 302,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: f.field_key,
                                                                onChange: (e)=>updateField(idx, {
                                                                        field_key: slugify(e.target.value)
                                                                    }),
                                                                className: "form-input text-xs w-full py-1 font-mono"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 303,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] text-gray-400",
                                                                children: "Tipe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 306,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: f.tipe,
                                                                onChange: (e)=>updateField(idx, {
                                                                        tipe: e.target.value
                                                                    }),
                                                                className: "form-select text-xs w-full py-1",
                                                                children: TIPE_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: o.value,
                                                                        children: o.label
                                                                    }, o.value, false, {
                                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 50
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 307,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-end gap-2 pb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-1 text-[10px] cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: f.wajib,
                                                                        onChange: (e)=>updateField(idx, {
                                                                                wajib: e.target.checked
                                                                            }),
                                                                        className: "w-3.5 h-3.5 rounded"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Wajib"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 312,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-1 text-[10px] cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: f.is_identitas,
                                                                        onChange: (e)=>updateField(idx, {
                                                                                is_identitas: e.target.checked
                                                                            }),
                                                                        className: "w-3.5 h-3.5 rounded"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                        lineNumber: 317,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Identitas"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 316,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 311,
                                                        columnNumber: 23
                                                    }, this),
                                                    f.tipe === 'pilihan' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2 sm:col-span-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] text-gray-400",
                                                                children: "Opsi (dipisah koma)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 323,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: f.opsi_text,
                                                                onChange: (e)=>updateField(idx, {
                                                                        opsi_text: e.target.value
                                                                    }),
                                                                className: "form-input text-xs w-full py-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                                lineNumber: 324,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                        lineNumber: 322,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                                lineNumber: 296,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, f.header, true, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this),
                    dupKeys.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 335,
                                columnNumber: 95
                            }, this),
                            " Field Key ganda: ",
                            dupKeys.join(', '),
                            " — ubah supaya unik."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 335,
                        columnNumber: 13
                    }, this),
                    (missingMetaUpt || missingMetaTahun || missingMetaBulan) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 338,
                                columnNumber: 97
                            }, this),
                            " Lengkapi kolom/nilai tetap untuk: ",
                            [
                                missingMetaUpt && 'UPT',
                                missingMetaTahun && 'Tahun',
                                missingMetaBulan && 'Bulan'
                            ].filter(Boolean).join(', '),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 338,
                        columnNumber: 13
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-rose-600 dark:text-rose-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 340,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between pt-2 border-t border-gray-100 dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setStep('upload'),
                                className: "btn-secondary text-sm",
                                children: "Ganti Berkas"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleSubmit,
                                disabled: !canSubmit,
                                className: "btn-primary text-sm disabled:opacity-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this),
                                    " Buat Jenis Data & Impor ",
                                    parsed.rows.length,
                                    " Baris"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 342,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                lineNumber: 226,
                columnNumber: 9
            }, this),
            step === 'importing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-12 gap-3 text-sm text-gray-500 dark:text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        size: 28,
                        className: "animate-spin text-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Membuat Jenis Data & kolom..."
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        children: [
                            "Mengimpor ",
                            progress.done,
                            " dari ",
                            progress.total,
                            " baris..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 355,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                lineNumber: 352,
                columnNumber: 9
            }, this),
            step === 'done' && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 22,
                                className: "flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: [
                                            '"',
                                            result.jd.judul,
                                            '" berhasil dibuat dengan ',
                                            result.fieldCount,
                                            " kolom."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-0.5",
                                        children: [
                                            result.payloads.length,
                                            " baris berhasil diimpor sebagai data pertamanya."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this),
                    result.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-400 max-h-40 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold mb-1 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 370,
                                        columnNumber: 75
                                    }, this),
                                    " ",
                                    result.errors.length,
                                    " baris dilewati karena bermasalah:"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 370,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc list-inside space-y-0.5",
                                children: result.errors.slice(0, 20).map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Baris ",
                                            e.baris,
                                            ": ",
                                            e.pesan
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                        lineNumber: 372,
                                        columnNumber: 59
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 371,
                                columnNumber: 15
                            }, this),
                            result.errors.length > 20 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: [
                                    "...dan ",
                                    result.errors.length - 20,
                                    " lainnya."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                                lineNumber: 374,
                                columnNumber: 45
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 369,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end pt-2 border-t border-gray-100 dark:border-gray-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleClose,
                            className: "btn-primary text-sm",
                            children: "Selesai"
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                            lineNumber: 378,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
                lineNumber: 360,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/admin/BuatJenisDataExcel.jsx",
        lineNumber: 208,
        columnNumber: 5
    }, this), document.body);
}
}),
"[project]/src/views/admin/KelolaJenisData.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KelolaJenisData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/admin/KelolaJenisData.jsx
 * Admin: CRUD Jenis Data + Relasi Pasangan + Form Builder Fleksibel
 * Admin bisa bebas membuat kolom teks, angka, tanggal, narasi, dan pilihan (custom/E-Laut)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agregasi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/peranRekap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InfoCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$BuatJenisDataExcel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/admin/BuatJenisDataExcel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/admin/KolomJenisData.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.mjs [app-ssr] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2d$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeLock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe-lock.mjs [app-ssr] (ecmascript) <export default as GlobeLock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/toggle-left.mjs [app-ssr] (ecmascript) <export default as ToggleLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/toggle-right.mjs [app-ssr] (ecmascript) <export default as ToggleRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.mjs [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.mjs [app-ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.mjs [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sigma.mjs [app-ssr] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
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
;
;
const MODE_LABEL = {
    rincian: 'Per nama',
    agregasi: 'Rekap angka saja',
    upload_file: 'Unggah berkas (lama)'
};
const modeLabel = (jd)=>MODE_LABEL[jd?.mode_bulanan] || 'Per nama';
function KelolaJenisData() {
    const { profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [jenisDataList, setJenisDataList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeLevel, setActiveLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('bulan');
    const [fields, setFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fieldLoading, setFieldLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uptList, setUptList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [periods, setPeriods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [excelWizardOpen, setExcelWizardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modals
    const [createModal, setCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editJdModal, setEditJdModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addFieldModal, setAddFieldModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingField, setEditingField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form states
    const [jdForm, setJdForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        judul: '',
        deskripsi: '',
        level_utama: 'minggu',
        mode_bulanan: 'rincian',
        butuh_input_bulanan: false,
        pasangan_mingguan_id: '',
        publik_boleh_lihat: false,
        multi_baris: false,
        kumulatif_bulanan: false
    });
    const [fieldForm, setFieldForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        label: '',
        field_key: '',
        tipe: 'teks',
        wajib: false,
        is_identitas: false,
        opsi_text: '',
        agregasi: 'sum',
        opsi_bersyarat_enabled: false,
        depends_on: '',
        bersyarat_map: {},
        peran_rekap: null,
        peranDisentuh: false
    });
    const [peranRekapAktif, setPeranRekapAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false) // kolom peran_rekap sudah ada (migrasi_16)
    ;
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // { type: 'success' | 'error', message }
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!toast) return;
        const t = setTimeout(()=>setToast(null), 3500);
        return ()=>clearTimeout(t);
    }, [
        toast
    ]);
    function showToast(message, type = 'success') {
        setToast({
            type,
            message
        });
    }
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerSensor"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortableKeyboardCoordinates"]
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadJenisData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeatures"])().then((f)=>setPeranRekapAktif(!!f.peranRekap));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('upt_list').select('*').eq('aktif', true).order('label').then(({ data })=>setUptList(data || []));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('periods').select('*').then(({ data })=>setPeriods(data || []));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selected) {
            loadFields();
        }
    }, [
        selected?.id,
        activeLevel
    ]);
    async function loadJenisData() {
        setLoading(true);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').order('created_at');
        setJenisDataList(data || []);
        setLoading(false);
    }
    async function loadFields() {
        setFieldLoading(true);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').eq('jenis_data_id', selected.id).eq('level', activeLevel).order('urutan');
        setFields(data || []);
        setFieldLoading(false);
    }
    function handleSelectJd(jd) {
        setSelected(jd);
        setActiveLevel(jd.level_utama || 'minggu');
    }
    async function saveJenisData(e) {
        e.preventDefault();
        if (jdForm.level_utama === 'bulan' && jdForm.mode_bulanan === 'agregasi' && !jdForm.pasangan_mingguan_id) {
            showToast('Rekap angka saja wajib memilih Pasangan Jenis Data Mingguan.', 'error');
            return;
        }
        setSaving(true);
        try {
            const payload = {
                judul: jdForm.judul,
                deskripsi: jdForm.deskripsi,
                level_utama: jdForm.level_utama,
                mode_bulanan: jdForm.level_utama === 'bulan' ? jdForm.mode_bulanan || 'rincian' : null,
                butuh_input_bulanan: jdForm.level_utama === 'bulan' ? true : jdForm.butuh_input_bulanan,
                pasangan_mingguan_id: jdForm.pasangan_mingguan_id || null,
                publik_boleh_lihat: jdForm.publik_boleh_lihat,
                multi_baris: jdForm.level_utama === 'minggu' && !!jdForm.multi_baris,
                kumulatif_bulanan: jdForm.level_utama === 'bulan' && jdForm.mode_bulanan === 'rincian' && !!jdForm.kumulatif_bulanan,
                aktif: true,
                dibuat_oleh: profile?.id
            };
            if (editJdModal && selected) {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').update(payload).eq('id', selected.id);
                if (error) throw error;
                setSelected({
                    ...selected,
                    ...payload
                });
                setEditJdModal(false);
                showToast(`Pengaturan "${jdForm.judul}" berhasil diperbarui!`);
            } else {
                // key hanya ditentukan saat membuat baru — mengedit judul TIDAK mengubah key (identitas internal stabil).
                const key = jdForm.judul.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').insert({
                    ...payload,
                    key
                }).select().single();
                if (error) throw error;
                if (data) {
                    setSelected(data);
                    setActiveLevel(data.level_utama);
                }
                setCreateModal(false);
                showToast(`Jenis Data baru "${jdForm.judul}" berhasil ditambahkan!`);
            }
            await loadJenisData();
            window.dispatchEvent(new Event(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JENIS_DATA_EVENT"]));
        } catch (err) {
            console.error('Error saveJenisData:', err);
            showToast(err.message || 'Gagal menyimpan Jenis Data', 'error');
        } finally{
            setSaving(false);
        }
    }
    async function saveField(e) {
        e.preventDefault();
        setSaving(true);
        try {
            const useBersyarat = fieldForm.tipe === 'pilihan' && fieldForm.opsi_bersyarat_enabled;
            if (useBersyarat && !fieldForm.depends_on) {
                showToast('Pilih kolom yang menentukan opsi bersyarat.', 'error');
                setSaving(false);
                return;
            }
            const opsi = !useBersyarat && fieldForm.opsi_text ? fieldForm.opsi_text.split(',').map((s)=>s.trim()).filter(Boolean) : null;
            const opsiBersyarat = useBersyarat ? {
                depends_on: fieldForm.depends_on,
                options: Object.fromEntries(Object.entries(fieldForm.bersyarat_map || {}).map(([k, v])=>[
                        k,
                        String(v || '').split(',').map((s)=>s.trim()).filter(Boolean)
                    ]))
            } : null;
            const payload = {
                jenis_data_id: selected.id,
                level: activeLevel,
                field_key: fieldForm.field_key || fieldForm.label.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, ''),
                label: fieldForm.label,
                tipe: fieldForm.tipe,
                wajib: fieldForm.wajib,
                is_identitas: fieldForm.is_identitas,
                opsi_pilihan: opsi,
                opsi_bersyarat: opsiBersyarat,
                agregasi: fieldForm.tipe === 'angka' ? fieldForm.agregasi : 'sum',
                // Peran di rekap hanya dipakai kolom level minggu (rekap_nilai); level bulan dibiarkan apa adanya.
                ...peranRekapAktif && activeLevel === 'minggu' ? {
                    peran_rekap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peranUntukTipe"])(fieldForm.tipe).includes(fieldForm.peran_rekap) ? fieldForm.peran_rekap : null
                } : {}
            };
            if (editingField) {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').update(payload).eq('id', editingField.id);
                if (error) throw error;
                showToast(`Kolom "${fieldForm.label}" berhasil diperbarui!`);
            } else {
                const maxUrutan = Math.max(0, ...fields.map((f)=>f.urutan)) + 1;
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').insert({
                    ...payload,
                    urutan: maxUrutan,
                    dibuat_oleh: profile?.id
                });
                if (error) throw error;
                showToast(`Kolom baru "${fieldForm.label}" berhasil ditambahkan!`);
            }
            setEditingField(null);
            setAddFieldModal(false);
            loadFields();
        } catch (err) {
            console.error('Error saveField:', err);
            showToast(err.message || 'Gagal menyimpan kolom', 'error');
        } finally{
            setSaving(false);
        }
    }
    async function toggleField(field) {
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').update({
                aktif: !field.aktif
            }).eq('id', field.id);
            if (error) throw error;
            showToast(`Kolom "${field.label}" ${!field.aktif ? 'diaktifkan' : 'dinonaktifkan'}`);
            loadFields();
        } catch (err) {
            showToast(err.message || 'Gagal memperbarui status kolom', 'error');
        }
    }
    async function deleteField(field) {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(`Hapus kolom "${field.label}"? Kolom ini tidak akan ditampilkan lagi.`)) return;
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').delete().eq('id', field.id);
            if (error) throw error;
            showToast(`Kolom "${field.label}" berhasil dihapus`);
            loadFields();
        } catch (err) {
            showToast(err.message || 'Gagal menghapus kolom', 'error');
        }
    }
    async function togglePublik(jd) {
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').update({
                publik_boleh_lihat: !jd.publik_boleh_lihat
            }).eq('id', jd.id);
            if (error) throw error;
            const updated = {
                ...jd,
                publik_boleh_lihat: !jd.publik_boleh_lihat
            };
            setJenisDataList((prev)=>prev.map((j)=>j.id === jd.id ? updated : j));
            if (selected?.id === jd.id) setSelected(updated);
            showToast(`Akses publik untuk "${jd.judul}" ${!jd.publik_boleh_lihat ? 'diizinkan' : 'ditutup'}`);
        } catch (err) {
            showToast(err.message || 'Gagal mengubah akses publik', 'error');
        }
    }
    async function toggleAktif(jd) {
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').update({
                aktif: !jd.aktif
            }).eq('id', jd.id);
            if (error) throw error;
            showToast(`Jenis Data "${jd.judul}" ${!jd.aktif ? 'diaktifkan' : 'dinonaktifkan'}`);
            await loadJenisData();
            window.dispatchEvent(new Event(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JENIS_DATA_EVENT"]));
        } catch (err) {
            showToast(err.message || 'Gagal mengubah status', 'error');
        }
    }
    async function deleteJenisData(jd) {
        if (!jd) return;
        const confirmMessage = `Apakah Anda yakin ingin menghapus Jenis Data "${jd.judul}" secara permanen?\n\nSemua definisi kolom dan data terkait jenis data ini akan dihapus dari sistem.`;
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(confirmMessage)) return;
        try {
            setLoading(true);
            // Hapus data anak terlebih dahulu untuk mencegah error foreign key
            await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').delete().eq('jenis_data_id', jd.id),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').delete().eq('jenis_data_id', jd.id),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').delete().eq('jenis_data_id', jd.id),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dokumen_upload').delete().eq('jenis_data_id', jd.id)
            ]);
            // Hapus record utama jenis_data
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').delete().eq('id', jd.id);
            if (error) throw error;
            if (selected?.id === jd.id) {
                setSelected(null);
            }
            await loadJenisData();
            window.dispatchEvent(new Event(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JENIS_DATA_EVENT"]));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyDihapus"])(`Jenis data "${jd.judul}" beserta kolom dan datanya`);
        } catch (err) {
            console.error('Error deleteJenisData:', err);
            showToast(err.message || 'Gagal menghapus Jenis Data', 'error');
        } finally{
            setLoading(false);
        }
    }
    async function handleDragEnd(event) {
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const oldIndex = fields.findIndex((f)=>f.id === active.id);
        const newIndex = fields.findIndex((f)=>f.id === over.id);
        const reordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayMove"])(fields, oldIndex, newIndex);
        setFields(reordered);
        for(let i = 0; i < reordered.length; i++){
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').update({
                urutan: i + 1
            }).eq('id', reordered[i].id);
        }
    }
    function openEditField(field) {
        setEditingField(field);
        setFieldForm({
            label: field.label,
            field_key: field.field_key,
            tipe: field.tipe,
            wajib: !!field.wajib,
            is_identitas: !!field.is_identitas,
            opsi_text: (field.opsi_pilihan || []).join(', '),
            agregasi: field.agregasi || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAgregasi"])(field.field_key),
            opsi_bersyarat_enabled: !!field.opsi_bersyarat,
            depends_on: field.opsi_bersyarat?.depends_on || '',
            bersyarat_map: field.opsi_bersyarat ? Object.fromEntries(Object.entries(field.opsi_bersyarat.options || {}).map(([k, v])=>[
                    k,
                    (v || []).join(', ')
                ])) : {},
            peran_rekap: field.peran_rekap ?? null,
            peranDisentuh: true
        });
        setAddFieldModal(true);
    }
    function openCreateField() {
        setEditingField(null);
        setFieldForm({
            label: '',
            field_key: '',
            tipe: 'teks',
            wajib: false,
            is_identitas: false,
            opsi_text: '',
            // Bawaan kumulatif (nilai terakhir) hanya berlaku untuk kolom angka level minggu (satu-satunya level yang
            // punya kontrol Cara Rekap); level bulan tetap 'sum' seperti bawaan lama, mengikuti be/scripts/build-sql.ts.
            agregasi: activeLevel === 'minggu' ? 'last' : 'sum',
            opsi_bersyarat_enabled: false,
            depends_on: '',
            bersyarat_map: {},
            peran_rekap: null,
            peranDisentuh: false
        });
        setAddFieldModal(true);
    }
    // Nama/tipe kolom berubah: tebak ulang peran (selama Admin belum memilih sendiri), dan buang peran yang tidak
    // berlaku lagi untuk tipe barunya (mis. "Peserta" hanya untuk kolom Angka).
    function ubahNamaAtauTipe(patch) {
        setFieldForm((f)=>{
            const next = {
                ...f,
                ...patch
            };
            if (!next.peranDisentuh) next.peran_rekap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tebakPeran"])(next.label, next.tipe);
            else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peranUntukTipe"])(next.tipe).includes(next.peran_rekap)) next.peran_rekap = null;
            return next;
        });
    }
    function openEditJd(jd) {
        setSelected(jd);
        setJdForm({
            judul: jd.judul,
            deskripsi: jd.deskripsi || '',
            level_utama: jd.level_utama || 'minggu',
            mode_bulanan: jd.mode_bulanan || 'rincian',
            butuh_input_bulanan: !!jd.butuh_input_bulanan,
            pasangan_mingguan_id: jd.pasangan_mingguan_id || '',
            publik_boleh_lihat: !!jd.publik_boleh_lihat,
            multi_baris: !!jd.multi_baris,
            kumulatif_bulanan: !!jd.kumulatif_bulanan
        });
        setEditJdModal(true);
    }
    // Cari pasangan
    function findPartner(jd) {
        if (!jd) return null;
        if (jd.level_utama === 'bulan' && jd.pasangan_mingguan_id) {
            return jenisDataList.find((j)=>j.id === jd.pasangan_mingguan_id) || null;
        }
        if (jd.level_utama === 'minggu') {
            return jenisDataList.find((j)=>j.pasangan_mingguan_id === jd.id) || null;
        }
        return null;
    }
    // Pilihan pasangan mingguan untuk modal
    const weeklyOptions = jenisDataList.filter((j)=>j.level_utama === 'minggu');
    // TAMPILAN 1: ATUR KOLOM JENIS DATA TERPILIH
    if (selected && !editJdModal) {
        const partner = findPartner(selected);
        // Peran di rekap hanya berlaku untuk kolom mingguan (angka rekap dihitung dari data mingguan).
        const tampilkanPeran = peranRekapAktif && activeLevel === 'minggu';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 animate-fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelected(null),
                            className: "flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:text-gray-900 dark:hover:text-white text-sm mb-3 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this),
                                "Kembali ke Daftar Jenis Data (",
                                jenisDataList.length,
                                " Data)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 447,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between flex-wrap gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-bold text-2xl tracking-tight text-[#0B1830]",
                                                    children: selected.judul
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 458,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2.5 py-0.5 rounded-full font-semibold border ${selected.level_utama === 'bulan' ? 'bg-sky-50 text-sky-700 border-sky-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`,
                                                    children: selected.level_utama === 'bulan' ? `Diisi bulanan · ${modeLabel(selected)}` : 'Diisi mingguan'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 max-w-2xl",
                                            children: selected.level_utama === 'bulan' ? 'UPT mengisi data ini setiap bulan di menu Input Bulanan.' : `UPT mengisi data ini setiap minggu di menu Input Data${selected.multi_baris ? ', boleh lebih dari satu baris per minggu' : ''}.`
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this),
                                        selected.deskripsi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 dark:text-gray-400 text-sm max-w-xl mt-1",
                                            children: selected.deskripsi
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 472,
                                            columnNumber: 38
                                        }, this),
                                        partner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-2 text-xs text-blue-600 dark:text-blue-300 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg w-fit",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 476,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Terkait dengan pasangan: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: partner.judul
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 477,
                                                            columnNumber: 50
                                                        }, this),
                                                        " (",
                                                        partner.level_utama,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 477,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>openEditJd(selected),
                                            className: "btn-secondary text-xs bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 487,
                                                    columnNumber: 17
                                                }, this),
                                                "Edit Pengaturan"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>deleteJenisData(selected),
                                            className: "btn-secondary text-xs bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-950/50 border-rose-400/30",
                                            title: "Hapus Jenis Data ini secara permanen",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this),
                                                "Hapus"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>togglePublik(selected),
                                            className: `flex items-center gap-2 text-xs px-3 py-2 rounded-lg border transition-colors ${selected.publik_boleh_lihat ? 'border-emerald-400 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`,
                                            children: [
                                                selected.publik_boleh_lihat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 506,
                                                    columnNumber: 48
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2d$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeLock$3e$__["GlobeLock"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 506,
                                                    columnNumber: 70
                                                }, this),
                                                selected.publik_boleh_lihat ? 'Publik: Ya' : 'Publik: Tidak'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 498,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 444,
                    columnNumber: 9
                }, this),
                tampilkanPeran && !fieldLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 518,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 517,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-semibold text-[#0B1830]",
                                            children: "Cara data ini dihitung di rekap"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 max-w-3xl",
                                            children: [
                                                "Tabel Rekap UPT/Balai dan Rekap Bulanan menampilkan empat angka ringkasan. Tentukan kolom mana yang mengisinya lewat tombol ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                    size: 12,
                                                    className: "inline -mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 524,
                                                    columnNumber: 43
                                                }, this),
                                                " pada kolom, bagian ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: '"Dihitung di rekap sebagai"'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 524,
                                                    columnNumber: 108
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 522,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 516,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
                            children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PERAN_REKAP"]).map(([key, p])=>{
                                const cols = fields.filter((f)=>f.aktif && f.peran_rekap === key);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-xl border p-3 ${cols.length ? 'border-blue-200 bg-blue-50/40' : 'border-dashed border-gray-300 bg-gray-50/60'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold uppercase tracking-wide text-gray-500",
                                            children: p.kolomRekap
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 533,
                                            columnNumber: 21
                                        }, this),
                                        cols.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-[#0B1830] mt-1 leading-snug",
                                            children: cols.map((c)=>c.label).join(' + ')
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 535,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1 leading-snug",
                                            children: "Belum diatur — selalu 0 di rekap"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 537,
                                            columnNumber: 23
                                        }, this),
                                        key === 'judul' && cols.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-amber-700 mt-1.5 flex items-start gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    size: 12,
                                                    className: "mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 543,
                                                    columnNumber: 25
                                                }, this),
                                                " Pilih satu kolom saja agar pelatihan tidak terhitung dua kali."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 542,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 532,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 528,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 515,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between flex-wrap gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-semibold text-[#0B1830]",
                                            children: [
                                                "Kolom isian (",
                                                fields.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 557,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 max-w-2xl",
                                            children: [
                                                "Kolom-kolom ini tampil sebagai form yang diisi UPT, dengan urutan yang sama seperti di sini. Seret ikon",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                    size: 13,
                                                    className: "inline -mt-0.5 mx-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 560,
                                                    columnNumber: 17
                                                }, this),
                                                " untuk mengubah urutan."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 558,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 556,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: openCreateField,
                                    className: "btn-primary text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this),
                                        "Tambah Kolom"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this),
                        fieldLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center py-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "animate-spin text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 570,
                                columnNumber: 56
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 570,
                            columnNumber: 13
                        }, this) : fields.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12 border border-dashed border-gray-300 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: "Belum ada kolom."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 573,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 mt-1",
                                    children: 'Klik "Tambah Kolom" untuk membuat kolom pertama form ini.'
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 574,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 572,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
                            sensors: sensors,
                            collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestCenter"],
                            onDragEnd: handleDragEnd,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                                items: fields.map((f)=>f.id),
                                strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableField"], {
                                            field: field,
                                            onToggle: toggleField,
                                            onEdit: openEditField,
                                            onDelete: deleteField,
                                            tampilkanPeran: tampilkanPeran
                                        }, field.id, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 581,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 579,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 578,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 577,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 554,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    open: addFieldModal,
                    onClose: ()=>setAddFieldModal(false),
                    title: editingField ? `Edit Kolom: ${editingField.label}` : 'Tambah Kolom Baru',
                    maxWidth: "max-w-2xl",
                    footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAddFieldModal(false),
                                className: "btn-secondary",
                                children: "Batal"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 604,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                form: "field-form",
                                type: "submit",
                                className: "btn-primary inline-flex items-center gap-2",
                                disabled: saving,
                                children: [
                                    saving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 15,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 606,
                                        columnNumber: 28
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: saving ? 'Menyimpan...' : editingField ? 'Simpan Perubahan' : 'Tambah Kolom'
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 607,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 605,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                        lineNumber: 603,
                        columnNumber: 13
                    }, this),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        id: "field-form",
                        onSubmit: saveField,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormSection"], {
                                title: "Nama kolom",
                                hint: "Tampil sebagai judul kolom di form UPT dan di tabel rekap.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: fieldForm.label,
                                    onChange: (e)=>ubahNamaAtauTipe({
                                            label: e.target.value
                                        }),
                                    className: "form-input",
                                    required: true,
                                    autoFocus: true,
                                    placeholder: "mis. Nama Pelatihan, Jumlah Peserta, Pagu Anggaran"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 613,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormSection"], {
                                title: "Jenis isian",
                                hint: "Menentukan bentuk isian di form UPT.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                                    role: "radiogroup",
                                    "aria-label": "Jenis isian",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIPE_OPTIONS"].map((opt)=>{
                                        const active = fieldForm.tipe === opt.value;
                                        const Icon = opt.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            role: "radio",
                                            "aria-checked": active,
                                            onClick: ()=>ubahNamaAtauTipe({
                                                    tipe: opt.value
                                                }),
                                            className: `text-left rounded-xl border p-3 transition-colors ${active ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-200 hover:border-gray-300 bg-white'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `flex items-center gap-1.5 text-sm font-semibold ${active ? 'text-blue-700' : 'text-[#0B1830]'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 642,
                                                            columnNumber: 25
                                                        }, this),
                                                        " ",
                                                        opt.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 641,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[11px] text-gray-500 mt-0.5",
                                                    children: opt.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 644,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, opt.value, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 631,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this),
                            fieldForm.tipe === 'pilihan' && (()=>{
                                const driverCandidates = fields.filter((f)=>f.tipe === 'pilihan' && f.opsi_pilihan?.length && f.id !== editingField?.id);
                                const driverField = driverCandidates.find((f)=>f.field_key === fieldForm.depends_on);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: fieldForm.opsi_bersyarat_enabled,
                                                    onChange: (e)=>setFieldForm((f)=>({
                                                                ...f,
                                                                opsi_bersyarat_enabled: e.target.checked
                                                            })),
                                                    className: "w-4 h-4 rounded text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 658,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-blue-900 dark:text-blue-200",
                                                    children: "Opsi tergantung kolom lain (bersyarat)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 664,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 657,
                                            columnNumber: 19
                                        }, this),
                                        !driverCandidates.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-gray-500",
                                            children: "Belum ada kolom bertipe Pilihan (dengan opsi tetap) lain di level ini untuk dijadikan acuan."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 669,
                                            columnNumber: 21
                                        }, this),
                                        fieldForm.opsi_bersyarat_enabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label text-blue-900 dark:text-blue-200",
                                                            children: "Tergantung kolom"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 677,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: fieldForm.depends_on,
                                                            onChange: (e)=>setFieldForm((f)=>({
                                                                        ...f,
                                                                        depends_on: e.target.value,
                                                                        bersyarat_map: {}
                                                                    })),
                                                            className: "form-select text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "— pilih kolom —"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                    lineNumber: 683,
                                                                    columnNumber: 27
                                                                }, this),
                                                                driverCandidates.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: f.field_key,
                                                                        children: f.label
                                                                    }, f.id, false, {
                                                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 54
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 678,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 676,
                                                    columnNumber: 23
                                                }, this),
                                                driverField && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400",
                                                            children: [
                                                                'Opsi kolom ini untuk tiap nilai "',
                                                                driverField.label,
                                                                '" (pisahkan dengan koma):'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 689,
                                                            columnNumber: 27
                                                        }, this),
                                                        driverField.opsi_pilihan.map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[11px] text-gray-600 dark:text-gray-300",
                                                                        children: val
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: fieldForm.bersyarat_map[val] || '',
                                                                        onChange: (e)=>setFieldForm((f)=>({
                                                                                    ...f,
                                                                                    bersyarat_map: {
                                                                                        ...f.bersyarat_map,
                                                                                        [val]: e.target.value
                                                                                    }
                                                                                })),
                                                                        className: "form-input text-xs",
                                                                        placeholder: `Opsi bila "${driverField.label}" = ${val}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                        lineNumber: 695,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, val, true, {
                                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                lineNumber: 693,
                                                                columnNumber: 29
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 688,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 675,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label text-blue-900 dark:text-blue-200",
                                                            children: "Daftar Opsi Pilihan (Ketik bebas, pisahkan dengan koma)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 710,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 2,
                                                            value: fieldForm.opsi_text,
                                                            onChange: (e)=>setFieldForm((f)=>({
                                                                        ...f,
                                                                        opsi_text: e.target.value
                                                                    })),
                                                            className: "form-input text-xs",
                                                            placeholder: "mis. Opsi 1, Opsi 2, Opsi 3",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 713,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 709,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                    size: 12,
                                                                    className: "text-amber-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                    lineNumber: 725,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Atau klik preset pilihan siap pakai:"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 724,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1.5",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUICK_PRESETS"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setFieldForm((f)=>({
                                                                                ...f,
                                                                                opsi_text: p.opsi
                                                                            })),
                                                                    className: "text-[11px] px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 rounded-lg transition-colors text-gray-700 dark:text-gray-200",
                                                                    children: [
                                                                        "+ ",
                                                                        p.label
                                                                    ]
                                                                }, p.label, true, {
                                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                    lineNumber: 730,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 728,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 723,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 708,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 656,
                                    columnNumber: 17
                                }, this);
                            })(),
                            tampilkanPeran && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peranUntukTipe"])(fieldForm.tipe).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormSection"], {
                                title: "Dihitung di rekap sebagai",
                                hint: "Menentukan angka ringkasan mana di Rekap UPT/Balai dan Rekap Bulanan yang diisi kolom ini.",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        role: "radiogroup",
                                        "aria-label": "Dihitung di rekap sebagai",
                                        children: [
                                            null,
                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peranUntukTipe"])(fieldForm.tipe)
                                        ].map((key)=>{
                                            const p = key ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PERAN_REKAP"][key] : null;
                                            const active = (fieldForm.peran_rekap ?? null) === key;
                                            const dipakai = key && fields.find((f)=>f.aktif && f.peran_rekap === key && f.id !== editingField?.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "radio",
                                                "aria-checked": active,
                                                onClick: ()=>setFieldForm((f)=>({
                                                            ...f,
                                                            peran_rekap: key,
                                                            peranDisentuh: true
                                                        })),
                                                className: `w-full text-left flex items-start gap-3 rounded-xl border p-3 transition-colors ${active ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-200 hover:border-gray-300 bg-white'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 ${active ? 'border-blue-600 bg-blue-600 shadow-[inset_0_0_0_2px_white]' : 'border-gray-300'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                        lineNumber: 768,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-sm font-semibold text-[#0B1830]",
                                                                children: p ? `${p.label} → kolom ${p.kolomRekap}` : 'Tidak dihitung'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                lineNumber: 770,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-xs text-gray-500 mt-0.5",
                                                                children: p ? `${p.penjelasan} Contoh: ${p.contoh}.` : 'Kolom ini hanya tampil di form dan tabel rincian.'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                lineNumber: 773,
                                                                columnNumber: 27
                                                            }, this),
                                                            key === 'judul' && dipakai && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-[11px] text-amber-700 mt-1",
                                                                children: [
                                                                    'Kolom "',
                                                                    dipakai.label,
                                                                    '" sudah menjadi judul baris — sebaiknya pilih satu saja.'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                lineNumber: 777,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                        lineNumber: 769,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, key || 'none', true, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 758,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 752,
                                        columnNumber: 17
                                    }, this),
                                    !fieldForm.peranDisentuh && fieldForm.peran_rekap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-blue-700 mt-2 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 788,
                                                columnNumber: 21
                                            }, this),
                                            " Dipilih otomatis dari nama kolom — silakan ganti bila kurang tepat."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 787,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 748,
                                columnNumber: 15
                            }, this),
                            fieldForm.tipe === 'angka' && activeLevel === 'minggu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormSection"], {
                                title: "Cara menggabungkan angka mingguan",
                                hint: "Dipakai saat angka mingguan direkap menjadi bulanan, triwulan, dan tahunan.",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: fieldForm.agregasi,
                                        onChange: (e)=>setFieldForm((f)=>({
                                                    ...f,
                                                    agregasi: e.target.value
                                                })),
                                        className: "form-select",
                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AGREGASI_LABEL"]).map(([v, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: v,
                                                children: label
                                            }, v, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 805,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 799,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-2 leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Kumulatif"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 809,
                                                columnNumber: 19
                                            }, this),
                                            " untuk angka berjalan yang terus bertambah (minggu 1 = 10, minggu 2 = 30 → bulan ini = 30). ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Nilai terakhir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 810,
                                                columnNumber: 36
                                            }, this),
                                            " bila tiap minggu diisi angka minggu itu saja dan yang dipakai cukup angka paling baru (minggu 1 = 12 instruktur, minggu 2 = 11 → bulan ini = 11).",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: " Jumlahkan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 812,
                                                columnNumber: 19
                                            }, this),
                                            " bila tiap minggu mencatat tambahan baru yang terpisah (minggu 1 = 10, minggu 2 = 20 → bulan ini = 30)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 808,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 795,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KolomJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormSection"], {
                                title: "Pengaturan lain",
                                hint: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-2 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-start gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 hover:border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: fieldForm.wajib,
                                                    onChange: (e)=>setFieldForm((f)=>({
                                                                ...f,
                                                                wajib: e.target.checked
                                                            })),
                                                    className: "w-4 h-4 mt-0.5 rounded text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 821,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-sm font-semibold text-[#0B1830]",
                                                            children: "Wajib diisi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 828,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-xs text-gray-500",
                                                            children: "UPT harus mengisi kolom ini sebelum menyimpan."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 829,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 827,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 820,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-start gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 hover:border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: fieldForm.is_identitas,
                                                    onChange: (e)=>setFieldForm((f)=>({
                                                                ...f,
                                                                is_identitas: e.target.checked
                                                            })),
                                                    className: "w-4 h-4 mt-0.5 rounded text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 833,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-sm font-semibold text-[#0B1830]",
                                                            children: [
                                                                "Data pribadi ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                    size: 12,
                                                                    className: "inline -mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                    lineNumber: 840,
                                                                    columnNumber: 95
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 840,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-xs text-gray-500",
                                                            children: "Mis. NIK, telepon, alamat. Diberi tanda gembok di form sebagai pengingat."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 841,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 839,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 832,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 819,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 818,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "rounded-xl border border-gray-200 px-3 py-2 text-sm group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "cursor-pointer text-gray-600 font-medium select-none",
                                        children: "Lanjutan: kode kolom"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 848,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-3 pb-1",
                                        children: editingField ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-xs px-3 py-2 rounded-lg bg-gray-100 text-gray-700",
                                                    children: fieldForm.field_key
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 852,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1.5",
                                                    children: "Kode tidak dapat diubah karena sudah dipakai untuk menyimpan data yang ada. Nama kolom di atas tetap bisa diganti bebas."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 853,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 851,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: fieldForm.field_key,
                                                    onChange: (e)=>setFieldForm((f)=>({
                                                                ...f,
                                                                field_key: e.target.value
                                                            })),
                                                    className: "form-input font-mono text-xs",
                                                    placeholder: fieldForm.label ? fieldForm.label.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') : 'dibuat otomatis dari nama kolom'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 859,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1.5",
                                                    children: "Kosongkan saja — kode dibuat otomatis dari nama kolom."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 866,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 858,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 849,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 847,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                        lineNumber: 612,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 597,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
            lineNumber: 442,
            columnNumber: 7
        }, this);
    }
    // TAMPILAN 2: DAFTAR 9 JENIS DATA DENGAN PENANDA VISUAL PASANGAN
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between flex-wrap gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-semibold text-2xl text-gray-900 dark:text-white",
                                    children: [
                                        "Kelola Jenis Data (",
                                        jenisDataList.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 884,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                    children: "Daftar jenis data dan kolom isiannya. Tiap jenis data punya satu level utama: minggu atau bulan."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 885,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 883,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setExcelWizardOpen(true),
                                    className: "btn-secondary",
                                    title: "Buat Jenis Data baru sekaligus impor datanya dari berkas Excel",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 895,
                                            columnNumber: 15
                                        }, this),
                                        "Buat dari Excel"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 890,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setJdForm({
                                            judul: '',
                                            deskripsi: '',
                                            level_utama: 'minggu',
                                            mode_bulanan: 'rincian',
                                            butuh_input_bulanan: false,
                                            pasangan_mingguan_id: '',
                                            publik_boleh_lihat: false,
                                            multi_baris: false,
                                            kumulatif_bulanan: false
                                        });
                                        setCreateModal(true);
                                    },
                                    className: "btn-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 915,
                                            columnNumber: 15
                                        }, this),
                                        "Buat Jenis Data Baru"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 898,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 889,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 882,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                lineNumber: 881,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$BuatJenisDataExcel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: excelWizardOpen,
                onClose: ()=>setExcelWizardOpen(false),
                onCreated: ()=>{
                    loadJenisData();
                    window.dispatchEvent(new Event(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JENIS_DATA_EVENT"]));
                },
                uptList: uptList,
                periods: periods
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                lineNumber: 922,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: `Daftar ${jenisDataList.length} Jenis Data & Relasi Pasangan`,
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center py-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "animate-spin text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                        lineNumber: 935,
                        columnNumber: 54
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 935,
                    columnNumber: 11
                }, this) : jenisDataList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 text-gray-400 text-sm",
                    children: "Belum ada Jenis Data."
                }, void 0, false, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 937,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-gray-100 dark:divide-gray-800",
                    children: jenisDataList.map((jd, idx)=>{
                        const partner = findPartner(jd);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-4 flex items-center justify-between gap-4 flex-wrap hover:bg-gray-50/50 dark:hover:bg-gray-800/30 px-3 rounded-xl transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-[280px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs tabular-nums text-gray-400 font-bold",
                                                    children: [
                                                        idx + 1,
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 947,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-gray-900 dark:text-white text-base",
                                                    children: jd.judul
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 948,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[11px] px-2 py-0.5 rounded-full font-medium ${jd.level_utama === 'bulan' ? 'bg-sky-100 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800' : 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'}`,
                                                    children: [
                                                        "Level: ",
                                                        jd.level_utama === 'bulan' ? `Bulan (${modeLabel(jd)})` : 'Minggu (Rekap)'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 950,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: jd.aktif ? 'success' : 'neutral',
                                                    children: jd.aktif ? 'Aktif' : 'Nonaktif'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 959,
                                                    columnNumber: 23
                                                }, this),
                                                jd.publik_boleh_lihat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "blue",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 964,
                                                            columnNumber: 47
                                                        }, this),
                                                        " Publik"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 964,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 946,
                                            columnNumber: 21
                                        }, this),
                                        jd.deskripsi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xl",
                                            children: jd.deskripsi
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 969,
                                            columnNumber: 23
                                        }, this),
                                        partner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-lg text-xs bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 975,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Terkait dengan: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: partner.judul
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 976,
                                                            columnNumber: 47
                                                        }, this),
                                                        " (",
                                                        partner.level_utama,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 976,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 974,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-gray-400 mt-1 block",
                                            children: "Tanpa pasangan (Mandiri)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 979,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 945,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleAktif(jd),
                                            className: `p-1.5 rounded-lg transition-colors ${jd.aktif ? 'text-emerald-600 hover:bg-emerald-50' : 'text-gray-400 hover:bg-gray-100'}`,
                                            title: jd.aktif ? 'Nonaktifkan' : 'Aktifkan',
                                            children: jd.aktif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleRight$3e$__["ToggleRight"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 991,
                                                columnNumber: 35
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$toggle$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ToggleLeft$3e$__["ToggleLeft"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 991,
                                                columnNumber: 63
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 984,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>openEditJd(jd),
                                            className: "p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                            title: "Edit Pengaturan",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 999,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 994,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>deleteJenisData(jd),
                                            className: "p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors",
                                            title: "Hapus Jenis Data ini",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 1007,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1002,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSelectJd(jd),
                                            className: "flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-medium px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 1014,
                                                    columnNumber: 23
                                                }, this),
                                                "Atur Kolom",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 1016,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1010,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 983,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, jd.id, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 944,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 939,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                lineNumber: 933,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: createModal || editJdModal,
                onClose: ()=>{
                    setCreateModal(false);
                    setEditJdModal(false);
                },
                title: editJdModal ? 'Edit Pengaturan Jenis Data' : 'Buat Jenis Data Baru',
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setCreateModal(false);
                                setEditJdModal(false);
                            },
                            className: "btn-secondary",
                            children: "Batal"
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1033,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            form: "jd-form",
                            type: "submit",
                            className: "btn-primary inline-flex items-center gap-2",
                            disabled: saving,
                            children: [
                                saving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 15,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1037,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: saving ? 'Menyimpan...' : editJdModal ? 'Simpan Perubahan' : 'Buat & Atur Kolom'
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1038,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1036,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 1032,
                    columnNumber: 11
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: "jd-form",
                    onSubmit: saveJenisData,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label",
                                    children: [
                                        "Judul Jenis Data ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-rose-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1045,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1045,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: jdForm.judul,
                                    onChange: (e)=>setJdForm((f)=>({
                                                ...f,
                                                judul: e.target.value
                                            })),
                                    className: "form-input",
                                    required: true,
                                    placeholder: "mis. Masyarakat, Aparatur, Belanja Modal, ..."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1046,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1044,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label",
                                    children: "Deskripsi"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1057,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 2,
                                    value: jdForm.deskripsi,
                                    onChange: (e)=>setJdForm((f)=>({
                                                ...f,
                                                deskripsi: e.target.value
                                            })),
                                    className: "form-input resize-none",
                                    placeholder: "Penjelasan data yang dikumpulkan"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1058,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1056,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label",
                                    children: [
                                        "Level & Tipe Pengisian ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-rose-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1068,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1068,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `p-3.5 rounded-xl border cursor-pointer transition-all ${jdForm.level_utama === 'minggu' ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/30 ring-1 ring-blue-500/30' : 'border-gray-200 dark:border-gray-700'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "level_utama",
                                                            value: "minggu",
                                                            checked: jdForm.level_utama === 'minggu',
                                                            onChange: ()=>setJdForm((f)=>({
                                                                        ...f,
                                                                        level_utama: 'minggu',
                                                                        mode_bulanan: 'rincian',
                                                                        butuh_input_bulanan: false
                                                                    })),
                                                            className: "text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 1076,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-xs text-gray-900 dark:text-white",
                                                            children: "Level MINGGU (Rekap)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 1084,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 1075,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed",
                                                    children: "Form isian mingguan, otomatis direkap ke Bulanan, Triwulan, dan Tahunan."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1070,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `p-3.5 rounded-xl border cursor-pointer transition-all ${jdForm.level_utama === 'bulan' ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/30 ring-1 ring-blue-500/30' : 'border-gray-200 dark:border-gray-700'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "level_utama",
                                                            value: "bulan",
                                                            checked: jdForm.level_utama === 'bulan',
                                                            onChange: ()=>setJdForm((f)=>({
                                                                        ...f,
                                                                        level_utama: 'bulan',
                                                                        butuh_input_bulanan: true
                                                                    })),
                                                            className: "text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 1097,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-xs text-gray-900 dark:text-white",
                                                            children: "Level BULAN (Terpisah)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 1105,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 1096,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed",
                                                    children: "Pelaporan bulanan terpisah (bisa berupa rincian identitas atau langsung upload file saja)."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 1107,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1091,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1069,
                                    columnNumber: 13
                                }, this),
                                jdForm.level_utama === 'bulan' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 p-3.5 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-200/80 dark:border-blue-800/60 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-blue-900 dark:text-blue-200",
                                            children: "Jenis data bulanan ini berisi:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `p-2.5 rounded-lg border cursor-pointer text-xs transition-all ${jdForm.mode_bulanan === 'rincian' ? 'border-blue-500 bg-white dark:bg-gray-900 text-blue-900 dark:text-blue-200 font-medium' : 'border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 text-gray-600 dark:text-gray-300'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "mode_pengisian_bulan",
                                                                    checked: jdForm.mode_bulanan === 'rincian',
                                                                    onChange: ()=>setJdForm((f)=>({
                                                                                ...f,
                                                                                mode_bulanan: 'rincian'
                                                                            })),
                                                                    className: "text-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                    lineNumber: 1120,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Per nama (rincian)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                    lineNumber: 1121,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-500 dark:text-gray-400 mt-1 pl-5",
                                                            children: "Satu baris per orang/peserta. Diisi lewat form atau impor Excel dengan kolom identitas."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 1123,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `p-2.5 rounded-lg border cursor-pointer text-xs transition-all ${jdForm.mode_bulanan === 'agregasi' ? 'border-blue-500 bg-white dark:bg-gray-900 text-blue-900 dark:text-blue-200 font-medium' : 'border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 text-gray-600 dark:text-gray-300'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "mode_pengisian_bulan",
                                                                    checked: jdForm.mode_bulanan === 'agregasi',
                                                                    onChange: ()=>setJdForm((f)=>({
                                                                                ...f,
                                                                                mode_bulanan: 'agregasi'
                                                                            })),
                                                                    className: "text-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                    lineNumber: 1127,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Rekap angka saja"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                                    lineNumber: 1128,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 1126,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-500 dark:text-gray-400 mt-1 pl-5",
                                                            children: "Hanya angka total per bulan, dijumlahkan otomatis dari isian mingguan. Wajib memilih pasangan mingguan di bawah."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                            lineNumber: 1130,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1117,
                                            columnNumber: 17
                                        }, this),
                                        jdForm.mode_bulanan === 'upload_file' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-amber-700 dark:text-amber-300",
                                            children: 'Jenis data ini masih memakai mode lama "unggah berkas". Pilih salah satu di atas untuk mengganti; berkas lama tetap tersimpan.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1133,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1067,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label",
                                    children: "Pasangan Jenis Data Mingguan"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: jdForm.pasangan_mingguan_id,
                                    onChange: (e)=>setJdForm((f)=>({
                                                ...f,
                                                pasangan_mingguan_id: e.target.value
                                            })),
                                    className: "form-select text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "- Tidak Ada Pasangan (Mandiri) -"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                            lineNumber: 1146,
                                            columnNumber: 15
                                        }, this),
                                        weeklyOptions.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: w.id,
                                                children: [
                                                    w.judul,
                                                    " (Level Minggu)"
                                                ]
                                            }, w.id, true, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 1148,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-gray-400 mt-1",
                                    children: 'Untuk "Rekap angka saja" wajib diisi (angka bulan dijumlahkan dari minggu). Untuk "Per nama" bersifat opsional (validasi kelengkapan 4 minggu).'
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                    lineNumber: 1151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1139,
                            columnNumber: 11
                        }, this),
                        jdForm.level_utama === 'minggu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-gray-100 dark:border-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: !!jdForm.multi_baris,
                                        onChange: (e)=>setJdForm((f)=>({
                                                    ...f,
                                                    multi_baris: e.target.checked
                                                })),
                                        className: "w-4 h-4 rounded text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 1159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-gray-900 dark:text-white",
                                                children: "Boleh lebih dari 1 pelatihan per minggu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 1166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400",
                                                children: 'Menampilkan tombol "Tambah pelatihan lain" di form mingguan. Bawaan tetap 1 pelatihan.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 1167,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 1165,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 1158,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1157,
                            columnNumber: 13
                        }, this),
                        jdForm.level_utama === 'bulan' && jdForm.mode_bulanan === 'rincian' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-gray-100 dark:border-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: !!jdForm.kumulatif_bulanan,
                                        onChange: (e)=>setJdForm((f)=>({
                                                    ...f,
                                                    kumulatif_bulanan: e.target.checked
                                                })),
                                        className: "w-4 h-4 rounded text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 1176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-gray-900 dark:text-white",
                                                children: "Data kumulatif (bulan terbaru menggantikan sebelumnya)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 1183,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400",
                                                children: 'UPT diharapkan mengunggah roster LENGKAP tiap bulan (bukan hanya yang berubah). Data by Name akan otomatis menampilkan bulan terakhir yang sudah ada datanya sebagai "data saat ini", bukan selalu bulan kalender berjalan.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 1184,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 1182,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 1175,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1174,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-gray-100 dark:border-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: jdForm.publik_boleh_lihat,
                                        onChange: (e)=>setJdForm((f)=>({
                                                    ...f,
                                                    publik_boleh_lihat: e.target.checked
                                                })),
                                        className: "w-4 h-4 rounded text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 1192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-gray-900 dark:text-white",
                                                children: "Tampilkan rekap ke Publik"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 1199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400",
                                                children: "Kolom identitas pribadi (NIK/No HP/Alamat) otomatis terlindungi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                                lineNumber: 1200,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                        lineNumber: 1198,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                                lineNumber: 1191,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                            lineNumber: 1190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                    lineNumber: 1043,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                lineNumber: 1027,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-2xl text-sm font-medium text-white animate-fade-in ${toast.type === 'error' ? 'bg-rose-600' : 'bg-emerald-600'}`,
                children: [
                    toast.type === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                        lineNumber: 1214,
                        columnNumber: 37
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                        lineNumber: 1214,
                        columnNumber: 67
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                        lineNumber: 1215,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
                lineNumber: 1209,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/admin/KelolaJenisData.jsx",
        lineNumber: 879,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/admin/KolomJenisData.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormSection",
    ()=>FormSection,
    "QUICK_PRESETS",
    ()=>QUICK_PRESETS,
    "SortableField",
    ()=>SortableField,
    "TIPE_BY_VALUE",
    ()=>TIPE_BY_VALUE,
    "TIPE_OPTIONS",
    ()=>TIPE_OPTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/admin/KolomJenisData.jsx
 * Bagian tampilan Kelola Jenis Data yang berdiri sendiri: pilihan jenis isian, preset opsi, judul bagian form,
 * dan kartu satu kolom (bisa diseret untuk mengurutkan).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agregasi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/peranRekap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.mjs [app-ssr] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.mjs [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.mjs [app-ssr] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.mjs [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.mjs [app-ssr] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.mjs [app-ssr] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.mjs [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sigma.mjs [app-ssr] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
;
;
;
;
;
;
const TIPE_OPTIONS = [
    {
        value: 'angka',
        label: 'Angka',
        desc: 'Bilangan atau nilai Rupiah',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"]
    },
    {
        value: 'teks',
        label: 'Teks singkat',
        desc: 'Nama, judul, satu baris',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"]
    },
    {
        value: 'teks_panjang',
        label: 'Teks panjang',
        desc: 'Narasi atau keterangan',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"]
    },
    {
        value: 'tanggal',
        label: 'Tanggal',
        desc: 'Dipilih dari kalender',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    },
    {
        value: 'pilihan',
        label: 'Pilihan',
        desc: 'Dropdown dari daftar opsi',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"]
    },
    {
        value: 'file',
        label: 'Berkas',
        desc: 'Unggah PDF/Word/Excel',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"]
    }
];
const TIPE_BY_VALUE = Object.fromEntries(TIPE_OPTIONS.map((t)=>[
        t.value,
        t
    ]));
function FormSection({ title, hint, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-[#0B1830]",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500 mt-0.5 mb-2",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/admin/KolomJenisData.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
const QUICK_PRESETS = [
    {
        label: 'L/P',
        opsi: 'Laki-laki, Perempuan'
    },
    {
        label: 'Pendidikan',
        opsi: 'SD, SMP, SMA/SMK, D1, D2, D3, D4/S1, S2, S3'
    },
    {
        label: 'Metode Pelatihan',
        opsi: 'Luring, Daring, Blended'
    },
    {
        label: 'Sumber Dana',
        opsi: 'RM, PNBP/BLU, SBSN'
    },
    {
        label: 'Status ASN',
        opsi: 'PNS, PPPK'
    },
    {
        label: 'E-Laut Bidang',
        opsi: 'Kepelautan, Penangkapan Ikan, Permesinan Kapal, Budidaya Perikanan, Pengolahan Hasil Perikanan, Konservasi Perairan'
    }
];
function SortableField({ field, onToggle, onEdit, onDelete, tampilkanPeran }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSortable"])({
        id: field.id
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        className: `flex items-center gap-3 p-3.5 rounded-xl border transition-all ${field.aktif ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm' : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/40 opacity-60'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ...attributes,
                ...listeners,
                className: "text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    (()=>{
                        const tipe = TIPE_BY_VALUE[field.tipe];
                        const TipeIcon = tipe?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"];
                        const peran = tampilkanPeran && field.peran_rekap ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PERAN_REKAP"][field.peran_rekap] : null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-[#0B1830] dark:text-white",
                                            children: field.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        field.wajib && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-semibold text-rose-600",
                                            children: "Wajib diisi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, this),
                                        !field.aktif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-200 text-gray-600",
                                            children: "Disembunyikan dari form"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                            lineNumber: 76,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 flex-wrap mt-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TipeIcon, {
                                                    size: 11
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                tipe?.label || field.tipe
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        peran && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700",
                                            title: peran.penjelasan,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"], {
                                                    size: 11
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this),
                                                " Dihitung sebagai ",
                                                peran.kolomRekap
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this),
                                        field.tipe === 'angka' && field.level === 'minggu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] px-2 py-0.5 rounded-md bg-sky-50 text-sky-700",
                                            title: "Cara menggabungkan angka mingguan menjadi bulanan/triwulan/tahunan",
                                            children: [
                                                "Rekap: ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AGREGASI_SHORT"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agregasiOf"])(field)]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        field.is_identitas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    size: 11
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                " Data pribadi"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-gray-400 font-mono",
                                            title: "Kode kolom di database",
                                            children: [
                                                "kode: ",
                                                field.field_key
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this);
                    })(),
                    field.tipe === 'pilihan' && field.opsi_pilihan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blue-600 dark:text-blue-400 mt-1 truncate",
                        children: [
                            "Opsi: ",
                            field.opsi_pilihan.join(', ')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    field.tipe === 'pilihan' && field.opsi_bersyarat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blue-600 dark:text-blue-400 mt-1 truncate",
                        children: [
                            'Opsi tergantung kolom "',
                            field.opsi_bersyarat.depends_on,
                            '": ',
                            Object.entries(field.opsi_bersyarat.options || {}).map(([k, v])=>`${k} → ${(v || []).join('/')}`).join('; ')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onEdit(field),
                        className: "p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors",
                        title: "Edit kolom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onToggle(field),
                        className: `p-1.5 rounded-lg transition-colors ${field.aktif ? 'text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`,
                        title: field.aktif ? 'Sembunyikan kolom dari form (data lama tetap tersimpan)' : 'Tampilkan lagi kolom di form',
                        children: field.aktif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                            lineNumber: 131,
                            columnNumber: 26
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                            lineNumber: 131,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onDelete(field),
                        className: "p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors",
                        title: "Hapus kolom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/KolomJenisData.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/admin/KolomJenisData.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_15pterj._.js.map