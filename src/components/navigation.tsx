import React, { Fragment } from "react";
import { Link } from "react-router-dom"

const Navigation: React.FC = () => {
    return (
        <Fragment>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/price">プラン・料金</Link>
                </li>
                <li>
                    <Link to="/photographer">フォトグラファー</Link>
                </li>
                <li>
                    <Link to="/contact">予約・お問い合わせ</Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default Navigation;