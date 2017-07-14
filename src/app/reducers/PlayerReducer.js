import InitState from './InitState'
import { YT_PLAYER_STATUS_CHANGED, GET_SONG, MOVE_TO_NEXT_CHORD } from '../constants/actionTypes'

const PlayerReducer = (state = InitState.player, action) => {
  switch (action.type) {
    case YT_PLAYER_STATUS_CHANGED:
      return Object.assign({}, state, { status: action.status })
    case GET_SONG:
      return Object.assign({}, state, { ytid: action.id })
    case MOVE_TO_NEXT_CHORD:
      return Object.assign({}, state, { activechord: state.activechord + 1 })
    default:
      return state
  }
}

export default PlayerReducer
