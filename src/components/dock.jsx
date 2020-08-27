import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Icon } from '@material-ui/core';
import terminal from '../iconfinder_terminal_resized.svg';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
const useStyles = makeStyles(() => ({

    BottomNav: {
        textAlign: 'center',
        position: 'absolute',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 10,
        height: 90,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    iconButtonStyle: {
        color: 'rgba(0,0,0,1)',
        marginRight: 50,
    },
    imageIcon: {
        height: '100%',
    },
    iconRoot: {
        textAlign: 'center',
    },
}));
function Dock() {
    const classes = useStyles();
    return (
        <Box className={classes.BottomNav}>
            <Button variant="contained" className={classes.iconButtonStyle}>
                    <MenuOpenIcon variant="outlined" style={{ fontSize: 60 }} color="primary" />
            </Button>
            <a href="https://github.com/NSLeung" target="_blank" rel="noopener noreferrer">
                <Button variant="contained" className={classes.iconButtonStyle}>
                    <GitHubIcon variant="outlined" style={{ fontSize: 60 }} />
                </Button>
            </a>
            <a href="https://linkedin.com/in/nayman-leung/" target="_blank" rel="noopener noreferrer">
                <Button variant="contained" className={classes.iconButtonStyle}>
                    <LinkedInIcon variant="outlined" style={{ fontSize: 60 }} color="primary" />
                </Button>
            </a>
            <Button variant="contained" className={classes.iconButtonStyle}>
                    {/* <Icon className={classes.iconRoot} >
                        <img className={classes.imageIcon} src={terminal} height={60} />
                    </Icon> */}
                    <OpenInBrowserIcon variant="outlined" style={{ fontSize: 60 }} color="primary" />
                </Button>
        </Box>
    );

}

export default Dock;
