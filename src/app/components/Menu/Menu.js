import React, { PureComponent } from 'react'
import Icon from '../Icons'
import { clsMenuAnchor, clsMenu } from '../../constants/ui'
import List, { ListItem } from '../List'
import { MDCSimpleMenu } from '@material/menu/dist/mdc.menu'

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    this.node = null
    this.menu = null
  }
  shouldComponentUpdate = nextProps => nextProps.isOptionsOpen
  componentDidMount() {
    this.menu = new MDCSimpleMenu(this.node)
    this.menu.hide()
    this.node.addEventListener('MDCSimpleMenu:cancel', () => {
      this.props.toggleMoreOptions()
    })
  }
  componentDidUpdate() {
    if (this.props.isOptionsOpen) {
      this.menu.show()
    }
  }
  componentWillUnmount() {
    this.menu.destroy()
  }

  render() {
    const { i, opts, toggleMoreOptions } = this.props
    return (
      <div className={clsMenuAnchor}>
        <Icon i={i} onClick={toggleMoreOptions} />
        <div
          className={`${clsMenu} ${clsMenu}--open-from-top-right`}
          style={{ right: 0, top: 0 }}
          ref={n => (this.node = n)}>
          <List className={`${clsMenu}__items`} role="menu">
            {opts.map(l => <ListItem key={l.label} role="menuitem" tabIndex="0">{l.label}</ListItem>)}
          </List>
        </div>
      </div>
    )
  }
}

export default Menu
