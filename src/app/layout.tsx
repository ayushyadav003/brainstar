'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'
import Header from '@/components/header/Header'
import styles from './layout.module.scss'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '@/components/footer/Footer'

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
      </body>
    </html>
  )
}
