/* eslint-disable import/extensions */
/* eslint-disable react/jsx-indent-props */
import React, {
    useState, useRef, useEffect,
} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import { Box, Tooltip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import profileIcon from './profile_icon-Copy.PNG';
import Terminal from './react-bash-local';

import { title as aboutMeTitle, texts as aboutMeTexts } from './content/aboutMe';
import { title as rssTitle, texts as rssTexts } from './content/projects/redditSavedScraper';

import DisplayModal from './components/displayModal';

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
      "Welcome to the terminal! This is how you'll get around the website...",
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
    public: {
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

const displayArr = {
    aboutme: { title: aboutMeTitle, texts: aboutMeTexts },
    redditsavedscraper: { title: rssTitle, texts: rssTexts },
};
function App() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [showTransition, setTransition] = useState(true);
    const [curTimeLong, setCurTimeLong] = useState();
    const [curDate, setCurDate] = useState();
    const [loggedIn, setLogIn] = useState(false);
    const [fileKey, setFileKey] = useState();

    const openApp = useRef(false);

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
        }, 3000);
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
        setFileKey(filename.substring(0, filename.indexOf('.')).toLowerCase());
    };

    return (
        <Box className={classes.parentContainer}>
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
                                <Typography variant="h3" component="h2">
                                    Welcome to Nayman's Website!
                                </Typography>
                            </Fade>
                            {!showTransition && (
                                <Fade in={!showTransition}>
                                    <>
                                        <Box textAlign="center">
                                            <Typography variant="h3" component="h2">
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
                                                    <InputAdornment position="end">
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
                                Click Login to continue!
                            </Alert>
                        </Snackbar>
                    )}
                </Backdrop>
            )}
            <Terminal
                history={history}
                structure={structure}
                extensions={extensions}
                theme={Terminal.Themes.DARK}
                prefix="user@NSLeung-Website"
                openAppHandler={handleUpdateOpen}
            />
            <DisplayModal
                passedInRef={openApp}
                texts={fileKey ? displayArr[fileKey].texts : []}
                title={fileKey ? displayArr[fileKey].title : []}
            />
        </Box>
    );
}

export default App;
