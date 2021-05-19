const GroupsService = require('../services/groups.service')

const renderGroups = async (res, facultyId, options) => {
    res.render('pages/groups', {groups: await GroupsService.getGroupsList(facultyId), facultyId: facultyId, ...options})
}

const GroupsController = {
    async getGroup(req, res) {
        const facultyId = req.query.facultyId
        // const groupId = req.query.groupId
        // let result
        // if(groupId !== undefined)
        //     result = await GroupsService.getGroup(groupId)
        // else
        //     result = await GroupsService.getGroupsList(facultyId)
        await renderGroups(res, facultyId, req.query.updating && {updating: req.query.updating})
    },
    async createGroup(req, res) {
        const facultyId = req.query.facultyId
        const {number} = req.body
        const groupId = await GroupsService.createGroup(facultyId, {number})
        await renderGroups(res, facultyId)
    },
    async updateGroup(req, res) {
        const facultyId = req.query.facultyId
        const groupId = req.query.groupId
        const {number} = req.body
        const groupData = Object.fromEntries(Object.entries({number})
            .filter(property => property[1] !== undefined))
        console.log({groupData})
        const updated = await GroupsService.updateGroup(groupId, groupData)
        await renderGroups(res, facultyId)
    },
    async deleteGroup(req, res) {
        const facultyId = req.query.facultyId
        const groupId = req.query.groupId
        const deleted = await GroupsService.deleteGroup(groupId)
        await renderGroups(res, facultyId)
    }
}

module.exports = GroupsController
