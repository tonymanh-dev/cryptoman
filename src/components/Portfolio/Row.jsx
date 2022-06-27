import React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import AddIcon from '@mui/icons-material/Add';
import { Avatar, Button } from '@mui/material';

const Row = ({ rows }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            {rows.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{
                        '&:last-child td, &:last-child th': {
                            border: 0,
                        },
                    }}
                >
                    <TableCell>{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar
                                src={row.image}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '10px',
                                }}
                            />

                            {row.coins}
                        </Box>
                    </TableCell>

                    <TableCell align="right">{row.symbol}</TableCell>
                    <TableCell align="right">$ {row.price}</TableCell>
                    <TableCell align="right">{row.balance}</TableCell>
                    <TableCell align="right">{row.value}</TableCell>

                    <TableCell align="right">$ {row.avarage_price}</TableCell>
                    <TableCell align="center">
                        <Button sx={{ padding: '0', minWidth: '24px' }}>
                            <AddIcon />
                        </Button>
                    </TableCell>
                    <TableCell align="center" padding="16px 0">
                        <Button
                            sx={{ padding: '0', minWidth: '24px' }}
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? (
                                <KeyboardArrowUpIcon />
                            ) : (
                                <KeyboardArrowDownIcon />
                            )}
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </React.Fragment>
    );
};

export default Row;
