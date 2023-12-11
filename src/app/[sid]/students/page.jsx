'use client'
import React from 'react'
import CommonTable from '../../../components/common/Table'
import styles from './students.module.scss'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

export default function page() {
  const studentData = [
    {
      id: 1,
      name: 'Ayush',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 2,
      name: 'Ayush1',
      phone: '9958109872',
      class: '11th',
      batch: '05:00-06:00',
    },
    {
      id: 3,
      name: 'Ayush2',
      phone: '9958109872',
      class: '10th',
      batch: '04:00-05:00',
    },
    {
      id: 4,
      name: 'Ayush3',
      phone: '9958109872',
      class: '9th',
      batch: '06:00-07:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
    {
      id: 5,
      name: 'Ayush4',
      phone: '9958109872',
      class: '12th',
      batch: '04:00-05:00',
    },
  ]

  const header = ['Sno.', 'Name', 'Phone', 'Class', 'Batch']

  return (
    <div className={styles.studentsContainer}>
      {/* <h2>Students</h2> */}
      <div className={styles.header}>
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
        <Button variant="contained" style={{ marginLeft: 'auto' }}>
          New student
        </Button>
      </div>
      <div className={styles.studentWrapper}>
        <CommonTable head={header} rows={studentData} type="students" />
      </div>
    </div>
  )
}
