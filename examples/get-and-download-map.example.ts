import { epicwarGetMap } from 'epicwar'

(async () => {
  // Map: https://www.epicwar.com/maps/1
  const mapId = 1
  const download = true
  const map = await epicwarGetMap(mapId, download)
  console.log(map)
})()
