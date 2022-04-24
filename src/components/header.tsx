import { Fragment, FC } from "react";
import Navigation from "src/components/navigation";
import TitleImage from "src/assets/images/title.png";

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

  return (
    <Fragment>
      <header className="relative sticky pb-10 bg-neutral-100 top-0">
        <img src={TitleImage} alt="hidamari" className="absolute top-0 left-0 w-1/4" />
        <Navigation menus={menus} />
      </header>
    </Fragment>
  );
};

export default Header;
