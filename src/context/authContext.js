

import { createContext, useReducer, useEffect, useState } from 'react';
import { initURL } from '../urls';
import { io } from 'socket.io-client';

export const AuthContext = createContext();


export const authReducer = (state, action) => {
    if (action.type === 'LOGIN') return { user: action.payload };
    else if ( action.type === 'LOGOUT' ) return { user: null };
    else return state;
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });
    const [ socket, setSocket ] = useState(null);
    const [ onlineUsers, setOnlineUsers ] = useState(null);

    async function  Init() {
        
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if(!user) return;
            
            
            const response = await fetch(initURL, {
                headers: {'Authorization': `Bearer ${user.token}`} 
            });
            
            const json = await response.json();
            if( response.ok ) dispatch({ type: 'LOGIN', payload: user });
            else 
            {
                localStorage.removeItem('user');
                dispatch( { type: 'LOGOUT' } );
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {  Init(); }, [])

    useEffect( () => {
        if(state.user)
        {
            console.log("logged in");
            const client = io( 'http://localhost:4000', {
                query: {
                    auth: `Bearer ${state.user.token}`
                }
            } )
            setSocket( client );
            if(socket && !socket.connected ) socket.connect();
        }
        else
        {
            if(socket && socket.connected) socket.disconnect();
        }
        
    }, [state.user] )

    //console.log('AuthContext state:', state)
    
    return (
        <AuthContext.Provider value={{ ...state, dispatch, socket }}>
        { children }
        </AuthContext.Provider>
    )

}

