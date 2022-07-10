import React, { useState, useContext } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { AppContext } from '../services/AppContext';

import { Toast, handleToast } from '../components/Portfolio/Toast';
import Coins from '../components/Portfolio/Coins';
import ModalForm from '../components/Portfolio/Modal';
import Stats from '../components/Portfolio/Stats';
import Loader from '../components/Loader';
import { Box, Button, Stack, TextField, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getBreadcrumbs } from '../components/CardStyled';

const Portfolio = () => {
    const [openModal, setOpenModal] = useState(false);
    const { data } = useGetCryptosQuery(10);

    // Data for Modal
    if (!data) return <Loader />;

    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box mt="10px" position="relative" flex={1}>
            <Breadcrumbs
                sx={{ mb: '14px' }}
                separator={<NavigateNextIcon fontSize="small" />}
            >
                {getBreadcrumbs('/portfolio', 'Home', 'Porfolio')}
            </Breadcrumbs>
            <Stats />
            <Stack
                direction="row"
                sx={{
                    justifyContent: 'space-between',
                    m: '24px 0',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        '& > :not(style)': { width: '25ch' },
                        '.MuiInputLabel-root': {
                            fontSize: '14px',
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic"
                        label="Search your asset"
                        variant="standard"
                    />
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        color: '#fff',
                        borderRadius: '10px',
                        height: '40px',
                        top: '4px',
                    }}
                    onClick={handleOpenModal}
                >
                    Add Coin
                </Button>
            </Stack>
            <ModalForm
                handleToast={handleToast}
                data={data}
                openModal={openModal}
                handleCloseModal={handleCloseModal}
            />

            <Coins handleToast={handleToast} />
            <Toast />
        </Box>
    );
};

export default Portfolio;
