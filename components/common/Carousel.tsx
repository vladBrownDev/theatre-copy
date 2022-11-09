import React, { useState } from "react"
import { useSpringCarousel } from "react-spring-carousel"
import { CarouselItem } from "./styled"

export type CarouselItems = Array<{ id: string, renderItem: React.ReactNode }>

type Props = {
  items: CarouselItems
  loop?: boolean
  perSlide?: number
  gutter?: number
  initialStartingPosition?: "start" | "center" | "end"
}

export const Carousel = ({
                           items,
                           loop = false,
                           perSlide = 3,
                           gutter = 0,
                           initialStartingPosition = "start",
                         }: Props) => {
  const [active, setActive] = useState(0)

  const { useListenToCustomEvent, carouselFragment } = useSpringCarousel({
    withLoop: loop as true, // Weird type error
    itemsPerSlide: perSlide,
    gutter,
    initialStartingPosition,
    items: items.map(({ id, renderItem }, index) => ({
      id,
      renderItem: <CarouselItem data-active={index === active}>{renderItem}</CarouselItem>
    })),
  })

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActive(event.nextItem.index)
    }
  })

  return (
    <div style={{ overflowX: "clip" }}>
      {carouselFragment}
    </div>
  )
}

