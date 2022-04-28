import React, { Fragment } from "react";
import HamburgerStyle from "src/components/hamburgerMenu.module.css";

export type MenuProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Fragment>
      <div className={HamburgerStyle.menu} onClick={menuFunction}>
        {openMenu ? (
          <>
            <span
              className={`${HamburgerStyle.lineTop} ${HamburgerStyle.clicked}`}
            ></span>
            <span
              className={`${HamburgerStyle.lineMiddle} ${HamburgerStyle.clicked}`}
            ></span>
            <span
              className={`${HamburgerStyle.lineBottom} ${HamburgerStyle.clicked}`}
            ></span>
          </>
        ) : (
          <>
            <span className={HamburgerStyle.lineTop}></span>
            <span className={HamburgerStyle.lineMiddle}></span>
            <span className={HamburgerStyle.lineBottom}></span>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default HamburgerMenu;
