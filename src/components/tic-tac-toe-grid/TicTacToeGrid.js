import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Cell from './Cell'
import WonGameAlertDialog from './WonGameAlertDialog'
import DrawGameAlertDialog from './DrawGameAlertDialog'

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
  const [wonGameAlertIsOpen, setWonGameAlertOpen] = useState(false)
  const [gameIsActive, setGameIsActive] = useState(true)
  const [drawGameAlertIsOpen, setDrawGameAlertIsOpen] = useState(false)

  const onCellClick = (location) => {
    if (grid[location.rowIndex][location.colIndex] !== null) return

    const newGrid = [...grid]
    newGrid[location.rowIndex][location.colIndex] = turn
    setGrid(newGrid)

    const newMoveCount = moveCount + 1
    setMoveCount(newMoveCount)
    const checkForWin = checkForCurrentTurnWin(location)
    setHasWonGame(checkForWin)
    if (checkForWin === false) {
      setTurn(turn === 'X' ? 'O' : 'X')
    }
    if (checkForWin) {
      setWonGameAlertOpen(true)
    } else if (newMoveCount === 9) {
      setDrawGameAlertIsOpen(true)
    }
  }

  const resetGame = () => {
    setWonGameAlertOpen(false)
    setDrawGameAlertIsOpen(false)
    setGrid(initialGrid)
    setMoveCount(0)
    setHasWonGame(false)
    setGameIsActive(true)
    setTurn('X')
  }

  const onNotYetButtonClick = () => {
    setWonGameAlertOpen(false)
    setDrawGameAlertIsOpen(false)
    setGameIsActive(false)
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
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Tic-Tac-Toe</h1>
          <h3>Next up: {turn}</h3>
          <Button type="button" variant="outlined" onClick={resetGame}>
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
                  onClick={() => onCellClick({ colIndex, rowIndex })}
                  disabled={!gameIsActive}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <WonGameAlertDialog
        open={wonGameAlertIsOpen}
        turn={turn}
        onRematchButtonClick={resetGame}
        onNotYetButtonClick={onNotYetButtonClick}
      />
      <DrawGameAlertDialog
        open={drawGameAlertIsOpen}
        onRematchButtonClick={resetGame}
        onNotYetButtonClick={onNotYetButtonClick}
      />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '150px',
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
