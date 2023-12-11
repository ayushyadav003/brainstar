'use client'
import React, { useState } from 'react'
import styles from './classes.module.scss'
import AddPopup from '../../../components/addPopup/AddPopup'

const classes = [
  { title: '10th', totalStudents: '20', batches: '4', bg: '#7a6038' },
  { title: '11th', totalStudents: '20', batches: '4', bg: '#7e4b34' },
  { title: '12th', totalStudents: '20', batches: '4', bg: '#ce796b' },
]

function Classes() {
  const [addClass, setAddClass] = useState(false)
  const [currentScreen, setCurrentScreen] = useState('classes')

  return (
    <div className={styles.classContainer}>
      <div className={styles.optionBar}>
        <span
          onClick={() => setCurrentScreen('classes')}
          style={{
            backgroundColor: currentScreen !== 'classes' && '#fff',
            color: currentScreen !== 'classes' && 'brown',
          }}
        >
          Classes
        </span>
        <span
          onClick={() => setCurrentScreen('batches')}
          style={{
            backgroundColor: currentScreen !== 'batches' && '#fff',
            color: currentScreen !== 'batches' && 'brown',
          }}
        >
          Batches
        </span>
      </div>
      <div className={styles.classWrapper}>
        <div className={styles.plusIcon} onClick={() => setAddClass(true)}>
          +
        </div>
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
        <AddPopup type="class" open={addClass} setOpen={setAddClass} />
      </div>
      <div></div>
    </div>
  )
}

export default Classes
