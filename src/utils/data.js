import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';

export const chartTimes = [
    {
        label: '24H',
        value: 1,
    },
    {
        label: '7D',
        value: 7,
    },
    {
        label: '14D',
        value: 14,
    },
    {
        label: '30D',
        value: 30,
    },

    {
        label: '1YEAR',
        value: 365,
    },
    {
        label: 'MAX',
        value: 'max',
    },
];

export const modeChart = [
    {
        label: 'Price',
        value: 1,
    },
    {
        label: 'Market Cap',
        value: 2,
    },
];

export const links = [
    {
        link: '/dashboard',
        icon: <GridViewIcon />,
        title: 'Dashboard',
    },
    {
        link: '/portfolio',
        icon: <AccountBalanceWalletIcon />,
        title: 'Portfolio',
    },
    {
        link: '/market',
        icon: <AutoGraphIcon />,
        title: 'Market',
    },
    {
        link: '/news',
        icon: <NewspaperIcon />,
        title: 'News',
    },
    {
        link: '/alalytics',
        icon: <PieChartIcon />,
        title: 'Alalytics',
    },
    {
        link: '/defi',
        icon: <BarChartIcon />,
        title: 'Defi',
    },
];

export const porfolioChart = [
    {
        label: '24H',
        value: 1,
    },
    {
        label: '7D',
        value: 7,
    },

    {
        label: '30D',
        value: 30,
    },

    {
        label: '90D',
        value: 90,
    },

    {
        label: '1Y',
        value: 365,
    },
];
