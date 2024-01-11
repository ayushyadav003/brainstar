import React from 'react'
import {
  Dashboard,
  LibraryBooks,
  PointOfSale,
  School,
  VideoCall,
  Description,
  Ballot,
  SupportAgent,
  NotificationsActive
} from '@mui/icons-material/'
import styles from './sidebar.module.scss'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const sidebarOptions = [
  { title: 'Dashboard', icon: <Dashboard />, link: '/a/dashboard' },
  { title: 'Classes', icon: <LibraryBooks />, link: '/a/classes' },
  { title: 'Meetings', icon: <VideoCall />, link: '/a/meetings' },
  { title: 'Students', icon: <School />, link: '/a/students' },
  { title: 'Notes', icon: <Description />, link: '/a/notes' },
  { title: 'Attendance', icon: <Ballot />, link: '/a/attendance' },
  { title: 'Accounts', icon: <PointOfSale />, link: '/a/accounts' },
  { title: 'Support', icon: <SupportAgent />, link: '/a/support' },
  { title: 'Notice', icon: <NotificationsActive />, link: '/a/notice' },
]

function Sidebar() {
  const pathname = usePathname()?.split('/')
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.dp}></div>
      <div className={styles.sidebarOptions}>
        {sidebarOptions.map((option, i) => {
          return (
            <Link href={option.link} key={i}>
              <div
                className={styles.options}
                style={{
                  color:
                    option.title.toLowerCase() === pathname[2]
                      ? '#fff'
                      : 'lightgray',
                }}
              >
                <span>{option.icon}</span>
                <p>{option.title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
