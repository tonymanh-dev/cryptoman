import React from 'react';
import { Button, styled, ListItemButton } from '@mui/material';

const ListItemBtn = ({ children, onClick, selected, sidebar }) => {
    const MenuItem = styled(ListItemButton)(({ theme }) => ({
        borderRadius: '30px',
        // padding: '6px 16px',
        padding: sidebar ? '6px 16px' : '10px',

        // justifyContent: 'center',
        '&.MuiListItemButton-root:hover': {
            backgroundColor: theme.palette.background.paper,
            '.MuiListItemText-root': {
                color: theme.palette.primary.main,
            },
            '.MuiListItemIcon-root': {
                color: theme.palette.primary.main,
            },
        },
        '.MuiListItemText-root': {
            color: selected
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
        },
        '.MuiListItemIcon-root': {
            color: selected
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
        },
    }));
    return <MenuItem onClick={onClick}>{children}</MenuItem>;
};

export default ListItemBtn;
