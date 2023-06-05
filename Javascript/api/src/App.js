import { useEffect, useState } from "react";

import './style.css';

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    const localStorageNutri = localStorage.getItem("@nutri");

    if (localStorageNutri) {
      setNutri(JSON.parse(localStorageNutri))
    } else {
      const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then(r => r.json())
        .then(json => setNutri(json))
        .catch("Erro de requisição.")

      console.log("Teste")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("@nutri", JSON.stringify(nutri))
  }, [nutri])


  return (
    <div className="App">

      <header>
        <h1>Nutição</h1>
      </header>
      <main>
        {nutri.map(item => (
          <section key={item.id}>
            <h2>{item.titulo}</h2>
            <span>Categoria: {item.categoria}</span>
            <div className="container-image">
              <img src={item.capa} alt={item.titulo} />
            </div>
            <p>{item.subtitulo}</p>
            <a href="#">Acessar</a>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
