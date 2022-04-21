import React, { Fragment } from "react";
import { Link } from "react-router-dom"

const Navigation: React.FC = () => {
    return (
        <Fragment>
            <Link to="/">Home</Link>
            <Link to="/price">プラン・料金</Link>
            <Link to="/photographer">フォトグラファー</Link>
            <Link to="/contact">予約・お問い合わせ</Link>
        </Fragment>
    )
}

export default Navigation;