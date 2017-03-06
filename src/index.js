import './client/sass/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import routes from './client/routes'
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'

const target = document.getElementById('root')
const browserHistory = useRouterHistory(createHistory)({
    basename: process.env.PUBLIC_URL || '/Users/JackChan/workspace/playCssSecrets/index.html'
})

ReactDOM.render(
    <Router history={browserHistory}>
      {routes}
    </Router>
, target)
