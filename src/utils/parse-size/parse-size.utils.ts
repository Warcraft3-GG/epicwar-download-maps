const KB_TO_BYTE = 1024
const MB_TO_BYTE = KB_TO_BYTE * KB_TO_BYTE
const GB_TO_BYTE = MB_TO_BYTE * KB_TO_BYTE
/**
 * parseSize
 * @description Returns size in bytes
 * @param input Example 1MB 5MB 1GB
 */
export function parseSize (input: string): number {
  const data = /(\d+(\.\d{0,2})?|\.?\d{1,2})\s?(\w+)/gm.exec(input)
  let response = +data[1]
  const grouper = data[3].toLowerCase()
  switch (grouper) {
    case 'kb':
      response *= KB_TO_BYTE
      break
    case 'mb':
      response *= MB_TO_BYTE
      break
    case 'gb':
      response *= GB_TO_BYTE
      break
    default:
      response = -1
  }
  return response
}
