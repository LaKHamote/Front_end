import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api_v1 } from "../../../services/api.js"
import { BarraLateral } from "./styles.js"

const Categories = () => {

    const isAdmin = true 
    const [types, setTypes] = useState([])

    const fetchTypes = async () => {
        const response = await api_v1.get(`types`)   
        setTypes(response.data)
        }
    useEffect(() => {
        fetchTypes()
    }, [])

    return (
        <BarraLateral isAdmin={isAdmin}>
            <div>
                <Link to="/cardapio/todos">Todos</Link>
                {types.map((item, index) => (
                    <Link to={`/cardapio/${item.name}`}>{item.name}</Link>
                    ))}
                <Link className="edicao" to="/NewType">Criar nova Categoria</Link>
            </div>
        </BarraLateral>
    )
}

export default Categories
