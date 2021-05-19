const request = require('superagent')

const StudentsService = {
    async createStudent(groupId, studentData) {
        const res = await request
            .post(process.env.API_SERVER_URL + '/students')
            .query({groupId: groupId})
            .send(studentData)
        return res.id
    },
    async getStudentsList(groupId) {
        return (await request
            .get(process.env.API_SERVER_URL + '/students')
            .query({groupId: groupId})
            .send())
            .body
    },
    async updateStudent(studentId, studentData) {
        return await request
            .put(process.env.API_SERVER_URL + '/students')
            .query({studentId: studentId})
            .send(studentData)
    },
    async deleteStudent(studentId) {
        return await request
            .delete(process.env.API_SERVER_URL + '/students')
            .query({studentId: studentId})
            .send()
    }
}

module.exports = StudentsService
