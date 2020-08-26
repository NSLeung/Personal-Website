import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
        // width: '28%',
        height: 90,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    iconButtonStyle: {
        color: 'rgba(0,0,0,1)',
        marginRight: 50,
    },
}));
function Dock() {
    const classes = useStyles();

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.BottomNav}>
            <Button variant="contained" className={classes.iconButtonStyle}>
                <GitHubIcon variant="outlined" style={{ fontSize: 60 }} />
            </Button>
            <Button variant="contained" className={classes.iconButtonStyle}>
                <LinkedInIcon variant="outlined" style={{ fontSize: 60 }} color="primary" />
            </Button>
        </Box>
    );

}

export default Dock;
