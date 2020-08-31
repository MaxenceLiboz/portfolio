import React from "react";
import projectsCss from "./projectsCss";
import { Grid } from "@material-ui/core";
import Cards from "../cards/Cards";
import ocina from "../../images/OcinaProject.png";

const Porjects = () => {
    const classes = projectsCss();

    return (
        <>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={1} sm={2} md={4} />
                    <Grid
                        item
                        xs={10}
                        sm={8}
                        md={4}
                        className={classes.padTitle}
                    >
                        <h1 className={classes.title}>MON TRAVAIL</h1>
                    </Grid>
                    <Grid item xs={1} sm={2} md={4} />

                    <Grid item xs={1} md={3} />
                    <Grid item xs={10} sm={10} md={6}>
                        <p className={classes.para}>
                            J’ai travailler sur quelques projets, vous pouvez
                            avoir un apercu ci-dessous.
                        </p>
                    </Grid>
                    <Grid item xs={1} md={3} />

                    <Grid item xs={3} />
                    <Grid item xs={6}>
                        <Cards
                            styles={{
                                minHeight: "200px",
                            }}
                            imgSrc={ocina}
                            title={<>Le site internet Ocina</>}
                            description={
                                <>
                                    Ce site a été créer dans le but d'avoir un
                                    portfolio des produits vendus par la marque
                                    Ocina, pour pouvoir rediriger ensuite les
                                    cliens qui veulent acheter un de leur
                                    produits.
                                </>
                            }
                            button={<>En savoir plus sur ce projet</>}
                        />
                    </Grid>
                    <Grid item xs={3} />
                </Grid>
            </div>
        </>
    );
};

export default Porjects;
