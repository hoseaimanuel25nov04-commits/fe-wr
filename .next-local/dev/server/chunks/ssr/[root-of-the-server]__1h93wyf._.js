module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/AuthContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Pulihkan sesi dari token tersimpan
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToken"])()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])('/auth/me', {
                method: 'GET'
            }).then(({ data, error })=>{
                if (data && !error) {
                    setSession({
                        user: data.user
                    });
                    setProfile(data.profile);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearToken"])();
                }
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
        // Token kedaluwarsa / akun dihapus -> kembali ke halaman login
        const onUnauthorized = ()=>{
            setSession(null);
            setProfile(null);
        };
        window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNAUTHORIZED_EVENT"], onUnauthorized);
        return ()=>window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNAUTHORIZED_EVENT"], onUnauthorized);
    }, []);
    async function signIn(email, password) {
        const { data, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])('/auth/login', {
            body: {
                email,
                password
            }
        });
        if (error || !data) return {
            data: null,
            error: error || {
                message: 'Gagal login'
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setToken"])(data.token);
        setSession({
            user: data.user
        });
        setProfile(data.profile);
        return {
            data: {
                user: data.user,
                session: {
                    user: data.user
                }
            },
            error: null
        };
    }
    async function signOut() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearToken"])();
        setProfile(null);
        setSession(null);
    }
    const isAdmin = profile?.role === 'admin';
    const isUPT = profile?.role === 'upt';
    const uptKey = profile?.upt_key;
    const uptLabel = profile?.upt_label || profile?.upt_key // nama UPT untuk ditampilkan (bukan kode)
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            session,
            profile,
            loading,
            isAdmin,
            isUPT,
            uptKey,
            uptLabel,
            signIn,
            signOut
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/AuthContext.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
}),
"[project]/src/components/DialogHost.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DialogHost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/DialogHost.jsx
 * Merender dialog konfirmasi/isian & notifikasi dari lib/dialog.js. Dipasang sekali di Providers.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dialog.js [app-ssr] (ecmascript)");
