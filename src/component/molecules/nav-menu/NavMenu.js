import React, { useState, useEffect } from "react";
import iconHome from "../../assets/menus/Home.png";
import iconPlus from "../../assets/menus/plus.png";
import iconShow from "../../assets/menus/show.png";
import iconSearch from "../../assets/menus/search.png";
import Menu from "../menu/Menu";
import "./nav-menu.scss";

const NavMenu = () => {
  const [menuList, setMenuList] = useState({
    Menu: [
      { name: "Home", iconImg: iconHome, iconBg: true },
      { name: "My Stuff", iconImg: iconPlus, iconBg: false },
      { name: "Shows", iconImg: iconShow, iconBg: false },
      { name: "Search", iconImg: iconSearch, iconBg: false },
    ],
  });
  return (
    <div className="menu-render">
      {menuList.Menu.map((value) => {
        return (
          <Menu
            iconBg={value.iconBg}
            iconImg={value.iconImg}
            name={value.name}
          />
        );
      })}
    </div>
  );
};
export default NavMenu;
