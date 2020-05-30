import { JSDOM } from 'jsdom'
import { EpicwarMapParseResponse } from './epicwar.map-parse.response'
import { getMapID, getMapName, getMapUrl } from './utils'

export function epicwarMapParse (content: string): EpicwarMapParseResponse {
  // Find into dom
  const dom = new JSDOM(content)
  const cells = dom.window.document.getElementsByClassName('listentry')
  for (const cell of cells) {
    const cellContent = cell.textContent.trim()
    if (cellContent === '') {
      continue
    }
    console.log(cellContent)
  }

  return {
    id: getMapID(content),
    name: getMapName(content),
    url: getMapUrl(content)
  }
}
