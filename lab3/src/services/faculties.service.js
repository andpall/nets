const request = require('superagent')

const FacultiesService = {
    async createFaculty(facultyData) {
        const res = await request
            .post(process.env.API_SERVER_URL + '/faculties')
            .send(facultyData)
        return res.id
    },
    async getFacultiesList() {
        console.log(await request
            .get(process.env.API_SERVER_URL + '/faculties')
            .send())
        return (await request
            .get(process.env.API_SERVER_URL + '/faculties')
            .send())
            .body
    },
    async updateFaculty(facultyId, facultyData) {
        return await request
            .put(process.env.API_SERVER_URL + '/faculties')
            .query({facultyId: facultyId})
            .send(facultyData)
    },
    async deleteFaculty(facultyId) {
        return await request
            .delete(process.env.API_SERVER_URL + '/faculties')
            .query({facultyId: facultyId})
            .send()
    }
}

module.exports = FacultiesService
