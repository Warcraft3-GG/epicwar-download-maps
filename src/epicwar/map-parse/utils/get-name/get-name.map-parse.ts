export function getMapName (cells: Element[]): string {
  for (const cell of cells) {
    const urls = cell.getElementsByTagName('a')
    for (const url of urls) {
      const { href } = url
      if (!href.startsWith('/maps/download')) {
        continue
      }
      return url.textContent.trim()
    }
  }

  return 'NO_NAME_FOUND'
}
