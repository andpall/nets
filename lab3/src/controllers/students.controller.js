const StudentsService = require('../services/students.service')

const renderStudents = async (res, groupId, options) => {
    res.render('pages/students', {students: await StudentsService.getStudentsList(groupId), groupId: groupId, ...options})
}

const StudentsController = {
    async getStudent(req, res) {
        // const groupId = req.id
        const groupId = req.query.groupId
        // let result
        // if(studentId !== undefined)
        //     result = await StudentsService.getStudent(studentId)
        // else
        //     result = await StudentsService.getStudentsList(groupId)
        await renderStudents(res, groupId, req.query.updating && {updating: req.query.updating})
    },
    async createStudent(req, res) {
        const groupId = req.query.groupId
        const {name, age, sex} = req.body
        const studentId = await StudentsService.createStudent(groupId, {name, age, sex})
        await renderStudents(res, groupId)
    },
    async updateStudent(req, res) {
        const groupId = req.query.groupId
        const studentId = req.query.studentId
        const {name, age, sex} = req.body
        const studentData = Object.fromEntries(Object.entries({name, age, sex})
            .filter(property => property[1] !== undefined))
        console.log({studentData})
        const updated = await StudentsService.updateStudent(studentId, studentData)
        await renderStudents(res, groupId)
    },
    async deleteStudent(req, res) {
        const groupId = req.query.groupId
        const studentId = req.query.studentId
        const deleted = await StudentsService.deleteStudent(studentId)
        await renderStudents(res, groupId)
    }
}

module.exports = StudentsController
