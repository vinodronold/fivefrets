import React from 'react'
import { Mobile, IsPlaying } from '../Utils'
import { ChordsContainer, ChordsWindow, Chord } from './Chord'
import PlayerTitle from './PlayerTitle'
import PlayerControl from './PlayerControl'
import YTPlayer from '../YTPlayer'

const GetTopPosition = c => {
  let itemsPerLine = Mobile ? 4 : 8
  let topRem = 4
  if (c <= itemsPerLine * 2) {
    return 0
  }
  return topRem * Math.floor((c - 1) / itemsPerLine) - topRem
}

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
    <PlayerTitle title={song.title} subtitle={song.subtitle} />
    <PlayerControl
      status={player.status}
      PlayerStatusChanged={PlayerStatusChanged}
      transpose={player.transpose}
      SetTranspose={SetTranspose}
    />
    <ChordsContainer>
      <ChordsWindow style={{ top: `-${GetTopPosition(player.activechord)}rem` }}>
        {Object.keys(song.chords).map(key =>
          <Chord
            key={key}
            active={IsPlaying(player.status) && Number(key) === Number(player.activechord)}
            pulse={!IsPlaying(player.status) && Number(key) === Number(player.activechord)}>
            {song.chords[key].c}
          </Chord>
        )}
      </ChordsWindow>
    </ChordsContainer>
    <YTPlayer MountYTPlayer={MountYTPlayer} UnMountYTPlayer={UnMountYTPlayer} ytid={player.ytid} />
  </div>

export default Layout