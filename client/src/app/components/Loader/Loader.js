import React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'
// import cx from 'classnames'
// import { Caption } from '../Typography'
// import { clsProgress } from '../../constants/ui'
// const LoaderBar = ({ children, secondary }) =>
//   <div
//     className={cx(`${clsProgress}__bar`, {
//       [`${clsProgress}__primary-bar`]: !secondary,
//       [`${clsProgress}__secondary-bar`]: secondary
//     })}>
//     {children}
//   </div>
// const LoaderInner = () => <span className={`${clsProgress}__bar-inner`} />

// const Loader = ({ className = '', ...rest }) =>
//   <div style={{ position: 'relative', top: '12rem' }}>
//     <Caption style={{ margin: '1rem', textAlign: 'center' }}>Loading . . .</Caption>
//     <div role="progressbar" className={`${className} ${clsProgress} ${clsProgress}--indeterminate`} {...rest}>
//       <LoaderBar>
//         <LoaderInner />
//       </LoaderBar>
//       <LoaderBar secondary>
//         <LoaderInner />
//       </LoaderBar>
//     </div>
//   </div>
const bars = 5
const factor = 0.1
const loading = css.keyframes({
  '0%': { transform: `scaleY(0.75)` },
  '100%': { transform: `scaleY(1.25)` }
})

const LoaderContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center'
})
const Loader = glamorous.div(
  {
    textAlign: 'center',
    padding: '1rem',
    margin: '.25rem',
    transform: 'scaleY(0.75)'
  },
  ({ i, theme }) => ({
    backgroundColor: theme.color.secondary,
    animation: `${loading} ${bars * factor}s ${factor * i}s  infinite ease-in-out alternate`
  })
)
export default () =>
  <LoaderContainer>
    {Array(bars).fill(1).map((_, i) => <Loader key={i} i={i} />)}
  </LoaderContainer>
