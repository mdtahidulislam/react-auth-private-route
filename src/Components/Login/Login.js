import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>Please Login</h1><br />
            <button onClick={signInUsingGoogle}>Google Login</button> <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;