import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Avatar } from '@mui/material';

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    borderRadius: 20,
                    p: '4px 8px',
                    gap: '6px',
                    textTransform: 'none',
                }}
            >
                <Avatar
                    src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/rose_main_2.jpg"
                    alt=""
                    sx={{ width: 34, height: 34 }}
                />
                <Typography
                    variant="subtitle1"
                    color="text.grey"
                    display={{
                        xs: 'none',
                        sm: 'flex',
                    }}
                    sx={{
                        fontWeight: '500',
                        fontSize: '16px',
                        color: 'text.primary',
                    }}
                >
                    Tony
                </Typography>
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default NavMenu;
