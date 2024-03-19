import { Box, styled, Text } from '@ignite-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  padding: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$2',
})

export const SessionUser = styled('div', {
  border: '1px solid white',
  borderRadius: '$md',
  padding: '$4',
  marginBottom: '$3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '$4',
  img: {
    borderRadius: '$full',
    objectFit: 'cover',
  },
})

export const AuthError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})
