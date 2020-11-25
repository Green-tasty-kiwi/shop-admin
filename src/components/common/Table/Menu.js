import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell'


export default function SimpleMenu({ id, items }) {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <TableCell>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {items.map((item, index) => {
                    return <MenuItem key={item.label} onClick={() => item.onClick(id)}>{item.label}</MenuItem>
                })}
            </Menu>
        </TableCell>
    );
}