import { Container } from "./styles"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../context/useUserContent";
import { controller } from "../../services/api";
import ItemDefault from "../../assets/item_default.png"



const Admin = () => {

    const [newProduct, setnewProduct] = useState({})
    const { login } = useUserContext()
    const navigate = useNavigate()

    const createUser = async (e) => {
        e.preventDefault()
        const response = validateUser(newProduct)
        if(response === "ok") {
            const response = await controller.post(`products/create`, {
                product: {
                    name: newProduct.name,
                    type_name: newProduct.type_name,
                    price: newProduct.price,
                    quantity: newProduct.quantity,
                    description:newProduct.description
                }
            });
            if(response) {
                alert("Usuário criado com sucesso")
                login(newProduct)
                navigate('/user/profile')
            }
        }
        else {
            alert(response);
        }
    }

    const validateUser = (product) => {
        if(!product.name) {
            return "Coloque um nome"
        }
        else if(!product.type_name) {
            return "Coloque uma categoria"
        }
        else if(!product.price) {
            return "Coloque um preço"
        }
        else if(!product.quantity) {
            return "Coloque a quantidade do item"
        }
        else if(!product.description) {
            return "Coloque uma descrição"
        }
        else {
            return "ok"
        }
    }

    return (
        <Container onSubmit={createUser}>
            <img src={ItemDefault} alt="Usuário Padrão"/>
            <button>Adicionar Foto</button> 
            <input onChange={(e) => setnewProduct({...newProduct, name: e.target.value})} placeholder="Nome" type="text"/>
            <input onChange={(e) => setnewProduct({...newProduct, type_id: e.target.value})} placeholder="Type_id" type="text"/>
            <input onChange={(e) => setnewProduct({...newProduct, price: e.target.value})} placeholder="Price" type="text"/>
            <input onChange={(e) => setnewProduct({...newProduct, quantity: e.target.value})} placeholder="Quantity" type="text"/>
            <input onChange={(e) => setnewProduct({...newProduct, description: e.target.value})} placeholder="Description" type="text"/>
            <button type="submit">Criar</button>
            <Link to="/login">Criar nova categoria</Link>
        </Container>
    );
};

export default Admin;