const Groups = require('../models/group.model')

const GroupsService = {
    async createGroup(facultyId, groupData) {
        const res = await Groups.create({faculty_id: facultyId, ...groupData})
        return res.id
    },
    async getGroup(groupId) {
        return await Groups.findByPk(groupId)
    },
    async getGroupsList(facultyId) {
        return await Groups.findAll({where: {faculty_id: facultyId}, order: [['id', 'ASC']]})
    },
    async updateGroup(groupId, groupData) {
        return await Groups.update(groupData, {where: {id: groupId}})
    },
    async deleteGroup(groupId) {
        return await Groups.destroy({where: {id: groupId}})
    }
}

module.exports = GroupsService
