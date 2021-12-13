import { useUserContext } from '../../context/useUserContent';
import { controller } from '../../services/api';
import {Container} from './styles'
import UserDefault from "../../assets/user_default.png"
import { Link } from 'react-router-dom';
import { useAdminContext } from '../../context/useAdminContext';


const Nav = () => {

  const { admin } = useAdminContext()
  const { user, logout } = useUserContext()
  const { logoutAdmin } = useAdminContext()

  function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
  }
  const isLogado = !isEmpty(user)

  const makeLogout = () => {
    if(admin.authentication_token) {
      logoutAdmin()
    }
    else {
      logout()
    }
  }

  return (
    <Container isLogado={isLogado}>
        <nav id="menu-h">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cardapio/todos">Cardapio</Link></li>
            <li className="check-in"><Link to="/login">Login</Link></li>
            <li className={`${admin.authentication_token?"check-in":"check-out"} logout`}><a onClick={() => makeLogout()}>Logout</a></li>
            <li className="check-in" ><Link to="/register">Registre-se agora</Link></li>
            <li className="check-out userInfo">
              <Link to="/user/profile"> 
                <span>{user.name}</span>
                <img src={user.profile_picture_url? controller.defaults.baseURL + user.profile_picture_url : UserDefault} alt="Foto de Perfil"/>
              </Link>
            </li>
          </ul>
        </nav>
    </Container>
  );
}

export default Nav;
