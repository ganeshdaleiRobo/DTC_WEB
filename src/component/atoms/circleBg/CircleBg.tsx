import * as React from "react";
import {Cricle, Label } from '../../utility/interface/Interface';
const CircleBg = (props:Cricle) => {
    const style:Object = {
        display: "flex",
        color: props.color,
        backgroundColor: props.colorbg,
        borderRadius: "100px",
        justifyContent: "center",
        alignItems: "center",
        height: props.height,
        width: props.width,
        fontWeight: props.style,
    }
    return <div style={style}>{props.label}</div>
}
export default CircleBg;

CircleBg.defaultProps = {
    color: "white",
    colorbg: "gray",
    height: "50px",
    width: "50px",
    label: "text",
    style: "normal",
};