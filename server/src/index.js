//Importações
const express = require('express')
const mongoose  = require('mongoose')
const app = express()
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

//Configuração do express
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

//Habilitando requisições de qualquer domínio(resolvendo erro de CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, PATCH, GET, OPTIONS')
    
  next();
});

//Rotas de Usuário 
app.use('/user', userRoutes)

//Conexão com o MongoDB ATLAS e inicialização da API 
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.uya578n.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado ao MongoDB')
        app.listen(3000)
        console.log('API executando na porta 3000')
    })
    .catch((err) => {
        console.log(err)
    })

