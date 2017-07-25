import React from 'react'
import cx from 'classnames'
import { clsElevation } from '../../constants/ui'
const Paper = ({ children, className, style, transition, z = 4 }) =>
  <div
    className={cx(className, { [`${clsElevation}-transition`]: transition }, `${clsElevation}--z${z}`)}
    style={style}>
    {children}
  </div>
  
export default Paper
