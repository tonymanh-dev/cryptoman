import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../services/AppContext';
import { numberWithCommas } from '../../pages/Market';

import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { SubTable1, SubTable2 } from '../MuiCustom';

// Main function Row of Coin
const Row = ({ data, id, handleToast }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { setCoinForm } = useContext(AppContext);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteCoin = () => {
        setCoinForm((prev) => prev.filter((_, index) => index !== id));

        handleClose();
        handleToast('Asset has been removed !');
    };

    return (
        <>
            <TableRow
                key={data.name}
                sx={{
                    '& > *': { borderBottom: 'unset' },
                    '.MuiTableRow-root': {
                        p: '0 16px',
                    },
                }}
            >
                <TableCell align="right">
                    <SubTable1>{id + 1}</SubTable1>
                </TableCell>
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
                        <SubTable1>{data.name}</SubTable1>
                    </Box>
                </TableCell>

                <TableCell align="right">
                    <SubTable2>{data.symbol.toUpperCase()}</SubTable2>
                </TableCell>
                <TableCell align="right">
                    <SubTable1>
                        ${numberWithCommas(data.currentPrice.toFixed(2))}
                    </SubTable1>
                </TableCell>
                <TableCell align="right">
                    <SubTable1>{data.quantity.toFixed(2)}</SubTable1>
                </TableCell>
                <TableCell align="right">
                    <SubTable1>
                        ${numberWithCommas(data.totalValue.toFixed(2))}
                    </SubTable1>
                </TableCell>
                <TableCell align="right">
                    <SubTable1 color={data.profit > 0 ? 'greenCl' : 'redCl'}>
                        {data.profit > 0 && '+'}
                        {numberWithCommas(data.profit.toFixed(2))}$
                    </SubTable1>
                </TableCell>
                <TableCell align="right">
                    <SubTable1>
                        ${numberWithCommas(data.averagePrice.toFixed(2))}
                    </SubTable1>
                </TableCell>
                <TableCell
                    align="right"
                    sx={{
                        '.MuiTableCell-alignRight': {
                            padding: '0 14px',
                            backgroundColor: 'red',
                            m: '20px',
                        },
                    }}
                >
                    <Tooltip title="More">
                        <IconButton
                            size="small"
                            sx={{ p: '2px', mr: '10px' }}
                            onClick={handleClick}
                        >
                            <MoreHorizIcon
                                sx={{ width: '18px', height: '18px' }}
                            />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="View transaction">
                        <IconButton
                            sx={{ p: '4px' }}
                            // size="small"
                            onClick={() => navigate(`/portfolio/${data.name}`)}
                        >
                            <NavigateNextIcon
                                sx={{ width: '18px', height: '18px' }}
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem
                            onClick={handleDeleteCoin}
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
