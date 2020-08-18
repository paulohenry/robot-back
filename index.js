const express = require('express')
const app = express()
const server = require('http').Server(app)
const socketio = require('socket.io')(server)

const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./src/Routes/routes')
const socketChat = require('./src/Service/socket')
const headers = require('./src/Config/headers')

socketio.on('connection', socket=> socketChat.chat(socket)) 

app.use(cors())
app.use(bodyParser.json({limit: '1024mb', extended: true})); 
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true })); 
app.use(express.json())
app.use((_, res, next) =>{
  res.header(headers.headers.AccesControllAllowOrigin, headers.headers.all);
  res.header(headers.headers.AccesControllAllowHeaders, headers.headers.various);
  next();
});
app.use(routes.routes)

server.listen(3002, ()=>{
  console.log('conexao aberta na porta 3002')
})


module.exports = {app}

  



