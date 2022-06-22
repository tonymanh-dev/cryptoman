import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    InputBase,
    Chip,
    Avatar,
    Tooltip,
    Typography,
    TextField,
    Stack,
    Paper,
} from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import logo from '../assets/coingecko.png';

// const StyledBadge =
//     styled(Badge) <
//     BadgeProps >
//     (({ theme }) => ({
//         '& .MuiBadge-badge': {
//             right: 10,
//             top: 10,
//             border: `2px solid ${theme.palette.background.paper}`,
//             padding: '0 4px',
//         },
//     }))

const Navbar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                height: '64px',
                backgroundImage:
                    ' linear-gradient(to right bottom, #9be15d, #39b385);',
                boxShadow: 'none',
            }}
        >
            <Toolbar sx={{ padding: '0', justifyContent: 'space-between' }}>
                <Link to="" style={{ textDecoration: 'none' }}>
                    <Box display="flex" alignItems="center">
                        <Avatar src={logo} alt="Logo"></Avatar>

                        <Typography color="primary.white" variant="h6">
                            CoinGecko
                        </Typography>

                        {/* <Typography
                        fontSize="20px"
                        variant="h4"
                        fontWeight="400"
                        mr="54px"
                        >
                        Dashboard
                    </Typography> */}
                    </Box>
                </Link>

                <Paper
                    component="form"
                    sx={{
                        pl: '10px ',
                        display: 'flex',
                        alignItems: 'center',
                        maxWidth: 400,
                        borderRadius: '30px',
                        flex: '3',
                        boxShadow: 'none',
                    }}
                >
                    <InputBase
                        sx={{
                            ml: 1,
                            flex: 1,
                        }}
                        placeholder="Search crypto"
                        inputProps={{ 'aria-label': 'search crypto' }}
                    />
                    <IconButton
                        type="submit"
                        sx={{ p: '10px' }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>

                {/* <Box flex={1}>
                    <TextField
                        sx={{
                            width: '100%',
                            maxWidth: '400px',
                            '& > :not(style)': {
                                m: '0',
                                fontSize: '16px',
                                color: '#fff',
                            },
                            marginBottom: '16px',
                        }}
                        id="standard-search"
                        label="Search your crypto"
                        type="search"
                        variant="standard"
                    />
                </Box> */}
                {/* <IconButton
                    type="submit"
                    sx={{ p: '10px' }}
                    aria-label="search"
                >
                    <SearchIcon fontSize="medium" />
                </IconButton> */}
                <Box>
                    <Tooltip title="Profile" arrow>
                        <IconButton sx={{ borderRadius: 20, p: '4px' }}>
                            <Avatar
                                src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/rose_main_2.jpg"
                                alt=""
                                sx={{ width: 30, height: 30 }}
                            />
                            <Typography
                                variant="h5"
                                fontSize="16px"
                                margin="0 10px"
                                fontWeight="500"
                                color="#fff"
                            >
                                Tony
                            </Typography>
                        </IconButton>
                    </Tooltip>
                </Box>
                {/* <Tooltip title="Dark mode" arrow>
                    <IconButton>
                        <DarkModeIcon fontSize="medium" />
                    </IconButton>
                </Tooltip> */}

                {/* <Tooltip title="Light mode" arrow>
                    <IconButton>
                        <Brightness5Icon fontSize="medium" />
                    </IconButton>
                </Tooltip> */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
