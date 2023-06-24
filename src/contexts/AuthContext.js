import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export function AuthProvider({ children }){
    
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(false);

    function signIn(){
        return new Promise(resolve => {
            setLoading(true);
            setTimeout(function(){
                setLogged(true);
                setLoading(false);
            }, 1500)
        })
    }
    
    return(
        <AuthContext.Provider value = {{logged, signIn, loading}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;