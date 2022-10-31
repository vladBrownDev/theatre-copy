import Image from "next/image"
import styled from "@emotion/styled"


export const Nav = styled.nav`
  background: ${({ theme }) => theme.palette.primary.main};
`

export type TCorner = {
  division: "navbar" | "footer"
  position: "left" | "right"
}

export const Corner = styled(Image)<TCorner>(({ division, position }) => {
  if (division === "navbar") {
    return {
      ...(position === "left" && { transform: "translateY(-0.8px)" }),
      ...(position === "right" && { transform: "translateY(-0.8px) scaleX(-1)" })
    }
  } else {
    return {
      ...(position === "left" && { transform: "translateY(0.8px) rotate(180deg) scaleX(-1)" }),
      ...(position === "right" && { transform: "translateY(0.8px) rotate(180deg)" })
    }
  }
})

export const CornerContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
