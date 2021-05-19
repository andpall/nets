import Component from '../component'
import { Button, Typography } from '@material-ui/core'
import UpdateGroupForm from '../forms/update/update-group'
import { useState } from 'react'
import superagent from 'superagent'
import { apiServerUrl } from '../config'

const Group = (props) => {
    const [updating, setUpdating] = useState(false)

    return (
        <Component>
            <Typography>{props.number}</Typography>
            <Button href={`/group/${props.id}/students`}>Students</Button>
            {updating && <UpdateGroupForm onUpdated={()=>setUpdating(false)} {...props}/>}
            {!updating && <Button onClick={() => setUpdating(true)}>Update</Button>}
            <Button onClick={async () => {
                await superagent
                    .delete(apiServerUrl + '/groups')
                    .set('Authorization', localStorage.auth)
                    .query({groupId: props.id})
                    .send()
                props.refreshCallback()
            }}>Delete</Button>
        </Component>
    )
}

export default Group
