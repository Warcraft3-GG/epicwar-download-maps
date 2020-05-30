import { epicwarGetMap } from './epicwar/get-map/epicwar.get-map'
import { mapsTotal } from './epicwar/maps-total/maps-count'

(async () => {
  const mapParse = await epicwarGetMap(1)
  console.log(mapParse)
  // const totalMaps = await mapsTotal()
  // console.log(totalMaps)
})()
