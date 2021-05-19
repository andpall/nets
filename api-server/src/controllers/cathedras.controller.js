const { ValidationError } = require('../errors')
const CathedrasService = require('../services/cathedras.service')

const CathedrasController = {
    async getCathedra(req, res) {
        const facultyId = req.query.facultyId
        res.json(await CathedrasService.getCathedrasList(facultyId))
    },
    async createCathedra(req, res) {
        const facultyId = req.query.facultyId
        const {name} = req.body
        console.log(facultyId)
        const cathedraId = await CathedrasService.createCathedra(facultyId, {name})
        res.end()
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
        await res.end()
    },
    async deleteCathedra(req, res) {
        const facultyId = req.query.facultyId
        const cathedraId = req.query.cathedraId
        const deleted = await CathedrasService.deleteCathedra(cathedraId)
        res.end()
    }
}

module.exports = CathedrasController
