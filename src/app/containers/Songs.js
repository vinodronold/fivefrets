import SongsList from '../components/SongsList'
import { SongSelected } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  songs: state.songs
})

const mapDispatchToProps = dispatch => ({
  SongSelected: id => dispatch(SongSelected(id))
})

const Songs = withRouter(connect(mapStateToProps, mapDispatchToProps)(SongsList))

export default Songs
