import "@emotion/react"
import { Theme } from "@mui/material"
import { globalTheme } from "./src/themes"

type MuiTheme = ReturnType<typeof globalTheme> & Theme

declare module "@emotion/react" {
  // It's just a hack to provide MUI global theme type for @emotion
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MuiTheme {
  }
}