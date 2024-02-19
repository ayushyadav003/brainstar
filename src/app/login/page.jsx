'use client'
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  InputAdornment,
  TextField,
} from '@mui/material'
import styles from './login.module.scss'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import Link from 'next/link'
import { apiConfig } from '@/services/ApiConfig'
import { ApiWithOutToken } from '@/services/ApiWithoutToken'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [user, setUser] = useState({ email: '', password: '', role: 'Admin' })
  const router = useRouter()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleRememberMe = () => {}

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    const apiOptions = {
      url: apiConfig.login,
      method: 'POST',
      data: user,
    }
    const response = await ApiWithOutToken(apiOptions)
    if (response?.data?.statusCode === 200) {
      const obj = response.data.data
      delete obj.password
      delete obj._V
      const jsonString = JSON.stringify(obj)
      localStorage.setItem('currentUser', jsonString)
      toast.success(response.data.Message)
      router.push('/')
    } else {
      toast.error(response?.data.message)
    }

    setLoading(false)
  }

  console.log(user)

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInner}>
        <img src="/images/authimage.png" alt="" />
      </div>
      <div className={styles.loginForm}>
        <h2>Welcome to Brainstar!</h2>
        <form onSubmit={handleSubmitForm}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            name="email"
            required
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            name="password"
            required
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
              // onClick={() => setLoginStatus("forget")}
            >
              Forgot Password?
            </span>
          </div>
          <Button
            variant="contained"
            style={{ marginTop: '1rem' }}
            className={styles.loginBtn}
            type="submit"
            disabled={loading}
          >
            Sign up
            {loading && (
              <CircularProgress size={30} style={{ marginLeft: '1rem' }} />
            )}
          </Button>
        </form>
        <div className={styles.inner}>
          Do not have an account? <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  )
}
