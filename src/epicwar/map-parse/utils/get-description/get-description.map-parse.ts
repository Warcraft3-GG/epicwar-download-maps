import { JSDOM } from 'jsdom'

export function getMapDescription (content: string): string | null {
  const dom = new JSDOM(content)
  const cells = dom.window.document.getElementsByClassName('listentry')

  for (const cell of cells) {
    const content = cell.textContent
    if (content.indexOf('Share this map') === -1) {
      continue
    }
    const innerHTML = cell.innerHTML
    const html = innerHTML
      .split(/by <b>(.*?)<\/b><br><br>/gm)[2].trim()
      .split(/<br><br>\n\s+<b>Share this map: <\/b>/gm)[0].trim()
    return html
  }

  return null
}
