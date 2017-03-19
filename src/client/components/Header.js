import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <label className='header__menu float-left'>Menu</label>
                    <div className='header__user float-right'>
                        <img className='header__user-img' src='#' />
                    </div>
                    <div className='header__link float-right'>
                        <a>Github</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
