import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AccountCircle, Logout } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { headerTabs } from '../../utils/Utils'
import styles from './header.module.scss'
import CommonButton from '../common/button/CommonButton'
import AuthPopup from '../auth'
import { handleLoginPopup, setUserData } from '../../redux/features/userSlice'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const router = useRouter()

  const headerTabs = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'My Dashboard', link: '/institute/dashboard' },
    { title: 'My Plan', link: '/pricing' },
  ]

  const handleLogout = () => {
    localStorage.removeItem('current-user-data')
  }

  useEffect(() => {
    const userData = localStorage.getItem('currentUser')
    console.log()
    if (userData) {
      dispatch(setUserData(JSON.parse(userData).foundUser))
    }
  }, [])

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="logo" width={200} height={50} />
        </div>
        <div className={styles.options}>
          {headerTabs.map((tab, i) => {
            return (
              <>
                {tab.title !== 'My Dashboard' ? (
                  <Link href={tab.link} key={i}>
                    {tab.title}
                  </Link>
                ) : (
                  <a href={``} key={i} target="blank">
                    {tab.title}
                  </a>
                )}
              </>
            )
          })}
          {currentUser ? (
            <>
              <div className={styles.profile}>
                {currentUser?.dp ? (
                  <img src={currentUser.dp} alt="dp" />
                ) : (
                  <AccountCircle />
                )}
                <p>{currentUser?.ownerName}</p>
              </div>
              <Logout sx={{ cursor: 'pointer' }} onClick={handleLogout} />
            </>
          ) : (
            <Link href="/login">
              <CommonButton text={'Login'} />
            </Link>
          )}
        </div>
      </div>
      <AuthPopup />
    </div>
  )
}
