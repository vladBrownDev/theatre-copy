import Image from "next/image"
import Link from "next/link"
import isPropValid from "@emotion/is-prop-valid"
import styled from "@emotion/styled"
import {
  Button,
  css,
  keyframes,
  Theme,
} from "@mui/material"


export const Nav = styled.nav`
  background: ${({ theme }) => theme.palette.primary.main};
  user-select: none;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.appBar};
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

export const CornerContainer = styled.div<{ absolute?: boolean }>`
  ${({ absolute }) => absolute && "position: absolute;"}
  width: 100vw;
  display: flex;
  justify-content: space-between;
  user-select: none;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.appBar};
`

const ButtonDarkBehaviour = (theme: Theme) => css`
  :hover {
    box-shadow: 0 3px 5px -1px rgb(255 255 255 / 20%),
    0 5px 8px rgb(255 255 255 / 18%),
    0 1px 14px rgb(255 255 255 / 16%)
  }

  :active {
    background: #fff;
    color: ${theme.palette.background.default};
    box-shadow: none;
  }

  :focus-visible {
    background: #fff;
    color: ${theme.palette.background.default};
    outline: ${theme.palette.primary.dark} solid 4px;
  }

  &[disabled] {
    background: ${theme.palette.text.disabled} !important;
    color: ${theme.palette.primary.dark};
  }
`

const ButtonLightBehaviour = (theme: Theme) => css`
  :hover {
    box-shadow: ${theme.shadows[5]};
  }

  :active {
    background: ${theme.palette.background.default};
    color: ${theme.palette.primary.light};
    box-shadow: none;
  }

  :focus-visible {
    background: ${theme.palette.background.default};
    color: ${theme.palette.primary.light};
    outline: ${theme.palette.primary.dark} solid 4px;
  }

  &[disabled] {
    background: ${theme.palette.text.disabled} !important;
    color: ${theme.palette.primary.dark};
  }
`

export const NavLink = styled.a<{ authorisation?: boolean, disabled?: boolean }>`
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
  ${({ theme }) => ButtonLightBehaviour(theme)}
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
    transition-duration: 0.4s;
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

export const CarouselItem = styled.div`
  transition-duration: 0.5s;
  user-select: none;

  &[data-active=true] {
    transform: scale(1.2);
  }
`

const ButtonLight = (theme: Theme) => css`
  ${ButtonLightBehaviour(theme)}

  color: ${theme.palette.text.primary};
  border: 1px solid;
  border-radius: 6px;
  user-select: none;
`

const ButtonDark = (theme: Theme) => css`
  ${ButtonDarkBehaviour(theme)}

  color: #fff;
  background: ${theme.palette.background.default};
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 3px -1px #fff;
  user-select: none;
`

export const ButtonStyled = styled(Button)<{ buttonStyle?: "light" | "dark" }>`
  ${({ theme, buttonStyle }) => buttonStyle === "dark" ? ButtonDark(theme) : ButtonLight(theme)}
`

export const LinkStyled = styled(Link, { shouldForwardProp: isPropValid })<{ linkStyle?: "light" | "dark" }>`
  ${({ theme, linkStyle }) => linkStyle === "dark" ? ButtonDark(theme) : ButtonLight(theme)}
  
  text-align: center;
  font-size: 25px;
  width: 6em;
  height: 2em;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextRevealing = keyframes`
  0% {
    background-position: 0;
  }
  60% {
    background-position: -70%;
  }
  80% {
    background-position: -100%;
  }
  100% {
    background-position: -200%;
  }
`

export const TextIrradiation = css`
  background: linear-gradient(to right, #fff, #aaa, #888, #666, #777, #aaa, #fff);
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  animation: ${TextRevealing} 5s linear infinite;
`
