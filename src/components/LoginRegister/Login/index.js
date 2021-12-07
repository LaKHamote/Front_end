import { Container } from "../loginRegisterStyle";
import UserDefault from "../../../assets/user_default.png"
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <Container>
            <img src={UserDefault} alt="Usuário Padrão"/>
            <input placeholder="Email" type="text"/>
            <input placeholder="Senha" type="password"/>
            <button>Login</button>
            <p>Ainda não tem uma conta?</p>
            <Link to="/register">Registre-se agora</Link>
        </Container>
    );
}

export default Login;