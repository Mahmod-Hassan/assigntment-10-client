import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // sign in with google method
    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // create new user by register
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // login already existed user
    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOUt
    const logOut = () => {
        return signOut(auth);
    }
    // observer whether user exist or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, signInWithGoogle, createNewUser, loginWithEmailPassword, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;