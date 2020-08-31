import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        backgroundColor: "white",
        paddingTop: "1vh",
        paddingBottom: "1vh",
        color: "#555555",
    },

    padTitle: {
        paddingTop: "2em",
    },

    title: {
        textAlign: "center",
        borderTop: "solid 2px #CCCCCC",
        borderBottom: "solid 2px #CCCCCC",
        fontSize: "3em",
        fontFamily: "roboto slab",
    },

    para: {
        fontSize: "2em",
        textAlign: "center",
    },
});

export default useStyles;
