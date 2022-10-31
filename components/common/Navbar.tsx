import Image from "next/image"
import {
  Box,
  Container,
  Grid,
} from "@mui/material"
import { CurtainCorner } from "."
import {
  LogoBasement,
  Nav,
  NavLink,
} from "./styled"

const Navbar = () => {
  return (
    <>
      <Nav>
        <Box>
          <Container maxWidth="lg">
            <Grid
              alignItems="center"
              container
              columnSpacing={2}
              pb="15px"
              pt="96px"
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={2}>
                <NavLink href="/news">
                  NEWS
                </NavLink>
              </Grid>
              <Grid item xs={2}>
                <NavLink href="/talents">
                  TALENTS
                </NavLink>
              </Grid>
              <Grid item xs={2} position="relative">
                <Grid container justifyContent="center">
                  <Box position="absolute" top="-34px">
                    <LogoBasement>
                      <Image src="/Logo.svg" width={69} height={69} alt=""/>
                    </LogoBasement>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <NavLink href="online-theatre">
                  ONLINE THEATRE
                </NavLink>
              </Grid>
              <Grid item xs={2}>
                Login
              </Grid>
            </Grid>
          </Container>
        </Box>
        <CurtainCorner division="navbar" position="left"/>
        <CurtainCorner division="navbar" position="right"/>
      </Nav>
    </>
  )
}

export default Navbar