'use client'
import React, { useState } from 'react'
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
import AddPopup from '@/components/addPopup/AddPopup'
import { useRouter } from 'next/navigation'

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
export default function Student() {
  const [addStudent, setAddStudent] = useState(false)
  const router = useRouter()

  const header = ['Sno.', 'Name', 'Phone', 'Class', 'Batch']

  return (
    <div className={styles.studentsContainer}>
      <AddPopup type="students" open={addStudent} setOpen={setAddStudent} />
      <div className={styles.header}>
        <h1>Studens</h1>
        <div>
          <TextField placeholder="Student name/email/phone" />
          <FormControl sx={{ minWidth: 120 }} size="small">
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
              <MenuItem value={10}>10th</MenuItem>
              <MenuItem value={20}>11th</MenuItem>
              <MenuItem value={30}>12th</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }} size="small">
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
              <MenuItem value={10}>04:00-05:00</MenuItem>
              <MenuItem value={20}>05:00-06:00</MenuItem>
              <MenuItem value={30}>06:00-07:00</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            // style={{ marginLeft: 'auto' }}
            onClick={() => setAddStudent(true)}
          >
            New student
          </Button>
        </div>
      </div>
      <div className={styles.studentWrapper}>
        <CommonTable head={header} rows={studentData} type="students" />
      </div>
    </div>
  )
}
