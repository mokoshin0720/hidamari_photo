import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "src/components/header";
import TitleImage from "src/assets/images/title.png";

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
        <button
          onClick={menuFunction}
        >
          <img src={TitleImage} alt="hidamari" className="absolute top-0 right-0 w-1/4" />
        </button>
    </Fragment>
  );
};

export default Navigation;
