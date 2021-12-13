import { createContext, useContext, useEffect, useState } from "react";
import { controller } from "../services/api";
import Cookie from 'js-cookie'
import { api_v1 } from "../services/api";
import { useNavigate } from "react-router";

const UserContext = createContext({});

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const retrievedUser = Cookie.get('user.info')
        if (retrievedUser) {
            setUser(JSON.parse(retrievedUser))
        }
    }, [])

    api_v1.defaults.headers.common[`X-User-Token`] = user.authentication_token
    api_v1.defaults.headers.common[`X-User-Email`] = user.email

    const login = async (user) => {
        controller.get("/user/login", {
            params: {
                'email': user.email,
                "password": user.password
                
            }
        })
        .then( response => {
            setUser(response.data)
            Cookie.set('user.info', JSON.stringify(response.data), { expires: 1 })
            navigate('/user/profile')
        })
        .catch(error => {
            switch(error.message) {
                case "Request failed with status code 404":
                    alert("Usuário não encontrado")
                    break;
                case "Request failed with status code 401":
                    alert("Senha incorreta")
                    break;
                default: 
                    console.log(error.message)
            }
        })
        
    }

    controller.defaults.headers.common[`X-User-Token`] = user.authentication_token
    controller.defaults.headers.common[`X-User-Email`] = user.email
    
    const logout = async () => {
        
        controller.get("user/logout")
        .then( response => {
            setUser({})
            Cookie.remove('user.info')
            navigate('/login')
        })
    }

    return (
        <UserContext.Provider value={{login, user, logout}}>
            {children}
        </UserContext.Provider>
    );
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export { UserProvider, useUserContext };