import React from "react";
import "./style.scss";

const TextField = (props) => {
  const style = {
    label: props.label,
    fontSize: props.size,
    fontWeight: props.style,
    color: props.color,
  };

  return (
    <span style={style} className="text-field-wapper">
      {props.label}
    </span>
  );
};

export default TextField;
TextField.defaultProps = {
  label: "Label",
  size: "14px",
  style: "normal",
  color: "white",
};
