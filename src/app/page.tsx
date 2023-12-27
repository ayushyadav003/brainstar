import Image from 'next/image'
import styles from './page.module.css'
import { Star } from '@mui/icons-material'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homeWrapper}>
        <div className={styles.introSection}>
          <div className={styles.inner}>
            <h1>
              Building Brands in the <span>Digital Age</span>
            </h1>
            <p>
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
            </p>
            <button>Learn More</button>
          </div>
          <div className="inner2">
            <img src="/images/intro.png" alt="home" />
            <div>
              <span>
                <Star style={{ color: '#F8BD38' }} />
                <span>PROJECTS</span>
              </span>
              <p>
                600+<span>Done</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
