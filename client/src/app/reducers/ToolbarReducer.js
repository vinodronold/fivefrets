import { TOGGLE_DRAWER, TOGGLE_MORE_OPTIONS } from '../constants/actionTypes'
import InitState from './InitState'

const ToolbarReducer = (state = InitState.toolbar, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, { isDrawerOpen: !state.isDrawerOpen })
    case TOGGLE_MORE_OPTIONS:
      return Object.assign({}, state, { isOptionsOpen: !state.isOptionsOpen })
    default:
      return state
  }
}

export default ToolbarReducer
