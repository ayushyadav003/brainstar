"use client";

import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import moment from "moment";
import styles from "./notes.module.scss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const notifications = [
  {
    id: 1,
    Name: "Yash",
    profilePic: "",
    sendTime: moment().subtract(2, "hours"),
    info: "You have a new message.",
  },
  {
    id: 2,
    Name: "Dhruv",
    profilePic: "",
    sendTime: moment().subtract(1, "day"),
    info: "You've been mentioned in a post.",
  },
];

const NotificationPage = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.leftContent}>Notice</h2>
        <div className={styles.rightContent}>
        <TextField placeholder="Search with student name/username" />
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Class</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={""}
              label="Class"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Batch</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={""}
              label="Batch"
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={styles.notificationWrapper}>
        {notifications.map((notification) => (
          <div key={notification.id} className={styles.notBox}>
            <div className={styles.notCont}>
              <AccountCircleIcon style={{ fontSize: 40, color: "#888" }} />
              <div>
              <h3 style={{ fontSize: "22px" }}>{notification.Name}</h3>
              <p>{notification.info}</p>
              <p style={{ color: "#888", fontSize: "12px" }}>
                {moment(notification.sendTime).from(currentTime)}
              </p>
              </div>
            </div>
            <div>
            <span>View</span>
                <p className={styles.time}>
                  {moment(notification.sendTime).format("hh:mm A")}
                </p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
