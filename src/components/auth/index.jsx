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
    <Dialog open={true} maxWidth={false}>
      {newUser ? (
        <div>
          <Signup onClose={onClose} onBack={() => setLoginStatus('login')} />
        </div>
      ) : (
        <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      )}
    </Dialog>
  )
}
