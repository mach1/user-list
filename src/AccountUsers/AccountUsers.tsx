import * as React from 'react'
import styled from '@emotion/styled'

import { SectionTitle, PrimaryButton } from '../ui/components'
import SearchInput from '../ui/form/SearchInput'

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
`

const RightContent = styled.div`
  display: flex;
`
