import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { AppContext } from '../services/AppContext';

import { Toast, handleToast } from '../components/Portfolio/Toast';
import Coins from '../components/Portfolio/Coins';
import ModalForm from '../components/Portfolio/Modal';
import Stats from '../components/Portfolio/Stats';
import Loader from '../components/Loader';
import {
    Box,
    Button,
    Stack,
    TextField,
    Breadcrumbs,
    Link,
    Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { TextLink, TextLink2 } from '../components/MuiCustom';

const Portfolio = () => {
    // const [openModal, setOpenModal] = useState(false);

    const [search, setSearch] = useState('');
    const { portfolio, modalTransaction, setModalTransaction } =
        useContext(AppContext);
    const { data } = useGetCryptosQuery(20);
    const navigate = useNavigate();

    if (!data && !portfolio) return <Loader />;

    const handleSearchCoin = (data) => {
        return portfolio.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search),
        );
    };

    const handleOpenModal = () => {
        setModalTransaction(true);
    };
    const handleCloseModal = () => {
        setModalTransaction(false);
    };

    return (
        <Box mt="10px" position="relative" flex={1} sx={{ height: '100vh' }}>
            <Breadcrumbs
                sx={{ mb: '14px' }}
                separator={<NavigateNextIcon fontSize="small" />}
            >
                <TextLink
                    underline="hover"
                    onClick={() => navigate('/dashboard')}
                >
                    Home
                </TextLink>

                <TextLink2>Portfolio</TextLink2>
            </Breadcrumbs>
            <Stats portfolio={portfolio} />
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
                        label="Search your asset"
                        variant="standard"
                        onChange={(e) => setSearch(e.target.value)}
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
                openModal={modalTransaction}
                handleCloseModal={handleCloseModal}
            />

            <Coins
                handleToast={handleToast}
                handleSearchCoin={handleSearchCoin}
            />
            <Toast />
        </Box>
    );
};

export default Portfolio;
