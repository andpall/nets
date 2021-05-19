const router = require('express').Router()
const CathedrasController = require('../controllers/cathedras.controller')

router.get('/', async (req, res) => {
    CathedrasController.getCathedra(req, res)
})

router.post('/', async (req, res) => {
    CathedrasController.createCathedra(req, res)
})

router.put('/', async (req, res) => {
    CathedrasController.updateCathedra(req, res)
})

router.delete('/', async (req, res) => {
    CathedrasController.deleteCathedra(req, res)
})


module.exports = router
