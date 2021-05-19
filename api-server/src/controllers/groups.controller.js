const GroupsService = require('../services/groups.service')

const GroupsController = {
    async getGroup(req, res) {
        const facultyId = req.query.facultyId
        res.json(await GroupsService.getGroupsList(facultyId))
    },
    async createGroup(req, res) {
        const facultyId = req.query.facultyId
        const {number} = req.body
        const groupId = await GroupsService.createGroup(facultyId, {number})
        res.end()
    },
    async updateGroup(req, res) {
        const groupId = req.query.groupId
        const {number} = req.body
        const groupData = Object.fromEntries(Object.entries({number})
            .filter(property => property[1] !== undefined))
        console.log({groupData})
        const updated = await GroupsService.updateGroup(groupId, groupData)
        res.end()
    },
    async deleteGroup(req, res) {
        const groupId = req.query.groupId
        const deleted = await GroupsService.deleteGroup(groupId)
        res.end()
    }
}

module.exports = GroupsController
