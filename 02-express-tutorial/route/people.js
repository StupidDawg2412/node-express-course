const express = require('express')
const {people} = require('../data')
const router = express.Router()

const {
    getPeople,
    createPeople,
    updatePeople,
    postmanPeople,
    deletePeople
} = require('../controllers/people.js')

router.get('/', getPeople)

router.post('/',createPeople)

router.post('/postman', )

router.put('/:id', updatePeople)

router.delete('/:id', deletePeople)

module.exports = {router}