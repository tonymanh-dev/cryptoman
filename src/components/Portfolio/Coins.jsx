import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Avatar, Button } from '@mui/material'

import ModalForm from './Modal'
import { account1 } from '../../data/dummy'
import { useContext } from 'react'
import { CoinsContext } from '../../services/CryptoApiContext'

// Row data
const portfolio = account1.map((acc) => acc.portfolio)

const rows = portfolio[0].map((coin, i) => {
    return {
        id: i + 1,
        coin: coin.coin,
        image: coin.image,
        symbol: coin.symbol,
        price: coin.current_price,
        balance: coin.balance,
        value: coin.value,
        avarage_price: coin.avarage_price,
    }
})

//Row expand data
const movements = account1.map((acc) => acc.movements)
const rowsExpand = movements[0].map((mov, i) => {
    return {
        id: i + 1,
        symbol: mov.symbol,
        type: mov.type,
        quantity: mov.quantity,
        price: mov.price,
        spent: mov.spent,
        time: mov.time,
    }
})

// Main function Row of Coin
const Row = ({ row }) => {
    const [open, setOpen] = useState(false)
    const currentPrice = useContext(CoinsContext)
    console.log(currentPrice)

    return (
        <React.Fragment>
            <TableRow key={row.id} sx={{ '& > *': { borderBottom: 'unset' } }}>
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

                        {row.coin}
                    </Box>
                </TableCell>

                <TableCell align="right">{row.symbol}</TableCell>
                <TableCell align="right">$ {row.price}</TableCell>
                <TableCell align="right">{row.balance}</TableCell>
                <TableCell align="right">{row.value}</TableCell>

                <TableCell align="right">$ {row.avarage_price}</TableCell>
                <TableCell align="center">
                    <ModalForm
                        currentPrice={row.price}
                        currentCoin={row.coin}
                    />
                </TableCell>
                <TableCell align="center">
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

            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                Transactions
                            </Typography>
                            <Table
                                size="Large"
                                sx={{ width: '100%' }}
                                aria-label="purchases"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Symbol</TableCell>
                                        <TableCell align="right">
                                            Quantity
                                        </TableCell>
                                        <TableCell align="right">
                                            Price
                                        </TableCell>
                                        <TableCell align="right">
                                            Total spent
                                        </TableCell>
                                        <TableCell align="right">
                                            Time
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsExpand.map((mov, i) => (
                                        <TableRow key={i}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {mov.type}
                                            </TableCell>
                                            <TableCell>{mov.symbol}</TableCell>
                                            <TableCell align="right">
                                                {mov.quantity}
                                            </TableCell>
                                            <TableCell align="right">
                                                {mov.price}
                                            </TableCell>
                                            <TableCell align="right">
                                                {mov.spent}
                                            </TableCell>
                                            <TableCell align="right">
                                                {mov.time}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default function CollapsibleTable() {
    return (
        <TableContainer
            component={Paper}
            sx={{ margin: '24px', width: 'unset', maxWidth: '100%' }}
        >
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">#</TableCell>
                        <TableCell align="left">Coins</TableCell>
                        <TableCell align="right">Symbol</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Balance</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Avarage</TableCell>
                        <TableCell align="right">Actions</TableCell>
                        <TableCell align="right">More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
