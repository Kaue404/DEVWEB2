//Adicionar a biblioteca
const express = require('express');
//Criar um padrão de boas práticas CLEAN CODE
const app = express();
//Utilizar a biblioteca
app.use(express.json());
//Abrir o servidor na porta 3000
app.listen(3000, () => {
    console.log("O servidor está ativo na porta 3000");
})
let nomes = [];//Banco de dados
//CRUD
//CREATE
app.post("/testePOST", (req, res) => {
    const { nome, sobrenome } = req.body;
    console.log(`Nome: ${nome} \n Sobrenome: ${sobrenome}`);
    nomes.push(nome);
    res.sendStatus(200);
})
//READ
app.get("/testeGET", (req, res) => {
    console.log(nomes);
    res.send(nomes);
    res.sendStatus(200);
})
//UPDATE
app.put("/testePUT", (req, res) => {
    const { nome, sobrenome } = req.body

})
//DELETE
app.delete("/testeDELETE", (req, res) => {

})