import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import superagent from 'superagent'
import Student from '../components/student'
import CreateStudentForm from '../forms/create/create-student'
import { apiServerUrl } from '../config'

const Students = (props) => {
    const {groupId} = useParams()
    const [students, setStudents] = useState([])

    const history = useHistory()
    const fetchData = async () => {
        try {
            const response = await superagent
                .get(apiServerUrl + '/students')
                .query({groupId})
                .set('Authorization', localStorage.auth)
                .send()
            setStudents(response.body)
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
    }, [groupId])

    return (
        <div>
            {students.map(student => (
                <Student
                    name={student.name}
                    sex={student.sex}
                    age={student.age}
                    groupId={groupId}
                    key={student.id}
                    id={student.id}
                    refreshCallback={fetchData}/>
            ))}
            <CreateStudentForm groupId={groupId} refreshCallback={fetchData}/>
        </div>
    )
}

export default Students
