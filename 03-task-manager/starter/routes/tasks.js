const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    DeleteTask } = require('../controllers/tasks')

router.route('/').get( getAllTasks ).post( createTask )
router.route('/:id').get(getTask).patch(updateTask).delete(DeleteTask)

module.exports = router
