import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/imgs/logo1.PNG'

const Header = () => (
    <div className="header">
        <Link to='/'>
            <img className='logo' src={logo} alt="" />
        </Link>
        <p className="email">
            <i class="fas fa-envelope"></i>
            <a href="mailto:scubatuba@scubatuba.com.br">scubatuba@scubatuba.com.br</a>
        </p>
        <p className="tel">
            <i className="fas fa-phone-square"></i> (12) 3832-5226 / (12) 997673040
        </p>
        <a href="https://www.facebook.com/ScubatubaMergulhoETurismo/" target="_blank">
            <i className="fab fa-facebook-square face"></i></a>
    </div>
)

export default Header;