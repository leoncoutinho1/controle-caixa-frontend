import React from 'react'
import { Switch, Route } from 'react-router-dom'

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
    </Switch>
)