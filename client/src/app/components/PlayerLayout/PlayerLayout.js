import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import cx from 'classnames'
import Button from '../Button'
import Paper from '../Paper'
import { Mobile } from '../Utils'
import YTPlayer from '../YTPlayer'
import Loader from '../Loader'
import { Headline, SubHeading1 } from '../Typography'
import { PLAYER_STATUS } from '../../constants'

const IsPlaying = status => status === PLAYER_STATUS.PLAYING
const GetTopPosition = c => {
  let itemsPerLine = Mobile ? 4 : 8
  let topRem = 4
  if (c <= (itemsPerLine * 2)) {
    return 0
  }
  return topRem * Math.floor((c - 1) / itemsPerLine) - topRem
  
}

const DisplayTitle = ({ title = '', subtitle = '' }) =>
  <div style={{ margin: '1rem', textAlign: 'center' }}>
    <Headline>
      {title}
    </Headline>
    <SubHeading1>
      {subtitle}
    </SubHeading1>
  </div>
const DisplayTranspose = ({ transpose = 0, SetTranspose }) =>
  <span>
    <Button
      primary
      compact
      style={{ color: 'black' }}
      onClick={() => {
        SetTranspose(-1)
      }}>
      -
    </Button>
    <Button disabled style={{ color: 'black' }}>
      TRANSPOSE {transpose}
    </Button>
    <Button
      primary
      compact
      style={{ color: 'black' }}
      onClick={() => {
        SetTranspose(1)
      }}>
      +
    </Button>
  </span>

const DisplayControl = ({ status, PlayerStatusChanged, transpose, SetTranspose }) =>
  <div className="player-control" style={{ margin: '1rem' }}>
    <Button
      primary
      compact
      onClick={
        IsPlaying(status)
          ? () => PlayerStatusChanged(PLAYER_STATUS.PAUSED)
          : () => PlayerStatusChanged(PLAYER_STATUS.PLAYING)
      }>
      {IsPlaying(status) ? 'PAUSE' : 'PLAY'}
    </Button>
    <Button primary compact onClick={() => PlayerStatusChanged(PLAYER_STATUS.ENDED)}>
      STOP
    </Button>
    <DisplayTranspose transpose={transpose} SetTranspose={SetTranspose} />
  </div>

const DisplayChord = ({ c, pulse = false, active = false }) =>
  <Paper className={cx('chords', { pulse: pulse, active: active })} transition>
    {c}
  </Paper>

const Layout = ({
  match,
  song,
  player,
  PlayerStatusChanged,
  MoveChordTo,
  MountYTPlayer,
  UnMountYTPlayer,
  SetTranspose
}) =>
  <div>
    <DisplayTitle title={song.title} subtitle={song.subtitle} />
    <DisplayControl
      status={player.status}
      PlayerStatusChanged={PlayerStatusChanged}
      transpose={player.transpose}
      SetTranspose={SetTranspose}
    />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '12rem'
      }}>
      <div className={'chordscontainer'} style={{ top: `-${GetTopPosition(player.activechord)}rem` }}>
        {Object.keys(song.chords).map(key =>
          <DisplayChord
            key={key}
            {...song.chords[key]}
            active={IsPlaying(player.status) && Number(key) === Number(player.activechord)}
            pulse={!IsPlaying(player.status) && Number(key) === Number(player.activechord)}
          />
        )}
      </div>
    </div>

    <YTPlayer MountYTPlayer={MountYTPlayer} UnMountYTPlayer={UnMountYTPlayer} ytid={player.ytid} />
  </div>

class PlayerLayout extends Component {
  componentDidMount() {
    const { match, player, GetSong } = this.props
    if (!player.ytid) {
      GetSong(match.params.id)
    }
  }

  render() {
    return this.props.song ? <Layout {...this.props} /> : <Loader />
  }
}

export default PlayerLayout
