import React from 'react'

export default () => (
  <svg
    height="110"
    version="1.1"
    width="220"
    style={{
      overflow: 'hidden',
      position: 'relative',
      margin: 'auto',
    }}>
    <defs />
    <rect x="10" y="10" width="200" height="50" rx="4" ry="4" fill="none" stroke="#ffffff" />
    <path
      fill="none"
      stroke="#ffffff"
      d="M10,20L210,20M10,30L210,30M10,40L210,40M10,50L210,50M55.64,10L55.64,60M93.14,10L93.14,60M133.14,10L133.14,60M175.32,10L175.32,60"
    />
    <circle cx="113.14" cy="35" r="1.5" fill="#ffffff" stroke="#ffffff" />
    <circle cx="191.82" cy="35" r="1.5" fill="#ffffff" stroke="#ffffff" />
    <text
      x="110"
      y="80"
      textAnchor="middle"
      fontFamily="&quot;Arial&quot;"
      fontSize="24px"
      stroke="#ffffff"
      fill="#ffffff"
      strokeWidth="1"
      strokeOpacity="0">
      <tspan dy="5.5">f i v e f r e t s</tspan>
    </text>
  </svg>
)
