import { Button, TextField } from '@material-ui/core'
import Form from './form'
import { useState } from 'react'

const LoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form>
            <TextField placeholder={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
            <TextField placeholder={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
            <Button onClick={() => props.onSubmit(email, password)}>Login</Button>
        </Form>
    )
}

export default LoginForm
