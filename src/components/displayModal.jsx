/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React, { useImperativeHandle, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { title as aboutMeTitle, texts as aboutMeTexts } from '../content/aboutMe';
import { title as rssTitle, texts as rssTexts } from '../content/projects/redditSavedScraper';
import Draggable from 'react-draggable';
import Paper from '@material-ui/core/Paper';


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

/* dialog draggability */
function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

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
// const rssTexts = 'This Python script (not shown on github) utilizes PRAW to scrape my saved links and comments and format them nicely into markdown files';
const displayArr = {
    aboutme: { title: aboutMeTitle, texts: aboutMeTexts },
    redditsavedscraper: { title: rssTitle, texts: rssTexts },
};

const DisplayModal = ({
    loggedIn, openAppRef, fileKeyRef,
}) => {
    //   const [open, setOpen] = React.useState(false);
    const [openApp, setOpenApp] = useState(true);
    const [fileKey, setFileKey] = useState('aboutme');
    const handleClose = () => {
        setOpenApp(false);
    };
    useImperativeHandle(openAppRef, () => {
        return {
            updateOpenApp: () => {
                setOpenApp(true);
            },
        };
    });

    useImperativeHandle(fileKeyRef, () => {
        return {
            updateFileKey: (filename) => {
                console.log(filename);
                setFileKey(filename);
            },
        };
    });

    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openApp && loggedIn}
                hideBackdrop
                PaperComponent={PaperComponent}
            >
                <DialogTitle onClose={handleClose} style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {fileKey ? displayArr[fileKey].title : ''}
                </DialogTitle>
                <DialogContent dividers>
                    {fileKey ? displayArr[fileKey].texts.map((text, id) => (
                        <Typography gutterBottom key={id}>{text}</Typography>

                    )) : ['asdf']}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DisplayModal;
