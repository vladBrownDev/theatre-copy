import {
  Facebook,
  Instagram,
  Telegram,
  YouTube
} from "@mui/icons-material"
import {
  Container,
  Grid
} from "@mui/material"
import { CurtainCorner } from "./index"
import {
  CornerContainer,
  Foot,
  SocialMediaLink
} from "./styled"

const Footer = () => {
  return (
    <>
      <CornerContainer>
        <CurtainCorner division="footer" position="left"/>
        <CurtainCorner division="footer" position="right"/>
      </CornerContainer>
      <Foot>
        <Container maxWidth="lg">
          <Grid
            alignItems="center"
            container
            justifyContent="space-between"
            pb="22px"
            pt="24px"
          >
            <Grid item xs={3} fontSize="18px">
              2022 © All rights reserved.
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent="center">
                <Grid item paddingX="15px" xs="auto">
                  <SocialMediaLink href="/" target="_blank">
                    <Instagram fontSize="large"/>
                  </SocialMediaLink>
                </Grid>
                <Grid item paddingX="15px">
                  <SocialMediaLink href="/" target="_blank">
                    <Facebook fontSize="large"/>
                  </SocialMediaLink>
                </Grid>
                <Grid item paddingX="15px">
                  <SocialMediaLink href="/" target="_blank">
                    <YouTube fontSize="large"/>
                  </SocialMediaLink>
                </Grid>
                <Grid item paddingX="15px">
                  <SocialMediaLink href="/" target="_blank">
                    <Telegram fontSize="large"/>
                  </SocialMediaLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Foot>
    </>
  )
}

export default Footer