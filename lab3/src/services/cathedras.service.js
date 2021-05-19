const request = require('superagent')

const CathedrasService = {
    async createCathedra(facultyId, cathedraData) {
        const res = await request
            .post(process.env.API_SERVER_URL + '/cathedras')
            .query({facultyId: facultyId})
            .send(cathedraData)
        return res.id
    },
    async getCathedrasList(facultyId) {
        return (await request
            .get(process.env.API_SERVER_URL + '/cathedras')
            .query({facultyId: facultyId})
            .send())
            .body
    },
    async updateCathedra(cathedraId, cathedraData) {
        return await request
            .put(process.env.API_SERVER_URL + '/cathedras')
            .query({cathedraId: cathedraId})
            .send(cathedraData)
    },
    async deleteCathedra(cathedraId) {
        return await request
            .delete(process.env.API_SERVER_URL + '/cathedras')
            .query({cathedraId: cathedraId})
            .send()
    }
}

module.exports = CathedrasService
