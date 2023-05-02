import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase.config';
export const AuthProviderContext=createContext(null)
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const user =null
    const authInfo={user}
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;