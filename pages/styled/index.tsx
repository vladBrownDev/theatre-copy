import styled from "@emotion/styled"
import {
    css,
    keyframes,
  } from "@mui/material"

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
export const gradientParams = css`
    background-size: 200% auto;
    color: transparent;
    background-clip: text;
    background: linear-gradient(to right, #fff, #aaa, #888, #666, #777, #aaa, #fff);
    background-size: 200% auto;
    color: transparent;
    background-clip: text;
    animation: ${TextRevealing} 5s linear infinite;
`

export const MainWrapper = styled.div`
    margin: 0 auto;
    padding-top:213px;
    display: flex;
    flex-direction: column;
    align-items:center;
    background: #090909;
    height: 100vh;
    width:100vw;
    background: linear-gradient(180deg, rgba(9,9,9,1) 77%, rgba(29,3,3,1) 100%);`
    
export const ErrorNum = styled.span `
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    ${gradientParams}
    
`
export const ErrorHead = styled.span `
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    margin-left: 8px;
    ${gradientParams}
    
`
export const ErrorBody = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    ${gradientParams}
    margin-top: 16px;
` 
export const ReturnLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    border: 1px solid #FFFFFF;
    filter: drop-shadow(4px 4px 4px rgba(255, 255, 255, 0.5));
    border-radius: 10px;
    gap:10px;
    font-family: 'Optima';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 59px;
    background: #090909;
    color:white;
    cursor: pointer;
    height:65px;
` 
