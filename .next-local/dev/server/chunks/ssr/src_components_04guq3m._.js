module.exports = [
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
"[project]/src/components/ColumnMappingScreen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ColumnMappingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/ColumnMappingScreen.jsx
 * Layar cocokkan kolom Excel ke field_definitions sebelum import
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [app-ssr] (ecmascript) <export default as HelpCircle>");
;
;
;
function ColumnMappingScreen({ excelHeaders, fieldDefs, initialMapping, onConfirm, onCancel, barisJudul = 1, jumlahBaris = null, loading = false, progress = null }) {
    const [mapping, setMapping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialMapping);
    const usedFieldKeys = Object.values(mapping).filter(Boolean).map((fd)=>fd.field_key);
    const unmappedCount = excelHeaders.filter((h)=>!mapping[h]).length;
    function handleFieldSelect(header, fieldKey) {
        const fd = fieldDefs.find((f)=>f.field_key === fieldKey) || null;
        setMapping((prev)=>({
                ...prev,
                [header]: fd
            }));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 text-sm text-amber-800 dark:text-amber-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Cocokkan kolom Excel ke field sistem."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    " Kolom yang tidak dicocokkan akan disimpan sebagai data cadangan dan bisa dijadikan field resmi oleh Admin."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            excelHeaders.length,
                            " kolom",
                            jumlahBaris !== null ? ` · ${jumlahBaris} baris data` : '',
                            " ditemukan di file",
                            barisJudul > 1 && ` · judul kolom dibaca dari baris ke-${barisJudul} (baris di atasnya dianggap judul laporan)`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    unmappedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-amber-600 dark:text-amber-400",
                        children: [
                            unmappedCount,
                            " belum dicocokkan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 max-h-[50vh] overflow-y-auto",
                children: excelHeaders.map((header)=>{
                    const matched = mapping[header];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-900 dark:text-gray-100 truncate",
                                    children: header
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 16,
                                className: "text-gray-400 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: matched?.field_key || '',
                                    onChange: (e)=>handleFieldSelect(header, e.target.value),
                                    className: "form-select text-sm w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "- Belum Dikenal -"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this),
                                        fieldDefs.filter((fd)=>fd.aktif && (fd.field_key === matched?.field_key || !usedFieldKeys.includes(fd.field_key))).map((fd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: fd.field_key,
                                                children: [
                                                    fd.label,
                                                    fd.is_identitas ? ' (identitas)' : ''
                                                ]
                                            }, fd.field_key, true, {
                                                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                                lineNumber: 65,
                                                columnNumber: 23
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: matched ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    size: 16,
                                    className: "text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                    lineNumber: 76,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    size: 16,
                                    className: "text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                    lineNumber: 78,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, header, true, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            unmappedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-3 py-2 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    unmappedCount,
                    " kolom tidak dicocokkan akan masuk ke data cadangan"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        disabled: loading,
                        className: "btn-secondary flex-1 disabled:opacity-50",
                        children: "Batal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onConfirm(mapping),
                        disabled: loading,
                        className: "btn-primary flex-1 disabled:opacity-50",
                        children: loading && progress ? `Mengimpor ${progress.done.toLocaleString('id-ID')} / ${progress.total.toLocaleString('id-ID')}` : 'Import Data'
                    }, void 0, false, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            loading && progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                role: "status",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-blue-600 transition-[width]",
                            style: {
                                width: `${progress.total ? Math.min(100, progress.done / progress.total * 100) : 0}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 dark:text-gray-400",
                        children: "Data dikirim bertahap supaya impor besar tidak terputus."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ColumnMappingScreen.jsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ColumnMappingScreen.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/DynamicForm.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicFormEntry",
    ()=>DynamicFormEntry,
    "DynamicFormRekap",
    ()=>DynamicFormRekap,
    "FieldInput",
    ()=>FieldInput,
    "FileValueDisplay",
    ()=>FileValueDisplay,
    "default",
    ()=>DynamicForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/DynamicForm.jsx
 * Merender form dari daftar field_definitions — KOMPONEN INTI SISTEM
 * Tidak ada field yang ditulis manual — semua dari konfigurasi database
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/angka.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tautan.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.mjs [app-ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.mjs [app-ssr] (ecmascript) <export default as Paperclip>");
;
;
;
;
;
;
;
const FILE_ACCEPT = '.pdf,.doc,.docx,.xls,.xlsx';
const FILE_MAX_MB = 10;
function formatFileSize(n) {
    const num = Number(n) || 0;
    return num >= 1048576 ? `${(num / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(num / 1024))} KB`;
}
/**
 * Ambil metadata berkas (nama, ukuran) untuk sebuah id field_files. Dipakai baik oleh kontrol unggah (FieldInput
 * tipe 'file') maupun tampilan baca-saja di tabel rekap (FileValueDisplay).
 */ function useFieldFileMeta(id) {
    const [meta, setMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let alive = true;
        if (!id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTautan"])(id)) {
            setMeta(null);
            setLoading(false);
            return;
        } // link, bukan berkas unggahan
        setLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_files').select('id,file_name,file_ext,file_size').eq('id', id).single().then(({ data })=>{
            if (alive) {
                setMeta(data || null);
                setLoading(false);
            }
        }).catch(()=>{
            if (alive) {
                setMeta(null);
                setLoading(false);
            }
        });
        return ()=>{
            alive = false;
        };
    }, [
        id
    ]);
    return {
        meta,
        loading
    };
}
function FileValueDisplay({ id, className = '' }) {
    const { meta, loading } = useFieldFileMeta(id);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!id) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-gray-300 dark:text-gray-600",
        children: "—"
    }, void 0, false, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 45,
        columnNumber: 19
    }, this);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTautan"])(id)) {
        const url = id.trim();
        let host = url;
        try {
            host = new URL(url).hostname.replace(/^www./, '');
        } catch  {}
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: url,
            target: "_blank",
            rel: "noopener noreferrer",
            title: url,
            className: `inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline max-w-[16rem] truncate ${className}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                    size: 12,
                    className: "flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/DynamicForm.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                " Buka link (",
                host,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DynamicForm.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-gray-400 text-xs",
        children: "Memuat…"
    }, void 0, false, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 57,
        columnNumber: 23
    }, this);
    if (!meta) {
        // Bukan id berkas yang dikenal (mis. isian lama berupa teks/link sebelum kolom ini diganti tipe Berkas)
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-500 dark:text-gray-400 text-xs break-all",
            children: String(id)
        }, void 0, false, {
            fileName: "[project]/src/components/DynamicForm.jsx",
            lineNumber: 60,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        disabled: busy,
        onClick: async ()=>{
            setBusy(true);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldFiles"].download(id);
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(e.message, 'error');
            } finally{
                setBusy(false);
            }
        },
        className: `inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline disabled:opacity-50 ${className}`,
        title: `${meta.file_name} (${formatFileSize(meta.file_size)})`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                size: 12,
                className: "flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            " ",
            busy ? 'Mengunduh…' : meta.file_name
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
/** Kontrol unggah untuk form input (FieldInput tipe 'file'). */ function FileFieldInput({ field, value, onChange, disabled, idPrefix, jenisDataId, uptKey }) {
    const { meta, loading } = useFieldFileMeta(value);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTautan"])(value) ? value : '');
    const berkasLama = (v)=>v && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTautan"])(v) ? v : null // id field_files yang perlu dibuang bila diganti
    ;
    // Link sah dipakai langsung saat diketik/ditempel; saat kursor keluar, isian yang bukan link sah diberi pesan.
    function simpanLink(isi = link) {
        const url = String(isi).trim();
        setError('');
        if (!url) return;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTautan"])(url)) {
            setError('Link harus diawali http:// atau https:// (mis. link folder Google Drive).');
            return;
        }
        const prevId = berkasLama(value);
        onChange(field.field_key, url);
        if (prevId) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldFiles"].remove(prevId).catch(()=>{}); // ganti berkas dengan link: buang berkas lama
    }
    async function handleFile(e) {
        const file = e.target.files?.[0];
        e.target.value = ''; // supaya memilih berkas yang sama lagi tetap memicu onChange
        if (!file) return;
        setError('');
        if (file.size > FILE_MAX_MB * 1024 * 1024) {
            setError(`Ukuran berkas melebihi ${FILE_MAX_MB} MB.`);
            return;
        }
        if (!jenisDataId || !uptKey) {
            setError('Pilih UPT terlebih dahulu sebelum mengunggah berkas.');
            return;
        }
        setBusy(true);
        const prevId = value;
        const { data, error: err } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldFiles"].upload(file, {
            jenis_data_id: jenisDataId,
            field_key: field.field_key,
            upt_key: uptKey
        });
        setBusy(false);
        if (err) {
            setError(err.message);
            return;
        }
        onChange(field.field_key, data.id);
        setLink('');
        if (berkasLama(prevId) && prevId !== data.id) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldFiles"].remove(prevId).catch(()=>{}); // ganti berkas: buang yang lama
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs",
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400",
                        children: "Memuat…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTautan"])(value) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileValueDisplay, {
                        id: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this) : meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileValueDisplay, {
                                id: value
                            }, void 0, false, {
                                fileName: "[project]/src/components/DynamicForm.jsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: [
                                    "(",
                                    formatFileSize(meta.file_size),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DynamicForm.jsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-500 dark:text-gray-400 break-all",
                        children: String(value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this),
                    !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            onChange(field.field_key, null);
                            setLink('');
                        },
                        className: "text-rose-500 hover:underline",
                        children: "Hapus"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: `${idPrefix}field-${field.field_key}`,
                type: "file",
                accept: FILE_ACCEPT,
                onChange: handleFile,
                disabled: busy,
                className: "block w-full text-xs text-gray-600 dark:text-gray-300 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-950/40 dark:file:text-blue-300 hover:file:bg-blue-100"
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-gray-400 flex-shrink-0",
                        children: "atau link:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "url",
                        value: link,
                        onChange: (e)=>{
                            const v = e.target.value;
                            setLink(v);
                            setError('');
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tautan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTautan"])(v.trim()) && v.trim() !== value) simpanLink(v);
                        },
                        onBlur: ()=>simpanLink(),
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                simpanLink();
                            }
                        },
                        placeholder: "https://drive.google.com/...",
                        className: "form-input text-xs py-1.5",
                        disabled: busy
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 143,
                columnNumber: 9
            }, this),
            busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-blue-500",
                children: "Mengunggah…"
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 157,
                columnNumber: 16
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-rose-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 158,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-gray-400",
                children: [
                    "Unggah PDF, Word, atau Excel (maks. ",
                    FILE_MAX_MB,
                    " MB), atau tempel link data dukung (mis. folder Google Drive)."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
/**
 * Isian angka bergaya Indonesia: titik ribuan muncul otomatis saat mengetik (1.500.000), koma untuk desimal.
 * Nilai yang dikirim ke onChange tetap number (atau null bila kosong). Kolom rupiah diberi awalan "Rp".
 */ function AngkaInput({ id, value, onChange, className, disabled, required, rupiah }) {
    const [teks, setTeks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAngka"])(value));
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const caret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null) // banyaknya digit/koma di kiri kursor, untuk mengembalikan posisi kursor setelah diformat
    ;
    // Nilai diubah dari luar (form dibuka untuk baris lain, dikosongkan): tampilkan ulang
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const kini = value === '' || value === undefined || value === null ? null : Number(value);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAngka"])(teks) !== kini) setTeks((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAngka"])(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const el = ref.current;
        if (caret.current === null || !el || document.activeElement !== el) return;
        let pos = 0;
        for(let n = 0; pos < el.value.length && n < caret.current; pos++)if (/[\d,]/.test(el.value[pos])) n++;
        caret.current = null;
        el.setSelectionRange(pos, pos);
    }, [
        teks
    ]);
    function ketik(e) {
        const raw = e.target.value;
        caret.current = raw.slice(0, e.target.selectionStart ?? raw.length).replace(/[^\d,]/g, '').length;
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKetikan"])(raw);
        setTeks(t);
        onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAngka"])(t));
    }
    const input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ref: ref,
        id: id,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: teks,
        onChange: ketik,
        className: `${className} tabular-nums ${rupiah ? 'pl-10' : ''}`,
        disabled: disabled,
        required: required,
        placeholder: "0"
    }, void 0, false, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
    if (!rupiah) return input;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400",
                children: "Rp"
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            input
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
function FieldInput({ field, value, onChange, disabled, idPrefix = '', jenisDataId, uptKey, allValues, allFields }) {
    const base = `form-input ${disabled ? 'opacity-60 cursor-not-allowed bg-gray-50 dark:bg-gray-800' : ''}`;
    switch(field.tipe){
        case 'angka':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AngkaInput, {
                id: `${idPrefix}field-${field.field_key}`,
                value: value,
                onChange: (v)=>onChange(field.field_key, v),
                className: base,
                disabled: disabled,
                required: field.wajib,
                rupiah: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRupiahField"])(field)
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 227,
                columnNumber: 9
            }, this);
        case 'file':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileFieldInput, {
                field: field,
                value: value,
                onChange: onChange,
                disabled: disabled,
                idPrefix: idPrefix,
                jenisDataId: jenisDataId,
                uptKey: uptKey
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 240,
                columnNumber: 9
            }, this);
        case 'tanggal':
            {
                // Kolom yang memang satu titik waktu (mis. "Dokumen Kontrak: Tanggal Mulai/Selesai", "Tanggal Awal/Akhir")
                // -> satu tanggal saja
                if (/tanggal (mulai|selesai|awal|akhir)/i.test(field.label || '') || /_(mulai|selesai|awal|akhir)(_|$)/.test(field.field_key)) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `${idPrefix}field-${field.field_key}`,
                        type: "date",
                        value: value ? String(value).split(' s/d ')[0].split('T')[0] : '',
                        onChange: (e)=>onChange(field.field_key, e.target.value || null),
                        className: base,
                        disabled: disabled,
                        required: field.wajib
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this);
                }
                const isRange = typeof value === 'string' && value.includes(' s/d ');
                const parts = isRange ? value.split(' s/d ') : [
                    value || '',
                    ''
                ];
                const [startDate, endDate] = parts;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] text-gray-400 font-medium block mb-0.5",
                                            children: "Dari Tanggal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DynamicForm.jsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: `${idPrefix}field-${field.field_key}-start`,
                                            type: "date",
                                            value: startDate ? String(startDate).split('T')[0] : '',
                                            onChange: (e)=>{
                                                const newStart = e.target.value;
                                                if (!newStart && !endDate) {
                                                    onChange(field.field_key, null);
                                                } else if (endDate) {
                                                    onChange(field.field_key, newStart ? `${newStart} s/d ${endDate}` : endDate);
                                                } else {
                                                    onChange(field.field_key, newStart || null);
                                                }
                                            },
                                            className: base,
                                            disabled: disabled,
                                            required: field.wajib && !endDate
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DynamicForm.jsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DynamicForm.jsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] text-gray-400 font-medium block mb-0.5",
                                            children: "Sampai (Opsional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DynamicForm.jsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: `${idPrefix}field-${field.field_key}-end`,
                                            type: "date",
                                            value: endDate ? String(endDate).split('T')[0] : '',
                                            onChange: (e)=>{
                                                const newEnd = e.target.value;
                                                if (!newEnd) {
                                                    onChange(field.field_key, startDate || null);
                                                } else {
                                                    onChange(field.field_key, startDate ? `${startDate} s/d ${newEnd}` : newEnd);
                                                }
                                            },
                                            className: base,
                                            disabled: disabled,
                                            min: startDate ? String(startDate).split('T')[0] : undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DynamicForm.jsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DynamicForm.jsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DynamicForm.jsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        isRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-blue-600 dark:text-blue-400 font-medium",
                            children: [
                                "Rentang aktif: ",
                                value
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DynamicForm.jsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DynamicForm.jsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this);
            }
        case 'pilihan':
            {
                // Opsi bersyarat: kolom pilihan lain yang opsinya berbeda tergantung nilai kolom "depends_on" di baris yang sama
                // (mis. "Jenjang Jabatan" opsinya beda untuk Instruktur vs Widyaiswara). Dikonfigurasi lewat field.opsi_bersyarat.
                // field.opsiLabel (opsional): teks tampilan per nilai, mis. { ABAC: 'ABAC — Tenaga Kepelatihan' }
                let opsi = field.opsi_pilihan || [];
                let waitingOn = null;
                if (field.opsi_bersyarat?.depends_on) {
                    const driverKey = field.opsi_bersyarat.depends_on;
                    const driverVal = allValues?.[driverKey];
                    if (!driverVal) {
                        opsi = [];
                        waitingOn = allFields?.find((f)=>f.field_key === driverKey)?.label || 'kolom sebelumnya';
                    } else {
                        opsi = field.opsi_bersyarat.options?.[driverVal] || [];
                    }
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: `${idPrefix}field-${field.field_key}`,
                    value: value ?? '',
                    onChange: (e)=>onChange(field.field_key, e.target.value || null),
                    className: `${base} form-select`,
                    disabled: disabled || !!waitingOn,
                    required: field.wajib,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: waitingOn ? `- Pilih ${waitingOn} dulu -` : '- Pilih -'
                        }, void 0, false, {
                            fileName: "[project]/src/components/DynamicForm.jsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        opsi.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: opt,
                                children: field.opsiLabel?.[opt] || opt
                            }, opt, false, {
                                fileName: "[project]/src/components/DynamicForm.jsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DynamicForm.jsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this);
            }
        case 'teks_panjang':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: `${idPrefix}field-${field.field_key}`,
                value: value ?? '',
                onChange: (e)=>onChange(field.field_key, e.target.value || null),
                className: `${base} resize-y`,
                rows: 3,
                disabled: disabled,
                required: field.wajib,
                placeholder: field.label
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 359,
                columnNumber: 9
            }, this);
        case 'teks':
        default:
            if (field.field_key === 'alamat' || field.field_key === 'progress_pelaksanaan' || field.field_key === 'permasalahan') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: `${idPrefix}field-${field.field_key}`,
                    value: value ?? '',
                    onChange: (e)=>onChange(field.field_key, e.target.value || null),
                    className: `${base} resize-y`,
                    rows: 2,
                    disabled: disabled,
                    required: field.wajib,
                    placeholder: field.label
                }, void 0, false, {
                    fileName: "[project]/src/components/DynamicForm.jsx",
                    lineNumber: 375,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `${idPrefix}field-${field.field_key}`,
                        type: "text",
                        value: value ?? '',
                        onChange: (e)=>onChange(field.field_key, e.target.value || null),
                        className: base,
                        disabled: disabled,
                        required: field.wajib,
                        placeholder: field.label,
                        list: field.saran?.length ? `${idPrefix}saran-${field.field_key}` : undefined,
                        autoComplete: field.saran?.length ? 'off' : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this),
                    field.saran?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                        id: `${idPrefix}saran-${field.field_key}`,
                        children: field.saran.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: s
                            }, s, false, {
                                fileName: "[project]/src/components/DynamicForm.jsx",
                                lineNumber: 404,
                                columnNumber: 37
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 403,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 388,
                columnNumber: 9
            }, this);
    }
}
function DynamicFormRekap({ fields, values, onChange, disabled, onSubmit, loading, bare = false, idPrefix = '', jenisDataId, uptKey }) {
    const activeFields = fields.filter((f)=>f.aktif).sort((a, b)=>a.urutan - b.urutan);
    // bare: hanya kolom-kolomnya (dipakai saat satu <form> memuat beberapa baris/pelatihan)
    const Wrapper = bare ? 'div' : 'form';
    // Saat kolom "penentu" (depends_on) berubah, kosongkan kolom yang opsinya bergantung padanya (opsi lama bisa tidak
    // relevan lagi untuk nilai baru — mis. ganti dari Instruktur ke Widyaiswara, Jenjang Jabatan harus dipilih ulang).
    const handleChange = (key, val)=>{
        onChange(key, val);
        activeFields.filter((f)=>f.opsi_bersyarat?.depends_on === key).forEach((f)=>onChange(f.field_key, null));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        onSubmit: bare ? undefined : onSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: activeFields.map((field)=>{
                    const isFullWidth = field.tipe === 'teks_panjang' || field.tipe === 'file' || field.field_key.includes('laporan') || field.field_key === 'progress_pelaksanaan' || field.field_key === 'permasalahan' || field.field_key === 'nama_pelatihan' || field.field_key === 'judul_kegiatan';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: isFullWidth ? 'sm:col-span-2' : '',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                htmlFor: `${idPrefix}field-${field.field_key}`,
                                children: [
                                    field.label,
                                    field.wajib && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-rose-500 ml-1",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DynamicForm.jsx",
                                        lineNumber: 435,
                                        columnNumber: 33
                                    }, this),
                                    field.kunci && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        size: 11,
                                        className: "inline ml-1.5 -mt-0.5 text-gray-400",
                                        "aria-label": "Terkunci"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DynamicForm.jsx",
                                        lineNumber: 437,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DynamicForm.jsx",
                                lineNumber: 433,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldInput, {
                                field: field,
                                value: values[field.field_key],
                                onChange: handleChange,
                                disabled: disabled || !!field.kunci,
                                idPrefix: idPrefix,
                                jenisDataId: jenisDataId,
                                uptKey: uptKey,
                                allValues: values,
                                allFields: activeFields
                            }, void 0, false, {
                                fileName: "[project]/src/components/DynamicForm.jsx",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this)
                        ]
                    }, field.id || field.field_key, true, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 432,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            !disabled && !bare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-3 border-t border-gray-100 dark:border-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "btn-primary w-full",
                    disabled: loading,
                    children: loading ? 'Menyimpan...' : 'Simpan'
                }, void 0, false, {
                    fileName: "[project]/src/components/DynamicForm.jsx",
                    lineNumber: 457,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 456,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
}
function DynamicFormEntry({ fields, values, onChange, disabled, onSubmit, loading, idPrefix = '', jenisDataId, uptKey }) {
    const activeFields = fields.filter((f)=>f.aktif).sort((a, b)=>a.urutan - b.urutan);
    const handleChange = (key, val)=>{
        onChange(key, val);
        activeFields.filter((f)=>f.opsi_bersyarat?.depends_on === key).forEach((f)=>onChange(f.field_key, null));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-1",
                children: activeFields.map((field)=>{
                    const isFullWidth = field.tipe === 'file' || field.field_key === 'alamat' || field.field_key === 'link_sertifikat_pelatihan_by_name' || field.field_key === 'nama_pelatihan';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: isFullWidth ? 'sm:col-span-2' : '',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                htmlFor: `${idPrefix}field-${field.field_key}`,
                                children: [
                                    field.label,
                                    field.wajib && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-rose-500 ml-1",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DynamicForm.jsx",
                                        lineNumber: 485,
                                        columnNumber: 33
                                    }, this),
                                    field.is_identitas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-amber-500 text-xs font-normal",
                                        title: "Kolom Identitas Pribadi",
                                        children: "🔒 Identitas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DynamicForm.jsx",
                                        lineNumber: 487,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DynamicForm.jsx",
                                lineNumber: 483,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldInput, {
                                field: field,
                                value: values[field.field_key],
                                onChange: handleChange,
                                disabled: disabled,
                                jenisDataId: jenisDataId,
                                uptKey: uptKey,
                                allValues: values,
                                allFields: activeFields
                            }, void 0, false, {
                                fileName: "[project]/src/components/DynamicForm.jsx",
                                lineNumber: 490,
                                columnNumber: 15
                            }, this)
                        ]
                    }, field.id || field.field_key, true, {
                        fileName: "[project]/src/components/DynamicForm.jsx",
                        lineNumber: 482,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 478,
                columnNumber: 7
            }, this),
            !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2 border-t border-gray-100 dark:border-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "btn-primary w-full",
                    disabled: loading,
                    children: loading ? 'Menyimpan...' : 'Simpan Data Baris'
                }, void 0, false, {
                    fileName: "[project]/src/components/DynamicForm.jsx",
                    lineNumber: 507,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DynamicForm.jsx",
                lineNumber: 506,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 477,
        columnNumber: 5
    }, this);
}
function DynamicForm({ level, ...props }) {
    if (level === 'bulan') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicFormEntry, {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 518,
        columnNumber: 33
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicFormRekap, {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/DynamicForm.jsx",
        lineNumber: 519,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/HapusMassalDialog.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HapusMassalDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/HapusMassalDialog.jsx
 * Konfirmasi penghapusan massal: pengguna wajib mengetik "HAPUS". Data tidak hilang permanen —
 * masuk Tempat Sampah selama beberapa hari dan hanya Admin yang dapat memulihkannya.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
function HapusMassalDialog({ open, onClose, onConfirm, title, count, details = [], isAdmin }) {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            setText('');
            setError('');
            setBusy(false);
        }
    }, [
        open
    ]);
    async function handleConfirm() {
        setBusy(true);
        setError('');
        const { error: err } = await onConfirm() || {};
        setBusy(false);
        if (err) setError(err.message || 'Gagal menghapus data');
    }
    const ready = text.trim().toUpperCase() === 'HAPUS' && count > 0 && !busy;
    // Portal ke <body>: dialog ini sering dibuka dari dalam popup lain yang ber-transform (fixed jadi relatif ke popup itu)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: busy ? ()=>{} : onClose,
        title: title,
        maxWidth: "max-w-md",
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onClose,
                    disabled: busy,
                    className: "btn-secondary text-sm",
                    children: "Batal"
                }, void 0, false, {
                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleConfirm,
                    disabled: !ready,
                    className: "btn-primary text-sm !bg-rose-600 hover:!bg-rose-700 disabled:opacity-40",
                    children: [
                        busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            size: 15,
                            className: "animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HapusMassalDialog.jsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/src/components/HapusMassalDialog.jsx",
                            lineNumber: 46,
                            columnNumber: 70
                        }, this),
                        isAdmin ? `Hapus ${count} Data` : `Ajukan Hapus ${count} Data`
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HapusMassalDialog.jsx",
            lineNumber: 38,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            size: 18,
                            className: "flex-shrink-0 mt-0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HapusMassalDialog.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Akan menghapus ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            count,
                                            " data"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                        lineNumber: 58,
                                        columnNumber: 32
                                    }, this),
                                    ". Data dipindahkan ke ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Tempat Sampah"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                        lineNumber: 58,
                                        columnNumber: 83
                                    }, this),
                                    " selama 30 hari dan dapat Anda pulihkan dari menu Tempat Sampah. Penghapusan ini dicatat di log."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Akan mengajukan ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "permintaan hapus ",
                                            count,
                                            " data"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                        lineNumber: 63,
                                        columnNumber: 33
                                    }, this),
                                    " ke Admin. Data ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "tidak langsung terhapus"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                        lineNumber: 63,
                                        columnNumber: 95
                                    }, this),
                                    " — baru benar-benar terhapus (masuk Tempat Sampah) setelah Admin menyetujuinya."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HapusMassalDialog.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "grid grid-cols-[110px_1fr] gap-x-3 gap-y-1 text-xs",
                    children: details.map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contents",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: k
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "font-semibold text-gray-900 dark:text-white",
                                    children: v
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k, true, {
                            fileName: "[project]/src/components/HapusMassalDialog.jsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "form-label text-xs",
                            children: [
                                "Ketik ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "HAPUS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                                    lineNumber: 80,
                                    columnNumber: 55
                                }, this),
                                " untuk melanjutkan"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HapusMassalDialog.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: text,
                            onChange: (e)=>setText(e.target.value),
                            className: "form-input w-full",
                            placeholder: "HAPUS",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/HapusMassalDialog.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-rose-600 dark:text-rose-400",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/HapusMassalDialog.jsx",
                    lineNumber: 91,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HapusMassalDialog.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HapusMassalDialog.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this), document.body);
}
}),
"[project]/src/components/HasilHitung.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HasilHitung
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/HasilHitung.jsx
 * Kolom hitung otomatis (lib/kolomHitung.js) di bawah form isian — hanya ditampilkan, tidak bisa diubah.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$kolomHitung$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/kolomHitung.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.mjs [app-ssr] (ecmascript) <export default as Calculator>");
