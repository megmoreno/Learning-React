import React from 'react'
import { makeStyles } from '@material-ui/core'

export default function TicTacToeGrid() {
  const grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  const classes = useStyles()

  return (
    <div className={classes.gridWrapper}>
      <div className={classes.gameGrid}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell key={`${colIndex}-${rowIndex}`} cell={cell} />
          ))
        )}
      </div>
    </div>
  )
}

const cellStyle = {
  backgroundColor: '#fff',
  height: 75,
  width: 75,
}

function Cell({ cell }) {
  return <div style={cellStyle}>{cell}</div>
}

const useStyles = makeStyles(() => ({
  gridWrapper: {
    display: 'inline-block',
  },
  gameGrid: {
    backgroundColor: '#000',
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 2,
  },
}))
