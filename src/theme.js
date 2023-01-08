import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  typography: {
    fontfamily: ["Poppins", "sans-serif"].join(","),
  },

  palette: {
    type: "light",
    primary: {
      main: "#edb29f",
      light: "#e4cfcd",
      dark: "#ff8a80",
      contrastText: "rgba(80,78,78,0.87)",
    },
    secondary: {
      main: "#93cfe4",
      contrastText: "rgba(105,100,100,0.87)",
    },
    error: {
      main: "#e65100",
    },
    info: {
      main: "#ffcc80",
    },
    text: {
      primary: "rgba(133,131,131,0.87)",
      secondary: "rgba(131,126,126,0.54)",
      disabled: "rgba(119,114,114,0.38)",
      hint: "rgba(127,125,125,0.38)",
    },
  },
});
