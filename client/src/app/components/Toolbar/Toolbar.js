import React from 'react'
import glamorous from 'glamorous'
import Elevation from '../Paper/Elevation'
import Button from '../Button'

const BGColor = ({ theme }) => ({
  backgroundColor: theme.color.primary,
  color: theme.color.bg
})
const height = 3

const Header = glamorous.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem',
    textAlign: 'center',
    height: `${height}rem`,
    zIndex: 10,
    transition: 'all .5s'
  },
  BGColor,
  ({ isMenuOpen }) => isMenuOpen && Elevation(8)
)
const Brand = glamorous.span({
  fontSize: '1.25rem',
  letterSpacing: '.75rem',
  fontFeatureSettings: `"liga" 0`
})
const Controls = glamorous.span({
  marginLeft: 'auto'
})
const HeaderClearFix = glamorous.div({
  height: `${height}rem`
})

export default ({ isMenuOpen, ToggleMenu }) =>
  <div>
    <Header isMenuOpen={isMenuOpen}>
      <Brand>fivefrets</Brand>
      <Controls>
        <Button onDark onClick={ToggleMenu}>
          MENU
        </Button>
      </Controls>
    </Header>
    <HeaderClearFix />
  </div>

export { BGColor, height }
