export function getMapDescription (cells: HTMLCollectionOf<Element>): string | null {
  for (const cell of cells) {
    const content = cell.textContent
    if (content.indexOf('Share this map') === -1) {
      continue
    }
    const innerHTML = cell.innerHTML
    const html = innerHTML
      .split(/by <b>(.*?)<\/b><br><br>/gm)[2].trim()
      .split(/<br><br>\n\s+<b>((Rate this map)|(You rated this map)): <\/b>/gm)[0].trim()
    return html
  }

  return null
}
