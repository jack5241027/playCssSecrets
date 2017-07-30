import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                <Header />
                { this.props.children }
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.objectOf(PropTypes.any)
}

export default App
