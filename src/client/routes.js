import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from './pages/index'
import Ch2 from './pages/Ch2'

export default (
    <Route path='/'>
        <IndexRoute component={Index} />
        <Route path='ch2' component={Ch2} />
    </Route>
)
