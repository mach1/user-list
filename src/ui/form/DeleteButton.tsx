import * as React from 'react'

import Bin from '../icons/Bin'
import { ActionButton, ActionButtonText } from '../components'

interface Props {
  showText?: boolean
}

export default function EditButton({ showText = true }: Props) {
  return (
    <ActionButton>
      <Bin />
      {showText && <ActionButtonText>Delete</ActionButtonText>}
    </ActionButton>
  )
}
