import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, makeStyles } from '@material-ui/core'
import Loading from '../../util/loading'
import { Navigate } from 'react-router-dom'

function Login() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()
  const classes = useStyles()

  if (isLoading) {
    return <Loading />
  }

  if (isAuthenticated) {
    return <Navigate to={{ pathname: '/profile' }} />
  }

  return (
    <div className={classes.login}>
      <Button variant="contained" onClick={() => loginWithRedirect()}>
        Log In
      </Button>
    </div>
  )
}

export default Login

const useStyles = makeStyles(() => ({
  login: {
    marginTop: '80px',
    textAlign: 'center',
  },
}))
