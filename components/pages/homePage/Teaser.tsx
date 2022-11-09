import React from "react"
import Image from "next/image"
import {
  Box,
  BoxProps
} from "@mui/material"
import { LinkStyled } from "../../common"
import { TeaserText } from "./styled"

type Props = {
  children: React.ReactNode
  link: string
  tracery?: boolean
} & BoxProps

const Teaser = ({ children, link, tracery = true, ...rest }: Props) => {
  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        minHeight="40vh"
        {...rest}
      >
        {tracery && (
          <Image src="/assets/Tracery.png" width="266" height="78" alt="" />
        )}

        <TeaserText>{children}</TeaserText>

        <LinkStyled linkStyle="dark" href={link}>DISCOVER</LinkStyled>
      </Box>
    </>
  )
}

export default Teaser