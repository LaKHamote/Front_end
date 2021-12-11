import { useUserContext } from '../../context/useUserContent';
import { controller } from '../../services/api';
import {Container} from './styles'
import UserDefault from "../../assets/user_default.png"


const Nav = () => {

  const { user } = useUserContext()


  return (
    <Container>
        <nav id="menu-h">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Cardapio</a></li>
            <li><a href="">Login</a></li>
            <li><a href=""> <img src={user.profile_picture? controller.defaults.baseURL + user.profile_picture : UserDefault} alt="Foto de Perfil"/></a></li>
          </ul>
        </nav>
    </Container>
  );
}

export default Nav;
