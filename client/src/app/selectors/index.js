import { createSelector } from 'reselect'

const GetSongs = state => state.songs
const GetPlayer = state => state.player
const SelectSong = (songs, player) => songs[player.ytid]
const ActiveChord = player => player.activechord
const SelectedSong = createSelector(GetSongs, GetPlayer, SelectSong)
const GetActiveChord = createSelector(GetPlayer, ActiveChord)

export { SelectedSong, GetActiveChord }
