import { Container } from "../loginRegisterStyle";
import UserDefault from "../../../assets/user_default.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../../context/useUserContent";
import { useAdminContext } from "../../../context/useAdminContext";

const Login = () => {

    const [user, setUser] = useState({})

    const {login} = useUserContext()
    const {loginAdmin} = useAdminContext()


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!user.email) {
            alert('Coloque um email válido')
        }
        else if (!user.password) {
            alert('Coloque uma senha')
        }
        else {
            if(user.email === "boss@final") {
                const response = loginAdmin(user)
                const response2 = login(user)
            }
            else {
                const response = login(user)
            }
        }
    }


    return (
        <Container onSubmit={handleSubmit}>
            <img src={UserDefault} alt="Usuário Padrão"/>
            <input onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email" type="text"/>
            <input onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Senha" type="password"/>
            <button type="submit">Login</button>
            <p>Ainda não tem uma conta?</p>
            <Link to="/register">Registre-se agora</Link>

        </Container>
    );
}

export default Login;