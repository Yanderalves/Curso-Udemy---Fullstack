import { Link } from "react-router-dom";
import './style.css'

function Header() {
    return (
        <header>
            <div className="limitar-tamanho">
                <Link className="logo" to="/">Prime Flix</Link>
                <Link className="button-movies" to="/favoritos">Meus filmes</Link>
            </div>
        </header>
    );
}

export default Header;