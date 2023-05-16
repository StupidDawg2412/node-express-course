require('./db/connect.js')
const express = require('express')
const app =express()
const tasks = require('./routes/tasks.js')

app.use(express.json())

app.use('/api/v1/tasks', tasks)


const port = 3000
app.listen(port, console.log(`Server is running on port: ${port} `))
