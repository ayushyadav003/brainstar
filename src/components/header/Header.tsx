import { useSelector } from 'react-redux'
import './header.scss'
import { AccountCircle, Logout } from '@mui/icons-material'
import Image from 'next/image'
import { headerTabs } from '@/utils/Utils'
import styles from './header.module.scss'

const Header = () => {
  // const { user } = useSelector((state: any) => state.profile)

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="logo" width={200} height={50} />
      </div>
      <div className={styles.options}>
        {headerTabs.map((tab, i) => {
          return <span key={i}>{tab.title}</span>
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
        <button onClick={() => ''} className={styles.btnPrimary}>
          Login
        </button>
      </div>
    </div>
  )
}
export default Header
