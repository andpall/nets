const router = require('express').Router()
const FacultiesController = require('../controllers/faculties.contoller')

router.get('/', async (req, res) => {
    FacultiesController.getFaculty(req, res)
})

router.post('/', async (req, res) => {
    FacultiesController.createFaculty(req, res)
})

router.put('/', async (req, res) => {
    FacultiesController.updateFaculty(req, res)
})

router.delete('/', async (req, res) => {
    FacultiesController.deleteFaculty(req, res)
})

module.exports = router
