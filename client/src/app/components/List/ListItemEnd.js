import React from 'react'
import { clsList } from '../../constants/ui'

const ListItemEnd = ({ className, children, icon, href }) => {
  let _props = {}
  _props.className = `${className} ${clsList}-item__end-detail`
  if (href) {
    return (
      <a href={href} {..._props}>
        {icon}
      </a>
    )
  }
  return (
    <i {..._props}>
      {icon}
    </i>
  )
}

export default ListItemEnd
