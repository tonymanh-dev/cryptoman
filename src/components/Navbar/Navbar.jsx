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
    Divider,
} from '@mui/material';
import Badge from '@mui/material/Badge';

import { BsSearch, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/coingecko.png';

import { CoinsContext } from '../../services/CryptoApiContext';
import NavMenu from './NavMenu';

const Navbar = () => {
    const { setDrawer, mode, setMode } = useContext(CoinsContext);

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
                backgroundColor: 'background.default',
                boxShadow: 'none',
            }}
        >
            <Toolbar
                sx={{
                    padding: { xs: '0 14px', md: '0 24px' },
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                    <Tooltip title="Menu">
                        <IconButton onClick={handleActiveMenu}>
                            <MenuIcon />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Box sx={{ display: 'flex', gap: '10px', pl: '16px' }}>
                    <Link to="" style={{ textDecoration: 'none' }}>
                        <Box display="flex" alignItems="center">
                            <Avatar src={logo} alt="Logo"></Avatar>

                            <Typography
                                color="text.primary"
                                variant="h6"
                                fontSize="18px"
                            >
                                CoinGecko
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
                        backgroundColor: 'background.paper',
                    }}
                >
                    <InputBase
                        sx={{
                            flex: 1,
                            p: '4px 0 4px 20px',
                        }}
                        placeholder="Search crypto"
                        inputProps={{ 'aria-label': 'search crypto' }}
                    />
                    <IconButton
                        type="submit"
                        sx={{ width: '38px', height: '38px', p: '10px' }}
                        aria-label="search"
                    >
                        <BsSearch />
                    </IconButton>
                </Paper>

                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <IconButton
                        sx={{
                            display: {
                                xs: 'flex',
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
            <Divider />
        </AppBar>
    );
};

export default Navbar;
