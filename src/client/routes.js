import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import Ch1 from './pages/Ch1'
import Ch2 from './pages/Ch2'
import SquareCase from './pages/SquareCase'

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Ch1} />
        <Route path='ch1' component={Ch1} />
        <Route path='ch2' component={Ch2} />
        <Route path='square-case' component={SquareCase} />
    </Route>
)
