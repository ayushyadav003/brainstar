import { useState } from 'react'
import {
  TextField,
  Button,
  FormHelperText,
  CircularProgress,
} from '@mui/material'
import styles from '../auth.module.scss'
import { apiConfig } from '../../../services/ApiConfig'
import { ApiWithOutToken } from '../../../services/ApiWithoutToken'

export default function Signup({ setNewUser }) {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    organisation: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    delete userData.confirmPassword
    const options = {
      url: apiConfig.register,
      method: 'POST',
      data: userData,
    }
    const data = await ApiWithOutToken(options)
    if (data) {
      localStorage.setItem('accessToken', data?.accessToken)
      localStorage.setItem('refreshToken', data?.refreshToken)
    }
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.signupModal}>
      <div className={styles.header}>
        <h1>
          Sign Up<span style={{ color: 'rgb(179, 179, 179)' }}> / </span>
        </h1>
        <div className={styles.subheading}>
          <h1>Login</h1>
        </div>
      </div>

      <form className={styles.signUpForm} onSubmit={handleRegister}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            required
            onChange={handleChange}
            size="medium"
            margin="normal"
            InputProps={{
              sx: { borderRadius: '30px' },
            }}
          />
          <TextField
            label="Institute"
            fullWidth
            name="organisation"
            required
            onChange={handleChange}
            size="medium"
            margin="normal"
            InputProps={{
              sx: { borderRadius: '30px' },
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <TextField
            InputProps={{
              sx: { borderRadius: '30px' },
            }}
            label="Email"
            name="email"
            required
            fullWidth
            onChange={handleChange}
            size="medium"
            margin="normal"
          />
          <TextField
            InputProps={{
              sx: { borderRadius: '30px' },
            }}
            label="Mobile No."
            name="mobile"
            required
            fullWidth
            onChange={handleChange}
            size="medium"
            margin="normal"
          />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <TextField
            InputProps={{
              sx: { borderRadius: '30px' },
            }}
            label="Password"
            type="password"
            name="password"
            required
            fullWidth
            onChange={handleChange}
            size="medium"
            margin="normal"
          />
          <TextField
            InputProps={{
              sx: { borderRadius: '30px' },
            }}
            label="Confirm Password"
            name="confirmPassword"
            required
            fullWidth
            onChange={handleChange}
            type="password"
            size="medium"
            margin="normal"
          />
        </div>
        <buttton className={'btn-primary'} type="submit">
          Signup
        </buttton>
      </form>
      <div className={styles.rightContent}>
        <p>
          {'Already have an account? '}
          <span
            style={{
              cursor: 'pointer',
              fontSize: '15px',
              color: 'blue',
            }}
            onClick={() => setNewUser(false)}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}
