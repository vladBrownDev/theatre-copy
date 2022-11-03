import React, {
  useEffect,
  useRef
} from "react"
import { GetStaticProps } from "next"
import Image from "next/image"
import { Box } from "@mui/material"
import {
  IParallax,
  Parallax,
  ParallaxLayer
} from "@react-spring/parallax"
import {
  motion,
  useScroll
} from "framer-motion"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
  MainQuote,
  MainTitle,
  QuoteLine
} from "../components/pages/homePage/styled"


const Home = () => {
  const { scrollY } = useScroll()
  const parallax = useRef<IParallax>(null)

  const lockParallax = (state: boolean) => {
    if (parallax.current) {
      parallax.current.container.current.style.pointerEvents = state ? "none" : "auto"
    }
  }

  useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest >= 300) {
        lockParallax(false)
      } else {
        lockParallax(true)
        if (parallax.current) {
          if (latest <= 100) {
            parallax.current.scrollTo(0)
          }
        }
      }
    })
  }, [])

  return (
    <>
      <Box minHeight="200vh" width="100vw" position="relative">
        <Parallax ref={parallax} pages={3} style={{ top: "0", left: "0", pointerEvents: "none" }}>

          <ParallaxLayer offset={0} speed={0.4}>
            <Box position="relative" width="100vw" height="calc(100vw * 0.6);">
              <Image
                src="/assets/home_page_main.png"
                fill
                alt="Night starry sky"
                sizes="(min-width: 0px) 100vw"
              />
            </Box>
          </ParallaxLayer>

          <ParallaxLayer offset={0.3} speed={0.1}>
            <motion.div initial="hidden" whileInView="visible">
              <MainTitle variant="h1" position="relative">
                THEATRE UNIVERSE
              </MainTitle>
            </motion.div>
          </ParallaxLayer>


          <ParallaxLayer offset={0.92} speed={0.1}>
            <Box position="relative" width="100vw" height="calc(100vw * 0.09)">
              <Image
                src="/assets/section_1_end.png"
                fill
                alt="Audience chairs"
                sizes="(min-width: 0px) 100vw"
              />
            </Box>
          </ParallaxLayer>

          <ParallaxLayer offset={0.97} speed={0.6}>
            <Box
              alignItems="center"
              display="flex"
              gap="3em"
              justifyContent="center"
            >
              <QuoteLine/>
              <MainQuote variant="h2">
                Theater is a borderless world in your hands
              </MainQuote>
              <QuoteLine/>
            </Box>
          </ParallaxLayer>
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

export default Home