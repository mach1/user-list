import * as React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useQuery } from '@apollo/client'
import { debounce } from 'lodash'

import { GET_USERS } from '../operations/queries/getUsers'
import type {
  GetUsers,
  GetUsersVariables,
  GetUsers_users as UserType,
} from '../operations/queries/__generated__/GetUsers'

import { SectionTitle, PrimaryButton, ListTitle } from '../ui/components'
import SearchInput from '../ui/form/SearchInput'
import Checkbox from '../ui/form/Checkbox'
import EditButton from '../ui/form/EditButton'
import DeleteButton from '../ui/form/DeleteButton'
import User from './User'
import SortedColumnTitle, { SortOrder } from '../ui/SortedColumnTitle'

const PAGE_SIZE = 50

export default function AccountUsers() {
  const [filter, setFilter] = React.useState('')
  const [sortedBy, setSortedBy] = React.useState('role')
  const [sortOrder, setSortOrder] = React.useState<SortOrder>('desc')
  const [finished, setFinished] = React.useState(false)
  const [selectedIds, setSelectedIds] = React.useState<{ [key: string]: boolean }>({})

  const { data, loading, fetchMore } = useQuery<GetUsers, GetUsersVariables>(GET_USERS, {
    variables: { filter, offset: 0, limit: PAGE_SIZE, sortedBy, sortOrder },
    notifyOnNetworkStatusChange: true,
  })
  const [allSelected, setAllSelected] = React.useState(false)

  const users = data?.users || []

  const onChangeSelected = (id: UserType['id'], selected: boolean) => {
    if (!selected) {
      const copy = { ...selectedIds }
      delete copy[id]
      setSelectedIds(copy)
    } else {
      setSelectedIds({
        ...selectedIds,
        [id]: selected,
      })
    }
  }

  const selectedCount = Object.keys(selectedIds).length

  const onToggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!data) return

    if (e.target.checked) {
      const allSelectedIds = users.reduce<{ [key: string]: boolean }>((acc, user) => {
        acc[user.id] = true
        return acc
      }, {})
      setSelectedIds(allSelectedIds)
    } else {
      setSelectedIds({})
    }
    setAllSelected(!allSelected)
  }

  const observer = React.useRef<IntersectionObserver | null>(null)

  const lastUserElementRef = React.useCallback(
    node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !finished) {
          fetchMore({
            variables: { filter, sortedBy, sortOrder, offset: users.length, limit: PAGE_SIZE },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev

              if (fetchMoreResult.users.length === 0) {
                setFinished(true)
              }

              return Object.assign({}, prev, {
                users: [...prev.users, ...fetchMoreResult.users],
              })
            },
          })
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, finished],
  )

  const handleFilterChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
    setFinished(false)
  }, 300)

  const handleSortChange = (field: string, sortOrder: SortOrder) => {
    setSortedBy(field)
    setSortOrder(sortOrder)
  }

  return (
    <Root>
      <Header>
        <SectionTitle>Account users</SectionTitle>
        <RightContent>
          <EnhancedSearchInput placeholder='Search' onChange={handleFilterChange} />
          <PrimaryButton>Connect users</PrimaryButton>
        </RightContent>
      </Header>
      <ListContainer>
        <Toolbar>
          <ToolbarText>
            {selectedCount} user{selectedCount !== 1 ? 's' : ''} selected
          </ToolbarText>
          <EditButton />
          <DeleteButton />
        </Toolbar>
        <ListHeader>
          <Checkbox checked={allSelected} onChange={onToggleSelectAll} />
          <div />
          <UserColumn name='name' sortOrder={sortOrder} sortedBy={sortedBy} onSortChange={handleSortChange}>
            User
          </UserColumn>
          <div />
          <PermissionColumn name='role' sortOrder={sortOrder} sortedBy={sortedBy} onSortChange={handleSortChange}>
            Permission
          </PermissionColumn>
        </ListHeader>
        {users.map((user, i) => {
          const isLastElement = i + 1 === users.length
          return (
            <User
              key={i}
              ref={isLastElement ? lastUserElementRef : null}
              user={user}
              selected={selectedIds[user.id] || false}
              onChangeSelected={selected => onChangeSelected(user.id, selected)}
            />
          )
        })}
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

const UserColumn = styled(SortedColumnTitle)`
  grid-column: 3 / span 3;
`

const PermissionColumn = styled(SortedColumnTitle)`
  grid-column: 7 / span 3;
`
