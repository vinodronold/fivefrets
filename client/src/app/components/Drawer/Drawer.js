import React, { PureComponent } from 'react'
import Logo from '../Logo'
import DrawerItems from './DrawerItems'
import { clsTempDrawer, clsTheme } from '../../constants/ui'
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer'

class Drawer extends PureComponent {
  constructor(props) {
    super(props)
    this.node = null
    this.drawer = null
  }
  shouldComponentUpdate = nextProps => nextProps.isDrawerOpen
  componentDidMount() {
    this.drawer = new MDCTemporaryDrawer(this.node)
    this.node.addEventListener('MDCTemporaryDrawer:close', () => {
      this.props.toggleDrawer()
    })
  }
  componentDidUpdate() {
    if (this.props.isDrawerOpen) {
      this.drawer.open = this.props.isDrawerOpen
    }
  }
  componentWillUnmount() {
    this.drawer.destroy()
  }

  render() {
    return (
      <aside className={clsTempDrawer} ref={n => (this.node = n)} style={{zIndex: 10}}>
        <nav className={`${clsTempDrawer}__drawer`}>
          <header className={`${clsTempDrawer}__header`}>
            <div
              className={`${clsTempDrawer}__header-content ${clsTheme}--primary-bg ${clsTheme}--text-primary-on-primary`}>
              <Logo />
            </div>
          </header>
          <nav className={`${clsTempDrawer}__content`}>
            <DrawerItems items={this.props.items} />
          </nav>
        </nav>
      </aside>
    )
  }
}

export default Drawer
