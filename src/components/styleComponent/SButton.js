import React from "react";
import { withStyles, Button } from "@material-ui/core";

// eslint-disable-next-line no-lone-blocks
{
    /*
    const primary = "#252122";
    const secondary = "red";
    */
}

const SButton = (props) => {
    const {
        bgColor,
        text,
        borderRadius,
        border,
        height,
        padding,
        fontWeight,
        marginBottom,
        color,
    } = props;

    const StyleButton = withStyles({
        root: {
            backgroundColor: bgColor ? bgColor : "#252122",
            borderRadius: borderRadius,
            border: border,
            height: height,
            padding: padding,
            fontWeight: fontWeight,
            marginBottom: marginBottom,
            color: color,
            "&:hover": {
                opacity: "0.95",
                backgroundColor: bgColor ? bgColor : "#252122",
            },
        },
    })(Button);

    return <StyleButton>{text ? text : ""}</StyleButton>;
};

export default SButton;
