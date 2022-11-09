import type {
  ReactElement,
  ReactNode
} from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import { appWithTranslation } from "next-i18next"
import {
  DefaultLayout,
  RootLayout
} from "../components/layouts"
import client from "../src/api"
import "../styles/globals.css"
import "../i18n"
import { globalTheme } from "../src/themes"

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  let componentWithLayout
  if (Component.getLayout) {
    const getLayout = Component.getLayout
    componentWithLayout = getLayout(<Component {...pageProps} />)
  } else {
    componentWithLayout = (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    )
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={globalTheme}>
        <EmotionThemeProvider theme={globalTheme}>
          <RootLayout>
            {componentWithLayout}
          </RootLayout>
        </EmotionThemeProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default appWithTranslation(MyApp)