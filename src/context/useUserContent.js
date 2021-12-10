import { createContext, useContext, useState } from "react";
import { controller } from "../services/api";

const UserContext = createContext({});

const UserProvider = ({children}) => {

    const [user, setUser] = useState({})

    const login = async (user) => {
        const userResponse = await controller.get("/user/login", {
            params: {
                'email': user.email,
                "password": user.password
                
            }
        });
        setUser(userResponse.data)
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