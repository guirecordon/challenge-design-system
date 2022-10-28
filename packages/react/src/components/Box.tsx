import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray',
  border: '1px solid $darkblue',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
