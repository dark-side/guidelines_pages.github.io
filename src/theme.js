import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#C80515',
      black: '#E02232',
    },
    secondary: {
      main: '#B14E24'
    },
    text: {
      secondary: '#7F8899',
    },
    grey: {
      A100: '#D4D9E2',
      A200: '#A0A0A0',
      A700: '#2B2F43',
    },
  },
  typography: {
    body1: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
      letterSpacing: 0,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.875rem',
      letterSpacing: 0,
    },
    body3: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.1875rem',
      letterSpacing: 0,
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: '3.5rem',
      letterSpacing: 0,
    },
    h2: {
      fontSize: '1.85rem',
      fontWeight: 700,
      lineHeight: '2.5rem',
      letterSpacing: 0,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '2rem',
      letterSpacing: 0,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '2rem',
      letterSpacing: 0,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-display: swap;
          font-family: 'Open Sans', sans-serif;
          font-size: 16;
          font-style: normal;
          font-weight: 400;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#D72130',

          '&:hover': {
            backgroundColor: '#C80515',
          },
        },
      }
    }
  },
});

// console.log(theme);
