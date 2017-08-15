import glamorous from 'glamorous'

const Button = glamorous.button(
  {
    fontSize: '0.938rem',
    cursor: 'pointer',
    padding: '.5rem 1rem',
    margin: '0rem .25rem',
    letterSpacing: '.2rem',
    lineHeight: '1rem',
    maxHeight: '2rem',
    fontWeight: 500,
    transition: 'all .5s'
  },
  ({ theme }) => ({
    fontFamily: theme.fontFamily,
    background: theme.color.bg,
    color: theme.color.primary,
    border: `solid .1rem ${theme.color.bg}`,
    ':hover': {
      color: theme.color.accent,
      border: `solid .1rem ${theme.color.compliment}`
    }
  })
)

export default Button
