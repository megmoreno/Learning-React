import React from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

function Navbar() {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Link to="/" className={classes.logo}>
          MM
        </Link>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/projects" className={classes.link}>
            Projects
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: 'flex',
  },
  logo: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '28px',
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(20),
    '&:hover': {
      borderBottom: '1px solid white',
    },
  },
}))
