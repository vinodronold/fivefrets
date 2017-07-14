import PlayerLayout from '../components/PlayerLayout'
import { SelectedSong } from '../selectors'
import { PlayerStatusChanged, GetSong, MoveChordTo } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    song: SelectedSong(state),
    player: state.player
  }
}
const mapDispatchToProps = dispatch => {
  return {
    PlayerStatusChanged: status => dispatch(PlayerStatusChanged(status)),
    GetSong: id => dispatch(GetSong(id)),
    MoveChordTo: id => dispatch(MoveChordTo(id))
  }
}

const Player = withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerLayout))

export default Player
