import Image from "next/image"
import styled from "@emotion/styled"


export const Nav = styled.nav`
  background: ${({ theme }) => theme.palette.primary.main};
`

export type TCorner = {
  division: "navbar" | "footer"
  position: "left" | "right"
}

export const Corner = styled(Image)<TCorner>`
  ${({ division }) => division === "navbar" ? "margin-top: -0.8px;" : "bottom: 0px"};
  ${({ position }) => position === "left" ? "left: 0px" : "transform: scaleX(-1); right: 0px !important"};
`

export const NavLink = styled.a`
  margin: 0 ${({ theme }) => theme.spacing(2)};
  display: block;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  border-radius: 6px;
  transition-duration: 0.4s;
  :hover {
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.primary.light};
  }
`

export const LogoBasement = styled.div`
  ::before {
    content: "";
    display: block;
    width: 108px;
    height: 108px;
    background: ${({ theme }) => theme.palette.primary.main};
    position: absolute;
    top: -20px;
    left: -20px;
    border-radius: 50%;
  }
  
  img {
    position: relative;
  }
`
