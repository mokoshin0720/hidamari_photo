import React, { Fragment } from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "../page/Home";
import Price from "../page/price";
import Photographer from "../page/photographer";
import Contact from "../page/contact";

const Routing: React.FC = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/price" element={<Price />}></Route>
                    <Route path="/photographer" element={<Photographer />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;