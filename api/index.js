const express = require('express') //pede o express
const app = express() //define o app como uma função express
const config = require('config') //puxa a conifig do arquivo config
const roteador = require('./rotas/fornecedores') //puxa o rotador 

app.use(express.json()) //acita o formato json

app.use('/api/fornecedores', roteador) //

app.listen(config.get('api.porta'), () => console.log('A API esta funcionando!'))