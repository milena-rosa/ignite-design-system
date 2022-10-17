import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  alignItems: 'baseline',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  display: 'flex',
  padding: '$3 $4',

  // '&:has(input:focus)': {
  // borderColor: '$ignite300',
  // },

  '&:focus-within': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 0,
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
