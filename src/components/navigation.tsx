import React, { Fragment, ReactNode } from "react";
import { Route, Routes} from "react-router-dom"
import Home from "../page/Home";
import Price from "../page/price";

type Props = {
    children: ReactNode
}

const Navigation: React.FC<Props> = ({children}: Props) => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />}>NavigationHome</Route>
                <Route path="/price" element={<Price />}>NavigationPrice</Route>
            </Routes>
            <p>navigation1</p>
            <p>navigation2</p>
            { children }
        </Fragment>
    )
}

export default Navigation;