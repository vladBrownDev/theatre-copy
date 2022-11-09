import Image from "next/image"
import isPropValid from "@emotion/is-prop-valid"
import styled from "@emotion/styled"
import { Typography, } from "@mui/material"
import { TextIrradiation } from "../../../common"

export const MainTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  font-size: 60px;
  text-align: center;
`

export const QuoteLine = styled.div`
  height: 3px;
  width: 3em;
  display: block;
  background: ${({ theme }) => theme.palette.primary.main};
`

export const MainQuote = styled(Typography)`
  font-size: 38px;
  font-style: italic;
  color: ${({ theme }) => theme.palette.primary.main};
`

export const TeaserCarouselWrapper = styled.div`
  position: relative;

  :before {
    content: "";
    display: block;
    width: 100%;
    height: 8em;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    background: #fff;
    filter: blur(50px);
  }
`

export const TeaserCarousel = styled.div`

  :before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    top: -35px;
    border: 8px dashed ${({ theme }) => theme.palette.primary.main};
    box-sizing: border-box;
  }

  :after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    bottom: -35px;
    border: 8px dashed ${({ theme }) => theme.palette.primary.main};
    box-sizing: border-box;
    z-index: 0;
  }

  .use-spring-carousel-main-wrapper {
    z-index: 1;
  }
`

export const TeaserText = styled.h2`
  user-select: none;
  font-size: 38px;
  max-width: 11em;
  text-align: center;

  ${TextIrradiation}
`

export const NewsArch = styled(Image, { shouldForwardProp: isPropValid })<{ reverted?: boolean, outer?: boolean }>`
  ${({ reverted }) => reverted && "transform: scaleX(-1)"};

  position: relative;
  ${({ outer, reverted }) => {
    if (outer) {
      return reverted ? "right: 10%" : "left: 10%"
    }
  }};
`
