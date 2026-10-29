module.exports = [
"[project]/src/app/(portal)/permintaan-hapus/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminOnly$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminOnly.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$PermintaanHapus$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/admin/PermintaanHapus.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminOnly$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$PermintaanHapus$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/(portal)/permintaan-hapus/page.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(portal)/permintaan-hapus/page.jsx",
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
"[project]/src/components/PageHeader.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * components/PageHeader.jsx
 * Judul halaman standar: judul, satu kalimat penjelasan, dan (opsional) tombol aksi di kanan.
 */ __turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PageHeader({ title, description, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between gap-3 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold tracking-tight text-[#0B1830] dark:text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageHeader.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/SelisihByNameCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelisihByNameCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/SelisihByNameCard.jsx
 * Menu Permintaan (Admin): daftar UPT & bulan yang jumlah orang di Data by Name-nya tidak sama dengan total
 * peserta Rekap 4 Minggu jenis data mingguan pasangannya (lib/selisihByName.js). Hanya bulan yang sudah ada data
 * by name-nya yang diperiksa, supaya bulan yang memang belum diunggah tidak dianggap selisih.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$selisihByName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/selisihByName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InfoCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
;
;
;
;
;
;
;
function SelisihByNameCard({ onCount }) {
    const [hasil, setHasil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tahun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let batal = false;
        (async ()=>{
            const [{ data: jds }, { data: per }, { data: fds }, { data: upts }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').eq('aktif', true),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('periods').select('*').eq('tahun', tahun),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').eq('level', 'minggu'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('upt_list').select('*')
            ]);
            const pasangan = (jds || []).filter((j)=>j.level_utama === 'bulan' && j.mode_bulanan === 'rincian' && j.pasangan_mingguan_id);
            const periods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(per || []);
            const bulanList = periods.filter((p)=>p.level === 'bulan');
            const daftar = [];
            for (const jd of pasangan){
                const pesertaField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$selisihByName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kolomPesertaPasangan"])(fds || [], jd.pasangan_mingguan_id);
                const [{ data: ent }, { data: rek }] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').select('upt_key, period_id').eq('jenis_data_id', jd.id).in('period_id', bulanList.map((b)=>b.id)),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('jenis_data_id, upt_key, period_id, baris_ke, field_key, value, status').eq('jenis_data_id', jd.pasangan_mingguan_id).eq('field_key', pesertaField).eq('status', 'disetujui')
                ]);
                for (const b of bulanList){
                    const entries = (ent || []).filter((e)=>e.period_id === b.id);
                    if (!entries.length) continue;
                    const weekIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weeksOfMonth"])(periods, b.tahun, b.bulan).map((w)=>w.id);
                    const uptDenganNama = [
                        ...new Set(entries.map((e)=>e.upt_key))
                    ];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$selisihByName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hitungSelisihByName"])({
                        entries,
                        rekapRows: rek || [],
                        weekIds,
                        fieldDefs: fds || [],
                        partnerId: jd.pasangan_mingguan_id,
                        pesertaField,
                        uptKeys: uptDenganNama
                    }).filter((x)=>x.selisih !== 0).forEach((x)=>daftar.push({
                            ...x,
                            key: `${jd.id}|${b.id}|${x.upt_key}`,
                            bulan: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelBulan"])(b.bulan, b.tahun),
                            jenis: jd.judul,
                            partner: (jds || []).find((j)=>j.id === jd.pasangan_mingguan_id)?.judul || '',
                            upt: (upts || []).find((u)=>u.key === x.upt_key)?.label || x.upt_key
                        }));
                }
            }
            if (!batal) {
                setHasil(daftar);
                onCount?.(daftar.length);
            }
        })();
        return ()=>{
            batal = true;
        };
    }, [
        tahun,
        onCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: `Selisih Data by Name ${tahun} (${hasil ? hasil.length : '…'})`,
        children: !hasil ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "animate-spin text-gray-400"
            }, void 0, false, {
                fileName: "[project]/src/components/SelisihByNameCard.jsx",
                lineNumber: 63,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SelisihByNameCard.jsx",
            lineNumber: 63,
            columnNumber: 9
        }, this) : hasil.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8 text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    size: 30,
                    className: "mx-auto mb-2 opacity-40"
                }, void 0, false, {
                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Semua data by name yang sudah diunggah sama dengan total peserta Rekap 4 Minggu."
                }, void 0, false, {
                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SelisihByNameCard.jsx",
            lineNumber: 65,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500 dark:text-gray-400",
                    children: "Jumlah orang di data by name (Input Bulanan) tidak sama dengan total peserta rekap 4 minggu (Input Data, baris yang sudah disetujui). Minta UPT memeriksa salah satunya."
                }, void 0, false, {
                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-gray-100 dark:divide-gray-800 rounded-xl border border-amber-200 dark:border-amber-900",
                    children: hasil.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2.5 flex items-start gap-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 16,
                                    className: "text-amber-500 mt-0.5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-gray-900 dark:text-white",
                                            children: [
                                                x.upt,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-normal text-gray-400",
                                                    children: [
                                                        "· ",
                                                        x.jenis,
                                                        " · ",
                                                        x.bulan
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 84
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SelisihByNameCard.jsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 dark:text-gray-300",
                                            children: [
                                                "Data by name ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: x.byName.toLocaleString('id-ID')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 34
                                                }, this),
                                                " orang, rekap 4 minggu ",
                                                x.partner,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: x.mingguan.toLocaleString('id-ID')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 120
                                                }, this),
                                                " peserta",
                                                ' ',
                                                "— ",
                                                x.selisih > 0 ? 'lebih' : 'kurang',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: Math.abs(x.selisih).toLocaleString('id-ID')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 65
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SelisihByNameCard.jsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, x.key, true, {
                            fileName: "[project]/src/components/SelisihByNameCard.jsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/SelisihByNameCard.jsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SelisihByNameCard.jsx",
            lineNumber: 70,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SelisihByNameCard.jsx",
        lineNumber: 61,
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
"[project]/src/lib/selisihByName.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hitungSelisihByName",
    ()=>hitungSelisihByName,
    "kolomPesertaPasangan",
    ()=>kolomPesertaPasangan
]);
/**
 * lib/selisihByName.js
 * Mencocokkan jumlah orang di Data by Name (jenis data bulanan "per nama", mis. Data Masyarakat) dengan total
 * peserta Rekap 4 Minggu dari jenis data mingguan pasangannya (mis. Data Masyarakat Dilatih) pada bulan yang sama.
 * Angka mingguan direkap persis seperti tab "Rekap 4 Minggu" (lib/agregasi.js), dari baris yang sudah disetujui.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agregasi.js [app-ssr] (ecmascript)");
;
function kolomPesertaPasangan(fieldDefs, partnerId) {
    const f = fieldDefs.find((x)=>x.jenis_data_id === partnerId && x.level === 'minggu' && x.peran_rekap === 'peserta');
    return f?.field_key || 'jumlah_peserta';
}
function hitungSelisihByName({ entries = [], rekapRows = [], weekIds = [], fieldDefs = [], partnerId, pesertaField, uptKeys }) {
    const minggu = new Set(weekIds);
    const rows = rekapRows.filter((r)=>r.jenis_data_id === partnerId && r.field_key === pesertaField && minggu.has(r.period_id) && (!r.status || r.status === 'disetujui'));
    const mingguan = new Map((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agregasi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aggregateRows"])(rows, weekIds, fieldDefs).filter((r)=>r.value !== null).map((r)=>[
            r.upt_key,
            Number(r.value) || 0
        ]));
    const byName = new Map();
    for (const e of entries)byName.set(e.upt_key, (byName.get(e.upt_key) || 0) + 1);
    const keys = uptKeys || [
        ...new Set([
            ...mingguan.keys(),
            ...byName.keys()
        ])
    ];
    return keys.map((upt_key)=>{
        const a = byName.get(upt_key) || 0;
        const b = mingguan.get(upt_key) || 0;
        return {
            upt_key,
            byName: a,
            mingguan: b,
            selisih: a - b
        };
    }).filter((x)=>x.byName || x.mingguan);
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
"[project]/src/views/admin/PermintaanHapus.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PermintaanHapus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/admin/PermintaanHapus.jsx
 * Admin: setujui/tolak permintaan dari akun UPT — DUA jenis, ditampilkan sebagai dua daftar terpisah:
 * 1. Persetujuan Baris Data — SETIAP baris yang disimpan UPT (rekap_nilai/data_entries/dokumen_upload) langsung
 *    berstatus 'draft' menunggu persetujuan. Digerombolkan per (UPT, Jenis Data, Periode) supaya bisa disetujui
 *    satu-satu atau sekaligus (tombol "Setujui Semua"). "Tolak" di sini TIDAK menghapus baris — hanya
 *    memindahkannya ke Tempat Sampah + alasan di Catatan Aktivitas (terlihat UPT di menu Catatan Aktivitas).
 * 2. Hapus & Edit — permintaan pada `permintaan_hapus`, dibedakan kolom `aksi`: UPT menekan Hapus/Kosongkan pada
 *    baris yang sudah disetujui di #1 (aksi='hapus', baris masih 'draft'/'ditolak' bebas dihapus langsung, tidak
 *    lewat sini), atau menekan Edit pada baris yang sudah disetujui (aksi='edit', migrasi_15 — lihat
 *    be/src/modules/permintaan/permintaan-edit.service.ts). Menyetujui aksi='hapus' benar-benar menghapus (masuk Tempat Sampah);
 *    menyetujui aksi='edit' membuka baris kembali jadi Draft agar UPT bisa mengubahnya (permintaan dari tombol Edit),
 *    atau menulis nilai baru yang diajukan (permintaan dari impor). Menolak keduanya tidak menyentuh data.
 *
 * Tiap baris/permintaan punya tombol "Lihat Data": popup berisi seluruh isi data yang akan disetujui/ditolak,
 * dengan tombol Setujui & Tolak di dalamnya, supaya Admin bisa memeriksa dulu sebelum memutuskan.
 *
 * (Riwayat historis di sini bisa memuat entri lama "Buka Kunci Periode" dari fitur Kirim & Kunci Data per-periode
 * yang sudah dihapus — TABLE_LABEL/isUnlock tetap ada supaya baris riwayat lama itu masih terbaca dengan benar.)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InfoCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SelisihByNameCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SelisihByNameCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.mjs [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.mjs [app-ssr] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DynamicForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DynamicForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageHeader.jsx [app-ssr] (ecmascript)");
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
const TABLE_LABEL = {
    rekap_nilai: 'Data Mingguan/Bulanan',
    data_entries: 'Data Rincian (Nama)',
    dokumen_upload: 'Berkas Unggahan',
    periode_kirim: 'Buka Kunci Periode (fitur lama)'
};
const isUnlock = (item)=>item.tabel === 'periode_kirim';
const isEdit = (item)=>item.aksi === 'edit';
const parseJson = (raw)=>typeof raw === 'string' ? JSON.parse(raw) : raw;
/** Permintaan edit dari tombol Edit (tanpa nilai baru): menyetujuinya membuka baris jadi Draft. */ const isBukaEdit = (item)=>isEdit(item) && (()=>{
        const d = parseJson(item.data_baru_json);
        return !d || d.buka || !d.values;
    })();
const kosong = (v)=>v === null || v === undefined || v === '';
/** Ringkasan singkat nilai baru yang diajukan (aksi='edit'), untuk pratinjau sebelum Admin menyetujui. */ function editPreview(item) {
    const dataBaru = parseJson(item.data_baru_json);
    if (!dataBaru || dataBaru.buka) return null;
    if (item.tabel === 'rekap_nilai') {
        const parts = (dataBaru.values || []).map((v)=>`${v.field_key}: ${v.value_text ?? v.value ?? '-'}`);
        if (dataBaru.clearedFields?.length) parts.push(`(kosongkan: ${dataBaru.clearedFields.join(', ')})`);
        return parts.join(' · ') || null;
    }
    const v = dataBaru.values;
    if (!v) return null;
    return [
        v.nama,
        v.nik
    ].filter(Boolean).join(' · ') || null;
}
const STATUS_BADGE = {
    pending: [
        'Menunggu',
        'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300'
    ],
    disetujui: [
        'Disetujui',
        'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
    ],
    ditolak: [
        'Ditolak',
        'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
    ]
};
/** Satu kolom isian di popup Lihat Data. `baru` = nilai yang diajukan (permintaan edit dengan nilai baru). */ function NilaiSel({ tipe, value }) {
    if (kosong(value)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-gray-300 dark:text-gray-600",
        children: "—"
    }, void 0, false, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 67,
        columnNumber: 29
    }, this);
    if (tipe === 'file') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DynamicForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileValueDisplay"], {
        id: value
    }, void 0, false, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 68,
        columnNumber: 31
    }, this);
    if (tipe === 'angka' && Number.isFinite(Number(value))) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tabular-nums",
        children: Number(value).toLocaleString('id-ID')
    }, void 0, false, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 69,
        columnNumber: 66
    }, this);
    if (typeof value === 'object') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: JSON.stringify(value)
    }, void 0, false, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 70,
        columnNumber: 41
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "whitespace-pre-line break-words",
        children: String(value)
    }, void 0, false, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 71,
        columnNumber: 10
    }, this);
}
function DetailTable({ rows, showBaru }) {
    if (!rows.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-gray-400 py-2",
        children: "(tanpa isian)"
    }, void 0, false, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 75,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: "w-full text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: "text-left text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "py-2 pr-3 w-2/5",
                            children: "Kolom"
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "py-2 pr-3",
                            children: showBaru ? 'Nilai sekarang' : 'Isi'
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        showBaru && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "py-2",
                            children: "Nilai diajukan"
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 82,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                className: "divide-y divide-gray-100 dark:divide-gray-800",
                children: rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: showBaru && String(r.value ?? '') !== String(r.baru ?? '') ? 'bg-amber-50/60 dark:bg-amber-950/20' : '',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-2 pr-3 text-gray-500 dark:text-gray-400 align-top",
                                children: r.label
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-2 pr-3 text-gray-900 dark:text-gray-100 align-top",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NilaiSel, {
                                    tipe: r.tipe,
                                    value: r.value
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 89,
                                    columnNumber: 82
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            showBaru && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-2 text-gray-900 dark:text-gray-100 align-top",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NilaiSel, {
                                    tipe: r.tipe,
                                    value: r.baru
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 90,
                                    columnNumber: 90
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                lineNumber: 90,
                                columnNumber: 26
                            }, this)
                        ]
                    }, r.key, true, {
                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
const fmtTime = (iso)=>iso ? new Date(iso).toLocaleString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }) : '-';
;
function PermintaanHapus() {
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uptList, setUptList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [periods, setPeriods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jenisDataList, setJenisDataList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [barisRekap, setBarisRekap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [barisEntries, setBarisEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [barisDokumen, setBarisDokumen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [persetujuanBarisEnabled, setPersetujuanBarisEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tolakBarisEnabled, setTolakBarisEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const setToast = (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notify"])(t.message, t.type);
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fieldDefs, setFieldDefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Popup Lihat Data: { title, subtitle, note, sections: [{ judul, rows, showBaru }], onApprove, onReject, busyKey }
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        const feat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeatures"])();
        if (!feat.permintaanHapus) {
            setEnabled(false);
            setLoading(false);
            return;
        }
        const [{ data: reqs }, { data: upts }, { data: pers }, { data: fdefs }, { data: jdsAll }] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('permintaan_hapus').select('*').order('created_at', {
                ascending: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('upt_list').select('*'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('periods').select('*'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('jenis_data_id, level, field_key, label, tipe, urutan'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*')
        ]);
        setFieldDefs(fdefs || []);
        setJenisDataList(jdsAll || []);
        setItems(reqs || []);
        setUptList(upts || []);
        setPeriods(pers || []);
        setPersetujuanBarisEnabled(feat.persetujuanBaris);
        setTolakBarisEnabled(feat.tolakBaris);
        if (feat.persetujuanBaris) {
            const [{ data: rekap }, { data: ents }, { data: docs }] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('rekap_nilai').select('*').eq('status', 'draft'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('data_entries').select('*').eq('status', 'draft'),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dokumen_upload').select('id, jenis_data_id, period_id, upt_key, judul, file_name, created_at').eq('status', 'draft')
            ]);
            setBarisRekap(rekap || []);
            setBarisEntries(ents || []);
            setBarisDokumen(docs || []);
        } else {
            setBarisRekap([]);
            setBarisEntries([]);
            setBarisDokumen([]);
        }
        setLoading(false);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, [
        load
    ]);
    const uptLabel = (key)=>uptList.find((u)=>u.key === key)?.label || key;
    const periodLabel = (id)=>{
        const p = periods.find((x)=>x.id === id);
        return p ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(p) : id;
    };
    const jenisDataJudul = (id)=>jenisDataList.find((j)=>j.id === id)?.judul || id;
    const pending = items.filter((i)=>i.status === 'pending');
    const history = items.filter((i)=>i.status !== 'pending');
    // rekap_nilai disimpan per-field (EAV) — kelompokkan balik jadi satu "baris" per baris_ke, sama seperti
    // satu baris di form Input Mingguan (lihat be/src/modules/query/query.engine.ts: rowApprovalGate.groupBy).
    const rekapGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const r of barisRekap){
            const key = `${r.jenis_data_id}|${r.upt_key}|${r.period_id}|${r.baris_ke}`;
            if (!map.has(key)) map.set(key, {
                jenis_data_id: r.jenis_data_id,
                upt_key: r.upt_key,
                period_id: r.period_id,
                baris_ke: r.baris_ke,
                fields: {}
            });
            map.get(key).fields[r.field_key] = r.value !== null && r.value !== undefined ? r.value : r.value_text;
        }
        return [
            ...map.values()
        ];
    }, [
        barisRekap
    ]);
    // Gabungkan ketiga sumber jadi grup (UPT, Jenis Data, Periode) supaya bisa disetujui sekaligus.
    const barisGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        const ensure = (upt_key, jenis_data_id, period_id)=>{
            const key = `${upt_key}|${jenis_data_id}|${period_id}`;
            if (!map.has(key)) map.set(key, {
                key,
                upt_key,
                jenis_data_id,
                period_id,
                rekap: [],
                entries: [],
                dokumen: []
            });
            return map.get(key);
        };
        rekapGroups.forEach((g)=>ensure(g.upt_key, g.jenis_data_id, g.period_id).rekap.push(g));
        barisEntries.forEach((e)=>ensure(e.upt_key, e.jenis_data_id, e.period_id).entries.push(e));
        barisDokumen.forEach((d)=>ensure(d.upt_key, d.jenis_data_id, d.period_id).dokumen.push(d));
        return [
            ...map.values()
        ];
    }, [
        rekapGroups,
        barisEntries,
        barisDokumen
    ]);
    const totalBarisPending = rekapGroups.length + barisEntries.length + barisDokumen.length;
    // ── Popup Lihat Data ──
    // Baris isian berlabel sesuai Kelola Jenis Data (urutan kolom ikut urutan form); kolom tak dikenal di akhir.
    function rowsOf(jenisDataId, level, values, baru) {
        const defs = fieldDefs.filter((f)=>f.jenis_data_id === jenisDataId && (!level || f.level === level)).sort((a, b)=>(a.urutan ?? 0) - (b.urutan ?? 0));
        const keys = [
            ...new Set([
                ...defs.map((f)=>f.field_key),
                ...Object.keys(values || {}),
                ...Object.keys(baru || {})
            ])
        ];
        return keys.map((k)=>{
            const f = defs.find((d)=>d.field_key === k);
            return {
                key: k,
                label: f?.label || k,
                tipe: f?.tipe,
                value: values?.[k],
                baru: baru?.[k]
            };
        }).filter((r)=>!kosong(r.value) || baru && !kosong(r.baru));
    }
    const levelOf = (jdId)=>jenisDataList.find((j)=>j.id === jdId)?.level_utama === 'bulan' ? 'bulan' : 'minggu';
    const konteks = (upt, jd, period)=>`${uptLabel(upt)} · ${jenisDataJudul(jd)} · ${periodLabel(period)}`;
    const dokumenRows = (d)=>[
            {
                key: 'judul',
                label: 'Judul',
                value: d.judul
            },
            {
                key: 'file',
                label: 'Berkas',
                value: d.file_name
            },
            {
                key: 'waktu',
                label: 'Diunggah',
                value: fmtTime(d.created_at)
            }
        ];
    function lihatRekapBaris(r) {
        setDetail({
            title: 'Data yang akan disetujui',
            subtitle: konteks(r.upt_key, r.jenis_data_id, r.period_id),
            sections: [
                {
                    judul: `Baris #${r.baris_ke}`,
                    rows: rowsOf(r.jenis_data_id, 'minggu', r.fields)
                }
            ],
            busyKey: `r-${r.jenis_data_id}-${r.upt_key}-${r.period_id}-${r.baris_ke}`,
            onApprove: ()=>approveRekapBaris(r),
            onReject: tolakBarisEnabled ? ()=>rejectRekapBaris(r) : null
        });
    }
    function lihatEntryBaris(e) {
        setDetail({
            title: 'Data yang akan disetujui',
            subtitle: konteks(e.upt_key, e.jenis_data_id, e.period_id),
            sections: [
                {
                    judul: e.nama || e.nik || 'Data rincian',
                    rows: rowsOf(e.jenis_data_id, 'bulan', {
                        nama: e.nama,
                        nik: e.nik,
                        ...parseJson(e.data_json) || {}
                    })
                }
            ],
            busyKey: `e-${e.id}`,
            onApprove: ()=>approveEntryBaris(e),
            onReject: tolakBarisEnabled ? ()=>rejectEntryBaris(e) : null
        });
    }
    function lihatDokumenBaris(d) {
        setDetail({
            title: 'Berkas yang akan disetujui',
            subtitle: konteks(d.upt_key, d.jenis_data_id, d.period_id),
            sections: [
                {
                    judul: d.judul,
                    rows: dokumenRows(d)
                }
            ],
            busyKey: `d-${d.id}`,
            onApprove: ()=>approveDokumenBaris(d),
            onReject: tolakBarisEnabled ? ()=>rejectDokumenBaris(d) : null
        });
    }
    // Permintaan Hapus & Edit: baca baris sasarannya (filter_json) supaya Admin melihat isi lengkapnya.
    async function lihatPermintaan(item) {
        const base = {
            title: isEdit(item) ? 'Permintaan edit' : 'Permintaan hapus',
            subtitle: konteks(item.upt_key, item.jenis_data_id, item.period_id),
            note: isBukaEdit(item) ? 'Bila disetujui, baris ini kembali menjadi Draft dan UPT bisa mengubah isinya. Perubahannya nanti masuk Persetujuan Baris Data lagi.' : isEdit(item) ? 'Bila disetujui, nilai yang diajukan langsung ditulis dan baris tetap berstatus Disetujui.' : 'Bila disetujui, data di bawah dipindah ke Tempat Sampah (dapat dipulihkan 30 hari).',
            alasan: item.alasan,
            busyKey: item.id,
            onApprove: ()=>approve(item),
            onReject: ()=>reject(item)
        };
        setDetail({
            ...base,
            loading: true,
            sections: []
        });
        let q = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from(item.tabel).select('*');
        for (const f of parseJson(item.filter_json) || [])q = f.op === 'in' ? q.in(f.col, f.val) : q.eq(f.col, f.val);
        const { data, error } = await q;
        if (error) {
            setDetail({
                ...base,
                sections: [],
                error: error.message
            });
            return;
        }
        const baru = parseJson(item.data_baru_json) || {};
        let sections = [];
        if (item.tabel === 'rekap_nilai') {
            const byBaris = new Map();
            for (const r of data || []){
                const b = r.baris_ke ?? 1;
                if (!byBaris.has(b)) byBaris.set(b, {});
                byBaris.get(b)[r.field_key] = r.value !== null && r.value !== undefined ? r.value : r.value_text;
            }
            const nilaiBaru = Array.isArray(baru.values) && !baru.buka ? Object.fromEntries([
                ...baru.values.map((v)=>[
                        v.field_key,
                        v.value ?? v.value_text
                    ]),
                ...(baru.clearedFields || []).map((k)=>[
                        k,
                        null
                    ])
            ]) : null;
            sections = [
                ...byBaris.entries()
            ].sort((a, b)=>a[0] - b[0]).map(([b, values])=>({
                    judul: `Baris #${b}`,
                    rows: rowsOf(item.jenis_data_id, 'minggu', values, nilaiBaru ? {
                        ...values,
                        ...nilaiBaru
                    } : null),
                    showBaru: !!nilaiBaru
                }));
        } else if (item.tabel === 'data_entries') {
            const nilaiBaru = !baru.buka && baru.values ? parseJson(baru.values.data_json) || {} : null;
            sections = (data || []).map((e)=>{
                const values = {
                    nama: e.nama,
                    nik: e.nik,
                    ...parseJson(e.data_json) || {}
                };
                return {
                    judul: e.nama || e.nik || 'Data rincian',
                    rows: rowsOf(e.jenis_data_id, levelOf(e.jenis_data_id), values, nilaiBaru ? {
                        ...values,
                        ...nilaiBaru
                    } : null),
                    showBaru: !!nilaiBaru
                };
            });
        } else if (item.tabel === 'dokumen_upload') {
            sections = (data || []).map((d)=>({
                    judul: d.judul,
                    rows: dokumenRows(d)
                }));
        }
        setDetail({
            ...base,
            sections,
            empty: !sections.length
        });
    }
    // Setujui/Tolak dari dalam popup: popup ditutup setelah aksinya selesai (dibatalkan = popup tetap terbuka).
    async function aksiDetail(fn) {
        const selesai = await fn();
        if (selesai !== false) setDetail(null);
    }
    function rekapPreview(fields) {
        const parts = Object.entries(fields).filter(([, v])=>v !== null && v !== undefined && v !== '').slice(0, 3).map(([k, v])=>`${k}: ${v}`);
        return parts.length ? parts.join(' · ') : '(tanpa isian)';
    }
    async function approveRekapBaris(g) {
        setBusy(`r-${g.jenis_data_id}-${g.upt_key}-${g.period_id}-${g.baris_ke}`);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.setujuiRekap(g.jenis_data_id, g.upt_key, g.period_id, g.baris_ke);
        setBusy('');
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: 'Baris disetujui.'
        });
        load();
    }
    async function approveEntryBaris(e) {
        setBusy(`e-${e.id}`);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.setujuiEntry(e.id);
        setBusy('');
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: 'Baris disetujui.'
        });
        load();
    }
    async function approveDokumenBaris(d) {
        setBusy(`d-${d.id}`);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.setujuiDokumen(d.id);
        setBusy('');
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: 'Berkas disetujui.'
        });
        load();
    }
    // Dialog alasan penolakan (opsional). null = dibatalkan.
    const askAlasan = (judul, keterangan)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["promptDialog"])(`${judul}\n\n${keterangan}`, {
            placeholder: 'Alasan penolakan (opsional)',
            confirmLabel: 'Tolak',
            danger: true
        });
    async function rejectRekapBaris(g) {
        const catatan = await askAlasan('Tolak baris ini?', 'Baris akan dipindah ke Tempat Sampah (bisa dipulihkan) dan tercatat di Catatan Aktivitas. Alasan yang Anda tulis akan terlihat oleh UPT.');
        if (catatan === null) return false // batal
        ;
        setBusy(`r-${g.jenis_data_id}-${g.upt_key}-${g.period_id}-${g.baris_ke}`);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.tolakRekap(g.jenis_data_id, g.upt_key, g.period_id, g.baris_ke, catatan);
        setBusy('');
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: 'Baris ditolak — UPT bisa memperbaiki & menyimpan ulang.'
        });
        load();
    }
    async function rejectEntryBaris(e) {
        const catatan = await askAlasan('Tolak baris ini?', 'Baris akan dipindah ke Tempat Sampah (bisa dipulihkan) dan tercatat di Catatan Aktivitas. Alasan yang Anda tulis akan terlihat oleh UPT.');
        if (catatan === null) return false;
        setBusy(`e-${e.id}`);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.tolakEntry(e.id, catatan);
        setBusy('');
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: 'Baris ditolak — UPT bisa memperbaiki & menyimpan ulang.'
        });
        load();
    }
    async function rejectDokumenBaris(d) {
        const catatan = await askAlasan('Tolak berkas ini?', 'Berkas akan dipindah ke Tempat Sampah (bisa dipulihkan) dan tercatat di Catatan Aktivitas. Alasan yang Anda tulis akan terlihat oleh UPT.');
        if (catatan === null) return false;
        setBusy(`d-${d.id}`);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.tolakDokumen(d.id, catatan);
        setBusy('');
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: 'Berkas ditolak — UPT bisa mengunggah ulang.'
        });
        load();
    }
    async function approveGroupAll(g) {
        const total = g.rekap.length + g.entries.length + g.dokumen.length;
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(`Setujui ${total} baris sekaligus?\n\n${uptLabel(g.upt_key)} · ${jenisDataJudul(g.jenis_data_id)} · ${periodLabel(g.period_id)}`, {
            confirmLabel: 'Setujui semua'
        })) return;
        setBusy(g.key);
        let error = null;
        if (g.rekap.length) {
            const items = g.rekap.map((r)=>({
                    jenis_data_id: r.jenis_data_id,
                    upt_key: r.upt_key,
                    period_id: r.period_id,
                    baris_ke: r.baris_ke
                }));
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.setujuiRekapMassal(items);
            if (res.error) error = res.error;
        }
        if (g.entries.length && !error) {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.setujuiEntryMassal(g.entries.map((e)=>e.id));
            if (res.error) error = res.error;
        }
        for (const d of g.dokumen){
            if (error) break;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].persetujuanBaris.setujuiDokumen(d.id);
            if (res.error) error = res.error;
        }
        setBusy('');
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: `${total} baris disetujui.`
        });
        load();
    }
    async function approve(item) {
        const confirmMsg = isUnlock(item) ? `Buka kunci "${item.ringkasan}"?\n\nUPT bisa mengedit lagi seluruh jenis data periode ini sampai mereka "Kirim" ulang.` : isBukaEdit(item) ? `Izinkan edit "${item.ringkasan}"?\n\nBaris kembali menjadi Draft (isinya tidak berubah) sehingga UPT bisa mengubahnya. Perubahan dari UPT nanti masuk Persetujuan Baris Data lagi.` : isEdit(item) ? `Terapkan perubahan "${item.ringkasan}"?\n\nNilai baru akan langsung ditulis dan baris kembali berstatus Disetujui.` : `Setujui penghapusan "${item.ringkasan || TABLE_LABEL[item.tabel]}"?\n\nData akan benar-benar terhapus (masuk Tempat Sampah, dapat dipulihkan 30 hari).`;
        const confirmLabel = isUnlock(item) ? 'Buka kunci' : isBukaEdit(item) ? 'Izinkan edit' : isEdit(item) ? 'Terapkan' : 'Ya, hapus';
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(confirmMsg, {
            confirmLabel
        })) return false;
        setBusy(item.id);
        const { error, data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].permintaanHapus.setujui(item.id);
        setBusy('');
        if (!error && !isEdit(item) && !isUnlock(item)) {
            load();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyDihapus"])(`${data?.dihapus ?? item.jumlah_baris} data · ${item.ringkasan || TABLE_LABEL[item.tabel] || item.tabel}`);
            return;
        }
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: isUnlock(item) ? 'Disetujui — kunci periode dibuka.' : isBukaEdit(item) ? 'Disetujui — baris kembali jadi Draft dan bisa diedit UPT.' : isEdit(item) ? 'Disetujui — nilai baru sudah tersimpan.' : `Disetujui — ${data?.dihapus ?? item.jumlah_baris} data dihapus.`
        });
        load();
    }
    async function reject(item) {
        const catatan = await askAlasan(isEdit(item) ? 'Tolak permintaan edit ini?' : isUnlock(item) ? 'Tolak buka kunci ini?' : 'Tolak permintaan hapus ini?', isEdit(item) ? 'Nilai lama tetap berlaku. Alasan yang Anda tulis akan terlihat oleh UPT.' : 'Data tidak disentuh. Alasan yang Anda tulis akan terlihat oleh UPT.');
        if (catatan === null) return false // batal
        ;
        setBusy(item.id);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].permintaanHapus.tolak(item.id, catatan);
        setBusy('');
        setToast(error ? {
            type: 'error',
            message: error.message
        } : {
            type: 'success',
            message: isUnlock(item) ? 'Permintaan buka kunci ditolak — data tetap terkunci.' : isEdit(item) ? 'Permintaan edit ditolak — nilai lama tetap berlaku.' : 'Permintaan ditolak.'
        });
        load();
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card flex justify-center py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "animate-spin text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
            lineNumber: 412,
            columnNumber: 71
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 412,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Permintaan",
                description: "Tiap baris yang UPT simpan menunggu persetujuan Anda di sini (Persetujuan Baris Data) sebelum dihitung resmi. Untuk baris yang sudah disetujui, UPT mengajukan permintaan hapus atau edit terpisah di bagian Hapus & Edit."
            }, void 0, false, {
                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            !enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-6 text-sm text-amber-700 dark:text-amber-300",
                children: [
                    "Fitur Permintaan belum aktif. Jalankan ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "database/migrasi_10_permintaan_hapus.sql"
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                        lineNumber: 423,
                        columnNumber: 50
                    }, this),
                    " di phpMyAdmin, restart backend, lalu muat ulang halaman. Sampai migrasi dijalankan, akun UPT tetap menghapus data secara langsung seperti sebelumnya (tidak diblokir diam-diam)."
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                lineNumber: 422,
                columnNumber: 9
            }, this),
            enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SelisihByNameCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this),
                    persetujuanBarisEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: `Persetujuan Baris Data (${totalBarisPending})`,
                        children: barisGroups.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                    size: 32,
                                    className: "mx-auto mb-2 opacity-40"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 436,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Tidak ada baris data yang menunggu persetujuan."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 437,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 435,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: barisGroups.map((g)=>{
                                const total = g.rekap.length + g.entries.length + g.dokumen.length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3 flex-wrap px-4 py-2.5 bg-gray-50 dark:bg-gray-800/40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-900 dark:text-white",
                                                    children: [
                                                        uptLabel(g.upt_key),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 font-normal",
                                                            children: [
                                                                "· ",
                                                                jenisDataJudul(g.jenis_data_id),
                                                                " · ",
                                                                periodLabel(g.period_id)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 447,
                                                            columnNumber: 51
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 446,
                                                    columnNumber: 27
                                                }, this),
                                                total > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: busy === g.key,
                                                    onClick: ()=>approveGroupAll(g),
                                                    className: "btn-primary text-xs !bg-emerald-600 hover:!bg-emerald-700",
                                                    children: [
                                                        busy === g.key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            size: 13,
                                                            className: "animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 455,
                                                            columnNumber: 49
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 455,
                                                            columnNumber: 98
                                                        }, this),
                                                        " Setujui Semua (",
                                                        total,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 450,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                            lineNumber: 445,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-gray-100 dark:divide-gray-800",
                                            children: [
                                                g.rekap.map((r)=>{
                                                    const busyKey = `r-${r.jenis_data_id}-${r.upt_key}-${r.period_id}-${r.baris_ke}`;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "py-2.5 px-4 flex items-start justify-between gap-3 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-600 dark:text-gray-300 min-w-0 truncate",
                                                                children: rekapPreview(r.fields)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                lineNumber: 464,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 flex-shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>lihatRekapBaris(r),
                                                                        className: "btn-secondary text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 467,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            " Lihat Data"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 466,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    tolakBarisEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        disabled: busy === busyKey,
                                                                        onClick: ()=>rejectRekapBaris(r),
                                                                        className: "btn-secondary text-xs !text-rose-600 dark:!text-rose-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 471,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            " Tolak"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        disabled: busy === busyKey,
                                                                        onClick: ()=>approveRekapBaris(r),
                                                                        className: "btn-secondary text-xs !text-emerald-700 dark:!text-emerald-400",
                                                                        children: [
                                                                            busy === busyKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 12,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 475,
                                                                                columnNumber: 57
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 475,
                                                                                columnNumber: 106
                                                                            }, this),
                                                                            " Setujui"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                lineNumber: 465,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, busyKey, true, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 463,
                                                        columnNumber: 31
                                                    }, this);
                                                }),
                                                g.entries.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "py-2.5 px-4 flex items-start justify-between gap-3 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-600 dark:text-gray-300 min-w-0 truncate",
                                                                children: e.nama || e.nik || '(tanpa nama)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                lineNumber: 483,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 flex-shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>lihatEntryBaris(e),
                                                                        className: "btn-secondary text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 486,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            " Lihat Data"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    tolakBarisEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        disabled: busy === `e-${e.id}`,
                                                                        onClick: ()=>rejectEntryBaris(e),
                                                                        className: "btn-secondary text-xs !text-rose-600 dark:!text-rose-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 490,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            " Tolak"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        disabled: busy === `e-${e.id}`,
                                                                        onClick: ()=>approveEntryBaris(e),
                                                                        className: "btn-secondary text-xs !text-emerald-700 dark:!text-emerald-400",
                                                                        children: [
                                                                            busy === `e-${e.id}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 12,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 494,
                                                                                columnNumber: 59
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 494,
                                                                                columnNumber: 108
                                                                            }, this),
                                                                            " Setujui"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                lineNumber: 484,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, `e-${e.id}`, true, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 482,
                                                        columnNumber: 29
                                                    }, this)),
                                                g.dokumen.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "py-2.5 px-4 flex items-start justify-between gap-3 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-600 dark:text-gray-300 min-w-0 truncate",
                                                                children: [
                                                                    d.judul,
                                                                    " (",
                                                                    d.file_name,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                lineNumber: 501,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 flex-shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>lihatDokumenBaris(d),
                                                                        className: "btn-secondary text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 504,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            " Lihat Data"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    tolakBarisEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        disabled: busy === `d-${d.id}`,
                                                                        onClick: ()=>rejectDokumenBaris(d),
                                                                        className: "btn-secondary text-xs !text-rose-600 dark:!text-rose-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 508,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            " Tolak"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        disabled: busy === `d-${d.id}`,
                                                                        onClick: ()=>approveDokumenBaris(d),
                                                                        className: "btn-secondary text-xs !text-emerald-700 dark:!text-emerald-400",
                                                                        children: [
                                                                            busy === `d-${d.id}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                size: 12,
                                                                                className: "animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 512,
                                                                                columnNumber: 59
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                                lineNumber: 512,
                                                                                columnNumber: 108
                                                                            }, this),
                                                                            " Setujui"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                        lineNumber: 511,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                lineNumber: 502,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, `d-${d.id}`, true, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 500,
                                                        columnNumber: 29
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                            lineNumber: 459,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, g.key, true, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 444,
                                    columnNumber: 23
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 440,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                        lineNumber: 433,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: `Hapus & Edit (${pending.length})`,
                        children: pending.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                    size: 32,
                                    className: "mx-auto mb-2 opacity-40"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 529,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Tidak ada permintaan yang menunggu."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 530,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 528,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y divide-gray-100 dark:divide-gray-800",
                            children: pending.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-3 flex items-start justify-between gap-4 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-sm text-gray-900 dark:text-white flex items-center gap-1.5 flex-wrap",
                                                    children: [
                                                        uptLabel(item.upt_key),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 font-normal",
                                                            children: [
                                                                "· ",
                                                                TABLE_LABEL[item.tabel] || item.tabel
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 538,
                                                            columnNumber: 50
                                                        }, this),
                                                        isEdit(item) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 29
                                                                }, this),
                                                                " Pengajuan Edit"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 540,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
                                                            children: "Pengajuan Hapus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 544,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 537,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                                    children: item.ringkasan || `${item.jumlah_baris} baris`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 547,
                                                    columnNumber: 23
                                                }, this),
                                                isEdit(item) && editPreview(item) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-0.5",
                                                    children: [
                                                        "Nilai baru: ",
                                                        editPreview(item)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 549,
                                                    columnNumber: 25
                                                }, this),
                                                item.alasan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-0.5 italic",
                                                    children: [
                                                        'Alasan UPT: "',
                                                        item.alasan,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 551,
                                                    columnNumber: 39
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-gray-400 mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 553,
                                                            columnNumber: 25
                                                        }, this),
                                                        " ",
                                                        item.requested_by_label || 'UPT',
                                                        " · ",
                                                        fmtTime(item.created_at)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 552,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                            lineNumber: 536,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-shrink-0",
                                            children: [
                                                !isUnlock(item) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>lihatPermintaan(item),
                                                    className: "btn-secondary text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 559,
                                                            columnNumber: 27
                                                        }, this),
                                                        " Lihat Data"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 558,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: busy === item.id,
                                                    onClick: ()=>reject(item),
                                                    className: "btn-secondary text-xs text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 567,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Tolak"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 562,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: busy === item.id,
                                                    onClick: ()=>approve(item),
                                                    className: "btn-primary text-xs !bg-emerald-600 hover:!bg-emerald-700",
                                                    children: [
                                                        busy === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            size: 13,
                                                            className: "animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 574,
                                                            columnNumber: 45
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 574,
                                                            columnNumber: 94
                                                        }, this),
                                                        " Setujui"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 569,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                            lineNumber: 556,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 535,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 533,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                        lineNumber: 526,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: `Riwayat Hapus & Edit (${history.length})`,
                        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-xs text-sky-600 hover:underline",
                            onClick: ()=>setShowHistory((s)=>!s),
                            children: showHistory ? 'Sembunyikan' : 'Tampilkan'
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 586,
                            columnNumber: 15
                        }, this),
                        children: showHistory && (history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 text-center py-6",
                            children: "Belum ada riwayat."
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 592,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-gray-200 dark:border-gray-700 text-xs uppercase tracking-wide text-gray-500 text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3",
                                                    children: "UPT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 598,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3",
                                                    children: "Data"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 599,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 600,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3",
                                                    children: "Ditinjau oleh"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 601,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3",
                                                    children: "Waktu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 602,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-2 px-3",
                                                    children: "Catatan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                    lineNumber: 603,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                            lineNumber: 597,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                        lineNumber: 596,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-gray-100 dark:divide-gray-800",
                                        children: history.map((item)=>{
                                            const [label, cls] = STATUS_BADGE[item.status] || [
                                                item.status,
                                                'bg-gray-100 text-gray-700'
                                            ];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 whitespace-nowrap",
                                                        children: uptLabel(item.upt_key)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 611,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-xs",
                                                        children: [
                                                            isEdit(item) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-1 inline-flex text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                                lineNumber: 613,
                                                                columnNumber: 46
                                                            }, this),
                                                            item.ringkasan || `${item.jumlah_baris} baris ${TABLE_LABEL[item.tabel] || item.tabel}`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 612,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap ${cls}`,
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                            lineNumber: 616,
                                                            columnNumber: 55
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 616,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-xs",
                                                        children: item.reviewed_by_label || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 617,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-xs whitespace-nowrap",
                                                        children: fmtTime(item.reviewed_at)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 618,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-xs text-gray-500",
                                                        children: item.catatan_admin || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                        lineNumber: 619,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                                lineNumber: 610,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                        lineNumber: 606,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                lineNumber: 595,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 594,
                            columnNumber: 15
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                lineNumber: 430,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: !!detail,
                onClose: ()=>setDetail(null),
                title: detail?.title,
                maxWidth: "max-w-3xl",
                footer: detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        detail.onReject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: busy === detail.busyKey,
                            onClick: ()=>aksiDetail(detail.onReject),
                            className: "btn-secondary text-sm text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 644,
                                    columnNumber: 17
                                }, this),
                                " Tolak"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 639,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: busy === detail.busyKey,
                            onClick: ()=>aksiDetail(detail.onApprove),
                            className: "btn-primary text-sm !bg-emerald-600 hover:!bg-emerald-700",
                            children: [
                                busy === detail.busyKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 14,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 652,
                                    columnNumber: 42
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                    lineNumber: 652,
                                    columnNumber: 91
                                }, this),
                                " Setujui"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 647,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                    lineNumber: 637,
                    columnNumber: 11
                }, this),
                children: detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 dark:text-gray-400",
                            children: detail.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 659,
                            columnNumber: 13
                        }, this),
                        detail.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm rounded-lg bg-sky-50 dark:bg-sky-950/30 text-sky-800 dark:text-sky-200 px-3 py-2",
                            children: detail.note
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 660,
                            columnNumber: 29
                        }, this),
                        detail.alasan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm italic text-gray-500",
                            children: [
                                'Alasan UPT: "',
                                detail.alasan,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 661,
                            columnNumber: 31
                        }, this),
                        detail.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "animate-spin text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                lineNumber: 663,
                                columnNumber: 57
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 663,
                            columnNumber: 15
                        }, this) : detail.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-rose-600",
                            children: [
                                "Gagal memuat data: ",
                                detail.error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 665,
                            columnNumber: 15
                        }, this) : detail.empty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400",
                            children: "Data sasaran tidak ditemukan lagi (mungkin sudah dihapus)."
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                            lineNumber: 667,
                            columnNumber: 15
                        }, this) : detail.sections.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden",
                                children: [
                                    detail.sections.length > 1 || s.judul ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-gray-50 dark:bg-gray-800/40 text-sm font-medium text-gray-800 dark:text-gray-100",
                                        children: s.judul
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                        lineNumber: 671,
                                        columnNumber: 19
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailTable, {
                                            rows: s.rows,
                                            showBaru: s.showBaru
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                            lineNumber: 673,
                                            columnNumber: 44
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                        lineNumber: 673,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                                lineNumber: 669,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                    lineNumber: 658,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
                lineNumber: 631,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/admin/PermintaanHapus.jsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_1woirky._.js.map