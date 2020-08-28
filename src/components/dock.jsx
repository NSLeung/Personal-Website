import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Icon, Tooltip } from '@material-ui/core';
import terminal from '../iconfinder_terminal_resized.svg';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import NestedMenuItem from 'material-ui-nested-menu-item';
import { Menu, MenuItem } from "@material-ui/core";


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
const Dock = ({openAppHandler, openTerminalHandler, openTerminal}) => {
    const classes = useStyles();
    const [menuPosition, setMenuPosition] = useState(null);
    const handleTerminalClick = () => {
        openTerminalHandler();
    };
    const handleMenuClick = (e) => {
        if(menuPosition){
            return;
        }
        e.preventDefault();
        setMenuPosition({
            top: e.pageY,
            left: e.pageX,
        });
    };
    const handleItemClick = () => {
        setMenuPosition(null);
    };
    const handleAboutMe = () => {
        openAppHandler('aboutme.md');
    };
    return (
        <Box className={classes.BottomNav}>
            <Button 
            variant="contained" 
            className={classes.iconButtonStyle}
            onClick={handleMenuClick}
            >
                    <MenuOpenIcon variant="outlined" style={{ fontSize: 60 }} />
                    <Menu
                        open={!!menuPosition}
                        onClose={() => setMenuPosition(null)}
                        anchorReference="anchorPosition"
                        anchorPosition={menuPosition}
                    >
                        <MenuItem onClick={handleAboutMe}>About Me</MenuItem>
                        <NestedMenuItem
                            label="Projects"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={handleItemClick}>Reddit Saved Scraper</MenuItem>
                        </NestedMenuItem>
                    </Menu>
            </Button>
            <a href="https://github.com/NSLeung" target="_blank" rel="noopener noreferrer">
                <Tooltip title="GitHub">
                    <Button variant="contained" className={classes.iconButtonStyle}>
                        <GitHubIcon variant="outlined" style={{ fontSize: 60 }} />
                    </Button>
                </Tooltip>
            </a>
            <a href="https://linkedin.com/in/nayman-leung/" target="_blank" rel="noopener noreferrer">
                <Tooltip title="LinkedIn">
                    <Button variant="contained" className={classes.iconButtonStyle}>
                        <LinkedInIcon variant="outlined" style={{ fontSize: 60 }} color="primary" />
                    </Button>
                </Tooltip>
            </a>
            <Button variant="contained" className={classes.iconButtonStyle} disabled={openTerminal} onClick={handleTerminalClick}>
                    {/* <Icon className={classes.iconRoot} >
                        <img className={classes.imageIcon} src={terminal} height={60} />
                    </Icon> */}
                    <Tooltip title="Open Terminal">
                        <OpenInBrowserIcon variant="outlined" style={{ fontSize: 60 }} />
                    </Tooltip>
                </Button>
        </Box>
    );

}

export default Dock;
