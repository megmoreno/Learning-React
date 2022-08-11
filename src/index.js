import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import Navbar from './components/navbar'
import {
  MuiThemeProvider,
  createTheme,
  makeStyles,
} from '@material-ui/core/styles'
import TicTacToeGame from './components/projects/tic-tac-toe/tic-tac-toe'
import Login from './components/projects/login/login'
import LoginSuccess from './components/projects/login/loginSuccess'
import LogoutSuccess from './components/projects/login/logoutSuccess'
import { Auth0Provider } from '@auth0/auth0-react'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/tic-tac-toe" element={<TicTacToeGame />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/login/success" element={<LoginSuccess />} />
            <Route exact path="/logout/success" element={<LogoutSuccess />} />
          </Routes>
        </Router>
      </MuiThemeProvider>
    )
  }
}

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3b4a60',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain="dev-9k4x-jd9.us.auth0.com"
    clientId="11jNty2pivoNPscWAmNpQhcTEcOGFlXx"
    redirectUri="http://localhost:3000/login/success"
  >
    <App />
  </Auth0Provider>
)
