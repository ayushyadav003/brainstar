'use client'

import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import store from '../redux/store'
import styles from './layout.module.scss'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()?.split('/')

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {pathname[2] ? (
            <div className={styles.dashboardLayout}>
              <div></div>
              <div className={styles.dashboard}>
                <Sidebar />
                <div className={styles.dashboardBody}>{children}</div>
              </div>
            </div>
          ) : (
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          )}
        </Provider>
        <ToastContainer />
      </body>
    </html>
  )
}
