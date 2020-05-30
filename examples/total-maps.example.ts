import { totalMaps } from '../src'

(async () => {
  // Map: Get total maps
  const total = await totalMaps()
  console.log(total)
})()
