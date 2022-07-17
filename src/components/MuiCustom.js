import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Paper,
    styled,
    Link,
    TableCell,
    Button,
} from '@mui/material';
import Dashboard from '../pages/Dashboard';

// Card
export const CardStyled = styled(Card)(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: 'none',
    borderLeft: '10px solid',
    borderLeftColor: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
}));

export const Card2 = styled(Card)(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: 'none',
    backgroundColor: theme.palette.background.default,
}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
    display: 'block',
    textAlign: 'center',
    padding: '10px',
    '&.MuiCardContent-root:last-child': { paddingBottom: '10px' },
}));

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.subtitle1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: '10px',
    boxShadow: 'none',
    borderLeft: '10px solid',
    borderLeftColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
}));

export const TextLink = styled(Link)(({ theme }) => ({
    ...theme.typography.subtitle1,
    fontWeight: '500',
    cursor: 'pointer',
    color: theme.palette.primary.main,
}));

export const TextLink2 = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    fontWeight: '500',
    color: theme.palette.text.secondary,
}));

export const Heading = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
}));

export const SubtitleCl = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.primary.main,
}));

export const NumberText = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle2,
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '10px',
    color: theme.palette.text.primary,
}));

// Table

export const TableCellStyled = styled(TableCell)(({ theme }) => ({
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.divider,
}));

export const SubTable1 = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    fontSize: '14px',
    fontWeight: '500',
}));

export const SubTable2 = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle2,
    fontSize: '12px',
    fontWeight: '500',
}));

// Breadcrumbs
export const getBreadcrumbs = (dashboard, home, current) => {
    return [
        <Link
            underline="hover"
            key="1"
            href={dashboard}
            color="primary"
            variant="subtitle1"
            fontWeight="500"
        >
            {home}
        </Link>,
        <Typography
            key="2"
            color="text.secondary"
            variant="subtitle1"
            fontWeight="500"
        >
            {current}
        </Typography>,
    ];
};

// Button
export const ButtonStyled = ({ onClick, label }) => {
    return (
        <Box>
            <Button
                variant="contained"
                sx={{
                    color: '#fff',
                    borderRadius: '10px',
                    height: '40px',
                    top: '4px',
                }}
                onClick={onClick}
            >
                {label}
            </Button>
        </Box>
    );
};
