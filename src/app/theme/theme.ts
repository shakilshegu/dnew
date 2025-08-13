import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5992e8',
      light: '#7ba7ec',
      dark: '#4a7bc8',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#f0e979',
      light: '#f3ed96',
      dark: '#d4ce5a',
      contrastText: '#000000'
    },
    background: {
      default: '#050505',
      paper: '#141414'
    },
    text: {
      primary: '#ffffff',
      secondary: '#a5a5a5',
      disabled: '#666666'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    divider: 'rgba(255, 255, 255, 0.1)'
  },
  typography: {
    fontFamily: '"DM Sans", "HelveticaNeue", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'HelveticaNeue',
      fontSize: '153px',
      fontWeight: 400,
      letterSpacing: '-3.06px',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: 'HelveticaNeue',
      fontSize: '90px',
      fontWeight: 400,
      lineHeight: 1.2
    },
    h3: {
      fontFamily: 'HelveticaNeue',
      fontSize: '84px',
      fontWeight: 400,
      lineHeight: 1.2
    },
    h4: {
      fontFamily: 'HelveticaNeue',
      fontSize: '66px',
      fontWeight: 400,
      lineHeight: 1.2
    },
    h5: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '50px',
      fontWeight: 700,
      letterSpacing: '0.50px'
    },
    h6: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '45px',
      fontWeight: 700,
      letterSpacing: '0.45px'
    },
    subtitle1: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '33px',
      fontWeight: 400,
      letterSpacing: '0.33px'
    },
    subtitle2: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '24px',
      fontWeight: 500,
      letterSpacing: '2.40px'
    },
    body1: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '27px',
      fontWeight: 400,
      letterSpacing: '0.27px'
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: '0.24px'
    },
    button: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '20px',
      fontWeight: 500,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;