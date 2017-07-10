import React from 'react'
import { clsList } from '../../constants/ui'

const ListItemText = ({ className = '', children }) =>
  <span className={`${className} ${clsList}-item__text`}>{children}</span>

export default ListItemText
