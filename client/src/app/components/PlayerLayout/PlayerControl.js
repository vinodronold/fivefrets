import React from 'react'
import glamorous from 'glamorous'
import Button from '../Button'
import { Plus, Minus } from '../Icons'
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
    <Button disabled={!IsPlaying(status)} onClick={() => PlayerStatusChanged(PLAYER_STATUS.ENDED)}>STOP</Button>
    <div>
      <Button
        onClick={() => {
          SetTranspose(-1)
        }}>
        <Minus height={'1rem'} />
      </Button>
      <Button
        onClick={() => {
          SetTranspose(-1 * transpose)
        }}>
        TRANSPOSE {transpose}
      </Button>
      <Button
        onClick={() => {
          SetTranspose(1)
        }}>
        <Plus height={'1rem'} />
      </Button>
    </div>
  </ControlContainer>

export default PlayerControl
