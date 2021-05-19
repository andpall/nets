import { Button, Typography } from '@material-ui/core'
import Faculty from '../components/faculty'
import React, { useEffect, useState } from 'react'
import superagent from 'superagent'
import CreateFacultyForm from '../forms/create/create-faculty'
import { apiServerUrl } from '../config'
import { useHistory } from 'react-router-dom'

const Faculities = (props) => {
    const [faculties, setFaculties] = useState([])
    const history = useHistory()
    const fetchData = async () => {
        try {
            const response = await superagent
                .get(apiServerUrl + '/faculties')
                .set('Authorization', localStorage.token)
                .set('AuthType', localStorage.authType)
                .send()
            setFaculties(response.body)
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
    }, [])
    return (
        <div>
            <Button onClick={() => {
                localStorage.auth = null
                history.push('/login')
            }
            }>Log out</Button>
            {faculties.map(faculty => (<Faculty name={faculty.name} id={faculty.id} key={faculty.id} refreshCallback={fetchData}/>))}
            <CreateFacultyForm refreshCallback={fetchData}/>
        </div>
    )
}

export default Faculities
