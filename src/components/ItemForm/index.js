import React, { useEffect, useState } from 'react'
import { api_v1, controller } from '../../services/api'
import { ButtonDiv, CategoriesDiv, Container, Form, ProductDiv } from './styles'
import ProductCard from './ProductCard'
import CategoryCard from './CategoryCard'
import ItemDefault from '../../assets/item_default.png'
import { useAdminContext } from '../../context/useAdminContext'
import { useNavigate } from 'react-router'

const ProductForm = () => {

    const {admin} = useAdminContext()

    const [products, setProducts] = useState([])

    const [categories, setCategories] = useState([])

    const [selectedType, setSelectedType] = useState("products")

    const [selectedItem, setSelectedItem] = useState({})
    
    const [ image, setImage ] = useState([])

    const navigate = useNavigate()

    const getProducts = async () => {
        api_v1.get('products').then((response) => {
            setProducts([...response.data])
            setSelectedItem({...response.data[0], photo: response.data[0].photo_url})
        })
    }

    const getCategories = async () => {
        api_v1.get('types').then((response) => {
            setCategories(response.data)
            setSelectedItem(response.data[0])
        })
    }

    useEffect (() => {
        if(selectedType === "products"){
            getProducts();
        }
        else
            getCategories();
    }, [selectedType])

    const editProduct = async (e) => {
        if(admin.authentication_token) {
            e?.preventDefault()
            const response = validateProduct()
            if(image.length > 0){
                addImage(e)
            }
            if(e.nativeEvent.submitter.name === "edit_button") {
                if(response === "ok") {
                    const api_response = await api_v1.patch(`products/update/${selectedItem.id}`,{
                        product: {
                                name: selectedItem.name,
                                price: selectedItem.price,
                                quantity: selectedItem.quantity,
                                description: selectedItem.description
                            }
                    }).then(response => {
                        alert("Produto alterada com sucesso")
                        navigate("/cardapio/todos")
                    }).catch((e) =>
                        console.log(e)
                    )
                }
                else {
                    alert(response)
                }
            }
            else {
                const response = await api_v1.delete(`products/delete/${selectedItem.id}`
                ).then(response => {
                    alert("Produto deletado com sucesso")
                    navigate("/cardapio/todos")
                }).catch((e) =>
                    console.log(e)
                )
            }
        }
        else {
            alert("Você não está logado como admin")
        }
    }

    const validateProduct = () => {
        if(!selectedItem.name) {
            return "Coloque um nome válido"
        }
        else if(!selectedItem.price) {
            return "Coloque um preço válido"
        }
        else if(!selectedItem.quantity) {
            return "Coloque uma quantia válida"
        }
        else if(!selectedItem.description) {
            return "Coloque uma descrição válida"
        }
        else {
            return "ok"
        }
    }

    const editCategory = async (e) => {
        if(admin.authentication_token) {
            e?.preventDefault()
            const response = validateCategory()
            if(e.nativeEvent.submitter.name === "edit_button") {
                if(response === "ok") {
                    const api_response = await api_v1.patch(`types/update/${selectedItem.id}`,{
                        type: {
                            name: selectedItem.name
                        }
                    }).then(response => {
                        alert("Categoria alterada com sucesso")
                        window.location.reload()
                    }).catch((e) =>
                        console.log(e)
                    )
                }
                else {
                    alert(response)
                }
            }
            else {
                const response = await api_v1.delete(`types/delete/${selectedItem.id}`
                ).then(response => {
                    alert("Categoria deletada com sucesso")
                    window.location.reload()
                }).catch((e) =>
                    console.log(e)
                )
            }
        }
        else {
            alert("Você não está logado como admin")
        }
    }

    const validateCategory = () => {
        if(!selectedItem.name) {
            return "Coloque um nome válido"
        }
        else {
            return "ok"
        }
    }

    const addImage = async (e) => {
        e.preventDefault()
        try{
            const formData = new FormData()
            formData.append('image[]', image[0])

            const response = await api_v1.post(`products/add_image/${selectedItem.id}`, formData)
            if(response.data){
                setImage(response.data)
            }
        }catch(error){
            alert(error)   
        }
    }
       



    return (
        <Container>
            <ButtonDiv selectedType={selectedType}>
                <button onClick={() => setSelectedType("products")} className='products'>Produtos</button>
                <button onClick={() => setSelectedType("categories")} className='categories'>Categorias</button>
            </ButtonDiv>
            <h1>Selecione {selectedType==="products"? "o produto": "a categoria"}</h1>
            {
                selectedType==="products"?
                <ProductDiv>
                    {products.map((product, index) => {
                        return <a href="#target">
                        <ProductCard setSelectedItem={setSelectedItem} selectedItem={selectedItem?selectedItem.id===product.id:false} key={"p" + index} id={product.id} name={product.name} price={product.price} photo={product.photo_url} quantity={product.quantity} description={product.description}/>
                                </a>
                    })}
                </ProductDiv>
                : 
                <CategoriesDiv selectedItem={selectedItem}>
                    {categories.map((category, index) => {
                        return <CategoryCard setSelectedItem={setSelectedItem} selectedItem={selectedItem?selectedItem.id===category.id:false} key={"c" + index} id={category.id} name={category.name}/>
                    })}
                </CategoriesDiv>
            }
            {
            selectedType==="products"?
            <a name="target" >
                <Form onSubmit={editProduct}>
                    <img src={selectedItem.photo? controller.defaults.baseURL+selectedItem.photo : ItemDefault} alt="foto do produto"/>
                    <input onChange={(e) => setImage(e.target.files)} type="file"/>
                    <input onChange={(e) => setSelectedItem({...selectedItem, name: e.target.value})} placeholder="Nome" type="text" value={selectedItem.name}/>
                    <input onChange={(e) => setSelectedItem({...selectedItem, price: e.target.value})} placeholder="Preço" type="text" value={selectedItem.price}/>
                    <input onChange={(e) => setSelectedItem({...selectedItem, quantity: e.target.value})} placeholder="Quantity" type="text" value={selectedItem.quantity}/>
                    <textarea onChange={(e) => setSelectedItem({...selectedItem, description: e.target.value})} placeholder="Descrição" type="text" value={selectedItem.description}/>
                    <button type='submit' name='edit_button' >Alterar Produto</button>
                    <button type='submit' name='delete_button'>Deletar Produto</button>
                </Form>
            </a>
                        
            :
            
            <Form onSubmit={editCategory}>
                <input onChange={(e) => setSelectedItem({...selectedItem, name: e.target.value})} value={selectedItem.name} placeholder="Nome" type="text"/>
                <button type='submit' name='edit_button'>Alterar Categoria</button>
                <button type='submit' name='delete_button'>Deletar Categoria</button>
            </Form>
            }
        </Container>
    )
}

export default ProductForm
