import { useEffect, useState } from "react"
import { api_v1, controller }from "../../services/api.js"
import { Container, FavouriteContainer, H2, Filter, Title } from "./styles";
import UserDefault from "../../assets/user_default.png"
import ItemCard from "../Cardapio/ItemCard"
import { useUserContext } from "../../context/useUserContent";



const UserProfile = () => {
    
    const {user, changeUserImage } = useUserContext()

    const [Favourites, setFavourites] = useState([])

    const [ image, setImage ] = useState([])

    const [changePhoto, setchangePhoto] = useState(false)


    const fetchFavourites = async () => {
        const response = await api_v1.get("favourites")
        setFavourites(response.data.sort(sortByPrice))
    }

    useEffect(() => {
        if(user.authentication_token) {
            fetchFavourites()
        }
    }, [user])

    const sortByPrice = (a, b) => (a.product.price - b.product.price)
    
    const sortByName = (a, b) => {
        let x = a.product.name.toLowerCase();
        let y = b.product.name.toLowerCase();
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    }

    const sort = (method) => {
        switch(method) {
            case "pn":
                setFavourites([...Favourites.sort(sortByPrice)])
                break;
            case "pr":
                setFavourites([...Favourites.sort(sortByPrice).reverse()])
                break;
            case "nn":
                setFavourites([...Favourites.sort(sortByName)])
                break;
            case "nr":
                setFavourites([...Favourites.sort(sortByName).reverse()])
                break;
            default:
                console.log("Error")
        }
    }
    console.log(user)

    const addImage = async (e) => {
        e.preventDefault()
        if(image.length > 0){
            try{
                const formData = new FormData()
                formData.append('image[]', image[0])
    
                const response = await controller.post(`user/add_image/${user.id}`, formData)
                if(response.data){
                    setImage(response.data)
                    changeUserImage()
                }
            }catch(error){
                alert(error)   
            }
        }
    }

    
       

    return (
        <>
            <Title>Bem Vindo</Title>
            <Container changePhoto={changePhoto}>
                <div className="photo">
                    <img src={user.profile_picture_url?  controller.defaults.baseURL + user.profile_picture_url : UserDefault} alt="Imagem do usuário"/>
                    <button className="mudarFoto" 
                            onClick={(e) =>{setchangePhoto(true)}} >
                            Gostaria de trocar sua foto?
                    </button>
                    <form onSubmit={addImage} className="confirmarFoto">
                        <input onChange={(e) => setImage(e.target.files)} type="file"/>
                        <button type='submit'>Confirmar Imagem</button>
                        <button type='submit'>Manter foto</button>
                    </form>
                </div>
                <div className="info">
                    <p id="email">Email: {user && user.email}</p>
                    <p>Nome: {user && user.name}</p>
                </div>
            </Container>
            <H2>Meus Favoritos</H2>
            <Filter>
                <label>Ordenar por:</label>
                <select onChange={(e) => sort(e.target.value)}>
                    <option value="pn">Preço(ordem crescente)</option>
                    <option value="pr">Preço(ordem decrescente)</option>
                    <option value="nn">Alfabética(normal)</option>
                    <option value="nr">Alfabética(ao contrário)</option>
                </select>
            </Filter>
            <FavouriteContainer>
                {Favourites.map((item, index) => (
                    <ItemCard key={index} id={item.product.id} name={item.product.name} price={item.product.price} photo={item.product.photo_url}/>
                ))}
            </FavouriteContainer>
        </>
    );
}

export default UserProfile;