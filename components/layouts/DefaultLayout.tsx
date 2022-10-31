import React from "react"
import Head from "next/head"
import {
  Box,
  useTheme
} from "@mui/material"
import {
  Footer,
  Navbar
} from "../common"

type Props = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  const theme = useTheme()
  return (
    <Box bgcolor={theme.palette.background.default}>

      <Head>
        <title>Theatre Universe</title>
      </Head>

      <Navbar/>

      <main>{children}</main>

      <Footer/>

    </Box>
  )
}

export default DefaultLayout
