import { Box, styled } from '@ignite-ui/react'

export const Container = styled(Box, {
  margin: '$6 auto 0',
  padding: 0,
  display: 'grid',
  maxWidth: '100%',
  position: 'relative',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',
        '@media(max-width: 990px)': {
          gridTemplateColumns: '1fr',
        },
      },
      false: {
        width: 540,
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$16 $6 0',
  overflowY: 'scroll',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  width: 280,
})
export const TimePickerHeader = styled('div', {
  fontWeight: '$medium',
  position: 'absolute',
  top: '-1px',
  right: '-1px',
  width: 280,
  padding: '20px 0',
  textAlign: 'center',
  overflow: 'hidden',
  zIndex: 1,
  backgroundColor: '$gray900',
  textTransform: 'capitalize',
  span: {
    color: '$gray200',
  },
})
export const TimePickerList = styled('div', {
  marginTop: '$3',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',
  '@media(max-width: 900px)': {
    gridTemplateColumns: '2fr',
  },
})
export const TimePickerItem = styled('button', {
  border: 0,
  backgroundColor: '$gray600',
  padding: '$2 0',
  color: '$gray100',
  borderRadius: '$sm',
  fontSize: '$sm',
  lineHeight: '$base',
  '&:last-child': {
    marginBottom: '$6',
  },
  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },
  '&:not(disabled):hover': {
    background: '$gray500',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
