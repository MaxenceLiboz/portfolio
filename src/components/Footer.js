import React from "react";
import homeCss from "../css/homeCss";
import { Grid, useTheme, useMediaQuery } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const classes = homeCss();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Grid container className={classes.footer}>
                <Grid
                    item
                    container
                    xs={12}
                    md={4}
                    lg={3}
                    style={{ paddingLeft: "1em" }}
                >
                    <div className="row pd-1">
                        <h3>Me suivre :</h3>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.facebook.com"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "facebook"]}
                                className={`${classes.facebook} ${classes.icon}`}
                                size="2x"
                                color="white"
                            />
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "twitter"]}
                                className={`${classes.twitter} ${classes.icon}`}
                                size="2x"
                                color="white"
                            />
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com"
                        >
                            <FontAwesomeIcon
                                icon={["fab", "instagram"]}
                                className={`${classes.instagram} ${classes.icon}`}
                                size="2x"
                                color="white"
                            />
                        </a>
                    </div>
                </Grid>
                <Grid item md={2} lg={6} />
                <Grid
                    item
                    container
                    xs={12}
                    md={6}
                    lg={3}
                    direction="row"
                    style={{ paddingLeft: "1em" }}
                    className={isMobile ? classes.sep : ""}
                >
                    <h3>Me contacter : maxoulib@gmail.com</h3>
                </Grid>
                <Grid item xs={1} md={3} />
                <Grid item container xs={10} md={6}>
                    <Grid
                        item
                        xs={12}
                        className={`${classes.copyright}`}
                        container
                        justify="center"
                    >
                        <p>
                            © Copyright all right reserved. Design by Maxence
                            Liboz
                        </p>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={3} />
            </Grid>
        </>
    );
};

export default Footer;
