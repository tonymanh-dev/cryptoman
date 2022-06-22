import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Box,
    styled,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import logo from '../assets/coingecko.png';

const StyledListItem = styled(ListItem)({
    textUnderlineOffset: 'none',
    '&:hover': {
        color: '#39b385',
    },
});

const ItemIcon = styled(ListItemIcon)(() => ({
    minWidth: '36px',
}));

const Sidebar = () => {
    return (
        <Box
            sx={{
                width: '174px',
                position: 'fixed',
                borderRight: '1px solid #f3f4f6',
                height: '100em',
            }}
        >
            <nav aria-label="main mailbox folders">
                <List>
                    <StyledListItem disablePadding>
                        <Link
                            to="/dashboard"
                            style={{
                                textDecoration: 'none',
                                color: '#212121',
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    borderRadius: '30px',
                                }}
                            >
                                <ItemIcon>
                                    <GridViewIcon />
                                </ItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </Link>
                    </StyledListItem>
                    <ListItem disablePadding>
                        <Link
                            to="/portfolio"
                            style={{
                                textDecoration: 'none',
                                color: '#212121',
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    borderRadius: '30px',
                                }}
                            >
                                <ItemIcon>
                                    <AccountBalanceWalletIcon />
                                </ItemIcon>
                                <ListItemText primary="Portfolio" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link
                            to="/market"
                            style={{
                                textDecoration: 'none',
                                color: '#212121',
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    borderRadius: '30px',
                                }}
                            >
                                <ItemIcon>
                                    <AutoGraphIcon />
                                </ItemIcon>
                                <ListItemText primary="Market" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link
                            to="/news"
                            style={{
                                textDecoration: 'none',
                                color: '#212121',
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    borderRadius: '30px',
                                }}
                                component="a"
                                href="#news"
                            >
                                <ItemIcon>
                                    <NewspaperIcon />
                                </ItemIcon>
                                <ListItemText primary="News" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link
                            to="/alalytics"
                            style={{
                                textDecoration: 'none',
                                color: '#212121',
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    borderRadius: '30px',
                                }}
                            >
                                <ItemIcon>
                                    <PieChartIcon />
                                </ItemIcon>
                                <ListItemText primary="Alalytics" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: '#212121',
                            }}
                            to="/defi"
                        >
                            <ListItemButton
                                sx={{
                                    borderRadius: '30px',
                                }}
                            >
                                <ItemIcon>
                                    <BarChartIcon />
                                </ItemIcon>
                                <ListItemText
                                    primary="DeFi"
                                    sx={{ fontWeight: '600' }}
                                />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};

export default Sidebar;
