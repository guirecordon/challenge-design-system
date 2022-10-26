import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@java-challenge/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/guirecordon.png',
    alt: 'Gui Recordon',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
