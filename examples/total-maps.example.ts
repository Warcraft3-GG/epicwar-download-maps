import { totalMaps } from 'epicwar'

(async () => {
  // Map: Get total maps
  const total = await totalMaps()
  console.log(total)
})()
