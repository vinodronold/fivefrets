import glamorous from 'glamorous'
import { css } from 'glamor'
import Paper from '../Paper'
import Elevation from '../Paper/Elevation'
import chordName from '../../constants/chordName'

const ChordsContainer = glamorous.div({
  position: 'relative',
  overflow: 'hidden',
  minHeight: '12rem'
})

const ChordsWindow = glamorous.div(
  {
    padding: '.5rem',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(8, 1fr)',
    transition: 'top .5s'
  },
  ({ theme }) => ({
    [theme.media.mobile]: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  })
)

const bounce = css.keyframes({
  '0%': Elevation(2),
  '100%': Elevation(12)
})

const Chord = glamorous(Paper)(
  {
    padding: '1rem',
    lineHeight: '1rem',
    textAlign: 'center'
  },
  ({ active, pulse, theme, r, q, x }) => ({
    ':after': {
      content: chordName(r, q, x)
    },
    backgroundColor: active || pulse ? theme.color.secondary : theme.color.bg,
    animation: pulse ? `${bounce} 0.5s infinite ease-out alternate` : ''
  })
)

export { ChordsContainer, ChordsWindow, Chord }
