import React from 'react'
import Dialog from '@mui/material/Dialog'

export default function AddPopup({ type, open, setOpen }) {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      {type === 'class' && <div>Add New Class</div>}
    </Dialog>
  )
}
