import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Terminal from "react-bash";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import profileIcon from "./profile_icon-Copy.PNG";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

/* backdrop stuff */
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  styledInput: {
    background: "white",
    // color: "white",
  },
  largeAvatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));
/* terminal stuff */

const extensions = {
  sudo: {
    exec: ({ structure, history, cwd }) => {
      return {
        structure,
        cwd,
        history: history.concat({ value: "Nice try... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)" }),
      };
    },
  },
};

const history = [
  { value: "Hackers will be high-fived. ( ‘-’)人(ﾟ_ﾟ )" },
  {
    value:
      "Welcome to the terminal! This is how you'll get around the website...",
  },
  { value: "Type `help` to begin" },
];

const structure = {
  ".hidden": {
    file1: {
      content: "The is the content for file1 in the <.hidden> directory.",
    },
    file2: {
      content: "The is the content for file2 in the <.hidden> directory.",
    },
    dir2: {
      file: {
        content: "The is the content for <file> in the <.hidden> directory.",
      },
    },
    ".secrets": { content: "I'm still afraid of the dark..." },
  },
  public: {
    file1: {
      content: "The is the content for file1 in the <public> directory.",
    },
    file2: {
      content: "The is the content for file2 in the <public> directory.",
    },
    file3: {
      content: "The is the content for file3 in the <public> directory.",
    },
  },
  "README.md": {
    content:
      "✌⊂(✰‿✰)つ✌ Thanks for checking out the tool! There is a lot that you can do with react-bash and I'm excited to see all of the fun commands and projects build on top of it!",
  },
};
function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [showTransition, setTransition] = useState(true);
  const [curTimeLong, setCurTimeLong] = useState();
  const [curDate, setCurDate] = useState();
  const [loggedIn, setLogIn] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const clockUpdateID = useRef(null);

  const clockUpdate = () => {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let dateStr = new Date().toLocaleDateString("en-US", options);
    let timeStr = new Date().toLocaleString("en-US");
    let time = timeStr.slice(timeStr.indexOf(",") + 1);
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
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };
  return (
    <>
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
                            <IconButton>
                              <ExitToAppIcon onClick={handleLogIn} />
                            </IconButton>
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
              open={!showTransition}
              onClose={handleCloseAlert}
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
        theme={Terminal.Themes.SOLARIZED}
        prefix="NSLeung-Website"
      />
    </>
  );
}

export default App;
