module.exports = [
"[project]/src/views/InputData/BulanAgregatView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BulanAgregatView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/InputData/BulanAgregatView.jsx
 * Tampilan data bulanan yang dihitung otomatis dari gabungan Minggu 1–4.
 * Read-only — data diambil dari rekap_nilai pasangan mingguan.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agregasi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/excelExport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/angka.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.mjs [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
;
;
;
;
;
;
;
;
function BulanAgregatView({ jenisData, partnerJd, activePeriod, allPeriods, currentUptKey, currentUptLabel }) {
    const [fieldDefs, setFieldDefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [weekRows, setWeekRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totals, setTotals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const partnerId = partnerJd?.id || jenisData.pasangan_mingguan_id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (partnerId) loadFieldDefs();
    }, [
        partnerId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (fieldDefs.length > 0 && activePeriod && currentUptKey) loadData();
    }, [
        fieldDefs.length,
        activePeriod?.id,
        currentUptKey
    ]);
    async function loadFieldDefs() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').eq('jenis_data_id', partnerId).eq('level', 'minggu').eq('aktif', true).order('urutan');
        setFieldDefs(data || []);
    }
    async function loadData() {
        if (!activePeriod || !currentUptKey || !partnerId) return;
        setLoading(true);
        const weeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weeksOfMonth"])(allPeriods, activePeriod.tahun, activePeriod.bulan);
        if (!weeks.length) {
            setWeekRows([]);
            setTotals({});
            setLoading(false);
            return;
        }
        const weekIds = weeks.map((w)=>w.id);
        const { data: rekapRows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('*').eq('jenis_data_id', partnerId).eq('upt_key', currentUptKey).in('period_id', weekIds);
        const rows = rekapRows || [];
        const builtRows = weeks.map((w)=>{
            const vals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weekValues"])(rows.filter((r)=>r.period_id === w.id));
            return {
                period: w,
                values: vals,
                hasData: Object.keys(vals).length > 0
            };
        });
        const angkaFields = fieldDefs.filter((f)=>f.tipe === 'angka');
        const builtTotals = {};
        angkaFields.forEach((f)=>{
            builtTotals[f.field_key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyAgregasi"])(builtRows.map((br)=>br.values[f.field_key]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agregasiOf"])(f)) ?? 0;
        });
        setWeekRows(builtRows);
        setTotals(builtTotals);
        setLoading(false);
    }
    const angkaFields = fieldDefs.filter((f)=>f.tipe === 'angka');
    const teksFields = fieldDefs.filter((f)=>f.tipe !== 'angka');
    const isRupiah = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRupiahField"])(fieldDefs.find((f)=>f.field_key === key) || {
            field_key: key,
            tipe: 'angka'
        });
    const formatVal = (field, val)=>{
        if (val === null || val === undefined || val === '') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-300 dark:text-gray-600",
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                lineNumber: 101,
                columnNumber: 14
            }, this);
        }
        if (field.tipe === 'angka') {
            return isRupiah(field.field_key) ? `Rp ${Number(val).toLocaleString('id-ID')}` : Number(val).toLocaleString('id-ID');
        }
        return String(val);
    };
    const filledWeeks = weekRows.filter((r)=>r.hasData).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5 shadow-sm border border-gray-100 dark:border-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between flex-wrap gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-1 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 dark:text-white text-lg",
                                                children: jenisData.judul
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge-neutral text-[10px] uppercase",
                                                children: "Rekap Bulanan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            currentUptLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge-blue text-[10px]",
                                                children: currentUptLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: [
                                            "Dihitung otomatis dari data mingguan ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: partnerJd?.judul || 'pasangan'
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                lineNumber: 132,
                                                columnNumber: 52
                                            }, this),
                                            " — ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportAgregasiBreakdown"])({
                                        jenisDataJudul: jenisData.judul,
                                        periodLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod),
                                        uptKey: currentUptKey,
                                        fieldDefs,
                                        totals,
                                        weekRows
                                    }),
                                className: "btn-primary text-xs py-2 px-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    "Download Excel Bulanan"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 text-xs px-3 py-2 rounded-lg ${filledWeeks >= 4 ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'}`,
                        children: [
                            filledWeeks >= 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: filledWeeks >= 4 ? `Semua 4 minggu sudah terisi — total akumulasi bulan ini tersedia` : `Baru ${filledWeeks} dari 4 minggu terisi — lengkapi data mingguan untuk rekap penuh`
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            angkaFields.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-1",
                        children: [
                            "Total Akumulasi ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                        children: angkaFields.map((field)=>{
                            const val = totals[field.field_key] ?? 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card p-4 border border-gray-100 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/60 dark:to-gray-900 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 font-medium truncate",
                                        children: field.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 184,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold font-display tabular-nums text-gray-900 dark:text-white mt-1",
                                        children: isRupiah(field.field_key) ? `Rp ${Number(val).toLocaleString('id-ID')}` : Number(val).toLocaleString('id-ID')
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-400 mt-0.5",
                                        children: "dari 4 minggu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, field.field_key, true, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 180,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                lineNumber: 172,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card shadow-sm border border-gray-100 dark:border-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setExpanded((v)=>!v),
                        className: "w-full flex items-center justify-between px-5 py-4 text-left border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        size: 16,
                                        className: "text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-sm text-gray-900 dark:text-white",
                                        children: "Rincian Per Minggu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 16,
                                className: "text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 16,
                                className: "text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    expanded && (loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center py-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            size: 24,
                            className: "animate-spin text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                            lineNumber: 221,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this) : weekRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10 text-gray-400 dark:text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                size: 32,
                                className: "mx-auto mb-2 opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Belum ada data mingguan untuk bulan ini."
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-1",
                                children: [
                                    "Isi data pada jenis data ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: partnerJd?.judul
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 228,
                                        columnNumber: 42
                                    }, this),
                                    " terlebih dahulu."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                        lineNumber: 224,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-gray-50 dark:bg-gray-800/60 border-b border-gray-100 dark:border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 whitespace-nowrap",
                                                children: "Periode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this),
                                            angkaFields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-right px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 whitespace-nowrap",
                                                    children: f.label
                                                }, f.field_key, false, {
                                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                    lineNumber: 240,
                                                    columnNumber: 23
                                                }, this)),
                                            teksFields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 whitespace-nowrap",
                                                    children: f.label
                                                }, f.field_key, false, {
                                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 235,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-100 dark:divide-gray-800",
                                    children: weekRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `transition-colors ${row.hasData ? 'hover:bg-gray-50 dark:hover:bg-gray-800/30' : 'opacity-50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `w-2 h-2 rounded-full flex-shrink-0 ${row.hasData ? 'bg-emerald-400' : 'bg-gray-300 dark:bg-gray-600'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                                lineNumber: 263,
                                                                columnNumber: 27
                                                            }, this),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(row.period)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                    lineNumber: 261,
                                                    columnNumber: 23
                                                }, this),
                                                angkaFields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-right text-gray-700 dark:text-gray-300 tabular-nums",
                                                        children: formatVal(f, row.values[f.field_key])
                                                    }, f.field_key, false, {
                                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                        lineNumber: 270,
                                                        columnNumber: 25
                                                    }, this)),
                                                teksFields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-gray-700 dark:text-gray-300 max-w-[200px] truncate",
                                                        children: formatVal(f, row.values[f.field_key])
                                                    }, f.field_key, false, {
                                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                        lineNumber: 275,
                                                        columnNumber: 25
                                                    }, this))
                                            ]
                                        }, row.period.id, true, {
                                            fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                            lineNumber: 253,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, this),
                                angkaFields.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-blue-50 dark:bg-blue-950/30 border-t-2 border-blue-200 dark:border-blue-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 font-bold text-blue-800 dark:text-blue-300 text-sm uppercase tracking-wide",
                                                children: "Total Bulan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                lineNumber: 285,
                                                columnNumber: 23
                                            }, this),
                                            angkaFields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-right font-bold text-blue-800 dark:text-blue-300 tabular-nums",
                                                    children: isRupiah(f.field_key) ? `Rp ${Number(totals[f.field_key] ?? 0).toLocaleString('id-ID')}` : Number(totals[f.field_key] ?? 0).toLocaleString('id-ID')
                                                }, f.field_key, false, {
                                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 25
                                                }, this)),
                                            teksFields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3"
                                                }, f.field_key, false, {
                                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                                    lineNumber: 297,
                                                    columnNumber: 25
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                        lineNumber: 284,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                                    lineNumber: 283,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                            lineNumber: 233,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/BulanAgregatView.jsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/InputData/BulanUploadView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BulanUploadView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/InputData/BulanUploadView.jsx
 * Tampilan data bulanan model upload berkas langsung (PDF / Excel) dari UPT.
 * Mendukung upload file, preview PDF, download Excel/PDF, dan pencatatan riwayat upload.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.mjs [app-ssr] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.mjs [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.mjs [app-ssr] (ecmascript) <export default as File>");
;
;
;
;
;
;
;
;
function BulanUploadView({ jenisData, activePeriod, currentUptKey, currentUptLabel, locked = false, isAdmin = false }) {
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadModalOpen, setUploadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewDoc, setPreviewDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form upload state
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [judulDokumen, setJudulDokumen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [catatan, setCatatan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activePeriod && currentUptKey) {
            loadDocuments();
        }
    }, [
        activePeriod?.id,
        currentUptKey,
        jenisData.id
    ]);
    async function loadDocuments() {
        if (!activePeriod || !currentUptKey) return;
        setLoading(true);
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dokumen_upload').select('id, jenis_data_id, period_id, upt_key, judul, file_name, file_size, file_ext, file_type, catatan, uploaded_by, created_at, status, catatan_admin' + ((await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeatures"])()).terlambat ? ', terlambat' : '')).eq('jenis_data_id', jenisData.id).eq('period_id', activePeriod.id).eq('upt_key', currentUptKey).order('created_at', {
                ascending: false
            });
            if (error) {
                console.error('Error loading documents:', error);
            } else {
                setDocuments(data || []);
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    }
    function handleFileChange(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        // Maksimum berkas asli 30 MiB. Payload JSON base64 memerlukan ruang sekitar 40 MiB.
        if (file.size > 30 * 1024 * 1024) {
            setSelectedFile(null);
            e.target.value = '';
            setErrorMsg('Ukuran berkas maksimal adalah 30 MB');
            return;
        }
        setSelectedFile(file);
        setErrorMsg('');
        if (!judulDokumen) {
            // Set default judul dari nama file tanpa ekstensi
            const nameWithoutExt = file.name.replace(/\.[^/.]+$/, '');
            setJudulDokumen(nameWithoutExt);
        }
    }
    function readFileAsDataURL(file) {
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(reader.result);
            reader.onerror = (err)=>reject(err);
            reader.readAsDataURL(file);
        });
    }
    function formatBytes(bytes, decimals = 1) {
        if (!bytes || bytes === 0) return '0 B';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = [
            'B',
            'KB',
            'MB',
            'GB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    async function handleUploadSubmit(e) {
        e.preventDefault();
        if (!selectedFile) {
            setErrorMsg('Pilih berkas terlebih dahulu');
            return;
        }
        setUploading(true);
        setErrorMsg('');
        try {
            const fileDataUrl = await readFileAsDataURL(selectedFile);
            const ext = selectedFile.name.split('.').pop()?.toLowerCase() || '';
            const newDoc = {
                id: `doc-up-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
                jenis_data_id: jenisData.id,
                period_id: activePeriod.id,
                upt_key: currentUptKey,
                judul: judulDokumen.trim() || selectedFile.name,
                file_name: selectedFile.name,
                file_size: selectedFile.size,
                file_ext: ext,
                file_type: selectedFile.type || 'application/octet-stream',
                file_data: fileDataUrl,
                catatan: catatan.trim(),
                uploaded_by: isAdmin ? 'Admin' : currentUptLabel || currentUptKey,
                created_at: new Date().toISOString()
            };
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dokumen_upload').insert([
                newDoc
            ]);
            if (error) throw error;
            setUploadModalOpen(false);
            setSelectedFile(null);
            setJudulDokumen('');
            setCatatan('');
            await loadDocuments();
        } catch (err) {
            console.error('Gagal upload:', err);
            setErrorMsg(err.message || 'Gagal mengunggah berkas. Silakan coba lagi.');
        } finally{
            setUploading(false);
        }
    }
    async function handleDeleteDoc(id, title) {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(`Hapus berkas "${title}"?\n\nBerkas masuk Tempat Sampah 30 hari dan hanya Admin yang dapat memulihkannya.`)) return;
        try {
            const { error, pending } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dokumen_upload').delete().eq('id', id);
            if (error) throw error;
            if (pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Permintaan hapus berkas terkirim ke Admin. Berkas baru benar-benar terhapus setelah Admin menyetujuinya di menu Permintaan Hapus.');
            await loadDocuments();
            if (isAdmin && !pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyDihapus"])(`Berkas "${title}"`);
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal menghapus berkas: ' + err.message);
        }
    }
    // Daftar berkas tidak memuat isi berkas (bisa belasan MB); isinya diambil hanya saat diunduh / dipratinjau
    async function loadFileData(doc) {
        if (doc.file_data) return doc.file_data;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dokumen_upload').select('file_data').eq('id', doc.id).single();
        if (error || !data?.file_data) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Data berkas tidak tersedia.');
            return null;
        }
        return data.file_data;
    }
    async function openPreview(doc) {
        const fileData = await loadFileData(doc);
        if (fileData) setPreviewDoc({
            ...doc,
            file_data: fileData
        });
    }
    async function downloadDoc(doc) {
        const fileData = await loadFileData(doc);
        if (!fileData) return;
        const link = document.createElement('a');
        link.href = fileData;
        link.download = doc.file_name || `dokumen-${doc.id}.${doc.file_ext || 'pdf'}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const getFileIcon = (ext)=>{
        const lower = (ext || '').toLowerCase();
        if ([
            'xlsx',
            'xls',
            'csv'
        ].includes(lower)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                className: "text-emerald-600 dark:text-emerald-400",
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                lineNumber: 205,
                columnNumber: 14
            }, this);
        }
        if (lower === 'pdf') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                className: "text-rose-600 dark:text-rose-400",
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                lineNumber: 208,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
            className: "text-blue-600 dark:text-blue-400",
            size: 28
        }, void 0, false, {
            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
            lineNumber: 210,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5 border border-gray-100 dark:border-gray-800 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg text-gray-900 dark:text-white",
                                                children: jenisData.judul
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge-purple text-xs flex items-center gap-1 font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 224,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Laporan File UPT (PDF / Excel)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this),
                                            currentUptLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge-blue text-xs font-medium",
                                                children: currentUptLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 13,
                                                className: "text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this),
                                            "Periode: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-gray-700 dark:text-gray-300",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 233,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: !locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedFile(null);
                                        setJudulDokumen('');
                                        setCatatan('');
                                        setErrorMsg('');
                                        setUploadModalOpen(true);
                                    },
                                    className: "btn-primary text-xs flex items-center gap-1.5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        "Upload Laporan Baru"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-3 rounded-lg bg-purple-50/60 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 text-xs text-purple-900 dark:text-purple-300 flex items-start gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                size: 16,
                                className: "text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Format Pelaporan Berkas Resmi:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    " Jenis data ini menggunakan pengunggahan berkas laporan langsung (PDF / Excel resmi) yang diterbitkan oleh masing-masing UPT setiap bulan. Anda dapat langsung membuka, melihat pratinjau (PDF), atau mengunduh dokumen di bawah."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card shadow-sm border border-gray-100 dark:border-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-sm text-gray-800 dark:text-gray-200",
                                        children: "Daftar Berkas Terunggah"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
                                        children: [
                                            documents.length,
                                            " berkas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            documents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this),
                                    "Laporan tersedia"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 24,
                                className: "animate-spin text-purple-600"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 text-xs text-gray-500",
                                children: "Memuat berkas..."
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this) : documents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-14 text-center px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 mx-auto rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 flex items-center justify-center mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                    size: 28,
                                    className: "text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-700 dark:text-gray-300",
                                children: "Belum ada berkas laporan untuk bulan ini"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-1 max-w-md mx-auto",
                                children: locked ? 'Periode telah dikunci dan tidak ada berkas yang diunggah.' : 'Silakan unggah dokumen laporan bulanan berupa file PDF atau Excel resmi dari UPT.'
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this),
                            !locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setUploadModalOpen(true),
                                className: "mt-4 btn-secondary text-xs inline-flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this),
                                    "Pilih Berkas Sekarang"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 303,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-100 dark:divide-gray-800",
                        children: documents.map((doc)=>{
                            const isPdf = doc.file_ext?.toLowerCase() === 'pdf';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 sm:p-5 hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3.5 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700 flex-shrink-0",
                                                children: getFileIcon(doc.file_ext)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 323,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-sm font-semibold text-gray-900 dark:text-gray-100 truncate flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: doc.judul
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                lineNumber: 328,
                                                                columnNumber: 25
                                                            }, this),
                                                            doc.terlambat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
                                                                children: "Terlambat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                lineNumber: 328,
                                                                columnNumber: 66
                                                            }, this) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
                                                                children: doc.file_ext || 'FILE'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                lineNumber: 329,
                                                                columnNumber: 25
                                                            }, this),
                                                            doc.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: doc.status === 'disetujui' ? 'success' : doc.status === 'ditolak' ? 'danger' : 'warning',
                                                                children: doc.status === 'disetujui' ? 'Disetujui' : doc.status === 'ditolak' ? 'Ditolak' : 'Menunggu Persetujuan'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                lineNumber: 333,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 327,
                                                        columnNumber: 23
                                                    }, this),
                                                    doc.status === 'ditolak' && doc.catatan_admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-rose-600 dark:text-rose-400 mt-1",
                                                        children: [
                                                            "Catatan Admin: ",
                                                            doc.catatan_admin
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 339,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-mono truncate",
                                                        children: [
                                                            doc.file_name,
                                                            " • ",
                                                            formatBytes(doc.file_size)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 341,
                                                        columnNumber: 23
                                                    }, this),
                                                    doc.catatan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600 dark:text-gray-300 mt-1 italic bg-gray-50 dark:bg-gray-800/60 px-2 py-1 rounded border-l-2 border-purple-400",
                                                        children: [
                                                            '"',
                                                            doc.catatan,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 345,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 text-[11px] text-gray-400 mt-1.5 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                        lineNumber: 351,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    new Date(doc.created_at).toLocaleString('id-ID', {
                                                                        dateStyle: 'medium',
                                                                        timeStyle: 'short'
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                lineNumber: 350,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                lineNumber: 357,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Oleh: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-gray-600 dark:text-gray-300",
                                                                        children: doc.uploaded_by
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                                lineNumber: 358,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 349,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 326,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 322,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 self-end sm:self-center flex-shrink-0",
                                        children: [
                                            isPdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>openPreview(doc),
                                                className: "btn-secondary text-xs flex items-center gap-1 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/60 hover:bg-purple-50 dark:hover:bg-purple-950/40",
                                                title: "Lihat Pratinjau PDF",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 370,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Lihat PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 365,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>downloadDoc(doc),
                                                className: "btn-secondary text-xs flex items-center gap-1 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40",
                                                title: "Download Dokumen Asli",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 379,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Download"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 374,
                                                columnNumber: 21
                                            }, this),
                                            (!locked || isAdmin) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteDoc(doc.id, doc.judul),
                                                className: "p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded transition-colors",
                                                title: "Hapus Dokumen",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                    lineNumber: 388,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 383,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 363,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, doc.id, true, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 318,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: uploadModalOpen,
                onClose: ()=>!uploading && setUploadModalOpen(false),
                title: "Upload Laporan Bulanan UPT",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleUploadSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-500 dark:text-gray-400",
                            children: [
                                "Unggah berkas laporan bulanan resmi untuk ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-gray-800 dark:text-gray-200",
                                    children: jenisData.judul
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 407,
                                    columnNumber: 55
                                }, this),
                                " (",
                                currentUptLabel,
                                ") pada periode ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-gray-800 dark:text-gray-200",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 407,
                                    columnNumber: 168
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this),
                        errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 15,
                                    className: "flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: errorMsg
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                            lineNumber: 411,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5",
                                    children: [
                                        "Pilih Berkas (PDF / Excel) ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-rose-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                            lineNumber: 420,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    accept: ".pdf,.xlsx,.xls,.csv,.doc,.docx",
                                    onChange: handleFileChange,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>fileInputRef.current?.click(),
                                    className: `border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${selectedFile ? 'border-purple-400 bg-purple-50/30 dark:bg-purple-950/20' : 'border-gray-300 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500'}`,
                                    children: selectedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3",
                                        children: [
                                            getFileIcon(selectedFile.name.split('.').pop()),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-900 dark:text-gray-100",
                                                        children: selectedFile.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 441,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-gray-500",
                                                        children: formatBytes(selectedFile.size)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                        lineNumber: 442,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 440,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 438,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                size: 32,
                                                className: "mx-auto text-gray-400 dark:text-gray-500 mb-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-700 dark:text-gray-300",
                                                children: "Klik untuk memilih berkas dari komputer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 448,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400",
                                                children: "Mendukung PDF, Excel (.xlsx, .xls), atau CSV (Maks. 30 MB)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",
                                    children: [
                                        "Judul / Keterangan Dokumen ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-rose-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                            lineNumber: 462,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: judulDokumen,
                                    onChange: (e)=>setJudulDokumen(e.target.value),
                                    placeholder: "Contoh: Laporan Rekap Instruktur & WI Bulan September 2026",
                                    className: "form-input text-xs w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 464,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",
                                    children: "Catatan Tambahan (Opsional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 2,
                                    value: catatan,
                                    onChange: (e)=>setCatatan(e.target.value),
                                    placeholder: "Tambahkan keterangan atau nomor surat jika diperlukan...",
                                    className: "form-input text-xs w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                            lineNumber: 475,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-2 border-t border-gray-100 dark:border-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: uploading,
                                    onClick: ()=>setUploadModalOpen(false),
                                    className: "btn-secondary text-xs",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: uploading || !selectedFile,
                                    className: "btn-primary text-xs flex items-center gap-1.5",
                                    children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                size: 14,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 505,
                                                columnNumber: 19
                                            }, this),
                                            "Mengunggah..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 504,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                                lineNumber: 510,
                                                columnNumber: 19
                                            }, this),
                                            "Unggah Berkas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                        lineNumber: 509,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            previewDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: true,
                onClose: ()=>setPreviewDoc(null),
                title: `Pratinjau PDF: ${previewDoc.judul}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-xs text-gray-500 pb-2 border-b border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Berkas: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: previewDoc.file_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                            lineNumber: 528,
                                            columnNumber: 29
                                        }, this),
                                        " (",
                                        formatBytes(previewDoc.file_size),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 528,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>downloadDoc(previewDoc),
                                    className: "btn-secondary text-xs flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this),
                                        "Download PDF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                            lineNumber: 527,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[70vh] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: previewDoc.file_data,
                                title: previewDoc.judul,
                                className: "w-full h-full border-0"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                                lineNumber: 538,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                            lineNumber: 537,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                    lineNumber: 526,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
                lineNumber: 521,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/BulanUploadView.jsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/InputData/ImporWeeklyReport.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImporWeeklyReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/InputData/ImporWeeklyReport.jsx
 * Popup "Impor Weekly Report": UPT/Admin mengunggah Form Weekly Report (Excel formulir yang rutin dikirim UPT),
 * aplikasi membacanya (lib/weeklyReport.js), menampilkan pratinjau, lalu menyimpan ke jenis data mingguan yang
 * sesuai (be/scripts/seed-weekly-report.ts) untuk UPT & minggu yang dipilih.
 *
 * Penyimpanan memakai aturan yang sama dengan input biasa: tulisan UPT jadi "Menunggu Persetujuan"; baris yang
 * sudah disetujui Admin tidak ditimpa, perubahannya diajukan sebagai permintaan edit. Tulisan Admin langsung
 * disetujui. Bagian yang kosong di formulir tidak mengubah data jenis data itu yang sudah tersimpan.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$weeklyReport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/weeklyReport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.mjs [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
;
;
;
;
;
;
;
;
;
const KUNCI = [
    'data_anggaran',
    'pnbp_dan_mp_pnbp',
    'lulusan_dudika',
    'pelatihan_non_apbn'
];
// Kolom yang tidak ada di formulir dan dilengkapi UPT sendiri: tidak dikosongkan saat minggu yang sama diimpor ulang
const KOLOM_ISIAN_UPT = {
    data_anggaran: [
        'kode_kro',
        'nama_kro',
        'kode_ro',
        'kode_komponen',
        'nama_komponen',
        'sumber_dana'
    ]
};
const ON_CONFLICT = 'jenis_data_id,upt_key,period_id,baris_ke,field_key';
const normNama = (s)=>String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
function formatNilai(v, def) {
    if (typeof v !== 'number') return String(v);
    return /\(Rp\)/i.test(def?.label || '') ? `Rp ${v.toLocaleString('id-ID')}` : v.toLocaleString('id-ID');
}
function ImporWeeklyReport({ onSaved }) {
    const { isAdmin, uptKey, uptLabel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [meta, setMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // { upts, weeks, jdByKey, defs }
    ;
    const [hasil, setHasil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [namaBerkas, setNamaBerkas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [galat, setGalat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [upt, setUpt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isAdmin ? '' : uptKey);
    const [periodId, setPeriodId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [lama, setLama] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]) // rekap_nilai yang sudah ada untuk UPT & minggu terpilih
    ;
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            const [{ data: upts }, { data: weeks }, { data: jds }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('upt_list').select('*').eq('aktif', true).order('label'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('periods').select('*').eq('level', 'minggu'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').in('key', KUNCI)
            ]);
            const ids = (jds || []).map((j)=>j.id);
            const { data: defs } = ids.length ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').in('jenis_data_id', ids).eq('level', 'minggu') : {
                data: []
            };
            setMeta({
                upts: upts || [],
                weeks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(weeks || []),
                jdByKey: Object.fromEntries((jds || []).map((j)=>[
                        j.key,
                        j
                    ])),
                defs: Object.fromEntries((defs || []).map((d)=>[
                        `${d.jenis_data_id}|${d.field_key}`,
                        d
                    ]))
            });
        })();
    }, []);
    const jenisBelumAda = meta ? KUNCI.filter((k)=>!meta.jdByKey[k]) : [];
    async function pilihBerkas(e) {
        const file = e.target.files?.[0];
        e.target.value = '';
        if (!file) return;
        setGalat('');
        setHasil(null);
        setNamaBerkas(file.name);
        try {
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](await file.arrayBuffer(), {
                type: 'array',
                cellDates: true
            });
            const ws = wb.Sheets.form || wb.Sheets[wb.SheetNames[0]];
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$weeklyReport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bacaWeeklyReport"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
                header: 1,
                defval: null,
                blankrows: true
            }));
            if (!h.kelompok.length) throw new Error('Tidak ada angka yang terisi di formulir ini.');
            setHasil(h);
            // Tebak UPT (Admin) & minggu dari isi formulir
            if (isAdmin) setUpt(meta?.upts.find((u)=>normNama(u.label) === normNama(h.upt))?.key || '');
            const w = h.tanggal && meta?.weeks.find((p)=>p.tanggal_mulai <= h.tanggal && h.tanggal <= p.tanggal_selesai);
            setPeriodId(w?.id || '');
        } catch (err) {
            setGalat(err.message || 'Berkas tidak bisa dibaca.');
        }
    }
    // Data yang sudah tersimpan untuk UPT & minggu terpilih (untuk memberi tahu & menentukan jalur simpan)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!meta || !upt || !periodId) {
            setLama([]);
            return;
        }
        const ids = Object.values(meta.jdByKey).map((j)=>j.id);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('jenis_data_id, baris_ke, field_key, status').in('jenis_data_id', ids).eq('upt_key', upt).eq('period_id', periodId).then(({ data })=>setLama(data || []));
    }, [
        meta,
        upt,
        periodId
    ]);
    const tahunLaporan = hasil?.tanggal?.slice(0, 4);
    const pilihanMinggu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(meta?.weeks || []).filter((w)=>!tahunLaporan || String(w.tahun) === tahunLaporan), [
        meta,
        tahunLaporan
    ]);
    const labelUptTerpilih = meta?.upts.find((u)=>u.key === upt)?.label || uptLabel;
    const beda = hasil?.upt && labelUptTerpilih && normNama(hasil.upt) !== normNama(labelUptTerpilih);
    const jdAdaData = new Set(lama.map((r)=>r.jenis_data_id));
    async function simpan() {
        setSaving(true);
        let disimpan = 0, diajukan = 0;
        try {
            for (const k of hasil.kelompok){
                const jd = meta.jdByKey[k.key];
                if (!jd) continue;
                const barisLama = new Map();
                lama.filter((r)=>r.jenis_data_id === jd.id).forEach((r)=>{
                    const b = barisLama.get(r.baris_ke) || {
                        status: r.status,
                        fields: new Set()
                    };
                    b.fields.add(r.field_key);
                    if (r.status === 'disetujui') b.status = 'disetujui';
                    barisLama.set(r.baris_ke, b);
                });
                const upserts = [];
                for(let i = 0; i < k.baris.length; i++){
                    const barisKe = i + 1;
                    const row = k.baris[i];
                    const nilai = Object.entries(row).filter(([fk])=>meta.defs[`${jd.id}|${fk}`]) // kolom yang dihapus Admin dilewati
                    .map(([fk, v])=>{
                        const numerik = meta.defs[`${jd.id}|${fk}`].tipe === 'angka';
                        return {
                            field_key: fk,
                            value: numerik ? v : null,
                            value_text: numerik ? null : String(v)
                        };
                    });
                    const b = barisLama.get(barisKe);
                    const dikosongkan = b ? [
                        ...b.fields
                    ].filter((f)=>!(f in row) && !(KOLOM_ISIAN_UPT[k.key] || []).includes(f)) : [];
                    if (b?.status === 'disetujui' && !isAdmin) {
                        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].permintaanEdit.ajukanRekap(jd.id, periodId, barisKe, nilai, dikosongkan, 'Impor Weekly Report');
                        if (error) throw error;
                        diajukan++;
                        continue;
                    }
                    upserts.push(...nilai.map((n)=>({
                            jenis_data_id: jd.id,
                            upt_key: upt,
                            period_id: periodId,
                            baris_ke: barisKe,
                            ...n
                        })));
                    if (dikosongkan.length) {
                        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').delete().eq('jenis_data_id', jd.id).eq('upt_key', upt).eq('period_id', periodId).eq('baris_ke', barisKe).in('field_key', dikosongkan).liveEdit();
                        if (error) throw error;
                    }
                }
                if (upserts.length) {
                    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').upsert(upserts, {
                        onConflict: ON_CONFLICT
                    });
                    if (error) throw error;
                    disimpan++;
                }
                // Baris lama yang tidak ada lagi di laporan ini (mis. minggu lalu 4 program, sekarang 3)
                for (const [barisKe, b] of barisLama){
                    if (barisKe <= k.baris.length) continue;
                    const q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').delete().eq('jenis_data_id', jd.id).eq('upt_key', upt).eq('period_id', periodId).eq('baris_ke', barisKe);
                    const { error } = await (b.status === 'disetujui' && !isAdmin ? q.alasan('Tidak ada lagi di Weekly Report') : q.liveEdit());
                    if (error) throw error;
                }
            }
            const bagian = [
                disimpan && `${disimpan} jenis data tersimpan${isAdmin ? '' : ' (menunggu persetujuan Admin)'}`,
                diajukan && `${diajukan} baris yang sudah disetujui diajukan sebagai permintaan edit`
            ].filter(Boolean);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(`Weekly Report diimpor: ${bagian.join(', ') || 'tidak ada perubahan'}.`, 'success');
            onSaved?.();
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Impor berhenti: ' + (err.message || err) + '\n\nBagian sebelumnya sudah tersimpan; mengimpor ulang berkas yang sama aman (menimpa nilai yang sama).');
        } finally{
            setSaving(false);
        }
    }
    if (!meta) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-10 flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "animate-spin text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
            lineNumber: 167,
            columnNumber: 64
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
        lineNumber: 167,
        columnNumber: 21
    }, this);
    if (jenisBelumAda.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800",
            children: [
                "Jenis data Weekly Report belum lengkap di database (",
                jenisBelumAda.join(', '),
                "). Jalankan ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: "npm run migrate"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                    lineNumber: 172,
                    columnNumber: 99
                }, this),
                " di folder ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: "be"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                    lineNumber: 173,
                    columnNumber: 16
                }, this),
                " (migrasi_17), lalu muat ulang halaman."
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-blue-100 bg-blue-50/60 p-3 text-sm text-[#0B1830]",
                children: [
                    "Unggah ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Form Weekly Report"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 181,
                        columnNumber: 16
                    }, this),
                    " (Excel) apa adanya. Angkanya dibaca per bagian dan dimasukkan ke jenis data mingguan yang sesuai. Periksa pratinjau sebelum menyimpan; semua data tetap bisa diubah lagi lewat Input Data."
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl p-5 cursor-pointer hover:border-blue-400 hover:bg-blue-50/40 transition-colors text-sm text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    namaBerkas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Ganti berkas ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-gray-800",
                                children: namaBerkas
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 187,
                                columnNumber: 42
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 187,
                        columnNumber: 23
                    }, this) : 'Pilih berkas Weekly Report (.xlsx)',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: ".xlsx,.xls",
                        className: "hidden",
                        onChange: pilihBerkas
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            galat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700",
                children: galat
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                lineNumber: 191,
                columnNumber: 17
            }, this),
            hasil && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-600 mb-1",
                                        children: "UPT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-input",
                                        value: upt,
                                        onChange: (e)=>setUpt(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— Pilih UPT —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            meta.upts.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: u.key,
                                                    children: u.label
                                                }, u.key, false, {
                                                    fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 39
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-input bg-gray-50",
                                        children: uptLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 203,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-500 mt-1",
                                        children: [
                                            "Di formulir: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: hasil.upt || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                lineNumber: 204,
                                                columnNumber: 74
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-600 mb-1",
                                        children: "Minggu laporan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-input",
                                        value: periodId,
                                        onChange: (e)=>setPeriodId(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— Pilih minggu —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            pilihanMinggu.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: w.id,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(w)
                                                }, w.id, false, {
                                                    fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                    lineNumber: 210,
                                                    columnNumber: 41
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-500 mt-1",
                                        children: [
                                            "Tanggal di formulir: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: hasil.tanggal ? new Date(hasil.tanggal + 'T00:00:00').toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                }) : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                lineNumber: 212,
                                                columnNumber: 82
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    beda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                size: 16,
                                className: "flex-shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this),
                            "UPT di formulir (",
                            hasil.upt,
                            ") berbeda dengan UPT tujuan (",
                            labelUptTerpilih,
                            "). Pastikan berkasnya benar."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 217,
                        columnNumber: 13
                    }, this),
                    hasil.peringatan.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold flex items-center gap-1.5 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 224,
                                        columnNumber: 75
                                    }, this),
                                    " Perlu dicek (",
                                    hasil.peringatan.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 space-y-0.5",
                                children: hasil.peringatan.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: p
                                    }, i, false, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 225,
                                        columnNumber: 90
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 max-h-[45vh] overflow-y-auto pr-1",
                        children: hasil.kelompok.map((k)=>{
                            const jd = meta.jdByKey[k.key];
                            const kolom = [
                                ...new Set(k.baris.flatMap((b)=>Object.keys(b)))
                            ].map((fk)=>meta.defs[`${jd.id}|${fk}`] || {
                                    field_key: fk,
                                    label: fk,
                                    urutan: 999
                                }).sort((a, b)=>(a.urutan || 0) - (b.urutan || 0));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-gray-200 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-3 py-2 border-b border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-[#0B1830] flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                        size: 14,
                                                        className: "text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 99
                                                    }, this),
                                                    " ",
                                                    jd.judul
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-gray-500",
                                                children: [
                                                    k.baris.length,
                                                    " baris",
                                                    jdAdaData.has(jd.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1.5 text-amber-700",
                                                        children: "· data minggu ini sudah ada, akan diperbarui"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                        lineNumber: 240,
                                                        columnNumber: 70
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 237,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-gray-50 text-gray-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: kolom.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-3 py-1.5 text-left font-medium whitespace-nowrap",
                                                                children: c.label
                                                            }, c.field_key, false, {
                                                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                                lineNumber: 246,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                        lineNumber: 246,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: k.baris.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-t border-gray-100",
                                                            children: kolom.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `px-3 py-1.5 whitespace-nowrap ${typeof b[c.field_key] === 'number' ? 'text-right tabular-nums' : ''}`,
                                                                    children: b[c.field_key] === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-300",
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 214
                                                                    }, this) : formatNilai(b[c.field_key], c)
                                                                }, c.field_key, false, {
                                                                    fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 45
                                                                }, this))
                                                        }, i, false, {
                                                            fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                            lineNumber: 250,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 243,
                                        columnNumber: 19
                                    }, this),
                                    KOLOM_ISIAN_UPT[k.key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-3 py-2 border-t border-gray-100 text-[11px] text-amber-700",
                                        children: [
                                            "Formulir tidak merinci ",
                                            KOLOM_ISIAN_UPT[k.key].map((fk)=>meta.defs[`${jd.id}|${fk}`]?.label || fk).join(', '),
                                            " per baris. Lengkapi sendiri di Input Data setelah impor."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 258,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, k.key, true, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 236,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: [
                                    isAdmin ? 'Tersimpan sebagai data yang sudah disetujui.' : 'Tersimpan sebagai "Menunggu Persetujuan" Admin.',
                                    " Bagian yang kosong di formulir tidak mengubah data yang sudah ada."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn-primary text-sm",
                                disabled: saving || !upt || !periodId,
                                onClick: simpan,
                                children: [
                                    saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 15,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 272,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                        lineNumber: 272,
                                        columnNumber: 74
                                    }, this),
                                    "Simpan ",
                                    hasil.kelompok.length,
                                    " jenis data"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
                lineNumber: 194,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/ImporWeeklyReport.jsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/InputData/InputDataPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InputMingguanPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/InputData/InputDataPage.jsx
 * Halaman "Input Data": tabel rekap mingguan (filter tahun/triwulan/bulan/minggu/jenis data,
 * dan UPT khusus Admin) + tombol "+ Input Data" (di samping Download Excel Rekap) yang membuka popup form input.
 * Hanya Jenis Data mingguan yang tampil. Akun UPT hanya melihat data UPT-nya sendiri.
 * Rekap triwulan & tahun otomatis dijumlahkan dari data mingguan (tidak ada input/upload).
 *
 * jenisDataId (opsional): jika diberikan (dari sidebar sub-menu), langsung filter ke jenis data tersebut
 * dan popup input langsung menampilkan PeriodeTabs tanpa dropdown "Pilih Jenis Data Mingguan".
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PeriodeTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/InputData/PeriodeTabs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminPeriodRecap$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminPeriodRecap.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PilihJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/InputData/PilihJenisData.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$ImporWeeklyReport$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/InputData/ImporWeeklyReport.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.mjs [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.mjs [app-ssr] (ecmascript) <export default as Database>");
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
/** Tombol Edit/Isi di tabel rekap: hanya form satu baris (PeriodeTabs mode langsungBaris), tanpa popup input. */ function EditBarisLangsung({ target, onSelesai }) {
    const [jd, setJd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').eq('id', target.jenisDataId).single().then(({ data })=>setJd(data || null));
    }, [
        target.jenisDataId
    ]);
    if (!jd) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PeriodeTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        jenisData: jd,
        initialPeriodId: target.periodId,
        initialUptKey: target.uptKey,
        langsungBaris: target.barisKe,
        onSaved: onSelesai,
        onSelesai: onSelesai
    }, void 0, false, {
        fileName: "[project]/src/views/InputData/InputDataPage.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function InputMingguanPage({ jenisDataId } = {}) {
    const { isAdmin, uptKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imporOpen, setImporOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Jenis Data + Periode + UPT yang dipakai popup saat dibuka: dari baris yang di-Edit, atau (tombol
    // "+ Input Data") dari filter yang sedang dipilih di halaman, supaya tidak perlu memilih ulang.
    const [editTarget, setEditTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pageFilter, setPageFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Berubah setiap popup ditutup (baik karena disimpan maupun ditutup manual) supaya AdminPeriodRecap
    // memuat ulang angkanya dari database — tanpa me-reset filter yang sedang dipilih.
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Jenis data spesifik (dari sidebar sub-menu, /input-mingguan/<id>)
    const [fixedJd, setFixedJd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fixedLoading, setFixedLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!jenisDataId);
    const [allJenisData, setAllJenisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!jenisDataId) return;
        setFixedLoading(true);
        Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').eq('id', jenisDataId).single(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').eq('aktif', true).order('created_at')
        ]).then(([{ data: jd }, { data: all }])=>{
            setFixedJd(jd || null);
            const filtered = (all || []).filter((j)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PeriodeTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBulananJenisData"])(j));
            setAllJenisData(filtered);
            setFixedLoading(false);
        });
    }, [
        jenisDataId
    ]);
    function openAdd() {
        setEditTarget(pageFilter);
        setModalOpen(true);
    }
    // Baris tertentu (barisKe) -> langsung form baris itu; selain itu popup Input Data biasa
    const [barisTarget, setBarisTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function openEditRow(target) {
        if (target.barisKe !== undefined) return setBarisTarget(target);
        setEditTarget(target);
        setModalOpen(true);
    }
    function closeAndRefresh() {
        setModalOpen(false);
        setImporOpen(false);
        setBarisTarget(null);
        setRefreshKey((k)=>k + 1);
    }
    // Mode jenis data spesifik: loading
    if (jenisDataId && fixedLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-48 text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    size: 24,
                    className: "animate-spin mr-2"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                "Memuat jenis data..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/InputData/InputDataPage.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    // Mode jenis data spesifik: tidak ditemukan
    if (jenisDataId && !fixedJd) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                    size: 48,
                    className: "mx-auto mb-4 text-gray-300 dark:text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-gray-600 dark:text-gray-400 mb-1",
                    children: "Jenis Data tidak ditemukan"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400 dark:text-gray-500",
                    children: "Jenis data telah dihapus atau tidak tersedia."
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/InputData/InputDataPage.jsx",
            lineNumber: 104,
            columnNumber: 7
        }, this);
    }
    const pageTitle = fixedJd ? fixedJd.judul : 'Input Data Mingguan';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-bold text-2xl font-display text-gray-900 dark:text-white",
                            children: pageTitle
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setImporOpen(true),
                            className: "btn-secondary text-sm",
                            title: "Unggah Form Weekly Report (Excel) yang biasa dikirim UPT",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                "Impor Weekly Report"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminPeriodRecap$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                refreshToken: refreshKey,
                levelFilter: "minggu",
                userUptKey: isAdmin ? null : uptKey,
                onEditRow: openEditRow,
                onFilterChange: setPageFilter,
                fixedJenisDataId: jenisDataId || undefined,
                aksiHeader: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: openAdd,
                    className: "btn-primary text-xs py-1.5 px-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        "Input Data"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this)
            }, jenisDataId || 'all', false, {
                fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: modalOpen,
                onClose: closeAndRefresh,
                title: fixedJd ? fixedJd.judul : 'Input Data Mingguan',
                maxWidth: "max-w-5xl",
                children: fixedJd ? /* Pilih periode terlebih dahulu; form pelatihan dibuka lewat tombol aksi di PeriodeTabs. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PeriodeTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    jenisData: fixedJd,
                    allJenisData: allJenisData,
                    onSaved: closeAndRefresh,
                    initialPeriodId: editTarget?.periodId,
                    initialUptKey: editTarget?.uptKey
                }, fixedJd.id, false, {
                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PilihJenisData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    tipe: "mingguan",
                    onSaved: closeAndRefresh,
                    initialJenisDataId: editTarget?.jenisDataId,
                    initialPeriodId: editTarget?.periodId,
                    initialUptKey: editTarget?.uptKey
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            barisTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBarisLangsung, {
                target: barisTarget,
                onSelesai: closeAndRefresh
            }, JSON.stringify(barisTarget), false, {
                fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                lineNumber: 171,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: imporOpen,
                onClose: closeAndRefresh,
                title: "Impor Weekly Report",
                maxWidth: "max-w-5xl",
                children: imporOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$ImporWeeklyReport$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onSaved: closeAndRefresh
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                    lineNumber: 174,
                    columnNumber: 23
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/InputDataPage.jsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/InputDataPage.jsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/InputData/KelolaStrukturAnggaran.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KelolaStrukturAnggaran
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/InputData/KelolaStrukturAnggaran.jsx
 * Admin: katalog KRO / RO / Komponen bersama seluruh balai (tabel anggaran_struktur). Balai tidak mengetik
 * kode sendiri di Data Anggaran; mereka memilih dari daftar ini lalu cukup mengisi Sumber Dana, Pagu, dan Realisasi.
 * Satu baris daftar = satu Komponen lengkap dengan RO dan KRO induknya.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
;
;
;
;
;
const KOSONG = {
    kode_kro: '',
    nama_kro: '',
    kode_ro: '',
    nama_ro: '',
    kode_komponen: '',
    nama_komponen: ''
};
const KOLOM = [
    [
        'kode_kro',
        'KRO',
        true
    ],
    [
        'nama_kro',
        'Uraian KRO'
    ],
    [
        'kode_ro',
        'RO',
        true
    ],
    [
        'nama_ro',
        'Uraian RO'
    ],
    [
        'kode_komponen',
        'Komponen',
        true
    ],
    [
        'nama_komponen',
        'Uraian Komponen'
    ]
];
function KelolaStrukturAnggaran({ onChanged }) {
    const [daftar, setDaftar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(KOSONG);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function muat() {
        setLoading(true);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('anggaran_struktur').select('*').eq('upt_key', '*');
        setDaftar((data || []).sort((a, b)=>[
                a.kode_kro,
                a.kode_ro,
                a.kode_komponen
            ].join('|').localeCompare([
                b.kode_kro,
                b.kode_ro,
                b.kode_komponen
            ].join('|'), 'id', {
                numeric: true
            })));
        setLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        muat();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // Saran isian: KRO/RO yang sudah ada (uraiannya ikut terisi saat kode yang sama diketik)
    const saran = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const out = {
            kode_kro: new Map(),
            kode_ro: new Map(),
            kode_komponen: new Map()
        };
        for (const d of daftar){
            out.kode_kro.set(d.kode_kro, d.nama_kro);
            out.kode_ro.set(d.kode_ro, d.nama_ro);
            out.kode_komponen.set(d.kode_komponen, d.nama_komponen);
        }
        return out;
    }, [
        daftar
    ]);
    function ubah(key, val) {
        setForm((f)=>{
            const next = {
                ...f,
                [key]: val
            };
            // Kode yang sudah ada di daftar: uraiannya diisi otomatis (bila belum diketik)
            const nama = key.replace('kode_', 'nama_');
            if (saran[key]?.has(val.trim()) && !f[nama]) next[nama] = saran[key].get(val.trim()) || '';
            return next;
        });
    }
    async function tambah(e) {
        e.preventDefault();
        const row = Object.fromEntries(Object.entries(form).map(([k, v])=>[
                k,
                v.trim() || null
            ]));
        if (!row.kode_kro || !row.kode_ro || !row.kode_komponen) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('KRO, RO, dan Komponen wajib diisi.');
            return;
        }
        if (daftar.some((d)=>d.kode_kro === row.kode_kro && d.kode_ro === row.kode_ro && d.kode_komponen === row.kode_komponen)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Komponen dengan kode tersebut sudah ada di katalog bersama.');
            return;
        }
        setSaving(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('anggaran_struktur').insert({
            ...row,
            upt_key: '*',
            urutan: daftar.length + 1
        });
        setSaving(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(/duplikat/i.test(error.message) ? 'Komponen ini sudah ada di daftar.' : 'Gagal menyimpan: ' + error.message);
            return;
        }
        // Kode KRO & RO dibiarkan supaya Komponen berikutnya di RO yang sama cepat diisi
        setForm((f)=>({
                ...KOSONG,
                kode_kro: f.kode_kro,
                nama_kro: f.nama_kro,
                kode_ro: f.kode_ro,
                nama_ro: f.nama_ro
            }));
        await muat();
        onChanged?.();
    }
    async function hapus(d) {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(`Hapus ${d.kode_komponen} dari daftar?\n\nRincian anggaran yang sudah diisi balai tidak ikut terhapus; hanya pilihan ini yang hilang dari daftar.`)) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('anggaran_struktur').delete().eq('id', d.id);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal menghapus: ' + error.message);
            return;
        }
        await muat();
        onChanged?.();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 dark:text-gray-300",
                children: [
                    "Katalog ini berlaku untuk ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "semua balai"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                        lineNumber: 84,
                        columnNumber: 35
                    }, this),
                    ". Admin menyiapkan KRO, RO, dan Komponen di sini; balai memilih referensi yang sama di Data Anggaran lalu mengisi Sumber Dana, Pagu, dan Realisasi."
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: tambah,
                className: "rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: KOLOM.map(([key, label, wajib])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        htmlFor: `struktur-${key}`,
                                        children: [
                                            label,
                                            wajib && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-rose-500 ml-1",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                lineNumber: 92,
                                                columnNumber: 90
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: `struktur-${key}`,
                                        className: "form-input",
                                        value: form[key],
                                        onChange: (e)=>ubah(key, e.target.value),
                                        placeholder: key === 'kode_kro' ? 'mis. ABAC' : key === 'kode_ro' ? 'mis. ABAC.1' : key === 'kode_komponen' ? 'mis. ABAC.1.2' : label,
                                        list: saran[key] ? `saran-${key}` : undefined,
                                        autoComplete: "off",
                                        required: wajib
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    saran[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                        id: `saran-${key}`,
                                        children: [
                                            ...saran[key].keys()
                                        ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: k
                                            }, k, false, {
                                                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                lineNumber: 105,
                                                columnNumber: 52
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: saving,
                            className: "btn-primary text-sm",
                            children: [
                                saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 14,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                    lineNumber: 113,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                    lineNumber: 113,
                                    columnNumber: 72
                                }, this),
                                " Tambahkan ke daftar"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "animate-spin text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                    lineNumber: 119,
                    columnNumber: 51
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                lineNumber: 119,
                columnNumber: 9
            }, this) : daftar.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400 text-center py-6",
                children: "Katalog bersama belum berisi KRO/RO/Komponen."
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                lineNumber: 121,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-gray-50 dark:bg-gray-800/60 text-gray-500 uppercase tracking-wide text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2",
                                        children: "KRO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2",
                                        children: "RO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2",
                                        children: "Komponen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 text-right",
                                        children: "Aksi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-100 dark:divide-gray-800",
                            children: daftar.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-semibold",
                                                    children: d.kode_kro
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 45
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: d.nama_kro
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-semibold",
                                                    children: d.kode_ro
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 45
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: d.nama_ro
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 106
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-semibold",
                                                    children: d.kode_komponen
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 45
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: d.nama_komponen
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 112
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>hapus(d),
                                                className: "p-1.5 rounded text-gray-400 hover:text-rose-600 hover:bg-rose-50",
                                                title: "Hapus dari daftar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, d.id, true, {
                                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/KelolaStrukturAnggaran.jsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/InputData/PeriodeTabs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PeriodeTabs,
    "isBulananJenisData",
    ()=>isBulananJenisData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/InputData/PeriodeTabs.jsx
 * Menangani form dinamis berdasarkan level_utama Jenis Data:
 * - level_utama === 'bulan': Hanya tab Bulan (rincian per-orang) + Banner 4 Minggu Pasangan + Validasi non-blocking
 * - level_utama === 'minggu': Tab Minggu (input form) + Tab Triwulan & Tahun (Auto-agregasi SUM otomatis)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agregasi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PeriodSelector$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PeriodSelector.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DynamicForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DynamicForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HasilHitung$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HasilHitung.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$kolomHitung$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/kolomHitung.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HapusMassalDialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HapusMassalDialog.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColumnMappingScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ColumnMappingScreen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-complex.mjs [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deadline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$columnMatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/columnMatcher.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/excelExport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.mjs [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.mjs [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.mjs [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$BulanAgregatView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/InputData/BulanAgregatView.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$BulanUploadView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/InputData/BulanUploadView.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/angka.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TabelRO.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$KelolaStrukturAnggaran$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/InputData/KelolaStrukturAnggaran.jsx [app-ssr] (ecmascript)");
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
const PENDING_MSG = 'Permintaan hapus terkirim ke Admin. Data baru benar-benar terhapus setelah Admin menyetujuinya di menu Permintaan Hapus.';
const formatBarisExcel = (rows)=>{
    const sorted = [
        ...new Set(rows)
    ].sort((a, b)=>a - b);
    const ranges = [];
    for (const row of sorted){
        const last = ranges[ranges.length - 1];
        if (last && row === last[1] + 1) last[1] = row;
        else ranges.push([
            row,
            row
        ]);
    }
    const labels = ranges.slice(0, 30).map(([from, to])=>from === to ? `${from}` : `${from}–${to}`);
    return `${labels.join(', ')}${ranges.length > 30 ? `, … (${sorted.length} baris)` : ''}`;
};
// Jenis data mingguan yang punya tombol Template/Upload Excel (satu baris Excel = satu baris data minggu itu)
const IMPOR_EXCEL_MINGGUAN = new Set([
    'data_anggaran'
]);
const samaTeks = (a, b)=>String(a ?? '').trim().toLowerCase().replace(/\s+/g, ' ') === String(b ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
const EDIT_TERKIRIM = 'Permintaan edit terkirim ke Admin\n\n' + 'Status baris ini sekarang "Pengajuan Edit". Isi datanya belum berubah dan tetap dihitung di Dashboard. Setelah Admin menyetujui, ' + 'baris ini kembali menjadi Draft dan tombol Edit bisa Anda pakai untuk mengubah isinya.';
/**
 * Kunci baris yang dituju sebuah permintaan: baris_ke (rekap_nilai) atau id (data_entries), dari filter_json.
 * Permintaan tanpa filter baris (mis. Kosongkan Data Minggu Ini) berlaku untuk semua baris periode itu: ['*'].
 */ function kunciPermintaan(item, col) {
    const raw = item.filter_json;
    const filters = typeof raw === 'string' ? JSON.parse(raw) : raw;
    const f = (filters || []).find((x)=>x.col === col);
    if (!f) return [
        '*'
    ];
    return (Array.isArray(f.val) ? f.val : [
        f.val
    ]).map(String);
}
// Jenis data mingguan yang angkanya berjalan (pagu/realisasi): minggu kosong bisa disalin dari minggu terakhir yang
// terisi, lalu UPT cukup memperbarui angkanya (mis. realisasi). Minggu sebelumnya tidak berubah.
const SALIN_MINGGU_LALU = new Set([
    'data_anggaran',
    'pnbp_dan_mp_pnbp'
]);
const FIELD_ANGGARAN_MP = new Set([
    'pagu_mp_1',
    'realisasi_mp_1',
    'pagu_mp_2',
    'realisasi_mp_2',
    'pagu_mp_3',
    'realisasi_mp_3',
    'pagu_mp_4',
    'realisasi_mp_4',
    'pagu_mp_5',
    'realisasi_mp_5'
]);
const FIELD_REFERENSI_ANGGARAN = [
    'kode_kro',
    'nama_kro',
    'kode_ro',
    'nama_ro',
    'kode_komponen',
    'nama_komponen'
];
// Jenis data yang punya kotak "Target peserta" per minggu (tabel target_mingguan, migrasi_33). Boleh tidak diisi
// setiap minggu: Dashboard memakai target minggu terakhir yang terisi.
const TARGET_PESERTA = new Set([
    'masyarakat',
    'aparatur'
]);
function isBulananJenisData(jd) {
    if (!jd) return false;
    // level_utama (NOT NULL di database) adalah penentu utama: 'bulan' = Input Bulanan, 'minggu' = Input Mingguan
    return jd.level_utama === 'bulan' || jd.mode_bulanan === 'agregasi' || jd.mode_bulanan === 'upload_file';
}
function PeriodeTabs({ jenisData, allJenisData = [], onSaved, initialPeriodId, initialUptKey, langsungBaris, onSelesai }) {
    const { isAdmin, uptKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const isMonthOnly = isBulananJenisData(jenisData);
    // Mingguan: input di level minggu; triwulan & tahun hanya rekap otomatis (tanpa upload). Bulanan: level bulan saja.
    const allowedLevels = isMonthOnly ? [
        'bulan'
    ] : [
        'minggu'
    ];
    const [activeLevel, setActiveLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isMonthOnly ? 'bulan' : 'minggu');
    const [periods, setPeriods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activePeriod, setActivePeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fieldDefs, setFieldDefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [partnerFieldDefs, setPartnerFieldDefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Data states
    // Mingguan: daftar baris/pelatihan (bawaan 1 baris). savedSnap = isi tersimpan terakhir { baris_ke: { field_key: nilai } }
    // untuk mendeteksi kolom yang dikosongkan / baris yang dihapus saat menyimpan.
    const [barisList, setBarisList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            baris_ke: 1,
            values: {}
        }
    ]);
    // Pengajuan yang masih menunggu Admin: baris_ke (mingguan) & id entri (bulanan) -> 'edit' | 'hapus' ('*' = semua baris)
    const [editMenunggu, setEditMenunggu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        rekap: {},
        entri: {}
    });
    // Minggu kosong: minggu terakhir yang sudah terisi, untuk tombol "Salin" { period, jumlah }
    const [mingguLalu, setMingguLalu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menyalin, setMenyalin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Kolom yang terkunci di form Tambah (tombol + Data Anggaran): kode & uraian tingkat induk
    const [kolomKunci, setKolomKunci] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Data Anggaran: daftar KRO/RO/Komponen balai ini dari Admin (anggaran_struktur); balai memilih dari daftar ini
    const [struktur, setStruktur] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [kelolaStruktur, setKelolaStruktur] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [strukturDimuat, setStrukturDimuat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Target peserta minggu ini: { ini: angka|null, lalu: { nilai, period }|null }
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [targetTeks, setTargetTeks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [menyimpanTarget, setMenyimpanTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedSnap, setSavedSnap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [lateRekap, setLateRekap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [features, setFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        multiBaris: false,
        agregasi: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeatures"])().then(setFeatures);
    }, []);
    const multiBaris = features.multiBaris && !!jenisData.multi_baris;
    // Sebutan satu baris di tombol & judul: "pelatihan" hanya untuk jenis data daftar pelatihan
    const sebutanBaris = fieldDefs.some((f)=>f.field_key === 'nama_pelatihan') ? 'pelatihan' : fieldDefs.some((f)=>f.field_key === 'judul_kegiatan') ? 'kegiatan' : 'baris';
    const Sebutan = sebutanBaris[0].toUpperCase() + sebutanBaris.slice(1);
    // Data Anggaran memakai "Tambah KRO"; jenis lain "Tambah <sebutan>" / "Isi Data Minggu Ini"
    const labelTambah = jenisData.key === 'data_anggaran' ? 'Tambah KRO' : multiBaris ? `Tambah ${Sebutan}` : 'Isi Data Minggu Ini';
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [validation, setValidation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aggregatedData, setAggregatedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingPeriods, setLoadingPeriods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal states
    const [addEntryModal, setAddEntryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editEntry, setEditEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Modal Tambah/Edit satu baris/pelatihan mingguan (menggantikan form inline lama)
    const [barisModalOpen, setBarisModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingBarisKe, setEditingBarisKe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalValues, setModalValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Mode langsungBaris: form dibuka sekali setelah data minggu & UPT yang diminta selesai dimuat
    const [dimuatUntuk, setDimuatUntuk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [langsungDibuka, setLangsungDibuka] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewEntry, setViewEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadModal, setUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mappingData, setMappingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [importProgress, setImportProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [importReport, setImportReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formValues, setFormValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [searchEntries, setSearchEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    // Hapus massal: { kind: 'rekap' | 'entries', count } — data masuk Tempat Sampah
    const [clearDialog, setClearDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchEntries.trim()) return entries;
        const q = searchEntries.toLowerCase();
        return entries.filter((e)=>{
            const nama = (e.nama || e.data_json?.nama || '').toLowerCase();
            const nik = (e.nik || e.data_json?.nik || '').toLowerCase();
            const jsonStr = JSON.stringify(e.data_json || {}).toLowerCase();
            return nama.includes(q) || nik.includes(q) || jsonStr.includes(q);
        });
    }, [
        entries,
        searchEntries
    ]);
    const totalPages = Math.max(1, Math.ceil(filteredEntries.length / pageSize));
    const paginatedEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const start = (currentPage - 1) * pageSize;
        return filteredEntries.slice(start, start + pageSize);
    }, [
        filteredEntries,
        currentPage,
        pageSize
    ]);
    // Admin harus memilih UPT tujuan secara eksplisit sebelum bisa melihat/mengisi
    // data — supaya data tiap UPT tidak tercampur jadi satu tempat yang sama.
    // Akun UPT selalu terkunci ke upt_key miliknya sendiri (tidak bisa diganti).
    const [uptList, setUptList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedUptKey, setSelectedUptKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialUptKey || '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('upt_list').select('*').eq('aktif', true).order('label').then(({ data })=>{
            setUptList(data || []);
        });
    }, []);
    // "Semua UPT" untuk bulanan rincian per-orang: satu tabel gabungan + kolom UPT (bisa dilihat & diedit).
    // Untuk mingguan: nilai per-UPT tidak bisa digabung jadi satu form isian, jadi "Semua UPT" di sana HANYA
    // dipakai sebagai target aksi "Kosongkan/Hapus Data Minggu Ini" massal, bukan untuk mengisi/melihat form.
    const supportsAllUpt = jenisData.level_utama === 'bulan' && jenisData.mode_bulanan === 'rincian' || jenisData.level_utama === 'minggu';
    const isAllUpt = isAdmin && supportsAllUpt && selectedUptKey === 'all';
    const currentUptKey = isAdmin ? selectedUptKey : uptKey || '';
    const currentUptLabel = isAdmin ? isAllUpt ? `Semua UPT (${uptList.length} Balai)` : uptList.find((u)=>u.key === selectedUptKey)?.label || '' : uptList.find((u)=>u.key === uptKey)?.label || uptKey || '';
    const uptLabelOf = (key)=>uptList.find((u)=>u.key === key)?.label || key || '-';
    const needsUptSelection = isAdmin && !selectedUptKey;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentPage(1);
    }, [
        searchEntries,
        activePeriod?.id,
        currentUptKey
    ]);
    // Deadline TIDAK mengunci: UPT tetap boleh mengisi, tetapi datanya ditandai "Terlambat" (merah).
    const pastDeadline = !!activePeriod && !isAdmin && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPeriodLocked"])(activePeriod.deadline);
    // Cari pasangan Jenis Data jika ada
    const partnerJd = isMonthOnly && jenisData.pasangan_mingguan_id ? allJenisData.find((j)=>j.id === jenisData.pasangan_mingguan_id) : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isMonth = isBulananJenisData(jenisData);
        setActiveLevel(isMonth ? 'bulan' : 'minggu');
        loadPeriods();
    }, [
        jenisData.id,
        jenisData.key,
        jenisData.level_utama
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadFieldDefs();
    }, [
        jenisData.id,
        activeLevel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activePeriod && jenisData && !needsUptSelection) {
            loadData();
        }
    }, [
        activePeriod?.id,
        jenisData.id,
        activeLevel,
        currentUptKey,
        needsUptSelection
    ]);
    async function loadPeriods() {
        setLoadingPeriods(true);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('periods').select('*').order('tahun').order('bulan').order('minggu_ke').order('triwulan_ke');
        const allP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(data || []);
        setPeriods(allP);
        const isMonth = isBulananJenisData(jenisData);
        const levelToSet = isMonth ? 'bulan' : 'minggu';
        setActiveLevel(levelToSet);
        const filtered = allP.filter((p)=>p.level === levelToSet);
        const wanted = initialPeriodId && filtered.find((p)=>p.id === initialPeriodId);
        setActivePeriod(wanted || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickCurrentPeriod"])(filtered));
        setLoadingPeriods(false);
    }
    async function loadFieldDefs() {
        // Muat field definitions untuk jenis data saat ini
        const queryLevel = isMonthOnly ? 'bulan' : 'minggu';
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').eq('jenis_data_id', jenisData.id).eq('level', queryLevel).eq('aktif', true).order('urutan');
        setFieldDefs(data || []);
        // Jika memiliki pasangan mingguan, muat juga field pasangan untuk kalkulasi
        if (isMonthOnly && jenisData.pasangan_mingguan_id) {
            const { data: pDefs } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').eq('jenis_data_id', jenisData.pasangan_mingguan_id).eq('level', 'minggu').eq('aktif', true).order('urutan');
            setPartnerFieldDefs(pDefs || []);
        }
    }
    // Pengajuan edit & hapus yang masih menunggu untuk jenis data & periode ini. Selama menunggu, isi baris tidak berubah
    // dan tetap dihitung di Dashboard; statusnya tampil "Pengajuan Edit" / "Pengajuan Hapus".
    async function loadEditMenunggu(tabel) {
        if (isAllUpt || !(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeatures"])()).permintaanHapus) return {};
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('permintaan_hapus').select('id, aksi, filter_json').eq('status', 'pending').eq('tabel', tabel).eq('jenis_data_id', jenisData.id).eq('period_id', activePeriod.id).eq('upt_key', currentUptKey);
        const col = tabel === 'rekap_nilai' ? 'baris_ke' : 'id';
        const out = {};
        for (const r of data || []){
            const aksi = r.aksi === 'edit' ? 'edit' : 'hapus';
            for (const k of kunciPermintaan(r, col))if (out[k] !== 'hapus') out[k] = aksi;
        }
        return out;
    }
    const pengajuanRekap = (barisKe)=>editMenunggu.rekap[String(barisKe)] || editMenunggu.rekap['*'] || null;
    const pengajuanEntri = (id)=>editMenunggu.entri[String(id)] || editMenunggu.entri['*'] || null;
    async function muatTarget() {
        if (!TARGET_PESERTA.has(jenisData.key) || isAllUpt) {
            setTarget(null);
            return;
        }
        const minggu = periods.filter((p)=>p.level === 'minggu' && Number(p.tahun) === Number(activePeriod.tahun));
        const idx = minggu.findIndex((p)=>p.id === activePeriod.id);
        const sampai = idx >= 0 ? minggu.slice(0, idx + 1) : [
            activePeriod
        ];
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('target_mingguan').select('period_id, target').eq('jenis_data_id', jenisData.id).eq('upt_key', currentUptKey).in('period_id', sampai.map((p)=>p.id));
        const urut = new Map(sampai.map((p, i)=>[
                p.id,
                i
            ]));
        const isi = (data || []).filter((r)=>r.target !== null && r.target !== undefined);
        const ini = isi.find((r)=>r.period_id === activePeriod.id);
        const lalu = isi.filter((r)=>r.period_id !== activePeriod.id).sort((a, b)=>urut.get(b.period_id) - urut.get(a.period_id))[0];
        setTarget({
            ini: ini ? Number(ini.target) : null,
            lalu: lalu ? {
                nilai: Number(lalu.target),
                period: sampai[urut.get(lalu.period_id)]
            } : null
        });
        setTargetTeks(ini ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAngka"])(ini.target) : '');
    }
    async function simpanTarget(e) {
        e?.preventDefault();
        const nilai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAngka"])(targetTeks);
        setMenyimpanTarget(true);
        const kunci = (q)=>q.eq('jenis_data_id', jenisData.id).eq('upt_key', currentUptKey).eq('period_id', activePeriod.id);
        const { error } = nilai === null ? await kunci(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('target_mingguan').delete()) : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('target_mingguan').upsert({
            jenis_data_id: jenisData.id,
            upt_key: currentUptKey,
            period_id: activePeriod.id,
            target: nilai
        }, {
            onConflict: 'jenis_data_id,upt_key,period_id'
        });
        setMenyimpanTarget(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal menyimpan target: ' + error.message);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(nilai === null ? 'Target minggu ini dikosongkan; Dashboard memakai target minggu sebelumnya.' : 'Target peserta tersimpan.', 'success');
        await muatTarget();
    }
    async function muatStruktur() {
        if (jenisData.key !== 'data_anggaran') {
            setStruktur([]);
            setStrukturDimuat(false);
            return;
        }
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('anggaran_struktur').select('kode_kro, nama_kro, kode_ro, nama_ro, kode_komponen, nama_komponen').eq('upt_key', '*');
        const unique = new Map();
        for (const row of data || []){
            const key = [
                row.kode_kro,
                row.kode_ro,
                row.kode_komponen
            ].join('|');
            if (!unique.has(key)) unique.set(key, row);
        }
        setStruktur([
            ...unique.values()
        ]);
        setStrukturDimuat(true);
    }
    // Daftar Admin tetap menjadi referensi, tetapi KRO/RO/Komponen dapat ditambah dan diubah oleh Balai.
    const pakaiDaftarAdmin = jenisData.key === 'data_anggaran';
    const butuhDaftarAdmin = pakaiDaftarAdmin && !isAdmin && strukturDimuat && struktur.length === 0;
    const sama = (a, b)=>String(a ?? '').trim().toLowerCase() === String(b ?? '').trim().toLowerCase();
    // Minggu terakhir (tahun yang sama, sebelum minggu ini) yang sudah punya isian untuk UPT & jenis data ini
    async function cariMingguLalu() {
        if (!SALIN_MINGGU_LALU.has(jenisData.key) || isAllUpt) return null;
        const minggu = periods.filter((p)=>p.level === 'minggu' && Number(p.tahun) === Number(activePeriod.tahun));
        const idx = minggu.findIndex((p)=>p.id === activePeriod.id);
        const sebelum = idx > 0 ? minggu.slice(0, idx) : [];
        if (!sebelum.length) return null;
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('period_id, baris_ke, field_key, value, value_text').eq('jenis_data_id', jenisData.id).eq('upt_key', currentUptKey).in('period_id', sebelum.map((p)=>p.id));
        if (jenisData.key === 'pnbp_dan_mp_pnbp') query = query.eq('field_key', 'target_penerimaan_pnbp');
        const { data } = await query;
        const sumberData = (data || []).filter((r)=>jenisData.key !== 'pnbp_dan_mp_pnbp' || r.value !== null && r.value !== undefined || r.value_text !== null && r.value_text !== undefined && r.value_text !== '');
        if (!sumberData.length) return null;
        const urut = new Map(sebelum.map((p, i)=>[
                p.id,
                i
            ]));
        const terakhir = sumberData.reduce((a, r)=>(urut.get(r.period_id) ?? -1) > (urut.get(a) ?? -1) ? r.period_id : a, sumberData[0].period_id);
        const jumlah = new Set(sumberData.filter((r)=>r.period_id === terakhir).map((r)=>r.baris_ke ?? 1)).size;
        return {
            period: sebelum[urut.get(terakhir)],
            jumlah
        };
    }
    // Salin semua baris minggu terakhir yang terisi ke minggu ini (baris_ke & isian sama persis). Minggu sebelumnya
    // tidak disentuh; baris salinan minggu ini menunggu persetujuan Admin seperti isian baru.
    // otomatis = dipanggil saat akun UPT membuka minggu kosong (tanpa konfirmasi, popup tetap terbuka).
    async function salinMingguLalu(sumber = mingguLalu, otomatis = false) {
        if (!sumber) return;
        if (!otomatis && !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(`Salin data ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(sumber.period)} ke ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)}?\n\n${sumber.jumlah} baris disalin apa adanya. Setelah itu Anda cukup memperbarui angka yang berubah (mis. realisasi). Data ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(sumber.period)} tidak berubah.`, {
            confirmLabel: 'Salin'
        })) return;
        const mingguLalu1 = sumber;
        setMenyalin(true);
        // Dibaca langsung (bukan dari state) karena salinan otomatis bisa berjalan sebelum state fitur/kolom selesai dimuat
        const { multiBaris: fiturMultiBaris } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeatures"])();
        const kolom = fieldDefs.length ? new Set(fieldDefs.map((f)=>f.field_key)) : null;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('baris_ke, field_key, value, value_text').eq('jenis_data_id', jenisData.id).eq('upt_key', currentUptKey).eq('period_id', mingguLalu1.period.id);
        let err = error;
        const upserts = (data || []).filter((r)=>!kolom || kolom.has(r.field_key)).filter((r)=>jenisData.key !== 'pnbp_dan_mp_pnbp' || [
                'target_penerimaan_pnbp',
                'realisasi_pnbp'
            ].includes(r.field_key)).map((r)=>({
                jenis_data_id: jenisData.id,
                upt_key: currentUptKey,
                period_id: activePeriod.id,
                ...fiturMultiBaris ? {
                    baris_ke: r.baris_ke ?? 1
                } : {},
                field_key: r.field_key,
                value: jenisData.key === 'pnbp_dan_mp_pnbp' && r.field_key === 'realisasi_pnbp' ? 0 : r.value,
                value_text: jenisData.key === 'pnbp_dan_mp_pnbp' && r.field_key === 'realisasi_pnbp' ? '0' : r.value_text
            }));
        if (!err && !upserts.length) err = {
            message: `tidak ada isian yang bisa disalin dari ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(mingguLalu1.period)}`
        };
        if (!err) {
            const onConflict = fiturMultiBaris ? 'jenis_data_id,upt_key,period_id,baris_ke,field_key' : 'jenis_data_id,upt_key,period_id,field_key';
            err = (await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').upsert(upserts, {
                onConflict
            })).error;
        }
        setMenyalin(false);
        if (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal menyalin: ' + err.message);
            return;
        }
        await loadData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(`${otomatis ? 'Data minggu ini otomatis diisi dari' : `${mingguLalu1.jumlah} baris disalin dari`} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(mingguLalu1.period)}. Perbarui angka yang berubah (mis. realisasi) lewat tombol Edit.${isAdmin ? '' : ' Baris minggu ini menunggu persetujuan Admin.'}`, 'success');
    }
    // Data Anggaran berlanjut: akun UPT yang membuka minggu kosong langsung mendapat salinan
    // minggu terakhir yang terisi. Hanya sekali per minggu dalam satu sesi browser, supaya minggu yang sengaja
    // dikosongkan tidak langsung terisi lagi. Admin tetap memakai tombol Salin (tidak menulis atas nama UPT).
    function bolehSalinOtomatis() {
        if (isAdmin || isAllUpt) return false;
        const kunci = `salin-otomatis|${jenisData.id}|${currentUptKey}|${activePeriod.id}`;
        try {
            if (sessionStorage.getItem(kunci)) return false;
            sessionStorage.setItem(kunci, '1');
        } catch  {}
        return true;
    }
    async function loadData() {
        if (!activePeriod) return;
        setLoading(true);
        if (activeLevel === 'bulan' && isMonthOnly) {
            if (jenisData.mode_bulanan === 'agregasi' || jenisData.mode_bulanan === 'upload_file') {
                setEntries([]);
                setValidation(null);
                setLoading(false);
                return;
            }
            // 1. Ambil data baris rincian (data_entries)
            let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').select('*').eq('jenis_data_id', jenisData.id).eq('period_id', activePeriod.id).order('created_at');
            if (!isAllUpt) q = q.eq('upt_key', currentUptKey);
            const [{ data: entData }, entriMenunggu] = await Promise.all([
                q,
                loadEditMenunggu('data_entries')
            ]);
            const currentEntries = entData || [];
            setEntries(currentEntries);
            setEditMenunggu({
                rekap: {},
                entri: entriMenunggu
            });
            // Rincian bulanan tidak direkap per minggu; kelengkapan ditampilkan dari data nama bulan aktif.
            setValidation(null);
        } else if (activeLevel === 'minggu') {
            if (isAllUpt) {
                // "Semua UPT" di mingguan cuma target aksi massal (Kosongkan/Hapus) — tidak ada form gabungan untuk diisi.
                setSavedSnap({});
                setLateRekap(false);
                setBarisList([
                    {
                        baris_ke: 1,
                        values: {}
                    }
                ]);
            } else {
                // Ambil nilai rekap mingguan
                let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('*').eq('jenis_data_id', jenisData.id).eq('period_id', activePeriod.id).eq('upt_key', currentUptKey);
                const [{ data }, rekapMenunggu] = await Promise.all([
                    q,
                    loadEditMenunggu('rekap_nilai')
                ]);
                setEditMenunggu({
                    rekap: rekapMenunggu,
                    entri: {}
                });
                const snap = {};
                const statusByBaris = {};
                const catatanByBaris = {};
                const terlambatByBaris = {};
                (data || []).forEach((r)=>{
                    const b = r.baris_ke ?? 1;
                    (snap[b] ||= {})[r.field_key] = r.value !== null && r.value !== undefined ? r.value : r.value_text;
                    if (r.status) statusByBaris[b] = r.status; // semua field satu baris_ke selalu sinkron (lihat forceOnWrite)
                    if (r.catatan_admin) catatanByBaris[b] = r.catatan_admin;
                    if (r.terlambat) terlambatByBaris[b] = true;
                });
                setSavedSnap(snap);
                setLateRekap((data || []).some((r)=>r.terlambat));
                const list = Object.keys(snap).map(Number).sort((a, b)=>a - b).map((b)=>({
                        baris_ke: b,
                        values: {
                            ...snap[b]
                        },
                        status: statusByBaris[b],
                        catatanAdmin: catatanByBaris[b],
                        terlambat: !!terlambatByBaris[b]
                    }));
                setBarisList(list.length ? list : [
                    {
                        baris_ke: 1,
                        values: {}
                    }
                ]);
                await muatStruktur();
                await muatTarget();
                const lalu = list.length ? null : await cariMingguLalu();
                setMingguLalu(lalu);
                if (lalu && bolehSalinOtomatis()) {
                    setLoading(false);
                    await salinMingguLalu(lalu, true);
                    return;
                }
            }
            setDimuatUntuk(`${activePeriod.id}|${currentUptKey}`);
        } else if (activeLevel === 'bulan' || activeLevel === 'triwulan' || activeLevel === 'tahun') {
            await calculateAggregation();
        }
        setLoading(false);
    }
    // Hitung status 4 minggu pasangan mingguan & bandingkan dengan rincian bulan
    async function checkPartnerWeeklyProgress(currentEntries) {
        // Validasi kelengkapan mingguan bersifat per-UPT — tidak berarti saat "Semua UPT" digabung dalam satu tabel.
        if (!jenisData.pasangan_mingguan_id || isAllUpt) {
            setValidation(null);
            return;
        }
        const partnerId = jenisData.pasangan_mingguan_id;
        // Ambil 4 periode minggu dalam bulan aktif
        const weekPeriods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weeksOfMonth"])(periods, activePeriod.tahun, activePeriod.bulan);
        if (!weekPeriods.length) {
            setValidation(null);
            return;
        }
        const weekIds = weekPeriods.map((p)=>p.id);
        const { data: partnerRekap } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('*').eq('jenis_data_id', partnerId).eq('upt_key', currentUptKey).in('period_id', weekIds);
        const rekapList = partnerRekap || [];
        // Field angka utama di pasangan (mis. jumlah_peserta)
        const targetField = partnerFieldDefs.find((f)=>f.tipe === 'angka') || {
            field_key: 'jumlah_peserta',
            label: 'Jumlah Peserta'
        };
        // Hitung minggu mana saja yang sudah ada entri
        const filledWeekIds = new Set();
        let totalMingguan = 0;
        weekPeriods.forEach((wp)=>{
            const match = rekapList.find((r)=>r.period_id === wp.id && r.field_key === targetField.field_key);
            if (match && match.value !== null && match.value !== undefined) {
                filledWeekIds.add(wp.id);
                totalMingguan += Number(match.value) || 0;
            }
        });
        const filledWeeksCount = filledWeekIds.size;
        const entriCount = currentEntries.length;
        setValidation({
            partnerJudul: partnerJd?.judul || 'Pasangan Mingguan',
            targetFieldLabel: targetField.label,
            filledWeeksCount,
            totalWeeks: weekPeriods.length,
            totalMingguan,
            entriCount,
            selisih: entriCount - totalMingguan,
            isMatch: entriCount === totalMingguan && filledWeeksCount >= weekPeriods.length
        });
    }
    // Auto-agregasi dari level minggu ke triwulan / tahun
    async function calculateAggregation() {
        let weekPeriods = [];
        if (activeLevel === 'bulan') {
            weekPeriods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weeksOfMonth"])(periods, activePeriod.tahun, activePeriod.bulan);
        } else if (activeLevel === 'triwulan') {
            weekPeriods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weeksOfQuarter"])(periods, activePeriod.tahun, activePeriod.triwulan_ke);
        } else if (activeLevel === 'tahun') {
            weekPeriods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weeksOfYear"])(periods, activePeriod.tahun);
        }
        if (!weekPeriods.length) {
            setAggregatedData({
                totals: {},
                weekRows: []
            });
            return;
        }
        const weekIds = weekPeriods.map((p)=>p.id);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('*').eq('jenis_data_id', jenisData.id).eq('upt_key', currentUptKey).in('period_id', weekIds);
        const rekapRows = data || [];
        const totals = {};
        // Rekap tiap kolom angka sesuai cara rekapnya: jumlah / nilai terakhir (kumulatif) / rata-rata / maks.
        fieldDefs.filter((f)=>f.tipe === 'angka').forEach((f)=>{
            const perWeek = weekIds.map((id)=>{
                const rs = rekapRows.filter((r)=>r.period_id === id && r.field_key === f.field_key && r.value !== null && r.value !== undefined);
                return rs.length ? rs.reduce((acc, r)=>acc + Number(r.value), 0) : null;
            });
            totals[f.field_key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyAgregasi"])(perWeek, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agregasiOf"])(f)) ?? 0;
        });
        // Susun breakdown per minggu
        const weekRows = weekPeriods.map((wp)=>{
            const rowVals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weekValues"])(rekapRows.filter((r)=>r.period_id === wp.id));
            return {
                period: wp,
                values: rowVals,
                hasData: Object.keys(rowVals).length > 0
            };
        });
        setAggregatedData({
            totals,
            weekRows,
            totalWeeks: weekPeriods.length
        });
    }
    // ── Baris/pelatihan mingguan — Tambah/Edit lewat modal (satu baris per aksi), rekap tampil sebagai tabel ──
    const existingBaris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>barisList.filter((b)=>Object.keys(b.values).length > 0), [
        barisList
    ]);
    function openAddBaris() {
        setKolomKunci([]);
        const nextBarisKe = multiBaris ? existingBaris.length ? Math.max(...existingBaris.map((b)=>b.baris_ke)) + 1 : 1 : 1;
        setEditingBarisKe(nextBarisKe);
        setModalValues(jenisData.key === 'pnbp_dan_mp_pnbp' ? {
            realisasi_pnbp: 0
        } : {});
        setBarisModalOpen(true);
    }
    function openEditBaris(baris) {
        // Data Anggaran: saat mengedit (status apa pun), kode & uraian KRO/RO/Komponen yang sudah terisi hanya dilihat;
        // yang diubah cukup Sumber Dana, Pagu, Realisasi. Admin tetap bebas mengoreksi semua kolom.
        setKolomKunci(pakaiDaftarAdmin && !isAdmin ? FIELD_REFERENSI_ANGGARAN : []);
        setEditingBarisKe(baris.baris_ke);
        setModalValues({
            ...baris.values
        });
        setBarisModalOpen(true);
    }
    function closeBarisModal() {
        setBarisModalOpen(false);
        setEditingBarisKe(null);
        setModalValues({});
        if (langsungBaris) onSelesai?.();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!langsungBaris || langsungDibuka || !fieldDefs.length || dimuatUntuk !== `${initialPeriodId}|${currentUptKey}`) return;
        setLangsungDibuka(true);
        const b = langsungBaris !== 'baru' && existingBaris.find((x)=>x.baris_ke === Number(langsungBaris));
        if (b) mintaEditBaris(b);
        else openAddBaris();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        langsungBaris,
        langsungDibuka,
        fieldDefs,
        dimuatUntuk,
        initialPeriodId,
        currentUptKey,
        existingBaris
    ]);
    // Tombol Edit. Baris yang SUDAH disetujui Admin tidak langsung membuka isian (akun UPT): yang muncul adalah
    // popup "Ajukan Edit". Setelah Admin menyetujui permintaan itu, baris kembali jadi Draft (isinya tetap) dan
    // tombol Edit membuka isian seperti biasa. Lihat be/src/modules/permintaan/permintaan-edit.service.ts.
    async function ajukanEdit(kirim, menunggu) {
        if (menunggu === 'hapus') {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alertDialog"])('Pengajuan hapus masih menunggu Admin\n\nBaris ini sedang diajukan untuk dihapus. Tunggu keputusan Admin sebelum mengajukan edit.', {
                tone: 'info'
            });
            return;
        }
        if (menunggu) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alertDialog"])('Pengajuan edit masih menunggu Admin\n\nBaris ini bisa diedit setelah Admin menyetujui pengajuan Anda. Sampai saat itu isi datanya tetap seperti semula dan tetap dihitung di Dashboard.', {
                tone: 'info'
            });
            return;
        }
        const alasan = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promptDialog"])('Ajukan edit ke Admin?\n\nBaris ini sudah disetujui Admin, jadi perlu izin untuk mengubahnya. Isi data tidak berubah selama menunggu. Setelah disetujui, baris ini menjadi Draft dan bisa Anda edit.', {
            placeholder: 'Alasan edit (opsional)',
            confirmLabel: 'Ajukan Edit'
        });
        if (alasan === null) return;
        const { error } = await kirim(alasan.trim() || undefined);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal mengajukan edit: ' + error.message);
            return;
        }
        await loadData();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alertDialog"])(EDIT_TERKIRIM);
    }
    function mintaEditBaris(baris) {
        if (isAdmin || baris.status !== 'disetujui') {
            openEditBaris(baris);
            return;
        }
        ajukanEdit((alasan)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].permintaanEdit.ajukanRekap(jenisData.id, activePeriod.id, baris.baris_ke, [], [], alasan), pengajuanRekap(baris.baris_ke));
    }
    function mintaEditEntry(entry) {
        if (isAdmin || entry.status !== 'disetujui') {
            setEditEntry(entry);
            setFormValues(entry.data_json || {});
            setAddEntryModal(true);
            return;
        }
        ajukanEdit((alasan)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].permintaanEdit.ajukanEntry(entry.id, undefined, alasan), pengajuanEntri(entry.id));
    }
    // Simpan SATU baris/pelatihan (lewat modal Tambah/Edit). Kolom yang dikosongkan ikut dihapus (masuk Tempat
    // Sampah), jadi mengosongkan kolom benar-benar menghapus nilainya -- .liveEdit() supaya tetap langsung
    // tersimpan (bukan diajukan sbg permintaan) karena ini bagian dari sesi edit, bukan tombol Hapus eksplisit.
    // Baris yang sudah disetujui Admin tidak sampai ke sini untuk akun UPT (lihat mintaEditBaris).
    async function saveBarisModal() {
        setSaving(true);
        const barisKe = editingBarisKe;
        const base = {
            jenis_data_id: jenisData.id,
            upt_key: currentUptKey,
            period_id: activePeriod.id
        };
        const prevValues = savedSnap[barisKe] || {};
        const upserts = [];
        const clearedFields = [];
        for (const f of fieldsAnggaran){
            const val = modalValues[f.field_key];
            if (val === '' || val === null || val === undefined) {
                if (prevValues[f.field_key] !== undefined) clearedFields.push(f.field_key);
                continue;
            }
            upserts.push({
                ...base,
                ...features.multiBaris ? {
                    baris_ke: barisKe
                } : {},
                field_key: f.field_key,
                value: f.tipe === 'angka' ? Number(val) : null,
                value_text: String(val)
            });
        }
        let error = null;
        if (upserts.length) {
            const onConflict = features.multiBaris ? 'jenis_data_id,upt_key,period_id,baris_ke,field_key' : 'jenis_data_id,upt_key,period_id,field_key';
            error = (await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').upsert(upserts, {
                onConflict
            })).error;
        }
        if (!error && clearedFields.length) {
            let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').delete().liveEdit().eq('jenis_data_id', jenisData.id).eq('upt_key', currentUptKey).eq('period_id', activePeriod.id).in('field_key', clearedFields);
            if (features.multiBaris) q = q.eq('baris_ke', barisKe);
            error = (await q).error;
        }
        setSaving(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal menyimpan: ' + error.message);
            return;
        }
        closeBarisModal();
        await loadData();
        onSaved?.();
    }
    // Baris yang sudah disetujui Admin tidak bisa diedit/dihapus langsung -- server sendiri yang menggerbangnya
    // jadi permintaan hapus (rowApprovalGate); draft/ditolak tetap bebas dihapus langsung. Teks konfirmasi saja
    // yang dibedakan di sini, panggilan API-nya sama persis untuk kedua kasus.
    async function deleteBaris(baris) {
        const isApproved = baris.status === 'disetujui';
        const msg = isApproved ? 'Baris ini sudah disetujui Admin.\n\nAjukan hapus ke Admin? Setelah disetujui, Anda bisa memasukkan data baru di posisi ini.' : 'Hapus baris ini?\n\nData masuk Tempat Sampah 30 hari dan hanya Admin yang dapat memulihkannya.';
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(msg, {
            danger: true,
            confirmLabel: isApproved ? 'Ajukan hapus' : 'Ya, hapus'
        })) return;
        const { error, pending } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').delete().eq('jenis_data_id', jenisData.id).eq('upt_key', currentUptKey).eq('period_id', activePeriod.id).eq('baris_ke', baris.baris_ke);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal menghapus: ' + error.message);
            return;
        }
        if (pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(PENDING_MSG);
        await loadData();
        if (isAdmin && !pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyDihapus"])(`1 ${sebutanBaris.toLowerCase()} · ${keteranganHapus()}`);
    }
    // "Data Anggaran · Minggu ke-2 Oktober 2026 · BPPP Ambon" — isi pemberitahuan setelah Admin menghapus data
    const keteranganHapus = ()=>[
            jenisData.judul,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod),
            isAllUpt ? 'Semua UPT' : uptLabelOf(currentUptKey)
        ].filter(Boolean).join(' · ');
    // Status & tombol aksi satu baris mingguan — dipakai tabel biasa dan tabel per RO (Data Anggaran)
    function statusBaris(b) {
        const isApproved = b.status === 'disetujui';
        const isRejected = b.status === 'ditolak';
        const pengajuan = pengajuanRekap(b.baris_ke);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1 items-start",
            children: [
                pengajuan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    variant: pengajuan === 'hapus' ? 'danger' : 'warning',
                    children: pengajuan === 'hapus' ? 'Pengajuan Hapus' : 'Pengajuan Edit'
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 734,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    variant: isApproved ? 'success' : isRejected ? 'danger' : 'warning',
                    children: isApproved ? 'Disetujui' : isRejected ? 'Ditolak' : 'Menunggu Persetujuan'
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 736,
                    columnNumber: 11
                }, this),
                b.terlambat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
                    children: "Terlambat"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 740,
                    columnNumber: 25
                }, this),
                isRejected && b.catatanAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] text-rose-600 dark:text-rose-400 max-w-[180px] truncate",
                    title: b.catatanAdmin,
                    children: b.catatanAdmin
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 742,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
            lineNumber: 732,
            columnNumber: 7
        }, this);
    }
    function aksiBaris(b) {
        const isApproved = b.status === 'disetujui';
        const editDiajukan = !!pengajuanRekap(b.baris_ke);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>mintaEditBaris(b),
                    className: "p-1.5 rounded text-gray-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors",
                    title: !isAdmin && isApproved ? editDiajukan ? 'Permintaan edit menunggu Admin' : 'Ajukan edit ke Admin' : 'Edit',
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 758,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 752,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>deleteBaris(b),
                    className: `p-1.5 rounded transition-colors ${isApproved ? 'text-amber-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30' : 'text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30'}`,
                    title: isApproved ? 'Sudah disetujui — ajukan hapus ke Admin' : 'Hapus',
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 766,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 760,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
            lineNumber: 751,
            columnNumber: 7
        }, this);
    }
    // Tombol "+" pada KRO/RO/Komponen: tambah rincian dengan kode (dan nama) tingkat itu & di atasnya sudah terisi
    // Kode & uraian tingkat induknya dikunci (hanya dilihat), mis. + di Komponen mengunci KRO, RO, dan Komponen.
    // Hanya kolom yang sudah berisi: kelompok "Tanpa kode ..." tetap bisa dilengkapi.
    function tambahDiRO(isianAwal, kunci = []) {
        openAddBaris();
        // Mode daftar Admin: awalan kode tingkat bawah ("ABAC.") tidak dipakai, karena kodenya dipilih dari daftar
        const isi = Object.fromEntries(Object.entries(isianAwal || {}).filter(([, v])=>v !== undefined && v !== '' && !(pakaiDaftarAdmin && String(v).endsWith('.'))));
        setModalValues(isi);
        setKolomKunci(kunci.filter((k)=>isi[k] !== undefined));
    }
    async function saveEntry(values) {
        setSaving(true);
        const payload = {
            jenis_data_id: jenisData.id,
            upt_key: currentUptKey,
            period_id: activePeriod.id,
            nama: values.nama || values.nama_pelatihan || null,
            nik: values.nik ? String(values.nik) : null,
            data_json: values
        };
        // Entri yang sudah disetujui Admin tidak sampai ke sini untuk akun UPT (lihat mintaEditEntry).
        if (editEntry) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').update(payload).eq('id', editEntry.id);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').insert(payload);
        }
        setSaving(false);
        setAddEntryModal(false);
        setEditEntry(null);
        setFormValues({});
        loadData();
    // Catatan: onSaved TIDAK dipanggil di sini (beda dengan saveBarisModal/impor Excel) — menyimpan satu baris rincian
    // bukan akhir dari sesi input; popup pemanggil (mis. Input Bulanan) baru menyegarkan rekap saat ditutup.
    }
    async function deleteEntry(id) {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])('Hapus baris data ini?\n\nData masuk Tempat Sampah 30 hari dan hanya Admin yang dapat memulihkannya.')) return;
        const { error, pending } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').delete().eq('id', id);
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal menghapus: ' + error.message);
        else if (pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(PENDING_MSG);
        await loadData();
        if (isAdmin && !error && !pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyDihapus"])(`1 baris data · ${keteranganHapus()}`);
    }
    // ── Hapus massal per periode (mingguan: seluruh isian minggu ini; bulanan: seluruh baris bulan ini) ──
    const CLEAR_TABLE = {
        rekap: 'rekap_nilai',
        entries: 'data_entries'
    };
    function clearQuery(kind, builder) {
        let q = builder.eq('jenis_data_id', jenisData.id).eq('period_id', activePeriod.id);
        if (!isAllUpt) q = q.eq('upt_key', currentUptKey);
        return q;
    }
    // Baris dengan UPT, periode & seluruh isi kolom yang sama persis (mis. akibat unggah/impor dua kali).
    // Baris pertama tiap kelompok dipertahankan, sisanya ditandai duplikat.
    const duplicateEntryIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const seen = new Map();
        const dupIds = [];
        for (const e of entries){
            const key = `${e.upt_key}|${e.period_id}|${fieldDefs.map((f)=>{
                const v = e.data_json?.[f.field_key];
                return v !== undefined && v !== null ? String(v) : '';
            }).join('')}`;
            if (seen.has(key)) dupIds.push(e.id);
            else seen.set(key, e.id);
        }
        return dupIds;
    }, [
        entries,
        fieldDefs
    ]);
    async function deleteDuplicates() {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(`Hapus ${duplicateEntryIds.length} baris duplikat?\n\nData masuk Tempat Sampah 30 hari dan hanya Admin yang dapat memulihkannya.`)) return;
        const jumlah = duplicateEntryIds.length;
        const { error, pending } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').delete().in('id', duplicateEntryIds);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal menghapus: ' + error.message);
            return;
        }
        if (pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(PENDING_MSG);
        await loadData();
        if (isAdmin && !pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyDihapus"])(`${jumlah} baris duplikat · ${keteranganHapus()}`);
    }
    async function openClear(kind) {
        const { count } = await clearQuery(kind, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from(CLEAR_TABLE[kind]).select('*', {
            count: 'exact',
            head: true
        }));
        setClearDialog({
            kind,
            count: count || 0
        });
    }
    async function confirmClear() {
        const { kind, count } = clearDialog;
        const { error, pending } = await clearQuery(kind, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from(CLEAR_TABLE[kind]).delete());
        if (error) return {
            error
        };
        setClearDialog(null);
        if (pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(PENDING_MSG);
        await loadData();
        if (isAdmin && !pending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyDihapus"])(`${kind === 'entries' ? `${count} baris data` : 'Seluruh isian minggu ini'} · ${keteranganHapus()}`);
        return {};
    }
    async function handleFileUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const { headers, rows, barisJudul } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readExcelFile"])(file);
            const initialMapping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$columnMatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchColumns"])(headers, fieldDefs);
            setMappingData({
                headers,
                rows,
                initialMapping,
                barisJudul
            });
            setUploadModal(true);
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Gagal membaca file: ' + err.message);
        }
        e.target.value = '';
    }
    // ── Upload Excel mingguan (mis. Data Anggaran): tiap baris Excel jadi satu baris minggu terpilih ──
    // Baris dicocokkan dengan baris tersimpan lewat kolom bukan-angka (mis. Kode RO + Nama RO + Sumber Dana): yang sama
    // persis dilewati, yang berbeda diperbarui, sisanya ditambahkan sebagai baris baru. Baris yang sudah disetujui
    // Admin tidak ditimpa (akun UPT); ubah lewat tombol Edit (Ajukan Edit).
    async function imporMingguan(mapping) {
        const kolom = fieldDefs.filter((f)=>f.tipe !== 'file');
        const identitas = kolom.filter((f)=>f.tipe !== 'angka');
        const kunci = (v)=>identitas.map((f)=>String(v[f.field_key] ?? '').trim().toLowerCase()).join('|');
        const { entries: converted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$columnMatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertRows"])(mappingData.rows, mapping, fieldDefs);
        const awal = (mappingData.barisJudul || 1) + 1;
        const masalah = [];
        const dariExcel = [];
        converted.forEach((e, i)=>{
            const noBaris = awal + i;
            const v = {};
            for (const f of kolom){
                const raw = e.data_json[f.field_key];
                if (raw === null || raw === undefined || String(raw).trim() === '') continue;
                if (f.tipe === 'angka') {
                    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAngka"])(raw);
                    if (n === null) masalah.push(`Baris ${noBaris}: ${f.label} "${raw}" bukan angka (dikosongkan)`);
                    else v[f.field_key] = n;
                } else if (f.tipe === 'pilihan' && Array.isArray(f.opsi_pilihan) && f.opsi_pilihan.length) {
                    const opsi = f.opsi_pilihan.find((o)=>samaTeks(o, raw));
                    if (opsi) v[f.field_key] = opsi;
                    else masalah.push(`Baris ${noBaris}: ${f.label} "${raw}" tidak ada di pilihan (${f.opsi_pilihan.join(', ')}), dikosongkan`);
                } else {
                    v[f.field_key] = String(raw).trim();
                }
            }
            if (!Object.keys(v).length) return; // baris kosong
            if (pakaiDaftarAdmin) {
                const cocok = struktur.find((s)=>sama(s.kode_kro, v.kode_kro) && sama(s.kode_ro, v.kode_ro) && sama(s.kode_komponen, v.kode_komponen));
                if (!cocok) {
                    masalah.push(`Baris ${noBaris}: ${[
                        v.kode_kro,
                        v.kode_ro,
                        v.kode_komponen
                    ].filter(Boolean).join(' / ') || 'KRO/RO/Komponen'} tidak ada di daftar dari Admin (dilewati)`);
                    return;
                }
                for (const t of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TINGKAT_ANGGARAN"]){
                    v[t.kode] = cocok[t.kode];
                    if (cocok[t.nama]) v[t.nama] = cocok[t.nama];
                    else delete v[t.nama];
                }
            }
            const kurang = kolom.filter((f)=>f.wajib && v[f.field_key] === undefined);
            if (kurang.length) {
                masalah.push(`Baris ${noBaris}: ${kurang.map((f)=>f.label).join(', ')} wajib diisi (baris dilewati)`);
                return;
            }
            dariExcel.push({
                noBaris,
                v
            });
        });
        if (!dariExcel.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Tidak ada baris yang bisa diimpor.' + (masalah.length ? `\n\n${masalah.slice(0, 8).join('\n')}` : ''), 'error');
            return;
        }
        // Cocokkan dengan baris tersimpan minggu ini
        const tersimpan = new Map(existingBaris.map((b)=>[
                kunci(b.values),
                b
            ]));
        const dipakai = new Set();
        let berikut = existingBaris.length ? Math.max(...existingBaris.map((b)=>b.baris_ke)) + 1 : 1;
        const tulis = [] // { baris_ke, v }
        ;
        const hasil = {
            baru: 0,
            diperbarui: 0,
            sama: 0,
            disetujui: 0
        };
        for (const { noBaris, v } of dariExcel){
            const k = kunci(v);
            if (identitas.length && dipakai.has(k)) {
                masalah.push(`Baris ${noBaris}: ${identitas.map((f)=>v[f.field_key] || '-').join(' · ')} muncul lebih dari sekali (dilewati)`);
                continue;
            }
            dipakai.add(k);
            const lama = multiBaris ? identitas.length ? tersimpan.get(k) : null : existingBaris[0];
            if (!multiBaris && tulis.length) {
                masalah.push(`Baris ${noBaris}: jenis data ini hanya satu baris per minggu (dilewati)`);
                continue;
            }
            if (!lama) {
                tulis.push({
                    baris_ke: multiBaris ? berikut++ : 1,
                    v
                });
                hasil.baru++;
                continue;
            }
            const berubah = kolom.some((f)=>{
                const a = lama.values[f.field_key];
                const b = v[f.field_key];
                if (b === undefined) return false // kolom kosong di Excel tidak menghapus isian tersimpan
                ;
                return f.tipe === 'angka' ? Number(a) !== Number(b) : !samaTeks(a, b);
            });
            if (!berubah) {
                hasil.sama++;
                continue;
            }
            if (lama.status === 'disetujui' && !isAdmin) {
                hasil.disetujui++;
                continue;
            }
            tulis.push({
                baris_ke: lama.baris_ke,
                v
            });
            hasil.diperbarui++;
        }
        const ringkas = [
            hasil.baru && `${hasil.baru} baris baru`,
            hasil.diperbarui && `${hasil.diperbarui} baris diperbarui`,
            hasil.sama && `${hasil.sama} baris sama (dilewati)`,
            hasil.disetujui && `${hasil.disetujui} baris sudah disetujui Admin tidak diubah (pakai tombol Edit untuk mengajukan perubahan)`
        ].filter(Boolean);
        const catatan = masalah.length ? `\n\nPerlu dicek:\n${masalah.slice(0, 10).join('\n')}${masalah.length > 10 ? `\n…dan ${masalah.length - 10} lainnya` : ''}` : '';
        if (!tulis.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(`Tidak ada perubahan: ${ringkas.join(', ') || 'semua baris dilewati'}.${catatan}`, 'info');
            setUploadModal(false);
            setMappingData(null);
            return;
        }
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(`Simpan hasil impor ke ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)}?\n\n${ringkas.join(', ')}.${catatan}`, {
            confirmLabel: 'Simpan'
        })) return;
        setSaving(true);
        const upserts = tulis.flatMap(({ baris_ke, v })=>Object.entries(v).map(([field_key, val])=>{
                const f = kolom.find((x)=>x.field_key === field_key);
                return {
                    jenis_data_id: jenisData.id,
                    upt_key: currentUptKey,
                    period_id: activePeriod.id,
                    ...features.multiBaris ? {
                        baris_ke
                    } : {},
                    field_key,
                    value: f.tipe === 'angka' ? Number(val) : null,
                    value_text: String(val)
                };
            }));
        const onConflict = features.multiBaris ? 'jenis_data_id,upt_key,period_id,baris_ke,field_key' : 'jenis_data_id,upt_key,period_id,field_key';
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').upsert(upserts, {
            onConflict
        });
        setSaving(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Impor gagal: ' + error.message);
            return;
        }
        setUploadModal(false);
        setMappingData(null);
        await loadData();
        onSaved?.();
        const menunggu = isAdmin ? '' : ' Baris baru/diperbarui menunggu persetujuan Admin.';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(`Impor selesai: ${ringkas.join(', ')}.${menunggu}`, 'success');
    }
    async function handleImportConfirm(mapping) {
        if (!mappingData) return;
        if (activeLevel === 'minggu') return imporMingguan(mapping);
        setSaving(true);
        const { entries: converted, extraKeys } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$columnMatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertRows"])(mappingData.rows, mapping, fieldDefs);
        const dataRows = [];
        const emptyRows = [];
        const firstExcelRow = (mappingData.barisJudul || 1) + 1;
        const hasValue = (value)=>value !== null && value !== undefined && String(value).trim() !== '';
        converted.forEach((entry, index)=>{
            const hasMappedValue = Object.values(entry.data_json || {}).some(hasValue);
            const hasExtraValue = Object.values(entry.data_ekstra || {}).some(hasValue);
            if (!hasMappedValue && !hasExtraValue) {
                emptyRows.push(firstExcelRow + index);
                return;
            }
            dataRows.push({
                ...entry,
                excelRow: firstExcelRow + index
            });
        });
        const nikRows = new Map();
        for (const row of dataRows){
            const nik = String(row.nik || '').trim();
            if (!nik) continue;
            nikRows.set(nik, [
                ...nikRows.get(nik) || [],
                row.excelRow
            ]);
        }
        const duplicateGroups = [
            ...nikRows.values()
        ].filter((rows)=>rows.length > 1);
        // Pertahankan baris dengan identitas sama dalam satu request supaya NIK berulang tidak tertimpa di batch berikutnya.
        const groups = new Map();
        dataRows.forEach((row, index)=>{
            const nik = String(row.nik || '').trim().toLowerCase();
            const nama = String(row.nama || row.data_json?.nama || '').trim().replace(/\s+/g, ' ').toLowerCase();
            const key = nik ? `nik:${nik}` : nama ? `nama:${nama}` : `baris:${row.excelRow}:${index}`;
            groups.set(key, [
                ...groups.get(key) || [],
                row
            ]);
        });
        const batches = [];
        let batch = [];
        for (const group of groups.values()){
            if (batch.length && batch.length + group.length > 1000) {
                batches.push(batch);
                batch = [];
            }
            for(let i = 0; i < group.length; i += 1000){
                const part = group.slice(i, i + 1000);
                if (part.length === 1000) batches.push(part);
                else batch.push(...part);
            }
        }
        if (batch.length) batches.push(batch);
        const totals = {
            baru: 0,
            diperbarui: 0,
            sama: 0,
            dilewatiDisetujui: 0,
            processed: 0
        };
        const failedBatches = [];
        let completedRows = 0;
        let connectionLost = false;
        setImportProgress({
            done: 0,
            total: dataRows.length
        });
        const processBatch = async (items, depth = 0)=>{
            const body = {
                jenis_data_id: jenisData.id,
                upt_key: currentUptKey,
                period_id: activePeriod.id,
                rows: items.map(({ nama, nik, data_json, data_ekstra })=>({
                        nama,
                        nik: nik || null,
                        data_json,
                        data_ekstra
                    }))
            };
            const { data: result, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].imporRincian(body);
            if (error) {
                const canSplit = items.length > 1 && depth < 12 && [
                    400,
                    409,
                    413
                ].includes(error.status);
                if (canSplit) {
                    const middle = Math.ceil(items.length / 2);
                    await processBatch(items.slice(0, middle), depth + 1);
                    await processBatch(items.slice(middle), depth + 1);
                    return;
                }
                failedBatches.push({
                    rows: items.map((item)=>item.excelRow),
                    message: error.message
                });
                completedRows += items.length;
                setImportProgress({
                    done: completedRows,
                    total: dataRows.length
                });
                if (!error.status) connectionLost = true;
                return;
            }
            totals.baru += Number(result.baru || 0);
            totals.diperbarui += Number(result.diperbarui || 0);
            totals.sama += Number(result.sama || 0);
            totals.dilewatiDisetujui += Number(result.dilewatiDisetujui || 0);
            totals.processed += items.length;
            completedRows += items.length;
            setImportProgress({
                done: completedRows,
                total: dataRows.length
            });
        };
        try {
            for(let index = 0; index < batches.length; index++){
                if (connectionLost) {
                    const remaining = batches.slice(index).flat();
                    if (remaining.length) failedBatches.push({
                        rows: remaining.map((item)=>item.excelRow),
                        message: 'Belum dikirim karena koneksi ke server terputus.'
                    });
                    break;
                }
                await processBatch(batches[index]);
            }
            if (extraKeys.length > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('audit_log').insert({
                    actor_upt_key: currentUptKey,
                    action: 'import_kolom_tidak_dikenal',
                    detail: {
                        jenis_data_id: jenisData.id,
                        kolom: extraKeys
                    }
                });
            }
            const menunggu = !isAdmin && (totals.baru || totals.diperbarui) ? 'Baris baru dan diperbarui menunggu persetujuan Admin.' : '';
            setImportReport({
                total: converted.length,
                processed: totals.processed,
                baru: totals.baru,
                diperbarui: totals.diperbarui,
                sama: totals.sama,
                dilewatiDisetujui: totals.dilewatiDisetujui,
                emptyRows,
                duplicateGroups,
                failedBatches,
                extraKeys,
                menunggu
            });
            setUploadModal(false);
            setMappingData(null);
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Impor terhenti: ' + (err?.message || 'terjadi kesalahan tak terduga'));
        } finally{
            setSaving(false);
        }
    }
    async function closeImportReport() {
        setImportReport(null);
        setImportProgress(null);
        await loadData();
        onSaved?.();
    }
    const instructorRoster = jenisData.key === 'data_instruktur_dan_widyaiswara';
    const copyPreviousMonthAllowed = instructorRoster || jenisData.key === 'data_belanja_modal';
    const rosterAktif = entries.filter((e)=>(e.data_json?.status_balai || 'Aktif') !== 'Keluar');
    const previousMonth = instructorRoster && activePeriod ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(periods.filter((p)=>p.level === 'bulan' && (Number(p.tahun) < Number(activePeriod.tahun) || Number(p.tahun) === Number(activePeriod.tahun) && Number(p.bulan) < Number(activePeriod.bulan)))).at(-1) : null;
    async function salinBulanSebelumnya() {
        if (!previousMonth || !currentUptKey) return;
        setMenyalin(true);
        const { data: oldRows, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').select('*').eq('jenis_data_id', jenisData.id).eq('upt_key', currentUptKey).eq('period_id', previousMonth.id).order('created_at');
        if (error) {
            setMenyalin(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(`Gagal memuat roster bulan lalu: ${error.message}`);
            return;
        }
        const identity = (row)=>{
            const v = row.data_json || {};
            if (jenisData.key === 'data_belanja_modal') return `item:${String(v.judul_kegiatan || row.nama || '').trim().toLowerCase()}|${String(v.sumber_dana || '').trim().toLowerCase()}`;
            const nip = String(v.nip || '').trim();
            return nip ? `nip:${nip.toLowerCase()}` : [
                row.nama || v.nama,
                v.jenis_kelamin,
                v.jenis_instruktur_wi,
                v.jenjang_jabatan,
                v.berdasarkan_keahlian,
                v.pendidikan
            ].map((x)=>String(x || '').trim().toLowerCase()).join('|');
        };
        const known = new Set(entries.map(identity));
        const missing = [];
        for (const row of oldRows || []){
            const key = identity(row);
            if (!known.has(key)) {
                known.add(key);
                missing.push(row);
            }
        }
        if (!missing.length) {
            setMenyalin(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])('Semua rincian dari bulan lalu sudah ada pada periode ini.', 'success');
            return;
        }
        const payload = missing.map((row)=>({
                jenis_data_id: jenisData.id,
                upt_key: currentUptKey,
                period_id: activePeriod.id,
                nama: row.nama || row.data_json?.nama || null,
                nik: null,
                data_json: {
                    ...row.data_json || {},
                    status_balai: row.data_json?.status_balai || 'Aktif'
                }
            }));
        const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').insert(payload);
        setMenyalin(false);
        if (insertError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(`Gagal menyalin roster: ${insertError.message}`);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(`${missing.length} baris disalin dari ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(previousMonth)}. Bulan sebelumnya tetap tersimpan.`, 'success');
        await loadData();
    }
    function handleLevelChange(level) {
        setActiveLevel(level);
        const levelPeriods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(periods.filter((p)=>p.level === level));
        setActivePeriod((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickCurrentPeriod"])(levelPeriods));
    }
    // Kode & nama KRO/RO/Komponen yang sudah ada minggu ini muncul sebagai saran saat mengetik, supaya rincian masuk
    // ke kelompok yang sama
    const fieldsAnggaran = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>jenisData.key === 'data_anggaran' ? fieldDefs.filter((f)=>!FIELD_ANGGARAN_MP.has(f.field_key)) : fieldDefs, [
        fieldDefs,
        jenisData.key
    ]);
    const fieldsModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["punyaKodeRO"])(fieldsAnggaran)) return fieldsAnggaran;
        const saranOf = (key)=>[
                ...new Set(existingBaris.map((b)=>String(b.values[key] ?? '').trim()).filter(Boolean))
            ];
        if (pakaiDaftarAdmin) {
            const unik = (arr)=>[
                    ...new Set(arr.filter(Boolean))
                ];
            const label = (kode, nama)=>nama ? `${kode} — ${nama}` : kode;
            const roPerKro = {};
            const kmpPerRo = {};
            const opsiLabel = {};
            for (const s of struktur){
                ;
                (roPerKro[s.kode_kro] ||= []).push(s.kode_ro);
                (kmpPerRo[s.kode_ro] ||= []).push(s.kode_komponen);
                opsiLabel[s.kode_kro] = label(s.kode_kro, s.nama_kro);
                opsiLabel[s.kode_ro] = label(s.kode_ro, s.nama_ro);
                opsiLabel[s.kode_komponen] = label(s.kode_komponen, s.nama_komponen);
            }
            const bersyarat = (dep, peta)=>({
                    depends_on: dep,
                    options: Object.fromEntries(Object.entries(peta).map(([k, v])=>[
                            k,
                            unik(v)
                        ]))
                });
            return fieldsAnggaran.map((f)=>{
                const kunci = kolomKunci.includes(f.field_key);
                if (f.field_key === 'kode_kro') return {
                    ...f,
                    tipe: 'pilihan',
                    opsi_pilihan: unik(struktur.map((s)=>s.kode_kro)),
                    opsiLabel,
                    kunci
                };
                if (f.field_key === 'kode_ro') return {
                    ...f,
                    tipe: 'pilihan',
                    opsi_pilihan: [],
                    opsi_bersyarat: bersyarat('kode_kro', roPerKro),
                    opsiLabel,
                    kunci
                };
                if (f.field_key === 'kode_komponen') return {
                    ...f,
                    tipe: 'pilihan',
                    opsi_pilihan: [],
                    opsi_bersyarat: bersyarat('kode_ro', kmpPerRo),
                    opsiLabel,
                    kunci
                };
                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KOLOM_TINGKAT"].includes(f.field_key)) return {
                    ...f,
                    kunci: true
                } // uraian mengikuti daftar Admin
                ;
                return f;
            });
        }
        return fieldsAnggaran.map((f)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KOLOM_TINGKAT"].includes(f.field_key) ? {
                ...f,
                saran: saranOf(f.field_key),
                kunci: kolomKunci.includes(f.field_key)
            } : f);
    }, [
        fieldsAnggaran,
        existingBaris,
        kolomKunci,
        pakaiDaftarAdmin,
        struktur
    ]);
    // Pilih kode dari daftar Admin -> uraiannya ikut terisi; tingkat di bawahnya dikosongkan bila induknya berganti
    function ubahModal(key, val) {
        setModalValues((v)=>{
            const next = {
                ...v,
                [key]: val
            };
            if (!pakaiDaftarAdmin) return next;
            const idx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TINGKAT_ANGGARAN"].findIndex((t)=>t.kode === key);
            if (idx < 0) return next;
            const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TINGKAT_ANGGARAN"][idx];
            const cocok = struktur.find((s)=>sama(s[t.kode], val));
            next[t.nama] = cocok?.[t.nama] || null;
            for (const bawah of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TINGKAT_ANGGARAN"].slice(idx + 1)){
                next[bawah.kode] = null;
                next[bawah.nama] = null;
            }
            return next;
        });
    }
    const barisModal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: barisModalOpen,
        onClose: closeBarisModal,
        title: `${existingBaris.some((b)=>b.baris_ke === editingBarisKe) ? multiBaris ? `Edit ${Sebutan}` : 'Edit Data Minggu Ini' : labelTambah}${activePeriod ? ` — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)}` : ''}${langsungBaris ? ` · ${jenisData.judul} · ${currentUptLabel}` : ''}`,
        maxWidth: "max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DynamicForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                level: "minggu",
                fields: fieldsModal,
                values: modalValues,
                onChange: ubahModal,
                disabled: false,
                onSubmit: (e)=>{
                    e.preventDefault();
                    saveBarisModal();
                },
                loading: saving,
                jenisDataId: jenisData.id,
                uptKey: currentUptKey
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HasilHitung$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                jenisKey: jenisData.key,
                values: modalValues
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
        lineNumber: 1231,
        columnNumber: 5
    }, this);
    const dataActionBar = !needsUptSelection && activePeriod && (activeLevel === 'minggu' || isMonthOnly && activeLevel === 'bulan' && ![
        'agregasi',
        'upload_file'
    ].includes(jenisData.mode_bulanan)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card p-3 flex items-center justify-between gap-3 flex-wrap border border-gray-200 dark:border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-medium text-gray-500 dark:text-gray-400",
                children: [
                    "Aksi data · ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 flex-wrap",
                children: activeLevel === 'minggu' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        (isAllUpt || Object.keys(savedSnap).length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>openClear('rekap'),
                            className: "btn-secondary text-xs text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1260,
                                    columnNumber: 17
                                }, this),
                                " Kosongkan Data Minggu Ini",
                                isAllUpt ? ' (Semua UPT)' : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1259,
                            columnNumber: 15
                        }, this),
                        !isAllUpt && IMPOR_EXCEL_MINGGUAN.has(jenisData.key) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateTemplateExcel"])({
                                            fieldDefs,
                                            jenisDataJudul: jenisData.judul,
                                            format: 'xlsx'
                                        }),
                                    className: "btn-secondary text-xs text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/60 hover:bg-blue-50 dark:hover:bg-blue-950/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1266,
                                            columnNumber: 19
                                        }, this),
                                        " Template Excel"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1265,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileRef,
                                    type: "file",
                                    accept: ".xlsx,.xls,.csv",
                                    className: "hidden",
                                    onChange: handleFileUpload
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1268,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>fileRef.current?.click(),
                                    className: "btn-secondary text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1269,
                                            columnNumber: 114
                                        }, this),
                                        " Upload Excel"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1269,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1264,
                            columnNumber: 15
                        }, this),
                        !isAllUpt && (multiBaris || existingBaris.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: openAddBaris,
                            disabled: butuhDaftarAdmin,
                            className: "btn-primary text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1273,
                                    columnNumber: 120
                                }, this),
                                " ",
                                labelTambah
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1273,
                            columnNumber: 15
                        }, this),
                        !isAllUpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportRekapNilai"])({
                                    rekapData: barisList.filter((b)=>Object.keys(b.values).length).map((b)=>({
                                            upt_key: currentUptKey,
                                            values: b.values
                                        })),
                                    fieldDefs,
                                    jenisDataJudul: jenisData.judul,
                                    periodLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                                }),
                            className: "btn-secondary text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1277,
                                    columnNumber: 17
                                }, this),
                                " Download Excel Mingguan"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1276,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 1257,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        copyPreviousMonthAllowed && !isAllUpt && previousMonth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: salinBulanSebelumnya,
                            disabled: menyalin,
                            className: "btn-secondary text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1284,
                                    columnNumber: 122
                                }, this),
                                " ",
                                menyalin ? 'Menyalin…' : 'Salin dari Bulan Sebelumnya'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1284,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateTemplateExcel"])({
                                    fieldDefs,
                                    jenisDataJudul: jenisData.judul,
                                    format: 'xlsx'
                                }),
                            className: "btn-secondary text-xs text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/60 hover:bg-blue-50 dark:hover:bg-blue-950/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1287,
                                    columnNumber: 15
                                }, this),
                                " Template Excel"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1286,
                            columnNumber: 13
                        }, this),
                        !isAllUpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileRef,
                                    type: "file",
                                    accept: ".xlsx,.xls,.csv",
                                    className: "hidden",
                                    onChange: handleFileUpload
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1291,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>fileRef.current?.click(),
                                    className: "btn-secondary text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1292,
                                            columnNumber: 114
                                        }, this),
                                        " Upload Excel"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1292,
                                    columnNumber: 17
                                }, this),
                                !jenisData.mode_upload_saja && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setEditEntry(null);
                                        setFormValues({});
                                        setAddEntryModal(true);
                                    },
                                    className: "btn-primary text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1293,
                                            columnNumber: 185
                                        }, this),
                                        " Tambah Baris"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1293,
                                    columnNumber: 49
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1290,
                            columnNumber: 15
                        }, this),
                        isAllUpt && duplicateEntryIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: deleteDuplicates,
                            className: "btn-secondary text-xs !text-amber-700 dark:!text-amber-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1296,
                                    columnNumber: 178
                                }, this),
                                " Hapus ",
                                duplicateEntryIds.length,
                                " Duplikat"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1296,
                            columnNumber: 58
                        }, this),
                        entries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>openClear('entries'),
                            className: "btn-secondary text-xs text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1297,
                                    columnNumber: 245
                                }, this),
                                " Hapus Semua Data Bulan Ini",
                                isAllUpt ? ' (Semua UPT)' : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1297,
                            columnNumber: 36
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportDataEntries"])({
                                    entries,
                                    fieldDefs,
                                    jenisDataJudul: jenisData.judul,
                                    periodLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod),
                                    uptKey: isAllUpt ? 'Semua UPT' : currentUptKey,
                                    uptLabelOf: isAllUpt ? uptLabelOf : undefined
                                }),
                            className: "btn-secondary text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1299,
                                    columnNumber: 15
                                }, this),
                                " Download Excel"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1298,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 1282,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1255,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
        lineNumber: 1253,
        columnNumber: 5
    }, this) : null;
    // Mode Edit langsung dari tabel rekap: hanya form satu baris, tanpa halaman input
    if (langsungBaris) {
        return barisModalOpen ? barisModal : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "animate-spin text-white",
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1311,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
            lineNumber: 1310,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            isAdmin && jenisData.key === 'data_anggaran' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setKelolaStruktur(true),
                    className: "btn-secondary text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1320,
                            columnNumber: 107
                        }, this),
                        " Kelola Katalog KRO Bersama"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 1320,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1319,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-4 shadow-sm border border-gray-100 dark:border-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PeriodSelector$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    level: activeLevel,
                    onLevelChange: handleLevelChange,
                    period: activePeriod,
                    onPeriodChange: setActivePeriod,
                    availablePeriods: periods,
                    allowedLevels: allowedLevels
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 1325,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-4 shadow-sm border border-gray-100 dark:border-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1339,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1338,
                            columnNumber: 11
                        }, this),
                        isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-[220px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label mb-1",
                                    children: "Pilih UPT/Balai"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1343,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedUptKey,
                                    onChange: (e)=>setSelectedUptKey(e.target.value),
                                    className: "form-select max-w-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "- Pilih UPT -"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1349,
                                            columnNumber: 17
                                        }, this),
                                        supportsAllUpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: [
                                                "Semua UPT (",
                                                uptList.length,
                                                " Balai)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1350,
                                            columnNumber: 36
                                        }, this),
                                        uptList.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: u.key,
                                                children: u.label
                                            }, u.key, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1352,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1344,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1342,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 uppercase tracking-wide font-semibold",
                                    children: "UPT/Balai"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1358,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900 dark:text-white",
                                    children: currentUptLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1359,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1357,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 1337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1336,
                columnNumber: 7
            }, this),
            dataActionBar,
            needsUptSelection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-8 text-center text-gray-400 dark:text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        size: 32,
                        className: "mx-auto mb-3 opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1369,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-600 dark:text-gray-400",
                        children: "Pilih UPT/Balai dulu di atas untuk melihat atau mengisi datanya."
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1370,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1368,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    pastDeadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-4 flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-rose-800 dark:text-rose-300 text-sm",
                                    children: "Lewat Deadline — data tetap bisa diisi"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-rose-600 dark:text-rose-400",
                                    children: [
                                        "Deadline periode ini ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTanggal"])(activePeriod.deadline),
                                        ". Data yang Anda simpan sekarang akan ditandai ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Terlambat"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1379,
                                            columnNumber: 175
                                        }, this),
                                        " (merah) dan terlihat oleh Admin."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1379,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1377,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1376,
                        columnNumber: 9
                    }, this),
                    isMonthOnly && validation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            validation.filledWeeksCount >= validation.totalWeeks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 rounded-xl p-3.5 flex items-center gap-3 text-emerald-800 dark:text-emerald-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1391,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1390,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: [
                                                    "4 minggu sudah lengkap, total ",
                                                    validation.totalMingguan,
                                                    " ",
                                                    validation.targetFieldLabel.toLowerCase()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-emerald-700 dark:text-emerald-300",
                                                children: [
                                                    "Lengkapi rincian nama (",
                                                    validation.entriCount,
                                                    " terisi saat ini) untuk mencocokkan dengan data mingguan ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: validation.partnerJudul
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1398,
                                                        columnNumber: 122
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1397,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1393,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1389,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-xl p-3.5 flex items-center gap-3 text-amber-800 dark:text-amber-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1405,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1404,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: [
                                                    "Baru ",
                                                    validation.filledWeeksCount,
                                                    " dari ",
                                                    validation.totalWeeks,
                                                    " minggu terisi, total sementara ",
                                                    validation.totalMingguan,
                                                    " ",
                                                    validation.targetFieldLabel.toLowerCase()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1408,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-amber-700 dark:text-amber-300",
                                                children: [
                                                    "Data mingguan pasangan ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: validation.partnerJudul
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1412,
                                                        columnNumber: 42
                                                    }, this),
                                                    " belum lengkap di bulan ini. Anda tetap dapat mencicil input rincian nama kapan saja."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1411,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1407,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1403,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-medium border ${validation.entriCount === validation.totalMingguan ? 'bg-emerald-100/60 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: validation.entriCount === validation.totalMingguan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 15,
                                                    className: "text-emerald-600 dark:text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1427,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Cocok:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                            lineNumber: 1429,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Total rincian bulan (",
                                                        validation.entriCount,
                                                        " baris) sama persis dengan total mingguan (",
                                                        validation.totalMingguan,
                                                        ")."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1428,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1426,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    size: 15,
                                                    className: "text-rose-600 dark:text-rose-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1434,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                "Ada Selisih (",
                                                                Math.abs(validation.selisih),
                                                                " baris):"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                            lineNumber: 1436,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Rincian Bulan = ",
                                                        validation.entriCount,
                                                        " baris, Total Mingguan = ",
                                                        validation.totalMingguan,
                                                        ".",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 dark:text-gray-400 ml-1",
                                                            children: "(Peringatan validasi, tidak menghalangi simpan)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                            lineNumber: 1437,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1435,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1433,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1424,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-xs uppercase px-2 py-0.5 rounded bg-white/70 dark:bg-gray-800/70",
                                        children: validation.entriCount === validation.totalMingguan ? 'Valid' : 'Perlu Dicocokkan'
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1442,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1419,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1386,
                        columnNumber: 9
                    }, this),
                    loadingPeriods ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            size: 28,
                            className: "animate-spin text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1452,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1451,
                        columnNumber: 9
                    }, this) : !activePeriod ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-10 text-center text-gray-400 dark:text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                size: 36,
                                className: "mx-auto mb-3 opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Tidak ada periode yang tersedia."
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1457,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-1",
                                children: "Hubungi Admin untuk membuat periode data."
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1458,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1455,
                        columnNumber: 9
                    }, this) : activePeriod ? activeLevel === 'bulan' && isMonthOnly ? jenisData.mode_bulanan === 'agregasi' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$BulanAgregatView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        jenisData: jenisData,
                        partnerJd: partnerJd,
                        activePeriod: activePeriod,
                        allPeriods: periods,
                        currentUptKey: currentUptKey,
                        currentUptLabel: currentUptLabel
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1463,
                        columnNumber: 13
                    }, this) : jenisData.mode_bulanan === 'upload_file' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$BulanUploadView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        jenisData: jenisData,
                        activePeriod: activePeriod,
                        currentUptKey: currentUptKey,
                        currentUptLabel: currentUptLabel,
                        isAdmin: isAdmin
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1472,
                        columnNumber: 13
                    }, this) : /* ======================================================== */ /* ===== LEVEL BULAN — DATA DETAIL PER BARIS RINCIAN ====== */ /* ======================================================== */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card shadow-sm border border-gray-100 dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-wrap gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-900 dark:text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: jenisData.judul
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1487,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge-neutral text-[10px] uppercase",
                                                    children: jenisData.key === 'data_belanja_modal' ? 'Rincian Keuangan' : instructorRoster || [
                                                        'masyarakat',
                                                        'aparatur',
                                                        'lulusan_dudika'
                                                    ].includes(jenisData.key) ? 'Data per Nama' : 'Rincian Bulanan'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1488,
                                                    columnNumber: 19
                                                }, this),
                                                currentUptLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge-blue text-[10px]",
                                                    children: currentUptLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1489,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1486,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: [
                                                entries.length,
                                                " baris data terdaftar pada ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1491,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1485,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1484,
                                columnNumber: 13
                            }, this),
                            instructorRoster && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 border-b border-gray-100 dark:border-gray-800",
                                children: [
                                    [
                                        'Total',
                                        rosterAktif.length
                                    ],
                                    [
                                        'Instruktur',
                                        rosterAktif.filter((e)=>String(e.data_json?.jenis_instruktur_wi || e.data_json?.jabatan || '').toLowerCase().includes('instruktur')).length
                                    ],
                                    [
                                        'Widyaiswara',
                                        rosterAktif.filter((e)=>String(e.data_json?.jenis_instruktur_wi || e.data_json?.jabatan || '').toLowerCase().includes('widyaiswara')).length
                                    ]
                                ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1506,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-semibold text-gray-900 dark:text-white tabular-nums",
                                                children: [
                                                    value.toLocaleString('id-ID'),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-500",
                                                        children: "orang"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1507,
                                                        columnNumber: 134
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1507,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1505,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1499,
                                columnNumber: 15
                            }, this),
                            entries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative max-w-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 14,
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1517,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: instructorRoster ? 'Cari nama, NIP, jabatan...' : 'Cari nama, NIK, pelatihan...',
                                            value: searchEntries,
                                            onChange: (e)=>setSearchEntries(e.target.value),
                                            className: "form-input pl-8 text-xs py-1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1518,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1516,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1515,
                                columnNumber: 15
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center py-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 24,
                                    className: "animate-spin text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1531,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1530,
                                columnNumber: 15
                            }, this) : filteredEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-14 text-gray-400 dark:text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                        size: 40,
                                        className: "mx-auto mb-3 opacity-30"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1535,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-600 dark:text-gray-400",
                                        children: "Belum ada rincian data per-orang."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1536,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: isAllUpt ? 'Pilih satu UPT untuk menambah/mengunggah data.' : 'Klik tombol "Tambah Baris" atau "Upload Excel" untuk melengkapi data.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1539,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1534,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-gray-100 dark:divide-gray-800 overflow-x-auto",
                                        children: paginatedEntries.map((entry, idx)=>{
                                            const globalIdx = (currentPage - 1) * pageSize + idx + 1;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400 w-9 flex-shrink-0 tabular-nums text-right",
                                                        children: [
                                                            globalIdx,
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1550,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-gray-900 dark:text-gray-100 truncate",
                                                                children: [
                                                                    entry.nama || entry.data_json?.nama || `Baris #${globalIdx}`,
                                                                    entry.terlambat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                title: "Disimpan setelah deadline",
                                                                                className: "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
                                                                                children: "Terlambat"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                                lineNumber: 1553,
                                                                                columnNumber: 114
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1553,
                                                                        columnNumber: 110
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1552,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex-wrap",
                                                                children: [
                                                                    entry.status && (pengajuanEntri(entry.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        variant: pengajuanEntri(entry.id) === 'hapus' ? 'danger' : 'warning',
                                                                        children: pengajuanEntri(entry.id) === 'hapus' ? 'Pengajuan Hapus' : 'Pengajuan Edit'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1557,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        variant: entry.status === 'disetujui' ? 'success' : entry.status === 'ditolak' ? 'danger' : 'warning',
                                                                        children: entry.status === 'disetujui' ? 'Disetujui' : entry.status === 'ditolak' ? 'Ditolak' : 'Menunggu Persetujuan'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1559,
                                                                        columnNumber: 31
                                                                    }, this)),
                                                                    entry.status === 'ditolak' && entry.catatan_admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-rose-600 dark:text-rose-400",
                                                                        children: [
                                                                            "Catatan: ",
                                                                            entry.catatan_admin
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1564,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    isAllUpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "badge-blue text-[10px]",
                                                                        children: uptLabelOf(entry.upt_key)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1566,
                                                                        columnNumber: 42
                                                                    }, this),
                                                                    (entry.data_json?.nip || entry.nik) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            instructorRoster ? 'NIP' : 'NIK',
                                                                            ": ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono",
                                                                                children: entry.data_json?.nip || entry.nik
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                                lineNumber: 1567,
                                                                                columnNumber: 111
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1567,
                                                                        columnNumber: 69
                                                                    }, this),
                                                                    instructorRoster && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: entry.data_json?.status_balai === 'Keluar' ? 'text-rose-600 dark:text-rose-400 font-medium' : 'text-emerald-700 dark:text-emerald-400',
                                                                        children: entry.data_json?.status_balai || 'Aktif'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1568,
                                                                        columnNumber: 50
                                                                    }, this),
                                                                    entry.data_json?.jenis_kelamin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "JK: ",
                                                                            entry.data_json.jenis_kelamin
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1569,
                                                                        columnNumber: 64
                                                                    }, this),
                                                                    entry.data_json?.nama_pelatihan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-600 dark:text-blue-400 font-medium truncate",
                                                                        children: [
                                                                            "Pelatihan: ",
                                                                            entry.data_json.nama_pelatihan
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1570,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    entry.data_json?.asal_instansi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Instansi: ",
                                                                            entry.data_json.asal_instansi
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1571,
                                                                        columnNumber: 64
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1555,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1551,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setViewEntry(entry),
                                                                className: "p-1.5 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors",
                                                                title: "Lihat Rincian",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                    lineNumber: 1580,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1575,
                                                                columnNumber: 27
                                                            }, this),
                                                            !isAllUpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>mintaEditEntry(entry),
                                                                className: "p-1.5 rounded text-gray-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors",
                                                                title: !isAdmin && entry.status === 'disetujui' ? pengajuanEntri(entry.id) ? 'Pengajuan masih menunggu Admin' : 'Ajukan edit ke Admin' : 'Edit Baris',
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                    lineNumber: 1588,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1583,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>deleteEntry(entry.id),
                                                                className: "p-1.5 rounded text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors",
                                                                title: entry.status === 'disetujui' ? 'Sudah disetujui — ajukan hapus ke Admin' : 'Hapus Baris',
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                    lineNumber: 1596,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1591,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1574,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, entry.id, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1549,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1545,
                                        columnNumber: 17
                                    }, this),
                                    filteredEntries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 text-xs text-gray-500 dark:text-gray-400 flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Tampilkan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1608,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: pageSize,
                                                        onChange: (e)=>{
                                                            setPageSize(Number(e.target.value));
                                                            setCurrentPage(1);
                                                        },
                                                        className: "form-select text-xs py-1 px-2.5 w-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 25,
                                                                children: "25 baris"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1617,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 50,
                                                                children: "50 baris"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1618,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 100,
                                                                children: "100 baris"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1619,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 250,
                                                                children: "250 baris"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1620,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 500,
                                                                children: "500 baris"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1621,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1609,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "dari ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: filteredEntries.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1623,
                                                                columnNumber: 34
                                                            }, this),
                                                            " total baris data"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1623,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1607,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                                        disabled: currentPage === 1,
                                                        className: "px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 transition-colors font-medium",
                                                        children: "« Prev"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1627,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 font-semibold text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            "Halaman ",
                                                            currentPage,
                                                            " dari ",
                                                            totalPages
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1634,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                                        disabled: currentPage >= totalPages,
                                                        className: "px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 transition-colors font-medium",
                                                        children: "Next »"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1637,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1626,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1606,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1544,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1483,
                        columnNumber: 11
                    }, this) : activeLevel === 'minggu' ? /* ======================================================== */ /* ===== LEVEL MINGGU — FORM INPUT MINGGUAN ================ */ /* ======================================================== */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-6 shadow-sm border border-gray-100 dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6 flex-wrap gap-2 border-b border-gray-100 dark:border-gray-800 pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: jenisData.judul
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1659,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge-neutral text-xs",
                                                    children: "Form Mingguan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1660,
                                                    columnNumber: 19
                                                }, this),
                                                lateRekap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
                                                    children: "Terlambat"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1661,
                                                    columnNumber: 33
                                                }, this),
                                                currentUptLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge-blue text-xs",
                                                    children: currentUptLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1662,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1658,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1664,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1657,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1656,
                                columnNumber: 13
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center py-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 24,
                                    className: "animate-spin text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1669,
                                    columnNumber: 58
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1669,
                                columnNumber: 15
                            }, this) : isAllUpt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-14 text-gray-400 dark:text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        size: 32,
                                        className: "mx-auto mb-3 opacity-30"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1672,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-600 dark:text-gray-400",
                                        children: "Pilih satu UPT untuk mengisi atau melihat data mingguan."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1673,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: '"Semua UPT" di sini cuma untuk mengosongkan data minggu ini sekaligus lewat tombol di atas.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1674,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1671,
                                columnNumber: 15
                            }, this) : fieldDefs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm text-center py-8",
                                children: "Belum ada kolom konfigurasi untuk jenis data mingguan ini."
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1677,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between flex-wrap gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: [
                                                existingBaris.length,
                                                " ",
                                                multiBaris ? sebutanBaris : 'baris',
                                                " tersimpan pada ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1681,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1680,
                                        columnNumber: 17
                                    }, this),
                                    target && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: simpanTarget,
                                        className: "flex items-end gap-3 flex-wrap rounded-xl border border-blue-100 bg-blue-50/60 dark:border-blue-900/50 dark:bg-blue-950/20 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label",
                                                        htmlFor: "target-peserta",
                                                        children: "Target peserta (orang)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1688,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "target-peserta",
                                                        className: "form-input w-44 tabular-nums",
                                                        inputMode: "numeric",
                                                        placeholder: target.lalu ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAngka"])(target.lalu.nilai) : 'mis. 5.000',
                                                        value: targetTeks,
                                                        onChange: (e)=>setTargetTeks((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKetikan"])(e.target.value))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1689,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1687,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: menyimpanTarget,
                                                className: "btn-secondary text-xs mb-0.5",
                                                children: [
                                                    menyimpanTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 14,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1699,
                                                        columnNumber: 42
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1699,
                                                        columnNumber: 91
                                                    }, this),
                                                    " Simpan target"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1698,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 flex-1 min-w-[220px] mb-1",
                                                children: target.ini !== null ? `Target minggu ini: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAngka"])(target.ini)} orang.` : target.lalu ? `Belum diisi minggu ini, jadi dipakai target ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAngka"])(target.lalu.nilai)} orang dari ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(target.lalu.period)}. Isi hanya bila targetnya berubah.` : 'Belum ada target. Cukup diisi sekali; minggu berikutnya memakai target ini sampai diubah.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1701,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1686,
                                        columnNumber: 19
                                    }, this),
                                    butuhDaftarAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs rounded-lg bg-amber-50 text-amber-800 dark:bg-amber-950/30 dark:text-amber-200 px-3 py-2",
                                        children: "Admin belum mengisi daftar KRO, RO, dan Komponen untuk balai ini. Hubungi Admin supaya daftarnya diisi; setelah itu Anda cukup memilih dari daftar dan mengisi Sumber Dana, Pagu, dan Realisasi."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1711,
                                        columnNumber: 19
                                    }, this),
                                    existingBaris.length === 0 && !((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["punyaKodeRO"])(fieldDefs) && struktur.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-14 text-gray-400 dark:text-gray-500 border border-dashed border-gray-200 dark:border-gray-700 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                size: 36,
                                                className: "mx-auto mb-3 opacity-30"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1719,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-600 dark:text-gray-400",
                                                children: "Belum ada data mingguan untuk periode ini."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1720,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mt-1",
                                                children: [
                                                    'Klik tombol "',
                                                    labelTambah,
                                                    '"',
                                                    IMPOR_EXCEL_MINGGUAN.has(jenisData.key) ? ' atau "Upload Excel"' : '',
                                                    " di atas untuk mulai mengisi."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1723,
                                                columnNumber: 21
                                            }, this),
                                            mingguLalu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 mx-auto max-w-md rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/30 px-4 py-3 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-blue-900 dark:text-blue-200",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(mingguLalu.period),
                                                            " sudah berisi ",
                                                            mingguLalu.jumlah,
                                                            " baris. Salin ke minggu ini, lalu cukup perbarui angka yang berubah (mis. realisasi)."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1728,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>salinMingguLalu(),
                                                        disabled: menyalin,
                                                        className: "btn-primary text-xs mt-3",
                                                        children: [
                                                            menyalin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                size: 14,
                                                                className: "animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1732,
                                                                columnNumber: 39
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1732,
                                                                columnNumber: 88
                                                            }, this),
                                                            " Salin dari ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(mingguLalu.period)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1731,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1727,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1718,
                                        columnNumber: 19
                                    }, this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["punyaKodeRO"])(fieldDefs) ? // Data Anggaran: satu baris per RO (Pagu Total & Realisasi), klik untuk membuka rinciannya
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelRO$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fields: fieldDefs,
                                        items: existingBaris.map((b)=>({
                                                key: b.baris_ke,
                                                values: b.values,
                                                statusKode: b.status,
                                                status: statusBaris(b),
                                                aksi: aksiBaris(b)
                                            })),
                                        struktur: struktur,
                                        onTambah: tambahDiRO
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1739,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "text-xs border-collapse",
                                            style: {
                                                minWidth: 'max-content',
                                                width: '100%'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-gray-50 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 uppercase tracking-wide",
                                                        children: [
                                                            multiBaris && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-center px-3 py-2.5 whitespace-nowrap font-semibold border-b border-gray-200 dark:border-gray-700",
                                                                children: "No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1750,
                                                                columnNumber: 42
                                                            }, this),
                                                            [
                                                                ...fieldDefs,
                                                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$kolomHitung$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kolomHitungOf"])(jenisData.key)
                                                            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: `px-3 py-2.5 whitespace-nowrap font-semibold border-b border-gray-200 dark:border-gray-700 ${f.tipe === 'angka' ? 'text-right' : 'text-left'}`,
                                                                    children: f.label
                                                                }, f.field_key, false, {
                                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                    lineNumber: 1752,
                                                                    columnNumber: 29
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left px-3 py-2.5 whitespace-nowrap font-semibold border-b border-gray-200 dark:border-gray-700",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1756,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-right px-3 py-2.5 whitespace-nowrap font-semibold border-b border-l border-gray-200 dark:border-gray-700",
                                                                children: "Aksi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1757,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1749,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1748,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-gray-100 dark:divide-gray-800",
                                                    children: existingBaris.map((b, i)=>{
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50/50 dark:hover:bg-gray-800/30",
                                                            children: [
                                                                multiBaris && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 text-center tabular-nums text-gray-500 dark:text-gray-400",
                                                                    children: i + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                    lineNumber: 1764,
                                                                    columnNumber: 46
                                                                }, this),
                                                                [
                                                                    ...fieldDefs,
                                                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$kolomHitung$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kolomHitungOf"])(jenisData.key)
                                                                ].map((f)=>{
                                                                    const val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$kolomHitung$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["denganHitung"])(jenisData.key, b.values)[f.field_key];
                                                                    if (f.tipe === 'file') {
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-3 py-2 whitespace-nowrap",
                                                                            style: {
                                                                                maxWidth: 220
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DynamicForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileValueDisplay"], {
                                                                                id: val
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                                lineNumber: 1770,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        }, f.field_key, false, {
                                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                            lineNumber: 1769,
                                                                            columnNumber: 37
                                                                        }, this);
                                                                    }
                                                                    const isRupiah = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRupiahField"])(f);
                                                                    const display = val !== undefined && val !== null && val !== '' ? isRupiah ? `Rp ${Number(val).toLocaleString('id-ID')}` : f.tipe === 'angka' ? Number(val).toLocaleString('id-ID') : String(val) : null;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `px-3 py-2 whitespace-nowrap ${f.tipe === 'angka' ? 'text-right tabular-nums text-gray-800 dark:text-gray-200' : 'text-left text-gray-700 dark:text-gray-300'}`,
                                                                        style: {
                                                                            maxWidth: 220
                                                                        },
                                                                        title: display || '',
                                                                        children: display ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "block truncate",
                                                                            children: display
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                            lineNumber: 1785,
                                                                            columnNumber: 48
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-300 dark:text-gray-600",
                                                                            children: "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                            lineNumber: 1785,
                                                                            columnNumber: 100
                                                                        }, this)
                                                                    }, f.field_key, false, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1779,
                                                                        columnNumber: 35
                                                                    }, this);
                                                                }),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 whitespace-nowrap",
                                                                    children: statusBaris(b)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                    lineNumber: 1789,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 text-right whitespace-nowrap border-l border-gray-100 dark:border-gray-800",
                                                                    children: aksiBaris(b)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                    lineNumber: 1792,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, b.baris_ke, true, {
                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                            lineNumber: 1763,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1760,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 1747,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1746,
                                        columnNumber: 19
                                    }, this),
                                    multiBaris && existingBaris.length > 0 && jenisData.key !== 'data_anggaran' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openAddBaris,
                                        className: "btn-secondary text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1804,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            jenisData.key === 'data_anggaran' ? 'Tambah KRO' : `Tambah ${sebutanBaris} lain`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1803,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1679,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1655,
                        columnNumber: 11
                    }, this) : /* ======================================================== */ /* ===== LEVEL TRIWULAN & TAHUN — AUTO AGREGASI (SUM) ===== */ /* ======================================================== */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-6 shadow-sm border border-gray-100 dark:border-gray-800 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between flex-wrap gap-2 border-b border-gray-100 dark:border-gray-800 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "p-1 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                            lineNumber: 1819,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1818,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-lg text-gray-900 dark:text-white",
                                                        children: [
                                                            "Auto-Agregasi ",
                                                            activeLevel === 'bulan' ? 'Bulanan' : activeLevel === 'triwulan' ? 'Triwulan' : 'Tahunan'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1821,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1817,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                children: [
                                                    "Otomatis direkap dari data mingguan ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: jenisData.judul
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1826,
                                                        columnNumber: 55
                                                    }, this),
                                                    " untuk ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod),
                                                    ", sesuai cara rekap tiap kolom (jumlah / nilai terakhir untuk angka kumulatif)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1825,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1816,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportAgregasiBreakdown"])({
                                                jenisDataJudul: jenisData.judul,
                                                periodLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod),
                                                uptKey: currentUptKey,
                                                fieldDefs,
                                                totals: aggregatedData?.totals || {},
                                                weekRows: aggregatedData?.weekRows || []
                                            }),
                                        className: "btn-primary text-xs py-2 px-3",
                                        title: "Download tabel rincian mingguan dan total akumulasi ke Excel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1841,
                                                columnNumber: 17
                                            }, this),
                                            "Download Excel (",
                                            activeLevel === 'bulan' ? 'Bulanan' : activeLevel === 'triwulan' ? 'Triwulan' : 'Tahunan',
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1829,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1815,
                                columnNumber: 13
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center py-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 24,
                                    className: "animate-spin text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 1847,
                                    columnNumber: 58
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1847,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3",
                                                children: "Total Akumulasi Periode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1852,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                                children: fieldsAnggaran.filter((f)=>f.tipe === 'angka').map((field)=>{
                                                    const totalVal = aggregatedData?.totals?.[field.field_key] ?? 0;
                                                    const isRupiah = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRupiahField"])(field);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400 font-medium truncate",
                                                                children: field.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1859,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-gray-900 dark:text-white mt-1",
                                                                children: isRupiah ? `Rp ${Number(totalVal).toLocaleString('id-ID')}` : Number(totalVal).toLocaleString('id-ID')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1860,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-gray-400 mt-0.5",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AGREGASI_SHORT"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agregasiOf"])(field)]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1866,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, field.field_key, true, {
                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                        lineNumber: 1858,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1853,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1851,
                                        columnNumber: 17
                                    }, this),
                                    aggregatedData?.weekRows && aggregatedData.weekRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3",
                                                children: [
                                                    "Rincian Sumber Data Mingguan (",
                                                    aggregatedData.weekRows.filter((w)=>w.hasData).length,
                                                    " dari ",
                                                    aggregatedData.weekRows.length,
                                                    " minggu terisi)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1876,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-gray-200 dark:border-gray-700 rounded-xl overflow-x-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-left text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            className: "bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-2.5 px-3 font-semibold",
                                                                        children: "Periode Minggu"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1883,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    fieldsAnggaran.filter((f)=>f.tipe === 'angka').slice(0, 4).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "py-2.5 px-3 font-semibold text-right",
                                                                            children: f.label
                                                                        }, f.field_key, false, {
                                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                            lineNumber: 1885,
                                                                            columnNumber: 31
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-2.5 px-3 font-semibold text-center",
                                                                        children: "Status"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                        lineNumber: 1887,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                lineNumber: 1882,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                            lineNumber: 1881,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            className: "divide-y divide-gray-100 dark:divide-gray-800",
                                                            children: aggregatedData.weekRows.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "hover:bg-gray-50/50 dark:hover:bg-gray-800/30",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2.5 px-3 font-medium text-gray-900 dark:text-gray-100",
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(w.period)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                            lineNumber: 1893,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        fieldsAnggaran.filter((f)=>f.tipe === 'angka').slice(0, 4).map((f)=>{
                                                                            const val = w.values[f.field_key];
                                                                            const isRupiah = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRupiahField"])(f);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2.5 px-3 text-right tabular-nums",
                                                                                children: val !== undefined && val !== null ? isRupiah ? `Rp ${Number(val).toLocaleString('id-ID')}` : Number(val).toLocaleString('id-ID') : '-'
                                                                            }, f.field_key, false, {
                                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                                lineNumber: 1898,
                                                                                columnNumber: 35
                                                                            }, this);
                                                                        }),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2.5 px-3 text-center",
                                                                            children: w.hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-medium",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                        size: 10
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                                        lineNumber: 1909,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    " Terisi"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                                lineNumber: 1908,
                                                                                columnNumber: 35
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[11px] text-gray-400",
                                                                                children: "Kosong"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                                lineNumber: 1912,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                            lineNumber: 1906,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, w.period.id, true, {
                                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                                    lineNumber: 1892,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                            lineNumber: 1890,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 1880,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 1879,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1875,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1849,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1814,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-8 text-center text-gray-400 dark:text-gray-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Tidak ada periode tersedia untuk level ini."
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 1928,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1927,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1373,
                columnNumber: 7
            }, this),
            barisModal,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: kelolaStruktur,
                onClose: ()=>setKelolaStruktur(false),
                title: "Daftar KRO / RO / Komponen",
                maxWidth: "max-w-4xl",
                children: kelolaStruktur && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$KelolaStrukturAnggaran$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onChanged: muatStruktur
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 1937,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1936,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: addEntryModal,
                onClose: ()=>{
                    setAddEntryModal(false);
                    setEditEntry(null);
                    setFormValues({});
                },
                title: editEntry ? 'Edit Baris Data' : 'Tambah Baris Rincian Data',
                maxWidth: "max-w-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DynamicForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    level: "bulan",
                    fields: fieldDefs,
                    values: formValues,
                    onChange: (key, val)=>setFormValues((v)=>({
                                ...v,
                                [key]: val
                            })),
                    disabled: false,
                    onSubmit: (e)=>{
                        e.preventDefault();
                        saveEntry(formValues);
                    },
                    loading: saving,
                    jenisDataId: jenisData.id,
                    uptKey: currentUptKey
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 1947,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1941,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: !!viewEntry,
                onClose: ()=>setViewEntry(null),
                title: "Detail Rincian Data",
                maxWidth: "max-w-2xl",
                children: viewEntry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 max-h-[70vh] overflow-y-auto pr-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: fieldsAnggaran.map((fd)=>{
                            const isFull = fd.field_key === 'alamat' || fd.field_key.includes('link') || fd.field_key === 'nama_pelatihan';
                            const val = viewEntry.data_json?.[fd.field_key] ?? '-';
                            const isLink = String(val).startsWith('http://') || String(val).startsWith('https://');
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 ${isFull ? 'sm:col-span-2' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 font-medium",
                                        children: fd.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1977,
                                        columnNumber: 21
                                    }, this),
                                    isLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: val,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-sm text-blue-600 hover:underline break-all",
                                        children: val
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1979,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-800 dark:text-gray-200 break-words mt-0.5",
                                        children: val
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 1983,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, fd.field_key, true, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 1976,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                        lineNumber: 1969,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 1968,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1961,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: uploadModal,
                onClose: ()=>{
                    if (!saving) {
                        setUploadModal(false);
                        setMappingData(null);
                        setImportProgress(null);
                    }
                },
                title: "Cocokkan Kolom Excel",
                maxWidth: "max-w-2xl",
                children: mappingData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColumnMappingScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    excelHeaders: mappingData.headers,
                    fieldDefs: fieldsAnggaran.filter((f)=>f.tipe !== 'file'),
                    initialMapping: mappingData.initialMapping,
                    barisJudul: mappingData.barisJudul,
                    jumlahBaris: mappingData.rows.length,
                    onConfirm: handleImportConfirm,
                    loading: saving,
                    progress: importProgress,
                    onCancel: ()=>{
                        setUploadModal(false);
                        setMappingData(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 2003,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 1996,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: !!importReport,
                onClose: closeImportReport,
                title: "Hasil Impor Data Bulanan",
                maxWidth: "max-w-3xl",
                children: importReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                            children: [
                                [
                                    'Baris di file',
                                    importReport.total
                                ],
                                [
                                    'Berhasil diproses',
                                    importReport.processed
                                ],
                                [
                                    'Baris baru',
                                    importReport.baru
                                ],
                                [
                                    'Diperbarui',
                                    importReport.diperbarui
                                ],
                                [
                                    'Sudah sama',
                                    importReport.sama
                                ],
                                [
                                    'Gagal dikirim',
                                    importReport.failedBatches.reduce((n, b)=>n + b.rows.length, 0)
                                ]
                            ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 2029,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold tabular-nums text-gray-900 dark:text-gray-100",
                                            children: Number(value).toLocaleString('id-ID')
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 2030,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 2028,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 2019,
                            columnNumber: 13
                        }, this),
                        importReport.menunggu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-800 dark:bg-blue-950/30 dark:text-blue-200",
                            children: importReport.menunggu
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 2034,
                            columnNumber: 39
                        }, this),
                        importReport.dilewatiDisetujui > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-950/30 dark:text-amber-200",
                            children: [
                                importReport.dilewatiDisetujui.toLocaleString('id-ID'),
                                " baris yang sudah disetujui Admin tidak ditimpa."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 2035,
                            columnNumber: 52
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[42vh] space-y-2 overflow-y-auto",
                            children: [
                                importReport.duplicateGroups.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-1 font-semibold",
                                            children: "NIK berulang — tetap diimpor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 2039,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc space-y-1 pl-5",
                                            children: importReport.duplicateGroups.slice(0, 30).map((rows, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Baris Excel ",
                                                        formatBarisExcel(rows)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                    lineNumber: 2041,
                                                    columnNumber: 85
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 2040,
                                            columnNumber: 19
                                        }, this),
                                        importReport.duplicateGroups.length > 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1",
                                            children: [
                                                "dan ",
                                                importReport.duplicateGroups.length - 30,
                                                " kelompok duplikat lainnya."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                            lineNumber: 2043,
                                            columnNumber: 64
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 2038,
                                    columnNumber: 17
                                }, this),
                                importReport.emptyRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200",
                                    children: [
                                        "Baris kosong dilewati: ",
                                        formatBarisExcel(importReport.emptyRows)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 2047,
                                    columnNumber: 17
                                }, this),
                                importReport.failedBatches.map((failure, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "Baris Excel ",
                                                    formatBarisExcel(failure.rows),
                                                    " gagal diproses:"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                                lineNumber: 2053,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            failure.message
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                        lineNumber: 2052,
                                        columnNumber: 17
                                    }, this)),
                                importReport.extraKeys.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        "Kolom yang tidak dipetakan tetap disimpan sebagai data cadangan: ",
                                        importReport.extraKeys.join(', ')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 2056,
                                    columnNumber: 53
                                }, this),
                                !importReport.duplicateGroups.length && !importReport.emptyRows.length && !importReport.failedBatches.length && importReport.dilewatiDisetujui === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-emerald-700 dark:text-emerald-300",
                                    children: "Semua baris berhasil diproses tanpa masalah yang terdeteksi."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                    lineNumber: 2057,
                                    columnNumber: 168
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 2036,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end border-t border-gray-100 pt-3 dark:border-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: closeImportReport,
                                className: "btn-primary",
                                children: "Selesai"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                                lineNumber: 2060,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                            lineNumber: 2059,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                    lineNumber: 2018,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 2016,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HapusMassalDialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: !!clearDialog,
                onClose: ()=>setClearDialog(null),
                onConfirm: confirmClear,
                isAdmin: isAdmin,
                count: clearDialog?.count || 0,
                title: clearDialog?.kind === 'entries' ? 'Hapus Semua Data Bulan Ini' : 'Kosongkan Data Minggu Ini',
                details: [
                    [
                        'Jenis Data',
                        jenisData.judul
                    ],
                    [
                        'UPT',
                        currentUptLabel || currentUptKey
                    ],
                    [
                        'Periode',
                        activePeriod ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(activePeriod) : '-'
                    ]
                ]
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
                lineNumber: 2065,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/PeriodeTabs.jsx",
        lineNumber: 1317,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/InputData/PilihJenisData.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PilihJenisData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/InputData/PilihJenisData.jsx
 * Dropdown pemilih Jenis Data dengan penanda visual pasangan
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PeriodeTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/InputData/PeriodeTabs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.mjs [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
;
;
;
;
;
;
const MODE_BULANAN_LABEL = {
    rincian: 'Per nama (form / Excel)',
    upload_file: 'Unggah berkas (lama)',
    agregasi: 'Rekap angka saja (dari mingguan)'
};
function PilihJenisData({ onSaved, tipe = 'mingguan', initialJenisDataId, initialPeriodId, initialUptKey } = {}) {
    const { isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const isBulanan = tipe === 'bulanan';
    const [jenisDataList, setJenisDataList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]) // sudah difilter sesuai tipe (mingguan / bulanan)
    ;
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadJenisData();
    }, []);
    async function loadJenisData() {
        setLoading(true);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').eq('aktif', true).order('created_at');
        const all = data || [];
        const list = all.filter((j)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PeriodeTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBulananJenisData"])(j) === isBulanan);
        setJenisDataList(list);
        if (list.length > 0 && !selected) {
            const wanted = initialJenisDataId && list.find((j)=>j.id === initialJenisDataId);
            setSelected(wanted || list[0]);
        }
        setLoading(false);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-48 text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    size: 24,
                    className: "animate-spin mr-2"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                "Memuat jenis data..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    if (jenisDataList.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                    size: 48,
                    className: "mx-auto mb-4 text-gray-300 dark:text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-gray-600 dark:text-gray-400 mb-1",
                    children: [
                        "Belum ada Jenis Data ",
                        isBulanan ? 'Bulanan' : 'Mingguan'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400 dark:text-gray-500",
                    children: "Admin belum membuat Jenis Data. Hubungi administrator."
                }, void 0, false, {
                    fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-gray-500 dark:text-gray-400 text-sm font-medium whitespace-nowrap",
                            children: [
                                "Pilih Jenis Data ",
                                isBulanan ? 'Bulanan' : 'Mingguan',
                                " (",
                                jenisDataList.length,
                                " Data):"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1 min-w-[280px] max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selected?.id || '',
                                    onChange: (e)=>{
                                        const jd = jenisDataList.find((j)=>j.id === e.target.value);
                                        setSelected(jd || null);
                                    },
                                    className: "w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 dark:text-white font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 pr-9",
                                    children: jenisDataList.map((jd, idx)=>{
                                        const isBulan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PeriodeTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBulananJenisData"])(jd);
                                        const modeLabel = isBulan ? `Bulan — ${MODE_BULANAN_LABEL[jd.mode_bulanan] || MODE_BULANAN_LABEL.rincian}` : 'Minggu';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: jd.id,
                                            className: "text-gray-900 bg-white",
                                            children: [
                                                idx + 1,
                                                ". ",
                                                jd.judul,
                                                " (",
                                                modeLabel,
                                                ")"
                                            ]
                                        }, jd.id, true, {
                                            fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    size: 16,
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$InputData$2f$PeriodeTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                jenisData: selected,
                allJenisData: jenisDataList,
                onSaved: onSaved,
                initialPeriodId: initialPeriodId,
                initialUptKey: initialUptKey
            }, selected.id, false, {
                fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InputData/PilihJenisData.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_views_InputData_0yd4bbn._.js.map