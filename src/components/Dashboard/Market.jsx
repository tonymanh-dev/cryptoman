import React from 'react';
import { Box, Typography, Grid, Stack, styled } from '@mui/material';

const Market = () => {
    return (
        <Stack>
            <Typography variant="h6" sx={{ mt: '24px', fontSize: '16px' }}>
                Maket
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}></Grid>
            </Box>
        </Stack>
    );
};

export default Market;
