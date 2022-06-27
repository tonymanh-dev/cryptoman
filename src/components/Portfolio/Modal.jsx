import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material';

import Form from './Form';
import Transfer from './Transfer';

// Custom style MUI

const BoxStyled = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: '550px',
    padding: '24px',
    boxShadow: theme.shadows[4],
    borderRadius: '10px',
    backgroundColor: theme.palette.background.default,
}));

const TabStyled = styled(Tab)(() => ({
    fontWeight: '500',
    fontSize: '14px',
}));

const TabPanelStyled = styled(TabPanel)(() => ({
    margin: '20px',
    padding: '0',
}));

// Main function Modal
const ModalForm = ({ currentCoin, currentPrice }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('BUY');

    // Handle action Open/Close Modal
    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    // Handle tab action Buy, Sell, Transfer
    const handleChangeAction = (e, newAction) => {
        setValue(newAction);
    };

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
                <BoxStyled>
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
                            onClick={handleClose}
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
                                    <TabStyled label="BUY" value="BUY" />
                                    <TabStyled label="SELL" value="SELL" />
                                    <TabStyled
                                        label="TRANSFER"
                                        value="TRANSFER"
                                    />
                                </TabList>
                            </Box>
                            {['BUY', 'SELL', 'TRANSFER'].map((action) => (
                                <TabPanelStyled value={action} key={action}>
                                    {action === 'TRANSFER' ? (
                                        <Transfer currentCoin={currentCoin} />
                                    ) : (
                                        <Form
                                            currentPrice={currentPrice}
                                            currentCoin={currentCoin}
                                        />
                                    )}
                                </TabPanelStyled>
                            ))}
                        </TabContext>
                    </Box>
                </BoxStyled>
            </Modal>
        </div>
    );
};

export default ModalForm;
