import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Create User By Using Email-Password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign-In With GitHub Pop-Up
    const signInWithGitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    // Sign-In With Google Pop-Up
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Sign-In With Facebook Pop-Up
    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }


    // Login User By Using Email-Password
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Logout User
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    // Set Logged User By Using onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);



    const authInfo = { user, loading, createUser, userLogin, userLogOut, signInWithGoogle, signInWithGitHub, signInWithFacebook };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;