import { createTheme, } from "@mui/material"
import { Typography } from "@mui/material/styles/createTypography"

const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#F6F6F6",
      dark: "#878787",
    },
    secondary: {
      main: "#4E0000",
      dark: "#272727",
    },
    background: {
      default: "#090909",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#1c1c1c",
    },
  },
  typography: {
    fontFamily: "inherit",
  } as Typography,
})

export default globalTheme
