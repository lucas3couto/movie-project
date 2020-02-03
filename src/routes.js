import React from 'react'
import { Switch, Route  } from 'react-router-dom'
import Home from './container/Home'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} /> 
    </Switch>
)

export default Routes