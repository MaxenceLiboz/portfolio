import React from "react";
import homeCss from "../css/homeCss";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const classes = homeCss();
    return (
        <>
            <Grid container className={classes.footer}>
                <Grid item container xs={12} sm={4} md={3}>
                    <Grid item xs={4}>
                        <h3>Me suivre :</h3>
                    </Grid>
                    <Grid item xs={2}>
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
                    </Grid>
                    <Grid item xs={2}>
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
                    </Grid>

                    <Grid item xs={2}>
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
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} md={5}>
                    <Grid item xs={12} />
                    <Grid item xs={12} />

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
                <Grid
                    item
                    container
                    xs={12}
                    sm={4}
                    md={4}
                    className={classes.padContact}
                >
                    <Grid item xs={4}>
                        <h3>Me contacter :</h3>
                    </Grid>
                    <Grid item xs={6}>
                        <h3>maxoulib@gmail.com</h3>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer;
