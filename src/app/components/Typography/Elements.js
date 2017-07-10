import React from 'react'
import { clsTypography } from '../../constants/ui'

const Element = e => ({ className = '', children, ...rest }) =>
  <div className={`${className} ${clsTypography}--${e}`} {...rest}>
    {children}
  </div>

export const Display4 = Element('display4')
export const Display3 = Element('display3')
export const Display2 = Element('display2')
export const Display1 = Element('display1')
export const Headline = Element('headline')
export const Title = Element('title')
export const SubHeading2 = Element('subheading2')
export const SubHeading1 = Element('subheading1')
export const Body2 = Element('body2')
export const Body1 = Element('body1')
export const Caption = Element('caption')
