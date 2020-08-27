const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./src/Routes/routes')
const headerMiddleare = require('./src/Middlewares/headerMiddle')

app.use(cors())
app.use(bodyParser.json({limit: '1024mb', extended: true})); 
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true })); 
app.use(express.json())
app.use((req,res,next)=>headerMiddleare.headers(req,res,next));
app.use(routes.routes)

app.listen(3002, ()=>{
  console.log('conexao aberta na porta 3002')
})


module.exports = {app}

  



