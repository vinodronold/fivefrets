import React from 'react'
import { bool, node, string } from 'prop-types'
import { clsButton } from '../../constants/ui'
import cx from 'classnames'

const _propTypes = {
  accent: bool,
  children: node,
  className: string,
  compact: bool,
  dense: bool,
  href: string,
  primary: bool,
  raised: bool
}

const Button = ({ accent, children, className, compact, dense, href, primary, raised, ...otherProps }) => {
  const _cls = cx(
    clsButton,
    {
      [`${clsButton}--accent`]: accent,
      [`${clsButton}--compact`]: compact,
      [`${clsButton}--dense`]: dense,
      [`${clsButton}--primary`]: primary,
      [`${clsButton}--raised`]: raised
    },
    className
  )
  const _props = { ...otherProps, className: _cls}
  if (href) {
    return <a href={href} {..._props}>{children}</a>
  }
  return <button {..._props}>{children}</button>
}

Button.PropTypes = _propTypes

export default Button
