import { Link } from "react-router-dom";
import './style.css'

function Header() {
    return (
        <header>
            <h1>Prime Flix</h1>
            <Link className="button-movies" to="/favoritos">Meus filmes</Link>
        </header>
    );
}

export default Header;