import { Container, FavouriteContainer, H2, Filter, Title } from "./styles";
import UserDefault from "../../assets/user_default.png"
import Favorite from "./Favorite";

const UserProfile = () => {
    const product = {
        photo: UserDefault,
        name: "item",
        price: "Preço"
    }
    return (
        <>
            <Title>Bem Vindo</Title>
            <Container>
                <div className="photo">
                    <img src={UserDefault} alt="Imagem do usuário"/>
                    <button>Trocar Foto</button>
                </div>
                <div className="info">
                    <p id="email">Email: email@test.com</p>
                    <p>Nome: nome</p>
                </div>
            </Container>
            <H2>Meus Favoritos</H2>
            <Filter>
                <label>Ordenar por:</label>
                <select>
                    <option>Preço(ordem crescente)</option>
                    <option>Preço(ordem crescente)</option>
                    <option>Alfabética(normal)</option>
                    <option>Alfabética(ao contrário)</option>
                </select>
            </Filter>
            <FavouriteContainer>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
                <Favorite product={product}/>
            </FavouriteContainer>
        </>
    );
}

export default UserProfile;