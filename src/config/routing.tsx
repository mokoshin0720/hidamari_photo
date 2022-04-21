import React, { Fragment } from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "../page/Home";
import Price from "../page/price";

const Routing: React.FC = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>NavigationHome</Route>
                    <Route path="/price" element={<Price />}>NavigationPrice</Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;