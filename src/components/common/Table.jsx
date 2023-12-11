import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.scss";

export default function CommonTable({ head, rows, type }) {
  console.log(head);
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head &&
              head.map((item, i) => (
                <TableCell key={i} className={styles.boldCell}>
                  {item}
                </TableCell>
              ))}
            <TableCell className={styles.boldCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles.bodyStyle}>
          {rows &&
            rows.map((row, i) => (
              <TableRow
                key={row.name}
                className={i % 2 === 0 ? styles.rowBackground : ""}
              >
                {type === "students" && (
                  <>
                    <TableCell component="th" scope="row">
                      {row?.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.phone}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.class}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.batch}
                    </TableCell>
                  </>
                )}
                <TableCell>E</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
