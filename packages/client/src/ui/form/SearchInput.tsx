import * as React from 'react'
import styled from '@emotion/styled'

import { Input } from '../components'
import Search from '../icons/Search'

type Props = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function SearchInput({ className, ...inputProps }: Props) {
  return (
    <Root className={className}>
      <EnhancedSearch />
      <Input {...inputProps} />
    </Root>
  )
}

const EnhancedSearch = styled(Search)`
  position: absolute;
  top: 13.25px;
  left: 13.25px;
`

const Root = styled.div`
  position: relative;

  input {
    padding-left: 36px;
    width: 100%;
  }
`
