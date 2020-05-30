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
}

export type EpicwarMapParseResponse = {
  id: number
  name: string
  url: string
  description: string
  details: EpicwarMapParseDetailsResponse
  image: string
}
