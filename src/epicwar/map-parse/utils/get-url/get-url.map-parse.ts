import { JSDOM } from 'jsdom'
import { EpicwarEnum } from '../../../epicwar.enum'

export function getMapUrl (content: string): string | null {
  const dom = new JSDOM(content)
  const cells = dom.window.document.getElementsByClassName('listentry')

  for (const cell of cells) {
    const urls = cell.getElementsByTagName('a')
    for (const url of urls) {
      const { href } = url
      if (!href.startsWith('/maps/download')) {
        continue
      }
      return `${EpicwarEnum.BASE_URL}${href}`
    }
  }

  return null
}
