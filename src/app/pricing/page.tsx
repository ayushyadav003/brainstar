'use client'
import { useState } from 'react'
import styles from './banner.module.scss'
import { Send } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { planCards } from '@/utils/Utils'

export default function Pricing() {
  const [duration, setDuration] = useState('monthly')
  const [currentPlan, setCurrentPlan] = useState('basic')
  return (
    <div className={styles.pricingContainer}>
      <div className={styles.banner}>
        <h1>Pricing Plans</h1>
        <div>
          <span
            onClick={() => setDuration('monthly')}
            style={{
              color: duration === 'monthly' ? '#fff' : 'purple',
              background:
                duration === 'monthly'
                  ? 'linear-gradient(to right, #882ae2, #8f4de8)'
                  : '#fff',
            }}
          >
            Monthly
          </span>
          <span
            onClick={() => setDuration('yearly')}
            style={{
              color: duration === 'yearly' ? '#fff' : 'purple',
              background:
                duration === 'yearly'
                  ? 'linear-gradient(to right, #882ae2, #8f4de8)'
                  : '#fff',
            }}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {planCards.map((card, index) => (
          <div className={styles.card} key={index}>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
            <h2>{card.price}</h2>
            <div>
              <ul>
                {card.benefits.map((benefit, i) => (
                  <li key={i}>
                    <Send style={{ fontSize: '15px' }} /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <Button className={styles.btndiv}>Buy Now</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
