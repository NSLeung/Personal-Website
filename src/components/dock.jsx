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
import DescriptionIcon from '@material-ui/icons/Description';
import { Menu, MenuItem } from "@material-ui/core";
import Resume from '../content/Resume_NaymanLeung.pdf';

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
    const handleAboutMe = (filename) => {
        setMenuPosition(null);
        openAppHandler(filename);
    };
    return (
        <Box className={classes.BottomNav}>
            <Tooltip title="Menu">
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
                        <MenuItem onClick={() => handleAboutMe('aboutme.md')}>About Me</MenuItem>
                        <NestedMenuItem
                            label="Projects"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                        >
                            <MenuItem onClick={() => handleAboutMe('dormDash.md')}>COVID19 Dininghall Queueing WebApp</MenuItem>
                            <MenuItem onClick={() => handleAboutMe('timeManagement.md')}>Time Management Visualization</MenuItem>
                            <MenuItem onClick={() => handleAboutMe('classScraper.md')}>Class Resources Scraper</MenuItem>
                            <MenuItem onClick={() => handleAboutMe('redditsavedscraper.md')}>Reddit Saved Scraper</MenuItem>
                            <MenuItem onClick={() => handleAboutMe('riscvcore.md')}>Pipelined RISCV Processor with L2 Caches</MenuItem>
                            <MenuItem onClick={() => handleAboutMe('pacmanFPGA.md')}>PacMan on VGA Display (FPGA SoC)</MenuItem>
                            <MenuItem onClick={() => handleAboutMe('vumeter.md')}>VUMeter</MenuItem>
                            <MenuItem onClick={() => handleAboutMe('calorieCounter.md')}>Calorie Counter WebApp</MenuItem>


                        </NestedMenuItem>
                    </Menu>
                </Button>
            </Tooltip>
            <a href={Resume} target="_blank">
                <Tooltip title="Resume">
                    <Button variant="contained" className={classes.iconButtonStyle}>
                        <DescriptionIcon variant="outlined" style={{ fontSize: 60 }} />
                    </Button>
                </Tooltip>
            </a>
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
