import React from 'react';
import { useContext } from 'react';
import { CoinsContext } from '../../services/CryptoApiContext';

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

import logo from '../../assets/coingecko.png';
import { links } from '../../data/data';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

const DrawerMenu = () => {
    const { drawer, setDrawer, mode, setMode } = useContext(CoinsContext);

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
                    role="presentation"
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
                            <Box display="flex" alignItems="center">
                                <Avatar src={logo} alt="Logo"></Avatar>

                                <Typography color="text.primary" variant="h6">
                                    CoinGecko
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
                                    onClick={() => {}}
                                    sx={{
                                        padding: '2px 0',
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
                                                '&.MuiListItemButton-root:hover': {
                                                    backgroundColor:
                                                        'background.paper',
                                                    '.MuiListItemText-root': {
                                                        color: 'primary.main',
                                                    },
                                                    '.MuiListItemIcon-root': {
                                                        color: 'primary.main',
                                                    },
                                                },
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: '36px',
                                                    color: 'text.secondary',
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>

                                            <ListItemText
                                                sx={{
                                                    color: 'text.secondary',
                                                    '.MuiListItemText-primary': {
                                                        fontWeight: '500',
                                                        fontSize: '18px',
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
