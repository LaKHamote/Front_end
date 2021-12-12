import { Container } from "./styles"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api_v1 } from "../../../services/api";




const NewType = () => {

    const [newType, setnewType] = useState({})
    const navigate = useNavigate()

    const createType = async (e) => {
        e.preventDefault()
        const response = validateType(newType)
        api_v1.defaults.headers.common[`X-Admin-Token`] = "xFbXxwizfxs9a9vU-5sz"
        api_v1.defaults.headers.common[`X-Admin-Email`] = "boss@final"
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
            <input onChange={(e) => setnewType({name: e.target.value})} placeholder="Nome" type="text"/>
            <button type="submit">Criar</button>
        </Container>
    );
};

export default NewType;