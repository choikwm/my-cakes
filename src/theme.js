import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    background: {
      default: "#f7e4e7",
    },
    type: "light",
    primary: {
      main: "#dab1b1",
      dark: "#f3ecec",
      contrastText: "rgba(111,101,101,0.87)",
      light: "#b7a5a5",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "rgba(55,47,47,0.87)",
      light: "#cbafaf",
      dark: "#ceb3b3",
    },
    text: {
      primary: "rgba(148,125,130,0.87)",
      secondary: "rgba(78,70,70,0.54)",
      disabled: "rgba(67,57,57,0.38)",
      hint: "rgba(65,58,58,0.38)",
    },
  },
});

// primary: {
//     main: "#c7838a",
//     dark: "#715151",
//   },
//   secondary: {
//     main: "#d8d5d6",
//     contrastText: "rgba(55,47,47,0.87)",
//   },
//   text: {
//     primary: "rgba(100,89,89,0.87)",
//     secondary: "rgba(35,32,32,0.54)",
//     disabled: "rgba(18,7,7,0.38)",
//     hint: "rgba(8,3,3,0.38)",
//   },