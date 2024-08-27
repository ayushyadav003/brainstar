import React, { useEffect, useState } from 'react'
import { Dialog } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import styles from './auth.module.scss'
import SignupForm from './signup/SignupForm'
import LoginForm from './login/LoginForm'
import CommonButton from '../common/button/CommonButton'
import { handleAuthPopup } from '@/redux/features/userSlice'

export default function AuthPopup() {
  const dispatch = useDispatch()
  const { authPopup } = useSelector(({ user }) => ({
    authPopup: user.authPopup,
  }))

  const handleClose = () => {
    dispatch(handleAuthPopup(false))
  }

  return (
    <div>
      <Dialog open={authPopup} maxWidth={false} maxHeight={false}>
        <div className={styles.authWrapper}>
          <Close className={styles.closeIcon} onClick={handleClose} />
          <div className={styles.popupInnner}>
            <div className={styles.formWrapper}>
              <h2>Login or Signup</h2>
              {authPopup === 'signup' ? (
                <SignupForm handleClose={handleClose} />
              ) : (
                <LoginForm handleClose={handleClose} />
              )}
            </div>
            <div className={styles.imgWrapper}>
              <Image fill src="/auth.gif" alt="" />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
