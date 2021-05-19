import Component from '../component'
import { Button, Typography } from '@material-ui/core'
import UpdateStudentForm from '../forms/update/update-student'
import { useState } from 'react'
import superagent from 'superagent'
import { apiServerUrl } from '../config'

const Student = (props) => {
    const [updating, setUpdating] = useState(false)
    return (
        <Component>
            <Typography>{props.name}</Typography>
            <Typography>SEX: {props.sex}</Typography>
            <Typography>Age: {props.age}</Typography>
            {updating && <UpdateStudentForm onUpdated={()=>setUpdating(false)} {...props}/>}
            {!updating && <Button onClick={() => setUpdating(true)}>Update</Button>}
            <Button onClick={async () => {
                await superagent
                    .delete(apiServerUrl + '/students')
                    .set('Authorization', localStorage.auth)
                    .query({studentId: props.id})
                    .send()
                props.refreshCallback()
            }}>Delete</Button>
        </Component>
    )
}

export default Student
