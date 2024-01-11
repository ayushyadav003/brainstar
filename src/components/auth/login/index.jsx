import React, { useState } from 'react'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Clear } from '@mui/icons-material'
import styles from '../auth.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import ForgetModal from './ForgetModal'

const LoginPopup = ({ open, onClose }) => {
  const [loginStatus, setLoginStatus] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = () => {
    onClose()
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked)
  }

  return (
    <div className="loginModal">
      <Clear className="closeButton" onClick={onClose} />
      <div className="main" style={{ display: 'flex' }}>
        <div className="topBar">
          <img className="topImage" src={topimage} alt="Login" />
        </div>
        {loginStatus === 'login' && (
          <div className="form1">
            <form>
              <h1>Login</h1>
              <TextField
                label="Email/Mobile No."
                fullWidth
                margin="normal"
                InputProps={{ sx: { borderRadius: '30px' } }}
              />
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '30px' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </span>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="remem">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
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

              <div className="log">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  sx={{ borderRadius: '30px', width: '120px' }}
                >
                  Login
                </Button>
              </div>
            </form>
            <div className="hirexl">
              <p>
                New to HireXL?{' '}
                <span
                  style={{ cursor: 'pointer', fontSize: '15px', color: 'blue' }}
                  onClick={() => setLoginStatus('signup')}
                >
                  Create Account
                </span>
              </p>
              <div className="icons">
                <FacebookIcon />
                <TwitterIcon style={{ margin: '0 6px' }} />
                <InstagramIcon />
              </div>
            </div>
          </div>
        )}
        {loginStatus === 'forget' && (
          <div>
            <ForgetModal
              onClose={onClose}
              onBack={() => setLoginStatus('login')}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginPopup
