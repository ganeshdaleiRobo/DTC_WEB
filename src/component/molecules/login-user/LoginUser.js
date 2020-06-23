import React from "react";
import Button from "../../atoms/buttons/Button";
import TextLink from "../../atoms/textLink/TextLink";
import "./loginUser.scss";
const LoginUser = (props) => {
  return (
    <div className="login-wapper">
      <TextLink label="Already a Member" />
      <Button label="Sign in"/>
    </div>
  );
};
export default LoginUser;
