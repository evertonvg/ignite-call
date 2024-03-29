import type { AppProps } from 'next/app'
import { globalStyles } from '@/src/styles/global'
import { SessionProvider } from 'next-auth/react'
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} session={session} />
    </SessionProvider>
  )
}
