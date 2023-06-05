import './style.css'

import { Link } from 'react-router-dom';

function Filme({ titulo, capa, id }) {
    return (
        <div className="filme">
            <h2>{titulo}</h2>
            <div className="container-image"><img src={capa} alt="Imagem do filme" /></div>
            <Link className="link-detalhes" to={`filme/${id}`}>Detalhes do filme</Link>
        </div>
    );
}

export default Filme;