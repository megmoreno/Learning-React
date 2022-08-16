import React from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavDrawer from './navDrawer'

function Navbar() {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Link to="/" className={classes.logo}>
          MM
        </Link>
        {isMobile ? (
          <NavDrawer />
        ) : (
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
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: 'flex',
  },
  logo: {
    textDecoration: 'none',
    color: 'white',
    fontSize: theme.spacing(1.75),
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: theme.spacing(1.25),
    marginLeft: theme.spacing(7),
    '&:hover': {
      borderBottom: '1px solid white',
    },
  },
}))
