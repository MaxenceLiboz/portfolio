import { makeStyles } from "@material-ui/core/styles";
import Computer from "../../images/Computer.jpg";
import Graphic from "../../images/Graphic.jpg";

const useStyles = makeStyles({
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
        height: "100 vh",
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
    },

    desktopPadPara: {
        paddingTop: "4em",
        textAlign: "justify",
    },

    mobilePadPara: {
        paddingTop: "2em",
    },
});

export default useStyles;
