import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../auth.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CommonButton from "@/components/common/button/CommonButton";
import { useApi } from "@/hooks/useApi";

export default function LoginForm({ setNewUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, callApi } = useApi();

  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .min(5, "Pasword must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password ahould contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      roles: ["admin"],
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      handleSubmitForm(values);
    },
  });

  const handleSubmitForm = (values) => {};

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.email && formik.errors.email)}
        helperText={formik.touched.email ? formik.errors.email : ""}
      />
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        name="password"
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.password && formik.errors.password)}
        helperText={formik.touched.password ? formik.errors.password : ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <VisibilityOff /> : <Visibility />}
              </span>
            </InputAdornment>
          ),
        }}
      />

      <div className={styles.btnWrapper}>
        <CommonButton text="Submit" styles={{ margin: "1rem auto" }} />
        <b>or</b>
        <p>
          Not an user? <span onClick={() => setNewUser(true)}>Signup</span>
        </p>
      </div>
    </form>
  );
}
