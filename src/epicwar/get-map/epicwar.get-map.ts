import { JSDOM } from 'jsdom'
import { EpicwarMapParseResponse } from './epicwar.get-map.response'
import { getMapID, getMapName, getMapUrl, getMapDescription, getMapDetails, getMapImage, getFile } from './utils'

export async function epicwarGetMap (content: string, download?: boolean): Promise<EpicwarMapParseResponse> {
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
  const file = download ? await getFile(url) : undefined

  return {
    id,
    name,
    url,
    description,
    details,
    image,
    file
  }
}
