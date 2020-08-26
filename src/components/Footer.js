import React from "react";
import homeCss from "../css/homeCss";

const Footer = () => {
    const classes = homeCss();
    return (
        <>
            <div className={classes.footer}>Footer here</div>
        </>
    );
};

export default Footer;
