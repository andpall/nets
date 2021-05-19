import Form from '../form'
import { Button, TextField } from '@material-ui/core'
import superagent from 'superagent'
import { apiServerUrl } from '../../config'
import { useState } from 'react'

const UpdateStudentForm = (props) => {
    const {groupId} = props

    const [name, setName] = useState('')
    const [sex, setSex] = useState('М')
    const [age, setAge] = useState('')

    return (
        <Form>
            <TextField placeholder={'name'} value={name} onChange={e => setName(e.target.value)}/>
            <TextField placeholder={'sex'} value={sex} onChange={e => setSex(e.target.value)}/>
            <TextField placeholder={'age'} value={age} onChange={e => setAge(e.target.value)}/>
            <Button onClick={
                async () => {
                    props.onUpdated()
                    await superagent
                        .put(apiServerUrl + '/students')
                        .set('Authorization', localStorage.auth)
                        .query({studentId: props.id})
                        .send({name, sex, age})
                    props.refreshCallback()
                }
            }>Update</Button>
        </Form>
    )
}

export default UpdateStudentForm
