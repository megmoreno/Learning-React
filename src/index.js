import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import Navbar from './components/navbar/navbar'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import TicTacToeGame from './components/projects/tic-tac-toe/tic-tac-toe'
import Login from './components/projects/login/login'
import { Auth0Provider } from '@auth0/auth0-react'
import Profile from './components/projects/login/profile'
import TicTacToeGrid from './components/tic-tac-toe-grid/TicTacToeGrid'

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
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/tic-tac-toe-grid" element={<TicTacToeGrid />} />
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
  spacing: (factor) => `${factor}rem`,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain="dev-9k4x-jd9.us.auth0.com"
    clientId="11jNty2pivoNPscWAmNpQhcTEcOGFlXx"
    redirectUri="http://localhost:3000/profile"
  >
    <App />
  </Auth0Provider>
)
