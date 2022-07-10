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
} from '@mui/material';
import Badge from '@mui/material/Badge';

import { BsSearch, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';

import { AppContext } from '../../services/AppContext';
import NavMenu from './NavMenu';

const Navbar = () => {
    const { setDrawer, mode, setMode } = useContext(AppContext);

    const handleActiveMenu = () => {
        setDrawer(true);
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
            position="fixed"
            sx={{
                minHeight: '64px',
                backgroundImage: 'none',
                backgroundColor: 'background.paper',
                boxShadow: 'none',
                zIndex: 1000,
                width: { xs: '100%', lg: 'calc(100% - 220px)' },
            }}
        >
            <Toolbar
                sx={{
                    padding: { xs: '0 4px', md: '0 16px', lg: '0 24px' },
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                    <Tooltip title="Menu">
                        <IconButton onClick={handleActiveMenu}>
                            <MenuIcon sx={{ height: '36px', width: '36px' }} />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Box
                    sx={{
                        display: { xs: 'flex', lg: 'none' },
                        gap: '6px',
                        pl: '16px',
                    }}
                >
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <Box display="flex" gap="6px" alignItems="center">
                            <Avatar
                                style={{ height: '36px', width: '36px' }}
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

                <Paper
                    component="form"
                    sx={{
                        alignItems: 'center',
                        maxWidth: 400,
                        borderRadius: '30px',
                        flex: '3',
                        boxShadow: 'none',
                        display: { xs: 'none', lg: 'flex' },
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
                        }}
                        placeholder="Search crypto"
                        inputProps={{ 'aria-label': 'search crypto' }}
                    />
                </Paper>

                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <IconButton
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex',
                                lg: 'none',
                                width: '34px',
                                height: '34px',
                            },
                        }}
                        aria-label="search"
                    >
                        <BsSearch />
                    </IconButton>

                    <Tooltip
                        title={mode === 'light' ? 'Light mode' : 'Dark mode'}
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
