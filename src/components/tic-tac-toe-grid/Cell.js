import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

export default function Cell({ cell, onClick }) {
  const classes = useStyles()

  return (
    <div className={classes.cellStyle}>
      <Button type="button" className={classes.buttonStyle} onClick={onClick}>
        {cell}
      </Button>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  buttonStyle: {
    width: '100%',
    height: '100%',
  },
  cellStyle: {
    backgroundColor: '#fff',
    height: 150,
    width: 150,
  },
}))
