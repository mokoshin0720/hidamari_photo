import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "src/components/header";
import style from "src/components/navigation.module.css";

export type MenuProps = {
  menus: Array<Menu>;
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation: React.FC<MenuProps> = ({ menus, openMenu, setOpenMenu }) => {
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  
  return (
    <div className={style.container}>
        <ul className={style.menuList}>
          {menus.map((value, index) => (
            <li key={index} className={style.menu}>
              <Link to={value.link} className={style.menuLink} onClick={menuFunction}>{value.name}
              <hr className={style.menuLine} />
              <span className={style.lineTop}></span>
              <span className={style.lineBottom}></span>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Navigation;
