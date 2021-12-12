import { Route, Routes } from 'react-router-dom'
import UserProfile from '../components/UserProfile'
import Cardapio from '../pages/Cardapio'
import ItemForm from '../pages/ItemForm'
import ItemInfo from '../pages/ItemInfo'
import Login from '../pages/Login'
import Register from '../pages/Register'

const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cardapio/:categorie' element={<Cardapio/>}/>
            <Route path='/user/profile' element={<UserProfile/>}/>
            <Route path='/iteminfo/:id' element={<ItemInfo/>}/>
            <Route path='/edit/:item' element={<ItemForm/>}/>
        </Routes>
    )
}

export default RoutesApp
