import { useState } from 'react'
import {
  Facebook,
  Twitter,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import Instagram from '@mui/icons-material/Instagram'
import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Link,
  TextField,
} from '@mui/material'
import OTPInput from 'react-otp-input'
import styles from '../auth.module.scss'
import CommonButton from '@/components/common/button/CommonButton'

export default function Login({ onClose, loginStatus, setLoginStatus }) {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [otpStatus, setOtpStatus] = useState(false)

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
    <div>
      {loginStatus === 'login' && (
        <div className={styles.loginWrapper}>
          <form>
            <TextField label="Email/Mobile No." fullWidth margin="normal" />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </span>
                  </InputAdornment>
                ),
              }}
            />
            <div className={styles.remmember}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                }
                label="Remember me"
              />
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => setLoginStatus('forget')}
              >
                Forgot Password?
              </span>
            </div>
            <div className={styles.loginBtn}>
              <CommonButton text={'Submit'} onclick={() => ''} />
            </div>
          </form>
          <div className={styles.createAccount}>
            <p>
              Do not have an account? <span>Create Account</span>
            </p>
            <div className={styles.icons}>
              <Facebook />
              <Twitter style={{ margin: '0 6px' }} />
              <Instagram />
            </div>
          </div>
        </div>
      )}
      {loginStatus === 'forget' && (
        <div className="forgetModal">
          <div className="emailFields">
            <TextField label="Password" fullWidth margin="normal" />
            <Button variant="contained" onClick={() => setOtpStatus(true)}>
              Send OTP
            </Button>
          </div>
          {otpStatus && (
            <div className="otpWrapper">
              <OTPInput
                value={otp}
                onChange={setOtp}
                onInput={(e) => {
                  let value = e.target.value
                  value = value.replace(/[^0-9]/g, '')

                  e.target.value = value
                }}
                numInputs={4}
                renderSeparator={'-'}
                containerStyle={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  margin: '0px 10px',
                }}
                inputStyle={{
                  minWidth: '55px',
                  height: '55px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.25)',
                }}
                renderInput={(props) => (
                  <input
                    style={{
                      width: '40px',
                      height: '40px',
                      fontSize: '16px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      margin: '4px',
                      textAlign: 'center',
                    }}
                    // onKeyPress={handleKeyPress}
                    {...props}
                  />
                )}
              />
              <Button variant="contained">Submit</Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
