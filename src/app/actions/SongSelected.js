import { SONG_SELECTED } from '../constants/actionTypes'

const SongSelected = ytid => ({
  type: SONG_SELECTED,
  ytid
})

export default SongSelected
