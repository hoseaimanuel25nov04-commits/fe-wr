module.exports = [
"[project]/src/app/(portal)/monitoring-updating/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$MonitoringUpdating$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/MonitoringUpdating.jsx [app-ssr] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$MonitoringUpdating$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/(portal)/monitoring-updating/page.jsx",
        lineNumber: 6,
        columnNumber: 10
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
"[project]/src/views/MonitoringUpdating.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonitoringUpdating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-complex.mjs [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-ssr] (ecmascript) <export default as CircleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-ssr] (ecmascript) <export default as CircleX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.mjs [app-ssr] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.mjs [app-ssr] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/excelExport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/periods.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageHeader.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const MONTHS = [
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
const STATUS = {
    selesai: {
        label: 'Selesai',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        color: 'border-emerald-200 bg-emerald-50 text-emerald-700',
        bar: 'bg-emerald-600'
    },
    belum_selesai: {
        label: 'Belum selesai',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"],
        color: 'border-amber-200 bg-amber-50 text-amber-700',
        bar: 'bg-amber-500'
    },
    belum_mengisi: {
        label: 'Belum mengisi',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleX$3e$__["CircleX"],
        color: 'border-rose-200 bg-rose-50 text-rose-700',
        bar: 'bg-rose-600'
    }
};
function MonitoringUpdating() {
    const { isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [cadence, setCadence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('minggu');
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(String(new Date().getFullYear()));
    const [uptFilter, setUptFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [periods, setPeriods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [upts, setUpts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cells, setCells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailLoading, setDetailLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [manage, setManage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [manageBusy, setManageBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [manageUpt, setManageUpt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [manageCadence, setManageCadence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('minggu');
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [requirements, setRequirements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTypes, setSelectedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError('');
        const [periodResult, summaryResult] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].from('periods').select('tahun,level'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`/monitoring?cadence=${cadence}&year=${encodeURIComponent(year)}`, {
                method: 'GET'
            })
        ]);
        if (summaryResult.error) setError(summaryResult.error.message || 'Data monitoring tidak dapat dimuat.');
        const data = summaryResult.data?.data;
        setPeriods(data?.periods || []);
        setUpts(data?.upts || []);
        setCells(data?.cells || []);
        const availableYears = [
            ...new Set((periodResult.data || []).filter((p)=>p.level === cadence).map((p)=>Number(p.tahun)))
        ].sort((a, b)=>b - a);
        setYears(availableYears);
        if (availableYears.length) setYear((current)=>availableYears.includes(Number(current)) ? current : String(availableYears[0]));
        setLoading(false);
    }, [
        cadence,
        year,
        uptFilter,
        isAdmin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, [
        load
    ]);
    const visibleUpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>upts.filter((u)=>uptFilter === 'all' || u.key === uptFilter), [
        upts,
        uptFilter
    ]);
    const cellByKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Map(cells.map((c)=>[
                `${c.upt_key}|${c.period_id}`,
                c
            ])), [
        cells
    ]);
    const visibleCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cells.filter((cell)=>uptFilter === 'all' || cell.upt_key === uptFilter), [
        cells,
        uptFilter
    ]);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>visibleCells.reduce((acc, cell)=>({
                ...acc,
                [cell.status]: acc[cell.status] + 1
            }), {
            selesai: 0,
            belum_selesai: 0,
            belum_mengisi: 0
        }), [
        visibleCells
    ]);
    const count = visibleCells.length;
    const percentage = count ? Math.round(totals.selesai * 100 / count) : 0;
    async function openDetail(upt, period) {
        setDetailLoading(true);
        const labeledPeriod = {
            ...period,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(period)
        };
        setDetail({
            upt,
            period: labeledPeriod,
            data: []
        });
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`/monitoring/detail?period_id=${encodeURIComponent(period.id)}&upt_key=${encodeURIComponent(upt.key)}`, {
            method: 'GET'
        });
        if (result.error) setError(result.error.message || 'Rincian laporan gagal dimuat.');
        setDetail(result.data?.data ? {
            ...result.data.data,
            period: labeledPeriod
        } : null);
        setDetailLoading(false);
    }
    async function openManage() {
        setManage(true);
        setManageBusy(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])('/monitoring/requirements', {
            method: 'GET'
        });
        if (result.error) setError(result.error.message || 'Pengaturan kewajiban tidak dapat dimuat.');
        const data = result.data?.data;
        setUpts(data?.upts || upts);
        setOptions(data?.options || []);
        setRequirements(data?.requirements || []);
        setManageUpt((current)=>current || data?.upts?.[0]?.key || '');
        setManageBusy(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!manageUpt) return;
        setSelectedTypes(requirements.filter((row)=>row.upt_key === manageUpt && row.cadence === manageCadence).map((row)=>row.jenis_data_id));
    }, [
        manageUpt,
        manageCadence,
        requirements
    ]);
    async function saveRequirements() {
        setManageBusy(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])('/monitoring/requirements', {
            method: 'PUT',
            body: {
                upt_key: manageUpt,
                cadence: manageCadence,
                jenis_data_ids: selectedTypes
            }
        });
        if (result.error) setError(result.error.message || 'Pengaturan tidak tersimpan.');
        else {
            setRequirements((rows)=>[
                    ...rows.filter((row)=>row.upt_key !== manageUpt || row.cadence !== manageCadence),
                    ...selectedTypes.map((jenis_data_id)=>({
                            upt_key: manageUpt,
                            cadence: manageCadence,
                            jenis_data_id
                        }))
                ]);
            await load();
        }
        setManageBusy(false);
    }
    function exportExcel() {
        const columns = visiblePeriods.map((period)=>cadence === 'minggu' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(period) : MONTHS[Number(period.bulan) - 1]);
        const rows = visibleUpts.map((upt, index)=>{
            const row = {
                No: index + 1,
                'Nama Satker': (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excelExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeCellValue"])(upt.label)
            };
            visiblePeriods.forEach((period, i)=>{
                row[columns[i]] = STATUS[cellByKey.get(`${upt.key}|${period.id}`)?.status]?.label || 'Belum mengisi';
            });
            return row;
        });
        const sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows);
        sheet['!cols'] = [
            {
                wch: 6
            },
            {
                wch: 34
            },
            ...visiblePeriods.map(()=>({
                    wch: 24
                }))
        ];
        const book = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(book, sheet, cadence === 'minggu' ? 'Mingguan' : 'Bulanan');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](book, `monitoring-updating-${cadence}-${year}.xlsx`);
    }
    function renderCell(upt, period) {
        const cell = cellByKey.get(`${upt.key}|${period.id}`);
        const status = STATUS[cell?.status || 'belum_mengisi'];
        const Icon = status.icon;
        const periodLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(period);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
            className: "border border-slate-200 px-1 py-1.5 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>openDetail(upt, period),
                "aria-label": `${upt.label}, ${periodLabel}: ${status.label}. Lihat rincian data.`,
                title: "Klik untuk melihat data yang sudah dan belum diisi",
                className: `inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border transition-colors hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${status.color}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 18,
                    strokeWidth: 2.5
                }, void 0, false, {
                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        }, period.id, false, {
            fileName: "[project]/src/views/MonitoringUpdating.jsx",
            lineNumber: 126,
            columnNumber: 12
        }, this);
    }
    const visiblePeriods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPeriods"])(periods);
    const weeksByMonth = MONTHS.map((_, monthIndex)=>visiblePeriods.filter((p)=>Number(p.bulan) === monthIndex + 1));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Monitoring Updating Weekly Report Pelatihan KP",
                description: "Pantau kelengkapan laporan mingguan dan bulanan setiap satuan kerja."
            }, void 0, false, {
                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                lineNumber: 137,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-slate-200 bg-white p-4 sm:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "monitor-cadence",
                                                className: "mb-1 block text-xs font-semibold text-slate-600",
                                                children: "Periode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 141,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "monitor-cadence",
                                                className: "form-select min-h-11 w-36",
                                                value: cadence,
                                                onChange: (e)=>setCadence(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "minggu",
                                                        children: "Mingguan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 250
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "bulan",
                                                        children: "Bulanan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 290
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 141,
                                                columnNumber: 124
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 141,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "monitor-year",
                                                className: "mb-1 block text-xs font-semibold text-slate-600",
                                                children: "Tahun"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 142,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "monitor-year",
                                                className: "form-select min-h-11 w-28",
                                                value: year,
                                                onChange: (e)=>setYear(e.target.value),
                                                children: years.map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: y,
                                                        children: y
                                                    }, y, false, {
                                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 252
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 142,
                                                columnNumber: 119
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 142,
                                        columnNumber: 11
                                    }, this),
                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "monitor-upt",
                                                className: "mb-1 block text-xs font-semibold text-slate-600",
                                                children: "Satker"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 143,
                                                columnNumber: 28
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "monitor-upt",
                                                className: "form-select min-h-11 min-w-52",
                                                value: uptFilter,
                                                onChange: (e)=>setUptFilter(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "Semua Satker"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                        lineNumber: 143,
                                                        columnNumber: 261
                                                    }, this),
                                                    upts.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: u.key,
                                                            children: u.label
                                                        }, u.key, false, {
                                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                            lineNumber: 143,
                                                            columnNumber: 317
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 143,
                                                columnNumber: 131
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 143,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 140,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: exportExcel,
                                        disabled: loading || !visibleUpts.length || !periods.length,
                                        className: "btn-secondary min-h-11 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 145,
                                                columnNumber: 185
                                            }, this),
                                            " Ekspor Excel"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 145,
                                        columnNumber: 37
                                    }, this),
                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openManage,
                                        className: "btn-secondary min-h-11 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 145,
                                                columnNumber: 327
                                            }, this),
                                            " Atur Kewajiban"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 145,
                                        columnNumber: 241
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 145,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                        lineNumber: 139,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-3 sm:grid-cols-3",
                        children: Object.entries(STATUS).map(([key, item])=>{
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2 rounded-lg border px-3 py-2.5 ${item.color}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 148,
                                        columnNumber: 184
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 148,
                                        columnNumber: 202
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "ml-auto tabular-nums",
                                        children: totals[key]
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 148,
                                        columnNumber: 247
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 148,
                                columnNumber: 87
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                        lineNumber: 147,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 px-3 py-3 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        size: 17,
                                        className: "text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 151,
                                        columnNumber: 73
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: totals.selesai
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 151,
                                        columnNumber: 123
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "dari ",
                                            count,
                                            " periode selesai"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 151,
                                        columnNumber: 156
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 151,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 min-w-32 flex-1 overflow-hidden rounded-full bg-slate-200",
                                role: "progressbar",
                                "aria-valuenow": percentage,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-label": "Progres pembaruan laporan",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full bg-emerald-600 transition-[width]",
                                    style: {
                                        width: `${percentage}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 152,
                                    columnNumber: 211
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 152,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold tabular-nums text-slate-700",
                                children: [
                                    percentage,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 153,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: load,
                                disabled: loading,
                                className: "inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-600 hover:bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                                        size: 15,
                                        className: loading ? 'animate-spin' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 154,
                                        columnNumber: 183
                                    }, this),
                                    " Muat ulang"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 154,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                        lineNumber: 150,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                lineNumber: 138,
                columnNumber: 5
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                lineNumber: 157,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "overflow-hidden rounded-xl border border-slate-200 bg-white",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-48 items-center justify-center gap-2 text-sm text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            size: 18,
                            className: "animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                            lineNumber: 159,
                            columnNumber: 106
                        }, this),
                        " Memuat monitoring…"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                    lineNumber: 159,
                    columnNumber: 18
                }, this) : !visiblePeriods.length || !visibleUpts.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-48 flex-col items-center justify-center gap-2 px-4 text-center text-sm text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                            size: 24,
                            className: "text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                            lineNumber: 159,
                            columnNumber: 342
                        }, this),
                        "Belum ada Satker atau periode untuk pilihan ini."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                    lineNumber: 159,
                    columnNumber: 228
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[68vh] overflow-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-max border-collapse text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "sticky top-0 z-20 bg-slate-100 text-slate-700",
                                children: [
                                    cadence === 'minggu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                rowSpan: 2,
                                                className: "sticky left-0 z-30 min-w-12 border border-slate-200 bg-slate-100 px-3 py-2 text-center",
                                                children: "No."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 159,
                                                columnNumber: 643
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                rowSpan: 2,
                                                className: "sticky left-12 z-30 min-w-56 border border-slate-200 bg-slate-100 px-3 py-2 text-left",
                                                children: "Nama Satker"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 159,
                                                columnNumber: 766
                                            }, this),
                                            MONTHS.map((month, i)=>weeksByMonth[i].length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    colSpan: weeksByMonth[i].length,
                                                    className: "border border-slate-200 px-2 py-2 text-center font-semibold",
                                                    children: month
                                                }, month, false, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 952
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 159,
                                        columnNumber: 639
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            cadence === 'minggu' && visiblePeriods.map((period)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "min-w-24 border border-slate-200 px-2 py-2 text-center font-medium",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$periods$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPeriodLabel"])(period)
                                                }, period.id, false, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 1151
                                                }, this)),
                                            cadence === 'bulan' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "sticky left-0 z-30 min-w-12 border border-slate-200 bg-slate-100 px-3 py-2 text-center",
                                                        children: "No."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 1310
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "sticky left-12 z-30 min-w-56 border border-slate-200 bg-slate-100 px-3 py-2 text-left",
                                                        children: "Nama Satker"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 1421
                                                    }, this),
                                                    MONTHS.map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "min-w-24 border border-slate-200 px-3 py-2 text-center font-semibold",
                                                            children: month
                                                        }, month, false, {
                                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                            lineNumber: 159,
                                                            columnNumber: 1560
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 159,
                                                columnNumber: 1308
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 159,
                                        columnNumber: 1093
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 159,
                                columnNumber: 549
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: visibleUpts.map((upt, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "sticky left-0 z-10 border border-slate-200 bg-white px-3 py-2 text-center text-slate-500",
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 159,
                                                columnNumber: 1746
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "row",
                                                className: "sticky left-12 z-10 border border-slate-200 bg-white px-3 py-2 text-left font-medium text-slate-800",
                                                children: upt.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                lineNumber: 159,
                                                columnNumber: 1867
                                            }, this),
                                            cadence === 'minggu' ? visiblePeriods.map((period)=>renderCell(upt, period)) : MONTHS.map((month, monthIndex)=>{
                                                const period = visiblePeriods.find((p)=>Number(p.bulan) === monthIndex + 1);
                                                return period ? renderCell(upt, period) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-slate-200 bg-slate-50/50"
                                                }, `${upt.key}-${month}`, false, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 2246
                                                }, this);
                                            })
                                        ]
                                    }, upt.key, true, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 159,
                                        columnNumber: 1728
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 159,
                                columnNumber: 1688
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                        lineNumber: 159,
                        columnNumber: 496
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                    lineNumber: 159,
                    columnNumber: 452
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                lineNumber: 158,
                columnNumber: 5
            }, this),
            manage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-3",
                role: "presentation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "manage-title",
                    className: "max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "flex items-center justify-between border-b border-slate-200 px-5 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "manage-title",
                                            className: "font-semibold text-slate-900",
                                            children: "Atur kewajiban pengisian"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 162,
                                            columnNumber: 381
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-slate-500",
                                            children: "Pilih jenis data wajib untuk setiap Satker dan frekuensi."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 162,
                                            columnNumber: 473
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 162,
                                    columnNumber: 376
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setManage(false),
                                    className: "rounded-lg p-2 text-slate-500 hover:bg-slate-100",
                                    "aria-label": "Tutup",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 162,
                                        columnNumber: 718
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 162,
                                    columnNumber: 583
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                            lineNumber: 162,
                            columnNumber: 286
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 overflow-y-auto p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-slate-600",
                                            children: [
                                                "Satker",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "form-select mt-1 min-h-11 w-full",
                                                    value: manageUpt,
                                                    onChange: (e)=>setManageUpt(e.target.value),
                                                    children: upts.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: u.key,
                                                            children: u.label
                                                        }, u.key, false, {
                                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 1034
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 903
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 162,
                                            columnNumber: 841
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-slate-600",
                                            children: [
                                                "Frekuensi",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "form-select mt-1 min-h-11 w-full",
                                                    value: manageCadence,
                                                    onChange: (e)=>setManageCadence(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "minggu",
                                                            children: "Mingguan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 1294
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "bulan",
                                                            children: "Bulanan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 1334
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 1170
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 162,
                                            columnNumber: 1105
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 162,
                                    columnNumber: 798
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-[48vh] space-y-2 overflow-y-auto rounded-lg border border-slate-200 p-3",
                                    children: options.filter((o)=>o.cadence === manageCadence).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 hover:bg-slate-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: selectedTypes.includes(option.id),
                                                    onChange: (e)=>setSelectedTypes((current)=>e.target.checked ? [
                                                                ...current,
                                                                option.id
                                                            ] : current.filter((id)=>id !== option.id))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 1667
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-slate-700",
                                                    children: option.judul
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 1865
                                                }, this)
                                            ]
                                        }, option.id, true, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 162,
                                            columnNumber: 1554
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 162,
                                    columnNumber: 1395
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                            lineNumber: 162,
                            columnNumber: 751
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "flex justify-end gap-2 border-t border-slate-200 px-5 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setManage(false),
                                    className: "btn-secondary min-h-10",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 162,
                                    columnNumber: 2028
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: saveRequirements,
                                    disabled: manageBusy || !manageUpt || !selectedTypes.length,
                                    className: "btn-primary min-h-10",
                                    children: [
                                        manageBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            size: 16,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 162,
                                            columnNumber: 2289
                                        }, this) : null,
                                        " Simpan Kewajiban"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 162,
                                    columnNumber: 2132
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                            lineNumber: 162,
                            columnNumber: 1949
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                    lineNumber: 162,
                    columnNumber: 125
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                lineNumber: 162,
                columnNumber: 16
            }, this),
            detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-3",
                role: "presentation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "detail-title",
                    className: "max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "flex items-center justify-between border-b border-slate-200 px-5 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "detail-title",
                                            className: "font-semibold text-slate-900",
                                            children: [
                                                "Rincian laporan — ",
                                                detail.upt?.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 164,
                                            columnNumber: 381
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-slate-500",
                                            children: [
                                                detail.period?.label || (detail.period?.level === 'bulan' ? MONTHS[Number(detail.period?.bulan) - 1] : `Minggu ${detail.period?.minggu_ke}`),
                                                " ",
                                                detail.period?.tahun
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 164,
                                            columnNumber: 486
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 164,
                                    columnNumber: 376
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setDetail(null),
                                    className: "rounded-lg p-2 text-slate-500 hover:bg-slate-100",
                                    "aria-label": "Tutup",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                        lineNumber: 164,
                                        columnNumber: 838
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 164,
                                    columnNumber: 704
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                            lineNumber: 164,
                            columnNumber: 286
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[70vh] space-y-3 overflow-y-auto p-5",
                            children: detailLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center py-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 164,
                                    columnNumber: 991
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 164,
                                columnNumber: 948
                            }, this) : detail.data?.length ? detail.data.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-lg border border-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-sm text-slate-800",
                                                    children: type.judul
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 1250
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `ml-auto rounded-full px-2.5 py-1 text-xs font-semibold ${type.status === 'sudah' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`,
                                                    children: type.status === 'sudah' ? `Sudah diisi · ${type.jumlah} baris` : 'Belum diisi'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 1314
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 164,
                                            columnNumber: 1163
                                        }, this),
                                        type.rows?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 p-3",
                                            children: [
                                                type.rows.slice(0, 30).map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "mb-1 block",
                                                                children: [
                                                                    "Baris ",
                                                                    index + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 1775
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid gap-x-4 gap-y-1 sm:grid-cols-2",
                                                                children: row.fields?.map((field, fi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-500",
                                                                                children: [
                                                                                    field.label,
                                                                                    ": "
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                                                lineNumber: 164,
                                                                                columnNumber: 1951
                                                                            }, this),
                                                                            typeof field.value === 'object' ? JSON.stringify(field.value) : String(field.value ?? '—')
                                                                        ]
                                                                    }, `${field.label}-${fi}`, true, {
                                                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 1917
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 1832
                                                            }, this)
                                                        ]
                                                    }, row.baris_ke ?? index, true, {
                                                        fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 1674
                                                    }, this)),
                                                type.rows.length > 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: [
                                                        "Menampilkan 30 dari ",
                                                        type.rows.length,
                                                        " baris."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 2146
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                            lineNumber: 164,
                                            columnNumber: 1599
                                        }, this)
                                    ]
                                }, type.jenis_data_id, true, {
                                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                    lineNumber: 164,
                                    columnNumber: 1082
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "py-8 text-center text-sm text-slate-500",
                                children: "Belum ada kewajiban yang diatur untuk Satker ini."
                            }, void 0, false, {
                                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                                lineNumber: 164,
                                columnNumber: 2255
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/MonitoringUpdating.jsx",
                            lineNumber: 164,
                            columnNumber: 871
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/MonitoringUpdating.jsx",
                    lineNumber: 164,
                    columnNumber: 125
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/MonitoringUpdating.jsx",
                lineNumber: 164,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/MonitoringUpdating.jsx",
        lineNumber: 136,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=src_0g4iib3._.js.map