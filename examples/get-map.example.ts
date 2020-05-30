import { epicwarGetMap } from '../src'

(async () => {
  // Map: https://www.epicwar.com/maps/1
  const mapId = 1
  const download = false
  const map = await epicwarGetMap(mapId, download)
  console.log(map)
})()
