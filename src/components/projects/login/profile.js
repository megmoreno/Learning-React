import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import { Card, makeStyles } from '@material-ui/core'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import LogoutButton from './logout'
import Loading from '../../util/loading'

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const classes = useStyles()

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />
  }

  return (
    isAuthenticated && (
      <div className={classes.profile}>
        <Card className={classes.profileCard}>
          <CardMedia component="img" image={user.picture} alt={user.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </CardContent>
        </Card>
        <LogoutButton />
      </div>
    )
  )
}

export default Profile

const useStyles = makeStyles(() => ({
  profile: {
    textAlign: 'center',
  },
  profileCard: {
    marginTop: '50px',
    marginBottom: '50px',
    maxWidth: '300px',
    margin: 'auto',
    textAlign: 'center',
  },
}))
