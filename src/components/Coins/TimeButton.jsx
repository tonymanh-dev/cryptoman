import React from 'react';
import { Button, styled } from '@mui/material';

const TimeButton = ({ children, onClick, selected }) => {
    const TimeButton = styled(Button)(({ theme }) => ({
        borderRadius: '30px',
        borderColor: selected ? theme.palette.primary.main : '#ccc',
        backgroundColor: selected ? theme.palette.primary.main : '',
        color: selected ? '#fff' : theme.palette.text.primary,
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
