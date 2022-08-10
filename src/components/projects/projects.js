import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'secondary',
  ...theme.typography.fontWeightBold,
  padding: theme.spacing(8),
  textAlign: 'center',
  textTransform: 'uppercase',
}))

const projectValues = [
  {
    name: 'Tic-Tac-Toe',
    path: '/tic-tac-toe',
  },
]

export default function Projects() {
  const classes = useStyles()

  return (
    <div className={classes.projects}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {projectValues.map((project, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Link to={project.path} className={classes.link}>
                  {project.name}
                </Link>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  projects: {
    margin: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '40px',
  },
}))
