"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "../login/login.module.scss";
import Link from "next/link";
import { apiConfig } from "@/services/ApiConfig";
import { ApiWithOutToken } from "@/services/ApiWithoutToken";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword({ ...showPassword, password: !showPassword.password });
    } else {
      setShowPassword({
        ...showPassword,
        confirmPassword: !showPassword.confirmPassword,
      });
    }
  };
  const onSubmit = async (data) => {
    setLoading(true);
    const apiOptions = {
      url: apiConfig.register,
      method: "POST",
      data: { ...data, role: "Admin" },
    };
    const response = await ApiWithOutToken(apiOptions);
    if (response?.data?.statusCode === 201) {
      const obj = response.data.data;
      delete obj.password;
      delete obj._V;
      const jsonString = JSON.stringify(obj);
      localStorage.setItem("currentUser", jsonString);
      toast.success(response.data.Message);
      router.push("/");
    } else {
      toast.error(response.data.message);
    }

    setLoading(false);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInner}>
        <img src="/images/authimage.png" alt="" />
      </div>
      <div className={styles.loginForm}>
        <h2 style={{ marginTop: "2rem" }}>Signup with Brainstar!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <TextField
              label="Owner Name"
              fullWidth
              margin="normal"
              {...register("ownerName", {
                required: "Owner Name is required",
                maxLength: 20,
                minLength: 2,
              })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
            <TextField
              label="Institution Name"
              fullWidth
              margin="normal"
              {...register("instituteName", {
                required: ["Institution name is required."],
              })}
              error={!!errors.institute}
              helperText={errors.institute?.message}
            />
          </div>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            {...register("email", {
              required: ["Email is rquired."],
              maxLength: 20,
            })}
          />
          <TextField
            label="Phone (Optional)"
            fullWidth
            margin="normal"
            {...register("phone", { required: false, maxLength: 10 })}
          />
          {/* <div style={{ display: "flex", gap: "1rem" }}> */}
          <TextField
            label="Craete Password"
            type={showPassword.password ? "text" : "password"}
            fullWidth
            margin="normal"
            {...register("password", {
              required: ["Password is required."],
              maxLength: 8,
              minLength: 4,
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => togglePasswordVisibility("password")}
                    edge="end"
                  >
                    {showPassword.password ? <VisibilityOff /> : <Visibility />}
                  </span>
                </InputAdornment>
              ),
            }}
          />
          {/* <TextField
              label="Confirm Password"
              type={showPassword.confirmPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              {...register("confirmPassword", {
                required: ["Please confirm your password"],
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.password?.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                      edge="end"
                    >
                      {showPassword.confirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </span>
                  </InputAdornment>
                ),
              }}
            /> */}
          {/* </div> */}

          <Button
            variant="contained"
            style={{ marginTop: "1rem" }}
            className={styles.loginBtn}
            type="submit"
            disabled={loading}
          >
            Sign up
            {loading && (
              <CircularProgress size={30} style={{ marginLeft: "1rem" }} />
            )}
          </Button>
        </form>
        <div className={styles.inner}>
          Do not have an account? <Link href="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}
