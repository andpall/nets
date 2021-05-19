const StudentsService = require('../services/students.service')

const StudentsController = {
    async getStudent(req, res) {
        const groupId = req.query.groupId
        res.json(await StudentsService.getStudentsList(groupId))
    },
    async createStudent(req, res) {
        const groupId = req.query.groupId
        const {name, age, sex} = req.body
        const studentId = await StudentsService.createStudent(groupId, {name, age, sex})
        res.end()
    },
    async updateStudent(req, res) {
        const studentId = req.query.studentId
        const {name, age, sex} = req.body
        const studentData = Object.fromEntries(Object.entries({name, age, sex})
            .filter(property => property[1] !== undefined))
        console.log({studentData})
        const updated = await StudentsService.updateStudent(studentId, studentData)
        res.end()
    },
    async deleteStudent(req, res) {
        const studentId = req.query.studentId
        const deleted = await StudentsService.deleteStudent(studentId)
        res.end()
    }
}

module.exports = StudentsController
