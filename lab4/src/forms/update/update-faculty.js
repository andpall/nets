import Form from '../form'
import { Button, TextField } from '@material-ui/core'
import superagent from 'superagent'
import { apiServerUrl } from '../../config'
import { useState } from 'react'

const UpdateFacultyForm = (props) => {
    const [name, setName] = useState('')
    return (
        <Form>
            <TextField placeholder={'name'} value={name} onChange={e => setName(e.target.value)}/>
            <Button onClick={async () => {
                props.onUpdated()
                await superagent
                    .put(apiServerUrl + '/faculties')
                    .set('Authorization', localStorage.auth)
                    .query({facultyId: props.id})
                    .send({name})
                props.refreshCallback()
            }}>Update</Button>
        </Form>
    )
}

export default UpdateFacultyForm