;
;
;
const ALERT_TONE = {
    success: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        'bg-emerald-50 text-emerald-600'
    ],
    info: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
        'bg-blue-50 text-blue-600'
    ]
};
;
let nextId = 1;
const TOAST_STYLE = {
    success: [
        'bg-white border-emerald-200 text-emerald-800',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        'text-emerald-600'
    ],
    error: [
        'bg-white border-rose-200 text-rose-800',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
        'text-rose-600'
    ],
    info: [
        'bg-white border-blue-200 text-[#0B1830]',
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
        'text-blue-600'
    ]
};
function DialogHost() {
    const [queue, setQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]) // dialog yang menunggu; yang pertama sedang tampil
    ;
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerDialogHost"])({
            open: (spec)=>new Promise((resolve)=>setQueue((q)=>[
                            ...q,
                            {
                                ...spec,
                                id: nextId++,
                                resolve
                            }
                        ])),
            notify: (message, type)=>{
                const id = nextId++;
                setToasts((t)=>[
                        ...t,
                        {
                            id,
                            message,
                            type
                        }
                    ]);
                setTimeout(()=>setToasts((t)=>t.filter((x)=>x.id !== id)), type === 'error' ? 7000 : 4500);
            }
        }), []);
    const current = queue[0];
    const close = (value)=>{
        current.resolve(value);
        setQueue((q)=>q.slice(1));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            current && (current.kind === 'alert' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertBox, {
                spec: current,
                onClose: close
            }, current.id, false, {
                fileName: "[project]/src/components/DialogHost.jsx",
                lineNumber: 44,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogBox, {
                spec: current,
                onClose: close
            }, current.id, false, {
                fileName: "[project]/src/components/DialogHost.jsx",
                lineNumber: 45,
                columnNumber: 11
            }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-5 right-5 z-[80] flex flex-col gap-2 w-[min(24rem,calc(100vw-2.5rem))]",
                "aria-live": "polite",
                children: toasts.map((t)=>{
                    const [cls, Icon, iconCls] = TOAST_STYLE[t.type] || TOAST_STYLE.info;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-start gap-3 rounded-xl border shadow-lg px-4 py-3 text-sm animate-scale-in ${cls}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 18,
                                className: `flex-shrink-0 mt-0.5 ${iconCls}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/DialogHost.jsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex-1 whitespace-pre-line leading-snug",
                                children: t.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/DialogHost.jsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setToasts((x)=>x.filter((y)=>y.id !== t.id)),
                                className: "text-gray-400 hover:text-gray-600 flex-shrink-0",
                                "aria-label": "Tutup notifikasi",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DialogHost.jsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DialogHost.jsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/src/components/DialogHost.jsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DialogHost.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DialogHost.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
/** Pemberitahuan besar di tengah layar (alertDialog): ikon besar, judul, isi, satu tombol. */ function AlertBox({ spec, onClose }) {
    const okBtn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [title, ...rest] = spec.message.split('\n\n');
    const body = rest.join('\n\n');
    const [Icon, iconCls] = ALERT_TONE[spec.tone] || ALERT_TONE.success;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        okBtn.current?.focus();
        const onKey = (e)=>{
            if (e.key === 'Escape') {
                e.stopImmediatePropagation();
                onClose(true);
            }
        };
        window.addEventListener('keydown', onKey, true);
        return ()=>window.removeEventListener('keydown', onKey, true);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[70] flex items-center justify-center p-4 bg-[#0B1830]/60 animate-fade-in",
        onMouseDown: (e)=>{
            if (e.target === e.currentTarget) onClose(true);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "alertdialog",
            "aria-modal": "true",
            "aria-labelledby": "alert-title",
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-scale-in overflow-hidden text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 pt-8 pb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mx-auto w-16 h-16 rounded-full flex items-center justify-center ${iconCls}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 34
                            }, void 0, false, {
                                fileName: "[project]/src/components/DialogHost.jsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DialogHost.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "alert-title",
                            className: "mt-5 text-xl font-semibold text-[#0B1830] leading-snug",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/DialogHost.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] text-gray-600 mt-3 whitespace-pre-line leading-relaxed",
                            children: body
                        }, void 0, false, {
                            fileName: "[project]/src/components/DialogHost.jsx",
                            lineNumber: 93,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DialogHost.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 py-4 bg-[#F5F7FA] border-t border-[#E3E8EF]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        ref: okBtn,
                        onClick: ()=>onClose(true),
                        className: "btn-primary w-full justify-center",
                        children: spec.confirmLabel || 'Mengerti'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DialogHost.jsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/DialogHost.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DialogHost.jsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DialogHost.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function DialogBox({ spec, onClose }) {
    const isPrompt = spec.kind === 'prompt';
    const fields = spec.fields || (isPrompt ? [
        {
            name: 'value',
            placeholder: spec.placeholder
        }
    ] : []);
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Object.fromEntries(fields.map((f)=>[
                f.name,
                f.name === 'value' ? spec.defaultValue ?? '' : ''
            ])));
    const firstInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const confirmBtn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cancelBtn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [title, ...rest] = spec.message.split('\n\n');
    const body = rest.join('\n\n');
    const cancel = ()=>onClose(isPrompt ? null : false);
    const submit = ()=>onClose(isPrompt ? spec.fields ? values : values.value : true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Fokus awal: kolom isian; untuk aksi berbahaya, tombol Batal (supaya Enter tidak langsung menghapus).
        const el = isPrompt ? firstInput.current : spec.danger ? cancelBtn.current : confirmBtn.current;
        el?.focus();
        // Capture + stopImmediatePropagation: Escape menutup dialog ini saja, bukan Modal di belakangnya.
        const onKey = (e)=>{
            if (e.key === 'Escape') {
                e.stopImmediatePropagation();
                cancel();
            }
        };
        window.addEventListener('keydown', onKey, true);
        return ()=>window.removeEventListener('keydown', onKey, true);
    }, []);
    const Icon = spec.danger ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"];
    const iconCls = spec.danger ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-600';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[70] flex items-center justify-center p-4 bg-[#0B1830]/50 animate-fade-in",
        onMouseDown: (e)=>{
            if (e.target === e.currentTarget) cancel();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            role: "alertdialog",
            "aria-modal": "true",
            "aria-labelledby": "dialog-title",
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-md animate-scale-in overflow-hidden",
            onSubmit: (e)=>{
                e.preventDefault();
                submit();
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${iconCls}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/DialogHost.jsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DialogHost.jsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "dialog-title",
                                    className: "font-semibold text-[#0B1830] leading-snug",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DialogHost.jsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed",
                                    children: body
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DialogHost.jsx",
                                    lineNumber: 151,
                                    columnNumber: 22
                                }, this),
                                fields.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-3",
                                    children: fields.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                f.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    htmlFor: `dlg-${f.name}`,
                                                    children: f.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DialogHost.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: `dlg-${f.name}`,
                                                    ref: i === 0 ? firstInput : undefined,
                                                    className: "form-input",
                                                    placeholder: f.placeholder,
                                                    value: values[f.name],
                                                    onChange: (e)=>setValues((v)=>({
                                                                ...v,
                                                                [f.name]: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DialogHost.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, f.name, true, {
                                            fileName: "[project]/src/components/DialogHost.jsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DialogHost.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DialogHost.jsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DialogHost.jsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 bg-[#F5F7FA] border-t border-[#E3E8EF] flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            ref: cancelBtn,
                            onClick: cancel,
                            className: "btn-secondary",
                            children: spec.cancelLabel || 'Batal'
                        }, void 0, false, {
                            fileName: "[project]/src/components/DialogHost.jsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            ref: confirmBtn,
                            className: spec.danger ? 'btn-danger' : 'btn-primary',
                            children: spec.confirmLabel || (spec.danger ? 'Ya, hapus' : isPrompt ? 'Kirim' : 'Ya, lanjutkan')
                        }, void 0, false, {
                            fileName: "[project]/src/components/DialogHost.jsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DialogHost.jsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DialogHost.jsx",
            lineNumber: 138,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DialogHost.jsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/LogoKKP.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoKKP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * components/LogoKKP.jsx
 * Logo resmi Kementerian Kelautan dan Perikanan (fe/public/logo-kkp.jpg). Berkasnya berlatar putih, jadi selalu
 * ditaruh di lingkaran putih agar tetap rapi di atas latar navy (sidebar, panel login). Jangan diubah warna,
 * bentuk, atau proporsinya.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function LogoKKP({ size = 40, className = '', priority = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center justify-center flex-shrink-0 rounded-full bg-white overflow-hidden ring-1 ring-black/5 ${className}`,
        style: {
            width: size,
            height: size,
            padding: Math.max(2, Math.round(size * 0.06))
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/logo-kkp.jpg",
            alt: "Logo Kementerian Kelautan dan Perikanan",
            width: size,
            height: size,
            priority: priority,
            unoptimized: true,
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/components/LogoKKP.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LogoKKP.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Providers.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Splash$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Splash.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DialogHost$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DialogHost.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Providers({ children }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Splash$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/Providers.jsx",
        lineNumber: 14,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DialogHost$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Providers.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Providers.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Splash.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Splash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoKKP$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogoKKP.jsx [app-ssr] (ecmascript)");
;
;
function Splash() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-kkp-ocean flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoKKP$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: 64,
                priority: true,
                className: "mb-4 shadow-sm animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/Splash.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-[#0B1830]",
                children: "PUSLATKP Management Hub"
            }, void 0, false, {
                fileName: "[project]/src/components/Splash.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500 mt-1",
                children: "Memuat..."
            }, void 0, false, {
                fileName: "[project]/src/components/Splash.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Splash.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/db.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lib/db.js
 * Klien API ke backend Express. Menyediakan query builder bergaya
 *   db.from('tabel').select('*').eq('kolom', nilai).order('kolom').limit(n).single()
 * yang dikirim sebagai satu permintaan JSON ke POST /api/db/query.
 * Hak akses & validasi sepenuhnya ditegakkan di backend (be/src/modules/query/query.engine.ts).
 */ /**
 * Alamat API. Bila NEXT_PUBLIC_API_URL tidak diisi, dipakai host halaman ini + port 4000
 * (jadi tetap jalan saat web dibuka dari komputer lain lewat IP, mis. http://192.168.1.10:3000).
 */ __turbopack_context__.s([
    "JENIS_DATA_EVENT",
    ()=>JENIS_DATA_EVENT,
    "KATEGORI_DOKUMEN_EVENT",
    ()=>KATEGORI_DOKUMEN_EVENT,
    "UNAUTHORIZED_EVENT",
    ()=>UNAUTHORIZED_EVENT,
    "api",
    ()=>api,
    "apiBase",
    ()=>apiBase,
    "arsip",
    ()=>arsip,
    "clearToken",
    ()=>clearToken,
    "db",
    ()=>db,
    "fieldFiles",
    ()=>fieldFiles,
    "getFeatures",
    ()=>getFeatures,
    "getToken",
    ()=>getToken,
    "kategoriDokumen",
    ()=>kategoriDokumen,
    "laporanNihil",
    ()=>laporanNihil,
    "panduan",
    ()=>panduan,
    "saran",
    ()=>saran,
    "setToken",
    ()=>setToken
]);
function apiBase() {
    const env = ("TURBOPACK compile-time value", "http://localhost:4322/api");
    if ("TURBOPACK compile-time truthy", 1) return env.replace(/\/$/, '');
    //TURBOPACK unreachable
    ;
}
const TOKEN_KEY = 'puslatkp_token';
const UNAUTHORIZED_EVENT = 'puslatkp:unauthorized';
const getToken = ()=>{
    try {
        return localStorage.getItem(TOKEN_KEY);
    } catch  {
        return null;
    }
};
const setToken = (t)=>{
    try {
        localStorage.setItem(TOKEN_KEY, t);
    } catch  {}
};
const clearToken = ()=>{
    try {
        localStorage.removeItem(TOKEN_KEY);
    } catch  {}
};
async function api(path, { method = 'POST', body } = {}) {
    const token = getToken();
    try {
        const res = await fetch(`${apiBase()}${path}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            },
            body: body === undefined ? undefined : JSON.stringify(body)
        });
        const json = await res.json().catch(()=>({}));
        if (!res.ok) {
            if (res.status === 401 && token && path !== '/auth/login') {
                clearToken();
                window.dispatchEvent(new Event(UNAUTHORIZED_EVENT));
            }
            return {
                data: null,
                error: {
                    message: json?.error?.message || `Permintaan gagal (${res.status})`,
                    status: res.status
                }
            };
        }
        return {
            data: json,
            error: null
        };
    } catch  {
        return {
            data: null,
            error: {
                message: 'Tidak dapat terhubung ke server. Pastikan layanan backend (be) berjalan.'
            }
        };
    }
}
class QueryBuilder {
    constructor(table){
        this.spec = {
            table,
            op: null,
            filters: [],
            order: []
        };
    }
    select(columns = '*', options = {}) {
        if (!this.spec.op) this.spec.op = 'select';
        this.spec.columns = columns;
        if (options.head) this.spec.head = true;
        return this;
    }
    insert(values) {
        this.spec.op = 'insert';
        this.spec.values = values;
        return this;
    }
    update(values) {
        this.spec.op = 'update';
        this.spec.values = values;
        return this;
    }
    upsert(values, options = {}) {
        this.spec.op = 'upsert';
        this.spec.values = values;
        this.spec.onConflict = options.onConflict;
        return this;
    }
    delete() {
        this.spec.op = 'delete';
        return this;
    }
    eq(col, val) {
        this.spec.filters.push({
            col,
            op: 'eq',
            val
        });
        return this;
    }
    in(col, val) {
        this.spec.filters.push({
            col,
            op: 'in',
            val
        });
        return this;
    }
    order(column, { ascending = true } = {}) {
        this.spec.order.push({
            column,
            ascending
        });
        return this;
    }
    limit(n) {
        this.spec.limit = n;
        return this;
    }
    single() {
        this.spec.single = true;
        return this;
    }
    /** Tandai delete() ini sebagai bagian dari mengedit form (bukan aksi "Hapus" yang disengaja) — dieksekusi
   *  langsung seperti biasa, tidak dialihkan jadi permintaan hapus akun UPT. Lihat be/src/modules/query/query.engine.ts. */ liveEdit() {
        this.spec.liveEdit = true;
        return this;
    }
    /** Alasan opsional (akun UPT) saat delete() ini berubah menjadi permintaan hapus. */ alasan(text) {
        this.spec.alasan = text;
        return this;
    }
    // Membuat builder bisa di-`await`
    then(resolve, reject) {
        return api('/db/query', {
            body: this.spec
        }).then(({ data, error })=>error ? {
                data: null,
                error,
                count: null
            } : {
                data: data.data ?? null,
                error: data.error ?? null,
                count: data.count ?? null,
                pending: data.pending,
                requestId: data.requestId
            }).then(resolve, reject);
    }
}
const saran = {
    kirim: (body)=>api('/saran', {
            body
        }),
    milikSaya: ()=>api('/saran/saya', {
            method: 'GET'
        }),
    daftar: (status)=>api('/saran' + (status ? '?status=' + encodeURIComponent(status) : ''), {
            method: 'GET'
        }),
    jumlahBaru: ()=>api('/saran/jumlah-baru', {
            method: 'GET'
        }),
    ubah: (id, body)=>api('/saran/' + id, {
            method: 'PATCH',
            body
        }),
    hapus: (id)=>api('/saran/' + id, {
            method: 'DELETE'
        })
};
const kategoriDokumen = {
    daftar: ()=>api('/kategori-dokumen', {
            method: 'GET'
        }),
    buat: (body)=>api('/kategori-dokumen', {
            body
        }),
    ubah: (kode, body)=>api('/kategori-dokumen/' + encodeURIComponent(kode), {
            method: 'PATCH',
            body
        }),
    hapus: (kode)=>api('/kategori-dokumen/' + encodeURIComponent(kode), {
            method: 'DELETE'
        })
};
const KATEGORI_DOKUMEN_EVENT = 'kategori-dokumen-berubah';
const JENIS_DATA_EVENT = 'jenis-data-berubah';
const panduan = ()=>api('/panduan', {
        method: 'GET'
    });
const arsip = {
    list: (params)=>api('/arsip?' + new URLSearchParams(Object.fromEntries(Object.entries(params || {}).filter(([, v])=>v))), {
            method: 'GET'
        }),
    remove: (id)=>api('/arsip/' + id, {
            method: 'DELETE'
        }),
    /** Unggah isi berkas mentah; metadata lewat query string. */ async upload (file, meta) {
        const token = getToken();
        const qs = new URLSearchParams({
            ...Object.fromEntries(Object.entries(meta).filter(([, v])=>v)),
            nama: file.name
        });
        try {
            const res = await fetch(`${apiBase()}/arsip?${qs}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    ...token ? {
                        Authorization: `Bearer ${token}`
                    } : {}
                },
                body: file
            });
            const json = await res.json().catch(()=>({}));
            if (!res.ok) return {
                data: null,
                error: {
                    message: json?.error?.message || `Unggah gagal (${res.status})`
                }
            };
            return {
                data: json.data,
                error: null
            };
        } catch  {
            return {
                data: null,
                error: {
                    message: 'Tidak dapat terhubung ke server.'
                }
            };
        }
    },
    /** Ambil isi berkas sebagai ArrayBuffer (butuh token, jadi tidak bisa lewat <a href>). */ async fetchFile (id) {
        const token = getToken();
        const res = await fetch(`${apiBase()}/arsip/${id}/file`, {
            headers: token ? {
                Authorization: `Bearer ${token}`
            } : {}
        });
        if (!res.ok) {
            const json = await res.json().catch(()=>({}));
            throw new Error(json?.error?.message || `Gagal mengambil berkas (${res.status})`);
        }
        return res.arrayBuffer();
    }
};
const fieldFiles = {
    remove: (id)=>api('/field-files/' + id, {
            method: 'DELETE'
        }),
    /** Unggah isi berkas mentah; metadata (jenis_data_id, field_key, upt_key) lewat query string. Balikan: {id, file_name, file_ext, file_size}. */ async upload (file, meta) {
        const token = getToken();
        const qs = new URLSearchParams({
            ...Object.fromEntries(Object.entries(meta).filter(([, v])=>v)),
            nama: file.name
        });
        try {
            const res = await fetch(`${apiBase()}/field-files?${qs}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    ...token ? {
                        Authorization: `Bearer ${token}`
                    } : {}
                },
                body: file
            });
            const json = await res.json().catch(()=>({}));
            if (!res.ok) return {
                data: null,
                error: {
                    message: json?.error?.message || `Unggah gagal (${res.status})`
                }
            };
            return {
                data: json.data,
                error: null
            };
        } catch  {
            return {
                data: null,
                error: {
                    message: 'Tidak dapat terhubung ke server.'
                }
            };
        }
    },
    /** Unduh langsung ke perangkat (nama berkas asli diambil dari header server). */ async download (id) {
        const token = getToken();
        const res = await fetch(`${apiBase()}/field-files/${id}/file`, {
            headers: token ? {
                Authorization: `Bearer ${token}`
            } : {}
        });
        if (!res.ok) {
            const json = await res.json().catch(()=>({}));
            throw new Error(json?.error?.message || `Gagal mengambil berkas (${res.status})`);
        }
        const cd = res.headers.get('Content-Disposition') || '';
        const match = /filename\*=UTF-8''([^;]+)/.exec(cd);
        const filename = match ? decodeURIComponent(match[1]) : `berkas-${id}`;
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        setTimeout(()=>URL.revokeObjectURL(url), 2000);
    }
};
let featuresPromise = null;
function getFeatures() {
    if (!featuresPromise) {
        featuresPromise = api('/health', {
            method: 'GET'
        }).then(({ data })=>{
            if (!data) featuresPromise = null;
            return data?.features || {
                multiBaris: false,
                agregasi: false,
                terlambat: false,
                arsip: false,
                dokumenKinerja: false,
                kategoriDokumen: false,
                kotakSaran: false,
                dashboard: false,
                fieldFiles: false,
                kumulatifBulanan: false,
                dokumenResmi: false,
                opsiBersyarat: false,
                permintaanHapus: false,
                persetujuanBaris: false,
                tolakBaris: false,
                permintaanEdit: false,
                peranRekap: false
            };
        });
    }
    return featuresPromise;
}
const laporanNihil = {
    /** Ambil daftar nihil untuk UPT + periode ini (Admin bisa kirim upt_key). */ list: (uptKey, periodId)=>api(`/laporan-nihil?upt_key=${encodeURIComponent(uptKey)}&period_id=${encodeURIComponent(periodId)}`, {
            method: 'GET'
        }),
    /** Simpan laporan nihil (membuat atau memperbarui). */ simpan: (body)=>api('/laporan-nihil', {
            body
        }),
    /** Batalkan laporan nihil. */ hapus: (body)=>api('/laporan-nihil', {
            method: 'DELETE',
            body
        })
};
const db = {
    from: (table)=>new QueryBuilder(table),
    functions: {
        /** Pengganti Edge Function Supabase. Saat ini hanya: 'create-upt-user' (Admin). */ async invoke (name, { body } = {}) {
            const routes = {
                'create-upt-user': '/auth/users'
            };
            if (!routes[name]) return {
                data: null,
                error: {
                    message: `Fungsi ${name} tidak dikenal`
                }
            };
            return api(routes[name], {
                body
            });
        }
    },
    auth: {
        /** Admin: atur ulang password akun. Password lama tidak bisa dibaca kembali (hash satu arah). */ resetPassword: (userId, password)=>api(`/auth/users/${userId}/password`, {
                method: 'PATCH',
                body: {
                    password
                }
            }),
        /** Admin: ganti email akun (mis. ke email asli pemiliknya). */ gantiEmail: (userId, email)=>api(`/auth/users/${userId}/email`, {
                method: 'PATCH',
                body: {
                    email
                }
            }),
        /** Admin: akun yang mendaftar sendiri dan menunggu persetujuan. */ pendaftaran: ()=>api('/auth/pendaftaran', {
                method: 'GET'
            }),
        setujuiPendaftaran: (id)=>api(`/auth/pendaftaran/${id}/setujui`, {
                body: {}
            }),
        tolakPendaftaran: (id, alasan)=>api(`/auth/pendaftaran/${id}/tolak`, {
                body: {
                    alasan
                }
            })
    },
    permintaanHapus: {
        /** Admin: setujui (benar-benar menghapus, masuk Tempat Sampah; atau bila aksi='edit', menulis nilai baru)
     *  atau tolak permintaan hapus/edit akun UPT. */ setujui: (id)=>api(`/permintaan-hapus/${id}/setujui`, {
                method: 'POST'
            }),
        tolak: (id, catatan_admin)=>api(`/permintaan-hapus/${id}/tolak`, {
                method: 'POST',
                body: {
                    catatan_admin
                }
            })
    },
    permintaanEdit: {
        /** UPT: ajukan nilai baru untuk satu baris_ke rekap_nilai yang sudah disetujui Admin. */ ajukanRekap: (jenis_data_id, period_id, baris_ke, upserts, clearedFields, alasan)=>api('/permintaan-edit/rekap-nilai', {
                body: {
                    jenis_data_id,
                    period_id,
                    baris_ke,
                    upserts,
                    clearedFields,
                    alasan
                }
            }),
        /** UPT: ajukan nilai baru untuk satu baris data_entries yang sudah disetujui Admin. */ ajukanEntry: (id, values, alasan)=>api('/permintaan-edit/data-entries', {
                body: {
                    id,
                    values,
                    alasan
                }
            })
    },
    /** Impor Excel "Data by Name": server mencocokkan tiap baris dengan data tersimpan (lihat be/src/modules/impor-rincian/impor-rincian.service.ts).
   *  body: { jenis_data_id, period_id, upt_key, rows: [{nama, nik, data_json, data_ekstra}], pratinjau?, ajukanPerubahan? } */ imporRincian: (body)=>api('/impor-rincian', {
            body
        }),
    persetujuanBaris: {
        /** Admin: setujui satu baris rekap_nilai (semua field baris_ke itu sekaligus, status draft -> disetujui). */ setujuiRekap: (jenis_data_id, upt_key, period_id, baris_ke)=>api('/persetujuan-baris/rekap-nilai/setujui', {
                body: {
                    jenis_data_id,
                    upt_key,
                    period_id,
                    baris_ke
                }
            }),
        /** Admin: setujui banyak baris rekap_nilai sekaligus (tombol "Setujui Semua" per grup). */ setujuiRekapMassal: (items)=>api('/persetujuan-baris/rekap-nilai/setujui-massal', {
                body: {
                    items
                }
            }),
        /** Admin: setujui satu baris data_entries (satu orang/nik). */ setujuiEntry: (id)=>api('/persetujuan-baris/data-entries/setujui', {
                body: {
                    id
                }
            }),
        /** Admin: setujui banyak baris data_entries sekaligus (satu permintaan). */ setujuiEntryMassal: (ids)=>api('/persetujuan-baris/data-entries/setujui-massal', {
                body: {
                    ids
                }
            }),
        /** Admin: setujui satu berkas dokumen_upload. */ setujuiDokumen: (id)=>api('/persetujuan-baris/dokumen-upload/setujui', {
                body: {
                    id
                }
            }),
        /** Admin: tolak satu baris rekap_nilai (status draft -> ditolak + catatan; baris tidak dihapus/diubah). */ tolakRekap: (jenis_data_id, upt_key, period_id, baris_ke, catatan_admin)=>api('/persetujuan-baris/rekap-nilai/tolak', {
                body: {
                    jenis_data_id,
                    upt_key,
                    period_id,
                    baris_ke,
                    catatan_admin
                }
            }),
        /** Admin: tolak satu baris data_entries. */ tolakEntry: (id, catatan_admin)=>api('/persetujuan-baris/data-entries/tolak', {
                body: {
                    id,
                    catatan_admin
                }
            }),
        /** Admin: tolak satu berkas dokumen_upload. */ tolakDokumen: (id, catatan_admin)=>api('/persetujuan-baris/dokumen-upload/tolak', {
                body: {
                    id,
                    catatan_admin
                }
            })
    }
};
}),
"[project]/src/lib/dialog.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alertDialog",
    ()=>alertDialog,
    "confirmDialog",
    ()=>confirmDialog,
    "notify",
    ()=>notify,
    "notifyDihapus",
    ()=>notifyDihapus,
    "promptDialog",
    ()=>promptDialog,
    "registerDialogHost",
    ()=>registerDialogHost
]);
/**
 * lib/dialog.js
 * Pengganti alert/confirm/prompt bawaan browser dengan dialog & notifikasi bergaya aplikasi.
 * Tampilannya dirender oleh <DialogHost /> (dipasang sekali di Providers); modul ini hanya meneruskan
 * permintaan ke host itu. Bila host belum terpasang (mis. saat splash), jatuh ke dialog bawaan browser.
 *
 * Pesan boleh memuat paragraf dipisah "\n\n": paragraf pertama jadi judul, sisanya jadi isi.
 */ let host = null;
function registerDialogHost(h) {
    host = h;
    return ()=>{
        if (host === h) host = null;
    };
}
const ERROR_PATTERN = /^(gagal|impor berhenti)|tidak tersedia|tidak dapat|error/i;
function notify(message, type) {
    const t = type || (ERROR_PATTERN.test(message) ? 'error' : 'success');
    if (host) host.notify(String(message), t);
    else window.alert(message);
}
const DANGER_PATTERN = /hapus|kosongkan|buang|permanen/i;
function confirmDialog(message, opts = {}) {
    if (!host) return Promise.resolve(window.confirm(message));
    const [title] = String(message).split('\n\n');
    return host.open({
        kind: 'confirm',
        message: String(message),
        ...opts,
        danger: opts.danger ?? DANGER_PATTERN.test(title)
    });
}
function alertDialog(message, opts = {}) {
    if (!host) {
        window.alert(message);
        return Promise.resolve();
    }
    return host.open({
        kind: 'alert',
        message: String(message),
        ...opts
    }).then(()=>undefined);
}
function notifyDihapus(keterangan, opts = {}) {
    const ket = keterangan ? `${keterangan}\n\n` : '';
    return opts.permanen ? alertDialog(`Data berhasil dihapus permanen\n\n${ket}Data ini tidak bisa dipulihkan lagi.`) : alertDialog(`Data berhasil dihapus\n\n${ket}Data dipindah ke Tempat Sampah dan masih bisa dipulihkan dalam 30 hari lewat menu Tempat Sampah.`);
}
function promptDialog(message, opts = {}) {
    if (!host) {
        if (!opts.fields) return Promise.resolve(window.prompt(message, opts.defaultValue ?? ''));
        const out = {};
        for (const f of opts.fields){
            const v = window.prompt(f.label || message, '');
            if (v === null) return Promise.resolve(null);
            out[f.name] = v;
        }
        return Promise.resolve(out);
    }
    return host.open({
        kind: 'prompt',
        message: String(message),
        ...opts
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1h93wyf._.js.map