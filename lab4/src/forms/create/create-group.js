import Form from '../form'
import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'
import superagent from 'superagent'
import { apiServerUrl } from '../../config'

const CreateGroupForm = (props) => {
    const {facultyId} = props
    const [number, setNumber] = useState('')
    return (
        <Form>
            <TextField placeholder={'number'} value={number} onChange={e => setNumber(e.target.value)}/>
            <Button onClick={
                async () => {
                    await superagent
                        .post(apiServerUrl + '/groups')
                        .set('Authorization', localStorage.auth)
                        .query({facultyId})
                        .send({number})
                    setNumber('')
                    props.refreshCallback()
                }
            }
            >Create</Button>
        </Form>
    )
}

export default CreateGroupForm
