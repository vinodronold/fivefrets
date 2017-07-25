import YouTubePlayer from 'youtube-player'
import { takeLatest, select, call, take, put, race } from 'redux-saga/effects'
import { delay, eventChannel } from 'redux-saga'
import { SelectedSong, GetActiveChord } from '../selectors'
import { PlayerStatusChanged, MoveChordTo } from '../actions'
import { GET_SONG, YT_PLAYER_STATUS_CHANGED, MOUNT_YT_PLAYER, UNMOUNT_YT_PLAYER } from '../constants/actionTypes'
import { PLAYER_STATUS } from '../constants'

var _player, _player_events, _player_status

const PlayerStateChangeChannel = () => {
  return eventChannel(emit => {
    let _emitted_player_events = _player.on('stateChange', ({ data }) => {
      if (!(_player_status === data)) {
        emit(data)
      }
    })
    return () => {
      _player.off(_emitted_player_events)
    }
  })
}

const MountYTPlayer = function*({ id, ytid }) {
  _player = yield call(YouTubePlayer, id, {
    videoId: ytid,
    height: 'auto',
    width: 'auto',
    playerVars: { playsinline: 1, showinfo: 0, fs: 0, controls: 0 }
  })
  _player_events = yield call(PlayerStateChangeChannel)
  while (true) {
    let status = yield take(_player_events)
    yield put(PlayerStatusChanged(status))
  }
}
const MountYTPlayerSaga = function*() {
  yield takeLatest(MOUNT_YT_PLAYER, MountYTPlayer)
}

const YTPlayerStatus = function*({ status }) {
  _player_status = status
  switch (status) {
    case PLAYER_STATUS.PAUSED:
      yield _player.pauseVideo()
      break
    case PLAYER_STATUS.PLAYING:
      yield _player.playVideo()
      break
    case PLAYER_STATUS.ENDED:
      yield _player.stopVideo()
      yield put(MoveChordTo(1))
      break
    default:
  }
}
const YTPlayerStatusSaga = function*() {
  yield takeLatest(YT_PLAYER_STATUS_CHANGED, YTPlayerStatus)
}

const UnMountYTPlayer = function*() {
  yield call(_player_events.close)
  yield call(_player.destroy)
}
const UnMountYTPlayerSaga = function*() {
  yield takeLatest(UNMOUNT_YT_PLAYER, UnMountYTPlayer)
}

const Chords = function*({ id }) {
  let _song = yield select(SelectedSong)
  let _max = Object.keys(_song.chords).length
  console.log(_max, _song)
  while (true) {
    let { status } = yield take(YT_PLAYER_STATUS_CHANGED)

    if (status === PLAYER_STATUS.PLAYING) {
      while (true) {
        let active_chord = yield select(GetActiveChord)
        let { yt_status } = yield race({
          yt_status: take(YT_PLAYER_STATUS_CHANGED),
          timeout: call(delay, 50)
        })
        if (yt_status || active_chord === _max) {
          break
        }
        let next_move = _song.chords[active_chord + 1].t
        let curr_time = yield call(_player.getCurrentTime)
        if (curr_time > next_move) {
          yield put(MoveChordTo(active_chord + 1))
        }
      }
    }
  }
}
const ChordsSaga = function*() {
  yield takeLatest(GET_SONG, Chords)
}

export { ChordsSaga, MountYTPlayerSaga, YTPlayerStatusSaga, UnMountYTPlayerSaga }
