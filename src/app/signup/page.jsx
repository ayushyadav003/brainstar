'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import styles from '../login/login.module.scss'

export default function Login() {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  })
  const { register, handleSubmit } = useForm()

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword({ ...showPassword, password: !showPassword.password })
    } else {
      setShowPassword({
        ...showPassword,
        confirmPassword: !showPassword.confirmPassword,
      })
    }
  }
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInner}>
        <img src="/images/authimage.png" alt="" />
      </div>
      <div className={styles.loginForm}>
        <h2 style={{ marginTop: '2rem' }}>Signup with Brainstar!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              {...register('fullName', {
                required: 'Full Name is required',
                maxLength: 20,
              })}
            />
            <TextField
              label="Institution Name"
              fullWidth
              margin="normal"
              {...register('institute', { required: true })}
            />
          </div>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            {...register('email', { required: true, maxLength: 20 })}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="normal"
            {...register('phone', {
              required: 'Email address is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <TextField
              label="Password"
              type={showPassword.password ? 'text' : 'password'}
              fullWidth
              margin="normal"
              {...register('password', {
                required: true,
                maxLength: 8,
                minLength: 4,
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => togglePasswordVisibility('password')}
                      edge="end"
                    >
                      {showPassword.password ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </span>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm Password"
              type={showPassword.confirmPassword ? 'text' : 'password'}
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() =>
                        togglePasswordVisibility('confirmPassword')
                      }
                      edge="end"
                    >
                      {showPassword.confirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </span>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <Button
            variant="contained"
            style={{ marginTop: '1rem' }}
            className={styles.loginBtn}
            type="submit"
          >
            Sign up
          </Button>
        </form>
        <div className={styles.inner}>
          Do not have an account? <button>Log in</button>
        </div>
      </div>
    </div>
  )
}
