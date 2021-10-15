import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Please Login</h1><br />
            <button>Google Login</button> <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;