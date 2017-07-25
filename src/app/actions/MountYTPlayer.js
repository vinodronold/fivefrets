import { MOUNT_YT_PLAYER } from '../constants/actionTypes'
const MountYTPlayer = (id, ytid) => ({
  type: MOUNT_YT_PLAYER,
  id,
  ytid
})

export default MountYTPlayer
