const getAllTasks = (req,res)=>{
    res.send('all items')
}

const createTask = (req, res)=>{
    res.send('Create task')
}

const getTask = (req, res)=>{
    let id = req.params.id
    res.json({"id":id})
}

const updateTask = (req, res)=>{
    res.send('Update task')
}

const DeleteTask = (req, res)=>{
    res.send('Delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    DeleteTask
}