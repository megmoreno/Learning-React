import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core'

function LogoutButton() {
  const { logout } = useAuth0()

  return (
    <Button
      variant="outlined"
      onClick={() => logout({ returnTo: 'http://localhost:3000/login' })}
    >
      Log Out
    </Button>
  )
}

export default LogoutButton
