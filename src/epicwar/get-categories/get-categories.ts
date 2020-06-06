import axios from 'axios'
import { EpicwarEnum } from '../epicwar.enum'
import { JSDOM } from 'jsdom'

const CATEGORIES_TEXT = '[All Categories]'

export async function getCategories (): Promise<string[]> {
  const content = (await axios({
    method: 'GET',
    url: `${EpicwarEnum.BASE_URL}/maps/search`
  })).data
  const selects = new JSDOM(content)
    .window
    .document
    .getElementsByName('c')
  const response = []
  for (const select of selects) {
    const options: Element[] = (select as any).options
    for (const option of options) {
      const { textContent } = option
      if (textContent === CATEGORIES_TEXT) {
        continue
      }
      response.push(textContent)
    }
  }
  return response
}
