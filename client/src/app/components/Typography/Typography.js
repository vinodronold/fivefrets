import React from 'react'
import { clsTypography } from '../../constants/ui'

const Typography = ({ className, children, ...rest }) => (
  <div className={`${className} ${clsTypography}`} {...rest}> {children} </div>
)

export default Typography