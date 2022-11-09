import React from "react"
import Image from "next/image"
import { Box } from "@mui/material"

type Props = {
  image: string
}

const BreakImage = ({ image }: Props) => {
  return (
    <Box position="relative" width="100vw" height="calc(100vw * 0.09)">
      <Image
        src={image}
        fill
        alt=""
        sizes="(min-width: 0px) 100vw"
      />
    </Box>
  )
}

export default BreakImage