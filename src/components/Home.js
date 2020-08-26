import React from "react";
import { Grid, Button } from "@material-ui/core";
import homeCss from "../css/homeCss";
import Footer from "./Footer";

const Home = (props) => {
    const classes = homeCss();
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
                            <Button className={classes.colorButton}>
                                En savoir plus
                            </Button>
                            <p className={classes.downArrow}>↓</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} container className={classes.graphic}>
                    <Grid item xs={1} sm={1} />
                    <Grid item xs={6} sm={4}>
                        <p className={`${classes.para} ${classes.padPara}`}>
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
                        <Button className={classes.Button}>Mes projets</Button>
                    </Grid>
                    <Grid item xs={5} sm={7} />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
