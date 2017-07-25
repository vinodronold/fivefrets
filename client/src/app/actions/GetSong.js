import { GET_SONG } from '../constants/actionTypes'

const GetSong = id => ({
  type: GET_SONG,
  id
})

export default GetSong
