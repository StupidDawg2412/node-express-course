const express = require('express')
const app = express()
const {router} = require('./route/people')

app.use(express.static('methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/people',router)

app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please enter name')
})



app.listen(5000, ()=>{
    console.log("Server is running on port : 5000...")
})


