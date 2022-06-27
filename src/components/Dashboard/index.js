import { Paper, styled } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px',
    borderRadius: '10px',
    boxShadow: 'none',
}));
