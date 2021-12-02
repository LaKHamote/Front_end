import { Container } from "../loginRegisterStyle";
import UserDefault from "../../../assets/user_default.png"

const Login = () => {

    return (
        <Container>
            <img src={UserDefault} alt="Usuário Padrão"/>
            <input placeholder="Email" type="text"/>
            <input placeholder="Senha" type="password"/>
            <button>Login</button>
            <p>Ainda não tem uma conta?</p>
            <a href="/register">Registre-se agora</a>
        </Container>
    );
}

export default Login;