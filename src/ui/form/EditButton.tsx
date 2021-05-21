import * as React from 'react'

import Pencil from '../icons/Pencil'
import { ActionButton, ActionButtonText } from '../components'

export default function EditButton() {
  return (
    <ActionButton>
      <Pencil />
      <ActionButtonText>Edit</ActionButtonText>
    </ActionButton>
  )
}
