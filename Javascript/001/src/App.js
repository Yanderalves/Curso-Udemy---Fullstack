import React, { useEffect, useState } from "react";
// import './App.css'


function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    let localStorageTarefas = localStorage.getItem("@tarefa");

    if (localStorageTarefas)
      setTarefas(JSON.parse(localStorageTarefas));

  }, [])

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas))
  }, [tarefas])

  function handleRegister(e) {
    e.preventDefault();

    if (input.trim().length !== 0) {
      setTarefas([...tarefas, input]);
      setInput('');
    }
  }

  return (
    <div className="App">
      <h1>Cadastros de Tarefas</h1>
      <form onSubmit={handleRegister}>
        <div className="container-input">
          <label>Nome da tarefa: </label>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        </div>
        <button type="submit">Nova tarefa</button>
      </form >
      <br />
      <div>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
