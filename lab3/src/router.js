const router = require('express').Router()
const fetch = require('node-fetch')
const CathedrasRouter = require('./routers/cathedras.router')
const FacultiesRouter = require('./routers/faculties.router')
const GroupsRouter = require('./routers/groups.router')
const StudentsRouter = require('./routers/students.router')

router.get('/', async (req, res) => {
    const {insult} = await (await fetch('https://evilinsult.com/generate_insult.php?lang=ru&type=json')).json()
    res.render('index', {name: insult})
})

router.use('/faculties', FacultiesRouter)
router.use('/cathedras', CathedrasRouter)
router.use('/groups', GroupsRouter)
router.use('/students', StudentsRouter)

module.exports = router
