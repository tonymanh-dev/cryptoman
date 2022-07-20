import {
    LinearProgress,
    linearProgressClasses,
    styled,
    Avatar,
    Typography,
    Box,
    Chip,
    Grid,
    Button,
    Stack,
} from '@mui/material';

export const BtnOutline = styled(Button)(({ theme }) => ({
    fontSize: '18px',
    marginRight: '4px',
    padding: '6px 12px',
    borderColor: theme.palette.divider,
    borderRadius: '6px',
    // color: theme.palette.text.secondary,
    '&:hover': {
        borderColor: theme.palette.primary,
    },
}));

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: '8px',
    width: '70%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
    borderRadius: 5,
    alignItems: 'center',
    margin: '10px 0',
    '.MuiLinearProgress-barColorPrimary': {
        backgroundColor: '',
        backgroundImage: 'linear-gradient(to right, #995df1, #445df1)',
        // backgroundImage: 'linear-gradient(to right, #afe15d, #39b385)',
    },
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor:
            theme.palette.mode === 'light' ? 'primary' : 'secondary',
    },
}));

export const ChipStyled = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '4px',
    height: '30px',
    fontWeight: '500',
}));

export const BoxChart = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'inherit',
}));
