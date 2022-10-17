import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  minHeight: 80,
  padding: '$3 $4',
  resize: 'vertical',

  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
