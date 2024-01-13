import React from "react";
import { Box, TextField, Button, IconButton } from "@mui/material";
import styles from "../auth.module.scss";
import { ArrowBack } from "@mui/icons-material";

export default function index({ setNewUser }) {
  const handleSignUp = () => {};
  return (
    <div className={styles.signupModal}>
      {/* <div className={styles.header}>
        <IconButton onClick={()=> setNewUser(false)}>
          <ArrowBack />
        </IconButton>
        <h1>Sign Up</h1>
      </div> */}
      <div className={styles.header}>
        <IconButton onClick={() => setNewUser(false)}>
          <ArrowBack />
        </IconButton>
        <h1>
          Sign Up<span style={{ color: "rgb(179, 179, 179)" }}>/</span>
        </h1>
        <div className={styles.subheading}>
          <h1>Login</h1>
          <h4 style={{margin:'0 20px'}}>
            Don<span>&#39;</span>t have an account?
          </h4>
        </div>
      </div>
      <div className={styles.signUpForm}>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "22px" }}>
          <TextField
            variant="filled"
            label="Full Name"
            size="medium"
            margin="normal"
          />
          <TextField
            variant="filled"
            label="Organisation"
            size="medium"
            margin="normal"
          />
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <TextField
            variant="filled"
            label="Email"
            size="medium"
            margin="normal"
          />
          <TextField
            variant="filled"
            label="Mobile No."
            size="medium"
            margin="normal"
          />
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <TextField
            variant="filled"
            label="Password"
            type="password"
            size="medium"
            margin="normal"
          />
          <TextField
            variant="filled"
            label="Confirm Password"
            type="password"
            size="medium"
            margin="normal"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSignUp}
        >
          Signup
        </Button>
      </div>
    </div>
  );
}
