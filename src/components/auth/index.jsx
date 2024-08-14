import React from "react";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./auth.module.scss";
import Image from "next/image";
import { Close } from "@mui/icons-material";

export default function AuthPopup() {
  const { authPopup } = useSelector(({ user }) => ({
    authPopup: user.authPopup,
  }));

  console.log("authPopup", authPopup);

  const handleClose = () => {};

  return (
    <div>
      <Dialog onClose={handleClose} open={authPopup} maxWidth={false}>
        <div className={styles.authWrapper}>
          <Close className={styles.closeIcon} />
          <div className={styles.imgWrapper}>
            <Image src="/auth.gif" fill />
          </div>
          <div className={styles.formWrapper}></div>
        </div>
      </Dialog>
    </div>
  );
}
