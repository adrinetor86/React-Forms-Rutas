import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Component} from 'react';
import Home from "./Home";
import Musica from "./Musica";
import Cine from "./Cine";
import FormSimple from "./FormSimple";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/musica" element={<Musica/>}/>
                    <Route path="/cine" element={<Cine/>}/>
                    <Route path="/formsimple" element={<FormSimple/>}/>
                </Routes>
            </BrowserRouter>
            );
    }
}

export default Router;