const router = require('express').Router()
const fetch = require('node-fetch')
const auth = require('./middleware/auth.middleware')
const AuthRouter = require('./routers/auth.router')
const CathedrasRouter = require('./routers/cathedras.router')
const FacultiesRouter = require('./routers/faculties.router')
const GroupsRouter = require('./routers/groups.router')
const StudentsRouter = require('./routers/students.router')

router.get('/', async (req, res) => {
    const {insult} = await (await fetch('https://evilinsult.com/generate_insult.php?lang=ru&type=json')).json()
    res.render('index', {name: insult})
})

router.use('/', AuthRouter)
router.use('/faculties', auth, FacultiesRouter)
router.use('/cathedras', auth, CathedrasRouter)
router.use('/groups', auth, GroupsRouter)
router.use('/students', auth, StudentsRouter)

module.exports = router
