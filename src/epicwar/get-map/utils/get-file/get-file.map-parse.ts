import axios from 'axios'
import sha1 from 'sha1'
import { EpicwarMapParseMapFileResponse } from '../../epicwar.map-parse.response'

export async function getFile (url: string): Promise<EpicwarMapParseMapFileResponse> {
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
