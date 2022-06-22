import * as React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

export default function BasicDateTimePicker({ formStyle }) {
    const [value, setValue] = React.useState(new Date())

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <Typography variant="h6" fontSize="14px" fontWeight="500">
                    Date & Time
                </Typography>
                <MobileDateTimePicker
                    renderInput={(params) => (
                        <TextField sx={formStyle} {...params} />
                    )}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue)
                    }}
                />
            </Stack>
        </LocalizationProvider>
    )
}
