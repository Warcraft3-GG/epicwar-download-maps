# Epicwar

Get maps information from "epicwars.com"

## Example
```ts
import { epicwarGetMap } from 'epicwar'

(async () => {
  // Map: https://www.epicwar.com/maps/1
  const mapId = 1
  // When download is true, you will receive the map on map.file
  const download = false
  const map = await epicwarGetMap(mapId, download)
  console.log(map)
})()
```
[More examples](https://github.com/Sansossio/epicwar-download-maps/tree/master/examples)

## Available methods
- [x] `Get map`
- [x] `Get and download map`
- [x] `Get total maps`
- [x] `Get maps categories`
