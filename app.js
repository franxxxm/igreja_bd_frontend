const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const cors = require('cors')

//Configurações

//cors
app.use(cors())

//flash
app.use(flash())

//json
app.use(express.json())

//middlewares

//handlebars
app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout:'main'
}))
app.set('view engine', 'hbs')

//bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

//rotas
const igreja = require("./routes/admin")

app.use(igreja)

app.listen(8080, ()=>{
    console.log('http://localhost:8080/igreja')
})