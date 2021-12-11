import { Container } from "./styles";
import UserDefault from "../../../assets/user_default.png"

const Favorite = ({name, price, photo}) => {

    return (
        <Container>
            <img src={photo? "http://localhost:3000"+photo : UserDefault} alt="imagem do produto"/>
            <p>{name}</p>
            <p>{price}</p>
        </Container>
    );
}

export default Favorite;