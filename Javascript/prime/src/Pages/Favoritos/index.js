import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { toast } from "react-toastify";

function Favoritos() {

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const localStorageFilmes = localStorage.getItem("@favoritos");

        if (localStorageFilmes) {
            setFavoritos(JSON.parse(localStorageFilmes));
        }
    }, [])


    function removerFavorito(id) {

        if(favoritos.length > 0){
            let novoArray = (favoritos.filter((filme) => {
                return id != filme.id
            }))
        
            setFavoritos(novoArray)
            localStorage.setItem("@favoritos", JSON.stringify(novoArray))

            toast.warning("Filme removido com sucesso.")
        }

    }

    return (
        <div className="favoritos">
            {favoritos.map(favorito =>
                <ul key={favorito.id} className="favorito">
                    <li>
                        <span>{favorito.title}</span>
                        <Link to={`/filme/${favorito.id}`} >Ver detalhes</Link>
                        <button onClick={() => removerFavorito(favorito.id)}>Remover filme</button>
                    </li>
                </ul>)}
        </div>
    );
}

export default Favoritos;