import React, { useEffect, useState } from 'react'
import { api_v1, controller } from '../../services/api'
import { ButtonDiv, CategoriesDiv, Container, Form, ProductDiv } from './styles'
import ProductCard from './ProductCard'
import CategoryCard from './CategoryCard'
import ItemDefault from '../../assets/item_default.png'
import { useNavigate } from 'react-router'

const ProductForm = () => {
    const [products, setProducts] = useState([])

    const [categories, setCategories] = useState([])

    const [selectedType, setSelectedType] = useState("products")

    const [selectedItem, setSelectedItem] = useState({})

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
        e.preventDefault()
        const response = validateProduct()
        if(response === "ok") {
            api_v1.defaults.headers.common[`X-Admin-Token`] = "dJ8zLtntmHrh_h4cgPD4"
            api_v1.defaults.headers.common[`X-Admin-Email`] = "boss@final"
            const api_response = await api_v1.patch(`products/update/${selectedItem.id}`,{
                product: {
                    name: selectedItem.name,
                    price: selectedItem.price,
                    description: selectedItem.description
                }
            }).then(response => {
                alert("Produto alterado com sucesso")
                window.location.reload()
            }).catch((e) =>
                console.log(e)
            )
        }
        else {
            alert(response)
        }
    }

    const validateProduct = () => {
        if(!selectedItem.name) {
            return "Coloque um nome válido"
        }
        else if(!selectedItem.price) {
            return "Coloque um preço válido"
        }
        else if(!selectedItem.description) {
            return "Coloque uma descrição válida"
        }
        else {
            return "ok"
        }
    }

    const editCategory = async (e) => {
        e.preventDefault()
        const response = validateCategory()
        if(e.nativeEvent.submitter.name === "edit_button") {
            if(response === "ok") {
                api_v1.defaults.headers.common[`X-Admin-Token`] = "dJ8zLtntmHrh_h4cgPD4"
                api_v1.defaults.headers.common[`X-Admin-Email`] = "boss@final"
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
            api_v1.defaults.headers.common[`X-Admin-Token`] = "dJ8zLtntmHrh_h4cgPD4"
            api_v1.defaults.headers.common[`X-Admin-Email`] = "boss@final"
            const response = await api_v1.delete(`types/delete/${selectedItem.id}`
            ).then(response => {
                alert("Categoria deletada com sucesso")
                window.location.reload()
            }).catch((e) =>
                console.log(e)
            )
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
                        return <ProductCard setSelectedItem={setSelectedItem} selectedItem={selectedItem?selectedItem.id===product.id:false} key={"p" + index} id={product.id} name={product.name} price={product.price} photo={product.photo_url} description={product.description}/>
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
                <Form onSubmit={editProduct}>
                    <img src={selectedItem.photo? controller.defaults.baseURL+selectedItem.photo : ItemDefault} alt="foto do produto"/>
                    <input type="file"/>
                    <input onChange={(e) => setSelectedItem({...selectedItem, name: e.target.value})} placeholder="Nome" type="text" value={selectedItem.name}/>
                    <input onChange={(e) => setSelectedItem({...selectedItem, price: e.target.value})} placeholder="Preço" type="text" value={selectedItem.price}/>
                    <textarea onChange={(e) => setSelectedItem({...selectedItem, description: e.target.value})} placeholder="Descrição" type="text" value={selectedItem.description}/>
                    <button type='submit'>Alterar Produto</button>
                </Form>
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
