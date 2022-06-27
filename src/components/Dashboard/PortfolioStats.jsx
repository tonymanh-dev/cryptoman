import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { Item } from './index';

const PortfolioStats = () => {
    return (
        <Stack m="24px" height="230px" color="text.primary">
            <Typography variant="h6" fontSize="16px">
                Portfolio Stats
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};

export default PortfolioStats;
