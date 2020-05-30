import { JSDOM } from 'jsdom'
import { EpicwarMapParseResponse } from './epicwar.map-parse.response'
import { getMapID, getMapName, getMapUrl, getMapDescription, getMapDetails, getMapImage } from './utils'

export function epicwarMapParse (content: string): EpicwarMapParseResponse {
  // Find into dom
  const dom = new JSDOM(content)
  const cells = dom.window.document.getElementsByClassName('listentry')

  return {
    id: getMapID(cells),
    name: getMapName(cells),
    url: getMapUrl(cells),
    description: getMapDescription(cells),
    details: getMapDetails(cells),
    image: getMapImage(cells)
  }
}
