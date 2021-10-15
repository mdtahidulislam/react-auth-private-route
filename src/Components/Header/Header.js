import React from 'react';
import { Link } from 'react-router-dom'
import useFirebase from '../../Hook/usefirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase()
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