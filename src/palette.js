const customPalette = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for Light mode
                  primary: {
                      main: '#0ecb81',
                      white: '#fff',
                      light: '#f3f3f3',
                      yellow: '#ffcc66',
                      grey: '#1f2937',
                      border: 'rgba(0, 0, 0, 0.12)',
                      gradient:
                          'linear-gradient(to right bottom, #9be15d, #39b385)',
                  },
                  secondary: {
                      main: '#405DE6',
                  },
                  background: {
                      default: '#fff',
                      paper: '#f3f4f6',
                  },
                  text: {
                      primary: '#212121',
                      secondary: '#4a4a4a',
                  },
                  action: {
                      selected: '#0ecb81',
                      hover: '#0ecb81',
                  },
                  divider: 'rgba(0, 0, 0, 0.12)',
                  border: 'rgba(0, 0, 0, 0.12)',
                  red: '#ea3943',
              }
            : {
                  // palette values for Dark mode
                  primary: {
                      main: '#0ecb81',
                      white: '#fff',
                      light: '#f3f3f3',
                      yellow: '#ffcc66',
                      grey: '#292d32',
                      border: 'rgba(0, 0, 0, 0.12)',
                      gradient:
                          'linear-gradient(to right bottom, #9be15d, #39b385',
                  },
                  background: {
                      default: '#121212',
                      paper: '#16181c',
                  },
                  text: {
                      primary: '#fff',
                      secondary: '#ccc',
                  },
                  action: {
                      active: '#fff',
                      selected: '#0ecb81',
                      hover: '#0ecb81',
                  },
                  divider: 'rgba(255, 255, 255, 0.12)',
                  border: 'rgba(0, 0, 0, 0.12)',
                  red: '#ea3943',
              }),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1300,
        },
    },
});

export default customPalette;
