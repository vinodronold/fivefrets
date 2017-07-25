import { all, fork } from 'redux-saga/effects'
import { ChordsSaga, MountYTPlayerSaga, YTPlayerStatusSaga, UnMountYTPlayerSaga } from './YTPlayerSaga'

export default function* rootSaga() {
  yield all([fork(ChordsSaga), fork(MountYTPlayerSaga), fork(YTPlayerStatusSaga), fork(UnMountYTPlayerSaga)])
}
