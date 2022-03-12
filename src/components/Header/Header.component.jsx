import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import {ReactComponent as Logo} from './../../Assets/crown.svg'

const Header = () => (
    <div className='header'>
<Link className='logo-container' to="/">
    <Logo className='logo' />
    </Link>
    <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='' className='option'>CONTACT</Link>
        <Link className='option'></Link>
        </div>
    </div>
    
)

export default Header;