import React from 'react'
import Dialog from '@mui/material/Dialog'
import styles from './addPopup.module.scss'
import { Autocomplete, Button, TextField } from '@mui/material'
import { Close } from '@mui/icons-material'

export default function AddPopup({ type, open, setOpen }) {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog onClose={handleClose} open={open} maxWidth={false}>
      <Close
        style={{
          position: 'absolute',
          right: '25px',
          top: '15px',
          cursor: 'pointer',
        }}
        onClick={handleClose}
      />
      {type === 'class' && (
        <div className={styles.popupBox}>
          <h2>Add New Class</h2>
          <TextField placeholder="Title" className={styles.field} fullWidth />
          <Autocomplete
            multiple
            id="tags-outlined"
            options={[]}
            fullWidth
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} placeholder="Add students" />
            )}
          />
          <Button variant="contained" className={styles.submitBtn}>
            Add
          </Button>
        </div>
      )}
    </Dialog>
  )
}
