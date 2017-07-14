import React from 'react'
import List, { ListItem, ListItemStart, ListItemText, ListItemTextSecondary } from '../List'
import { Mobile, YTImg } from '../Utils'

const Song = ({ id, title, subtitle, GetSong }) =>
  <ListItem
    href={`/play/${id}`}
    className={'chord-list-item'}
    onClick={() => {
      GetSong(id)
    }}>
    {!Mobile && <ListItemStart className={'chord-list-item-img'} img={YTImg(id)} />}
    <ListItemText>
      {title}
      {subtitle ? <ListItemTextSecondary>{subtitle}</ListItemTextSecondary> : ''}
    </ListItemText>
  </ListItem>

const SongsList = ({ songs = [], GetSong }) =>
  <List href twoline className={'chord-list'}>
    {Object.keys(songs).map(key =>
      <Song key={key} id={key} GetSong={GetSong} title={songs[key].title} subtitle={songs[key].subtitle} />
    )}
  </List>

export default SongsList