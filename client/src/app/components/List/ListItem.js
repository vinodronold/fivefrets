import glamorous from 'glamorous'
import Elevation from '../Paper/Elevation'
import { Link } from 'react-router-dom'

const ListItem = glamorous(Link)(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'inherit',
    textDecoration: 'none',
    height: 'auto',
    padding: '1rem',
    margin: '1rem',
    cursor: 'pointer',
    ':hover': Elevation(8),
    ':active': Elevation(4)
  },
  Elevation(2)
)

export default ListItem
