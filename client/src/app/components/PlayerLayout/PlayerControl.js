import React from 'react'
import glamorous from 'glamorous'
import Button from '../Button'
import { Plus, Minus } from '../Icons'
import { SubHeading1 } from '../Typography'
import { PLAYER_STATUS } from '../../constants'
import { IsPlaying } from '../Utils'

const ControlContainer = glamorous.div({
  margin: '1rem',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center'
})

const PlayerControl = ({ status, PlayerStatusChanged, transpose, SetTranspose }) =>
  <ControlContainer>
    <Button
      onClick={
        IsPlaying(status)
          ? () => PlayerStatusChanged(PLAYER_STATUS.PAUSED)
          : () => PlayerStatusChanged(PLAYER_STATUS.PLAYING)
      }>
      {IsPlaying(status) ? 'PAUSE' : 'PLAY'}
    </Button>
    <Button onClick={() => PlayerStatusChanged(PLAYER_STATUS.ENDED)}>STOP</Button>
    <Button
      onClick={() => {
        SetTranspose(-1)
      }}>
      <Minus height={'1rem'} />
    </Button>
    <SubHeading1 style={{ display: 'inline', margin: '.25rem' }}>
      TRANSPOSE {transpose}
    </SubHeading1>
    <Button
      onClick={() => {
        SetTranspose(1)
      }}>
      <Plus height={'1rem'} />
    </Button>
  </ControlContainer>

export default PlayerControl
