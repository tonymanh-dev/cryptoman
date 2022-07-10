import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    styled,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography,
} from '@mui/material';

import logo from '../../assets/coingecko.png';
import { FaBitcoin } from 'react-icons/fa';

import { links } from '../../data/data';
import DrawerMenu from './Drawer';
import ListItemBtn from './ListItemBtn';

const BoxStyled = styled(Box)(({ theme }) => ({
    paddingTop: '16px',
    width: '220px',
    position: 'fixed',
    backgroundColor: theme.palette.background.default,
    // borderRight: `1px solid ${theme.palette.border}`,
    height: '100%',
}));

const Sidebar = () => {
    const [link, setLink] = useState('Dashboard');
    return (
        <>
            <DrawerMenu />

            <Box
                sx={{
                    minWidth: '220px',
                    display: { xs: 'none', lg: 'block' },
                    bgColor: 'background.default',
                    height: '100%',
                }}
            >
                <BoxStyled>
                    <Box
                        sx={{
                            display: 'flex',
                            pl: '32px',
                            mb: '24px',
                        }}
                    >
                        <Link
                            to="/dashboard"
                            style={{ textDecoration: 'none' }}
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
                        </Link>
                    </Box>
                    <nav aria-label="main mailbox folders">
                        <List>
                            {links.map((item) => (
                                <ListItem
                                    key={item.title}
                                    sx={{
                                        padding: '2px 16px',
                                    }}
                                >
                                    <Link
                                        to={item.link}
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <ListItemBtn
                                            onClick={() => setLink(item.title)}
                                            selected={item.title === link}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: '34px',
                                                    '.MuiListItemIcon-root': {},
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>

                                            <ListItemText
                                                sx={{
                                                    '.MuiListItemText-primary': {
                                                        fontWeight: '500',
                                                        fontSize: '16px',
                                                    },
                                                }}
                                                primary={item.title}
                                            />
                                        </ListItemBtn>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                </BoxStyled>
            </Box>
        </>
    );
};

export default Sidebar;
