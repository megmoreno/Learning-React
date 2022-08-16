import React, { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@mui/material/IconButton'

function NavDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles()

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className={classes.list}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/projects" className={classes.link}>
                Projects
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
    </>
  )
}

export default NavDrawer

const useStyles = makeStyles((theme) => ({
  list: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontSize: '1.5rem',
  },
  icon: {
    color: 'white',
  },
}))
