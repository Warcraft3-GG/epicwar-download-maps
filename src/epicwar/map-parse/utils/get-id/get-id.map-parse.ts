import { JSDOM } from 'jsdom'

export function getMapID (content: string): number | null {
  const dom = new JSDOM(content)
  const cells = dom.window.document.getElementsByClassName('listentry')

  for (const cell of cells) {
    const urls = cell.getElementsByTagName('a')
    for (const url of urls) {
      const { href } = url
      if (href.startsWith('/maps/download')) {
        return +/\/([0-9]+)\//gm.exec(href)[1]
      }
    }
  }

  return null
}
