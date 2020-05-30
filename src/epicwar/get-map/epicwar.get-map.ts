import axios from 'axios'
import { JSDOM } from 'jsdom'
import { EpicwarMapParseResponse } from './epicwar.get-map.response'
import { getMapID, getMapName, getMapUrl, getMapDescription, getMapDetails, getMapImage, getFile } from './utils'
import { EpicwarEnum } from '../epicwar.enum'

export async function epicwarGetMap (mapId: string | number, download?: boolean): Promise<EpicwarMapParseResponse> {
  const content = (await axios({
    method: 'GET',
    url: `${EpicwarEnum.BASE_URL}/maps/${mapId}`
  })).data
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
