import { useDispatch, useSelector } from 'react-redux'
import { AccountCircle, Logout } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { headerTabs } from '../../utils/Utils'
import styles from './header.module.scss'
import CommonButton from '../common/button/CommonButton'
import AuthPopup from '../auth'
import { handleLoginPopup } from '../../redux/features/userSlice'

const Header = () => {
  // const { user } = useSelector((state: any) => state.profile)
  const dispatch = useDispatch()

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
  }

  const handleLoginClick = () => {
    dispatch(handleLoginPopup(true))
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="logo" width={200} height={50} />
        </div>
        <div className={styles.options}>
          {headerTabs.map((tab, i) => {
            return (
              <Link href={tab.link} key={i}>
                {tab.title}
              </Link>
            )
          })}
          {/* {user ? (
          <>
            <div className="profile">
              {user.avatar ? (
                <Image src={user?.avatar} alt="dp" />
              ) : (
                <AccountCircle />
              )}
              <p>{user.name}</p>
            </div>
            <Logout style={{ cursor: 'pointer' }} onClick={handleLogout} />
          </>
        ) : ( */}
          <CommonButton text={'Login'} onclick={handleLoginClick} />
        </div>
      </div>
      <AuthPopup />
    </div>
  )
}
export default Header
