import React from "react";
import "./header.scss";
import Logo from "../../molecules/logo/Logo";
import NavMenu from "../../molecules/nav-menu/NavMenu";
import LoginUser from "../../molecules/login-user/LoginUser";
const Header = (props) => {
  return (
    <div className="top_navigation">
      <div className="top_navigation_inner">
        <Logo />
        <NavMenu />
        <LoginUser />
      </div>
    </div>
  );
};
export default Header;
