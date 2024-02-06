'use client'
import { useState } from 'react'
import styles from './pricing.module.scss'
import { Send } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { planCards } from '@/utils/Utils'
import CommonButton from '@/components/common/button/CommonButton'

export default function Pricing() {
  const [duration, setDuration] = useState(1)
  const [currentPlan, setCurrentPlan] = useState('basic')
  return (
    <div className={styles.pricingContainer}>
      <div className={styles.banner}>
        <h1>Pricing Plans</h1>
        <div>
          <span
            onClick={() => setDuration(1)}
            style={{
              color: duration === 1 ? '#fff' : 'purple',
              background:
                duration === 1
                  ? 'linear-gradient(to right, #882ae2, #8f4de8)'
                  : '#fff',
            }}
          >
            Monthly
          </span>
          <span
            onClick={() => setDuration(12)}
            style={{
              color: duration === 12 ? '#fff' : 'purple',
              background:
                duration === 12
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
            <div>
              <h2>{card.title}</h2>
              <h3>
                Rs.{' '}
                {card.title !== 'Free'
                  ? parseInt(card.price) * duration - duration * 100
                  : 0}
              </h3>
              <Button>Buy Now</Button>
            </div>
            <ul>
              {card.benefits.map((benefit, i) => (
                <li key={i}>
                  <Send style={{ fontSize: '15px' }} /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
