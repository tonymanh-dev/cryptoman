import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    InputBase,
    Avatar,
    Tooltip,
    Typography,
    Paper,
    styled,
    Stack,
} from '@mui/material';
import Badge from '@mui/material/Badge';

import { BsSearch, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';

import { AppContext } from '../../services/AppContext';
import NavMenu from './NavMenu';

const Navbar = () => {
    const { mode, setMode, sidebar, setSidebar } = useContext(AppContext);

    const handleActiveMenu = () => {
        setSidebar(!sidebar);
    };

    const handleDarkMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            border: `1px solid ${theme.palette.background.paper}`,
            color: '#fff',
        },
    }));

    return (
        <AppBar
            sx={{
                position: 'relative',
                minHeight: '64px',
                backgroundImage: 'none',
                backgroundColor: 'background.paper',
                boxShadow: 'none',
                zIndex: 1000,
            }}
        >
            <Toolbar
                sx={{
                    padding: { xs: '0' },
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ display: 'block' }}>
                    <Tooltip title="Menu">
                        <IconButton
                            onClick={handleActiveMenu}
                            sx={{ p: '6px' }}
                        >
                            <MenuIcon sx={{ height: '30px', width: '30px' }} />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Stack
                    direction="row"
                    sx={{
                        display: { xs: 'flex', sm: 'none' },
                        width: { xs: '100%' },
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: 'flex', sm: 'none' },
                            gap: '6px',
                            pl: '16px',
                        }}
                    >
                        <Link
                            to="/dashboard"
                            style={{ textDecoration: 'none' }}
                        >
                            <Box display="flex" gap="8px" alignItems="center">
                                <Avatar
                                    style={{ height: '34px', width: '34px' }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"
                                    alt="Logo"
                                ></Avatar>

                                <Typography
                                    color="text.primary"
                                    variant="h6"
                                    fontSize="18px"
                                    fontWeight="600"
                                >
                                    CryptoMan
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: { sm: 'center' },
                        width: '100%',
                    }}
                >
                    <Paper
                        component="form"
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: 400,
                            borderRadius: '30px',
                            flex: '3',
                            boxShadow: 'none',
                            backgroundColor: 'background.default',
                            backgroundImage: 'none',
                        }}
                    >
                        <IconButton
                            type="submit"
                            sx={{ width: '40px', height: '40px', p: '10px' }}
                            aria-label="search"
                        >
                            <BsSearch />
                        </IconButton>
                        <InputBase
                            sx={{
                                flex: 1,
                                ml: 1,
                                fontSize: '14px',
                                // display: { xs: 'none', md: 'flex' },
                            }}
                            placeholder="Search crypto"
                            inputProps={{ 'aria-label': 'search crypto' }}
                        />
                    </Paper>
                </Stack>

                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <IconButton
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex',
                                md: 'none',
                                width: '34px',
                                height: '34px',
                            },
                        }}
                        aria-label="search"
                    >
                        <BsSearch />
                    </IconButton>

                    <Tooltip
                        title={mode === 'dark' ? 'Light mode' : 'Dark mode'}
                        arrow
                    >
                        <IconButton
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'flex',
                                    width: '34px',
                                    height: '34px',
                                },
                            }}
                            onClick={handleDarkMode}
                        >
                            {mode === 'light' ? (
                                <BsFillMoonStarsFill />
                            ) : (
                                <BsFillSunFill />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications" arrow>
                        <IconButton
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'flex',
                                },
                            }}
                        >
                            <StyledBadge badgeContent={3} color="primary">
                                <FaBell
                                    style={{ width: '18px', height: '18px' }}
                                />
                            </StyledBadge>
                        </IconButton>
                    </Tooltip>

                    <NavMenu />
                </Box>
            </Toolbar>
            {/* <Divider /> */}
        </AppBar>
    );
};

export default Navbar;
