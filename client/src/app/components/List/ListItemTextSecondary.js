import React from 'react'
import { clsList } from '../../constants/ui'

const ListItemTextSecondary = ({ className, children }) =>
  <span className={`${className} ${clsList}-item__text__secondary`}>{children}</span>

export default ListItemTextSecondary
