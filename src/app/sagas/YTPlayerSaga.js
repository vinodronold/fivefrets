import YouTubePlayer from 'youtube-player'
import { takeLatest, call, take, put } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { PlayerStatusChanged } from '../actions'
import { YT_PLAYER_STATUS_CHANGED, MOUNT_YT_PLAYER, UNMOUNT_YT_PLAYER } from '../constants/actionTypes'
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
      break
    default:
  }
}
const YTPlayerStatusSaga = function*() {
  yield takeLatest(YT_PLAYER_STATUS_CHANGED, YTPlayerStatus)
}

const UnMountYTPlayer = function*({ id }) {
  yield call(_player_events.close)
  yield call(_player.destroy)
}
const UnMountYTPlayerSaga = function*() {
  yield takeLatest(UNMOUNT_YT_PLAYER, UnMountYTPlayer)
}

export { MountYTPlayerSaga, YTPlayerStatusSaga, UnMountYTPlayerSaga }
