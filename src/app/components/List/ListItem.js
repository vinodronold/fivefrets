import React from 'react'
import { Link } from 'react-router-dom'
import { clsList } from '../../constants/ui'

const ListItem = ({ className, children, href, role, tabIndex, ...rest }) => {
  let _props = {}
  _props.className = `${className} ${clsList}-item`
  if (role) {
    _props.role = role
  }
  if (tabIndex) {
    _props.tabIndex = tabIndex
  }
  _props = { ..._props, ...rest }
  if (href) {
    return <Link to={href} {..._props}>{children}</Link>
  }
  return <li {..._props}>{children}</li>
}

export default ListItem
