import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";

import "./style.css";

function Detalhes() {

    const [detalhes, setDetalhes] = useState({});
    const [favoritos, setFavoritos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        api
            .get(`movie/${id}`)
            .then(res => setDetalhes(res.data))
            .catch("Request foi de vasco")
    }, []);

    function addFavorite(e) {
        e.preventDefault();
        setFavoritos([...favoritos, detalhes])
        localStorage.setItem("@favoritos", JSON.stringify(favoritos));
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
                <a onClick={addFavorite}>Salvar</a>
                <a target="_blank" href={`https://www.youtube.com/results?search_query=${detalhes.title} trailer`}>Tariler</a>
            </div>
        </div >
    );
}

export default Detalhes;