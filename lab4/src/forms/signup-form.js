import { Button, TextField } from '@material-ui/core'
import Form from './form'
import { useState } from 'react'

const SignupForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    return (
        <Form>
            <TextField placeholder={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
            <TextField placeholder={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
            <TextField placeholder={'repeat password'} value={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)}/>
            <Button onClick={() => password === passwordRepeat && props.onSubmit(email, password)}>Sign up</Button>
        </Form>
    )
}

export default SignupForm
