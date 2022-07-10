import React from 'react';
import { Button, styled } from '@mui/material';

const SelectBtn = ({ children, onClick, selected }) => {
    const SelectBtn = styled(Button)(({ theme }) => ({
        borderRadius: '6px',
        marginRight: '4px',
        padding: '2px 10px',
        fontSize: '12px',
        boxShadow: 'none',
        color: selected ? '#fff' : theme.palette.text.secondary,
        backgroundColor: selected
            ? theme.palette.primary.main
            : theme.palette.background.default,

        minWidth: '40px',
        '&:hover': {
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
        },
    }));
    return (
        <SelectBtn onClick={onClick} variant="contained">
            {children}
        </SelectBtn>
    );
};

export default SelectBtn;
