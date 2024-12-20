const http =require('http')
const app = require('./app')
const { log } = require('console')
const port = process.env.PORT || 3000


const server =http.createServer(app)

server.listen(port, ()=>{
    console.log(`server is runnning on ${port}`);
    
})