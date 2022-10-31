import React from "react"
import Head from "next/head"
import {
  Box,
  useTheme
} from "@mui/material"
import { Antonio } from "@next/font/google"
import {
  Footer,
  Navbar
} from "../common"

const antonio = Antonio({
  weight: "400",
  subsets: ["latin"]
})

type Props = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  const theme = useTheme()
  return (
    <html className={antonio.className}>
      <Box bgcolor={theme.palette.background.default}>

        <Head>
          <title>Theatre Universe</title>
        </Head>

        <Navbar/>

        <main>{children}</main>

        <Footer/>

      </Box>
    </html>
  )
}

export default DefaultLayout
