import React from 'react'
import glamorous from 'glamorous'
import List, { ListItem, ListItemText, ListItemTextSecondary } from '../List'
import { Mobile, YTImg } from '../Utils'

const SongImg = glamorous.img({
  marginLeft: 0,
  marginRight: '2rem',
  height: 'auto',
  width: 'auto'
})

const Song = ({ id, title, subtitle, GetSong }) =>
  <ListItem
    to={`/play/${id}`}
    onClick={() => {
      GetSong(id)
    }}>
    {!Mobile && <SongImg src={YTImg(id)} />}
    <ListItemText>
      {title}
      {subtitle
        ? <ListItemTextSecondary>
            {subtitle}
          </ListItemTextSecondary>
        : ''}
    </ListItemText>
  </ListItem>

const SongsList = ({ songs = [], GetSong }) =>
  <List>
    {Object.keys(songs).map(key =>
      <Song key={key} id={key} GetSong={GetSong} title={songs[key].title} subtitle={songs[key].subtitle} />
    )}
  </List>

export default SongsList
