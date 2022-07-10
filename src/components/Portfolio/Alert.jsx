import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';

const AlertTransaction = () => {
    return (
        <Stack
            sx={{
                width: '350px',
                position: 'absolute',
                right: '-24px',
                top: '-46px',
            }}
            spacing={2}
        >
            <Paper variant="outlined">
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Transaction is successfully ! !
                </Alert>
            </Paper>
        </Stack>
    );
};

export default AlertTransaction;
