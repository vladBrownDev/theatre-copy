import "@emotion/react"
import { globalTheme } from "./src/themes"

type MuiTheme = typeof globalTheme

declare module "@emotion/react" {
  // It's just a hack to provide MUI global theme type for @emotion
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MuiTheme {
  }
}