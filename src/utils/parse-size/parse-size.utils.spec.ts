import { parseSize } from './parse-size.utils'

describe('Parse size', () => {
  it('should return true converter kb', () => {
    expect(parseSize('1KB')).toEqual(1024)
  })

  it('should return true converter mb', () => {
    expect(parseSize('1MB')).toEqual(1024 * 1024)
  })

  it('should return true converter kb', () => {
    expect(parseSize('1GB')).toEqual(1024 * 1024 * 1024)
  })

  it('should return the same value when grouper is not defined', () => {
    expect(parseSize('1')).toEqual(1)
  })
})
