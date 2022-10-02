import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8456EC',
      dark: '#501FC1',
      light: '#E87BF8',
      darker: '#240D57',
    },
    secondary: {
      main: '#E87BF8',
    },
    neutral: {
      main: '#4F4F4F',
      light: '#828282',
    },
    background: {
      default: '#F6F2FF',
      paper: '#f6f2ff',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
    h1: {
      fontSize: '3.5rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});