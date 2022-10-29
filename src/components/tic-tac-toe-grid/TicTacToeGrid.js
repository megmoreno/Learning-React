import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Cell from './Cell'

export default function TicTacToeGrid() {
  const initialGrid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [grid, setGrid] = useState(initialGrid)
  const [turn, setTurn] = useState('X')
  const [moveCount, setMoveCount] = useState(0)
  const [hasWonGame, setHasWonGame] = useState(false)

  if (hasWonGame) {
    alert(turn + ' wins!')
    setMoveCount(0)
  } else if (moveCount === 9) {
    alert("It's a draw")
    setMoveCount(0)
  }

  const onClick = (location) => {
    if (grid[location.rowIndex][location.colIndex] !== null) return
    const newGrid = [...grid]
    newGrid[location.rowIndex][location.colIndex] = turn
    setGrid(newGrid)
    setMoveCount((prev) => prev + 1)
    setHasWonGame(checkForCurrentTurnWin(location))
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  const classes = useStyles()

  const checkForCurrentTurnWin = (location) => {
    //check row
    let hasWonRow = grid[location.rowIndex].every((value) => {
      if (value !== turn) {
        return false
      }
      return true
    })
    if (hasWonRow) return true

    //check column
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      if (grid[rowIndex][location.colIndex] !== turn) {
        break
      } else if (rowIndex == 2) {
        return true
      }
    }

    //check diagonals
    if (grid[0][0] == turn && grid[1][1] == turn && grid[2][2] == turn)
      return true
    if (grid[0][2] == turn && grid[1][1] == turn && grid[2][0] == turn)
      return true

    return false
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Tic-Tac-Toe</h1>
        <h3>Next up: {turn}</h3>
        <Button
          type="button"
          variant="outlined"
          onClick={() => {
            setGrid(initialGrid)
            setMoveCount(0)
          }}
        >
          Reset Game
        </Button>
      </div>
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
  header: {
    marginBottom: '15px',
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
