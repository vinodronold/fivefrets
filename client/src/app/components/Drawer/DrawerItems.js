import React from 'react'
import List, { ListItem } from '../List'
// import { clsTempDrawer } from '../../constants/ui'

const DrawerItem = ({ id, label }) =>
  <ListItem href={'#'} >
    {label}
  </ListItem>

const DrawerItems = ({ items }) =>
  <List href style={{textAlign: 'center'}}>
    {items.map(i => <DrawerItem key={i.id} {...i} />)}
  </List>

export default DrawerItems
