import { Container } from "./styles"
import { useNavigate } from "react-router-dom";
import { api_v1 } from "../../../services/api";
import { useEffect, useState } from "react";
import ItemDafault from "../../../assets/item_default.png"
import { useAdminContext } from "../../../context/useAdminContext";



const NewProduct = () => {

    const {admin} = useAdminContext()
    const [newProduct, setnewProduct] = useState({})
    const navigate = useNavigate()

    const createUser = async (e) => {
        if(admin.authentication_token){
            e.preventDefault()
            const response = validateUser(newProduct)
            if(response === "ok") {
                const response = await api_v1.post(`products/create`, {
                    product: {
                        name: newProduct.name,
                        type_id: newProduct.type_id,
                        price: newProduct.price,
                        quantity: newProduct.quantity,
                        description:newProduct.description
                    }
                });
                if(response) {
                    alert("Produto criado com sucesso")
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

    const validateUser = (Product) => {
        console.log(Product)
        if(!Product.name) {
            return "Coloque um nome"
        }
        else if(!Product.type_id || Product.type_id === "false") {
            return "Coloque uma categoria"
        }
        else if(!Product.price) {
            return "Coloque um preço"
        }
        else if(!Product.quantity) {
            return "Coloque a quantidade do item"
        }
        else if(!Product.description) {
            return "Coloque uma descrição"
        }
        else {
            return "ok"
        }
    }

    const [types, setTypes] = useState([])

    const fetchTypes = async () => {
        const response = await api_v1.get(`types`)   
        setTypes(response.data)
        }
    useEffect(() => {
        fetchTypes()
    }, [])

    return (
        <Container onSubmit={createUser}>
            <img src={ItemDafault} alt="Usuário Padrão"/>   
            <input onChange={(e) => setnewProduct({...newProduct, name: e.target.value})} placeholder="Nome" type="text"/>
            <select onChange={(e) => setnewProduct({...newProduct, type_id: e.target.value})}>
                    <option value={false}>{"--Selecione uma categoria--"}</option>
                    {types.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
            </select>
            <input onChange={(e) => setnewProduct({...newProduct, price: e.target.value})} placeholder="Price" type="text"/>
            <input onChange={(e) => setnewProduct({...newProduct, quantity: e.target.value})} placeholder="Quantity" type="text"/>
            <input onChange={(e) => setnewProduct({...newProduct, description: e.target.value})} placeholder="Description" type="text"/>
            <button type="submit">Criar</button>
        </Container>
    );
};

export default NewProduct;