/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React from 'react';
import DisplayModal from './displayModal';

const AboutMe = ({
    // openApp, displayModalCB
    passedInRef,
}) => {
    const title = 'About Me';
    const text = 'well hello there';
    return (
        <DisplayModal
            // openApp={openApp}
            // displayModalCB={displayModalCB}
            // openAppCB={openAppCB}
            passedInRef={passedInRef}
            title={title}
            text={text}
        />
    );
};

export default AboutMe;
