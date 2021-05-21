import * as React from 'react'
import styled from '@emotion/styled'
import check from './check.svg'

export default function Checkbox() {
  return <CheckboxInput type='checkbox' />
}

const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.checkboxBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xs}px;
  cursor: pointer;
  margin: 0;

  :checked {
    background-color: ${({ theme }) => theme.colors.brand50};
    border: none;
    background-image: url(${check});
  }
`
