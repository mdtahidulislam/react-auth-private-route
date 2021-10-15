import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Please Register</h1> <br />
            <input type="email" name="" id="" /> <br />
            <input type="password" name="" id="" /> <br />
            <input type="submit" value="submit" /> <br />
            <Link to='/login'>Already Registered?</Link>
        </div>
    );
};

export default Register;