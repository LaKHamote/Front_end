import { Container } from "../loginRegisterStyle";
import UserDefault from "../../../assets/user_default.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { controller } from "../../../services/api";
import { useUserContext } from "../../../context/useUserContent";

const Register = () => {

    const [newUser, setNewUser] = useState({})
    const {login} = useUserContext()
    const navigate = useNavigate()

    const createUser = async (e) => {
        e.preventDefault()
        const response = validateUser(newUser)
        if(response === "ok") {
            const response = await controller.post(`user/create`, {
                user: {
                    name: newUser.name,
                    email: newUser.email,
                    password: newUser.password
                }
            });
            if(response) {
                alert("Usuário criado com sucesso")
                login(newUser)
                navigate('/user/profile')
            }
        }
        else {
            alert(response);
        }
    }

    const validateUser = (user) => {
        if(newUser.password !== newUser.confirm_password) {
            return "As senhas não correspondem"
        }
        else if(!user.name) {
            return "Coloque um nome"
        }
        else if(!user.email) {
            return "Coloque um email"
        }
        else if(!user.password) {
            return "Coloque uma senha"
        }
        else if(!user.confirm_password) {
            return "Confirme sua senha"
        }
        else {
            return "ok"
        }
    }

    return (
        <Container onSubmit={createUser}>
            <img src={UserDefault} alt="Usuário Padrão"/>
            <input onChange={(e) => setNewUser({...newUser, name: e.target.value})} placeholder="Nome" type="text"/>
            <input onChange={(e) => setNewUser({...newUser, email: e.target.value})} placeholder="Email" type="text"/>
            <input onChange={(e) => setNewUser({...newUser, password: e.target.value})} placeholder="Senha" type="password"/>
            <input onChange={(e) => setNewUser({...newUser, confirm_password: e.target.value})} placeholder="Confirmar Senha" type="password"/>
            <button type="submit">Criar</button>
            <p>Já tem uma conta?</p>
            <Link to="/login">Faça login</Link>
        </Container>
    );
};

export default Register;