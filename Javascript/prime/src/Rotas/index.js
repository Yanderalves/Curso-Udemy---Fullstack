import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home';
import Filme from '../Pages/Filme';
import Favoritos from '../Pages/Favoritos';
import Header from '../components/Header';
import Erro from '../Pages/Erro';
import Detalhes from '../Pages/Detalhes';

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/filme/:id" Component={Detalhes}></Route>
                <Route path="/favoritos" Component={Favoritos}></Route>


                <Route path="*" Component={Erro}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;