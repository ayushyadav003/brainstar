import React, { useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from '../auth.module.scss'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function SignupForm() {
  const [showPasswrod, setShowPassword] = useState({
    password: false,
    confirm: false,
  })

  const validateSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    instituteName: Yup.string().required('Institute name is required'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('This field is required'),
    phoneNumber: Yup.string()
      .required('This field is required')
      .matches(/^\d+$/, 'Phone number must contain only digits')
      .min(10, 'Phone number cannot be less than 10 digits')
      .max(10, 'Phone number cannot be more than 10 digits'),
    password: Yup.string()
      .required('This field is required')
      .min(5, 'Pasword must be 8 or more characters')
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        'Password ahould contain at least one uppercase and lowercase character',
      )
      .matches(/\d/, 'Password should contain at least one number')
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        'Password should contain at least one special character',
      ),
    confirmPassword: Yup.string()
      .required('This field is required')
      .oneOf([Yup.ref('password')], 'The passwords do not match'),
  })
  const formik = useFormik({
    initialValues: {
      fullName: '',
      instituteName: '',
      email: '',
      phoneNumber: null,
      password: '',
      confirmPassword: '',
      roles: ['admin'],
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      handleSubmitForm(values)
    },
  })

  const handleSubmitForm = (values) => {}

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        formik.handleSubmit()
      }}
    >
      <div className={styles.inner}>
        <TextField
          label="Full name"
          fullWidth
          margin="normal"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          helperText={formik.touched.firstName ? formik.errors.firstName : ''}
        />
        <TextField
          label="Institute name"
          fullWidth
          margin="normal"
          name="instituteName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          helperText={formik.touched.firstName ? formik.errors.firstName : ''}
        />
      </div>
      <div className={styles.inner}>
        <TextField
          label="Phone"
          fullWidth
          margin="normal"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          helperText={formik.touched.firstName ? formik.errors.firstName : ''}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          helperText={formik.touched.firstName ? formik.errors.firstName : ''}
        />
      </div>
      <div className={styles.inner}>
        <TextField
          label="Password"
          type={showPassword.password ? 'text' : 'password'}
          fullWidth
          name="password"
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={formik.touched.password ? formik.errors.password : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    setShowPassword({
                      ...showPasswrod,
                      confirm: !showPasswrod.confirm,
                    })
                  }
                >
                  {showPassword.password ? <VisibilityOff /> : <Visibility />}
                </span>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          type={showPassword.confirm ? 'text' : 'password'}
          fullWidth
          name="confirmPassword"
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          error={Boolean(
            formik.touched.confirmPassword && formik.errors.confirmPassword,
          )}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.confirmPassword ? formik.errors.confirmPassword : ''
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    setShowPassword({
                      ...showPasswrod,
                      confirm: !showPasswrod.confirm,
                    })
                  }
                >
                  {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                </span>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </form>
  )
}
