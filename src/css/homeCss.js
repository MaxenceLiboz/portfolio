import { makeStyles } from "@material-ui/core/styles";
import Computer from "../images/Computer.jpg";
import Graphic from "../images/Graphic.jpg";

const useStyles = makeStyles({
    colorButton: {
        color: "white",

        border: "solid 3px #f95a00",
        borderRadius: "15px",
        padding: "0 3em",
        fontWeight: "bold",
    },

    Button: {
        height: "3em",
        border: "solid 3px #000",
        borderRadius: "15px",
        padding: "0 3em",
        fontWeight: "bold",
    },

    downArrow: {
        textAlign: "center",
        color: "#f95a00",
        fontSize: "2em",
        margin: "0",
    },

    alt: { color: "#f95a00" },

    computer: {
        backgroundImage: `url(${Computer})`,
        height: "100vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    graphic: {
        backgroundImage: `url(${Graphic})`,
        height: "80vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    title: {
        color: "white",
        fontFamily: "didot",
        fontSize: "1.3em",
        paddingTop: "2em",
    },

    para: {
        overflowWrap: "normal",
        fontSize: "1.2em",
        fontWeight: "bold",
        color: "white",
        fontFamily: "Courier",
    },

    padPara: {
        paddingTop: "4em",
    },
});

export default useStyles;
