import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Operation from '../Operation'
import Summary from '../Summary'

export default props => (
    <Switch>
        <Route path='/operation'>
            <Operation />
        </Route>
        <Route path='/summary'>
            <Summary />
        </Route>
        <Route exact path='/'>
            <Redirect to='/operation' />
        </Route>
    </Switch>
)