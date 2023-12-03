'use-client'
import React from 'react'
import styles from './dashboard.module.scss'
import { KeyboardArrowRight } from '@mui/icons-material'

const classes = [
  { title: '9th', totalStudents: '20', batches: '4', bg: '#595959' },
  { title: '10th', totalStudents: '20', batches: '4', bg: '#7a6038' },
  { title: '11th', totalStudents: '20', batches: '4', bg: '#7e4b34' },
  { title: '12th', totalStudents: '20', batches: '4', bg: '#ce796b' },
]

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      {classes.map((classInfo, i) => (
        <div
          key={i}
          className={styles.cardsWrapper}
          style={{ background: classInfo.bg }}
        >
          <p className={styles.mainTitle}> {classInfo.title}</p>
          <div className={styles.innerInfo}>
            <div>
              <div>
                <span className={styles.title}>Total students:</span>
                <span className={styles.titleInfo}>
                  {classInfo.totalStudents}
                </span>
              </div>
              <div>
                <span className={styles.title}>Total Batches:</span>
                <span className={styles.titleInfo}>{classInfo.batches}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
