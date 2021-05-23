import * as React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { ColumnTitle } from './components'
import ArrowDown from './icons/ArrowDown'

export type SortOrder = 'asc' | 'desc'

interface Props {
  name: string
  sortedBy: string
  sortOrder: SortOrder
  children: React.ReactNode
  className?: string
  onSortChange: (field: string, order: SortOrder) => void
}

export default function SortedColumnTitle({ children, className, onSortChange, name, sortedBy, sortOrder }: Props) {
  const isActive = name === sortedBy

  const handleClick = () => {
    if (isActive) {
      const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
      onSortChange(name, newSortOrder)
    } else {
      onSortChange(name, 'desc')
    }
  }
  return (
    <ColumnTitle className={className} onClick={handleClick}>
      {children}
      {isActive && <SortArrow sortOrder={sortOrder} />}
    </ColumnTitle>
  )
}

const SortArrow = styled(ArrowDown)<{ sortOrder: SortOrder }>`
  margin-left: 4px;

  ${({ sortOrder }) =>
    sortOrder === 'desc' &&
    css`
      transform: rotate(180deg);
    `}
`
