const express = require('express')
const router = express.Router()

router.route('/').get((req, res)=>{
    console.log(req.url)
    res.send('All items')
})

module.exports = router
