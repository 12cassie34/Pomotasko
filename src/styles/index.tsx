import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['Noto Sans TC', 'Roboto', 'Helvetica', '微軟正黑體', 'sans-serif'].join(','),
        h2: {
          fontSize: '1.75rem',
          fontWeight: 700,
        },
        h4: {
          fontSize: '1.25rem',
          fontWeight: 500,
        },
        subtitle1: {
          fontSize: '0.875rem',
          fontWeight: 500,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 'normal',
        },
        body2: {
          fontSize: '0.875rem',
          fontWeight: 'normal',
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 'normal',
        },
        button: {
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    palette: {
        mode: 'dark',
        background: {
            default: "#181521",
            paper: "#181625"
        }
    },
});

export default theme;