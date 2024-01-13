import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ArrowBack, Clear } from "@mui/icons-material";
import styles from "../auth.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import OTPInput from "react-otp-input";

const LoginPopup = ({ loginStatus, setLoginStatus, setNewUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpFields, setShowOtpFields] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [otp, setOtp] = useState("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = () => {
    
    setResetPassword(true);
  };

  const handleResetPassword = () => {
    
    setLoginStatus("login"); 
  };

  const handleSendOTP = () => {
    
    setShowOtpFields(true);
  };


  return (
    <div className={styles.loginModal}>
      <div className="main">
        {loginStatus === "login" && (
          <div className={styles.loginForm}>
            <form action="">
              <div className={styles.heading}>
                <h1>
                  Login <span style={{ color: "rgb(179, 179, 179)" }}>/</span>
                </h1>
                <div className={styles.subheading}>
                  <h1>Sign Up</h1>
                  <h4 style={{ padding: "0 10px" }}>
                    Don<span>&#39;</span>t have an account?
                  </h4>
                </div>
              </div>
              <div className={styles.fields}>
                <TextField
                  label="Email/Mobile No."
                  fullWidth
                  variant="filled"
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  variant="filled"
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span
                          style={{ cursor: "pointer" }}
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
                      sx={{ fontSize: "1px" }}
                    />
                  }
                  label={<span style={{ fontSize: "14px" }}>Remember me</span>}
                />
                <span
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setLoginStatus("forget")}
                >
                  Forgot Password?
                </span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.loginBtn}>
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={()}
                    sx={{ borderRadius: "30px", width: "120px" }}
                  >
                    Login
                  </Button>
                </div>
                <div className={styles.rightContent}>
                  <p>
                    New to HireXL?{" "}
                    <span
                      style={{
                        cursor: "pointer",
                        fontSize: "15px",
                        color: "blue",
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
                <TwitterIcon style={{ margin: "0 6px" }} />
                <InstagramIcon />
              </div>
            </form>
          </div>
        )}

        {loginStatus === "forget" && (
          <div className={styles.forgetModal}>
            {!resetPassword && (
              <div className={styles.header}>
                <IconButton onClick={() => setLoginStatus("login")}>
                  <ArrowBack />
                </IconButton>
                <h1 style={{ margin: "0 1rem" }}>Forget Password</h1>
              </div>
            )}

            {resetPassword && (
              <div className={styles.header}>
                <IconButton onClick={() => setLoginStatus("login")}>
                  <ArrowBack />
                </IconButton>
                <h1 style={{ margin: "40px" }}>Reset Password</h1>
              </div>
            )}

            <form>
              {!resetPassword && (
                <div className={styles.emailFields}>
                  <TextField
                    variant="filled"
                    label="Email/Mobile No."
                    fullWidth
                    margin="normal"
                  />
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSendOTP} 
                      sx={{
                        borderRadius: "10px",
                        marginLeft: "100px",
                        marginTop: "20px",
                      }}
                    >
                      Send OTP
                    </Button>
                  </div>
                </div>
              )}

              {showOtpFields && !resetPassword && (
                <div className={styles.actionButtons}>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ borderRadius: "10px" }}
                  >
                    Submit
                  </Button>
                </div>
              )}
              {resetPassword && (
                <div>
                  <div className={styles.resets}>
                    <TextField
                      label="New Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      InputProps={{ sx: { borderRadius: "30px" } }}
                    />
                    <TextField
                      label="Confirm Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        sx: { borderRadius: "30px", marginBottom: "20px" },
                      }}
                    />
                  </div>
                  <Button
                    className={styles.btnnn}
                    variant="contained"
                    color="primary"
                    onClick={handleResetPassword}
                    sx={{
                      borderRadius: "10px",
                      width: "220px",
                      margin: "auto",
                    }}
                  >
                    Reset Password
                  </Button>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
