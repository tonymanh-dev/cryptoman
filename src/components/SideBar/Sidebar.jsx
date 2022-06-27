import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    styled,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { links } from '../../data/data';
import DrawerMenu from './Drawer';

const BoxStyled = styled(Box)(({ theme }) => ({
    paddingTop: '16px',
    width: '200px',
    position: 'fixed',
    backgroundColor: theme.palette.background.default,
    borderRight: '1px solid ',
    borderColor: theme.palette.divider,
    height: '100%',
}));

const Sidebar = () => {
    return (
        <>
            <DrawerMenu />

            <Box
                sx={{
                    minWidth: '200px',
                    display: { xs: 'none', lg: 'block' },
                    bgColor: 'background.default',
                }}
            >
                <BoxStyled>
                    <nav aria-label="main mailbox folders">
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
                </BoxStyled>
            </Box>
        </>
    );
};

export default Sidebar;
