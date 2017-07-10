import React from 'react'
import List, { ListItem, ListItemStart, ListItemText, ListItemTextSecondary } from '../List'
import { Mobile, YTImg } from '../Utils'

const Song = ({ id, title, subtitle, SongSelected }) =>
  <ListItem
    href={`/play/${id}`}
    className={'chord-list-item'}
    onClick={() => {
      SongSelected(id)
    }}>
    {!Mobile && <ListItemStart className={'chord-list-item-img'} img={YTImg(id)} />}
    <ListItemText>
      {title}
      {subtitle ? <ListItemTextSecondary>{subtitle}</ListItemTextSecondary> : ''}
    </ListItemText>
  </ListItem>

const SongsList = ({ songs = [], SongSelected }) =>
  <List href twoline className={'chord-list'}>
    {Object.keys(songs).map(key =>
      <Song key={key} id={key} SongSelected={SongSelected} title={songs[key].title} subtitle={songs[key].subtitle} />
    )}
  </List>

export default SongsList
