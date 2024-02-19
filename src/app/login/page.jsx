'use client'
import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from '@mui/material'
import styles from './login.module.scss'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleChange = () => {}
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleRememberMe = () => {}

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInner}>
        <img src="/images/authimage.png" alt="" />
      </div>
      <div className={styles.loginForm}>
        <h2>Welcome to Brainstar!</h2>
        <form>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            name="email"
            onChange={handleChange}
            InputProps={{}}
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            name="password"
            margin="normal"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </span>
                </InputAdornment>
              ),
            }}
          />
          <div className={styles.remember}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMe}
                  sx={{ fontSize: '1px' }}
                />
              }
              label={<span style={{ fontSize: '14px' }}>Remember me</span>}
            />
            <span
              style={{ cursor: 'pointer', color: 'blue' }}
              onClick={() => setLoginStatus('forget')}
            >
              Forgot Password?
            </span>
          </div>
          <Button variant="contained" className={styles.loginBtn}>
            Login
          </Button>
        </form>
        <div className={styles.inner}>
          Do not have an account? <button>Sign up</button>
        </div>
      </div>
    </div>
  )
}
