import * as React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import data from '../users.json'

import { SectionTitle, PrimaryButton, ListTitle, ColumnTitle } from '../ui/components'
import SearchInput from '../ui/form/SearchInput'
import Checkbox from '../ui/form/Checkbox'
import EditButton from '../ui/form/EditButton'
import DeleteButton from '../ui/form/DeleteButton'
import User from './User'

export default function AccountUsers() {
  return (
    <Root>
      <Header>
        <SectionTitle>Account users</SectionTitle>
        <RightContent>
          <EnhancedSearchInput inputProps={{ placeholder: 'Search' }} />
          <PrimaryButton>Connect users</PrimaryButton>
        </RightContent>
      </Header>
      <ListContainer>
        <Toolbar>
          <ToolbarText>2 users selected</ToolbarText>
          <EditButton />
          <DeleteButton />
        </Toolbar>
        <ListHeader>
          <Checkbox />
          <div />
          <UserColumn>User</UserColumn>
          <div />
          <PermissionColumn>Permission</PermissionColumn>
        </ListHeader>
        {data.users.slice(0, 50).map((user, i) => (
          <User key={i} user={user} />
        ))}
      </ListContainer>
    </Root>
  )
}

const Root = styled.section`
  width: 716px;
  padding: ${({ theme }) => theme.spacing.xl}px 0;
`

const EnhancedSearchInput = styled(SearchInput)`
  width: 204px;
  margin-right: 12px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`

const RightContent = styled.div`
  display: flex;
`

const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
`

const ToolbarText = styled(ListTitle)`
  margin-right: ${({ theme }) => theme.spacing.lg}px;
`

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
  `}

  button:not(:last-of-type) {
    margin-right: ${({ theme }) => theme.spacing.sm}px;
  }
`

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 16px 12px 32px 12px 2fr 24px 1fr 12px 106px;
  align-items: center;

  ${({ theme: { spacing } }) => css`
    padding: ${spacing.md}px ${spacing.md}px ${spacing.sm}px ${spacing.md}px;
  `}
`

const UserColumn = styled(ColumnTitle)`
  grid-column: 3 / span 3;
`

const PermissionColumn = styled(ColumnTitle)`
  grid-column: 7 / span 3;
`
