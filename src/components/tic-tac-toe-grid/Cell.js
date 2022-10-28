import React from 'react'
import { makeStyles } from '@material-ui/core'

export default function Cell({ cell, onClick }) {
  const classes = useStyles()

  return (
    <div className={classes.cellStyle}>
      <button type="button" onClick={onClick}>
        {cell}
      </button>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  cellStyle: {
    backgroundColor: '#fff',
    height: 150,
    width: 150,
  },
}))
