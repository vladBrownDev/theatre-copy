import React from "react"
import Image from "next/image"
import { Box } from "@mui/material"
import {
  Carousel,
  CarouselItems,
  Spotlight
} from "../../common"
import { Teaser } from "./index"
import {
  TeaserCarousel,
  TeaserCarouselWrapper
} from "./styled"

const plays: CarouselItems = [
  {
    id: "0",
    renderItem: <Image draggable={false} src="/assets/actor1.png" width={220} height={330} alt="Actor 1"/>
  },
  {
    id: "1",
    renderItem: <Image draggable={false} src="/assets/actor2.png" width={220} height={330} alt="Actor 2"/>
  },
  {
    id: "2",
    renderItem: <Image draggable={false} src="/assets/actor1.png" width={220} height={330} alt="Actor 1"/>
  },
  {
    id: "3",
    renderItem: <Image draggable={false} src="/assets/actor2.png" width={220} height={330} alt="Actor 2"/>
  },
  {
    id: "4",
    renderItem: <Image draggable={false} src="/assets/actor1.png" width={220} height={330} alt="Actor 1"/>
  },
]

type Props = {
  children: React.ReactNode
}

const OnlineTheatreTeaser = ({ children }: Props) => {
  return (
    <>
      <TeaserCarouselWrapper>
        <TeaserCarousel>
          <Carousel
            items={plays}
            loop
            perSlide={5}
            gutter={40}
            initialStartingPosition="center"
          />
        </TeaserCarousel>
      </TeaserCarouselWrapper>

      <Box position="relative" marginTop="7em" style={{ overflowX: "clip" }}>
        <Teaser link="/online-theatre">{children}</Teaser>
        <Spotlight/>
        <Spotlight flipped/>
      </Box>
    </>
  )
}

export default OnlineTheatreTeaser