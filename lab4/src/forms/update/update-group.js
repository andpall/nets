import Form from '../form'
import { Button, TextField } from '@material-ui/core'
import { apiServerUrl } from '../../config'
import superagent from 'superagent'
import { useState } from 'react'

const UpdateGroupForm = (props) => {
    const [number, setNumber] = useState('')
    return (
        <Form value={number} onChange={e => setNumber(e.target.value)}>
            <TextField placeholder={'number'}/>
            <Button onClick={async () => {
                props.onUpdated()
                await superagent
                    .put(apiServerUrl + '/groups')
                    .set('Authorization', localStorage.auth)
                    .query({groupId: props.id})
                    .send({number})
                props.refreshCallback()
            }}>Update</Button>
        </Form>
    )
}

export default UpdateGroupForm
