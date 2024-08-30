import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AccountCircle, Logout } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'
import CommonButton from '../common/button/CommonButton'
import AuthPopup from '../auth'
import { handleAuthPopup } from '../../redux/features/userSlice'
import { useRouter } from 'next/navigation'
import { Popover } from '@mui/material'

export default function Header() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null)

  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const popoverId = open ? 'simple-popover' : undefined

  const headerTabs = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'My Dashboard', link: '/institute/dashboard' },
    { title: 'My Plan', link: '/pricing' },
  ]

  const handleLogout = () => {
    localStorage.removeItem('brainstarUser')
  }

  const handleGetCurrentUser = () => {
    setCurrentUser(JSON.parse(localStorage.getItem('brainstarUser')))
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [])

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo} onClick={() => router.push('/')}>
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
              <div
                className={styles.profile}
                id={popoverId}
                onClick={handleOpen}
              >
                {currentUser?.dp ? (
                  <img src={currentUser.dp} alt="dp" />
                ) : (
                  <span
                    id={popoverId}
                    className={styles.profileDp}
                    onClick={handleOpen}
                  >
                    {currentUser?.fullName[0]}
                  </span>
                )}
              </div>
              <Popover
                id={popoverId}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <div className={styles.popoverWrapper}>
                  <div className={styles.inner}>
                    <span
                      id={popoverId}
                      className={styles.profileDp}
                      onClick={handleOpen}
                      style={{ borderRadius: '5px', marginLeft: '0' }}
                    >
                      {currentUser?.ownerName}
                    </span>
                    <div className={styles.info}>
                      <p>
                        <b>{currentUser?.ownerName}</b>
                      </p>
                      <p>{currentUser?.email}</p>
                    </div>
                  </div>
                  <div className={styles.inner2}>
                    <p onClick={() => router.push('/profile')}>My Profile</p>
                    <p
                      style={{ color: '#f89fa4' }}
                      onClick={() => handleLogout()}
                    >
                      <Logout /> Log out
                    </p>
                  </div>
                </div>
              </Popover>
            </>
          ) : (
            <CommonButton
              text={'Login'}
              onClick={() => dispatch(handleAuthPopup('login'))}
            />
          )}
        </div>
      </div>
      <AuthPopup />
    </div>
  )
}
