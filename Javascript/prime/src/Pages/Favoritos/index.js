import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Favoritos() {

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const localStorageFilmes = localStorage.getItem("@favoritos");

        console.log(JSON.parse(localStorageFilmes));

        if (localStorageFilmes) {
            setFavoritos(JSON.parse(localStorageFilmes));
        }
    }, [])

    return (
        <>
            {/* {favoritos.map(item => {
                <li>{item.title}</li>
            })} */}
        </>
    );
}

export default Favoritos;