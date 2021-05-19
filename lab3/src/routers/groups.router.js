const router = require('express').Router()
const GroupsController = require('../controllers/groups.controller')

router.get('/', async (req, res) => {
    GroupsController.getGroup(req, res)
})

router.post('/', async (req, res) => {
    GroupsController.createGroup(req, res)
})

router.put('/', async (req, res) => {
    GroupsController.updateGroup(req, res)
})

router.delete('/', async (req, res) => {
    GroupsController.deleteGroup(req, res)
})

module.exports = router
