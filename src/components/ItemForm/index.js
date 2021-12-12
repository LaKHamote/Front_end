import React, { useEffect, useState } from 'react'
import { api_v1, controller } from '../../services/api'
import { ButtonDiv, CategoriesDiv, Container, Form, ProductDiv } from './styles'
import ProductCard from './ProductCard'
import CategoryCard from './CategoryCard'
import ItemDefault from '../../assets/item_default.png'

const ProductForm = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const placeholderProduct = {
        id: 0,
        name: "Novo produto",
        price: 0,
        description: "Coloque uma descrição para o produto"
    }
    const [selectedType, setSelectedType] = useState("products")
    const [selectedItem, setSelectedItem] = useState(placeholderProduct)
    const getProducts = async () => {
        api_v1.get('products').then((response) => {
            setProducts([...response.data, placeholderProduct])
        })
    }

    const getCategories = async () => {
        api_v1.get('types').then((response) => {
            setCategories(response.data)
        })
    }

    useEffect (() => {
        if(selectedType === "products"){
            getProducts();
        }
        else
            getCategories();
    }, [selectedType])

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
                <Form>
                    <img src={selectedItem.photo? controller.defaults.baseURL+selectedItem.photo : ItemDefault} alt="foto do produto"/>
                    <input type="file"/>
                    <input placeholder="Nome" type="text" value={selectedItem.name}/>
                    <input placeholder="Preço" type="text" value={selectedItem.price}/>
                    <textarea placeholder="Descrição" type="text" value={selectedItem.description}/>
                    <button>Adicionar/Alterar Produto</button>
                    <button>Remover Produto</button>
                </Form>
                :
                <Form>

                </Form>
            }
        </Container>
    )
}

export default ProductForm
