import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"
import { Menu } from "src/components/header"
import TitleImage from 'src/assets/images/title.png'

export type MenuProps = {
    menus: Array<Menu>
}

const Navigation: React.FC<MenuProps> = ({menus}) => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }

    console.log(openMenu)

    return (
        <Fragment>
            <nav className="flex">
            {openMenu ? (
            <div className='flex flex-row absolute z-10 top-0 right-0  min-h-fit min-w-full'>
            <div className='basis-1/2'></div>

            <div className='basis-1/2 bg-white'>
                <ul className=' text-center border-l-2 '>
              <li className='p-2 border-b-2'>
                <button onClick={menuFunction} className='font-bold'>
                  close
                </button>
              </li>
              {menus.map((value, index) => (
                <li key={index} className='p-2 border-b-2'>
                  <a href={value.link} onClick={menuFunction}>
                    {value.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : undefined}
                <div className='flex-initial text-[#abc5c5] font-bold m-5 '>
                    <ul>
                        {menus.map((value, index) => (
                            <li key={index} className='p-4'>
                                <Link to={value.link}>{value.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <button onClick={menuFunction} className='flex-initial absolute top-0 right-0'>
                    <img src={TitleImage} alt="hidamari" className="w-1/4" />
                </button>
            </nav>
        </Fragment>
    )
}

export default Navigation;