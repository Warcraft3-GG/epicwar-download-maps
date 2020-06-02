import axios from 'axios'
import sha1 from 'sha1'
import { GetMapFileDTO } from 'warcraft3gg-dto'

export async function getFile (url: string): Promise<GetMapFileDTO> {
  const file = await axios({
    url,
    responseType: 'arraybuffer'
  })
  const { data } = file
  const encrypt = sha1(data)
  return {
    content: data,
    sha1: encrypt
  }
}
