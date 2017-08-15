import React from 'react'
import SVGIcon from './Icons'

const Pause = ({ height }) =>
  <SVGIcon height={height} shapeRendering="crispEdges">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SVGIcon>

export default Pause
