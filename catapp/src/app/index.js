import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import CatList from '../pages/CatList';
import CatInsert from '../pages/CatInsert';
import CatUpdate from '../pages/CatUpdate'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/list" exact component={CatList} />
                <Route path="/create" exact component={CatInsert} />
                <Route path="/update/:id" exact component={CatUpdate}/>
            </Switch>
        </Router>
    )
}

export default App