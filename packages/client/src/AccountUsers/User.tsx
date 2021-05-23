import * as React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { smallText } from '../ui/text'
import Checkbox from '../ui/form/Checkbox'
import EditButton from '../ui/form/EditButton'
import DeleteButton from '../ui/form/DeleteButton'
import Role from './Role'
import type { GetUsers_users as UserType } from '../operations/queries/__generated__/GetUsers'

interface Props {
  onChangeSelected: (selected: boolean) => void
  selected: boolean
  user: UserType
}

function User({ user, selected, onChangeSelected }: Props, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <Root ref={ref} selected={selected}>
      <ColorStripe />
      <Checkbox checked={selected} onChange={() => onChangeSelected(!selected)} />
      <div />
      <Avatar src={user.avatar} alt='user avatar' />
      <div />
      <Details>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </Details>
      <div />
      <Role role={user.role} />
      <div />
      <Buttons>
        <EditButton />
        <DeleteButton showText={false} />
      </Buttons>
    </Root>
  )
}

export default React.forwardRef(User)

const Root = styled.div<{ selected: boolean }>`
  display: grid;
  position: relative;
  grid-template-columns: 16px 12px 32px 12px 2fr 24px 1fr 12px 106px;
  height: 64px;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  :not(:last-of-type) {
    margin-bottom: 4px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.gray10};
    & > div:first-of-type {
      display: block;
    }

    & > div:last-of-type > button {
      display: flex;
    }
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      background-color: ${theme.colors.gray10};
      & > div:first-of-type {
        display: block;
      }
    `}
`

const Avatar = styled.img`
  object-fit: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const UserName = styled.div`
  ${smallText}
  color: ${({ theme }) => theme.colors.gray90};
  font-weight: 500;
`

const UserEmail = styled.div`
  ${smallText}
  color: ${({ theme }) => theme.colors.gray60};
  font-weight: 400;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
`

const ColorStripe = styled.div`
  position: absolute;
  left: 0;
  width: 4px;
  background-color: ${({ theme }) => theme.colors.brand50};
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  display: none;
`

const Buttons = styled.div`
  display: flex;
  min-width: 106px;

  > button:last-of-type {
    margin-left: 4px;
  }

  & > button {
    display: none;
  }
`
