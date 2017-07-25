import Toolbar from '../components/Toolbar'
import { connect } from 'react-redux'
import { ToggleDrawer, ToggleMoreOptions } from '../actions'

const mapStateToProps = state => ({
  ...state.toolbar
})
const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => {
    dispatch(ToggleDrawer)
  },
  toggleMoreOptions: () => {
    dispatch(ToggleMoreOptions)
  }
})

const Header = connect(mapStateToProps, mapDispatchToProps)(Toolbar)

export default Header
