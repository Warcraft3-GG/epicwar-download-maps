export function getMapImage (cells: HTMLCollectionOf<Element>): string | null {
  for (const cell of cells) {
    const imgs = cell.getElementsByTagName('img')
    for (const img of imgs) {
      const { src } = img
      if (src.startsWith('//www.epicwar.com/assets/p')) {
        return `https:${src}`
      }
    }
  }

  return null
}
