const { ValidationError } = require('../errors')
const FacultiesService = require('../services/faculties.service')

const renderFaculties = async (res, options) => {
    res.render('pages/faculties', {faculties: await FacultiesService.getFacultiesList(), ...options})
}

const FacultiesController = {
    async getFaculty(req, res) {
        // const facultyId = req.query.facultyId
        // let result
        // if(facultyId !== undefined)
        //     result = await FacultiesService.getFaculty(facultyId)
        // else
        //     result = await FacultiesService.getFacultiesList()
        console.log(req.query)
        await renderFaculties(res, req.query.updating && {updating: req.query.updating})
    },
    async createFaculty(req, res) {
        console.log(req.body)

        const {name} = req.body
        const facultyId = await FacultiesService.createFaculty({name})
        await renderFaculties(res)
    },
    async updateFaculty(req, res) {
        console.log(1)
        const facultyId = req.query.facultyId
        const {name} = req.body
        const facultyData = Object.fromEntries(Object.entries({name})
            .filter(property => property[1] !== undefined))
        const updated = await FacultiesService.updateFaculty(facultyId, facultyData)
        await renderFaculties(res)
    },
    async deleteFaculty(req, res) {
        const facultyId = req.query.facultyId
        const deleted = await FacultiesService.deleteFaculty(facultyId)
        await renderFaculties(res)
    }
}

module.exports = FacultiesController
