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
        <VideoStyled autoPlay loop muted>
          <source src="/assets/Comp 4_1.mp4"/>
        </VideoStyled>
        <VideoStyled autoPlay loop muted flipped>
          <source src="/assets/Comp 4_1.mp4"/>
        </VideoStyled>
        <Image
          style={{
            position: "absolute",
            top: "90px",
            transform: "rotate(160deg)",
            right: "-3em"
          }}
          src="/assets/Comp 3 2022-10-30 06.54.13 PM.png" alt="" width="384" height="216"/>
      </Box>
    </>
  )
}

export default OnlineTheatreTeaser