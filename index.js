const express = require("express");
const server = express();
server.use(express.json());

// req.params.nome = recebe um valor por parametro.
// req.query.texto = recebe valor por query = texto=oi
// req.body.msg = recebe o valor pelo corpo da requisição

server.post("/tarefa", (req, res) => {
    const { titulo, data, hora} = req.body;

    if(!titulo)
    return res.status(400),send("O título deve ser informado!");

    res.send(`A tarefa ${titulo.toUpperCase}
    está agendada para o dia ${data} às $ {hora},`);
});


server.listen(3000, () => {
    console.log("Servidor Online!");
});