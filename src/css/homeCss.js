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
        fontWeight: "900",
        marginBottom: "1em",
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

    mobileGraphic: {
        backgroundImage: `url(${Graphic})`,
        height: "85 vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    desktopGraphic: {
        backgroundImage: `url(${Graphic})`,
        height: "60vh",
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
        textAlign: "justify",
    },

    padPara: {
        paddingTop: "4em",
    },

    footer: {
        height: "10vh",
        color: "white",
        paddingTop: "1em",
    },

    a: {
        color: "#c5c4c4",
    },

    instagram: {
        width: " 1em !important",
        background:
            " radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)",
        margin: "0.2em",
    },

    twitter: {
        backgroundColor: "#2daae4",
        margin: "0.2em",
    },

    facebook: {
        backgroundColor: "#3c5a98",
        margin: "0.2em",
    },

    icon: {
        borderRadius: "10px",
        padding: "0.2em",
    },

    copyright: {
        backgroundColor: "#464646",
        color: "#858484",
        width: "10em",
        borderRadius: "5px",
        fontSize: "10px",
        height: "3em",
        marginBottom: "1em",
    },

    padContact: {
        paddingLeft: "1em",
    },

    sep: { borderTop: "solid 1px #858484" },
});

export default useStyles;
