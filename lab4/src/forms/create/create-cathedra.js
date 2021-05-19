import Form from '../form'
import { Button, TextField } from '@material-ui/core'
import superagent from 'superagent'
import { useState } from 'react'
import { apiServerUrl } from '../../config'

const CreateCathedraForm = (props) => {
    const {facultyId} = props
    const [name, setName] = useState('')
    return (
        <Form>
            <TextField placeholder={'name'} value={name} onChange={e => setName(e.target.value)}/>
            <Button onClick={
                async () => {
                    await superagent
                        .post(apiServerUrl + '/cathedras')
                        .set('Authorization', localStorage.auth)
                        .query({facultyId})
                        .send({name})
                    setName('')
                    props.refreshCallback()
                }
            }>Create</Button>
        </Form>
    )
}

export default CreateCathedraForm
