const Faculties = require('../models/faculties.model')

const FacultiesService = {
    async createFaculty(facultyData) {
        const res = await Faculties.create(facultyData)
        return res.id
    },
    async getFaculty(facultyId) {
        return await Faculties.findByPk(facultyId)
    },
    async getFacultiesList() {
        return await Faculties.findAll({order: [['id', 'ASC']]})
    },
    async updateFaculty(facultyId, facultyData) {
        return await Faculties.update(facultyData, {where: {id: facultyId}})
    },
    async deleteFaculty(facultyId) {
        return await Faculties.destroy({where: {id: facultyId}})
    }
}

module.exports = FacultiesService
