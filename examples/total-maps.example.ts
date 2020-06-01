import { totalMaps } from 'epicwar'

(async () => {
  // Get total maps
  const total = await totalMaps()
  console.log(total)
})()
