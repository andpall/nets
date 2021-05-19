const Students = require('../models/students.model')

const StudentsService = {
    async createStudent(groupId, studentData) {
        const res = await Students.create({group_id: groupId, ...studentData})
        return res.id
    },
    async getStudent(studentId) {
        return await Students.findByPk(studentId)
    },
    async getStudentsList(groupId) {
        return await Students.findAll({where: {group_id: groupId}, order: [['id', 'ASC']]})
    },
    async updateStudent(studentId, studentData) {
        return await Students.update(studentData, {where: {id: studentId}})
    },
    async deleteStudent(studentId) {
        return await Students.destroy({where: {id: studentId}})
    }
}

module.exports = StudentsService
