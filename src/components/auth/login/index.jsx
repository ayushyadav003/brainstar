import React, { useState } from 'react'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { ArrowBack, Clear } from '@mui/icons-material'
import styles from '../auth.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import OTPInput from 'react-otp-input'

const LoginPopup = ({ loginStatus, setLoginStatus, setNewUser }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showOtpFields, setShowOtpFields] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [otp, setOtp] = useState('')

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked)
  }

  const handleSubmit = () => {
    setResetPassword(true)
  }

  const handleResetPassword = () => {
    setLoginStatus('login')
  }

  const handleSendOTP = () => {
    setShowOtpFields(true)
  }

  return (
    <div className={styles.loginModal}>
      {loginStatus === 'login' && (
        <div className={styles.loginForm}>
          <form action="">
            <div className={styles.heading}>
              <h2>
                Login <span style={{ color: 'rgb(179, 179, 179)' }}> / </span>
              </h2>
              <div className={styles.subheading}>
                <h2>Sign Up</h2>
              </div>
            </div>
            <div className={styles.fields}>
              <TextField
                label="Email/Mobile No."
                fullWidth
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '30px' },
                }}
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
            </div>
            <div className={styles.remember}>
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
            <div className={styles.bottom}>
              <Button
                variant="contained"
                color="primary"
                // onClick={()}
                sx={{ borderRadius: '30px', width: '120px' }}
              >
                Login
              </Button>
              <div className={styles.rightContent}>
                <p>
                  {"Don't have an aaccount? "}
                  <span
                    style={{
                      cursor: 'pointer',
                      fontSize: '15px',
                      color: 'blue',
                    }}
                    onClick={() => setNewUser(true)}
                  >
                    Create Account
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.icons}>
              <FacebookIcon />
              <TwitterIcon style={{ margin: '0 6px' }} />
              <InstagramIcon />
            </div>
          </form>
        </div>
      )}
      {loginStatus === 'forget' && (
        <div className={styles.loginForm}>
          <div className={styles.heading}>
            <IconButton onClick={() => setLoginStatus('login')}>
              <ArrowBack />
            </IconButton>
            <h2 style={{ margin: '0 1rem' }}>Forget Password</h2>
          </div>
          <div className={styles.step}>
            <span>1</span>
            <p>
              Please enter your registered email or phone number to get your OTP
            </p>
          </div>
          <div>
            <TextField
              label="Email/Mobile No."
              fullWidth
              margin="normal"
              InputProps={{
                sx: { borderRadius: '30px' },
              }}
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                // onClick={()}
                sx={{ borderRadius: '30px', width: '120px', marginTop: '8px' }}
              >
                Get OTP
              </Button>
            </div>

            <div className={styles.step}>
              <span>2</span>
              <p>Enter the your 4 digit OTP</p>
            </div>
            <OTPInput
              value={otp}
              onChange={setOtp}
              onInput={(e) => {
                let value = e.target.value
                value = value.replace(/[^0-9]/g, '')
                e.target.value = value
              }}
              renderSeparator={'-'}
              numInputs={4}
              containerStyle={{
                margin: '10px 0',
              }}
              inputStyle={{
                width: '55px',
                height: '50px',
                borderRadius: '10px',
                border: '2px solid rgba(0, 0, 0, 0.25)',
                background: '#fff',
                color: '#000',
                fontSize: '20px',
              }}
              renderInput={(props) => <input {...props} />}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setLoginStatus('reset')}
              sx={{
                borderRadius: '30px',
                width: '120px',
                margin: '7px auto auto auto',
              }}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {loginStatus === 'reset' && (
        <div className={styles.loginForm}>
          <div className={styles.heading}>
            <IconButton onClick={() => setLoginStatus('forget')}>
              <ArrowBack />
            </IconButton>
            <h2 style={{ margin: '0 1rem' }}>Reset Password</h2>
          </div>
          <div className={styles.step}>
            <span>3</span>
            <p>Please enter your new password</p>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <TextField
              label="New Password"
              type="password"
              fullWidth
              margin="normal"
              InputProps={{ sx: { borderRadius: '30px' } }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              InputProps={{
                sx: { borderRadius: '30px' },
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            // onClick={()}
            sx={{ borderRadius: '30px', width: '120px' }}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  )
}

export default LoginPopup
