module.exports = [
"[project]/src/app/(portal)/kelola-dashboard/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminOnly$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminOnly.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KelolaDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/admin/KelolaDashboard.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminOnly$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$admin$2f$KelolaDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/(portal)/kelola-dashboard/page.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(portal)/kelola-dashboard/page.jsx",
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
"[project]/src/lib/dashboardWidgets.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.mjs [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.mjs [app-ssr] (ecmascript) <export default as Coins>");
;
const ICONS = {
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    Landmark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
    GraduationCap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    Activity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    BarChart3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
    Database: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    ClipboardList: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
    Calendar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    Clock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
    Coins: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"]
};
const ICON_NAMES = Object.keys(ICONS);
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
].map((w, i)=>({
        id: `bawaan-${i}`,
        urutan: (i + 1) * 10,
        aktif: true,
        ikon: null,
        warna: null,
        ...w
    }));
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
"[project]/src/views/admin/KelolaDashboard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KelolaDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * views/admin/KelolaDashboard.jsx
 * Admin: atur kartu & grafik Dashboard tanpa coding. Sumber angka dipilih dari jenis data + kolom (angka, level minggu),
 * atau "Jumlah pelatihan" (banyaknya baris yang kolom Judul barisnya terisi).
 * Tiap kartu grafik di Dashboard punya tombol tampilan grafik batang / tabel angka bawaan, tidak perlu diatur di sini.
 * Selama belum ada pengaturan tersimpan, Dashboard memakai tampilan bawaan (lib/dashboardWidgets.js).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InfoCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dashboardWidgets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/peranRekap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saringBaris$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/saringBaris.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
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
const blankKartu = (grup)=>({
        tipe: 'kartu',
        judul: '',
        grup,
        gaya: 'berwarna',
        ikon: 'BarChart3',
        warna: 'bg-blue-600',
        satuan: 'angka',
        aktif: true,
        konfigurasi: {
            items: [
                {
                    jd: '',
                    field: ''
                }
            ]
        }
    });
const blankGrafik = ()=>({
        tipe: 'grafik',
        judul: '',
        grup: 'Grafik',
        gaya: 'berwarna',
        satuan: 'angka',
        aktif: true,
        konfigurasi: {
            series: [
                {
                    label: '',
                    warna: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHART_COLORS"][0],
                    items: [
                        {
                            jd: '',
                            field: ''
                        }
                    ]
                }
            ]
        }
    });
