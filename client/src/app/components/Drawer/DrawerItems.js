import React from 'react'
import List, { ListItem, ListItemStart } from '../List'
import { clsTempDrawer } from '../../constants/ui'

const DrawerItem = ({ id, icon, label }) =>
  <ListItem href={'#'} className={id === 1 ? `${clsTempDrawer}--selected` : ''}>
    <ListItemStart icon={icon} />{label}
  </ListItem>

const DrawerItems = ({ items }) =>
  <List href>
    {items.map(i => <DrawerItem key={i.id} {...i} />)}
  </List>

export default DrawerItems
