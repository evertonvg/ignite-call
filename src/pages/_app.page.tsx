import type { AppProps } from 'next/app'
import { globalStyles } from '@/src/styles/global'
import { SessionProvider } from 'next-auth/react'
import '@/src/lib/dayjs'

globalStyles()

export default function App({
      Component,
      pageProps: { session, ...pageProps },
    }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
