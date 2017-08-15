import React from 'react'
// import glamorous from 'glamorous'

// const SVGIcon = glamorous.svg(
//   {
//     viewbox: '0 0 24 24',
//     margin: 'auto',
//     position: 'relative',
//     width: 'auto'
//   },
//   props => ({
//     height: props.height || '24',
//     shapeRendering: props.shapeRendering || 'auto',
//     fill: props.fill || 'currentcolor'
//   })
// )

const SVGIcon = ({ children, fill = 'currentcolor', height = '24', shapeRendering = 'auto', style, ...rest }) =>
  <svg
    viewBox="0 0 24 24"
    fill={fill}
    style={{
      position: 'relative',
      height: height,
      width: height,
      shapeRendering: shapeRendering,
      ...style
    }}
    {...rest}>
    {children}
  </svg>

export default SVGIcon
