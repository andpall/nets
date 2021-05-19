import Form from '../form'
import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'
import superagent from 'superagent'
import { apiServerUrl } from '../../config'

const CreateStudentForm = (props) => {
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
                    await superagent
                        .post(apiServerUrl + '/students')
                        .set('Authorization', localStorage.auth)
                        .query({groupId})
                        .send({name, sex, age})
                    setName('')
                    setSex('М')
                    setAge('')
                    props.refreshCallback()
                }
            }>Create</Button>
        </Form>
    )
}

export default CreateStudentForm
