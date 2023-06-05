import { useEffect, useState } from "react";
import api from "../../services/api";

import Filme from "../Filme";

import './style.css';

function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api
            .get("/movie/now_playing")
            .then(res => setFilmes(res.data.results.slice(0, 10)))
            .catch("Request foi de vasco")
            .finally(setLoading(false))

    }, [])

    if (loading) {
        return (
            <div className="container-image-loading"><img className="loading" src="../../assets/loading.gif" alt="loading"></img></div>
        )
    }

    return (
        <div className="container-filmes">
            {filmes.map(filme => <Filme id={filme.id} titulo={filme.title} capa={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} />)}
        </div>
    );
}

export default Home;
