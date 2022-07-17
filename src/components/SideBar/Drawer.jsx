import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../services/AppContext';

import { Link } from 'react-router-dom';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Drawer,
    Tooltip,
    Avatar,
    Typography,
} from '@mui/material';

import { links } from '../../data/data';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

const DrawerMenu = () => {
    const [link, setLink] = useState('Dashboard');

    const { drawer, setDrawer, mode, setMode } = useContext(AppContext);

    const handleClose = () => {
        setDrawer(false);
    };

    const handleDarkMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <Drawer anchor="left" open={drawer} onClose={handleClose}>
                <Box
                    // role="presentation"
                    sx={{
                        p: '20px',
                        width: '250px',
                        height: '100%',
                        textAlign: 'center',
                        backgroundColor: 'background.paper',
                    }}
                >
                    <nav aria-label="main mailbox folders">
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                pl: '16px',
                                mb: '16px',
                            }}
                        >
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

                            <Tooltip
                                title={
                                    mode === 'light'
                                        ? 'Light mode'
                                        : 'Dark mode'
                                }
                                arrow
                            >
                                <IconButton
                                    sx={{
                                        display: {
                                            xs: 'flex',
                                            md: 'none',
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
                        </Box>
                        <List>
                            {links.map((item) => (
                                <ListItem
                                    key={item.title}
                                    onClick={() => {
                                        setLink(item.title);
                                        setDrawer(false);
                                    }}
                                    sx={{
                                        padding: '2px 0',
                                        '.MuiListItemIcon-root': {
                                            color:
                                                item.title === link
                                                    ? 'primary.main'
                                                    : 'text.secondary',
                                        },
                                        '.MuiListItemText-root': {
                                            color:
                                                item.title === link
                                                    ? 'primary.main'
                                                    : 'text.secondary',
                                        },
                                    }}
                                >
                                    <Link
                                        to={item.link}
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <ListItemButton
                                            sx={{
                                                borderRadius: '30px',
                                                padding: '6px 16px',
                                                '&.MuiListItemButton-root:hover':
                                                    {
                                                        backgroundColor:
                                                            'background.paper',
                                                    },
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: '34px',
                                                    color: 'text.secondary',
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>

                                            <ListItemText
                                                sx={{
                                                    color: 'text.secondary',
                                                    '.MuiListItemText-primary':
                                                        {
                                                            fontWeight: '500',
                                                            fontSize: '16px',
                                                        },
                                                }}
                                                primary={item.title}
                                            />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                </Box>
            </Drawer>
        </>
    );
};

export default DrawerMenu;
