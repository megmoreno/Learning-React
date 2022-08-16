import { CircularProgress, makeStyles } from '@material-ui/core'
import React from 'react'

function Loading() {
  const classes = useStyles()

  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  )
}

export default Loading

const useStyles = makeStyles(() => ({
  loading: {
    marginTop: '130px',
    textAlign: 'center',
  },
}))
