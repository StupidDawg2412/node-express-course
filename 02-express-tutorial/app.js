const http = require('http')

const port = 5000

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<h1>Home page</h1>')
    res.end()
})

server.listen(port, ()=>{
    console.log(`Server in listening on port : ${port}...`)
})