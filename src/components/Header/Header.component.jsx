import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import {ReactComponent as Logo} from './../../Assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='header'>
<Link className='logo-container' to="/">
    <Logo className='logo' />
    </Link>
    <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='' className='option'>CONTACT</Link>
        {
        currentUser ?
        <div className='option' onClick={() => {auth.signOut()}}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
        }
        </div>
    </div>
    
)

export default Header;