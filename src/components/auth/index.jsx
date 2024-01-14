import { useState } from 'react'
import { Clear } from '@mui/icons-material'
import { Dialog } from '@mui/material'
import Login from './login'
import Signup from './signup'
import styles from './auth.module.scss'

export default function AuthPopup() {
  const [loginStatus, setLoginStatus] = useState('login')
  const [newUser, setNewUser] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} maxWidth={false}>
        <div className={styles.authStyle}>
          <Clear
            onClick={() => setOpen(false)}
            className={styles.closeButton}
          />
          <div className={styles.authImg}>
            <img
              className={styles.topImage}
              src={'/images/authimg.png'}
              alt=""
            />
          </div>
          <div className={styles.authForm}>
            {newUser ? (
              <Signup setNewUser={setNewUser} />
            ) : (
              <Login
                loginStatus={loginStatus}
                setLoginStatus={setLoginStatus}
                setNewUser={setNewUser}
              />
            )}
          </div>
        </div>
      </Dialog>
    </div>
  )
}
