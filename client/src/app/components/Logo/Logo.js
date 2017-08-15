import React from 'react'

export default ({ height=110 }) =>
  <svg viewBox="0 0 220 110" style={{ margin: 'auto', position: 'relative', height: height, width: 'auto' }}>
    <rect x="10" y="10" width="200" height="50" rx="4" ry="4" style={{ fill: 'none', stroke: '#076969' }} />
    <path
      d="M10 20h200M10 30h200M10 40h200M10 50h200M55.6 10v50m37.5-50v50m40-50v50m42.2-50v50"
      style={{ fill: 'none', stroke: '#076969' }}
    />
    <circle cx="113.1" cy="35" r="1.5" style={{ fill: 'none', stroke: '#076969' }} />
    <circle cx="191.8" cy="35" r="1.5" style={{ fill: 'none', stroke: '#076969' }} />
    <text x="110" y="80" style={{ fontFamily: 'Arial', fontSize: '1.5rem', fill: '#076969', textAnchor: 'middle' }}>
      <tspan dy="5.5"> f i v e f r e t s</tspan>
    </text>
  </svg>
