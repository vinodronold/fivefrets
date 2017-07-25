import { combineReducers } from "redux"
import ToolbarReducer from './ToolbarReducer'
import SongsReducer from './SongsReducer'
import PlayerReducer from './PlayerReducer'

const rootReducer = combineReducers({
    toolbar: ToolbarReducer,
    songs: SongsReducer,
    player: PlayerReducer
})

export default rootReducer
