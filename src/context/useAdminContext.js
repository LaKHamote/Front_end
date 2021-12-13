import { createContext, useContext, useEffect, useState } from "react";
import { controller } from "../services/api";
import Cookie from 'js-cookie'
import { api_v1 } from "../services/api";
import { useNavigate } from "react-router";

const AdminContext = createContext({});

const AdminProvider = ({children}) => {

    const [admin, setAdmin] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const retrievedAdmin = Cookie.get('admin.info')
        if (retrievedAdmin) {
            setAdmin(JSON.parse(retrievedAdmin))
        }
    }, [])

    api_v1.defaults.headers.common[`X-Admin-Token`] = admin.authentication_token
    api_v1.defaults.headers.common[`X-Admin-Email`] = admin.email

    const loginAdmin = async (admin) => {
        controller.get("/admin/login", {
            params: {
                'email': admin.email,
                "password": admin.password
                
            }
        })
        .then( response => {
            setAdmin(response.data)
            Cookie.set('admin.info', JSON.stringify(response.data), { expires: 1 })
            navigate('/cardapio/todos')
        })
        .catch(error => {
            switch(error.message) {
                case "Request failed with status code 404":
                    alert("Admin não encontrado")
                    break;
                case "Request failed with status code 401":
                    alert("Senha incorreta")
                    break;
                default: 
                    console.log(error.message)
            }
        })
        
    }

    controller.defaults.headers.common[`X-Admin-Token`] = admin.authentication_token
    controller.defaults.headers.common[`X-Admin-Email`] = admin.email
    
    const logoutAdmin = async () => {
        
        controller.get("admin/logout")
        .then( response => {
            setAdmin({})
            Cookie.remove('admin.info')
            navigate('/login')
        })
    }

    return (
        <AdminContext.Provider value={{loginAdmin, admin, logoutAdmin}}>
            {children}
        </AdminContext.Provider>
    );
}

const useAdminContext = () => {
    const context = useContext(AdminContext);
    return context;
}

export { AdminProvider, useAdminContext };