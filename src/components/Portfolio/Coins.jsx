import React, { useState, useContext } from 'react';
import { AppContext } from '../../services/AppContext';

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

const Coins = ({ handleToast }) => {
    const { portfolio } = useContext(AppContext);

    return (
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
                        <TableCell align="right">#</TableCell>
                        <TableCell align="left">Coins</TableCell>
                        <TableCell align="right">Symbol</TableCell>
                        <TableCell align="right">Current Price</TableCell>
                        <TableCell align="right">Balance</TableCell>
                        <TableCell align="right">Total Value</TableCell>
                        <TableCell align="right">Profit/Loss</TableCell>
                        <TableCell align="right">Average Price</TableCell>
                        <TableCell align="right">Total Spent</TableCell>
                        <TableCell align="right">More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {portfolio.map((data, index) => (
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
