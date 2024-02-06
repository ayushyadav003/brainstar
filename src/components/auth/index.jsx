import { useState } from 'react'
import { Clear } from '@mui/icons-material'
import { Dialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Login from './login'
import Signup from './signup'
import styles from './auth.module.scss'
import { handleLoginPopup } from '../../redux/features/userSlice'
import Image from 'next/image'

export default function AuthPopup() {
  const [loginStatus, setLoginStatus] = useState('login')
  const [newUser, setNewUser] = useState(false)
  const dispatch = useDispatch()

  const {
    user: { loginPopup, loader },
  } = useSelector(({ user }) => {
    return { user: user }
  })

  const handleClose = () => {
    dispatch(handleLoginPopup(false))
  }

  return (
    <div>
      <Dialog open={loginPopup} onClose={handleClose} maxWidth={false}>
        <div className={styles.authStyle}>
          <Clear onClick={handleClose} className={styles.closeButton} />
          <div className={styles.authImg}>
            <Image
              src={'/images/authimg.png'}
              alt=""
              fill
              objectFit="conatin"
            />
          </div>
          <div className={styles.authForm}>
            {newUser ? (
              <Signup setNewUser={setNewUser} loader={loader} />
            ) : (
              <Login
                loginStatus={loginStatus}
                loader={loader}
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
