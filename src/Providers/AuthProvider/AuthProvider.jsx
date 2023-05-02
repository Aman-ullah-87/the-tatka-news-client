import React, { createContext } from 'react';
export const AuthProvider=createContext(null)
const AuthProvider = ({children}) => {
    const authInfo={}
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProvider;