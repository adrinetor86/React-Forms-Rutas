import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Component} from 'react';
import Home from "./Home";
import Musica from "./Musica";
import Cine from "./Cine";
import FormSimple from "./FormSimple";
import Collatz from "./collatz/Collatz";
import TablaMultiplicar from "./tablamultiplicar/TablaMultiplicar";
import TablaMultiplicarV2 from "./tablamultiplicarv2/TablaMultiplicarV2";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/musica" element={<Musica/>}/>
                    <Route path="/cine" element={<Cine/>}/>
                    <Route path="/formsimple" element={<FormSimple/>}/>
                    <Route path="/collatz" element={<Collatz/>}/>
                    <Route path="/tablamultiplicar" element={<TablaMultiplicar/>}/>
                    <Route path="/tablamultiplicar2" element={<TablaMultiplicarV2/>}/>
                </Routes>
            </BrowserRouter>
            );
    }
}

export default Router;