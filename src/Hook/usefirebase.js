import initAuthentication from "../Firebase/init.firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useState } from "react";

// init firebase
initAuthentication();

// create firebase authentication code base
const useFirebase = () => {
    // create user state
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // get firebase auth
    const auth = getAuth();

    // create provider
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return {
        user,
        error,
        signInUsingGoogle
    }
}

export default useFirebase;