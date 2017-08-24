import React from 'react'
import glamorous from 'glamorous'
import Elevation from '../Paper/Elevation'
import Button from '../Button'
import { BGColor, height } from '../Toolbar/'

const Menu = glamorous.div(
  {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: `${height + 2}rem 1rem 1rem`,
    alignItems: 'center',
    margin: '0 .25rem',
    textAlign: 'center',
    flexDirection: 'column',
    zIndex: 9,
    transition: 'all .5s'
  },
  BGColor,
  Elevation(2),
  ({ isMenuOpen }) => ({
    transform: `translateY(${isMenuOpen ? '0' : '-10rem'})`
  })
)

export default ({ isMenuOpen }) =>
  <Menu isMenuOpen={isMenuOpen}>
    <Button onDark>Home</Button>
    <Button onDark>Browse</Button>
    <Button onDark>Login</Button>
  </Menu>
