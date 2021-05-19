import LoginForm from '../forms/login-form'
import { apiServerUrl } from '../config'
import superagent from 'superagent'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import FacebookLogin from 'react-facebook-login'
import LoginGithub from 'react-login-github'
import InstagramLogin from "react-instagram-oauth"

const Login = (props) => {
    const history = useHistory()
    return (
        <div>
            <LoginForm onSubmit={async (email, password) => {
                const token = (await superagent
                    .post(`${apiServerUrl}/login`)
                    .send({email, password}))
                    .body
                    .token
                await localStorage.setItem('authType', 'jwt')
                await localStorage.setItem('token', token)
                history.push('/faculties')
            }}/>
            <Button href={'/signup'}>Signup</Button>

            <FacebookLogin
                appId="963787901094355"
                autoLoad={true}
                fields="name,email"
                onClick={() => {}}
                callback={async (response) => {
                    console.log(response)
                    await localStorage.setItem('token', response.accessToken)
                    await localStorage.setItem('authType', 'facebook')
                    history.push('/faculties')
                }
                } />
            {/*<LoginGithub clientId="5ff6ffee010678c369d1"*/}
            {/*             onSuccess={(...data) => {*/}
            {/*                 console.log(data)*/}
            {/*             }}*/}
            {/*             onFailure={(...data) => {*/}
            {/*                 console.log(data)*/}
            {/*             }}/>*/}
            {/*<InstagramLogin*/}
            {/*    authCallback={(...data) => {*/}
            {/*        console.log(data)*/}
            {/*    }}*/}
            {/*    appId={'3977788518969183'}*/}
            {/*    appSecret={'3f5a731ca64169933e22709a79cfdef7'}*/}
            {/*    redirectUri={'http://localhost:3001'}*/}
            {/*/>*/}
        </div>
    )
}

export default Login
