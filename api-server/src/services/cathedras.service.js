const Cathedras = require('../models/cathedras.model')

const CathedrasService = {
    async createCathedra(facultyId, cathedraData) {
        const res = await Cathedras.create({faculty_id: facultyId, ...cathedraData})
        return res.id
    },
    async getCathedra(facultyId) {
        return await Cathedras.findByPk(facultyId)
    },
    async getCathedrasList(facultyId) {
        return await Cathedras.findAll({where: {faculty_id: facultyId}, order: [['id', 'ASC']]})
    },
    async updateCathedra(cathedraId, cathedraData) {
        return await Cathedras.update(cathedraData, {where: {id: cathedraId}})
    },
    async deleteCathedra(cathedraId) {
        return await Cathedras.destroy({where: {id: cathedraId}})
    }
}

module.exports = CathedrasService
