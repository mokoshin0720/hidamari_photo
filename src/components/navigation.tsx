import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Menu } from "src/components/header"

export type MenuProps = {
    menus: Array<Menu>
}

const Navigation: React.FC<MenuProps> = ({menus}) => {
    return (
        <Fragment>
            <ul>
                {menus.map((value, index) => (
                    <li key={index} className='p-4'>
                        <Link to={value.link}>{value.name}</Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default Navigation;