/** Editor daftar sumber {jd, field, where?}. Saringan (where) hanya muncul bila jenis datanya punya kolom pilihan. */ function ItemsEditor({ items, onChange, jenisData, fieldsOf, pilihanOf, label }) {
    const set = (i, patch)=>onChange(items.map((it, idx)=>{
            if (idx !== i) return it;
            const n = {
                ...it,
                ...patch
            };
            if (!n.where) delete n.where;
            return n;
        }));
    // Satu syarat per sumber, disimpan sebagai { kolom: opsi }; nilai <select> = "kolom=opsi"
    const whereValue = (it)=>{
        const [k] = Object.keys(it.where || {});
        return k ? `${k}=${it.where[k]}` : '';
    };
    const toWhere = (v)=>{
        if (!v) return undefined;
        const i = v.indexOf('=');
        return {
            [v.slice(0, i)]: v.slice(i + 1)
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-medium text-gray-600 dark:text-gray-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                lineNumber: 33,
                columnNumber: 17
            }, this),
            items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "form-select text-xs flex-1",
                            value: it.jd,
                            onChange: (e)=>set(i, {
                                    jd: e.target.value,
                                    field: '',
                                    where: undefined
                                }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— jenis data —"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                jenisData.map((j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: j.key,
                                        children: j.judul
                                    }, j.key, false, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 38,
                                        columnNumber: 33
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "form-select text-xs flex-1",
                            value: it.field,
                            onChange: (e)=>set(i, {
                                    field: e.target.value
                                }),
                            disabled: !it.jd,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— kolom angka —"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                fieldsOf(it.jd).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: f.field_key,
                                        children: f.label
                                    }, f.field_key, false, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 42,
                                        columnNumber: 39
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        pilihanOf(it.jd).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "form-select text-xs flex-1",
                            value: whereValue(it),
                            onChange: (e)=>set(i, {
                                    where: toWhere(e.target.value)
                                }),
                            title: "Hanya jumlahkan baris dengan pilihan tertentu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "— semua baris —"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                pilihanOf(it.jd).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: f.label,
                                        children: f.opsi.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: `${f.field_key}=${o}`,
                                                children: [
                                                    f.label,
                                                    ": ",
                                                    o
                                                ]
                                            }, o, true, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 49,
                                                columnNumber: 36
                                            }, this))
                                    }, f.field_key, false, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "p-1 text-gray-400 hover:text-rose-600",
                            onClick: ()=>onChange(items.filter((_, idx)=>idx !== i)),
                            title: "Hapus sumber",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 54,
                                columnNumber: 166
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "text-xs text-sky-600 hover:underline",
                onClick: ()=>onChange([
                        ...items,
                        {
                            jd: '',
                            field: ''
                        }
                    ]),
                children: "+ tambah sumber (dijumlahkan)"
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
function KelolaDashboard() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jenisData, setJenisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fieldDefs, setFieldDefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [edit, setEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function load() {
        const feat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeatures"])();
        if (!feat.dashboard) {
            setEnabled(false);
            setLoading(false);
            return;
        }
        const [{ data: w }, { data: jds }, { data: f }] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').select('*').order('urutan'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('jenis_data').select('*').eq('aktif', true).order('created_at'),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('field_definitions').select('*').eq('aktif', true).eq('level', 'minggu').order('urutan')
        ]);
        setSaved(w || []);
        setJenisData((jds || []).filter((j)=>j.level_utama === 'minggu'));
        setFieldDefs(f || []);
        setLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, []);
    const jdById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.fromEntries(jenisData.map((j)=>[
                j.id,
                j
            ])), [
        jenisData
    ]);
    const petaPeran = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buatPetaPeran"])(fieldDefs), [
        fieldDefs
    ]);
    const LABEL_PELATIHAN = 'Jumlah pelatihan (banyaknya baris)';
    const fieldsOf = (key)=>{
        const j = jenisData.find((x)=>x.key === key);
        if (!j) return [];
        const milik = fieldDefs.filter((f)=>f.jenis_data_id === j.id);
        const adaJudul = milik.some((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$peranRekap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peranKolom"])(petaPeran, j.id, f.field_key) === 'judul');
        return [
            ...adaJudul ? [
                {
                    field_key: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIELD_PELATIHAN"],
                    label: LABEL_PELATIHAN
                }
            ] : [],
            ...milik.filter((f)=>f.tipe === 'angka')
        ];
    };
    const opsiOf = (f)=>{
        try {
            const o = typeof f.opsi_pilihan === 'string' ? JSON.parse(f.opsi_pilihan) : f.opsi_pilihan;
            return Array.isArray(o) ? o : [];
        } catch  {
            return [];
        }
    };
    const pilihanOf = (key)=>{
        const j = jenisData.find((x)=>x.key === key);
        return j ? fieldDefs.filter((f)=>f.jenis_data_id === j.id && f.tipe === 'pilihan').map((f)=>({
                ...f,
                opsi: opsiOf(f)
            })).filter((f)=>f.opsi.length) : [];
    };
    const usingDefault = saved.length === 0;
    const list = usingDefault ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_WIDGETS"] : [
        ...saved
    ].sort((a, b)=>a.urutan - b.urutan);
    const fail = (error)=>setMsg({
            type: 'error',
            text: error.message
        });
    async function copyDefaults() {
        setBusy(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_WIDGETS"].map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRow"]));
        setBusy(false);
        if (error) return fail(error);
        setMsg({
            type: 'success',
            text: 'Tampilan bawaan disalin. Sekarang setiap kartu/grafik dapat diubah.'
        });
        load();
    }
    async function save() {
        const w = edit;
        const validItems = (its)=>its.filter((i)=>i.jd && i.field);
        if (!w.judul.trim()) return setMsg({
            type: 'error',
            text: 'Judul wajib diisi.'
        });
        if (!w.grup.trim()) return setMsg({
            type: 'error',
            text: 'Nama bagian wajib diisi.'
        });
        let konfigurasi;
        if (w.tipe === 'kartu') {
            const items = validItems(w.konfigurasi.items);
            if (!items.length) return setMsg({
                type: 'error',
                text: 'Pilih minimal satu sumber (jenis data + kolom).'
            });
            konfigurasi = {
                ...w.konfigurasi,
                items,
                pembanding: validItems(w.konfigurasi.pembanding || [])
            };
            if (!konfigurasi.pembanding.length) {
                delete konfigurasi.pembanding;
                delete konfigurasi.pembandingLabel;
            }
        } else {
            const series = w.konfigurasi.series.map(({ tumpuk, ...s })=>({
                    ...s,
                    ...tumpuk?.trim() ? {
                        tumpuk: tumpuk.trim()
                    } : {},
                    items: validItems(s.items)
                })).filter((s)=>s.label.trim() && s.items.length);
            if (!series.length) return setMsg({
                type: 'error',
                text: 'Grafik butuh minimal satu seri dengan nama dan sumber.'
            });
            konfigurasi = {
                series,
                ...w.konfigurasi.tampilan === 'total' ? {
                    tampilan: 'total'
                } : {}
            };
        }
        setBusy(true);
        const row = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRow"])(w),
            konfigurasi
        };
        const q = w.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').update(row).eq('id', w.id) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').insert({
            ...row,
            urutan: (Math.max(0, ...saved.map((s)=>s.urutan)) || 0) + 10
        });
        const { error } = await q;
        setBusy(false);
        if (error) return fail(error);
        setEdit(null);
        setMsg({
            type: 'success',
            text: 'Tersimpan. Dashboard langsung memakai pengaturan ini.'
        });
        load();
    }
    async function move(w, dir) {
        const i = list.findIndex((x)=>x.id === w.id), o = list[i + dir];
        if (!o) return;
        const [a, b] = [
            w.urutan,
            o.urutan
        ];
        await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').update({
                urutan: b
            }).eq('id', w.id),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').update({
                urutan: a === b ? b + dir : a
            }).eq('id', o.id)
        ]);
        load();
    }
    async function toggle(w) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').update({
            aktif: !w.aktif
        }).eq('id', w.id);
        if (error) fail(error);
        else load();
    }
    async function remove(w) {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])(`Hapus "${w.judul}" dari Dashboard?`)) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').delete().eq('id', w.id);
        if (error) fail(error);
        else load();
    }
    async function resetAll() {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmDialog"])('Hapus SEMUA pengaturan dan kembali ke tampilan bawaan?')) return;
        for (const w of saved)await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('dashboard_widgets').delete().eq('id', w.id);
        setMsg({
            type: 'success',
            text: 'Kembali ke tampilan bawaan.'
        });
        load();
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card flex justify-center py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "animate-spin text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
            lineNumber: 167,
            columnNumber: 71
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
        lineNumber: 167,
        columnNumber: 23
    }, this);
    if (!enabled) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card p-6 text-sm text-amber-700 dark:text-amber-300",
            children: [
                "Kelola Dashboard belum aktif. Jalankan ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: "database/migrasi_05_pengaturan_dashboard.sql"
                }, void 0, false, {
                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                    lineNumber: 169,
                    columnNumber: 120
                }, this),
                " di phpMyAdmin, restart backend, lalu muat ulang halaman."
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
            lineNumber: 169,
            columnNumber: 12
        }, this);
    }
    const setW = (patch)=>setEdit((e)=>({
                ...e,
                ...patch
            }));
    const setK = (patch)=>setEdit((e)=>({
                ...e,
                konfigurasi: {
                    ...e.konfigurasi,
                    ...patch
                }
            }));
    const src = (w)=>(w.tipe === 'kartu' ? w.konfigurasi?.items || [] : (w.konfigurasi?.series || []).flatMap((s)=>s.items || [])).map((i)=>`${jenisData.find((j)=>j.key === i.jd)?.judul || i.jd} · ${i.field === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIELD_PELATIHAN"] ? LABEL_PELATIHAN : i.field}${i.where ? ` (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$saringBaris$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teksSaringan"])(i.where)})` : ''}`).join(' + ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Kelola Dashboard",
                description: "Atur kartu dan grafik di Dashboard. Sumber angka dipilih dari jenis data dan kolom."
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-lg px-4 py-3 text-sm ${msg.type === 'error' ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-300' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300'}`,
                children: msg.text
            }, void 0, false, {
                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                lineNumber: 181,
                columnNumber: 15
            }, this),
            usingDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-4 flex items-center justify-between gap-3 flex-wrap text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Saat ini Dashboard memakai ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "tampilan bawaan"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 185,
                                columnNumber: 44
                            }, this),
                            " (belum disimpan). Salin dulu agar bisa diubah."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary text-sm",
                        onClick: copyDefaults,
                        disabled: busy,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 186,
                                columnNumber: 90
                            }, this),
                            " Salin tampilan bawaan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: `Daftar Kartu & Grafik (${list.length})`,
                action: !usingDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-secondary text-xs",
                            onClick: ()=>setEdit(blankKartu(list[0]?.grup || 'Ringkasan')),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 194,
                                    columnNumber: 121
                                }, this),
                                " Kartu"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-secondary text-xs",
                            onClick: ()=>setEdit(blankGrafik()),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 195,
                                    columnNumber: 94
                                }, this),
                                " Grafik"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-secondary text-xs text-rose-600",
                            onClick: resetAll,
                            children: "Kembali ke bawaan"
                        }, void 0, false, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-left text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-2",
                                                children: "Judul"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-2",
                                                children: "Bagian"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 204,
                                                columnNumber: 53
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-2",
                                                children: "Tipe"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 204,
                                                columnNumber: 90
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-2",
                                                children: "Sumber angka"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 204,
                                                columnNumber: 125
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 204,
                                                columnNumber: 168
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-100 dark:divide-gray-800",
                                    children: list.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: w.aktif === false ? 'opacity-50' : '',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-2 font-medium",
                                                    children: w.judul
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-2 text-xs",
                                                    children: w.grup
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-2 text-xs",
                                                    children: [
                                                        w.tipe === 'grafik' ? w.konfigurasi?.tampilan === 'total' ? 'Grafik total' : 'Grafik batang' : w.gaya === 'putih' ? 'Kartu putih' : 'Kartu berwarna',
                                                        " · ",
                                                        w.satuan === 'rupiah' ? 'Rp' : 'angka'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-2 text-[11px] text-gray-500 max-w-[320px] truncate",
                                                    title: src(w),
                                                    children: src(w)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-2 whitespace-nowrap text-right",
                                                    children: !usingDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30",
                                                                disabled: i === 0,
                                                                onClick: ()=>move(w, -1),
                                                                title: "Naik",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                    lineNumber: 217,
                                                                    columnNumber: 163
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                lineNumber: 217,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30",
                                                                disabled: i === list.length - 1,
                                                                onClick: ()=>move(w, 1),
                                                                title: "Turun",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 177
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                lineNumber: 218,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "p-1 text-gray-400 hover:text-gray-700",
                                                                onClick: ()=>toggle(w),
                                                                title: w.aktif === false ? 'Tampilkan' : 'Sembunyikan',
                                                                children: w.aktif === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 186
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 209
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                lineNumber: 219,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "p-1 text-gray-400 hover:text-amber-600",
                                                                onClick: ()=>setEdit(JSON.parse(JSON.stringify(w))),
                                                                title: "Ubah",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 152
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                lineNumber: 220,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "p-1 text-gray-400 hover:text-rose-600",
                                                                onClick: ()=>remove(w),
                                                                title: "Hapus",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 123
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                lineNumber: 221,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                        lineNumber: 216,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, w.id, true, {
                                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-gray-400 mt-3",
                        children: "Nilai kartu/grafik = jumlah isian minggu yang dipilih di Dashboard. Untuk kolom kumulatif (pagu, realisasi) dipakai nilai terakhir tiap UPT pada minggu itu."
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            edit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: edit.id ? `Ubah ${edit.tipe === 'grafik' ? 'Grafik' : 'Kartu'}` : `${edit.tipe === 'grafik' ? 'Grafik' : 'Kartu'} Baru`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setEdit(null),
                    className: "p-1 text-gray-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                        lineNumber: 234,
                        columnNumber: 223
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                    lineNumber: 234,
                    columnNumber: 155
                }, this),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium",
                                children: [
                                    "Judul",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "form-input w-full mt-1",
                                        value: edit.judul,
                                        onChange: (e)=>setW({
                                                judul: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium",
                                children: [
                                    "Bagian (kartu/grafik dengan nama sama dikelompokkan)",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "form-input w-full mt-1",
                                        value: edit.grup,
                                        onChange: (e)=>setW({
                                                grup: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium",
                                children: [
                                    "Satuan",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select w-full mt-1",
                                        value: edit.satuan,
                                        onChange: (e)=>setW({
                                                satuan: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "angka",
                                                children: "Angka"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "rupiah",
                                                children: "Rupiah"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 244,
                                                columnNumber: 53
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this),
                            edit.tipe === 'grafik' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium",
                                children: [
                                    "Bentuk grafik",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select w-full mt-1",
                                        value: edit.konfigurasi.tampilan === 'total' ? 'total' : 'upt',
                                        onChange: (e)=>setK({
                                                tampilan: e.target.value === 'total' ? 'total' : undefined
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "upt",
                                                children: "Per UPT/Balai (batang mendatar)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "total",
                                                children: "Total semua UPT (batang tegak, satu batang per seri)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 250,
                                                columnNumber: 79
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this),
                            edit.tipe === 'kartu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium",
                                children: [
                                    "Gaya kartu",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select w-full mt-1",
                                        value: edit.gaya,
                                        onChange: (e)=>setW({
                                                gaya: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "berwarna",
                                                children: "Berwarna (dengan ikon)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "putih",
                                                children: "Putih (dengan pembanding)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 257,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this),
                            edit.tipe === 'kartu' && edit.gaya === 'berwarna' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-medium",
                                        children: [
                                            "Ikon",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "form-select w-full mt-1",
                                                value: edit.ikon || '',
                                                onChange: (e)=>setW({
                                                        ikon: e.target.value
                                                    }),
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICON_NAMES"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: n,
                                                        children: n
                                                    }, n, false, {
                                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                        lineNumber: 265,
                                                        columnNumber: 42
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-medium",
                                        children: [
                                            "Warna",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "form-select w-full mt-1",
                                                value: edit.warna || '',
                                                onChange: (e)=>setW({
                                                        warna: e.target.value
                                                    }),
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].map(([v, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: v,
                                                        children: l
                                                    }, v, false, {
                                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                        lineNumber: 270,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-4",
                        children: edit.tipe === 'kartu' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemsEditor, {
                                    label: "Sumber angka (dijumlahkan)",
                                    items: edit.konfigurasi.items,
                                    onChange: (items)=>setK({
                                            items
                                        }),
                                    jenisData: jenisData,
                                    fieldsOf: fieldsOf,
                                    pilihanOf: pilihanOf
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, this),
                                edit.gaya === 'putih' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemsEditor, {
                                            label: "Pembanding (opsional, mis. Pagu)",
                                            items: edit.konfigurasi.pembanding || [],
                                            onChange: (pembanding)=>setK({
                                                    pembanding
                                                }),
                                            jenisData: jenisData,
                                            fieldsOf: fieldsOf,
                                            pilihanOf: pilihanOf
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                            lineNumber: 283,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium block",
                                            children: [
                                                "Nama pembanding",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "form-input w-full mt-1 md:w-64",
                                                    value: edit.konfigurasi.pembandingLabel || '',
                                                    placeholder: "Pagu",
                                                    onChange: (e)=>setK({
                                                            pembandingLabel: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                            lineNumber: 284,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium block",
                                            children: [
                                                "Target peserta (opsional)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "form-select w-full mt-1 md:w-64",
                                                    value: edit.konfigurasi.target || '',
                                                    onChange: (e)=>setK({
                                                            target: e.target.value || undefined
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "— Tanpa target —"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                            lineNumber: 289,
                                                            columnNumber: 25
                                                        }, this),
                                                        jenisData.filter((j)=>j.level_utama === 'minggu').map((j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: j.key,
                                                                children: j.judul
                                                            }, j.key, false, {
                                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                                lineNumber: 290,
                                                                columnNumber: 85
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 288,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[11px] text-gray-400 mt-1",
                                                    children: "Kartu menampilkan target yang diisi balai di jenis data ini beserta persentase capaiannya."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                            lineNumber: 287,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: !!edit.konfigurasi.sorot,
                                                    onChange: (e)=>setK({
                                                            sorot: e.target.checked
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                    lineNumber: 294,
                                                    columnNumber: 72
                                                }, this),
                                                " Sorot (angka hijau tebal)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                            lineNumber: 294,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 282,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 279,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                edit.konfigurasi.series.map((sr, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "form-input text-xs flex-1",
                                                        placeholder: "Nama seri (mis. Masyarakat)",
                                                        value: sr.label,
                                                        onChange: (e)=>setK({
                                                                series: edit.konfigurasi.series.map((x, j)=>j === i ? {
                                                                        ...x,
                                                                        label: e.target.value
                                                                    } : x)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "form-input text-xs w-36",
                                                        placeholder: "Tumpuk (opsional)",
                                                        value: sr.tumpuk || '',
                                                        onChange: (e)=>setK({
                                                                series: edit.konfigurasi.series.map((x, j)=>j === i ? {
                                                                        ...x,
                                                                        tumpuk: e.target.value
                                                                    } : x)
                                                            }),
                                                        title: "Seri dengan isian Tumpuk yang sama digambar bertumpuk dalam satu batang, mis. Masyarakat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                        lineNumber: 304,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "color",
                                                        value: sr.warna || '#1B5FA8',
                                                        onChange: (e)=>setK({
                                                                series: edit.konfigurasi.series.map((x, j)=>j === i ? {
                                                                        ...x,
                                                                        warna: e.target.value
                                                                    } : x)
                                                            }),
                                                        className: "h-8 w-10 rounded",
                                                        title: "Warna batang"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "p-1 text-gray-400 hover:text-rose-600",
                                                        onClick: ()=>setK({
                                                                series: edit.konfigurasi.series.filter((_, j)=>j !== i)
                                                            }),
                                                        title: "Hapus seri",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                            lineNumber: 306,
                                                            columnNumber: 198
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 302,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemsEditor, {
                                                items: sr.items,
                                                onChange: (items)=>setK({
                                                        series: edit.konfigurasi.series.map((x, j)=>j === i ? {
                                                                ...x,
                                                                items
                                                            } : x)
                                                    }),
                                                jenisData: jenisData,
                                                fieldsOf: fieldsOf,
                                                pilihanOf: pilihanOf
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                                lineNumber: 308,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 301,
                                        columnNumber: 19
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "text-xs text-sky-600 hover:underline",
                                    onClick: ()=>setK({
                                            series: [
                                                ...edit.konfigurasi.series,
                                                {
                                                    label: '',
                                                    warna: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHART_COLORS"][edit.konfigurasi.series.length % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dashboardWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHART_COLORS"].length],
                                                    items: [
                                                        {
                                                            jd: '',
                                                            field: ''
                                                        }
                                                    ]
                                                }
                                            ]
                                        }),
                                    children: "+ tambah seri"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                    lineNumber: 311,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                            lineNumber: 299,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary text-sm",
                                onClick: save,
                                disabled: busy,
                                children: [
                                    busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 14,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                        lineNumber: 316,
                                        columnNumber: 93
                                    }, this),
                                    " Simpan"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary text-sm",
                                onClick: ()=>setEdit(null),
                                children: "Batal"
                            }, void 0, false, {
                                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
                lineNumber: 234,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/admin/KelolaDashboard.jsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0zypf_4._.js.map