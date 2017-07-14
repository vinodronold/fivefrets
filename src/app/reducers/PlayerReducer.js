import InitState from './InitState'
import { YT_PLAYER_STATUS_CHANGED, GET_SONG, MOVE_CHORD_TO } from '../constants/actionTypes'

const PlayerReducer = (state = InitState.player, action) => {
  switch (action.type) {
    case YT_PLAYER_STATUS_CHANGED:
      return Object.assign({}, state, { status: action.status })
    case GET_SONG:
      return Object.assign({}, state, { ytid: action.id })
    case MOVE_CHORD_TO:
      return Object.assign({}, state, { activechord: action.id })
    default:
      return state
  }
}

export default PlayerReducer
