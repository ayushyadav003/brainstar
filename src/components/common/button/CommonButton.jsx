import { Button } from '@mui/material'
import React from 'react'

export default function CommonButton({ text, onClick }) {
  return (
    <Button
      sx={{
        width: 'fitContent',
        border: 'none',
        borderRadius: '8px',
        padding: '8px 20px',
        cursor: 'pointer',
        backgroundColor: '#6153cd',
        color: '#fff',
        fontSize: '16px',
        fontWeight: '600',
      }}
      onClick={onClick}
      variant="contained"
    >
      {text || 'Get in touch'}
    </Button>
  )
}
