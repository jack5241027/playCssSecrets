import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from './pages/index'

export default (
    <Route path='/'>
        <IndexRoute component={Index} />
    </Route>
)
