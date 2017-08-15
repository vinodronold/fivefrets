import React from 'react'
import { Headline, SubHeading1 } from '../Typography'

const PlayerTitle = ({ title = '', subtitle = '' }) =>
  <div style={{ margin: '1rem', textAlign: 'center' }}>
    <Headline>
      {title}
    </Headline>
    <SubHeading1>
      {subtitle}
    </SubHeading1>
  </div>

export default PlayerTitle