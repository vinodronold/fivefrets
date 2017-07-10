import Drawer from '../components/Drawer'
import { connect } from 'react-redux'
import { ToggleDrawer } from '../actions'

const mapStateToProps = state => {
  return {
    isDrawerOpen: state.toolbar.isDrawerOpen,
    items: [{ id: 1, label: 'Inbox', icon: 'inbox' }, { id: 2, label: 'Star', icon: 'star' }]
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: () => {
      dispatch(ToggleDrawer)
    }
  }
}

const MenuSideBar = connect(mapStateToProps, mapDispatchToProps)(Drawer)

export default MenuSideBar
