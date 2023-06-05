import { Link, json, useParams } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";

import "./style.css";
import { toast } from "react-toastify";

function Detalhes() {

    const [detalhes, setDetalhes] = useState({});
    // const [favoritos, setFavoritos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        api
            .get(`movie/${id}`)
            .then(res => setDetalhes(res.data))
            .catch("Request foi de vasco")
    }, [id]);

    function addFavorite() {
        let localStorageFavoritos = localStorage.getItem("@favoritos");

        let favoritos = JSON.parse(localStorageFavoritos) || [];

        const filmeJaCadastrado = favoritos.some((filmeSalvo) => filmeSalvo.id == id);

        if (filmeJaCadastrado) {
            toast.warn("Filme já cadastrado.")
            return;
        }

        favoritos.push(detalhes);

        localStorage.setItem("@favoritos", JSON.stringify(favoritos));

        toast.success("Filme cadastrado com sucesso.");
    }



    return (
        <div className="detalhes">
            <h1>{detalhes.title}</h1>
            <div className="container-image">
                <img src={`https://image.tmdb.org/t/p/original${detalhes.poster_path}`} alt="" />
            </div>
            <strong>Sinopse</strong>
            <p className="sinopse">{detalhes.overview}</p>
            <strong>Avaliação: {Number(detalhes.vote_average).toFixed(0)} / 10</strong>
            <div className="links">
                <button className="button" onClick={addFavorite}>+ Favorito</button>
                <a className="button" target="blank" href={`https://www.youtube.com/results?search_query=${detalhes.title} trailer`}>Trailler</a>
            </div>
        </div >
    );
}

export default Detalhes;