import { JSDOM } from 'jsdom'
import { EpicwarMapParseResponse } from './epicwar.map-parse.response'
import { getMapID, getMapName, getMapUrl, getMapDescription, getMapDetails, getMapImage } from './utils'

export function epicwarMapParse (content: string): EpicwarMapParseResponse {
  // Find into dom
  const dom = new JSDOM(content)
  const cells = dom.window.document.getElementsByClassName('listentry')

  // Map fields
  const id = getMapID(cells)
  const name = getMapName(cells)
  const url = getMapUrl(cells)
  const description = getMapDescription(cells)
  const details = getMapDetails(cells)
  const image = getMapImage(cells)

  return {
    id,
    name,
    url,
    description,
    details,
    image
  }
}
