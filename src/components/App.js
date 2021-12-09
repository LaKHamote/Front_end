import Routes from "../routes";
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from "../context/useUserContent";


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
