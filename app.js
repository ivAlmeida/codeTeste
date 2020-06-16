const express = require('express')
const bodyparser = require('body-parser');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const app = express()
const path = require("path")
const admin = require('./routes/admin');

//Configurações
//body-parser
app.use(bodyparser.urlencoded({ extended: false }));


// parse application/json
app.use(bodyparser.json());
//Handlebars
app.engine('handlebars', handlebars({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

//Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")))

app.use('/', admin);

mongoose.connect('mongodb://localhost/base',{
   useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("conectado")
}).catch((erro)=>{
    console.log("não conectado"+ erro)
})

app.listen(3000,()=>{
    console.log("servidor iniciou")
})



// npm i -g nodemon