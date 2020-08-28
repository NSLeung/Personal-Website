/* eslint-disable import/extensions */
/* eslint-disable react/jsx-indent-props */
import React, {
    useState, useRef, useEffect,
} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import { Box, Tooltip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import profileIcon from './profile_icon-Copy.PNG';
import Terminal from './react-bash-local';
import DisplayModal from './components/displayModal';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Dock from './components/dock';

/* dialog styling */
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        padding: 0,
        // position: 'absolute',
        alignItems: 'flex-end',
        right: theme.spacing(1),
        // top: theme.spacing(1),
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
/* backdrop stuff */
const useStyles = makeStyles((theme) => ({
    parentContainer: {
        /* copied over from index.css */
        margin: '50px auto',
        width: 630,
        height: 450,
    },
    root: {
        textAlign: 'center',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    styledInput: {
        background: 'white',
        // color: "white",
    },
    largeAvatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    terminalDialog: {
        padding: 0,
        borderRadius: 0,
    },
    dialogTitle: {
        backgroundColor: '#535554',
        padding: 0,
        alignContent: 'flex-end',
    },
    dialogPaper: {
        // minHeight: '70vh',
        margin: '50px auto',
        width: 630,
        height: 450,
        padding: 0,
    },
}));
/* terminal stuff */

const extensions = {
    // example extension
    sudo: {
        exec: ({ structure, history, cwd }) => {
            return {
                structure,
                cwd,
                history: history.concat({ value: 'Nice try... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)' }),
            };
        },
    },
};

const history = [
    {
        value:
            "Welcome to the terminal! You can get around the website if you like Bash (or use the menu dropdown in the dock below!)",
    },
    { value: 'Type `help` to begin' },
];

const structure = {
    '.hidden': {
        file1: {
            content: 'The is the content for file1 in the <.hidden> directory.',
        },
        file2: {
            content: 'The is the content for file2 in the <.hidden> directory.',
        },
        dir2: {
            file: {
                content: 'The is the content for <file> in the <.hidden> directory.',
            },
        },
        '.secrets': { content: "I'm still afraid of the dark..." },
    },
    'AboutMe.md': {
        type: 'custom',
        content: 'Hey! Use the view [filename] command to look at this special file.',
    },
    'playground-dir': {
        file1: {
            content:
                'Sandbox file! Just here for you to play around with :D',
        },
    },
    projects: {
        'redditSavedScraper.md': {
            type: 'custom',
            content: 'Hey! Use the view [filename] command to look at this special file.',
        },
    },
};

/* Dialog stuff */
const DialogTitle = withStyles(styles)((props) => {
    const {
        classes, onClose, ...other
    } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.dialogTitle} {...other}>
            {onClose ? (
                <Button
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </Button>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        // padding: theme.spacing(2),
    },
}))(MuiDialogContent);

function App() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [showTransition, setTransition] = useState(true);
    const [curTimeLong, setCurTimeLong] = useState();
    const [curDate, setCurDate] = useState();
    const [loggedIn, setLogIn] = useState(false);
    const [openTerminal, setOpenTerminal] = useState(true);
    // const [fileKey, setFileKey] = useState();
    // let fileKey = '';
    const openApp = useRef(false);
    const fileKey = useRef('');

    const clockUpdateID = useRef(null);

    const clockUpdate = () => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const dateStr = new Date().toLocaleDateString('en-US', options);
        const timeStr = new Date().toLocaleString('en-US');
        const time = timeStr.slice(timeStr.indexOf(',') + 1);
        setCurTimeLong(time);
        setCurDate(dateStr);
        if (!loggedIn) {
            clockUpdateID.current = setTimeout(clockUpdate, 1000);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setTransition(false);
        }, 5000);
    });

    useEffect(() => {
        if (!loggedIn) {
            clockUpdate();
        }
        return () => clearTimeout(clockUpdateID.current);
    }, [loggedIn]);

    const handleLogIn = () => {
        setLogIn(true);
        setOpen(false);
    };

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const handleCloseAlert = () => {
        // if (reason === 'clickaway') {

        // }
    };

    const handleUpdateOpen = (filename) => {
        openApp.current.updateOpenApp();
        fileKey.current.updateFileKey(filename.substring(0, filename.indexOf('.')).toLowerCase());
    };

    const handleOpenTerminal = () => {
        setOpenTerminal(true);
    };

    const handleCloseTerminal = () => {
        setOpenTerminal(false);
    };

    return (
        <>
         {/* <Box className={classes.parentContainer}> */}
            {!loggedIn && (
                <Backdrop className={classes.backdrop} open={open}>
                    <Grid
                        container
                        spacing={10}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12}>
                            <Fade in={showTransition}>
                                <Box>
                                    <Typography variant="h3" component="h2">
                                        Welcome to Nayman's Website
                                    </Typography>
                                    <Typography variant="h6" component="h6">
                                        A tribute to the KDE Linux Plasma Desktop Environment
                                    </Typography>
                                </Box>
                               
                            </Fade>
                            {!showTransition && (
                                <Fade in={!showTransition}>
                                    <>
                                        <Box textAlign="center">
                                            <Typography variant="h2" component="h2">
                                                {curTimeLong}
                                            </Typography>
                                            <br />
                                            <Typography variant="h5" component="h2">
                                                {curDate}
                                            </Typography>
                                        </Box>
                                    </>
                                </Fade>
                            )}
                        </Grid>
                        {!showTransition && (
                            <>
                                <Grid item xs={12}>
                                    <Avatar
                                        alt="Nayman Leung"
                                        src={profileIcon}
                                        className={classes.largeAvatar}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <TextField
                                            type="password"
                                            className={classes.styledInput}
                                            id="input-with-icon-textfield"
                                            // defaultValue="click login to continue..."
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end" class='blob'>
                                                        <Tooltip title="Login">
                                                            <IconButton>
                                                                <ExitToAppIcon onClick={handleLogIn} />
                                                            </IconButton>
                                                        </Tooltip>

                                                    </InputAdornment>
                                                ),
                                            }}
                                            style={{ width: 300 }}
                                            variant="outlined"
                                        />
                                        {/* {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                                    </form>
                                </Grid>
                            </>
                        )}
                        <Grid item xs={12}>
                            <Box height={200} />
                        </Grid>
                    </Grid>
                    {!showTransition && (
                        <Snackbar
                            open
                            autoHideDuration={6000}
                        >
                            <Alert onClose={handleCloseAlert} severity="success">
                                Click Login to continue! (No password required)
                            </Alert>
                        </Snackbar>
                    )}
                </Backdrop>
            )}
            {loggedIn
                     && (
                <Dialog
                    fullWidth
                    open={openTerminal}
                    hideBackdrop
                    PaperComponent={PaperComponent}
                    className={classes.dialogPaper}
                    fullScreen
                >
                    <DialogTitle classes={classes} onClose={handleCloseTerminal} style={{ cursor: 'move' }} id="draggable-dialog-title" />
                    <DialogContent dividers className={classes.terminalDialog} borderRadius={0}>
                        <Terminal
                            history={history}
                            structure={structure}
                            extensions={extensions}
                            theme={Terminal.Themes.DARK}
                            prefix="user@NSLeung-Website"
                            openAppHandler={handleUpdateOpen}
                        />
                    </DialogContent>

                </Dialog>
            )}

            {fileKey !== undefined && (
                <DisplayModal
                    loggedIn={loggedIn}
                    openAppRef={openApp}
                    fileKeyRef={fileKey}
                />
            )}
            <Dock openAppHandler={handleUpdateOpen} openTerminalHandler={handleOpenTerminal} openTerminal={openTerminal} />
        {/* </Box> */}
        </>
    );
}

export default App;
