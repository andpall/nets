import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Faculties from './pages/faculties'
import Cathedras from './pages/cathedras'
import Groups from './pages/groups'
import Students from './pages/students'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Button } from '@material-ui/core'
import {useHistory} from 'react-router-dom'


function App() {
    const history = useHistory()
    return (
        <div>
            <h1>Добро пожаловать</h1>

            <Router>
                <Switch>
                    <Route exact path="/">
                        {localStorage.auth ? <Redirect to="/faculties"/> : <Redirect to="/login"/>}
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/signup">
                        <Signup/>
                    </Route>
                    <Route exact path="/faculties">
                        <Faculties/>
                    </Route>
                    <Route exact path="/faculty/:facultyId/cathedras">
                        <Cathedras/>
                    </Route>
                    <Route exact path="/faculty/:facultyId/groups">
                        <Groups/>
                    </Route>
                    <Route exact path="/group/:groupId/students">
                        <Students/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
