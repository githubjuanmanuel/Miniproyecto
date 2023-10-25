const express = require('express')
const Task = require('../models/taskModel')
const { createTask,getTasks, getTask,deleteTask, updateTask } = require('../controllers/taskController')
const router = express.Router()




router.post("/api/tasks",  createTask)
router.get("/api/tasks", getTasks)
router.get("/api/tasks/:id", getTask)


module.exports = router