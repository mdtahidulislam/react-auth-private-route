import React from 'react';
import { Link } from 'react-router-dom'
import useAuth from '../../Hook/useAuth';

const Header = () => {
    const { user, handleSignOut } = useAuth()
    return (
        <div>
            {/* create Menu */}
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            {user.email && <button onClick={handleSignOut}>Log out</button>}
        </div>
    );
};

export default Header;