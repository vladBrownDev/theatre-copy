import { createTheme } from "@mui/material/styles"

const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#F6F6F6",
    },
    secondary: {
      main: "#4E0000",
    },
    background: {
      default: "#090909",
      paper: "#ffffff",
    },
    text: {
      secondary: "#ffebee",
    },
  },
})

export default globalTheme
