export function getMapID (cells: HTMLCollectionOf<Element>): number | null {
  for (const cell of cells) {
    const urls = cell.getElementsByTagName('a')
    for (const url of urls) {
      const { href } = url
      if (!href.startsWith('/maps/download')) {
        continue
      }
      return +/\/([0-9]+)\//gm.exec(href)[1]
    }
  }

  return null
}
