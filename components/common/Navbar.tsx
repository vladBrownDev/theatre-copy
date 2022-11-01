import Image from "next/image"
import {
  Box,
  Container,
  Grid,
} from "@mui/material"
import { CurtainCorner } from "."
import {
  CornerContainer,
  LogoBasement,
  Nav,
  NavLink,
} from "./styled"

const Navbar = () => {
  return (
    <>
      <Nav>
        <Container maxWidth="lg">
          <Grid
            alignItems="center"
            container
            columnSpacing={2}
            pb="6px"
            pt="96px"
          >

            <Grid
              columnSpacing={1}
              container
              item
              justifyContent="flex-end"
              xs={5}
            >
              <Grid item paddingY="5px" xs={3}>
                <NavLink href="/news">
                  NEWS
                </NavLink>
              </Grid>
              <Grid item paddingY="5px" xs={3}>
                <NavLink href="/talents">
                  TALENTS
                </NavLink>
              </Grid>
            </Grid>

            <Grid item xs={2} position="relative" container justifyContent="center">
              <Box position="absolute" top="-34px">
                <LogoBasement>
                  <Image src="/assets/Logo.svg" width={69} height={69} alt=""/>
                </LogoBasement>
              </Box>
            </Grid>

            <Grid
              alignItems="center"
              columnSpacing={1}
              container
              item
              justifyContent="flex-start"
              xs={5}
            >
              <Grid item xs={5} paddingY="5px">
                <NavLink href="online-theatre">
                  ONLINE THEATRE
                </NavLink>
              </Grid>
              <Grid item xs={3} paddingY="7px">
                <NavLink href="authorisation" authorisation>
                  LOGIN
                </NavLink>
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Nav>
      <CornerContainer>
        <CurtainCorner division="navbar" position="left"/>
        <CurtainCorner division="navbar" position="right"/>
      </CornerContainer>
    </>
  )
}

export default Navbar