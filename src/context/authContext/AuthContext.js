import React,{ createContext,useReducer } from 'react';
import { authReducer } from './authReducer';

export const AuthContext = createContext();

const initialState = {
    user: '',
    isLoggin: false
}

const AuthProvider = ({ children }) => {
    
    const [authState, dispatch] = useReducer(authReducer, initialState)
    const { user, isLoggin } = authState;
    const signIn = () => {
        dispatch({ type: 'signIn' });
    }
    return (
        <AuthContext.Provider value={{
            user,
            isLoggin,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthProvider;
