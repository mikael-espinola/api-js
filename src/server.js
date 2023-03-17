const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res) => {
    res.send(database.getProdutos()) // converter para json
})

app.get('/produtos/:id', (req, res ) => {
    res.send(database.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = database.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // gerando um JSON
})

app.put('/produtos/:id', (req, res) => {
    const produto = database.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // gerando um JSON
})

app.delete('/produtos/:id', (req, res) => {
    const produto = database.excluirProduto(req.params.id)
    res.send(produto) // gerando um JSON
})

app.listen(porta, () => {
    console.log(`Servidor sendo executado na porta ${porta}.`)
})

