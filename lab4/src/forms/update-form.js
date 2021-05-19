import Form from './form'
import { Button } from '@material-ui/core'

const UpdateForm = (props) => {
    return (
        <Form>
            {props.children}
            <Button onClick={() => props.onUpdatedAction()}>Update</Button>
        </Form>
    )
}

export default UpdateForm
