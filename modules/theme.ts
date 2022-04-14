import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#1b2533',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#ffead9',
      main: '#31a05f',
      dark: '#2F333A',
    },
    warning: {
      main: '#ffd8a2',
      dark: '#144da1',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Muller', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Muller
    fontWeightRegular: 'normal', // Muller
    fontWeightMedium: 800, // Muller
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Muller', sans-serif",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 48,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 42,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 36,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 18,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 18,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;