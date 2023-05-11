const express = require('express')
const app = express()
const {logger} = require('./logger.js')
const {authorize} = require('./authorize.js')

app.use([authorize, logger])

app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})
app.get('/api/items', (req, res)=>{
    res.send('Items')
})
app.get('/api/users', (req, res)=>{
    res.send('Users')
})
app.listen(5000, ()=>{
    console.log("Server is running on port : 5000...")
})


