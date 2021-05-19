import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import superagent from 'superagent'
import Group from '../components/group'
import CreateGroupForm from '../forms/create/create-group'
import { apiServerUrl } from '../config'

const Groups = (props) => {
    const {facultyId} = useParams()
    const [groups, setGroups] = useState([])

    const history = useHistory()
    const fetchData = async () => {
        try {
            const response = await superagent
                .get(apiServerUrl + '/groups')
                .query({facultyId})
                .set('Authorization', localStorage.auth)
                .send()
            setGroups(response.body)
        } catch (e) {
            if(e.message === 'Unauthorized') {
                alert('Unauthorized')
                history.push('/login')
            }
            else throw e
        }
    }

    useEffect(() => {
        fetchData()
    }, [facultyId])

    return (
        <div>
            {groups.map(group => (<Group number={group.number} facultyId={facultyId} key={group.id} id={group.id} refreshCallback={fetchData}/>))}
            <CreateGroupForm facultyId={facultyId} refreshCallback={fetchData}/>
        </div>
    )
}

export default Groups
