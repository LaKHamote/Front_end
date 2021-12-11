import { Container } from "../loginRegisterStyle";
import UserDefault from "../../../assets/user_default.png"
import { Link } from "react-router-dom";

const Register = () => {

    return (
        <Container>
            <img src={UserDefault} alt="Usuário Padrão"/>
            <input placeholder="Nome" type="text"/>
            <input placeholder="Email" type="text"/>
            <input placeholder="Senha" type="password"/>
            <input placeholder="Confirmar Senha" type="password"/>
            <button>Criar</button>
            <p>Já tem uma conta?</p>
            <Link to="/login">Faça login</Link>
        </Container>
    );
};

export default Register;