const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extend: false }));
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor  ativo na porta 3000");
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Front/index.html");
})
let nomes = [];
//CREATE
app.post("/cadastroNome", (req, res) => {
    const { nome } = req.body;
    nomes.push(nome);
    console.log(nomes);
    res.sendFile(__dirname + "/Front/index.html")
})
//READ
app.get("/mostrarNomes", (req, res) => {
    console.log(nomes);
    res.send(nomes)
})