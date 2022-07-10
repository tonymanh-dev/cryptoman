const customTheme = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for Light mode
                  primary: {
                      //   main: '#0ecb81',
                      main: '#6246ea',
                  },
                  secondary: {
                      main: '#9be15d',
                  },
                  background: {
                      default: '#fff',
                      paper: '#f3f4f6',
                  },
                  text: {
                      primary: '#212121',
                      secondary: '#374151',
                      //   primary: '#374151',
                      //   secondary: '#4a4a4a',
                  },
                  action: {
                      selected: '#0ecb81',
                      hover: '#798BFF',
                  },

                  divider: 'rgba(0, 0, 0, 0.12)',
                  border: 'rgba(0, 0, 0, 0.12)',
                  gradientBg: 'rgba(255, 255, 255, 0.1)',
              }
            : {
                  // palette values for Dark mode
                  primary: {
                      //   main: '#0ecb81',
                      main: '#798BFF',
                  },
                  secondary: {
                      main: '#9be15d',
                  },
                  background: {
                      default: '#202327',
                      paper: '#121212',
                      //   default: '#16181c',
                      //   default: '#14182b',
                      //   paper: '#20253d',
                      //   default: '#1e1e1e',
                  },
                  text: {
                      primary: '#fff',
                      secondary: '#ccc',
                  },
                  action: {
                      active: '#fff',
                      selected: '#0ecb81',
                      hover: '#798BFF',
                  },
                  divider: 'rgba(255, 255, 255, 0.12)',
                  border: 'rgba(255, 255, 255, 0.12)',
                  gradientBg: 'rgba(18, 18, 18, 0.1)',
              }),

        //   Color fixed
        purpleColor: '#798BFF',
        pinkCl: '#ff6385',
        greenCl: '#0ecb81',

        lemonColor: '#9be15d',
        redCl: '#ea3943',
        yellowColor: '#ffcc66',
        greyColor: '#1f2937',
        whiteColor: '#fff',
        lightColor: '#f3f3f3',
        borderDark: 'rgba(0, 0, 0, 0.12)',
        borderLight: 'rgba(255, 255, 255, 0.12)',
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
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
});

export default customTheme;

// gradient:
// 'linear-gradient(to right bottom, #9be15d, #39b385',