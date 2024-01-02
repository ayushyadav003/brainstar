import styled from '@emotion/styled'
import React from 'react'

export default function CommonButton({ text, onclick }) {
  const StyledButton = styled('button')({
    width: 'fitContent',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    cursor: 'pointer',
    background: '#6153cd',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
  })

  return <StyledButton onClick={onclick}>{text || 'Get in touch'}</StyledButton>
}
