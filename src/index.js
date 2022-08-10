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

const useStyles = makeStyles(() => ({
  body: {
    font: '14px "Century Gothic", Futura, sans-serif',
    margin: '20px',
  },
}))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
