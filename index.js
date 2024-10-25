const express = require("express");
const app = express();
const produtoRota = require("./rotas/produtos")
var expressLayouts = require('express-ejs-layouts')

app.use(express.json())


app.set('view engine', 'ejs')

app.set('layout', 'layoutDecorado/layout')

app.use(expressLayouts)

app.use('/static', express.static('public'))





app.use("/produto", produtoRota)


app.get('/listas', (req, res) => {
  const lista = [
    { id: 1, nome: 'Camiseta', preco: 20.00 },
    { id: 2, nome: 'Calça Jeans', preco: 50.00 },
    { id: 3, nome: 'Tênis', preco: 80.00 }

  ]
  res.render('listas/index', { lista : lista})
})



app.get("/", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
  console.log(`TESTANDO NO AMBIENTE ${process.env.NODE_ENV}`)
  console.log("Servidor pronto na porta 8080");
});