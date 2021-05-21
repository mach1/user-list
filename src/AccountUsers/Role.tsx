import * as React from 'react'
import styled from '@emotion/styled'

import theme from '../ui/theme'
import { extraSmallText } from '../ui/text'

interface Props {
  role: string
}

interface RoleStyles {
  backgroundColor: string
  textColor: string
  displayText: string
}

const roleStyles: { [key: string]: RoleStyles } = {
  ACCOUNT_MANAGER: {
    backgroundColor: theme.colors.pink20,
    textColor: theme.colors.pink80,
    displayText: 'Account manager',
  },
  ADMIN: {
    backgroundColor: theme.colors.purple20,
    textColor: theme.colors.purple80,
    displayText: 'Admin',
  },
  AGENT: {
    backgroundColor: theme.colors.blue20,
    textColor: theme.colors.blue80,
    displayText: 'Agent',
  },
  EXTERNAL_REVIEWER: {
    backgroundColor: theme.colors.orange20,
    textColor: theme.colors.orange80,
    displayText: 'External reviewer',
  },
}

export default function Role({ role }: Props) {
  const roleStyle = roleStyles[role]

  if (!roleStyle) return null

  return (
    <div>
      <Root styles={roleStyle}>{roleStyle.displayText}</Root>
    </div>
  )
}

interface RootProps {
  styles: RoleStyles
}
const Root = styled.span<RootProps>`
  ${extraSmallText}
  display: inline-block;
  height: 24px;
  padding: 0 ${({ theme }) => theme.spacing.sm}px;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  background-color: ${({ styles }) => styles.backgroundColor};
  color: ${({ styles }) => styles.textColor};
  white-space: nowrap;
`
