import { TOGGLE_MENU } from '../constants/actionTypes'
import InitState from './InitState'

const ToolbarReducer = (state = InitState.toolbar, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, { isMenuOpen: !state.isMenuOpen })
    default:
      return state
  }
}

export default ToolbarReducer
