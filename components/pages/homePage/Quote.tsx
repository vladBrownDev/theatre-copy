import React from "react"
import { Box } from "@mui/material"
import {
  MainQuote,
  QuoteLine
} from "./styled"

type Props = {
  children: React.ReactNode
  typography?: boolean
}

const Quote = ({ children, typography = true }: Props) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      gap="3em"
      justifyContent="center"
      style={{ userSelect: "none" }}
    >
      <QuoteLine />
      {typography ? (
        <MainQuote variant="h2">{children}</MainQuote>
      ) : children}
      <QuoteLine />
    </Box>
  )
}

export default Quote