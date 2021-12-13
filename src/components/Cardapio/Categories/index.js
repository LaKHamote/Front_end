import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAdminContext } from "../../../context/useAdminContext.js"
import { api_v1 } from "../../../services/api.js"
import { BarraLateral } from "./styles.js"

const Categories = () => {

    const {admin} = useAdminContext()
    const isAdmin = admin.authentication_token? true: false
    const [categories, setCategories] = useState([])

    useEffect (() => {
        api_v1.get('types').then((response) => {
            setCategories(response.data)
        })
      }, [])

    const returnProperName = (name) => {
        switch(name) {
            case "macarrao":
                return "Macarrões"
            default:
                return name.slice(0,1).toUpperCase() + name.slice(1) + "s"
                
        }
    }

    return (
        <BarraLateral isAdmin={isAdmin}>
            <div>
                <Link to="/cardapio/todos">Todos</Link>
                { categories.map((category, index) => (
                    <Link key={index} to={`/cardapio/${category.name}`}>{returnProperName(category.name)}</Link>
                ))}
                <Link className="edicao" to="/edit/products">Editar</Link>
                <Link className="edicao" to="/NewType">Criar nova Categoria</Link>
            </div>
        </BarraLateral>
    )
}

export default Categories
