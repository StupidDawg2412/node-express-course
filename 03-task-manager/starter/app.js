const http = require('http')
const port = 5000
const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.write('<h1>Test</h1>')
})

server.listen(5000, ()=>{
    console.log(`Server is running on port : ${port}`)
})