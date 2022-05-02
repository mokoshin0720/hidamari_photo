import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "src/components/header";
import style from "src/components/navigation.module.css";

export type MenuProps = {
  menus: Array<Menu>;
};

const Navigation: React.FC<MenuProps> = ({ menus }) => {
  return (
    <div className={style.container}>
        <ul className={style.menuList}>
          {menus.map((value, index) => (
            <li key={index} className={style.menu}>
              <Link to={value.link} className={style.menuLink}>{value.name}
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
