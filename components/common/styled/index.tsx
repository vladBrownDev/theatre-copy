import Image from "next/image"
import styled from "@emotion/styled"


export const Nav = styled.nav`
  background: ${({ theme }) => theme.palette.primary.main};
  user-select: none;
`

export type TCorner = {
  division: "navbar" | "footer"
  position: "left" | "right"
}

export const Corner = styled(Image)<TCorner>(({ division, position }) => {
  if (division === "navbar") {
    return {
      ...(position === "left" && { transform: "translateY(-1px)" }),
      ...(position === "right" && { transform: "translateY(-1px) scaleX(-1)" })
    }
  } else {
    return {
      ...(position === "left" && { transform: "translateY(1px) rotate(180deg) scaleX(-1)" }),
      ...(position === "right" && { transform: "translateY(1px) rotate(180deg)" })
    }
  }
})

export const CornerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
  pointer-events: none;
`

export const NavLink = styled.a<{ authorisation?: boolean }>`
  color: ${({ theme }) => theme.palette.text.primary};
  margin: 0 10%;
  padding-top: inherit;
  padding-bottom: inherit;
  display: block;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  border-radius: 6px;
  transition-duration: 0.4s;
  ${({ authorisation }) => authorisation &&
          "font-weight: bold;" +
          "border: 1px solid;"
  };

  :hover {
    box-shadow: inset 2px 2px 4px;
  }

  :active {
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.primary.light};
    box-shadow: none;
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

export const Foot = styled.footer`
  background: ${({ theme }) => theme.palette.primary.main};
  position: relative;
`

export const CopyrightInfo = styled.span`
  cursor: default;
`

export const SocialMediaLink = styled.a`
  cursor: pointer;

  :hover {
    opacity: 0.7;
    filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.4));
  }
`
