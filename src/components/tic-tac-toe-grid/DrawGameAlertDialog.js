import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function DrawGameAlertDialog({
  turn,
  open,
  onRematchButtonClick,
  onNotYetButtonClick,
}) {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">It's a draw!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ready to play again?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onRematchButtonClick}>Rematch</Button>
        <Button onClick={onNotYetButtonClick} autoFocus>
          Not yet
        </Button>
      </DialogActions>
    </Dialog>
  )
}
