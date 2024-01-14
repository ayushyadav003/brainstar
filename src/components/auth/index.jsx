import { useState } from "react";
import { Clear } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import Login from "./login";
import Signup from "./signup";
import styles from "./auth.module.scss";

export default function AuthPopup() {
  const [loginStatus, setLoginStatus] = useState("login");
  const [newUser, setNewUser] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={true} maxWidth={false}>
      <div className={styles.authStyle}>
        <div className={styles.authImg}>
          <h2>Friendly Login</h2>
          <h3>Connect with simplicity, login hassle-free for everyday accessibility.</h3>
        {/* <img
          className={styles.topImage}
          src={"/images/authimg3.png"}
          alt="img"
        /> */}
        </div>
        <div className={styles.authForm}>
        {newUser ? (
          <div>
            <Signup  setNewUser={setNewUser} />
          </div>
        ) : (
          <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} setNewUser={setNewUser} />
          )}
          <Clear
            className={styles.closeButton}
            onClick={() => setLoginStatus("")}
          />
          </div>
      </div>
    </Dialog>
  );
}
