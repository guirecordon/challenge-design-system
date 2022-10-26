import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$blue',

        '&:not(:disabled):hover': {
          background: '$green',
        },

        '&:disabled': {
          backgroundColor: '$darkblue',
        },
      },

      secondary: {
        color: '$green',
        border: '2px solid $green',

        '&:not(:disabled):hover': {
          background: '$blue',
          color: '$white',
        },

        '&:disabled': {
          color: '$green',
          borderColor: '$green',
        },
      },

      tertiary: {
        color: '$lightgreen',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$darkblue',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
