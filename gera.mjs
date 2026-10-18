// node gera.mjs -> svg/<cor>/*.svg, png/<cor>/*.png, folha.png, README icon tables
import { chromium } from 'playwright-core'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ICONES } from './icones.mjs'

const raiz = dirname(fileURLToPath(import.meta.url))
const CORES = { cinza: '#b5bac1', branco: '#f2f3f5', azul: '#4b8cf7', preto: '#1e1f22' }
const svg = (des, mas, cor, id, tam = 128) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 26 26" width="${tam}" height="${tam}"><defs><mask id="${id}" maskUnits="userSpaceOnUse" x="-1" y="-1" width="26" height="26"><rect x="-1" y="-1" width="26" height="26" fill="#fff"/>${mas}</mask></defs><g mask="url(#${id})" fill="${cor}" stroke="${cor}" stroke-width="0">${des}</g></svg>`

const chrome = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const b = await chromium.launch({ executablePath: chrome, headless: true })
const p = await b.newPage({ viewport: { width: 128, height: 128 } })
for (const [cor, hex] of Object.entries(CORES)) {
  mkdirSync(join(raiz, 'svg', cor), { recursive: true })
  mkdirSync(join(raiz, 'png', cor), { recursive: true })
  for (const [nome, , des, mas] of ICONES) {
    const s = svg(des, mas, hex, 'm')
    writeFileSync(join(raiz, 'svg', cor, `${nome}.svg`), s)
    await p.setContent(`<html><body style="margin:0;background:transparent">${s}</body></html>`)
    await p.locator('svg').screenshot({ path: join(raiz, 'png', cor, `${nome}.png`), omitBackground: true })
  }
}

const categorias = [...new Set(ICONES.map(i => i[1]))]
const folha = `<html><body style="margin:0;background:#1e1f22;font:600 12px system-ui;color:#dbdee1;padding:28px">
<style>.g{display:grid;grid-template-columns:repeat(10,84px);gap:18px 6px;margin-bottom:28px}.c{display:grid;justify-items:center;gap:8px}h3{margin:0 0 14px;color:#949ba4;font-size:11px;letter-spacing:.08em;text-transform:uppercase}</style>
${categorias.map(c => `<h3>${c}</h3><div class="g">${ICONES.filter(i => i[1] === c).map(([n, , d, m], i) => `<div class="c">${svg(d, m, CORES.branco, c + i, 36)}<span>${n}</span></div>`).join('')}</div>`).join('')}
</body></html>`
const f = await b.newPage({ viewport: { width: 940, height: 600 } })
await f.setContent(folha)
await f.screenshot({ path: join(raiz, 'folha.png'), fullPage: true })
await b.close()

const tabela = categorias.map(c => {
  const lista = ICONES.filter(i => i[1] === c)
  const linhas = []
  for (let i = 0; i < lista.length; i += 6) {
    const fatia = lista.slice(i, i + 6)
    linhas.push('| ' + fatia.map(([n]) => `<img src="svg/azul/${n}.svg" width="32"><br><sub>${n}</sub>`).join(' | ') + ' |')
    if (i === 0) linhas.splice(0, 0, '|' + ' |'.repeat(fatia.length), '|' + ' :-: |'.repeat(fatia.length))
  }
  return `### ${c} (${lista.length})\n\n${linhas.join('\n')}`
}).join('\n\n')
const readme = readFileSync(join(raiz, 'README.md'), 'utf8')
  .replace(/<!-- icones -->[\s\S]*<!-- \/icones -->/, `<!-- icones -->\n${tabela}\n<!-- /icones -->`)
  .replace(/\*\*\d+ ícones\*\*/, `**${ICONES.length} ícones**`)
writeFileSync(join(raiz, 'README.md'), readme)
console.log(ICONES.length, 'ícones x', Object.keys(CORES).length, 'cores')