;
;
;
function HasilHitung({ jenisKey, values = {} }) {
    const daftar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$kolomHitung$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KOLOM_HITUNG"][jenisKey] || [];
    if (!daftar.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 space-y-2",
        children: daftar.map((k)=>{
            const v = k.hitung(values);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 rounded-lg border border-blue-100 bg-blue-50/60 px-3 py-2 text-sm dark:border-blue-900 dark:bg-blue-950/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 text-gray-700 dark:text-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                size: 15,
                                className: "text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HasilHitung.jsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    k.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[11px] text-gray-500",
                                        children: [
                                            "Dihitung otomatis: ",
                                            k.keterangan
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HasilHitung.jsx",
                                        lineNumber: 21,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HasilHitung.jsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HasilHitung.jsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold tabular-nums text-gray-900 dark:text-white",
                        children: v === null ? '—' : `${v.toLocaleString('id-ID')}%`
                    }, void 0, false, {
                        fileName: "[project]/src/components/HasilHitung.jsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                ]
            }, k.field_key, true, {
                fileName: "[project]/src/components/HasilHitung.jsx",
                lineNumber: 16,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/HasilHitung.jsx",
        lineNumber: 12,
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
"[project]/src/components/PeriodSelector.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PeriodSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/PeriodSelector.jsx
 * Pemilih periode: level + bulan (semua tahun) + tombol Minggu ke-N, atau satu pilihan bulan untuk level bulan.
 * Tanpa tombol geser ◀ ▶: bulan (lintas tahun) dan minggu sudah dipilih langsung.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deadline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
const LEVEL_LABELS = {
    tahun: 'Tahun',
    triwulan: 'Triwulan',
    bulan: 'Bulan',
    minggu: 'Minggu'
};
function PeriodSelector({ level, onLevelChange, period, onPeriodChange, availablePeriods = [], allowedLevels = [
    'minggu',
    'bulan',
    'triwulan',
    'tahun'
] }) {
    const displayLevels = allowedLevels || [
        'minggu',
        'bulan',
        'triwulan',
        'tahun'
    ];
    // Jika level yang diberikan tidak diizinkan (misal allowedLevels=['bulan'] tapi parent masih 'minggu'),
    // paksa gunakan level pertama yang diizinkan (yaitu 'bulan').
    const effectiveLevel = displayLevels.includes(level) ? level : displayLevels[0];
    const isMingguMode = effectiveLevel === 'minggu' && displayLevels.includes('minggu');
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(availablePeriods.filter((p)=>p.level === effectiveLevel));
    // Otomatis sinkronkan period jika period saat ini level-nya tidak sesuai effectiveLevel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (period && period.level !== effectiveLevel && filtered.length > 0) {
            onPeriodChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickCurrentPeriod"])(filtered));
        }
    }, [
        effectiveLevel,
        period?.id,
        period?.level,
        filtered.length
    ]);
    const locked = period ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPeriodLocked"])(period.deadline) : false;
    const remaining = period ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sisaHari"])(period.deadline) : null;
    // Minggu-minggu dalam satu bulan (tahun + bulan)
    const mingguDalam = (tahun, bulan)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(availablePeriods.filter((p)=>p.level === 'minggu' && Number(p.tahun) === Number(tahun) && Number(p.bulan) === Number(bulan)));
    // Semua bulan yang punya periode mingguan, lintas tahun (pengganti tombol geser periode)
    const monthOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(availablePeriods.filter((p)=>p.level === 'bulan')).filter((m)=>mingguDalam(m.tahun, m.bulan).length > 0);
    const weeksThisMonth = isMingguMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(availablePeriods.filter((p)=>p.level === 'minggu' && Number(p.tahun) === Number(period?.tahun) && Number(p.bulan) === Number(period?.bulan))) : [];
    function handleMonthChange(nilai) {
        const [tahun, bulan] = nilai.split('-').map(Number);
        const weeks = mingguDalam(tahun, bulan);
        const keepWeek = weeks.find((w)=>w.minggu_ke === period?.minggu_ke) || weeks[0];
        if (keepWeek) onPeriodChange(keepWeek);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            displayLevels.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-fit",
                children: displayLevels.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onLevelChange(l),
                        className: `px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${level === l ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`,
                        children: LEVEL_LABELS[l]
                    }, l, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PeriodSelector.jsx",
                lineNumber: 73,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg text-xs font-semibold text-blue-700 dark:text-blue-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Periode Level:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "uppercase tracking-wider font-bold",
                        children: LEVEL_LABELS[displayLevels[0]]
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PeriodSelector.jsx",
                lineNumber: 89,
                columnNumber: 9
            }, this),
            isMingguMode && monthOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-semibold uppercase tracking-wide text-gray-500 whitespace-nowrap",
                        children: "Bulan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: period ? `${period.tahun}-${period.bulan}` : '',
                        onChange: (e)=>handleMonthChange(e.target.value),
                        className: "form-select text-sm font-semibold w-full max-w-xs",
                        children: monthOptions.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: `${m.tahun}-${m.bulan}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelBulan"])(m.bulan, m.tahun)
                            }, m.id, false, {
                                fileName: "[project]/src/components/PeriodSelector.jsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PeriodSelector.jsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            isMingguMode && weeksThisMonth.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2",
                        children: "Periode"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2",
                        children: weeksThisMonth.map((w)=>{
                            const active = w.id === period?.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onPeriodChange(w),
                                className: `text-left px-3 py-2.5 rounded-xl border text-sm font-semibold transition-all ${active ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 shadow-sm' : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-300 dark:hover:border-blue-600'}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(w)
                            }, w.id, false, {
                                fileName: "[project]/src/components/PeriodSelector.jsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PeriodSelector.jsx",
                lineNumber: 113,
                columnNumber: 9
            }, this) : null,
            !isMingguMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: period?.id || '',
                onChange: (e)=>{
                    const p = filtered.find((x)=>x.id === e.target.value);
                    if (p) onPeriodChange(p);
                },
                className: "form-select text-sm font-semibold w-full max-w-lg",
                children: filtered.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: p.id,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(p)
                    }, p.id, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PeriodSelector.jsx",
                lineNumber: 138,
                columnNumber: 9
            }, this),
            period && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-2 text-xs px-3 py-2 rounded-lg ${locked ? 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400' : remaining !== null && remaining <= 7 ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400' : 'bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400'}`,
                children: [
                    locked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 160,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/PeriodSelector.jsx",
                        lineNumber: 160,
                        columnNumber: 42
                    }, this),
                    locked ? `Lewat deadline (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTanggal"])(period.deadline)}) — UPT tetap bisa mengisi, ditandai terlambat` : remaining !== null ? `Deadline: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTanggal"])(period.deadline)} (${remaining > 0 ? `${remaining} hari lagi` : 'hari ini!'})` : `Deadline: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deadline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTanggal"])(period.deadline)}`
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PeriodSelector.jsx",
                lineNumber: 153,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PeriodSelector.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TabelRO.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KOLOM_KODE_RO",
    ()=>KOLOM_KODE_RO,
    "KOLOM_TINGKAT",
    ()=>KOLOM_TINGKAT,
    "TINGKAT_ANGGARAN",
    ()=>TINGKAT_ANGGARAN,
    "default",
    ()=>TabelRO,
    "punyaKodeRO",
    ()=>punyaKodeRO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/TabelRO.jsx
 * Tabel Data Anggaran bertingkat: KRO -> RO -> Komponen -> rincian (Sumber Dana, Pagu, Realisasi). Baris dengan kode
 * yang sama digabung; tiap tingkat menampilkan Pagu dan Realisasi = jumlah rincian di bawahnya. Klik baris untuk
 * membuka isinya. Tombol "+" di tiap tingkat menambah rincian baru dengan kode tingkat itu (dan di atasnya) sudah terisi,
 * ditambah awalan kode tingkat di bawahnya karena kodenya berjenjang (KRO ABAC -> RO "ABAC." -> Komponen "ABAC.1.").
 * Tingkat yang kolomnya belum ada di jenis data dilewati (mis. database lama yang baru punya Kode RO).
 *
 * items: [{ key, values: {field_key: nilai}, statusKode?, status?: node, aksi?: node, upt?: label UPT }]
 * fields: field_definitions jenis data itu
 * showUpt: UPT/Balai jadi tingkat paling atas (rekap Admin semua UPT)
 * struktur: daftar KRO/RO/Komponen dari Admin (tabel anggaran_struktur); tetap tampil walau belum ada rinciannya,
 *   dan uraiannya dipakai sebagai nama tingkat
 * onTambah(isianAwal, kolomKunci): opsional, tombol "+" pada tiap tingkat. kolomKunci = kode & uraian tingkat itu dan
 *   tingkat di atasnya; form menampilkannya terkunci (hanya dilihat) supaya rincian baru pasti masuk ke kelompok itu.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-complex.mjs [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DynamicForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DynamicForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/angka.js [app-ssr] (ecmascript)");
;
;
;
;
;
const KOLOM_KODE_RO = 'kode_ro';
const TINGKAT_ANGGARAN = [
    {
        kode: 'kode_kro',
        nama: 'nama_kro',
        label: 'KRO'
    },
    {
        kode: 'kode_ro',
        nama: 'nama_ro',
        label: 'RO'
    },
    {
        kode: 'kode_komponen',
        nama: 'nama_komponen',
        label: 'Komponen'
    }
];
const KOLOM_TINGKAT = TINGKAT_ANGGARAN.flatMap((t)=>[
        t.kode,
        t.nama
    ]);
const punyaKodeRO = (fields)=>fields.some((f)=>f.field_key === KOLOM_KODE_RO);
const kosong = (v)=>v === null || v === undefined || String(v).trim() === '';
const num = (v)=>Number.isFinite(Number(v)) ? Number(v) : 0;
const teks = (v)=>String(v ?? '').trim();
function Nilai({ f, v }) {
    if (kosong(v)) return null;
    if (f.tipe === 'file') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DynamicForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileValueDisplay"], {
        id: v
    }, void 0, false, {
        fileName: "[project]/src/components/TabelRO.jsx",
        lineNumber: 38,
        columnNumber: 33
    }, this);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRupiahField"])(f)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRp"])(v)
    }, void 0, false, {
        fileName: "[project]/src/components/TabelRO.jsx",
        lineNumber: 39,
        columnNumber: 32
    }, this);
    if (f.tipe === 'angka') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: num(v).toLocaleString('id-ID')
    }, void 0, false, {
        fileName: "[project]/src/components/TabelRO.jsx",
        lineNumber: 40,
        columnNumber: 34
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: String(v)
    }, void 0, false, {
        fileName: "[project]/src/components/TabelRO.jsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
function TabelRO({ items, fields, showUpt = false, onTambah, struktur = [] }) {
    const [buka, setBuka] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set());
    const ada = new Set(fields.map((f)=>f.field_key));
    const tingkat = TINGKAT_ANGGARAN.filter((t)=>ada.has(t.kode));
    const paguF = fields.find((f)=>f.peran_rekap === 'pagu') || fields.find((f)=>f.field_key === 'pagu');
    const realF = fields.find((f)=>f.peran_rekap === 'realisasi') || fields.find((f)=>f.field_key === 'realisasi');
    const kolomTingkat = new Set(tingkat.flatMap((t)=>[
            t.kode,
            t.nama
        ]));
    // Isi baris rincian: kolom selain kode/nama tingkat dan selain pagu/realisasi (mis. Sumber Dana)
    const rincianF = fields.filter((f)=>!kolomTingkat.has(f.field_key) && f !== paguF && f !== realF);
    const adaAksi = items.some((it)=>it.aksi);
    const adaStatus = items.some((it)=>it.status);
    const lv = showUpt ? [
        {
            upt: true,
            label: 'UPT/Balai'
        },
        ...tingkat
    ] : tingkat;
    // Pohon: tiap simpul { id, depth, def, kode, nama, prefill, pagu, realisasi, children[], items[], menunggu }
    const pohon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const bangun = (list, depth, induk, prefillInduk, kunciInduk = [])=>{
            const def = lv[depth];
            if (!def) return [];
            const m = new Map();
            for (const it of list){
                const kode = def.upt ? teks(it.upt) : teks(it.values?.[def.kode]);
                const id = `${induk}/${kode.toUpperCase()}`;
                if (!m.has(id)) m.set(id, {
                    id,
                    depth,
                    def,
                    kode,
                    nama: '',
                    items: []
                });
                const n = m.get(id);
                n.items.push(it);
                // Uraian dari daftar Admin didahulukan; selain itu uraian pertama yang terisi
                if (!def.upt && !kosong(it.values?.[def.nama]) && (!n.nama || it.master && !n.namaMaster)) {
                    n.nama = teks(it.values[def.nama]);
                    if (it.master) n.namaMaster = true;
                }
            }
            const nodes = [
                ...m.values()
            ];
            for (const n of nodes){
                const isi = n.items.filter((it)=>!it.master);
                n.pagu = paguF ? isi.reduce((a, it)=>a + num(it.values?.[paguF.field_key]), 0) : 0;
                n.realisasi = realF ? isi.reduce((a, it)=>a + num(it.values?.[realF.field_key]), 0) : 0;
                n.menunggu = isi.filter((it)=>it.statusKode && it.statusKode !== 'disetujui').length;
                n.prefill = n.def.upt ? {
                    ...prefillInduk
                } : {
                    ...prefillInduk,
                    [n.def.kode]: n.kode || undefined,
                    ...n.nama ? {
                        [n.def.nama]: n.nama
                    } : {}
                };
                n.kunci = n.def.upt ? kunciInduk : [
                    ...kunciInduk,
                    n.def.kode,
                    n.def.nama
                ];
                n.children = depth + 1 < lv.length ? bangun(n.items, depth + 1, n.id, n.prefill, n.kunci) : [];
                // Isian awal tombol "+": kode tingkat berikutnya diawali kode simpul ini (ABAC -> "ABAC.")
                const berikut = lv[depth + 1];
                n.prefillTambah = !n.def.upt && n.kode && berikut && !berikut.upt ? {
                    ...n.prefill,
                    [berikut.kode]: `${n.kode}.`
                } : n.prefill;
            }
            // Urut kode (angka dibaca sebagai angka); yang tanpa kode di akhir
            return nodes.sort((a, b)=>!a.kode - !b.kode || a.kode.localeCompare(b.kode, 'id', {
                    numeric: true
                }));
        };
        // Baris "master" = jalur KRO/RO/Komponen dari daftar Admin tanpa nilai; hanya membentuk pohon, tidak dijumlah
        const master = struktur.map((sr, i)=>({
                key: `master-${i}`,
                master: true,
                values: sr,
                upt: sr.upt
            }));
        return bangun([
            ...items,
            ...master
        ], 0, '', {});
    }, [
        items,
        struktur,
        lv,
        paguF,
        realF
    ]) // eslint-disable-line react-hooks/exhaustive-deps
    ;
    const semuaId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const out = [];
        const jalan = (ns)=>ns.forEach((n)=>{
                out.push(n.id);
                jalan(n.children);
            });
        jalan(pohon);
        return out;
    }, [
        pohon
    ]);
    const semuaTerbuka = semuaId.length > 0 && semuaId.every((id)=>buka.has(id));
    const toggle = (id)=>setBuka((s)=>{
            const n = new Set(s);
            n.has(id) ? n.delete(id) : n.add(id);
            return n;
        });
    const total = pohon.reduce((t, n)=>({
            pagu: t.pagu + n.pagu,
            realisasi: t.realisasi + n.realisasi
        }), {
        pagu: 0,
        realisasi: 0
    });
    const th = 'px-3 py-2.5 whitespace-nowrap font-semibold border-b border-gray-200 dark:border-gray-700';
    const indent = (depth)=>({
            paddingLeft: 12 + depth * 22
        });
    const barisSimpul = (n)=>{
        const terbuka = buka.has(n.id);
        const tebal = n.depth === 0 ? 'font-semibold text-gray-900 dark:text-white' : 'font-medium text-gray-800 dark:text-gray-200';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: `cursor-pointer hover:bg-blue-50/40 dark:hover:bg-blue-950/20 ${n.depth === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/40 dark:bg-gray-800/20'}`,
                    onClick: ()=>toggle(n.id),
                    title: terbuka ? 'Tutup' : 'Lihat isi',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "py-2.5 pr-3",
                            style: indent(n.depth),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: terbuka ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TabelRO.jsx",
                                            lineNumber: 120,
                                            columnNumber: 58
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TabelRO.jsx",
                                            lineNumber: 120,
                                            columnNumber: 86
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    n.def.upt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center gap-1.5 ${tebal}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 12,
                                                className: "text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabelRO.jsx",
                                                lineNumber: 122,
                                                columnNumber: 79
                                            }, this),
                                            " ",
                                            n.kode
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-wide text-gray-400 w-16 shrink-0",
                                                children: n.def.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabelRO.jsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${tebal} ${n.kode ? 'font-mono' : 'italic text-gray-400'}`,
                                                children: n.kode || `Tanpa kode ${n.def.label}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabelRO.jsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this),
                                            n.nama && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 dark:text-gray-400 truncate max-w-[280px]",
                                                title: n.nama,
                                                children: [
                                                    "· ",
                                                    n.nama
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TabelRO.jsx",
                                                lineNumber: 127,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabelRO.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelRO.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: `px-3 py-2.5 text-right tabular-nums whitespace-nowrap ${tebal}`,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRp"])(n.pagu)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelRO.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: `px-3 py-2.5 text-right tabular-nums whitespace-nowrap ${tebal}`,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRp"])(n.realisasi)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelRO.jsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        adaStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-3 py-2.5 whitespace-nowrap",
                            children: n.menunggu > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
                                children: [
                                    n.menunggu,
                                    " belum disetujui"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabelRO.jsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelRO.jsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        (adaAksi || onTambah) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-3 py-2.5 text-right",
                            children: onTambah && !n.def.upt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onTambah(n.prefillTambah, n.kunci);
                                },
                                className: "p-1.5 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30",
                                title: `Tambah rincian di ${n.def.label} ${n.kode || ''}`.trim(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TabelRO.jsx",
                                    lineNumber: 152,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TabelRO.jsx",
                                lineNumber: 146,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelRO.jsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TabelRO.jsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                terbuka && (n.children.length ? n.children.map(barisSimpul) : n.items.filter((it)=>!it.master).map((it)=>barisRincian(it, n.depth + 1)))
            ]
        }, n.id, true, {
            fileName: "[project]/src/components/TabelRO.jsx",
            lineNumber: 112,
            columnNumber: 7
        }, this);
    };
    const barisRincian = (it, depth)=>{
        const isi = rincianF.map((f)=>({
                f,
                v: it.values?.[f.field_key]
            })).filter((x)=>!kosong(x.v));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: "text-gray-700 dark:text-gray-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "py-2 pr-3",
                    style: indent(depth),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wide text-gray-400 w-16 shrink-0 pl-5",
                                children: "Rincian"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TabelRO.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            isi.length ? isi.map(({ f, v })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700 dark:text-gray-200",
                                    title: f.label,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Nilai, {
                                        f: f,
                                        v: v
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 171,
                                        columnNumber: 100
                                    }, this)
                                }, f.field_key, false, {
                                    fileName: "[project]/src/components/TabelRO.jsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)).reduce((acc, el, i)=>i ? [
                                    ...acc,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "·"
                                    }, `s${i}`, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 172,
                                        columnNumber: 53
                                    }, this),
                                    el
                                ] : [
                                    el
                                ], []) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "italic text-gray-400",
                                children: "(tanpa keterangan)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TabelRO.jsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TabelRO.jsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TabelRO.jsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-3 py-2 text-right tabular-nums whitespace-nowrap",
                    children: paguF && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Nilai, {
                        f: paguF,
                        v: it.values?.[paguF.field_key]
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelRO.jsx",
                        lineNumber: 177,
                        columnNumber: 87
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TabelRO.jsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-3 py-2 text-right tabular-nums whitespace-nowrap",
                    children: realF && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Nilai, {
                        f: realF,
                        v: it.values?.[realF.field_key]
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelRO.jsx",
                        lineNumber: 178,
                        columnNumber: 87
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TabelRO.jsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                adaStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-3 py-2 whitespace-nowrap",
                    children: it.status
                }, void 0, false, {
                    fileName: "[project]/src/components/TabelRO.jsx",
                    lineNumber: 179,
                    columnNumber: 23
                }, this),
                (adaAksi || onTambah) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-3 py-2 text-right whitespace-nowrap",
                    children: it.aksi
                }, void 0, false, {
                    fileName: "[project]/src/components/TabelRO.jsx",
                    lineNumber: 180,
                    columnNumber: 35
                }, this)
            ]
        }, it.key, true, {
            fileName: "[project]/src/components/TabelRO.jsx",
            lineNumber: 166,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "text-xs text-sky-600 hover:underline",
                    onClick: ()=>setBuka(semuaTerbuka ? new Set() : new Set(semuaId)),
                    children: semuaTerbuka ? 'Tutup semua' : 'Buka semua'
                }, void 0, false, {
                    fileName: "[project]/src/components/TabelRO.jsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TabelRO.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "text-xs border-collapse w-full",
                    style: {
                        minWidth: 'max-content'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-gray-50 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 uppercase tracking-wide",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: `${th} text-left`,
                                        children: lv.map((t)=>t.label).join(' / ')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: `${th} text-right`,
                                        children: "Pagu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: `${th} text-right`,
                                        children: "Realisasi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    adaStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: `${th} text-left`,
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 199,
                                        columnNumber: 29
                                    }, this),
                                    (adaAksi || onTambah) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: `${th} text-right`,
                                        children: "Aksi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 200,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabelRO.jsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelRO.jsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-100 dark:divide-gray-800",
                            children: pohon.map(barisSimpul)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelRO.jsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        pohon.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-gray-50 dark:bg-gray-800/60 font-semibold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-3 py-2.5",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-3 py-2.5 text-right tabular-nums whitespace-nowrap",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRp"])(total.pagu)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-3 py-2.5 text-right tabular-nums whitespace-nowrap",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$angka$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRp"])(total.realisasi)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this),
                                    adaStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 212,
                                        columnNumber: 31
                                    }, this),
                                    (adaAksi || onTambah) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                        fileName: "[project]/src/components/TabelRO.jsx",
                                        lineNumber: 213,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabelRO.jsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelRO.jsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TabelRO.jsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TabelRO.jsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TabelRO.jsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_04guq3m._.js.map