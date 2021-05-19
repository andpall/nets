const request = require('superagent')

const GroupsService = {
    async createGroup(facultyId, groupData) {
        const res = await request
            .post(process.env.API_SERVER_URL + '/groups')
            .query({facultyId: facultyId})
            .send(groupData)
        return res.id
    },
    async getGroupsList(facultyId) {
        return (await request
            .get(process.env.API_SERVER_URL + '/groups')
            .query({facultyId: facultyId})
            .send())
            .body
    },
    async updateGroup(groupId, groupData) {
        return await request
            .put(process.env.API_SERVER_URL + '/groups')
            .query({groupId: groupId})
            .send(groupData)
    },
    async deleteGroup(groupId) {
        return await request
            .delete(process.env.API_SERVER_URL + '/groups')
            .query({groupId: groupId})
            .send()
    }
}

module.exports = GroupsService
