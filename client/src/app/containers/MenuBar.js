import Menu from '../components/Menu'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state.toolbar
})
const MenuBar = connect(mapStateToProps)(Menu)
export default MenuBar
