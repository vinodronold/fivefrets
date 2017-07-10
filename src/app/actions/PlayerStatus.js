import { YT_PLAYER_STATUS_CHANGED } from '../constants/actionTypes'

const PlayerStatusChanged = status => ({
  type: YT_PLAYER_STATUS_CHANGED,
  status
})

export default PlayerStatusChanged
