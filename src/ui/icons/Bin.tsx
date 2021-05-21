import * as React from 'react'
import { useTheme } from '@emotion/react'

interface Props {
  color?: string
}
export default function Bin({ color, ...props }: Props) {
  const theme = useTheme()

  return (
    <svg {...props} width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2 4H3.33333H14'
        stroke={color || theme.colors.gray50}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.33334 4V2.66667C5.33334 2.31305 5.47382 1.97391 5.72387 1.72386C5.97392 1.47381 6.31305 1.33334 6.66668 1.33334H9.33334C9.68697 1.33334 10.0261 1.47381 10.2762 1.72386C10.5262 1.97391 10.6667 2.31305 10.6667 2.66667V4M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2762 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66668C4.31305 14.6667 3.97392 14.5262 3.72387 14.2761C3.47382 14.0261 3.33334 13.687 3.33334 13.3333V4H12.6667Z'
        stroke={color || theme.colors.gray50}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66666 7.33334V11.3333'
        stroke={color || theme.colors.gray50}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.33334 7.33334V11.3333'
        stroke={color || theme.colors.gray50}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
