import { Button, Typography } from '@material-ui/core'
import Cathedra from '../components/cathedra'
import { useEffect, useState } from 'react'
import superagent from 'superagent'
import { useHistory, useParams } from 'react-router-dom'
import CreateCathedraForm from '../forms/create/create-cathedra'
import { apiServerUrl } from '../config'

const Cathedras = (props) => {
    const {facultyId} = useParams()
    const [cathedras, setCathedras] = useState([])
    const history = useHistory()
    const fetchData = async () => {
        try {
            const response = await superagent
                .get(apiServerUrl + '/cathedras')
                .query({facultyId})
                .set('Authorization', localStorage.token)
                .set('AuthType', localStorage.authType)
                .send()
            setCathedras(response.body)
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
            {cathedras.map(cathedra => (<Cathedra name={cathedra.name} facultyId={facultyId} key={cathedra.id} id={cathedra.id} refreshCallback={fetchData}/>))}
            <CreateCathedraForm facultyId={facultyId} refreshCallback={fetchData}/>
        </div>
    )
}

export default Cathedras
