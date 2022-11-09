import React from "react"
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider
} from "react-scroll-parallax"
import { GetStaticProps } from "next"
import Image from "next/image"
import {
  Box,
  Typography
} from "@mui/material"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
  Carousel,
  CarouselItems,
  Footer,
  Navbar
} from "../components/common"
import {
  MainTitle,
  NewsTeaser,
  Quote,
  Teaser,
  TeaserCarousel,
  TeaserCarouselWrapper,
  VideoStyled
} from "../components/pages/homePage"

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

const Home = () => {

  return (
    <>
      <Box minHeight="200vh" width="100vw" position="relative" bgcolor={({ palette }) => palette.background.default}>

        <ParallaxBanner
          layers={[
            {
              speed: 10,
              children: <Navbar/>,
              style: { zIndex: 9999, position: "relative", inset: "-20px 0" }
            },
            {
              speed: -20,
              children: (
                <Box position="relative" width="100vw" height="calc(100vw * 0.6);">
                  <Image
                    src="/assets/home_page_main.png"
                    fill
                    alt="Night starry sky"
                    sizes="(min-width: 0px) 100vw"
                  />
                </Box>

              ),
            },
            {
              speed: -5,
              opacity: [1, 0.3],
              shouldAlwaysCompleteAnimation: true,
              children: (
                <MainTitle variant="h1">
                  THEATRE UNIVERSE
                </MainTitle>
              ),
              style: { inset: "30em 0" }
            }
          ]}
          style={{ aspectRatio: "16/9" }}
        />

        <Box minHeight="90vh"/>

        <Parallax speed={-5}>
          <Box position="relative" width="100vw" height="calc(100vw * 0.09)">
            <Image
              src="/assets/section_1_end.png"
              fill
              alt="Audience chairs"
              sizes="(min-width: 0px) 100vw"
            />
          </Box>
        </Parallax>

        <Parallax speed={5} style={{ position: "relative", inset: "-20em 0" }}>
          <Quote>Theatre Universe - a borderless world in your hands</Quote>
        </Parallax>

        <Box minHeight="40vh"/>

        <Parallax speed={5}>
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

          <Box position="relative" marginTop="7em">
            <Teaser link="/talents">The best actors for casts of for your own projects</Teaser>
            <VideoStyled autoPlay loop muted>
              <source src="/assets/spotlight.mp4"/>
            </VideoStyled>
          </Box>

        </Parallax>

        <Box minHeight="40vh"/>

        <Parallax speed={-5}>
          <Box position="relative" width="100vw" height="calc(100vw * 0.09)">
            <Image
              src="/assets/section_2_end.png"
              fill
              alt="Stage Lights"
              sizes="(min-width: 0px) 100vw"
            />
          </Box>
        </Parallax>

        <Box minHeight="40vh" />

        <Parallax speed={5}>
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

          <Box position="relative" marginTop="7em" style={{ overflowX: "clip" }}>
            <Teaser link="/online-theatre">Online Theatre to watch plays whenever you want</Teaser>
            <VideoStyled autoPlay loop muted>
              <source src="/assets/spotlight.mp4"/>
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
              src="/assets/Comp 3 2022-10-30 06.54.13 PM.png" alt="" width="384" height="216" />
          </Box>
        </Parallax>

        <Box minHeight="40vh"/>

        <Parallax speed={-5}>
          <Box position="relative" width="100vw" height="calc(100vw * 0.09)">
            <Image
              src="/assets/section_3_end.png"
              fill
              alt="Stage Lights"
              sizes="(min-width: 0px) 100vw"
            />
          </Box>
        </Parallax>

        <Box minHeight="40vh"/>

        <Parallax speed={5}>
          <NewsTeaser image="/assets/news_teaser_image.png">
            News and reviews about new premiers. Stay up to date!
          </NewsTeaser>
        </Parallax>

        <Box minHeight="40vh"/>

        <Parallax speed={0.6}>
          <Quote typography={false}>
            <Box display="flex" justifyContent="center" alignItems="center" gap="20px">
              <Typography color="#fff" variant="h2">
                THEATRE
              </Typography>
              <Image
                alt=""
                draggable={false}
                height={60}
                src="/assets/Logo.svg"
                style={{ filter: "invert(1)" }}
                width={60}
              />
              <Typography color="#fff" variant="h2">
                UNIVERSE
              </Typography>
            </Box>
          </Quote>
        </Parallax>

        <Box minHeight="40vh"/>

        <Parallax speed={0.5}>
          <Footer/>
        </Parallax>

      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await serverSideTranslations(locale as string, ["common"])
  return {
    props,
    // if using the approach with the live translation download, meaning using i18next-locize-backend on server side,
    // there is a reloadInterval for i18next-locize-backend that can be used to reload resources in a specific interval: https://github.com/locize/i18next-locize-backend#backend-options
    // doing so it is suggested to also use the revalidate option, here:
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    // revalidate: 60 * 60, // in seconds
  }
}

Home.getLayout = (page: React.ReactNode) => <ParallaxProvider>{page}</ParallaxProvider>

export default Home