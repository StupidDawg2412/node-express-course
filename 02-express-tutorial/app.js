const express = require('express')
const app = express()
const {router} = require('./route/people')
const auth = require('./route/auth')

app.use(express.static('methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/people',router)
app.use('/login',auth)

app.listen(5000, ()=>{
    console.log("Server is running on port : 5000...")
})


