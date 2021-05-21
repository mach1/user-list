import * as React from 'react'
import { useTheme } from '@emotion/react'

interface Props {
  color?: string
}

export default function Check({ color, ...props }: Props) {
  const theme = useTheme()

  return (
    <svg {...props} width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.8533 4.80823C11.2621 4.37655 11.955 4.39479 12.3406 4.84739L12.4074 4.92579C12.7429 5.31973 12.7225 5.90461 12.3603 6.2742L7.76472 10.9635C7.3726 11.3636 6.72832 11.3636 6.33624 10.9634L3.65353 8.22548C3.28558 7.84996 3.27124 7.25365 3.62072 6.86088L3.66795 6.8078C4.05892 6.36838 4.74285 6.35966 5.14491 6.78896L7.05045 8.82358L10.8533 4.80823Z'
        fill={color || theme.colors.white}
      />
    </svg>
  )
}
