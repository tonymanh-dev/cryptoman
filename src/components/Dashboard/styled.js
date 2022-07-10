import { Paper, styled, Card, CardContent, Typography } from '@mui/material';

// export const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: '200px',
//     borderRadius: '10px',
//     boxShadow: 'none',
// }));

export const CardStyled = styled(Card)(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: 'none',
    backgroundImage: 'none',
    backgroundColor: theme.palette.background.default,
}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    '&.MuiCardContent-root:last-child': { paddingBottom: '16px' },
}));

export const Heading = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    color: theme.palette.text.primary,
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: '500',
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    color: theme.palette.primary.main,
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '500',
    marginTop: 10,
}));

export const BodyText = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '500',
    marginTop: 10,
}));
