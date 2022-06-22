import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from '../components/Loader';
import CryptoStats from '../components/Market/CryptoStats';

import {
    Box,
    LinearProgress,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    Table,
    TableBody,
    Avatar,
    Pagination,
    IconButton,
    styled,
} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export function numberWithCommas(number) {
    if (!number) return '--';

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Market = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const { data, isFetching } = useGetCryptosQuery();
    const navigate = useNavigate();

    if (isFetching) return <Loader />;

    // const handleSearch = () => {
    //     return data.filter(
    //         (coin) =>
    //             coin.name.toLowerCase().includes(search) ||
    //             coin.symbol.toLowerCase().includes(search),
    //     );
    // };
    const Container = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
        },
    }));

    return (
        <Box sx={{ ml: '24px', width: '100%' }}>
            <CryptoStats />
            <TableContainer component={Paper} sx={{ mt: '34px' }}>
                {isFetching ? (
                    <LinearProgress sx={{ width: '100%', color: 'primary' }} />
                ) : (
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {[
                                    '#',
                                    'Coin',
                                    '',
                                    'Price',

                                    '24H',
                                    '24H Volume',
                                    'Market Cap',
                                ].map((title) => (
                                    <TableCell
                                        sx={{}}
                                        key={title}
                                        align={
                                            title === 'Coin' ? 'left' : 'right'
                                        }
                                    >
                                        {title}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data
                                .slice((page - 1) * 20, (page - 1) * 20 + 20)
                                .map((coin) => {
                                    const priceUp =
                                        coin.price_change_percentage_24h > 0;

                                    return (
                                        <TableRow
                                            key={coin.name}
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: '#f2f2f2',
                                                },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                align="right"
                                            >
                                                <Box
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        gap: '0',
                                                    }}
                                                >
                                                    <IconButton>
                                                        <StarOutlineIcon
                                                            sx={{
                                                                height: '20px',
                                                                width: '20px',
                                                            }}
                                                        />
                                                    </IconButton>
                                                    <Typography variant="subtitle1">
                                                        {coin.market_cap_rank}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                onClick={() =>
                                                    navigate(
                                                        `/coins/${coin.id}`,
                                                    )
                                                }
                                                sx={{
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <Box
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Avatar
                                                        src={coin.image}
                                                        alt={coin.name}
                                                        sx={{
                                                            width: '24px',
                                                            height: '24px',
                                                            mr: '10px',
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="subtitle1"
                                                        fontWeight="500"
                                                    >
                                                        {coin.name}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant="subtitle1">
                                                    {coin.symbol.toUpperCase()}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography variant="subtitle1">
                                                    ${' '}
                                                    {numberWithCommas(
                                                        coin.current_price.toFixed(
                                                            2,
                                                        ),
                                                    )}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        color: priceUp
                                                            ? 'rgb(14, 203, 129)'
                                                            : 'red',
                                                    }}
                                                >
                                                    {priceUp && '+'}
                                                    {coin.price_change_percentage_24h.toFixed(
                                                        2,
                                                    )}
                                                    %
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography variant="subtitle1">
                                                    ${' '}
                                                    {numberWithCommas(
                                                        coin.total_volume.toFixed(),
                                                    )}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography variant="subtitle1">
                                                    ${' '}
                                                    {numberWithCommas(
                                                        coin.market_cap,
                                                    )}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                )}
            </TableContainer>

            <Pagination
                count={5}
                onChange={(_, value) => {
                    setPage(value);
                    window.scroll(0, 450);
                }}
                color="primary"
                size="large"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: '24px',
                }}
            />
        </Box>
    );
};

export default Market;
