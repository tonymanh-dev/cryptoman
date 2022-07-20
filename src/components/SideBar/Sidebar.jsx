import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../services/AppContext';

import { Link } from 'react-router-dom';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography,
    IconButton,
    Stack,
    Button,
} from '@mui/material';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

import ClearIcon from '@mui/icons-material/Clear';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import { links } from '../../utils/data';
import ListItemBtn from './ListItemBtn';

const Sidebar = () => {
    const [link, setLink] = useState('Dashboard');

    const { screenSize, setScreenSize, sidebar, setSidebar, mode, setMode } =
        useContext(AppContext);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    // Mobile only
    const handleDarkMode = () => {
        setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        if (screenSize >= 1200) {
            setSidebar(true);
        } else {
            setSidebar(false);
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenSize]);

    return (
        <Box>
            <Box
                sx={{
                    display: { xs: sidebar ? 'block' : 'none', sm: 'block' },
                    position: { xs: 'fixed', sm: 'sticky' },
                    top: '0',
                    left: '0',
                    // transform: {
                    //     // xs: sidebar ? 'translateX(0)' : 'translateX(-100%)',
                    //     xs: 'translateX(0)',
                    // },
                    height: '100vh',
                    transition: 'transform 300ms ease-in-out',
                    zIndex: '1200',
                    width: {
                        xs: '290px',
                        sm: sidebar ? '220px' : '72px',
                    },
                    boxShadow: {
                        xs: '0 2px 24px 0 rgba(0,0,0,.2)',
                        sm: 'none',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: sidebar ? 'start' : 'center',
                        p: '16px',
                        backgroundColor: 'background.default',
                        position: 'relative',
                        height: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            mb: '12px',
                            p: '0 16px',
                            alignItems: 'center',
                            // justifyContent: 'space-between',
                            justifyContent: {
                                xs: 'space-between',
                                sm: sidebar ? 'start' : 'center',
                            },
                            width: '100%',
                        }}
                    >
                        <Link
                            to="/dashboard"
                            style={{ textDecoration: 'none' }}
                        >
                            <Stack flexDirection="row" alignItems="center">
                                <Avatar
                                    style={{
                                        height: '34px',
                                        width: '34px',
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"
                                    alt="Logo"
                                ></Avatar>
                                {sidebar && (
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'text.primary',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            ml: '8px',
                                        }}
                                    >
                                        CryptoMan
                                    </Typography>
                                )}
                            </Stack>
                        </Link>
                        <IconButton
                            onClick={handleSidebar}
                            size="small"
                            sx={{
                                display: { xs: 'flex', sm: 'none' },
                                position: 'absolute',
                                right: '16px',
                            }}
                        >
                            <ClearIcon sx={{ width: '24px', height: '24px' }} />
                        </IconButton>
                    </Box>

                    <nav aria-label="main mailbox folders">
                        <List>
                            {links.map((item) => (
                                <ListItem
                                    key={item.title}
                                    sx={{
                                        padding: '4px 0',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <Link
                                        to={item.link}
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <ListItemBtn
                                            onClick={() => {
                                                setLink(item.title);
                                                screenSize < 600 &&
                                                    handleSidebar();
                                            }}
                                            selected={item.title === link}
                                            sidebar={sidebar}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: '24px',
                                                    width: '24px',
                                                    height: '24px',
                                                    mr: sidebar ? '10px' : '0',
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>

                                            {sidebar && (
                                                <ListItemText
                                                    sx={{
                                                        '.MuiListItemText-primary':
                                                            {
                                                                fontWeight:
                                                                    '500',
                                                                fontSize: {
                                                                    xs: '16px',
                                                                    sm: '16px',
                                                                },
                                                            },
                                                    }}
                                                    primary={item.title}
                                                />
                                            )}
                                        </ListItemBtn>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                    <Box
                        sx={{
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            position: 'absolute',
                            mb: '24px',
                            display: { xs: 'flex', sm: 'none' },
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Stack direction="row" gap="16px">
                            <Button
                                variant="outlined"
                                sx={{ borderRadius: '10px' }}
                            >
                                ENG
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ borderRadius: '10px' }}
                            >
                                USD
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ borderRadius: '10px' }}
                                onClick={handleDarkMode}
                            >
                                {mode === 'light' ? (
                                    <BsFillMoonStarsFill />
                                ) : (
                                    <BsFillSunFill />
                                )}
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                p: '24px 0',
                                '.socialIcon': {
                                    width: '26px',
                                    height: '26px',
                                    cursor: 'pointer',
                                    marginRight: '16px',
                                    '&.socialIcon:hover': {
                                        color: 'primary.main',
                                    },
                                },
                            }}
                        >
                            <FaTwitter className="socialIcon" />
                            <FaFacebook className="socialIcon" />
                            <FaInstagram className="socialIcon" />
                        </Stack>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '12px',
                                color: 'text.secondary',
                            }}
                        >
                            © 2022 CryptoMan. All Rights Reserved.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
