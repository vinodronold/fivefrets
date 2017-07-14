import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import cx from 'classnames'
import Button from '../Button'
import Paper from '../Paper'
import YTPlayer from '../YTPlayer'
import Loader from '../Loader'
import { Headline, SubHeading1 } from '../Typography'
import { PLAYER_STATUS } from '../../constants'

const IsPlaying = status => status === PLAYER_STATUS.PLAYING

const DisplayTitle = ({ title = '', subtitle = '' }) =>
  <div style={{ margin: '1rem', textAlign: 'center' }}>
    <Headline>
      {title}
    </Headline>
    <SubHeading1>
      {subtitle}
    </SubHeading1>
  </div>

const DisplayControl = ({ status, PlayerStatusChanged }) =>
  <div style={{ textAlign: 'center' }}>
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
  </div>

const DisplayChord = ({ c, pulse = false, active = false }) =>
  <Paper className={cx('chords', { pulse: pulse, active: active })} transition>
    {c}
  </Paper>

const Layout = ({ match, song, player, PlayerStatusChanged, MoveToNextChord }) =>
  <div>
    <DisplayTitle title={song.title} subtitle={song.subtitle} />
    <DisplayControl status={player.status} PlayerStatusChanged={PlayerStatusChanged} />
    <div className={'chordscontainer'}>
      {Object.keys(song.chords).map(key =>
        <DisplayChord
          key={key}
          {...song.chords[key]}
          active={IsPlaying(player.status) && Number(key) === Number(player.activechord)}
          pulse={!IsPlaying(player.status) && Number(key) === Number(player.activechord)}
        />
      )}
    </div>
    <YTPlayer
      id={match.params.id}
      chords={song.chords}
      {...player}
      PlayerStatusChanged={PlayerStatusChanged}
      MoveToNextChord={MoveToNextChord}
    />
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
