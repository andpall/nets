const FacultiesService = require('../services/faculties.service')

const FacultiesController = {
    async getFaculty(req, res) {
        res.json(await FacultiesService.getFacultiesList())
    },
    async createFaculty(req, res) {
        console.log(req.body)

        const {name} = req.body
        const facultyId = await FacultiesService.createFaculty({name})
        res.end()
    },
    async updateFaculty(req, res) {
        console.log(1)
        const facultyId = req.query.facultyId
        const {name} = req.body
        const facultyData = Object.fromEntries(Object.entries({name})
            .filter(property => property[1] !== undefined))
        const updated = await FacultiesService.updateFaculty(facultyId, facultyData)
        res.end()
    },
    async deleteFaculty(req, res) {
        const facultyId = req.query.facultyId
        const deleted = await FacultiesService.deleteFaculty(facultyId)
        res.end()
    }
}

module.exports = FacultiesController
