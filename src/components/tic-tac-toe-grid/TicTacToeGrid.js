import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Cell from './Cell'

export default function TicTacToeGrid() {
  const initialGrid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [grid, setGrid] = useState(initialGrid)
  const [turn, setTurn] = useState('X')

  const onClick = (location) => {
    const newGrid = [...grid]
    newGrid[location.rowIndex][location.colIndex] = turn
    setGrid(newGrid)
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.gridWrapper}>
        <div className={classes.gameGrid}>
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <Cell
                key={`${colIndex}-${rowIndex}`}
                cell={cell}
                onClick={() => onClick({ colIndex, rowIndex })}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    marginTop: '80px',
  },
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
