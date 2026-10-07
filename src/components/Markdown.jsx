/**
 * components/Markdown.jsx
 * Penampil Markdown sederhana untuk Panduan Pengguna (be/content/*.md): judul #/##/###, paragraf, daftar (* - 1.),
 * tabel, **tebal**, *miring*, `kode`, dan tautan. Dibangun sebagai elemen React (tanpa HTML mentah), jadi aman.
 * Judul ## dan ### diberi id seperti GitHub (huruf kecil, spasi -> "-") supaya tautan #bagian berfungsi.
 */
import { Fragment } from 'react'

export const slug = t => t.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-')

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|\*[^*\s][^*]*\*|_[^_\s][^_]*_)/g

function Inline({ text }) {
  const parts = text.split(INLINE).filter(Boolean)
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={i} className="font-semibold text-gray-900 dark:text-white"><Inline text={p.slice(2, -2)} /></strong>
    if (p.startsWith('`') && p.endsWith('`')) return <code key={i} className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.85em]">{p.slice(1, -1)}</code>
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(p)
    if (link) {
      const [, label, href] = link
      if (href.startsWith('#')) {
        return (
          <a key={i} href={href} className="text-blue-700 dark:text-blue-300 underline underline-offset-2"
            onClick={e => { e.preventDefault(); document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>
            {label}
          </a>
        )
      }
      if (/^https?:\/\//.test(href)) return <a key={i} href={href} target="_blank" rel="noreferrer" className="text-blue-700 dark:text-blue-300 underline underline-offset-2">{label}</a>
      return <Fragment key={i}>{label}</Fragment>
    }
    if ((p.startsWith('*') && p.endsWith('*')) || (p.startsWith('_') && p.endsWith('_'))) return <em key={i}>{p.slice(1, -1)}</em>
    return <Fragment key={i}>{p}</Fragment>
  })
}

const sel = line => line.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim())

/** Pecah teks Markdown menjadi blok. */
export function parseMarkdown(md) {
  const lines = md.replace(/\r/g, '').split('\n')
  const blocks = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i++; continue }
    const h = /^(#{1,3})\s+(.*)$/.exec(line)
    if (h) { blocks.push({ type: 'h', level: h[1].length, text: h[2].trim() }); i++; continue }
    if (line.trim().startsWith('|') && lines[i + 1] && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const head = sel(line)
      const rows = []
      i += 2
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(sel(lines[i++]))
      blocks.push({ type: 'table', head, rows })
      continue
    }
    const li = /^(\s*)([*-]|\d+\.)\s+(.*)$/.exec(line)
    if (li) {
      const ordered = /\d/.test(li[2])
      const items = []
      while (i < lines.length) {
        const m = /^(\s*)([*-]|\d+\.)\s+(.*)$/.exec(lines[i])
        if (m && /\d/.test(m[2]) === ordered && !m[1]) { items.push(m[3]); i++; continue }
        if (lines[i].trim() && /^\s+/.test(lines[i]) && items.length) { items[items.length - 1] += ' ' + lines[i].trim(); i++; continue }
        break
      }
      blocks.push({ type: ordered ? 'ol' : 'ul', items })
      continue
    }
    const para = []
    while (i < lines.length && lines[i].trim() && !/^(#{1,3})\s/.test(lines[i]) && !/^(\s*)([*-]|\d+\.)\s+/.test(lines[i]) && !lines[i].trim().startsWith('|')) para.push(lines[i++].trim())
    blocks.push({ type: 'p', text: para.join(' ') })
  }
  return blocks
}

export default function Markdown({ source }) {
  const blocks = parseMarkdown(source || '')
  return (
    <div className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
      {blocks.map((b, k) => {
        if (b.type === 'h') {
          if (b.level === 1) return <h1 key={k} className="text-2xl font-bold font-display text-gray-900 dark:text-white">{b.text}</h1>
          if (b.level === 2) return <h2 key={k} id={slug(b.text)} className="scroll-mt-20 pt-5 mt-2 border-t border-gray-100 dark:border-gray-800 text-lg font-bold font-display text-gray-900 dark:text-white">{b.text}</h2>
          return <h3 key={k} id={slug(b.text)} className="scroll-mt-20 pt-2 text-base font-semibold text-gray-900 dark:text-white">{b.text}</h3>
        }
        if (b.type === 'p') return <p key={k}><Inline text={b.text} /></p>
        if (b.type === 'ul') return <ul key={k} className="list-disc pl-5 space-y-1">{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ul>
        if (b.type === 'ol') return <ol key={k} className="list-decimal pl-5 space-y-1">{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ol>
        return (
          <div key={k} className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full text-xs">
              <thead className="bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300">
                <tr>{b.head.map((c, j) => <th key={j} className="text-left px-3 py-2 font-semibold"><Inline text={c} /></th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {b.rows.map((r, j) => <tr key={j}>{r.map((c, x) => <td key={x} className="px-3 py-2 align-top"><Inline text={c} /></td>)}</tr>)}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}
