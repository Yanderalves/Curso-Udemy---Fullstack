import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Favoritos() {

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const localStorageFilmes = localStorage.getItem("@favoritos");

        if (localStorageFilmes) {
            setFavoritos(JSON.parse(localStorageFilmes));
        }
    }, [])

    function removerFavorito(favorito) {
        // favoritos.find(() => {

        // })

        console.log(favorito)
    }

    console.log(favoritos);

    return (
        <div className="favoritos">
            {favoritos.map(favorito =>
                <ul className="favorito">
                    <li>
                        <span>{favorito.title}</span>
                        <Link to={`/filme/${favorito.id}`} >Ver detalhes</Link>
                        <button onClick={(favorito) => removerFavorito}>Remover filme</button>
                    </li>
                </ul>)}
        </div>
    );
}

export default Favoritos;