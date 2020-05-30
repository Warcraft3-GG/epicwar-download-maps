import { totalMaps, getCategories } from 'epicwar'

(async () => {
  // Get map categories
  const categories = await getCategories()
  console.log(categories)
})()
