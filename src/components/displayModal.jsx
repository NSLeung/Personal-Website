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
import Box from '@material-ui/core/Box';
import { title as aboutMeTitle, texts as aboutMeTexts } from '../content/aboutMe';
import { title as tmTitle, texts as tmTexts } from '../content/projects/timeManagement';
import { title as classScraperTitle, texts as classScraperTexts } from '../content/projects/classScraper';
import { title as rssTitle, texts as rssTexts } from '../content/projects/redditSavedScraper';
import { title as vumeterTitle, texts as vumeterTexts } from '../content/projects/VUMeter';
import { title as calorieCounterTitle, texts as calorieCounterTexts } from '../content/projects/CalorieCounter';
import { title as ddTitle, texts as ddTexts } from '../content/projects/dormDash';
import { title as riscvTitle, texts as riscvTexts } from '../content/projects/riscvcore';
import { title as pacTitle, texts as pacTexts } from '../content/projects/pacmanFPGA';
import soundmeterimg from '../content/projects/sound_meter.jpg';
import ece411blockdiagram from '../content/projects/pipeline_paper_design_cp2_draft2.png';

import Draggable from 'react-draggable';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';


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
    dormdash: { title: ddTitle, texts: ddTexts },
    classscraper: { title: classScraperTitle, texts: classScraperTexts },
    redditsavedscraper: { title: rssTitle, texts: rssTexts },
    riscvcore: { title: riscvTitle, texts: riscvTexts },
    pacmanfpga: { title: pacTitle, texts: pacTexts },
    vumeter: { title: vumeterTitle, texts: vumeterTexts },
    caloriecounter: { title: calorieCounterTitle, texts: calorieCounterTexts },
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
                    <Box fontWeight="fontWeightBold">{fileKey ? displayArr[fileKey].title : ''}</Box>
                </DialogTitle>
                <DialogContent dividers>
                    {fileKey ? displayArr[fileKey].texts.map((text, id) => {
                        if (text.substring(0, 5) === 'https') {
                            return (<Link href={text} key={id} target="_blank" rel="noopener noreferrer"><Box fontWeight="fontWeightBold">{text}</Box></Link>);
                        }
                        return (<Typography gutterBottom key={id}><Box>{text}</Box></Typography>);

                    }) : ['asdf']}
                </DialogContent>
                {fileKey === 'vumeter' &&
                    (<DialogContent dividers>
                        <img src={soundmeterimg} width={550} height={733.3} />
                    </DialogContent>)
                }
                {fileKey === 'dormdash' &&
                    (<DialogContent dividers>
                        <iframe frameborder="0" allowfullscreen="true" ng-show="showvideo" width="420" height="345" src="https://www.youtube.com/embed/hUhwR4Yp4-s">
                        </iframe>
                    </DialogContent>)
                }
                {fileKey === 'riscvcore' &&
                    (<DialogContent dividers>
                        <img src={ece411blockdiagram} width={550} height={429.5} />
                    </DialogContent>)
                }
            </Dialog>
        </div>
    );
};

export default DisplayModal;
