export type EpicwarDimensions = {
  x: number
  y: number
}

export type EpicwarMapParseDetailsResponse = {
  category: string
  tileset: string
  dimensions: EpicwarDimensions
  playableArea: EpicwarDimensions
  date: Date
  /**
   * Map size in bytes
   */
  size: number
  /**
   * Recommended players
   * Example: 2, 3+
   */
  players: string
}

export type EpicwarMapParseMapFileResponse = {
  content: Buffer
  sha1: string
}

export type EpicwarMapParseResponse = {
  id: number
  name: string
  url: string
  description: string
  details: EpicwarMapParseDetailsResponse
  image: string
  file?: EpicwarMapParseMapFileResponse
}
