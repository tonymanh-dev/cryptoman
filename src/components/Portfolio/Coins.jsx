import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

import Row from './Row';

const Coins = ({ handleToast, handleSearchCoin }) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                width: 'unset',
                maxWidth: '100%',
                backgroundColor: 'background.default',
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
                        <TableCell align="right">#</TableCell>
                        <TableCell align="left">Coins</TableCell>
                        <TableCell align="right">Symbol</TableCell>
                        <TableCell align="right">Current Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total Value</TableCell>
                        <TableCell align="right">Profit/Loss</TableCell>
                        <TableCell align="right">Average Price</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {handleSearchCoin()
                        .sort((acc, cur) => cur.totalValue - acc.totalValue)
                        .map((data, index) => (
                            <Row
                                key={index}
                                data={data}
                                id={index}
                                handleToast={handleToast}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Coins;
