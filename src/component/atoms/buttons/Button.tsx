import * as React from "react";
import "./button.scss";
import { Label } from "../../utility/interface/Interface";

const Button = (name: Label) => <button>{name.label}</button>;
export default Button;

Button.defaultProps = {
  label: "Login in",
};
