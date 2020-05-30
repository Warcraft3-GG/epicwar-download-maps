import { JSDOM } from 'jsdom'
import { EpicwarMapParseResponse } from './epicwar.map-parse.response'
import { getMapID, getMapName, getMapUrl, getMapDescription, getMapDetails } from './utils'

export function epicwarMapParse (content: string): EpicwarMapParseResponse {
  // Find into dom
  const dom = new JSDOM(content)
  const cells: Element[] = []
  for (const cell of dom.window.document.getElementsByClassName('listentry')) {
    const cellContent = cell.textContent.trim()
    if (cellContent === '') {
      continue
    }
    cells.push(cell)
  }

  return {
    id: getMapID(cells),
    name: getMapName(cells),
    url: getMapUrl(cells),
    description: getMapDescription(cells),
    details: getMapDetails(cells)
  }
}
