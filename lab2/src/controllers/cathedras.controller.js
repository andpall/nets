const { ValidationError } = require('../errors')
const CathedrasService = require('../services/cathedras.service')

const renderCathedras = async (res, facultyId, options) => {
    res.render('pages/cathedras', {cathedras: await CathedrasService.getCathedrasList(facultyId), facultyId: facultyId, ...options})
}

const CathedrasController = {
    async getCathedra(req, res) {
        const facultyId = req.query.facultyId
        // const cathedraId = req.query.cathedraId
        // let result
        // if(cathedraId !== undefined)
        //     result = await CathedrasService.getCathedra(cathedraId)
        // else
        await renderCathedras(res, facultyId, req.query.updating && {updating: req.query.updating})
    },
    async createCathedra(req, res) {
        const facultyId = req.query.facultyId
        const {name} = req.body
        console.log(facultyId)
        const cathedraId = await CathedrasService.createCathedra(facultyId, {name})
        await renderCathedras(res, facultyId)
    },
    async updateCathedra(req, res) {
        console.log(1)
        const facultyId = req.query.facultyId
        const cathedraId = req.query.cathedraId
        const {name} = req.body
        const cathedraData = Object.fromEntries(Object.entries({name})
            .filter(property => property[1] !== undefined))
        console.log({cathedraData})
        const updated = await CathedrasService.updateCathedra(cathedraId, cathedraData)
        await renderCathedras(res, facultyId)
    },
    async deleteCathedra(req, res) {
        const facultyId = req.query.facultyId
        const cathedraId = req.query.cathedraId
        const deleted = await CathedrasService.deleteCathedra(cathedraId)
        await renderCathedras(res, facultyId)
    }
}

module.exports = CathedrasController
