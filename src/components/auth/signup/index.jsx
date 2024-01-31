import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextField, Button } from '@mui/material'
import styles from '../auth.module.scss'
import { apiConfig } from '../../../services/ApiConfig'
import { ApiWithToken } from '../../../services/ApiWithToken'

export default function Signup({ setNewUser }) {
  const initialValues = {
    email: '',
    name: '',
    organisation: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter valid email address.')
      .required('Email address is required.')
      .min(8, 'Email address must be at least 8 characters.')
      .max(79, 'Email address must not exceed 80 characters.'),
    password: Yup.string()
      .required('Password is required.')
      .min(6, 'Password must be at least 6 characters.')
      .max(12, 'Password must not exceed 12 characters.'),
    name: Yup.string()
      .required('Name is required.')
      .min(2, 'Name must be at least 2 characters.')
      .max(50, 'Name must not exceed 50 characters.'),
    organisation: Yup.string()
      .min(3, 'Institute name must be at least 3 characters.')
      .max(50, 'Institute name must not exceed 50 characters.')
      .required('Institute name is required.'),
    phone: Yup.string()
      .min(10, 'Mobile number must be atleast 10 digits.')
      .required('Mobile number is required.'),
    confirmPassword: Yup.string()
      .required('Confirmation of your password is required.')
      .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
    selectedOption: Yup.string().required('Please select an option.'),
  })

  const handleRegister = async (data) => {
    delete data.confirmPassword
    const options = {
      url: apiConfig.register,
      method: 'POST',
      data,
    }
    const response = await ApiWithToken(options)
    if (response) {
      console.log('signup', response)
    }
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

      <Formik
        className={styles.signUpForm}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleRegister(values)
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <TextField
                variant="filled"
                label="Full Name"
                name="name"
                fullWidth
                required
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                size="medium"
                margin="normal"
              />
              <TextField
                variant="filled"
                label="Institute"
                fullWidth
                name="organisation"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.organisation && Boolean(errors.organisation)}
                helperText={touched.organisation && errors.organisation}
                size="medium"
                margin="normal"
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <TextField
                variant="filled"
                label="Email"
                name="email"
                required
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                size="medium"
                margin="normal"
              />
              <TextField
                variant="filled"
                label="Mobile No."
                name="mobile"
                required
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mobile && Boolean(errors.mobile)}
                helperText={touched.mobile && errors.mobile}
                size="medium"
                margin="normal"
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <TextField
                variant="filled"
                label="Password"
                type="password"
                name="password"
                required
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                size="medium"
                margin="normal"
              />
              <TextField
                variant="filled"
                label="Confirm Password"
                name="confirmPassword"
                required
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                type="password"
                size="medium"
                margin="normal"
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
              sx={{ borderRadius: '30px', width: '120px' }}
            >
              Signup
            </Button>
          </>
        )}
      </Formik>
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
