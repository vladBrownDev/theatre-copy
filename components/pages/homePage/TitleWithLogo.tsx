import React from "react"
import Image from "next/image"
import {
  Box,
  Typography
} from "@mui/material"
import LogoSVG from "public/assets/Logo.svg"
import { Quote } from "./index"

const TitleWithLogo = () => {
  return (
    <Quote typography={false}>
      <Box display="flex" justifyContent="center" alignItems="center" gap="20px">
        <Typography color="#fff" variant="h2">
          THEATRE
        </Typography>
        <Image
          alt=""
          draggable={false}
          src={LogoSVG}
          style={{ filter: "invert(1)" }}
        />
        <Typography color="#fff" variant="h2">
          UNIVERSE
        </Typography>
      </Box>
    </Quote>
  )
}

export default TitleWithLogo