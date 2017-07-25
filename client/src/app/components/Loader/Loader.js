import React from 'react'
import cx from 'classnames'
import { Caption } from '../Typography'
import { clsProgress } from '../../constants/ui'
const LoaderBar = ({ children, secondary }) =>
  <div
    className={cx(`${clsProgress}__bar`, {
      [`${clsProgress}__primary-bar`]: !secondary,
      [`${clsProgress}__secondary-bar`]: secondary
    })}>
    {children}
  </div>
const LoaderInner = () => <span className={`${clsProgress}__bar-inner`} />

const Loader = ({ className = '', ...rest }) =>
  <div style={{ position: 'relative', top: '12rem' }}>
    <Caption style={{ margin: '1rem', textAlign: 'center' }}>Loading . . .</Caption>
    <div role="progressbar" className={`${className} ${clsProgress} ${clsProgress}--indeterminate`} {...rest}>
      <LoaderBar>
        <LoaderInner />
      </LoaderBar>
      <LoaderBar secondary>
        <LoaderInner />
      </LoaderBar>
    </div>
  </div>

export default Loader
