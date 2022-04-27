import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "src/components/header";
import HamburgerStyle from "src/components/navigation.module.css"

export type MenuProps = {
  menus: Array<Menu>;
};

const Navigation: React.FC<MenuProps> = ({ menus }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Fragment>
        {openMenu ? (
          <div className="flex absolute top-0 right-0 min-h-fit min-w-full">
            <div className="w-full">
              <ul className="text-center border-l-2">
                {menus.map((value, index) => (
                  <li key={index} className="p-2 border-b-2">
                    <Link to={value.link}>{value.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : undefined}
          <div className={HamburgerStyle.menu} onClick={menuFunction}>
            {openMenu ? (
              <>
              <span className={`${HamburgerStyle.lineTop} ${HamburgerStyle.clicked}`}></span>
              <span className={`${HamburgerStyle.lineMiddle} ${HamburgerStyle.clicked}`}></span>
              <span className={`${HamburgerStyle.lineBottom} ${HamburgerStyle.clicked}`}></span>
              </>
            ) : (
              <>
              <span className={HamburgerStyle.lineTop}></span>
              <span className={HamburgerStyle.lineMiddle}></span>
              <span className={HamburgerStyle.lineBottom}></span>
              </>
              )
            }
          </div>
    </Fragment>
  );
};

export default Navigation;
