import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "src/components/header";

export type MenuProps = {
  menus: Array<Menu>;
};

const Navigation: React.FC<MenuProps> = ({ menus }) => {
  return (
    <div className="relative min-h-fit min-w-full z-10">
      <div className="w-full">
        <ul className="text-center border-l-2 absolute w-full">
          {menus.map((value, index) => (
            <li key={index} className="p-2 border-b-2">
              <Link to={value.link}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
