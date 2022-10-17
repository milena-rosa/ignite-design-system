import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@mbr-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi
        sint repellat natus nobis. Laborum eaque iusto, sunt vero eligendi odio
        voluptate cum. Neque impedit cumque dolorum voluptas necessitatibus?
        Dolores.
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
