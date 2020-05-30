import { totalMaps, getCategories } from '../src'

(async () => {
  // Get map categories
  const categories = await getCategories()
  console.log(categories)
})()
