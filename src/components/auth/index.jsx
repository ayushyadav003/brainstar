import { Dialog } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function AuthPopup() {
  const { authPopup } = useSelector(({ user }) => ({
    authPopup: user.authPopup,
  }))

  console.log('authPopup', authPopup)

  const handleClose = () => {}

  return (
    <div>
      <Dialog onClose={handleClose} open={authPopup}>
        hi
      </Dialog>
    </div>
  )
}
