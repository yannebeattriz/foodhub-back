const express = require("express")
const app = express()

app.use(express.json())

let produtos = [
    {
        id: 1,
        nome: "Pastel",
        preco: 10.90
    },
    {
        id: 2,
        nome: "Pizza",
        preco: 20.90
    },
     {
        id: 3,
        nome: "Hamburguer",
        preco: 12.90
    },
]


app.get("/produtos", (req, res) => {
    res.json(produtos)
})

app.post("/produtos", (req, res) => {
    const produto = req.body;

    produtos.push(produto);

    res.json("produto cadastrado com sucesso");
})


app.listen(3002, () => {
    console.log("Servidor rodando na porta 3002")
})
