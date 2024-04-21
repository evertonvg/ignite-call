import type { AppProps } from 'next/app'
import { globalStyles } from '@/src/styles/global'
import { SessionProvider } from 'next-auth/react'
import '@/src/lib/dayjs'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'

globalStyles()

export default function App({
      Component,
      pageProps: { session, ...pageProps },
    }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
