/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React, { useImperativeHandle } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {
        children, classes, onClose, ...other
    } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DisplayModal = ({
    // openApp, displayModalCB, title, text,
    passedInRef, title, text,
}) => {
    //   const [open, setOpen] = React.useState(false);
    const [openApp, setOpenApp] = React.useState(false);
    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };
    const handleClose = () => {
        // displayModalCB(false);
        setOpenApp(false);
    };
    useImperativeHandle(passedInRef, () => {
        return {
            updateOpenApp: () => {
                setOpenApp(true);
            },
        };
    });

    return (
        <div>
            {/* <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Open dialog
      </Button> */}
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openApp}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {title}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>{text}</Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DisplayModal;
