import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import SButton from "../styleComponent/SButton";

const Cards = (props) => {
    const {
        history,
        imgSrc,
        title,
        description,
        pageURL,
        button,
        styles,
    } = props;

    const handleClick = () => {
        history.push(pageURL ? pageURL : "/projects");
    };

    return (
        <>
            <Card>
                <Button
                    onClick={() => handleClick()}
                    disableRipple
                    disableFocusRipple
                    style={{ background: "transparent" }}
                >
                    <CardMedia
                        component="img"
                        image={imgSrc ? imgSrc : ""}
                        title=""
                        style={styles}
                    />
                </Button>
                <CardContent
                    style={{ backgroundColor: "whitesmoke", minHeight: "6em" }}
                >
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        style={{ fontWeight: "700" }}
                    >
                        {title ? title : "Titre par default"}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {description ? description : "Description par default"}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{
                        backgroundColor: "whitesmoke",
                        paddingBottom: "2em",
                    }}
                >
                    {button ? <SButton text={button} color="white" /> : ""}
                </CardActions>
            </Card>
        </>
    );
};

export default withRouter(Cards);
