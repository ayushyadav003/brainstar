import { useState } from 'react'
import { Clear } from '@mui/icons-material'
import { Dialog } from '@mui/material'
import Login from './login'
import styles from './auth.module.scss'

export default function AuthPopup() {
  const [loginStatus, setLoginStatus] = useState('login')
  const [newUser, setNewUser] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={true} maxWidth={false}>
      <div className={styles.authModal}>
        <Clear className={styles.closeButton} onClick={handleClose} />
        <img
          src={""}
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
