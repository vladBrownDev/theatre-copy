import React from "react"
import Image from "next/image"
import { Box } from "@mui/material"
import {
  Carousel,
  CarouselItems
} from "../../common"
import { Teaser } from "./index"
import {
  TeaserCarousel,
  TeaserCarouselWrapper,
  VideoStyled
} from "./styled"

const actors: CarouselItems = [
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

const TalentsTeaser = ({ children }: Props) => {
  return <>
    <TeaserCarouselWrapper>
      <TeaserCarousel>
        <Carousel
          items={actors}
          loop
          perSlide={5}
          gutter={40}
          initialStartingPosition="center"
        />
      </TeaserCarousel>
    </TeaserCarouselWrapper>

    <Box position="relative" marginTop="7em" overflow="hidden">
      <Teaser link="/talents">{children}</Teaser>
      <VideoStyled autoPlay loop muted>
        <source src="/assets/Comp 4_1.mp4"/>
      </VideoStyled>
    </Box>
  </>
}

export default TalentsTeaser