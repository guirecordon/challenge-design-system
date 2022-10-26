import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@java-challenge/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
