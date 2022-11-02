import Image from "next/image"
import {
  Box,
  Container,
  Grid,
} from "@mui/material"
import { useTranslation } from "next-i18next"
import { CurtainCorner } from "."
import {
  CornerContainer,
  LogoBasement,
  Nav,
  NavLink,
} from "./styled"

const Navbar = () => {
  const { t } = useTranslation(["common"])
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
                  {t("news").toUpperCase()}
                </NavLink>
              </Grid>
              <Grid item paddingY="5px" xs={3}>
                <NavLink href="/talents">
                  {t("talents").toUpperCase()}
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
                  {t("online_theatre").toUpperCase()}
                </NavLink>
              </Grid>
              <Grid item xs={3} paddingY="7px">
                <NavLink href="authorisation" authorisation>
                  {t("login").toUpperCase()}
                </NavLink>
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Nav>
      <CornerContainer absolute>
        <CurtainCorner division="navbar" position="left"/>
        <CurtainCorner division="navbar" position="right"/>
      </CornerContainer>
    </>
  )
}

export default Navbar