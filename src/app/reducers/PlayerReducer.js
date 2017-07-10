import InitState from './InitState'
import { YT_PLAYER_STATUS_CHANGED, SONG_SELECTED } from '../constants/actionTypes'

const PlayerReducer = (state = InitState.player, action) => {
  switch (action.type) {
    case YT_PLAYER_STATUS_CHANGED:
      return Object.assign({}, state, { status: action.status })
    case SONG_SELECTED:
      return Object.assign({}, state, { ytid: action.ytid })
    default:
      return state
  }
}

export default PlayerReducer
