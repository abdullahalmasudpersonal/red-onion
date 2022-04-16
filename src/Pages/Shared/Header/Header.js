import React from 'react';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav class="header">
                <div>
                    <Link href='/' to=''>
                        <img src={logo} width="130" height="" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to=''>Login</Link>
                    <Link to=''>Sign in</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;

/* 

 <div className='header container'>
            <div>
                <img src={logo} height='40px' alt='' />
            </div>
            <div className='header-btn'>
                <button>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </div>

*/
