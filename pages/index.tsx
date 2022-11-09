import React from "react"
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider
} from "react-scroll-parallax"
import { GetStaticProps } from "next"
import Image from "next/image"
import { Box } from "@mui/material"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
  Footer,
  Navbar
} from "../components/common"
import {
  MainTitle,
  NewsTeaser,
  OnlineTheatreTeaser,
  Quote,
  TalentsTeaser,
  TitleWithLogo
} from "../components/pages/homePage"
import { BannerLayer } from "react-scroll-parallax/src/components/ParallaxBanner/types"

const NavLayer: BannerLayer = {
  speed: 10,
  children: <Navbar/>,
  style: { zIndex: 9999, position: "relative", inset: "-20px 0" }
}

const BGLayer: BannerLayer = {
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
  )
}

const TitleLayer: BannerLayer = {
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

const Home = () => {
  return (
    <>
      <Box
        bgcolor={({ palette }) => palette.background.default}
        position="relative"
        width="100vw"
      >

        <ParallaxBanner
          layers={[
            NavLayer,
            BGLayer,
            TitleLayer
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
          <TalentsTeaser>The best actors for casts or for your own projects</TalentsTeaser>
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
          <OnlineTheatreTeaser>
            Online Theatre to watch plays whenever you want
          </OnlineTheatreTeaser>
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
          <TitleWithLogo />
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