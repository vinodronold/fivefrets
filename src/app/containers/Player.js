import PlayerLayout from '../components/PlayerLayout'
import { SelectedSong } from '../selectors'
import { PlayerStatusChanged, GetSong, MoveChordTo, MountYTPlayer, UnMountYTPlayer } from '../actions'
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
    MoveChordTo: id => dispatch(MoveChordTo(id)),
    MountYTPlayer: (id, ytid) => dispatch(MountYTPlayer(id, ytid)),
    UnMountYTPlayer: id => dispatch(UnMountYTPlayer(id))
  }
}

const Player = withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerLayout))

export default Player
