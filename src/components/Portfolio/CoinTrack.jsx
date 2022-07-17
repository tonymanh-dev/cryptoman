import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { useGetCryptosQuery } from '../../services/cryptoApi';

import { numberWithCommas } from '../../pages/Market';
import CoinTrackStats from './CoinTrackStats';
import { Toast, handleToast } from './Toast';

import { AppContext } from '../../services/AppContext';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tooltip,
    Typography,
    Stack,
    Box,
} from '@mui/material';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ButtonStyled, SubTable1 } from '../MuiCustom';
import Loader from '../Loader';
import ModalForm from './Modal';

const HeadTable = [
    'Type',
    'Price',
    'Quantity',
    'Date',
    'Cost',
    'Proceeds',
    'Profit',
    'Action',
];
const CoinTrack = () => {
    const { portfolio, coinTrack, modalTransaction, setModalTransaction } =
        useContext(AppContext);
    const { data } = useGetCryptosQuery(20);
    const { name } = useParams();

    if (!data && !portfolio) return <Loader />;

    const coinTrackStats = portfolio.filter((coin) => coin.name === name);
    const coinId = coinTrackStats.map((coin) => coin.id);

    const handleOpenModal = () => {
        setModalTransaction(true);
    };
    const handleCloseModal = () => {
        setModalTransaction(false);
    };

    return (
        <>
            <Toast />

            <ModalForm
                handleToast={handleToast}
                data={data}
                openModal={modalTransaction}
                handleCloseModal={handleCloseModal}
            />
            <Box sx={{ minHeight: '100vh' }}>
                <CoinTrackStats
                    coinData={coinTrackStats}
                    coinId={coinId.toString()}
                />
                <Stack
                    direction="row"
                    sx={{
                        backgroundColor: 'background.paper',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: '20px',
                    }}
                >
                    <Typography variant="h6">Transactions</Typography>
                    <ButtonStyled
                        onClick={handleOpenModal}
                        label="Add Transaction"
                    />
                </Stack>
                <TableContainer
                    component={Paper}
                    sx={{
                        width: 'unset',
                        maxWidth: '100%',
                        '.MuiTableRow-root': {
                            backgroundColor: 'background.default',
                        },
                        boxShadow: 'none',
                    }}
                >
                    <Table aria-label="collapsible table">
                        <TableHead
                            sx={{
                                '.MuiTableRow-root': {
                                    backgroundColor: 'background.paper',
                                },
                            }}
                        >
                            <TableRow hover>
                                {HeadTable.map((head) => (
                                    <TableCell key={head} align="right">
                                        {head}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {coinTrack &&
                                coinTrack
                                    .filter((coin) => coin.name === name)
                                    // .sort((acc, cur) => cur.date - acc)
                                    .map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="right">
                                                <SubTable1
                                                    sx={{
                                                        color:
                                                            data.action ===
                                                            'BUY'
                                                                ? 'greenCl'
                                                                : 'redCl',
                                                    }}
                                                >
                                                    {data.action}
                                                </SubTable1>
                                            </TableCell>
                                            <TableCell align="right">
                                                <SubTable1>
                                                    {numberWithCommas(
                                                        data.price.toFixed(2),
                                                    )}
                                                </SubTable1>
                                            </TableCell>
                                            <TableCell align="right">
                                                <SubTable1
                                                    sx={{
                                                        color:
                                                            data.quantity > 0
                                                                ? 'greenCl'
                                                                : 'redCl',
                                                    }}
                                                >
                                                    {data.quantity > 0
                                                        ? '+'
                                                        : ''}
                                                    {numberWithCommas(
                                                        data.quantity.toFixed(
                                                            2,
                                                        ),
                                                    )}
                                                </SubTable1>
                                            </TableCell>
                                            <TableCell align="right">
                                                <SubTable1>
                                                    {data.date}
                                                </SubTable1>
                                            </TableCell>
                                            <TableCell align="right">
                                                <SubTable1>
                                                    {numberWithCommas(
                                                        data.cost.toFixed(2),
                                                    )}
                                                </SubTable1>
                                            </TableCell>
                                            <TableCell align="right">
                                                <SubTable1>
                                                    {/* {data.proceeds === true
                                                        ? numberWithCommas(
                                                              data.proceeds.toFixed(
                                                                  2,
                                                              ),
                                                          )
                                                        : 0} */}
                                                    {numberWithCommas(
                                                        data.proceeds,
                                                    )}
                                                </SubTable1>
                                            </TableCell>
                                            <TableCell align="right">
                                                <SubTable1>
                                                    {numberWithCommas(
                                                        data.profit === Number
                                                            ? data.profit.toFixed(
                                                                  2,
                                                              )
                                                            : 0,
                                                    )}
                                                </SubTable1>
                                            </TableCell>
                                            <TableCell align="right">
                                                {/* <IconButton
                                                    size="small"
                                                    sx={{ p: '2px', mr: '10px' }}
                                                >
                                                    <EditIcon />
                                                </IconButton> */}
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        size="small"
                                                        sx={{ p: '4px' }}
                                                    >
                                                        <DeleteOutlineIcon
                                                            sx={{
                                                                width: '16px',
                                                                height: '16px',
                                                            }}
                                                        />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default CoinTrack;
