const router = require('express').Router()
const StudentsController = require('../controllers/students.controller')

router.get('/', async (req, res) => {
    StudentsController.getStudent(req,res)
})

router.post('/', async (req, res) => {
    StudentsController.createStudent(req,res)
})

router.put('/', async (req, res) => {
    StudentsController.updateStudent(req,res)
})

router.delete('/', async (req, res) => {
    StudentsController.deleteStudent(req,res)
})


module.exports = router
