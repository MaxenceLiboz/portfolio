import React from "react";
import { Grid, useTheme, useMediaQuery } from "@material-ui/core";
import homeCss from "./homeCss";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import SButton from "../styleComponent/SButton";

const Home = (props) => {
    const classes = homeCss();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Grid container>
                <Grid item xs={12} container className={classes.computer}>
                    <Grid
                        item
                        xs={12}
                        container
                        direction="row"
                        justify="center"
                        spacing={2}
                        className={classes.title}
                    >
                        <Grid item>
                            <h1>Maxence</h1>
                        </Grid>
                        <Grid item>
                            <h1 className={classes.alt}>Liboz</h1>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <div style={{ position: "absolute", bottom: "0" }}>
                            <Link to="graphic" smooth={true} duration={1000}>
                                <SButton
                                    text="En savoir plus"
                                    color="white"
                                    border="solid 3px #f95a00"
                                    borderRadius="15px"
                                    padding="0 3em"
                                    fontWeight="bold"
                                    bgColor="transparent"
                                />
                            </Link>

                            <p className={classes.downArrow}>↓</p>
                        </div>
                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={12}
                    container
                    className={
                        isMobile
                            ? classes.mobileGraphic
                            : classes.desktopGraphic
                    }
                    id="graphic"
                >
                    <Grid item xs={1} sm={1} />
                    <Grid item xs={6} sm={4}>
                        <p
                            className={`${
                                isMobile
                                    ? classes.mobilePadPara
                                    : classes.desktopPadPara
                            } ${classes.para}`}
                        >
                            Mon but est d’aider les entreprises, petites ou
                            grandes, à s’expandre en leur créant un site web.
                            Cela leurs permet d’augmenter leurs visibilté et
                            donc par adéquation leurs chiffre d’affaire.
                        </p>
                    </Grid>
                    <Grid item xs={5} sm={7} />
                    <Grid item xs={1} sm={1} />
                    <Grid item xs={6} sm={4}>
                        <p className={classes.para}>
                            Venez voir mes divers projets en cliquant
                            ci-dessous.
                        </p>
                    </Grid>
                    <Grid item xs={5} sm={7} />
                    <Grid item xs={1} sm={1} />
                    <Grid item xs={6} sm={4} container>
                        <RouteLink
                            to="/projects"
                            style={{ textDecoration: "none" }}
                        >
                            <SButton
                                text="Mes projets"
                                border="solid 3px #000"
                                borderRadius="15px"
                                height="3em"
                                padding="0 3em"
                                fontWeight="900"
                                marginBottom="1em"
                                bgColor="transparent"
                            />
                        </RouteLink>
                    </Grid>
                    <Grid item xs={5} sm={7} />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
