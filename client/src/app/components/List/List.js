import React from 'react'
import cx from 'classnames'
import { clsList } from '../../constants/ui'

const List = ({ avatar, children, className, href, twoline, role, ...rest }) => {
  let _props = {}
  _props.className = cx(className, clsList, { [`${clsList}--avatar-list`]: avatar, [`${clsList}--two-line`]: twoline })
  if (role) {
    _props.role = role
  }
  if (href) {
    return <div {..._props} {...rest}>{children}</div>
  }
  return <ul {..._props} {...rest}>{children}</ul>
}

export default List
