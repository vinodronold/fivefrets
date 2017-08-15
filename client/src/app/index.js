import React from 'react'
import { css } from 'glamor'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'glamorous'
import theme from './constants/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Routes from './Routes'
import store from './store'

css.global('html, body', {
  fontSize: theme.BaseFont,
  fontFamily: theme.fontFamily,
  backgroundColor: theme.color.bg,
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
})

const App = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
    </ThemeProvider>
  </Provider>

export default App
