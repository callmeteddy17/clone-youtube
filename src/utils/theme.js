import { createTheme } from '@mui/material';

export const themeDark = createTheme({
  palette: {
    modeCustomed: {
      text: 'white',
      background: '#0f0f0f',
      cardContext: '#1e1e1e',
    },
  },
});
export const themeLight = createTheme({
  palette: {
    modeCustomed: {
      text: 'black',
      background: 'white',
      cardContext: 'white',
    },
  },
});
