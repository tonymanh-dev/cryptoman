import React from 'react';
import { Box, Button } from '@mui/material';

const AddCoin = ({ onClick }) => {
    return (
        <Box>
            <Button variant="contained" onClick={onClick}>
                Add Coin
            </Button>
        </Box>
    );
};

export default AddCoin;
