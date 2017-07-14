import PlayerLayout from '../components/PlayerLayout'
import { SelectedSong } from '../selectors'
import { PlayerStatusChanged, GetSong, MoveToNextChord } from '../actions'
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
    MoveToNextChord: () => dispatch(MoveToNextChord)
  }
}

const Player = withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerLayout))

export default Player
