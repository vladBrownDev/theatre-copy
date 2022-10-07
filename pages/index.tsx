import React from "react"
import { useQuery } from "@apollo/client"
import { GET_HOMEPAGE } from "../src/api/queries/homePage"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
// import { useScroll } from "framer-motion"

const Home = () => {
  const { data, loading } = useQuery(GET_HOMEPAGE)

  return (
    <>
      Home page
      { loading ? "It's Loading..." : (
        <>
          {data?.homePage?.data?.attributes?.title}
        </>
      )}
    </>
  )
}

export default Home