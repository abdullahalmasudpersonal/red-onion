import React from 'react';
import CoustomLink from '../../CoustomLink/CoustomLink';
import './Foods.css';

const Foods = () => {
    return (
        <div>
            <nav className='navber'>
                <CoustomLink to='/breakfast'>Breakfast</CoustomLink>
                <CoustomLink to='/lunch'>Lunch</CoustomLink>
                <CoustomLink to='/dinner'>Dinner</CoustomLink>
            </nav>
        </div>
    );
};

export default Foods;