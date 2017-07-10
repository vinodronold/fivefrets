import React from 'react'
import Inbox from './Inbox'
import Menu from './Menu'
import MoreVert from './MoreVert'

export { Inbox, Menu, MoreVert }

const Icon = ({ className, i, onClick }) => {
  switch (i) {
    case 'inbox':
      return <Inbox className={className} onClick={onClick} />
    case 'menu':
      return <Menu className={className} onClick={onClick} />
    case 'more_vert':
      return <MoreVert className={className} onClick={onClick} />
    default:
      return <i>Icon</i>
  }
}

export default Icon
