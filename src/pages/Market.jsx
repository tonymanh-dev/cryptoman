import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { FaRegStar, FaStar } from 'react-icons/fa';

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
    styled,
    Pagination,
} from '@mui/material';

export const numberWithCommas = (number) => {
    if (!number) return '--';

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

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
        [theme.breakpoints.down('lg')]: {
            marginLeft: '0',
        },
    }));

    const TableCellStyled = styled(TableCell)(({ theme }) => ({
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.divider,
    }));

    const TypoStyled = styled(Typography)(({ theme }) => ({
        ...theme.typography.subtitle1,
        fontWeight: '500',
    }));

    return (
        <Container sx={{ marginLeft: '24px', width: '100%' }}>
            <CryptoStats />

            <TableContainer
                component={Paper}
                sx={{
                    mt: '34px',
                    '.MuiTable-root': {
                        backgroundColor: 'background.default',
                    },
                    boxShadow: 'none',
                }}
            >
                {isFetching ? (
                    <LinearProgress sx={{ width: '100%', color: 'primary' }} />
                ) : (
                    <Table
                        aria-label="simple table"
                        sx={{
                            '.MuiTableHead-root': {
                                backgroundColor: 'background.paper',
                            },
                        }}
                    >
                        <TableHead>
                            <TableRow hover>
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

                        {/* Table Row */}
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
                                                    backgroundColor:
                                                        'background.paper',
                                                },
                                            }}
                                        >
                                            <TableCellStyled
                                                component="th"
                                                scope="row"
                                                align="right"
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                    }}
                                                >
                                                    {/* Handle click favorite coin  */}
                                                    <FaRegStar
                                                        style={{
                                                            height: '16px',
                                                            width: '16px',
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() => {}}
                                                    />
                                                    <TypoStyled>
                                                        {coin.market_cap_rank}
                                                    </TypoStyled>
                                                </Box>
                                            </TableCellStyled>
                                            <TableCellStyled
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
                                                    <TypoStyled>
                                                        {coin.name}
                                                    </TypoStyled>
                                                </Box>
                                            </TableCellStyled>
                                            <TableCellStyled align="left">
                                                <TypoStyled
                                                    sx={{ fontSize: '14px' }}
                                                >
                                                    {coin.symbol.toUpperCase()}
                                                </TypoStyled>
                                            </TableCellStyled>
                                            <TableCellStyled align="right">
                                                <TypoStyled>
                                                    ${' '}
                                                    {numberWithCommas(
                                                        coin.current_price.toFixed(
                                                            2,
                                                        ),
                                                    )}
                                                </TypoStyled>
                                            </TableCellStyled>
                                            <TableCellStyled align="right">
                                                <TypoStyled
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
                                                </TypoStyled>
                                            </TableCellStyled>
                                            <TableCellStyled align="right">
                                                <TypoStyled>
                                                    ${' '}
                                                    {numberWithCommas(
                                                        coin.total_volume.toFixed(),
                                                    )}
                                                </TypoStyled>
                                            </TableCellStyled>
                                            <TableCellStyled align="right">
                                                <TypoStyled>
                                                    ${' '}
                                                    {numberWithCommas(
                                                        coin.market_cap,
                                                    )}
                                                </TypoStyled>
                                            </TableCellStyled>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                )}
            </TableContainer>

            <Pagination
                selected={true}
                count={5}
                onChange={(_, value) => {
                    setPage(value);
                    window.scroll(0, 200);
                }}
                color="primary"
                size="large"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: '24px',
                    '.MuiPaginationItem-root': {
                        fontWeight: '500',
                        '&.Mui-selected': {
                            color: '#fff',
                        },
                    },
                }}
            />
        </Container>
    );
};

export default Market;
