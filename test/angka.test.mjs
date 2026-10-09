// Format angka Indonesia (lib/angka.js): titik ribuan saat mengetik, membaca angka dari Excel, kolom rupiah.
import test from 'node:test'
import assert from 'node:assert/strict'
import { formatAngka, formatKetikan, parseAngka, isRupiahField } from '../src/lib/angka.js'

test('formatKetikan menambah titik ribuan dan menjaga koma desimal yang sedang diketik', () => {
  assert.equal(formatKetikan('1500000'), '1.500.000')
  assert.equal(formatKetikan('1.500.0001'), '15.000.001')
  assert.equal(formatKetikan('12,'), '12,')
  assert.equal(formatKetikan('1234,5'), '1.234,5')
  assert.equal(formatKetikan('Rp 2.500'), '2.500')
  assert.equal(formatKetikan('007'), '7')
  assert.equal(formatKetikan(''), '')
})

test('parseAngka membaca format Indonesia, Inggris, dan angka asli Excel', () => {
  assert.equal(parseAngka('1.500.000'), 1500000)
  assert.equal(parseAngka('Rp 1.500.000,50'), 1500000.5)
  assert.equal(parseAngka('1,500,000.50'), 1500000.5)
  assert.equal(parseAngka('1.500'), 1500)
  assert.equal(parseAngka('45,5'), 45.5)
  assert.equal(parseAngka('45.5'), 45.5)
  assert.equal(parseAngka(25000000), 25000000)
  assert.equal(parseAngka('12,'), 12)
  assert.equal(parseAngka('-'), null)
  assert.equal(parseAngka('abc'), null)
  assert.equal(parseAngka(formatKetikan('987654321')), 987654321)
})

test('formatAngka', () => {
  assert.equal(formatAngka(6000000000), '6.000.000.000')
  assert.equal(formatAngka(null), '')
})

test('isRupiahField', () => {
  assert.equal(isRupiahField({ field_key: 'realisasi', label: 'Realisasi (Rp)', tipe: 'angka' }), true)
  assert.equal(isRupiahField({ field_key: 'pagu', label: 'Pagu', tipe: 'angka' }), true)
  assert.equal(isRupiahField({ field_key: 'realisasi_fisik', label: 'Realisasi Fisik (%)', tipe: 'angka' }), false)
  assert.equal(isRupiahField({ field_key: 'jumlah_peserta', label: 'Jumlah Peserta', tipe: 'angka' }), false)
  assert.equal(isRupiahField({ field_key: 'pagu', label: 'Pagu (Rp)', tipe: 'teks' }), false)
})
