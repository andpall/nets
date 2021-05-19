import { Button, Typography } from '@material-ui/core'
import Component from '../component'
import UpdateCathedraForm from '../forms/update/update-cathedra'
import { useState } from 'react'
import superagent from 'superagent'
import { apiServerUrl } from '../config'

const Cathedra = (props) => {
    const [updating, setUpdating] = useState(false)

    return (
        <Component>
            <Typography>{props.name}</Typography>
            {updating && <UpdateCathedraForm onUpdated={()=>setUpdating(false)} {...props}/>}
            {!updating && <Button onClick={() => setUpdating(true)}>Update</Button>}
            <Button onClick={async () => {
                await superagent
                    .delete(apiServerUrl + '/cathedras')
                    .set('Authorization', localStorage.auth)
                    .query({cathedraId: props.id})
                    .send()
                props.refreshCallback()
            }}>Delete</Button>
        </Component>
    )
}

export default Cathedra
