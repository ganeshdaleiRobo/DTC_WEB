import React from "react";
import TextField from "../../../atoms/textField/TextField";
const FooterMenu = (props) => {
  const style = {
    display: "flex",
    color: props.color,
    backgroundColor: props.colorbg,
    justifyContent: "space-evenly",
    alignItems: "center",
    fontWeight: props.style,
    height: props.height,
    width: props.width,
    opacity: "0.4",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "1.25",
    letterSpacing: "normal",
  };
  return (
    <div style={style}>
      <TextField label="About" />
      <TextField label="Gifting" />
      <TextField label="Help/FAQ" />
      <TextField label="Privacy Policy" />
      <TextField label="Tearm of Use" />
      <TextField label="Subscriptions" />
      <TextField label="TV Ratings" />
      <TextField label="Online Closed Captioning" />
      <TextField label="Contact US" />
      <TextField label="AdChoices" />
    </div>
  );
};

export default FooterMenu;

FooterMenu.defaultProps = {
  color: "black",
  colorbg: "rgb(4, 5, 6)",
  label: "",
  style: "normal",
  height: "100px",
  width: "100%",
};
