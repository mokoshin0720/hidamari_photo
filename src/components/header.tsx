import { Fragment, FC, useState } from "react";
import HamburgerMenu from "src/components/hamburgerMenu";
import TitleImage from "src/assets/images/header/title.png";
import Navigation from "src/components/navigation";
import style from "src/components/header.module.css";

export type Menu = {
  link: string;
  name: string;
};

const Header: FC = () => {
  const menus: Array<Menu> = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "プラン・料金",
      link: "/price",
    },
    {
      name: "フォトグラファー",
      link: "/photographer",
    },
    {
      name: "予約・お問い合わせ",
      link: "/contact",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Fragment>
      <header className={style.header}>
        <div>
          <img
            src={TitleImage}
            alt="hidamari"
            className={style.titleImg}
            />
        </div>

        <div className={style.hamburgerMenu}>
          <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </header>
      {openMenu ? <Navigation menus={menus} /> : undefined}
    </Fragment>
  );
};

export default Header;
