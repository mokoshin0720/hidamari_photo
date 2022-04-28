import { Fragment, FC, useState } from "react";
import HamburgerMenu from "src/components/hamburgerMenu";
import TitleImage from "src/assets/images/header/title.png";
import Navigation from "src/components/navigation";

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
      <header className="relative pb-8 bg-neutral-100">
        <img
          src={TitleImage}
          alt="hidamari"
          className="absolute top-2 left-2 w-64"
        />
        <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
      {openMenu ? <Navigation menus={menus} /> : undefined}
    </Fragment>
  );
};

export default Header;
