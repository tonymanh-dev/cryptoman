import React from 'react';
import { Button, styled } from '@mui/material';

const TimeButton = ({ children, onClick, selected }) => {
    const TimeButton = styled(Button)(({ theme }) => ({
        borderRadius: '30px',
        border: '1px solid',
        borderColor: selected
            ? theme.palette.primary.main
            : theme.palette.divider,
        backgroundColor: selected
            ? theme.palette.primary.main
            : theme.palette.background.paper,
        color: selected ? '#fff' : theme.palette.text.secondary,
        minWidth: '40px',
        '&:hover': {
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
        },
    }));
    return (
        <TimeButton onClick={onClick} variant="outlined">
            {children}
        </TimeButton>
    );
};

export default TimeButton;
