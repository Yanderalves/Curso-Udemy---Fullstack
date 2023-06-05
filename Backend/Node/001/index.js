const express = require("express");

const server = express();

let cursos = ["JavaScript", "C#", "PHP"];

server.use(express.json());

const validarCurso = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).json({ error: "Nome do curso é obrigatório" });
    }
    return next(); 
};

const validarId = (req, res, next) => {

    console.log(req)

    if (!req.params.id) {
        return res.status(400).json({ error: "O ID é obrigatório" });
    }

    if(id > (cursos.length - 1)){
        return res.status(400).json({ error: "Curso inexistente." });
    }

    return next();

} 

server.get("/cursos/", (req, res) => {
    res.json(cursos);
});

server.get("/curso/:id", validarId, (req, res) => {
    const { id } = req.params;
    res.json(cursos[id]);
});

server.post("/curso/", validarCurso, (req, res) => {
    const { nome } = req.body;

    cursos.push(nome);
    res.json({ success: true, message: "Método executado com sucesso." });
});

server.delete("/curso/:id", validarId, (req, res) => {
    const { id } = req.params;
    cursos = cursos.filter((item, index) => {
        return index != id;
    });

    res.json({ success: true, message: "Método executado com sucesso." });
});

server.listen(3000);
