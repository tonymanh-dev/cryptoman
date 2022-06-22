import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import AddIcon from '@mui/icons-material/Add'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import CloseIcon from '@mui/icons-material/Close'

import Form from './Form'
import Transfer from './Transfer'

// Custom style MUI

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: '550px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
}

const btnStyle = {
    width: 160,
    height: 40,
    borderRadius: '30px',
}

const styleTab = {
    fontWeight: '500',
    fontSize: '14px',
}

// Main function Modal
const ModalForm = ({ currentCoin, currentPrice }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('BUY')

    // Handle action Open/Close Modal
    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    // Handle tab action Buy, Sell, Transfer
    const handleChangeAction = (e, newAction) => {
        setValue(newAction)
    }

    return (
        <div>
            <Button onClick={handleOpen}>
                <AddIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="h5" fontWeight="500">
                            Add transaction
                        </Typography>
                        <Button
                            sx={{
                                borderRadius: 10,
                                p: '0',
                                minWidth: '32px',
                                justifyContent: 'center',
                            }}
                        >
                            <CloseIcon />
                        </Button>
                    </Box>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box
                                sx={{
                                    borderBottom: 1,
                                    borderColor: 'divider',
                                }}
                            >
                                <TabList
                                    onChange={handleChangeAction}
                                    aria-label="tab actions"
                                    sx={{
                                        '& .MuiTabs-flexContainer': {
                                            justifyContent: 'space-between',
                                        },
                                    }}
                                >
                                    <Tab
                                        sx={styleTab}
                                        label="BUY"
                                        value="BUY"
                                    />
                                    <Tab
                                        sx={styleTab}
                                        label="SELL"
                                        value="SELL"
                                    />
                                    <Tab
                                        sx={styleTab}
                                        label="TRANSFER"
                                        value="TRANSFER"
                                    />
                                </TabList>
                            </Box>
                            <TabPanel
                                sx={{
                                    mt: '20px',
                                    padding: '0px',
                                }}
                                value="BUY"
                            >
                                <Form
                                    currentPrice={currentPrice}
                                    currentCoin={currentCoin}
                                />
                            </TabPanel>
                            <TabPanel
                                sx={{
                                    mt: '20px',
                                    padding: '0',
                                }}
                                value="SELL"
                            >
                                <Form
                                    currentPrice={currentPrice}
                                    currentCoin={currentCoin}
                                />
                            </TabPanel>
                            <TabPanel
                                sx={{
                                    mt: '20px',
                                    padding: '0',
                                }}
                                value="TRANSFER"
                            >
                                <Transfer currentCoin={currentCoin} />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalForm
