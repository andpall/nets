import { Typography, Button } from '@material-ui/core'
import Component from '../component'
import UpdateFacultyForm from '../forms/update/update-faculty'
import { useState } from 'react'
import superagent from 'superagent'
import { apiServerUrl } from '../config'

const Faculty = (props) => {
    const [updating, setUpdating] = useState(false)

    return (
        <Component>
            <Typography>{props.name}</Typography>
            <Button href={`/faculty/${props.id}/cathedras`}>Cathedras</Button>
            <Button href={`/faculty/${props.id}/groups`}>Groups</Button>
            {updating && <UpdateFacultyForm onUpdated={()=>setUpdating(false)} {...props}/>}
            {!updating && <Button onClick={() => setUpdating(true)}>Update</Button>}
            <Button onClick={async () => {
                await superagent
                    .delete(apiServerUrl + '/faculties')
                    .set('Authorization', localStorage.auth)
                    .query({facultyId: props.id})
                    .send()
                console.log('deleted')
                props.refreshCallback()
            }}>Delete</Button>
        </Component>
    )
}

export default Faculty
