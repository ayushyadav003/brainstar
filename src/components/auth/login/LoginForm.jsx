import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../auth.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CommonButton from "@/components/common/button/CommonButton";
import { useApi } from "@/hooks/useApi";
import { useDispatch } from "react-redux";
import { handleAuthPopup } from "@/redux/features/userSlice";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginForm({ handleClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, callApi } = useApi();
  const dispatch = useDispatch();

  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    enteredPassword: Yup.string()
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
      enteredPassword: "",
      loginType: "admin",
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      const options = {
        method: "POST",
        data: values,
      };
      const { response, error } = await callApi("login", options);
      if (error) {
        toast.error(error?.response?.data?.message || "Somthing went wrong!!");
      } else {
        if (response?.data?.statusCode === 200) {
          toast.success(response?.data?.message || "Welcome!");
          localStorage.setItem(
            "brainstarUser",
            JSON.stringify(response?.data?.loginUser)
          );
          handleClose();
        }
        // toast.warning(response?.data?.message)
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
        name="enteredPassword"
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.enteredPassword}
        onBlur={formik.handleBlur}
        error={Boolean(
          formik.touched.enteredPassword && formik.errors.enteredPassword
        )}
        helperText={
          formik.touched.enteredPassword ? formik.errors.enteredPassword : ""
        }
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

      <div className={styles.remember}>
        <FormControlLabel
          control={
            <Checkbox
              // checked={rememberMe}
              // onChange={handleRememberMe}
              sx={{ fontSize: "1px" }}
            />
          }
          label={<span style={{ fontSize: "13px" }}>Remember me</span>}
        />
        <Link href="/forget-password">Forgot your password?</Link>
      </div>
      <div className={styles.btnWrapper}>
        <CommonButton
          type="submit"
          text="Submit"
          styles={{ margin: "1rem auto" }}
        />
        <b>or</b>
        <p>
          Not an user?{" "}
          <span onClick={() => dispatch(handleAuthPopup("signup"))}>
            Signup
          </span>
        </p>
      </div>
    </form>
  );
}
