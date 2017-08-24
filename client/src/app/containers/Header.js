import Toolbar from '../components/Toolbar'
import { connect } from 'react-redux'
import { ToggleMenu } from '../actions'

const mapStateToProps = state => ({
  ...state.toolbar
})
const mapDispatchToProps = dispatch => ({
  ToggleMenu: () => {
    dispatch(ToggleMenu)
  }
})

const Header = connect(mapStateToProps, mapDispatchToProps)(Toolbar)

export default Header
