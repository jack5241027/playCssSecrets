import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <label className='header__menu float-left'>Menu</label>
                    <div className='header__user float-right'>
                        <Link className='header__link' to='ch1'>Ch1</Link>
                        <Link className='header__link' to='ch2'>Ch2</Link>
                        <Link className='header__link' to='square-case'>Square-case</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
