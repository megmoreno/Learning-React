import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'

const Card = styled(Paper)(({ theme }) => ({
  ...theme.typography.fontWeightBold,
  textAlign: 'center',
  textTransform: 'uppercase',
}))

const projectValues = [
  {
    name: 'Tic-Tac-Toe',
    path: '/tic-tac-toe',
    dateCompleted: Date('Aug 5, 2022'),
  },
  {
    name: 'Authentication with Auth0',
    path: '/login',
    dateCompleted: Date('Aug 10, 2022'),
  },
  {
    name: 'Tic-Tac-Toe using CSS Grid',
    path: '/tic-tac-toe-grid',
    dateCompleted: Date('Aug 19, 2022'),
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
              <Card className={classes.card}>
                <CardActionArea
                  className={classes.cardActionArea}
                  component={Link}
                  to={project.path}
                >
                  <Typography>{project.name}</Typography>
                </CardActionArea>
              </Card>
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
  card: {
    '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
  },
  cardActionArea: {
    display: 'block',
    padding: theme.spacing(8),
  },
}))
