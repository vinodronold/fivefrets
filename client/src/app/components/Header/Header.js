import React from 'react'
import glamorous from 'glamorous'

const Header = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem',
    textAlign: 'center',
    height: '3rem'
  },
  ({ theme }) => ({
    backgroundColor: theme.color.primary,
    color: theme.color.bg
  })
)
const Brand = glamorous.span({
  fontSize: '1.25rem',
  letterSpacing: '.75rem',
  fontFeatureSettings: `"liga" 0`
})

export default () =>
  <Header>
    <Brand>fivefrets</Brand>
  </Header>