import React from "react";
import Logo from "../../../molecules/logo/Logo";
import Cricle from "../../../atoms/circleBg/CircleBg";
const FooterCopyRight = (props) => {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          justifyItems: "center",
        }}
      >
        <Cricle
          colorbg="#2d2c2c"
          label="F"
          color="white"
          width="40px"
          height="40px"
        />
        <Cricle
          colorbg="#2d2c2c"
          label="T"
          color="white"
          width="40px"
          height="40px"
        />
        <Cricle
          colorbg="#2d2c2c"
          label="U"
          color="white"
          width="40px"
          height="40px"
        />
        <Cricle
          colorbg="#2d2c2c"
          label="F"
          color="white"
          width="40px"
          height="40px"
        />
      </div>
      <div>Copyright @ 2020 Discovery Digital Ventures, LLC</div>
      <div>
        <Logo />
      </div>
    </div>
  );
};
export default FooterCopyRight;

FooterCopyRight.defaultProps = {
  color: "white",
  colorbg: "#000000",
  label: "",
  style: "normal",
  height: "100px",
  width: "100%",
};
