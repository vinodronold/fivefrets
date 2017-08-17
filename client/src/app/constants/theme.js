const mobile = 768
const tablet = 992
const theme = {
  color: {
    primary: `#1A535C`,
    secondary: `#4ECDC4`,
    accent: `#EF476F`, //`#FF6B6B`,
    compliment: `#ffcb00`, //`#FFE66D`, //#ffcb00
    bg: `#FFF`
  },
  BaseFont: '16px',
  fontFamily: `Helvetica, Arial, sans-serif`,
  media: {
    mobile: `@media only screen and (max-width: ${mobile}px)`
  }
}

export default theme
export { mobile, tablet }
