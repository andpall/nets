import LoginForm from '../forms/login-form'
import SignupForm from '../forms/signup-form'
import superagent from 'superagent'
import { apiServerUrl } from '../config'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
    const history = useHistory()
    return (
        <div>
            <SignupForm onSubmit={async (email, password) => {
                const response = await superagent
                    .post(`${apiServerUrl}/signup`)
                    .send({email, password})
                history.push('/login')
            }}/>
        </div>
    )
}

export default Signup
