import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import store from './store'
import Header from './containers/Header'
import MenuSideBar from './containers/MenuSideBar'
import Typography from './components/Typography'

const App = () =>
  <Provider store={store}>
    <Router>
      <Typography>
        <MenuSideBar />
        <Header />
        <Routes />
      </Typography>
    </Router>
  </Provider>
  
export default App