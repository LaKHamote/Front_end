import { Container } from "../loginRegisterStyle";
import UserDefault from "../../../assets/user_default.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../../context/useUserContent";

const Login = () => {

    const [user, setUser] = useState({})

    const {login} = useUserContext()

    return (
        <Container>
            <img src={UserDefault} alt="Usuário Padrão"/>
            <input onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email" type="text"/>
            <input onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Senha" type="password"/>
            <button onClick={() => login(user)}>Login</button>
            <p>Ainda não tem uma conta?</p>
            <Link to="/register">Registre-se agora</Link>
        </Container>
    );
}

export default Login;