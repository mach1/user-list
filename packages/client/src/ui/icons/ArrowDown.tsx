import * as React from 'react'
import { useTheme } from '@emotion/react'

interface Props {
  color?: string
  className?: string
}

export default function ArrowDown({ color, className }: Props) {
  const theme = useTheme()

  return (
    <svg
      className={className}
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 2.5V9.5'
        stroke={color || theme.colors.gray60}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.5 6L6 9.5L2.5 6'
        stroke={color || theme.colors.gray60}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
