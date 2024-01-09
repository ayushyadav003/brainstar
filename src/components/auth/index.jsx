import { useState } from 'react'
import { Clear } from '@mui/icons-material'
import { Dialog } from '@mui/material'
import Login from './login'
import styles from './auth.module.scss'

export default function AuthPopup() {
  const [loginStatus, setLoginStatus] = useState('login')
  const [newUser, setNewUser] = useState(false)
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} maxWidth={false}>
      <div className={styles.authModal}>
        <Clear className={styles.closeButton} onClick={handleClose} />
        <img
          src={
            'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg'
          }
          alt=""
        />
      </div>
      {newUser ? (
        ''
      ) : (
        <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      )}
    </Dialog>
  )
}
