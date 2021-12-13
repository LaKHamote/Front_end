import { Container } from "./styles"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api_v1 } from "../../../services/api";
import { useAdminContext } from "../../../context/useAdminContext";




const NewType = () => {

    const {admin} = useAdminContext()

    const [newType, setnewType] = useState({})
    const navigate = useNavigate()

    const createType = async (e) => {
        if(admin.authentication_token) {
            e.preventDefault()
            const response = validateType(newType)
            if(response === "ok") {
                const response = await api_v1.post(`types/create`, {
                    type: {
                        name: newType.name,
                    }
                });
                if(response) {
                    alert("Categoria criada com sucesso")
                    navigate('/cardapio/todos')
                }
            }
            else {
                alert(response);
            }
        }
        else {
            alert("Você não está logado como admin")
        }
    }

    const validateType = (Type) => {
        if(!Type.name) {
            return "Coloque um nome"
        }
        else{
            return "ok"
        }
    }

    return (
        <Container onSubmit={createType}>
            <input onChange={(e) => setnewType({name: e.target.value})} placeholder="Nome pluralizado" type="text"/>
            <button type="submit">Criar</button>
        </Container>
    );
};

export default NewType;