import { createContext, useContext, useEffect, useState } from "react";
import { controller } from "../services/api";
import Cookie from 'js-cookie'
import { api_v1 } from "../services/api";

const UserContext = createContext({});

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const retrievedUser = Cookie.get('user.info')
        if (retrievedUser) {
            setUser(JSON.parse(retrievedUser))
        }
    }, [])

    api_v1.defaults.headers.common[`X-User-Token`] = user.authentication_token
    api_v1.defaults.headers.common[`X-User-Email`] = user.email

    const login = async (user) => {
        const userResponse = await controller.get("/user/login", {
            params: {
                'email': user.email,
                "password": user.password
                
            }
        });
        setUser(userResponse.data)
        Cookie.set('user.info', JSON.stringify(userResponse.data), { expires: 1 })
    }

    return (
        <UserContext.Provider value={{login, user}}>
            {children}
        </UserContext.Provider>
    );
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export { UserProvider, useUserContext };