'use client'
import React, { useState } from 'react'
import CommonTable from '../../../components/common/Table'
import styles from './accounts.module.scss'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import AddPopup from '@/components/addPopup/AddPopup'
import { useRouter } from 'next/navigation'

const studentData = [
  {
    id: 1,
    name: 'Ayush',
    class: '12th',
    batch: '04:00-05:00',
    record: '750',
    status: 'paid',
    currentMonth:'paid'
  },
  {
    id: 2,
    name: 'Ayush',
    class: '12th',
    batch: '04:00-05:00',
    record: '950',
    status: 'pending',
    currentMonth:'pending'
  },
  {
    id: 3,
    name: 'Ayush',
    class: '12th',
    batch: '04:00-05:00',
    record: '650',
    status: 'paid',
    currentMonth:'paid'
  },
  {
    id: 4,
    name: 'Ayush',
    class: '12th',
    batch: '04:00-05:00',
    record: '800',
    status: 'pending',
    currentMonth:'pending'
  },
  {
    id: 5,
    name: 'Ayush',
    class: '12th',
    batch: '04:00-05:00',
    record: '1000',
    status: 'paid',
    currentMonth:'paid'
  },
  {
    id: 6,
    name: 'Ayush',
    class: '12th',
    batch: '04:00-05:00',
    record: '700',
    status: 'pending',
    currentMonth:'pending'
  },
  {
    id: 7,
    name: 'Ayush',
    class: '12th',
    batch: '04:00-05:00',
    record: '600',
    status: 'paid',
    currentMonth:'paid'
  },
  {
    id: 8,
    name: 'Ayush',
    class: '12th',
    batch: '04:00-05:00',
    record: '800',
    status: 'pending',
    currentMonth:'pending'
  },
 
]
export default function Accounts() {
  const [addAccount, setAddAccount] = useState(false)
  const router = useRouter()

  const header = ['Sno.', 'Name', 'Class', 'Batch','Record', 'Status', 'Current Month']

  return (
    <div className={styles.accountContainer}>
      <AddPopup type="attendance" open={addAccount} setOpen={setAddAccount} />
      <div className={styles.header}>
        <h2 className={styles.leftContent}>Accounts</h2>
        <div className={styles.rightContent}>
          <TextField placeholder="Search with student name/username" />
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Class</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={''}
              label="Class"
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
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Batch</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={''}
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
      <div className={styles.attendanceWrapper}>
        <CommonTable head={header} rows={studentData} type="accounts" />
      </div>
    </div>
  )
}
