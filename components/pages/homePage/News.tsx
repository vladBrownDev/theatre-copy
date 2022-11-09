import React from "react"
import Image from "next/image"
import { Box } from "@mui/material"
import {
  NewsArch,
  Teaser
} from "./index"

type Props = {
  children: React.ReactNode
  image: string
}

const News = ({ children, image }: Props) => {
  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        marginBottom="40px"
      >
        <NewsArch outer src="/assets/news_effect_2.svg" alt="" width="455" height="455" />
        <NewsArch src="/assets/news_effect_1.svg" alt="" width="158" height="315" />
        <Image src={image} alt="News image" width="394" height="394" />
        <NewsArch reverted src="/assets/news_effect_1.svg" alt="" width="158" height="315" />
        <NewsArch outer reverted src="/assets/news_effect_2.svg" alt="" width="455" height="455" />
      </Box>
      <Teaser link="/news" tracery={false}>
        {children}
      </Teaser>
    </>
  )
}

export default News