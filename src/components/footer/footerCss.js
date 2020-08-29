import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    footer: {
        height: "10vh",
        color: "white",
        paddingTop: "1em",
    },

    a: {
        color: "white",
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
