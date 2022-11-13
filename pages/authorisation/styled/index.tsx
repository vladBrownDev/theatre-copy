import styled from "@emotion/styled"
import { gradientParams } from "../../styled"

export const LoginInput = styled.input `
    width: 368px;
    height: 32px;
    background-color: #090909;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(246, 246, 246, 0.4);
    font-family: 'Optima';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(198, 198, 198, 0.6);
    padding-left:16px;
`
export const MainWrapper = styled.div`
    margin: 0 auto;
    padding-top:222px;
    display: flex;
    flex-direction: column;
    align-items:center;
    background: #090909;
    height: 100vh;
    width:100vw;
    background: linear-gradient(180deg, rgba(9,9,9,1) 77%, rgba(29,3,3,1) 100%);`
   
export const LoginHead = styled.h1`
  font-family: 'Optima';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  margin: 0 0 20px 0;
  ${gradientParams}
`

export const ForgotPassword = styled.a `
  font-family: 'Optima';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-decoration-line: underline;
  color: #C7C7C7;
  margin-top: 40px;
`

export const LoginButton = styled.button `
  width: 369px;
  height: 36px;
  background: #F6F6F6;
  border-radius: 5px;
  font-family: 'Optima';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #090909;
  cursor:pointer;
  margin-top:28px;
  line-height: 24px;
`
export const RegisterBut = styled.a `
  font-family: 'Optima';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-decoration-line: underline;
  color: #C7C7C7;
  cursor:pointer;
`
export const RegisterText = styled.span `
  font-family: 'Optima';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #C7C7C7;
`

export const FacebookIcon = styled.a `
  background-image: url("/public/assets/facebook.png");
  height:38px;
  width: 38px;
  display: inline-block;
`