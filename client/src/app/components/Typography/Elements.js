import glamorous from 'glamorous'

const getTypoCSS = (fs, fw, ls, lh) => ({
  fontSize: `${fs}rem`,
  fontWeight: fw,
  letterSpacing: typeof ls === 'number' ? `${ls}rem` : ls,
  lineHeight: `${lh}rem`,
  textDecoration: 'inherit',
  textTransform: 'inherit'
})

export const Display4 = glamorous.div(getTypoCSS(7, 300, -0.04, 7))
export const Display3 = glamorous.div(getTypoCSS(3, 5, 400, -0.02, 3.5))
export const Display2 = glamorous.div(getTypoCSS(2.813, 400, 'normal', 3))
export const Display1 = glamorous.div(getTypoCSS(2.125, 400, 'normal', 2.5))
export const Headline = glamorous.div(getTypoCSS(1.5, 400, 'normal', 2))
export const Title = glamorous.div(getTypoCSS(1.25, 500, 0.02, 2))
export const SubHeading2 = glamorous.div(getTypoCSS(1, 400, 0.04, 1.75))
export const SubHeading1 = glamorous.div(getTypoCSS(0.938, 400, 0.04, 1.5))
export const Body2 = glamorous.div(getTypoCSS(0.875, 500, 0.04, 1.5))
export const Body1 = glamorous.div(getTypoCSS(0.875, 400, 0.04, 1.25))
export const Caption = glamorous.div(getTypoCSS(0.75, 400, 0.08, 1.25))
