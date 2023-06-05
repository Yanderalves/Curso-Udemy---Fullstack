import { Link } from "react-router-dom";

import Home from "../../Pages/Home"

import "./style.css"

function Erro() {
    return (
        <div className="erro">
            <h1>Pagina não econtrada.</h1>
            <Link to={"/"} >Voltar para página inicial</Link>
        </div>
    );
}
export default Erro;