import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../services/AppContext';
import { numberWithCommas } from '../../pages/Market';

import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { SubtitleTable1, SubtitleTable2 } from '../CardStyled';

// Main function Row of Coin
const Row = ({ data, id, handleToast }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { setPortfolio } = useContext(AppContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        handleClose();
        console.log(id);
        setPortfolio((prev) => {
            console.log(prev);
            return;
        });
        handleToast('Asset has been removed !');
        // setPortfolio((prev) => prev.filter((_, index) => index !== id));
    };

    return (
        <>
            <TableRow
                key={data.name}
                sx={{
                    '& > *': { borderBottom: 'unset' },
                }}
            >
                <TableCell align="right">{id + 1}</TableCell>
                <TableCell component="th" scope="row">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            src={data.image}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <SubtitleTable1>{data.name}</SubtitleTable1>
                    </Box>
                </TableCell>

                <TableCell align="right">
                    <SubtitleTable2>{data.symbol.toUpperCase()}</SubtitleTable2>
                </TableCell>
                <TableCell align="right">
                    <SubtitleTable1>
                        ${numberWithCommas(data.currentPrice.toFixed(2))}
                    </SubtitleTable1>
                </TableCell>
                <TableCell align="right">
                    <SubtitleTable1>{data.quantity.toFixed(2)}</SubtitleTable1>
                </TableCell>
                <TableCell align="right">
                    <SubtitleTable1>
                        ${data.totalValue.toFixed(2)}
                    </SubtitleTable1>
                </TableCell>
                <TableCell align="right">
                    <SubtitleTable1
                        color={data.profit > 0 ? 'greenCl' : 'redCl'}
                    >
                        {data.profit > 0 && '+'}
                        {numberWithCommas(data.profit.toFixed(2))}$
                    </SubtitleTable1>
                </TableCell>
                <TableCell align="right">
                    <SubtitleTable1>
                        ${numberWithCommas(data.averagePrice.toFixed(2))}
                    </SubtitleTable1>
                </TableCell>

                <TableCell align="right">
                    <SubtitleTable1>
                        ${numberWithCommas(data.spents.toFixed(2))}
                    </SubtitleTable1>
                </TableCell>
                <TableCell align="right">
                    <IconButton size="small" onClick={handleClick}>
                        <MoreHorizIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem
                            onClick={handleDelete}
                            sx={{
                                color: 'red',
                                '&.MuiMenuItem-root:hover': {
                                    color: 'white',
                                },
                            }}
                        >
                            Delete
                        </MenuItem>
                        <MenuItem onClick={handleClose}>History</MenuItem>
                    </Menu>
                </TableCell>
            </TableRow>
        </>
    );
};
export default Row;
