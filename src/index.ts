import axios from 'axios'
import { epicwarMapParse } from './epicwar/map-parse/epicwar.map-parse'
import { mapsTotal } from './epicwar/maps-total/maps-count'
import { parseSize } from './utils/parse-size/parse-size.utils'

(async () => {
  const response = await axios({ method: 'GET', url: 'https://www.epicwar.com/maps/1/' })
  const mapParse = epicwarMapParse(response.data)
  console.log(mapParse)
  // const totalMaps = await mapsTotal()
  // console.log(totalMaps)
})()
