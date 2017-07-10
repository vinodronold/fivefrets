import { createSelector } from 'reselect'

const GetSongs = state => state.songs
const GetPlayer = state => state.player
const SelectSong = (songs, player) => songs[player.ytid]
const SelectedSong = createSelector(GetSongs, GetPlayer, SelectSong)

export { SelectedSong }
