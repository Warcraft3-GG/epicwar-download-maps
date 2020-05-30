import axios from 'axios'
import { JSDOM } from 'jsdom'
import { EpicwarEnum } from '../epicwar.enum'

/**
 * Return total maps in epicwards.com
 */
export async function totalMaps () {
  const homepage = await axios(EpicwarEnum.BASE_URL)
  const html = new JSDOM(homepage.data)
  const urls = html.window.document.getElementsByTagName('a')
  for (const url of urls) {
    const { href } = url
    const data = /\/maps\/(\d+)\//.exec(href)
    if (!data) {
      continue
    }
    return +data[1]
  }
  return -1
}
