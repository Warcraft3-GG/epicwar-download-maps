import { EpicwarMapParseDetailsResponse } from '../../epicwar.get-map.response'
import { parseSize } from '../../../../utils/parse-size/parse-size.utils'

export function getMapDetails (cells: HTMLCollectionOf<Element>): EpicwarMapParseDetailsResponse | null {
  for (const cell of cells) {
    const content = cell.textContent
    if (content.indexOf('Category') === -1) {
      continue
    }
    const text = cell.textContent.trim()
    const category = /Category: (.*)/gm.exec(text)[1]
    const tileset = /Tileset: (.*)/gm.exec(text)[1]
    const dimensions = /Dimensions: (.*)/gm.exec(text)[1].split('x')
    const playableArea = /Playable Area: (.*)/gm.exec(text)[1].split('x')
    const date = /Submitted: (.*)/gm.exec(text)[1]
    const size = /Size: (.*)/gm.exec(text)[1]
    const players = /Recommended Players: (.*)/gm.exec(text)[1]

    return {
      category,
      tileset,
      players,
      dimensions: {
        x: +dimensions[0],
        y: +dimensions[1]
      },
      playableArea: {
        x: +playableArea[0],
        y: +playableArea[1]
      },
      date: new Date(Date.parse(date)),
      size: parseSize(size)
    }
  }

  return null
}
