import { all, fork } from 'redux-saga/effects'
import { MountYTPlayerSaga, YTPlayerStatusSaga, UnMountYTPlayerSaga } from './YTPlayerSaga'

export default function* rootSaga() {
  yield all([fork(MountYTPlayerSaga), fork(YTPlayerStatusSaga), fork(UnMountYTPlayerSaga)])
}
