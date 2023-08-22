import * as React from 'react';
import Dialog from '@mui/material/Dialog';

const DialogLayout = ({
    open,
    handleClose,
    children
}) => {

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth={'md'}>
            {children}
        </Dialog>
    )
}

export default DialogLayout;