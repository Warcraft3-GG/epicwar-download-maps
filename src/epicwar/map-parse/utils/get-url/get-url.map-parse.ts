import { EpicwarEnum } from '../../../epicwar.enum'

export function getMapUrl (cells: Element[]): string | null {
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
