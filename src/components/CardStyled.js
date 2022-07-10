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
} from '@mui/material';

// Card
export const CardStyled = styled(Card)(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: 'none',
    borderLeft: '10px solid',
    borderLeftColor: theme.palette.primary.main,
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

export const Subtitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
}));

export const NumberText = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle2,
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '10px',
    color: theme.palette.text.primary,
}));

// Table

export const TableCellStyled = styled(TableCell)(({ theme }) => ({
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.divider,
}));

export const SubtitleTable1 = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    fontSize: '14px',
    fontWeight: '500',
}));

export const SubtitleTable2 = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle2,
    fontSize: '12px',
    fontWeight: '500',
}));

// Breadcrumbs
export const getBreadcrumbs = (link, parent, current) => {
    return [
        <Link
            underline="hover"
            key="1"
            href={link}
            color="primary"
            variant="subtitle1"
            fontWeight="500"
        >
            {parent}
        </Link>,

        <Typography
            key="2"
            color="text.primary"
            variant="body1"
            fontWeight="500"
        >
            {current}
        </Typography>,
    ];
};
