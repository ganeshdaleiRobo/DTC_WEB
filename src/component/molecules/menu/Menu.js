import React from "react";
import TextLink from "../../atoms/textLink/TextLink";
import Img from "../../atoms/img/Img";
import "./menu.scss";
const Menu = (props) => {
  return (
    <div className={props.iconBg ? "circle" : "menu-wapper"}>
      <Img imges={props.iconImg} width="28px" height="28px" />
      <TextLink label={props.name} />
    </div>
  );
};
export default Menu;
