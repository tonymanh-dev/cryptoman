import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#39b385',
            white: '#fff',
            light: '#f3f3f3',
            black: '#111827',
            grey: '#212121',
            yellow: '#ffcc66',
        },

        secondary: {
            main: '#e6e8eb',
        },
        text: {
            main: '#212121',
            grey: '#434b5a',
        },
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
export default theme;

// export const getDesignTokens = (mode: PaletteMode) => ({
//     palette: {
//         mode,
//         ...(mode === 'light'
//             ? {
//                   // palette values for light mode
//                   primary: amber,
//                   divider: amber[200],
//                   text: {
//                       primary: grey[900],
//                       secondary: grey[800],
//                   },
//               }
//             : {
//                   // palette values for dark mode
//                   primary: deepOrange,
//                   divider: deepOrange[700],
//                   background: {
//                       default: deepOrange[900],
//                       paper: deepOrange[900],
//                   },
//                   text: {
//                       primary: '#fff',
//                       secondary: grey[500],
//                   },
//               }),
//     },
// })

//   const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#39b385',
//             white: '#fff',
//             light: '#f3f3f3',
//             gray: '#212121',
//         },
//         secondary: {
//             main: '#9be15d',
//         },
//         otherColor: {
//             main: '#999',
//         },
//     },
// })

// export default theme
//
