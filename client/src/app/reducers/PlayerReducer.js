import InitState from './InitState'
import {
  YT_PLAYER_STATUS_CHANGED,
  GET_SONG,
  MOVE_CHORD_TO,
  MOUNT_YT_PLAYER,
  SET_TRANSPOSE
} from '../constants/actionTypes'

const PlayerReducer = (state = InitState.player, action) => {
  switch (action.type) {
    case YT_PLAYER_STATUS_CHANGED:
      return Object.assign({}, state, { status: action.status })
    case GET_SONG:
      return Object.assign({}, state, { ytid: action.id })
    case MOUNT_YT_PLAYER:
      return Object.assign({}, state, { id: action.id })
    case MOVE_CHORD_TO:
      return Object.assign({}, state, { activechord: action.id })
    case SET_TRANSPOSE:
      return Object.assign({}, state, { transpose: state.transpose + action.n })
    default:
      return state
  }
}

export default PlayerReducer
