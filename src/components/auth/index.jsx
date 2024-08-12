import React from "react";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./auth.module.scss";

export default function AuthPopup() {
  const { authPopup } = useSelector(({ user }) => ({
    authPopup: user.authPopup,
  }));

  console.log("authPopup", authPopup);

  const handleClose = () => {};

  return (
    <div>
      <Dialog onClose={handleClose} open={authPopup}>
        <div className={styles.authWrapper}>
          <div className={styles.imgWrapper}></div>
          <div className={styles.formWrapper}></div>
        </div>
      </Dialog>
    </div>
  );
}
