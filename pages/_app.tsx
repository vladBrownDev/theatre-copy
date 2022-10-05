import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import client from "../src/api"
import "../styles/globals.css"

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  let componentWithLayout
  if (Component.getLayout) {
    const getLayout = Component.getLayout
    componentWithLayout = getLayout(<Component {...pageProps} />)
  } else {
    componentWithLayout = <Component {...pageProps} />
  }

  return (
    <ApolloProvider client={client}>
      {componentWithLayout}
    </ApolloProvider>
  )
}