import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import styles from '../auth.module.scss'

export default function index() {
  return (
    <div className={styles.signupModal}>
      <div className={styles.header}>
        <h1>Sign Up</h1>
        <Button variant="outlined" color="primary" onClick={onBack}>
          Back
        </Button>
      </div>
      <div className={styles.formAcc}>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '22px' }}>
          <TextField label="Full Name" size="medium" margin="normal" />
          <TextField label="Organisation" size="medium" margin="normal" />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <TextField label="Email" size="medium" margin="normal" />
          <TextField label="Mobile No." size="medium" margin="normal" />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <TextField
            label="Password"
            type="password"
            size="medium"
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            type="password"
            size="medium"
            margin="normal"
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleSignup}>
          Signup
        </Button>
      </div>
    </div>
  )
}
