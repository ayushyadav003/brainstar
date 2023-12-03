'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.scss'
import Sidebar from '../components/sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.dashboardLayout}>
          <div></div>
          <div className={styles.dashboard}>
            <Sidebar />
            <div className={styles.dashboardBody}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
