import * as React from 'react'
import { useContext } from 'react'
import { CoinsContext } from '../../services/CryptoApiContext'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'

import { account1 } from '../../data/dummy'
import { Avatar, Box, Button, Typography } from '@mui/material'

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein }
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ]

export default function BasicTable() {
    const coins = useContext(CoinsContext)
    const portfolio = account1.map((acc) => acc.portfolio)
    console.log(portfolio)
    const newRows = portfolio[0].map((coin, i) => {
        return {
            id: i + 1,
            coins: coin.coin,
            image: coin.image,
            symbol: coin.symbol,
            price: coin.current_price,
            balance: coin.balance,
            value: coin.value,
            avarage_price: coin.avarage_price,
        }
    })
    console.log(newRows)

    return (
        <TableContainer component={Paper} sx={{ m: '24px', width: 'unset' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">#</TableCell>
                        <TableCell>Coins</TableCell>
                        <TableCell align="right">Symbol</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Balance</TableCell>
                        <TableCell align="right">Holdings</TableCell>
                        <TableCell align="right">Avarage Price</TableCell>
                        <TableCell align="center" padding="16px 0">
                            Actions
                        </TableCell>
                        <TableCell align="center" padding=" 16px 0">
                            More
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {newRows.map((row) => (
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

                            <TableCell align="right">
                                $ {row.avarage_price}
                            </TableCell>
                            <TableCell align="center">
                                <Button sx={{ padding: '0', minWidth: '24px' }}>
                                    <AddIcon />
                                </Button>
                            </TableCell>
                            <TableCell align="center" padding="16px 0">
                                <Button sx={{ padding: '0', minWidth: '24px' }}>
                                    <ExpandMoreIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
