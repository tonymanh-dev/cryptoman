import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import { Avatar, Button } from '@mui/material'

import { account1 } from '../../data/dummy'

const Row = ({ rows, rowsExpand }) => {

    const [open, setOpen] = React.useState(false)

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
            {/* <TableRow>
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
                                size="big"
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
                                        <TableRow key={i + 1}>
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
            </TableRow> */}
        </React.Fragment>
    )
}

// Row.propTypes = {
//     row: PropTypes.shape({
//         calories: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 amount: PropTypes.number.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 date: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//     }).isRequired,
// }

export default Row
