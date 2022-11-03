import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const MainTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  font-size: 60px;
  text-align: center;
`

export const QuoteLine = styled.div`
  height: 3px;
  width: 1em;
  display: block;
  background: ${({ theme }) => theme.palette.primary.main};
`

export const MainQuote = styled(Typography)`
  font-size: 38px;
  color: ${({ theme }) => theme.palette.primary.main};
`