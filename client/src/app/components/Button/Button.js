import glamorous from 'glamorous'

const Button = glamorous.button(
  {
    fontSize: '0.938rem',
    cursor: 'pointer',
    padding: '.5rem 1rem',
    margin: '0rem .25rem',
    letterSpacing: '.2rem',
    lineHeight: '0.938rem',
    height: '2.5rem',
    background: 'transparent',
    transition: 'all .5s'
  },
  ({ theme, disabled, onDark }) => ({
    color: !disabled && (onDark ? theme.color.bg : theme.color.primary),
    border: onDark ? 'none' : `solid .1rem ${theme.color.bg}`,
    ':hover': {
      color: !disabled && theme.color.accent,
      border: !disabled && (onDark ? 'none' : `solid .1rem ${theme.color.compliment}`),
      cursor: disabled && 'not-allowed'
    }
  })
)

export default Button
