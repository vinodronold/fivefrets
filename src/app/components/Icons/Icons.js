import React from 'react'

const Icon = size => path => ({ className, onClick }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    className={`${className} icon`}
    onClick={onClick}>
    <path d={path} />
  </svg>

const Icon24 = Icon('24')
const Icon36 = Icon('36')

export default Icon
export { Icon24, Icon36 }
